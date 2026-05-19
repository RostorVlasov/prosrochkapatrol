import { CollectionConfig } from 'payload'
import { getIP } from '../utils/getIP'
import { checkLoginRateLimit, resetLoginAttempts } from '../utils/loginRateLimit'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    useSessions: true,
    tokenExpiration: 180 * 24 * 60 * 60 * 1000,
    removeTokenFromResponses: true,
    cookies: {
      secure: true,
      sameSite: 'Strict',
    },
    maxLoginAttempts: 8,
    lockTime: 60 * 60 * 1000,
  },
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
      name: 'avatar',
      label: 'Аватар',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Аватар пользователя' },
    },
    {
      name: 'name',
      label: 'Имя',
      type: 'text',
      required: true,
      admin: { description: 'Полное имя пользователя' },
    },
    {
      name: 'sessions',
      type: 'array',
      access: {
        read: ({ req, data }) => {
          return req.user?.id === data?.id;
        }
      },
      admin: {
        disabled: true,
      },
      fields: [
        { name: 'id', type: 'text' },
        { name: 'expiresAt', type: 'date' }
      ]
    },
    {
      name: 'email',
      type: 'email',
      unique: true,
      access: {
        read: ({ req: { user } }) => {
          return user?.role === 'admin'
        }
      }
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
      admin: { description: 'Роль определяет права доступа пользователя в системе' },
    },
  ],
  hooks: {
    afterRead: [
      ({ doc, req }) => {
        if (req.user?.role !== 'admin') {
          if (doc._strategy) delete doc._strategy
          if (doc.collection) delete doc.collection
          if (doc.createdAt) delete doc.createdAt
          if (doc.updatedAt) delete doc.updatedAt
          if (doc.exp) delete doc.exp
          return doc
        }
        return doc
      },
    ],
    beforeOperation: [
      async ({ operation, req, args }) => {
        if (operation !== 'login') return args

        const ip = getIP(req)
        const result = checkLoginRateLimit(ip)

        if (!result.allowed) {
          const err = new Error(result.reason) as any
          err.status = 429
          throw err
        }

        return args
      },
    ],
    afterOperation: [
      ({ operation, req, result }) => {
        if (operation === 'login' && result?.user) {
          const ip = getIP(req)
          resetLoginAttempts(ip)
        }
        return result
      },
    ],
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