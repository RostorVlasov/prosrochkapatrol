import { CollectionConfig } from 'payload'

export const Shops: CollectionConfig = {
  slug: 'shops',
  admin: {
    useAsTitle: 'store_name',
    hidden: ({ user }) => {
      return user?.role !== 'admin' && user?.role !== 'editor' && user?.role !== 'inspector'
    },
  },
  labels: {
    singular: 'Магазин',
    plural: 'Магазины',
  },
  access: {
    create: ({ req: { user } }) => {
      if (!user) return false
      return user.role === 'admin' || user.role === 'editor' || user.role === 'inspector'
    },
    read: ({ req: { user } }) => {
      if (user?.role === 'admin' || user?.role === 'editor' || user?.role === 'inspector') return true;
      return {
        'admin_panel.status': { equals: 'published' }
      };
    },
    update: ({ req: { user } }) => {
      if (!user) return false
      if (user.role === 'admin') return true
      if (user.role === 'editor' || user.role === 'inspector') {
        return { 'admin_panel.created_by': { equals: user.id } }
      }
      return false
    },
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  hooks: {
    beforeChange: [
      // Сделали функцию async, чтобы можно было делать запрос к БД
      async ({ req, data, operation }) => {
        if (!data.admin_panel) {
          data.admin_panel = {}
        }

        if (operation === 'create' && req.user) {
          data.admin_panel.created_by = req.user.id

          try {
            const badgesResult = await req.payload.find({
              collection: 'badges',
              where: {
                ownerName: {
                  equals: req.user.id,
                },
              },
              depth: 0,
              limit: 1,
            })

            if (badgesResult.totalDocs > 0 && badgesResult.docs[0]) {
              data.admin_panel.author_badge = badgesResult.docs[0].id
            } else {
              data.admin_panel.author_badge = null
            }
          } catch (error) {
            console.error('Ошибка при поиске бейджа:', error)
            data.admin_panel.author_badge = null
          }
        }

        if (req.user?.role === 'inspector' || req.user?.role === 'editor') {
          if (data.admin_panel.status === 'published' || data.admin_panel.status === 'rejected') {
            data.admin_panel.status = 'pending'
          }
        }

        const qualityDeduction = typeof data.quality_total_deduction === 'number' ? data.quality_total_deduction : 0
        data.quality_final_score = Math.max(0, Math.min(5, 5 - qualityDeduction))

        if (data.storage_has_violations) {
          const storageDeduction = typeof data.storage_total_deduction === 'number' ? data.storage_total_deduction : 0
          data.storage_final_score = Math.max(0, Math.min(5, 5 - storageDeduction))
        } else {
          data.storage_final_score = 5
          data.storage_total_deduction = 0
        }

        const quality = typeof data.quality_final_score === 'number' ? data.quality_final_score : 0
        const storage = typeof data.storage_final_score === 'number' ? data.storage_final_score : 0
        const totalScore = Math.round(((quality + storage) / 2) * 10) / 10

        data.total_score = totalScore

        return data
      },
    ],
  },
  fields: [
    {
      name: 'store_name',
      label: 'Название магазина',
      type: 'text',
      required: true,
      admin: {
        description: 'Официальное название торговой точки',
      },
    },
    {
      name: 'address',
      label: 'Адрес',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Полный адрес магазина включая город и улицу',
      },
    },
    {
      name: 'date_checked',
      label: 'Дата проверки',
      type: 'date',
      required: true,
      admin: { description: 'Дата фактического проведения проверки' },
    },
    {
      name: 'reason_type',
      label: 'Тип проверки',
      type: 'select',
      required: true,
      options: [
        { label: 'Плановая', value: 'planned' },
        { label: 'Жалоба', value: 'complaint' },
      ],
      admin: { description: 'Основание для проведения проверки' },
    },
    {
      name: 'complaint_text',
      label: 'Текст жалобы',
      type: 'textarea',
      admin: {
        description: 'Содержание жалобы, послужившей основанием для проверки',
        condition: (data) => data?.reason_type === 'complaint',
      },
    },
    {
      label: 'Оценка качества',
      type: 'collapsible',
      fields: [
        {
          name: 'quality_total_deduction',
          label: 'Суммарный штраф за качество',
          type: 'number',
          min: 0,
          max: 5,
          validate: (value: unknown) => {
            if (value === undefined || value === null || value === '') return true
            const num = Number(value)
            if (isNaN(num)) return 'Введите число'
            if (num < 0) return 'Штраф не может быть меньше 0'
            if (num > 5) return 'Штраф не может быть больше 5'
            return true
          },
          admin: { description: 'Сумма баллов, снятых за нарушения качества (от 0 до 5). Итоговая оценка рассчитается автоматически.' },
        },
        {
          name: 'quality_facts',
          label: 'Факты нарушений качества',
          type: 'json',
          admin: { 
            description: 'Зафиксированные факты нарушений в формате JSON-массива',
            components: {
              Field: '@/app/components/CalculatedFields/TagInputField'
            }
          },
        },
        {
          name: 'quality_free_text',
          label: 'Комментарий по качеству',
          type: 'textarea',
          admin: { description: 'Произвольный комментарий инспектора по разделу качества' },
        },
        {
          name: 'quality_violated_articles',
          label: 'Нарушенные статьи (качество)',
          type: 'json',
          admin: { 
            description: 'Список нарушенных нормативных статей в формате JSON-массива',
            components: {
              Field: '@/app/components/CalculatedFields/TagInputField'
            }
          },
        },
        {
          name: 'quality_final_score',
          label: 'Итоговая оценка качества',
          type: 'number',
          min: 0,
          max: 5,
          admin: {
            description: 'Вычисляется автоматически: 5 - штраф',
            readOnly: true,
            components: {
              Field: '@/app/components/CalculatedFields/QualityFinalScore'
            }
          },
        },
      ],
    },
    {
      label: 'Оценка хранения',
      type: 'collapsible',
      fields: [
        {
          name: 'storage_has_violations',
          label: 'Есть нарушения хранения',
          type: 'checkbox',
          admin: { description: 'Отметьте, если выявлены нарушения условий хранения товаров' },
        },
        {
          name: 'storage_total_deduction',
          label: 'Суммарный штраф за хранение',
          type: 'number',
          min: 0,
          max: 5,
          validate: (value: unknown) => {
            if (value === undefined || value === null || value === '') return true
            const num = Number(value)
            if (isNaN(num)) return 'Введите число'
            if (num < 0) return 'Штраф не может быть меньше 0'
            if (num > 5) return 'Штраф не может быть больше 5'
            return true
          },
          admin: {
            description: 'Сумма баллов, снятых за нарушения хранения (от 0 до 5). Итоговая оценка рассчитается автоматически.',
            condition: (data) => data?.storage_has_violations === true,
          },
        },
        {
          name: 'storage_facts',
          label: 'Факты нарушений хранения',
          type: 'json',
          admin: {
            components: {
              Field: '@/app/components/CalculatedFields/TagInputField'
            },
            description: 'Зафиксированные факты нарушений хранения в формате JSON-массива',
            condition: (data) => data?.storage_has_violations === true,
          },
        },
        {
          name: 'storage_free_text',
          label: 'Комментарий по хранению',
          type: 'textarea',
          admin: {
            description: 'Произвольный комментарий инспектора по разделу хранения',
            condition: (data) => data?.storage_has_violations === true,
          },
        },
        {
          name: 'storage_violated_articles',
          label: 'Нарушенные статьи (хранение)',
          type: 'json',
          admin: {
            components: {
              Field: '@/app/components/CalculatedFields/TagInputField',
            },
            description: 'Список нарушенных нормативных статей в формате JSON-массива',
            condition: (data) => data?.storage_has_violations === true,
          },
        },
        {
          name: 'storage_final_score',
          label: 'Итоговая оценка хранения',
          type: 'number',
          min: 0,
          max: 5,
          admin: {
            description: 'Вычисляется автоматически: 5 - штраф (если нет нарушений, автоматически 5)',
            readOnly: true,
            components: {
              Field: '@/app/components/CalculatedFields/StorageFinalScore'
            }
          },
        },
      ],
    },
    {
      label: 'Итоги и медиа',
      type: 'collapsible',
      fields: [
        {
          name: 'total_score',
          label: 'Итоговая оценка',
          type: 'number',
          min: 0,
          max: 5,
          admin: {
            description: 'Вычисляется автоматически',
            readOnly: true,
            components: {
              Field: '@/app/components/CalculatedFields/TotalScore'
            }
          },
        },
        {
          name: 'advantages',
          label: 'Преимущества',
          type: 'json',
          admin: { 
            components: {
              Field: '@/app/components/CalculatedFields/TagInputField'
            },
            description: 'Список выявленных преимуществ в формате JSON-массива строк' 
          },
        },
        {
          name: 'disadvantages',
          label: 'Недостатки',
          type: 'json',
          admin: { 
            components: {
              Field: '@/app/components/CalculatedFields/TagInputField'
            },
            description: 'Список выявленных недостатков в формате JSON-массива строк' 
          },
        },
        {
          name: 'inspector_comment',
          label: 'Комментарий инспектора',
          type: 'textarea',
          admin: { description: 'Итоговый комментарий инспектора по результатам проверки' },
        },
        {
          name: 'shop_photo',
          label: 'Обложка магазина',
          type: 'upload',
          hasMany: false,
          relationTo: 'media',
          required: true,
        },
        {
          name: 'photos',
          label: 'Фотографии проверки',
          type: 'array',
          admin: { description: 'Фотографии сделанные в ходе проверки магазина' },
          fields: [
            {
              name: 'photo',
              label: 'Фотографии с проверки',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'caption',
              label: 'Подпись к фото',
              type: 'text',
              admin: { description: 'Краткое описание того что изображено на фото' },
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'admin_panel',
      label: 'Админ панель',
      admin: {
        condition: (_, siblingData, { user }) => user?.role === 'admin',
      },
      fields: [
        {
          name: 'final_comment',
          label: 'Финальный комментарий',
          type: 'textarea',
          access: {
            update: ({ req: { user } }) => user?.role === 'admin',
          },
          admin: { description: 'Комментарий администратора, публикуемый вместе с отчётом' },
        },
        {
          name: 'status',
          label: 'Статус',
          type: 'select',
          required: true,
          defaultValue: 'pending',
          access: {
            read: () => true,
            update: ({ req: { user } }) => user?.role === 'admin',
          },
          options: [
            { label: 'На рассмотрении', value: 'pending' },
            { label: 'Опубликовано', value: 'published' },
            { label: 'Отклонено', value: 'rejected' },
          ],
          admin: {
            description: 'Статус проверки отчёта администратором',
            position: 'sidebar',
          },
        },
        {
          name: 'author_badge',
          label: 'Бейджик испектора',
          type: 'relationship',
          relationTo: 'badges',
          access: {
            update: ({ req: { user } }) => user?.role === 'admin',
          },
          admin: {
            description: 'Бейджик проверяющего инспектора',
            position: 'sidebar',
          },
        },
        {
          name: 'created_by',
          label: 'Автор отчёта',
          type: 'relationship',
          relationTo: 'users',
          access: {
            read: ({ req: { user } }) => user?.role === 'admin',
          },
          admin: {
            readOnly: true,
            description: 'Инспектор или редактор, создавший отчёт',
            position: 'sidebar',
          },
        },
        {
          label: 'Детали проверки',
          type: 'collapsible',
          fields: [
            {
              name: 'prev_check_status',
              label: 'Статус предыдущей проверки',
              type: 'select',
              access: { read: ({ req: { user } }) => user?.role === 'admin' },
              options: [
                { label: 'Не проверялся', value: 'never' },
                { label: 'Проверялся', value: 'done' },
              ],
              admin: { description: 'Была ли ранее проведена проверка этого магазина' },
            },
            {
              name: 'last_check_date',
              label: 'Дата последней проверки',
              type: 'date',
              access: { read: ({ req: { user } }) => user?.role === 'admin' },
              admin: { description: 'Дата предыдущей проверки этого магазина' },
            },
            {
              name: 'total_checks_count',
              label: 'Всего проверок',
              type: 'number',
              access: { read: ({ req: { user } }) => user?.role === 'admin' },
              admin: { description: 'Общее количество проверок магазина за всё время' },
            },
          ],
        },
      ],
    },
  ],
}