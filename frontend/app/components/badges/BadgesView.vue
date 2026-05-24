<template>
    <AdaptiveContainer>
        <h1 class="text-4xl font-bold mb-4">Бейджики участников</h1>
        <input v-model="searchInput" placeholder="Поиск" type="text" :class="input() + ' mb-4'">

        <BadgesSkeleton v-if="isLoading"/>
        <div v-else class="flex flex-col gap-6" v-if="badges">
            <BadgeItem v-for="badge in badges.docs" :badge="badge" />
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