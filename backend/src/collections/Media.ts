import { CollectionConfig } from 'payload'
import { getIP } from '../utils/getIP'
import sharp from 'sharp'

const DAILY_MEDIA_LIMIT = 20

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Медиа',
    plural: 'Медиа',
  },
  admin: {
    hidden: ({ user }) => user?.role !== 'admin',
  },
  upload: {
    handlers: [
      async (req) => {
        if (!req.file) return

        const now = new Date()
        const timestamp = now.toISOString().replace(/[:.]/g, '-').slice(0, 19)
        const random = Math.random().toString(36).slice(2, 7)
        const ext = req.file.name.split('.').pop()?.toLowerCase() ?? 'jpg'

        req.file.name = `${timestamp}-${random}.${ext}`

        if (['jpg', 'jpeg', 'png', 'webp', 'avif'].includes(ext)) {
          req.file.data = await sharp(req.file.data)
            .withMetadata({})
            .toBuffer()
        }
      },
    ],
  },
  access: {
    create: () => true,
    read: () => true,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'alt',
      label: 'Альтернативный текст',
      type: 'text',
      admin: {
        description: 'Описание изображения для SEO и доступности (alt-тег)',
      },
    },
    {
      name: 'uploaded_by',
      label: 'Загружено пользователем',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        readOnly: true,
        description: 'Пользователь, загрузивший этот файл',
      },
    },
    {
      name: 'ip_address',
      label: 'IP адрес',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'IP адрес с которого была загружена медиа',
        position: 'sidebar',
      },
      access: {
        read: ({ req: { user } }) => user?.role === 'admin',
        update: () => false,
      },
    },
  ],
  hooks: {
    beforeOperation: [
      async ({ operation, req, args }) => {
        if (operation !== 'create') return args
        if (req.user) return args

        const ip = getIP(req)

        const startOfDay = new Date()
        startOfDay.setHours(0, 0, 0, 0)

        const result = await req.payload.find({
          collection: 'media',
          where: {
            and: [
              { ip_address: { equals: ip } },
              { createdAt: { greater_than: startOfDay.toISOString() } },
            ],
          },
          limit: 0,
        })

        if (result.totalDocs >= DAILY_MEDIA_LIMIT) {
          const err = new Error('Достигнут лимит загрузок медиа на сегодня') as any
          err.status = 429
          throw err
        }

        return args
      },
    ],
    beforeChange: [
      ({ req, data }) => {
        if (req.user) {
          data.uploaded_by = req.user.id
        }

        data.ip_address = getIP(req)

        return data
      },
    ],
  },
}