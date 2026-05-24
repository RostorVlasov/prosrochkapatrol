<template>
    <AdaptiveContainer>
        <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 mb-8 shadow-sm">
            <h1 class="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Бейджи участников</h1>
            <p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Система идентификации участников проекта FreshCheck. 
                Бейдж используется для подтверждения участия в проекте при проведении общественного мониторинга.
            </p>
        </div>

        <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 mb-8 shadow-sm">
            <h2 class="font-semibold text-zinc-900 dark:text-white mb-3">О системе идентификации</h2>
            <div class="text-sm text-zinc-600 dark:text-zinc-300 space-y-3 leading-relaxed">
                <p>
                    Бейдж является внутренним средством идентификации участника FreshCheck. Его наличие необходимо для прозрачности нашей деятельности и защиты от самозванства.
                </p>
                <p class="text-zinc-500 dark:text-zinc-400 italic text-xs border-t border-zinc-100 dark:border-zinc-800 pt-3">
                    Важно: бейдж не является документом государственного образца, не наделяет участника властными полномочиями и не заменяет собой паспорт или иные удостоверения. 
                    Предъявитель бейджа остается обычным гражданином — потребителем, реализующим свое право на мониторинг.
                </p>
            </div>
        </div>

        <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 mb-8 shadow-sm">
            <input 
                v-model="searchInput" 
                placeholder="Поиск по номеру бейджа или имени участника..." 
                type="text" 
                :class="input() + ' w-full'"
            >
        </div>

        <BadgesSkeleton v-if="isLoading" />
        
        <div v-else-if="badges?.docs?.length" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BadgeItem v-for="badge in badges.docs" :key="badge.id" :badge="badge" />
        </div>

        <div v-else class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-16 text-center shadow-sm">
            <p class="text-zinc-500 dark:text-zinc-400">Данные о бейджах отсутствуют или поиск не дал результатов.</p>
        </div>
    </AdaptiveContainer>
</template>

<script lang="ts" setup>
import { useBadgesStore } from '~/stores/badges';
const badgesStore = useBadgesStore()
const { badges } = storeToRefs(badgesStore)
const isLoading = ref<boolean>(true)
const searchInput = ref<string>('')
const debouncedValue = refDebounced<string>(searchInput, 300)

watch(debouncedValue, () => {
    loadBadges()
})

async function loadBadges() {
    isLoading.value = true
    await badgesStore.fetchBadgesData(searchInput.value)
    isLoading.value = false
}

onMounted(loadBadges)

</script>