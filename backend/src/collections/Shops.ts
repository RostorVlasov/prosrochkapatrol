import type { CollectionConfig, CollectionBeforeChangeHook } from 'payload'
import { DISTRICTS } from '@/data/districts'
import { sendPushOnPublish } from '@/utils/sendPushOnPublish'

type HookPayload = Parameters<CollectionBeforeChangeHook>[0]['req']['payload']

async function findBadgeId(
  payload: HookPayload,
  userId: string | number | null | undefined,
): Promise<string | null> {
  if (!userId) return null
  try {
    const result = await payload.find({
      collection: 'badges',
      where: { ownerName: { equals: String(userId) } },
      depth: 0,
      limit: 1,
    })
    return result.totalDocs > 0 && result.docs[0] ? String(result.docs[0].id) : null
  } catch {
    return null
  }
}

function resolveId(value: unknown): string | null {
  if (!value) return null
  if (typeof value === 'object' && value !== null && 'id' in value) {
    return String((value as { id: unknown }).id)
  }
  return String(value)
}

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
    afterChange: [
      ({ req, doc, previousDoc }) => {

        const isNowPublished = doc.admin_panel?.status === 'published'
        const wasPublished = previousDoc?.admin_panel?.status === 'published'

        if (!isNowPublished || wasPublished) return
        if (doc.admin_panel?.status !== 'published') return

        return sendPushOnPublish({
          title: 'Новая проверка',
          body: `${doc.store_name} по адресу ${doc.address}`,
          url: 'https://freshcheckastra.ru/product-review/' + doc.id
        }, req.payload)
      }
    ],
    beforeChange: [
      async ({ req, data, operation }) => {
        if (!data.admin_panel) data.admin_panel = {}

        if (operation === 'create' && req.user) {
          data.admin_panel.created_by = req.user.id
        }

        const mainInspectorId = resolveId(
          data.admin_panel?.main_inspector ?? data.main_inspector ?? req.user?.id,
        )
        const compilerId = resolveId(data.admin_panel?.compiler ?? data.compiler)
        const operatorId = resolveId(data.admin_panel?.operator ?? data.operator)

        const [mainBadge, compilerBadge, operatorBadge] = await Promise.all([
          findBadgeId(req.payload, mainInspectorId),
          findBadgeId(req.payload, compilerId),
          findBadgeId(req.payload, operatorId),
        ])

        data.admin_panel.main_inspector_badge = mainBadge
        data.admin_panel.compiler_badge = compilerBadge
        data.admin_panel.operator_badge = operatorBadge

        const otherInspectors: unknown[] = Array.isArray(data.admin_panel?.other_inspectors)
          ? data.admin_panel.other_inspectors
          : Array.isArray(data.other_inspectors)
            ? data.other_inspectors
            : []

        if (otherInspectors.length > 0) {
          const ids = otherInspectors.map((entry) => {
            if (typeof entry === 'object' && entry !== null) {
              const obj = entry as Record<string, unknown>
              return resolveId(obj.inspector ?? obj.id ?? obj)
            }
            return resolveId(entry)
          })

          const otherBadges = await Promise.all(ids.map((id) => findBadgeId(req.payload, id)))
          data.admin_panel.other_inspector_badges = otherBadges
        } else {
          data.admin_panel.other_inspector_badges = []
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

        const quality = typeof data.quality_final_score === 'number' ? data.quality_final_score : 0
        const storage = typeof data.storage_final_score === 'number' ? data.storage_final_score : 0
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
      type: 'select',
      required: true,
      options: DISTRICTS,
      admin: {
        description: 'Выберите район из списка. После выбора появится список микрорайонов.',
      },
    },
    {
      name: 'microdistrict',
      label: 'Микрорайон',
      type: 'text',
      admin: {
        description: 'Заполняется автоматически при выборе адреса или вручную',
        components: {
          Field: '@/app/components/CalculatedFields/MicrodistrictSelect',
        },
      },
    },
    {
      name: 'geo_lat',
      label: 'Широта',
      type: 'text',
      admin: { description: 'Заполняется автоматически', readOnly: true },
    },
    {
      name: 'geo_lon',
      label: 'Долгота',
      type: 'text',
      admin: { description: 'Заполняется автоматически', readOnly: true },
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
          admin: { description: 'Главный инспектор, проводивший проверку' },
        },
        {
          name: 'compiler',
          label: 'Составитель акта',
          type: 'relationship',
          relationTo: 'users',
          admin: { description: 'Сотрудник, составивший акт проверки' },
        },
        {
          name: 'other_inspectors',
          label: 'Другие проверяющие',
          type: 'array',
          admin: { description: 'Дополнительные инспекторы, участвовавшие в проверке' },
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
          admin: { description: 'Оператор, ответственный за данную проверку' },
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
              'Сумма баллов, снятых за нарушения качества (0–5). Итоговая оценка рассчитается автоматически.',
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
            description: 'Вычисляется автоматически: 5 − штраф',
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
              'Сумма баллов, снятых за нарушения хранения (0–5). Итоговая оценка рассчитается автоматически.',
            condition: (data) => data?.storage_has_violations === true,
          },
        },
        {
          name: 'storage_facts',
          label: 'Факты нарушений хранения',
          type: 'json',
          admin: {
            description: 'Зафиксированные факты нарушений хранения в формате JSON-массива',
            components: { Field: '@/app/components/CalculatedFields/TagInputField' },
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
            description: 'Список нарушенных нормативных статей в формате JSON-массива',
            components: { Field: '@/app/components/CalculatedFields/TagInputField' },
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
            description:
              'Вычисляется автоматически: 5 − штраф (если нет нарушений — автоматически 5)',
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
            description: 'Вычисляется автоматически: среднее между качеством и хранением',
            readOnly: true,
            components: { Field: '@/app/components/CalculatedFields/TotalScore' },
          },
        },
        {
          name: 'advantages',
          label: 'Преимущества',
          type: 'json',
          admin: {
            description: 'Список выявленных преимуществ в формате JSON-массива строк',
            components: { Field: '@/app/components/CalculatedFields/TagInputField' },
          },
        },
        {
          name: 'disadvantages',
          label: 'Недостатки',
          type: 'json',
          admin: {
            description: 'Список выявленных недостатков в формате JSON-массива строк',
            components: { Field: '@/app/components/CalculatedFields/TagInputField' },
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
          admin: { description: 'Фотографии, сделанные в ходе проверки магазина' },
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
              admin: { description: 'Краткое описание того, что изображено на фото' },
            },
          ],
        },
      ],
    },

    {
      type: 'group',
      name: 'admin_panel',
      label: 'Админ-панель',
      admin: {
        condition: (_, _siblingData, { user }) => user?.role === 'admin',
      },
      fields: [
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
            description: 'Заполняется автоматически',
            position: 'sidebar',
            readOnly: true,
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
            description: 'Заполняется автоматически',
            position: 'sidebar',
            readOnly: true,
          },
        },
        {
          name: 'operator_badge',
          label: 'Бейджик оператора',
          type: 'relationship',
          relationTo: 'badges',
          access: {
            update: ({ req: { user } }) => user?.role === 'admin',
          },
          admin: {
            description: 'Заполняется автоматически',
            position: 'sidebar',
            readOnly: true,
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
            description: 'Заполняется автоматически',
            position: 'sidebar',
            readOnly: true,
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