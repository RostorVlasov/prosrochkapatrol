<template>
    <div class="p-4 dark:bg-gray-700 bg-stone-100 h-full rounded-xl">
        
        <div class="flex items-center gap-2 mb-3">
            <span class="font-mono font-semibold text-base tracking-wide">{{ badge.code }}</span>
            <span class="text-xs font-medium uppercase tracking-wider px-2 py-0.5 rounded-full"
                :class="typePillClass">{{ badge.type === 'P' ? '*Проверяющий' : 'Ютубер' }}</span>
        </div>

        <div class="flex items-center gap-2 flex-wrap">
            <span class="w-2 h-2 rounded-full shrink-0" :class="statusDotClass" />
            <span class="text-sm dark:text-gray-300 text-gray-600">{{ statusLabel }}</span>
            <span class="ml-auto flex items-center gap-1 text-sm dark:text-gray-400 text-gray-500">
                <Avatar v-if="badge.ownerName?.avatar" size="sm" :avatar="badge.ownerName.avatar" class="w-4 h-4" />
                {{ ownerName }}
            </span>
        </div>

        <div v-if="badge.comment"
            class="mt-3 pt-3 border-t dark:border-gray-600 border-gray-300 text-sm dark:text-gray-300 text-gray-500 flex items-start gap-1.5">
            <AppIcon name="message" class="w-4 h-4 shrink-0 mt-0.5" />
            {{ badge.comment }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { BadgeDoc } from '~/types/badges.types';

const props = defineProps<{ badge: BadgeDoc }>()

const statusMap = {
    active: { label: 'Активен', dot: 'bg-emerald-500' },
    lost: { label: 'Потерян', dot: 'bg-red-500' },
    revoked: { label: 'Отозван', dot: 'bg-gray-400' },
    notUse: { label: 'Не используется', dot: 'bg-gray-400' },
}

const statusLabel = computed(() => statusMap[props.badge.status]?.label ?? props.badge.status)
const statusDotClass = computed(() => statusMap[props.badge.status]?.dot ?? 'bg-gray-400')

const typeColors: Record<string, string> = {
    P: 'bg-surface-brown text-white',
    YOU: 'bg-[#f80d04] text-white',
}
const typePillClass = computed(() =>
    typeColors[props.badge.type] ?? 'bg-gray-200 text-gray-700 dark:bg-gray-500 dark:text-gray-200'
)

const ownerName = computed(() => {
    const name = props.badge.ownerName?.name
    if (!name || typeof name !== 'string') return 'Не назначен'
    return name
})

</script>
