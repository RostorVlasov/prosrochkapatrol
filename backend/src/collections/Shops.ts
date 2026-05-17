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
    read: () => true,
    update: ({ req: { user } }) => {
      if (!user) return false
      if (user.role === 'admin') return true
      if (user.role === 'editor' || user.role === 'inspector') {
        return { created_by: { equals: user.id } }
      }
      return false
    },
    delete: ({ req: { user } }) => user?.role === 'admin',
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
      name: 'status',
      label: 'Статус',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      access: {
        read: ({ req: { user }, doc }) => {
          if (user?.role === 'admin') return true
          return doc?.status === 'published'
        },
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
      label: 'Общие оценки',
      type: 'collapsible',
      fields: [
        {
          name: 'total_score',
          label: 'Итоговая оценка',
          type: 'number',
          min: 0.1,
          max: 5,
          access: { read: ({ req: { user } }) => user?.role === 'admin' },
          admin: { description: 'Общая итоговая оценка магазина от 0.1 до 5' },
        },
        {
          name: 'quality_score',
          label: 'Оценка качества',
          type: 'number',
          min: 0.1,
          max: 5,
          access: { read: ({ req: { user } }) => user?.role === 'admin' },
          admin: { description: 'Итоговая оценка раздела качества товаров от 0.1 до 5' },
        },
        {
          name: 'storage_score',
          label: 'Оценка хранения',
          type: 'number',
          min: 0.1,
          max: 5,
          access: { read: ({ req: { user } }) => user?.role === 'admin' },
          admin: { description: 'Итоговая оценка раздела условий хранения от 0.1 до 5' },
        },
        {
          name: 'advantages',
          label: 'Преимущества',
          type: 'json',
          access: { read: ({ req: { user } }) => user?.role === 'admin' },
          admin: { description: 'Список выявленных преимуществ в формате JSON-массива строк' },
        },
        {
          name: 'disadvantages',
          label: 'Недостатки',
          type: 'json',
          access: { read: ({ req: { user } }) => user?.role === 'admin' },
          admin: { description: 'Список выявленных недостатков в формате JSON-массива строк' },
        },
      ],
    },
    {
      label: 'Детали проверки',
      type: 'collapsible',
      fields: [
        {
          name: 'date_checked',
          label: 'Дата проверки',
          type: 'date',
          admin: { description: 'Дата фактического проведения проверки' },
        },
        {
          name: 'reason_type',
          label: 'Тип проверки',
          type: 'select',
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
    {
      label: 'Оценка качества',
      type: 'collapsible',
      fields: [
        {
          name: 'quality_start_score',
          label: 'Начальная оценка качества',
          type: 'number',
          min: 0.1,
          max: 5,
          admin: { description: 'Исходная оценка качества до применения штрафов (0.1–5)' },
        },
        {
          name: 'quality_facts',
          label: 'Факты нарушений качества',
          type: 'json',
          admin: { description: 'Зафиксированные факты нарушений в формате JSON-массива' },
        },
        {
          name: 'quality_total_deduction',
          label: 'Суммарный штраф за качество',
          type: 'number',
          min: 0.1,
          max: 5,
          admin: { description: 'Сумма баллов, снятых за нарушения качества (0.1–5)' },
        },
        {
          name: 'quality_final_score',
          label: 'Итоговая оценка качества',
          type: 'number',
          min: 0.1,
          max: 5,
          admin: { description: 'Финальная оценка качества после вычета штрафов (0.1–5)' },
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
          admin: { description: 'Список нарушенных нормативных статей в формате JSON-массива' },
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
          admin: { description: 'Отметьте если выявлены нарушения условий хранения товаров' },
        },
        {
          name: 'storage_facts',
          label: 'Факты нарушений хранения',
          type: 'json',
          admin: { description: 'Зафиксированные факты нарушений хранения в формате JSON-массива' },
        },
        {
          name: 'storage_total_deduction',
          label: 'Суммарный штраф за хранение',
          type: 'number',
          min: 0.1,
          max: 5,
          admin: { description: 'Сумма баллов, снятых за нарушения хранения (0.1–5)' },
        },
        {
          name: 'storage_final_score',
          label: 'Итоговая оценка хранения',
          type: 'number',
          min: 0.1,
          max: 5,
          admin: { description: 'Финальная оценка условий хранения после вычета штрафов (0.1–5)' },
        },
        {
          name: 'storage_free_text',
          label: 'Комментарий по хранению',
          type: 'textarea',
          admin: { description: 'Произвольный комментарий инспектора по разделу хранения' },
        },
        {
          name: 'storage_violated_articles',
          label: 'Нарушенные статьи (хранение)',
          type: 'json',
          admin: { description: 'Список нарушенных нормативных статей в формате JSON-массива' },
        },
      ],
    },
    {
      label: 'Итоги и медиа',
      type: 'collapsible',
      fields: [
        {
          name: 'inspector_comment',
          label: 'Комментарий инспектора',
          type: 'textarea',
          admin: { description: 'Итоговый комментарий инспектора по результатам проверки' },
        },
        {
          name: 'final_comment',
          label: 'Финальный комментарий',
          type: 'textarea',
          access: { read: ({ req: { user } }) => user?.role === 'admin' },
          admin: { description: 'Комментарий администратора, публикуемый вместе с отчётом' },
        },
        {
          name: 'photos',
          label: 'Фотографии проверки',
          type: 'array',
          admin: { description: 'Фотографии сделанные в ходе проверки магазина' },
          fields: [
            {
              name: 'photo',
              label: 'Фото',
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
  ],
  hooks: {
    beforeChange: [
      ({ req, data, operation }) => {
        if (operation === 'create' && req.user) {
          data.created_by = req.user.id
        }

        if (req.user?.role === 'inspector' || req.user?.role === 'editor') {
          if (data.status === 'published' || data.status === 'rejected') {
            data.status = operation === 'create' ? 'pending' : undefined
          }
        }

        return data
      },
    ],
  },
}