import { CollectionConfig } from 'payload'
import { getIP } from '../utils/getIP'
import { sendEmail } from '@/utils/sendEmail'

const DAILY_COMPLAINT_LIMIT = 15

export const Complaints: CollectionConfig = {
  slug: 'complaints',
  admin: {
    useAsTitle: 'store_address',
  },
  labels: {
    singular: 'Жалоба',
    plural: 'Жалобы',
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'inspector' || user?.role === 'editor',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      type: 'group',
      name: 'admin_panel',
      label: 'Админ панель',
      admin: {
        condition: (_, __, { user }) => user?.role === 'admin',
      },
      fields: [
        {
          name: 'ip_address',
          label: 'IP адрес заявителя',
          type: 'text',
          admin: {
            readOnly: true,
            description: 'IP адрес с которого была подана жалоба',
            position: 'sidebar',
          },
          access: {
            read: ({ req: { user } }) => user?.role === 'admin',
            update: () => false,
            create: () => false,
          },
        },
        {
          name: 'status',
          label: 'Статус обработки',
          type: 'select',
          defaultValue: 'new',
          access: {
            create: () => false,
            update: ({ req: { user } }) => user?.role === 'admin',
          },
          options: [
            { label: 'Новая', value: 'new' },
            { label: 'В работе', value: 'in_progress' },
            { label: 'Закрыта', value: 'closed' },
          ],
          admin: {
            position: 'sidebar',
            description: 'Текущий статус рассмотрения жалобы администратором',
          },
        },
        {
          name: 'admin_note',
          label: 'Заметка администратора',
          type: 'textarea',
          access: {
            create: () => false,
            update: ({ req: { user } }) => user?.role === 'admin',
          },
          admin: {
            position: 'sidebar',
            description: 'Внутренняя заметка для администраторов, не видна заявителю',
          },
        },
      ],
    },
    {
      name: 'store_address',
      label: 'Адрес магазина',
      type: 'text',
      required: true,
      admin: {
        description: 'Адрес магазина, на который подаётся жалоба',
      },
    },
    {
      name: 'problem_types',
      label: 'Тип проблемы',
      type: 'select',
      hasMany: true,
      required: true,
      options: [
        { label: 'Просроченные товары', value: 'expired_products' },
        { label: 'Товары плохого качества', value: 'poor_quality' },
        { label: 'Нарушение условий хранения', value: 'storage_violation' },
        { label: 'Грязь / антисанитария', value: 'unsanitary' },
        { label: 'Другое', value: 'other' },
      ],
      admin: {
        description: 'Можно выбрать несколько типов нарушений',
      },
    },
    {
      name: 'problem_date',
      label: 'Дата обнаружения проблемы',
      type: 'text',
      required: true,
      admin: {
        description: 'Укажите дату в свободной форме, например: 12 мая 2025',
      },
    },
    {
      name: 'staff_contacted',
      label: 'Обращение к персоналу',
      type: 'radio',
      required: true,
      options: [
        { label: 'Да, обращался', value: 'yes' },
        { label: 'Нет, не обращался', value: 'no' },
      ],
      admin: {
        description: 'Была ли попытка решить проблему на месте через персонал магазина',
      },
    },
    {
      name: 'description',
      label: 'Описание проблемы',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Подробное описание нарушения в свободной форме',
      },
    },
    {
      name: 'photos',
      label: 'Фотографии (доказательства)',
      type: 'array',
      admin: {
        description:
          'Фотографии подтверждающие факт нарушения. Файлы необходимо загрузить заранее через /api/media',
      },
      fields: [
        {
          name: 'photo',
          label: 'Фото',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation !== 'create') return

        const appUrl = 'https://api.test.prosrochkapatrol.ru'
        const link = `${appUrl}/admin/collections/complaints/${doc.id}`

        const problemLabels: Record<string, string> = {
          expired_products: 'Просроченные товары',
          poor_quality: 'Товары плохого качества',
          storage_violation: 'Нарушение условий хранения',
          unsanitary: 'Грязь / антисанитария',
          other: 'Другое',
        }

        const problemList = (doc.problem_types as string[])
          .map((t) => `<li>${problemLabels[t] ?? t}</li>`)
          .join('')

        await sendEmail({
          payload: req.payload,
          subject: `Новая жалоба — ${doc.store_address}`,
          html: `
            <h2>Поступила новая жалоба</h2>
            <p><b>Адрес магазина:</b> ${doc.store_address}</p>
            <p><b>Дата проблемы:</b> ${doc.problem_date}</p>
            <p><b>Типы нарушений:</b></p>
            <ul>${problemList}</ul>
            <p><b>Описание:</b><br>${doc.description}</p>
            <p><a href="${link}">Открыть жалобу в панели управления →</a></p>
          `,
        })
      },
    ],
    beforeOperation: [
      async ({ operation, req, args }) => {
        if (operation !== 'create') return args
        if (req.user) return args

        const ip = getIP(req)

        const startOfDay = new Date()
        startOfDay.setHours(0, 0, 0, 0)

        const result = await req.payload.find({
          collection: 'complaints',
          where: {
            and: [
              { 'admin_panel.ip_address': { equals: ip } },
              { createdAt: { greater_than: startOfDay.toISOString() } },
            ],
          },
          limit: 0,
          overrideAccess: true,
        })

        if (result.totalDocs >= DAILY_COMPLAINT_LIMIT) {
          const err = new Error(
            `Достигнут лимит жалоб на сегодня`,
          ) as any
          err.status = 429
          throw err
        }

        return args
      },
    ],
    beforeChange: [
      ({ req, data }) => {
        if (!data.admin_panel) {
          data.admin_panel = {}
        }

        data.admin_panel.ip_address = getIP(req)
        return data
      },
    ],
  },
}