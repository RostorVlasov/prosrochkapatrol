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
      if (user?.role === 'admin' || user?.role === 'editor' || user?.role === 'inspector') return true
      return { 'admin_panel.status': { equals: 'published' } }
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
      async ({ req, data, operation }) => {
        if (!data.admin_panel) {
          data.admin_panel = {}
        }

        if (operation === 'create' && req.user) {
          data.admin_panel.created_by = req.user.id

          const inspectorId = data.admin_panel.main_inspector || req.user.id

          try {
            const badgesResult = await req.payload.find({
              collection: 'badges',
              where: { ownerName: { equals: inspectorId } },
              depth: 0,
              limit: 1,
            })

            data.admin_panel.main_inspector_badge =
              badgesResult.totalDocs > 0 && badgesResult.docs[0]
                ? String(badgesResult.docs[0].id)
                : null
          } catch (error) {
            console.error('Ошибка при поиске бейджа основного проверяющего:', error)
            data.admin_panel.main_inspector_badge = null
          }

          if (data.admin_panel.compiler) {
            try {
              const compilerBadge = await req.payload.find({
                collection: 'badges',
                where: { ownerName: { equals: data.admin_panel.compiler } },
                depth: 0,
                limit: 1,
              })
              data.admin_panel.compiler_badge =
                compilerBadge.totalDocs > 0 && compilerBadge.docs[0]
                  ? String(compilerBadge.docs[0].id)
                  : null
            } catch {
              data.admin_panel.compiler_badge = null
            }
          }

          if (Array.isArray(data.admin_panel.other_inspectors) && data.admin_panel.other_inspectors.length > 0) {
            const otherBadges: (string | null)[] = []
            for (const inspector of data.admin_panel.other_inspectors) {
              const inspId = typeof inspector === 'object' ? inspector.id : inspector
              try {
                const badge = await req.payload.find({
                  collection: 'badges',
                  where: { ownerName: { equals: inspId } },
                  depth: 0,
                  limit: 1,
                })
                otherBadges.push(
                  badge.totalDocs > 0 && badge.docs[0] ? String(badge.docs[0].id) : null
                )
              } catch {
                otherBadges.push(null)
              }
            }
            data.admin_panel.other_inspector_badges = otherBadges
          }
        }

        if (req.user?.role === 'inspector' || req.user?.role === 'editor') {
          if (
            data.admin_panel.status === 'published' ||
            data.admin_panel.status === 'rejected'
          ) {
            data.admin_panel.status = 'pending'
          }
        }

        const qualityDeduction =
          typeof data.quality_total_deduction === 'number' ? data.quality_total_deduction : 0
        data.quality_final_score = Math.max(0, Math.min(5, 5 - qualityDeduction))

        if (data.storage_has_violations) {
          const storageDeduction =
            typeof data.storage_total_deduction === 'number' ? data.storage_total_deduction : 0
          data.storage_final_score = Math.max(0, Math.min(5, 5 - storageDeduction))
        } else {
          data.storage_final_score = 5
          data.storage_total_deduction = 0
        }

        const quality =
          typeof data.quality_final_score === 'number' ? data.quality_final_score : 0
        const storage =
          typeof data.storage_final_score === 'number' ? data.storage_final_score : 0
        data.total_score = Math.round(((quality + storage) / 2) * 10) / 10

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
      admin: { description: 'Официальное название торговой точки' },
    },

    {
      name: 'address',
      label: 'Адрес',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Полный адрес магазина — начните вводить, выберите из подсказок',
        components: {
          Field: '@/app/components/CalculatedFields/AddressSuggestField',
        },
      },
    },

    {
      name: 'district',
      label: 'Район',
      type: 'text',
      admin: {
        description: 'Заполняется автоматически при выборе адреса',
      },
    },

    {
      name: 'microdistrict',
      label: 'Микрорайон',
      type: 'text',
      admin: {
        description: 'Заполняется автоматически при выборе адреса (если определяется)',
      },
    },

    {
      name: 'geo_lat',
      label: 'Широта',
      type: 'text',
      admin: {
        description: 'Заполняется автоматически',
        readOnly: true,
      },
    },
    {
      name: 'geo_lon',
      label: 'Долгота',
      type: 'text',
      admin: {
        description: 'Заполняется автоматически',
        readOnly: true,
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
      label: 'Участники проверки',
      type: 'collapsible',
      fields: [
        {
          name: 'main_inspector',
          label: 'Основной проверяющий',
          type: 'relationship',
          relationTo: 'users',
          required: true,
          admin: {
            description: 'Главный инспектор, проводивший проверку',
          },
        },
        {
          name: 'compiler',
          label: 'Составитель акта',
          type: 'relationship',
          relationTo: 'users',
          admin: {
            description: 'Сотрудник, составивший акт проверки',
          },
        },
        {
          name: 'other_inspectors',
          label: 'Другие проверяющие',
          type: 'array',
          admin: {
            description: 'Дополнительные инспекторы, участвовавшие в проверке',
          },
          fields: [
            {
              name: 'inspector',
              label: 'Проверяющий',
              type: 'relationship',
              relationTo: 'users',
              required: true,
            },
          ],
        },
        {
          name: 'operator',
          label: 'Оператор',
          type: 'relationship',
          relationTo: 'users',
          admin: {
            description: 'Оператор, ответственный за данную проверку',
          },
        },
      ],
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
          admin: {
            description:
              'Сумма баллов, снятых за нарушения качества (от 0 до 5). Итоговая оценка рассчитается автоматически.',
          },
        },
        {
          name: 'quality_facts',
          label: 'Факты нарушений качества',
          type: 'json',
          admin: {
            description: 'Зафиксированные факты нарушений в формате JSON-массива',
            components: { Field: '@/app/components/CalculatedFields/TagInputField' },
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
            components: { Field: '@/app/components/CalculatedFields/TagInputField' },
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
            components: { Field: '@/app/components/CalculatedFields/QualityFinalScore' },
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
            description:
              'Сумма баллов, снятых за нарушения хранения (от 0 до 5). Итоговая оценка рассчитается автоматически.',
            condition: (data) => data?.storage_has_violations === true,
          },
        },
        {
          name: 'storage_facts',
          label: 'Факты нарушений хранения',
          type: 'json',
          admin: {
            components: { Field: '@/app/components/CalculatedFields/TagInputField' },
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
            components: { Field: '@/app/components/CalculatedFields/TagInputField' },
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
            components: { Field: '@/app/components/CalculatedFields/StorageFinalScore' },
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
            components: { Field: '@/app/components/CalculatedFields/TotalScore' },
          },
        },
        {
          name: 'advantages',
          label: 'Преимущества',
          type: 'json',
          admin: {
            components: { Field: '@/app/components/CalculatedFields/TagInputField' },
            description: 'Список выявленных преимуществ в формате JSON-массива строк',
          },
        },
        {
          name: 'disadvantages',
          label: 'Недостатки',
          type: 'json',
          admin: {
            components: { Field: '@/app/components/CalculatedFields/TagInputField' },
            description: 'Список выявленных недостатков в формате JSON-массива строк',
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
              label: 'Фотография с проверки',
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
          name: 'main_inspector_badge',
          label: 'Бейджик основного проверяющего',
          type: 'relationship',
          relationTo: 'badges',
          access: {
            update: ({ req: { user } }) => user?.role === 'admin',
          },
          admin: {
            description: 'Заполняется автоматически при создании записи',
            position: 'sidebar',
          },
        },
        {
          name: 'compiler_badge',
          label: 'Бейджик составителя',
          type: 'relationship',
          relationTo: 'badges',
          access: {
            update: ({ req: { user } }) => user?.role === 'admin',
          },
          admin: {
            description: 'Заполняется автоматически при создании записи',
            position: 'sidebar',
          },
        },
        {
          name: 'other_inspector_badges',
          label: 'Бейджики других проверяющих',
          type: 'relationship',
          relationTo: 'badges',
          hasMany: true,
          access: {
            update: ({ req: { user } }) => user?.role === 'admin',
          },
          admin: {
            description: 'Заполняется автоматически при создании записи',
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