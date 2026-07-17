import { refDebounced } from '@vueuse/core'
import { input } from '~/utils/atoms'
import type { BadgeDoc, BadgesResponse } from '~/types/badges.types'

const tabs = [
    { label: 'Все', value: 'all' },
    { label: '*Проверяющие', value: 'staff' },
    { label: 'Ютуберы', value: 'you' },
] as const

type Tab = typeof tabs[number]['value']

const activeTab = ref<Tab>('all')
const searchInput = ref<string>('')
const debouncedSearch = refDebounced(searchInput, 300)

const { data: badgesResponse, status } = await useApiFetch<BadgesResponse>('/api/badges', {
    key: 'badges-list',
    query: { limit: 200 },
})

const allBadges = computed<BadgeDoc[]>(() => badgesResponse.value?.docs ?? [])

const isYou = (code: string) => /YOU/i.test(code)
const getNum = (code: string) => parseInt(code.match(/(\d+)/)?.[1] ?? '0', 10)

const filteredBadges = computed(() => {
    const query = debouncedSearch.value.toLowerCase().trim()

    const byTab = allBadges.value.filter(badge => {
        if (activeTab.value === 'all') return true
        if (activeTab.value === 'you') return isYou(badge.code)
        return !isYou(badge.code)
    })

    const filtered = query
        ? byTab.filter(badge => {
            const code = (badge.code || '').toLowerCase()
            const name = (badge.ownerName?.name || '').toLowerCase()
            return code.includes(query) || name.includes(query)
        })
        : byTab

    return [...filtered].sort((a, b) => {
        if (activeTab.value === 'all') {
            if (isYou(a.code) !== isYou(b.code)) return isYou(a.code) ? 1 : -1
        }
        return getNum(a.code) - getNum(b.code)
    })
})
