import { CollectionConfig } from 'payload'

export const Rubrics: CollectionConfig = {
  slug: 'rubrics',
  admin: {
    useAsTitle: 'name',
    hidden: ({ user }) => user?.role !== 'admin',
  },
  labels: {
    singular: 'Рубрика',
    plural: 'Рубрики',
  },
  access: {
    create: ({ req: { user } }) => user?.role === 'admin',
    read: () => true,
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      label: 'Название рубрики',
      type: 'text',
      required: true,
      admin: {
        description: 'Отображаемое название рубрики',
      },
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'URL-идентификатор рубрики, например: food-quality (только латиница, дефисы)',
      },
    },
  ],
}