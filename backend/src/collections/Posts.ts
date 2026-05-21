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
    read: ({ req: { user } }) => {
      if (user?.role === 'admin' || user?.role === 'editor' || user?.role === 'inspector') return true;
      return {
        'admin_panel.status': { equals: 'published' }
      };
    },
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
    {
      type: 'group',
      name: 'admin_panel',
      label: 'Админ панель',
      admin: {
        condition: (_, __, { user }) => user?.role === 'admin',
      },
      fields: [
        {
          name: 'status',
          label: 'Статус',
          type: 'select',
          required: true,
          defaultValue: 'draft',
          access: {
            read: () => true,
          },
          options: [
            { label: 'Черновик', value: 'draft' },
            { label: 'На рассмотрении', value: 'pending' },
            { label: 'Опубликовано', value: 'published' },
          ],
          admin: {
            position: 'sidebar',
            description:
              'Черновик — не виден публично. На рассмотрении — ожидает одобрения админа. Опубликовано — виден всем.',
          },
        },
        {
          name: 'published_at',
          label: 'Дата публикации',
          type: 'date',
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
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ req, data, operation, originalDoc }) => {
        if (operation === 'create' && req.user) {
          if (!data.admin_panel) {
            data.admin_panel = {}
          }
          data.admin_panel.author = req.user.id
        }

        if (req.user?.role === 'editor') {
          if (!data.admin_panel) {
            data.admin_panel = {};
          }
          if (operation === 'create') {
            data.admin_panel.status = 'pending'
          } else if (data.admin_panel?.status === 'published') {
            data.admin_panel.status = originalDoc?.admin_panel?.status ?? 'pending'
          }
          if (
            operation === 'update' &&
            originalDoc?.admin_panel?.status === 'pending' &&
            data.admin_panel?.status === 'draft'
          ) {
            data.admin_panel.status = 'pending'
          }
        }

        if (data?.admin_panel?.status === 'published' && !originalDoc?.admin_panel?.published_at) {
          if (!data.admin_panel) data.admin_panel = {};
          data.admin_panel.published_at = new Date()
        }

        return data
      },
    ],
  },
}