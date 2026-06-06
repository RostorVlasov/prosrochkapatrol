import { sendPushOnPublish } from "@/utils/sendPushOnPublish";
import { CollectionConfig } from "payload";

export const PushSubscriptions: CollectionConfig = {
    slug: 'push-subscriptions',
    admin: {
        hidden: true,
    },
    access: { read: () => false, create: () => true },
    fields: [
        { name: 'endpoint', type: 'text', required: true },
        { name: 'keys', type: 'json', required: true },
        { name: 'userId', type: 'relationship', relationTo: 'users' },
    ],

    hooks: {
        afterChange: [
            ({ req }) => {
                return sendPushOnPublish({
                    title: 'Тестовое уведомление',
                    body: 'Это уведомление тестовое, чтобы понять в каком виде это будет выглядеть',
                    url: 'https://freshcheckastra.ru'
                }, req.payload)
            }
        ]
    }
}