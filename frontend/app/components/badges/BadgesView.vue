<template>
    <AdaptiveContainer class="mt-5">
        <div
            class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 mb-8 shadow-sm">
            <h1 class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Бейджи участников</h1>
            <p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Система идентификации участников проекта FreshCheck.
                Бейдж используется для подтверждения участия в проекте при проведении общественного мониторинга.
            </p>
        </div>

        <div
            class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 mb-8 shadow-sm">
            <h2 class="font-semibold text-zinc-900 dark:text-white mb-3">О системе идентификации</h2>
            <div class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 space-y-3 leading-relaxed">
                <p>
                    Бейдж является внутренним средством идентификации участника FreshCheck. Его наличие необходимо для
                    прозрачности нашей деятельности и защиты от самозванства.
                </p>
                <p
                    class="text-zinc-500 dark:text-zinc-400 italic text-xs border-t border-zinc-100 dark:border-zinc-800 pt-3">
                    Важно: бейдж не является документом государственного образца, не наделяет участника властными
                    полномочиями и не заменяет собой паспорт или иные удостоверения.
                    Предъявитель бейджа остается обычным гражданином — потребителем, реализующим свое право на
                    мониторинг.
                </p>
            </div>
        </div>

        <div
            class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 mb-8 shadow-sm space-y-3">
            <div class="flex gap-2">
                <button v-for="tab in tabs" :key="tab.value" @click="activeTab = tab.value" :class="[
                    'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200',
                    activeTab === tab.value && tab.value === 'you'
                        ? 'bg-red-500 text-white'
                        : activeTab === tab.value
                            ? 'bg-beige-500 text-white'
                            : tab.value === 'you'
                                ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                ]">
                    {{ tab.label }}
                </button>
            </div>
            <input v-model="searchInput" placeholder="Поиск по номеру бейджа или имени участника..." type="text"
                :class="input() + ' w-full'">
        </div>

        <BadgesSkeleton v-if="status === 'pending'" />

        <div v-else-if="filteredBadges.length" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BadgeItem v-for="badge in filteredBadges" :key="badge.code" :badge="badge" />
        </div>

        <div v-else
            class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-16 text-center shadow-sm">
            <p class="text-zinc-500 dark:text-zinc-400">
                {{ searchInput ? 'Поиск не дал результатов.' : 'Данные о бейджах отсутствуют.' }}
            </p>
        </div>
    </AdaptiveContainer>
</template>

<script lang="ts" setup>
import { refDebounced } from '@vueuse/core'
import { input } from '~/utils/atoms'
import type { BadgeDoc, BadgesResponse } from '~/types/badges.types'

const tabs = [
    { label: 'Все', value: 'all' },
    { label: 'Проверяющие', value: 'staff' },
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


useSeoMeta({
    title: 'Бейджи участников FreshCheck',
    description: `Бейджи участников FreshCheck`,
    ogTitle: 'Бейджи участников FreshCheck',
    ogDescription: `Бейджи участников FreshCheck`,
    ogImage: '/logo.png',
    twitterCard: 'summary_large_image',
});

</script>