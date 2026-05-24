import type { BasePayload } from 'payload'

interface SendEmailOptions {
    payload: BasePayload
    subject: string
    html: string
}

export async function sendEmail({
    payload,
    subject,
    html,
}: SendEmailOptions): Promise<void> {
    const { docs: admins } = await payload.find({
        collection: 'users',
        where: {
            role: { equals: 'admin' },
        },
        limit: 0,
        depth: 0,
        overrideAccess: true,
    })

    if (!admins.length) {
        payload.logger.info('sendEmail: no admin users found')
        return
    }

    const results = await Promise.allSettled(
        admins.map((admin) =>
            payload.sendEmail({
                to: admin.email as string,
                subject,
                html,
            }),
        ),
    )

    results.forEach((result, i) => {
        if (result.status === 'rejected') {
            payload.logger.error(
                `sendEmail: failed to send to ${admins[i]?.email} — ${result.reason}`,
            )
        }
    })
}