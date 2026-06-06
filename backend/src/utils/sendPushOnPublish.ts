import webpush from 'web-push'
import type { BasePayload } from 'payload'

interface PushData {
    title: string,
    body: string,
    url: string //https://freshcheckastra.ru/
}

export const sendPushOnPublish = async (data: PushData, payload: BasePayload) => {

    webpush.setVapidDetails(
        process.env.VAPID_EMAIL!,
        process.env.VAPID_PUBLIC_KEY!,
        process.env.VAPID_PRIVATE_KEY!
    )

    const { docs: subs } = await payload.find({
        collection: 'push-subscriptions',
        limit: 1000,
    })

    await Promise.all(
        subs.map(async (sub) => {
            const endpoint = sub.endpoint as string
            const keys = sub.keys as { p256dh: string; auth: string }

            return webpush.sendNotification(
                { endpoint, keys },
                JSON.stringify(data)
            ).catch(async (err) => {
                if (err.statusCode === 410) {
                    await payload.delete({ collection: 'push-subscriptions', id: sub.id })
                }
            })
        })
    )
}