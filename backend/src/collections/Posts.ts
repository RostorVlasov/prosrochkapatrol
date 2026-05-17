import { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    hidden: ({ user }) => user?.role !== 'editor' && user?.role !== 'admin',
  },
  labels: {
    singular: 'Пост',
    plural: 'Посты',
  },
  access: {
    create: ({ req: { user } }) => {
      if (!user) return false
      return user.role === 'editor' || user.role === 'admin'
    },
    read: () => true,
    update: ({ req: { user } }) => {
      if (!user) return false
      if (user.role === 'admin') return true
      if (user.role === 'editor') return { author: { equals: user.id } }
      return false
    },
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      label: 'Заголовок',
      type: 'text',
      required: true,
      admin: {
        description: 'Заголовок поста, отображается в списке и на странице',
      },
    },
    {
      name: 'body',
      label: 'Содержимое',
      type: 'richText',
      required: true,
      editor: lexicalEditor({}),
      admin: {
        description: 'Основной текст поста с форматированием',
      },
    },
    {
      name: 'cover',
      label: 'Обложка',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Главное изображение поста',
      },
    },
    {
      name: 'cover_ratio',
      label: 'Соотношение сторон обложки',
      type: 'text',
      defaultValue: '19/6',
      admin: {
        description: 'Соотношение сторон обложки в формате ширина/высота, например: 19/6',
      },
    },
    {
      name: 'images',
      label: 'Дополнительные изображения',
      type: 'array',
      admin: {
        description: 'Галерея или иллюстрации к посту',
      },
      fields: [
        {
          name: 'image',
          label: 'Изображение',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          label: 'Подпись к изображению',
          type: 'text',
          admin: {
            description: 'Краткое описание изображения',
          },
        },
      ],
    },
    {
      name: 'status',
      label: 'Статус',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      access: {
        read: ({ req: { user }, doc }) => {
          if (user?.role === 'admin' || user?.role === 'editor') return true
          return doc?.status === 'published'
        },
      },
      options: [
        { label: 'Черновик', value: 'draft' },
        { label: 'На рассмотрении', value: 'pending' },
        { label: 'Опубликовано', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Черновик — не виден публично. На рассмотрении — ожидает одобрения админа. Опубликовано — виден всем.',
      },
    },
    {
      name: 'published_at',
      label: 'Дата публикации',
      type: 'date',
      access: {
        read: ({ req: { user } }) => user?.role === 'admin',
      },
      admin: {
        position: 'sidebar',
        description: 'Проставляется автоматически в момент публикации',
      },
    },
    {
      name: 'author',
      label: 'Автор',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        readOnly: true,
        position: 'sidebar',
        description: 'Проставляется автоматически при создании поста',
      },
    },
    {
      name: 'rubrics',
      label: 'Рубрики',
      type: 'relationship',
      relationTo: 'rubrics',
      hasMany: true,
      admin: {
        position: 'sidebar',
        description: 'Одна или несколько рубрик для категоризации поста',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ req, data, operation, originalDoc }) => {
        if (operation === 'create' && req.user) {
          data.author = req.user.id
        }

        if (req.user?.role === 'editor') {
          if (operation === 'create') {
            data.status = 'pending'
          } else if (data.status === 'published') {
            data.status = originalDoc?.status ?? 'pending'
          }
          if (operation === 'update' && originalDoc?.status === 'pending' && data.status === 'draft') {
            data.status = 'pending'
          }
        }

        if (data?.status === 'published' && !originalDoc?.published_at) {
          data.published_at = new Date()
        }

        return data
      },
    ],
  },
}