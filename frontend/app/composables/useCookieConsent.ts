export function useCookieConsent() {
    const consent = useCookie<'accepted' | null>('cookie_consent', {
        maxAge: 60 * 60 * 24 * 365,
        default: () => null,
    })

    const isResolved = computed(() => consent.value !== null)
    const isAccepted = computed(() => consent.value === 'accepted')

    function accept() {
        consent.value = 'accepted'
    }

    return { consent, isResolved, isAccepted, accept }
}