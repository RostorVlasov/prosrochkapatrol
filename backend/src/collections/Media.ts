import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Медиа',
    plural: 'Медиа',
  },
  admin: {
    hidden: ({ user }) => user?.role !== 'admin',
  },
  upload: true,
  access: {
    create: ({ req: { user } }) => !!user,
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
  ],
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        if (req.user) {
          data.uploaded_by = req.user.id
        }
        return data
      },
    ],
  },
}