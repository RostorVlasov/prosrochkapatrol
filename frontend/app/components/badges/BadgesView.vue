<template>
    <div class="p-6 mx-auto mt-5">
        <h1 class="text-4xl font-bold mb-4">Бейджики участников</h1>
        <input v-model="searchInput" placeholder="Поиск" type="text" :class="input() + ' mb-4'">

        <div v-if="isLoading" class="text-gray-500">Тут будет скелетон загрузка когда-то....</div>
        <div v-else class="flex flex-col gap-6" v-if="badges">
            <!-- <div v-for="badge in badges.docs">
                {{ badge.code }}
                {{ badge.ownerName }}
                {{ badge.status }}
                {{ badge.type }}
            </div> -->
            <BadgeItem v-for="badge in badges.docs" :badge="badge"/>
        </div>
    </div>
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