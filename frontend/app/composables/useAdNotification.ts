import { TELEGRAM_CHANNEL } from '~/data/social'

const COOKIE_KEY = 'tg_snooze'

const SNOOZE_DISMISSED = 60 * 90
const SNOOZE_SUBSCRIBED = 60 * 60 * 24 * 30

export function useAdNotification() {
    const toast = useToast()
    const snoozeCookie = useCookie<string | null>(COOKIE_KEY)

    function isSnoozed(): boolean {
        return !!snoozeCookie.value
    }

    function snooze(seconds: number) {
        const cookie = useCookie(COOKIE_KEY, {
            maxAge: seconds,
            path: '/',
            sameSite: 'lax',
        })
        cookie.value = '1'
    }

    function show() {
        if (isSnoozed()) return
        const delay = Math.random() * 10_000 + 10_000

        setTimeout(() => {
            if (isSnoozed()) return
            let subscribed = false
            const id = 'tg-subscribe'

            toast.add({
                id,
                closeIcon: 'ph:x',
                title: 'Подпишись на наш Telegram-канал',
                description: 'Там публикуются все самые свежие новости',
                icon: 'ph:telegram-logo',
                color: 'neutral',
                type: 'background',
                duration: 0,
                actions: [
                    {
                        label: 'Подписаться',
                        onClick: () => {
                            subscribed = true
                            snooze(SNOOZE_SUBSCRIBED)
                            navigateTo(TELEGRAM_CHANNEL, { external: true })
                            toast.remove(id)
                        },
                    },
                ],
                "onUpdate:open": () => {
                    if (!subscribed) {
                        snooze(SNOOZE_DISMISSED)
                    }
                },
            })
        }, delay)
    }

    return { show }
}