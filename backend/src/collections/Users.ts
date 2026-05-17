import { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
    hidden: ({ user }) => user?.role !== 'admin',
  },
  labels: {
    singular: 'Пользователь',
    plural: 'Пользователи',
  },
  access: {
    create: ({ req: { user } }) => user?.role === 'admin',
    read: ({ req: { user } }) => {
      if (!user) return false
      if (user.role === 'admin') return true
      return { id: { equals: user.id } }
    },
    update: ({ req: { user } }) => {
      if (!user) return false
      if (user.role === 'admin') return true
      return { id: { equals: user.id } }
    },
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      label: 'Имя',
      type: 'text',
      required: true,
      admin: {
        description: 'Полное имя пользователя',
      },
    },
    {
      name: 'role',
      label: 'Роль',
      type: 'select',
      required: true,
      defaultValue: 'inspector',
      access: {
        read: ({ req: { user }, id }) => {
          if (!user) return false
          if (user.role === 'admin') return true
          return user.id === id
        },
        update: ({ req: { user } }) => user?.role === 'admin',
      },
      options: [
        { label: 'Инспектор', value: 'inspector' },
        { label: 'Редактор', value: 'editor' },
        { label: 'Администратор', value: 'admin' },
      ],
      admin: {
        description: 'Роль определяет права доступа пользователя в системе',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ req, data, operation, originalDoc }) => {
        if (req.user?.role !== 'admin' && operation === 'update') {
          data.role = originalDoc?.role
        }
        return data
      },
    ],
  },
}