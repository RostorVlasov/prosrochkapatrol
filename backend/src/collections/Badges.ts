import { CollectionConfig } from "payload";

export const Badges: CollectionConfig = {
    slug: 'badges',
    labels: {
        singular: 'Бейдж',
        plural: 'Бейджи',
    },

    admin: {
        hidden: ({ user }) => user?.role !== 'admin',
        useAsTitle: 'code',
        defaultColumns: ['code', 'type', 'ownerName', 'status'],
    },

    access: {
        read: () => true,
        create: ({ req }) => req.user?.role === 'admin',
        update: ({ req }) => req.user?.role === 'admin',
        delete: ({ req }) => req.user?.role === 'admin',
    },

    fields: [
        {
            name: 'code',
            label: 'Код бейджа',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                description: 'Введите код строго в формате из регламента (например: #P01-ASTR)',
            },
        },
        {
            name: 'type',
            label: 'Тип участника',
            type: 'select',
            required: true,
            options: [
                { label: 'Проверяющий (#P)', value: 'P' },
                { label: 'Блогер (#YOU)', value: 'YOU' },
            ],
        },

        {
            name: 'ownerName',
            label: 'Владелец бейджа',
            type: 'relationship',
            relationTo: 'users',
            required: false,
        },

        {
            name: 'status',
            label: 'Статус бейджа',
            type: 'select',
            defaultValue: 'active',
            options: [
                { label: 'Активен', value: 'active' },
                { label: 'Отозван', value: 'revoked' },
                { label: 'Утерян', value: 'lost' },
                { label: 'Не используется', value: 'notUse' },
            ],
        },

        {
            name: 'comment',
            label: 'Комментарий к бейджу',
            type: 'textarea',
            required: false,
            admin: {
                description: 'Служебная заметка администратора (например: выдан 05.06.2026)',
            },
        },
    ],
}