<template>
    <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-2.5 min-w-0">
            <NuxtImg format="webp" loading="lazy" quality="80" v-if="user.avatar" class="rounded-full size-8 object-cover" :src="buildApiUrl(user.avatar.url)" alt=""/>
            <div v-else class="size-8 rounded-full flex items-center justify-center shrink-0" :class="avatarBg">
                <AppIcon  :name="icon" class="size-4" :class="avatarIcon" />
            </div>
            <div class="min-w-0">
                <p class="text-xs text-gray-400">{{ role }}</p>
                <p class="text-sm font-medium truncate">{{ user.name }}</p>
            </div>
        </div>

        <div v-if="badge" class="flex items-center gap-1.5 shrink-0 px-2.5 py-1.5 rounded-xl border"
            :class="badgeContainerClass">

            <span class="size-1.5 rounded-full shrink-0" :class="statusDotClass" />

            <span class="font-mono text-xs font-semibold tracking-wide">{{ badge.code }}</span>

            <span class="text-xs font-medium uppercase tracking-wider px-1.5 py-0.5 rounded-full"
                :class="typePillClass">
                {{ badge.type === 'P' ? 'P' : 'YT' }}
            </span>
        </div>

    </div>
</template>

<script lang="ts" setup>
import type { BadgeDoc } from '~/types/badges.types';
import type { Author } from '~/types/common.types.js';
import type { IconName } from '../ui/AppIcon.vue';

const {buildApiUrl} = useApiBuilder()

const props = defineProps<{
    role: string
    user: Author
    icon?: IconName
    badge?: BadgeDoc
    iconColor?: 'blue' | 'purple' | 'gray' | 'green'
}>()

const colorMap = {
    blue: { bg: 'bg-blue-100 dark:bg-blue-900/40', icon: 'text-blue-600 dark:text-blue-400' },
    purple: { bg: 'bg-purple-100 dark:bg-purple-900/40', icon: 'text-purple-600 dark:text-purple-400' },
    gray: { bg: 'bg-gray-100 dark:bg-gray-600', icon: 'text-gray-500 dark:text-gray-400' },
    green: { bg: 'bg-green-100 dark:bg-green-900/40', icon: 'text-green-600 dark:text-green-400' },
}

const avatarBg = computed(() => colorMap[props.iconColor ?? 'gray'].bg)
const avatarIcon = computed(() => colorMap[props.iconColor ?? 'gray'].icon)
const icon = computed(() => props.icon ?? 'user')

const statusMap = {
    active: 'bg-emerald-500',
    lost: 'bg-red-500',
    revoked: 'bg-gray-400',
    notUse: 'bg-gray-400',
}
const statusDotClass = computed(() =>
    props.badge ? (statusMap[props.badge.status as keyof typeof statusMap] ?? 'bg-gray-400') : ''
)

const typeColors: Record<string, string> = {
    P: 'bg-surface-brown text-white',
    YOU: 'bg-[#f80d04] text-white',
}
const typePillClass = computed(() =>
    props.badge
        ? (typeColors[props.badge.type] ?? 'bg-gray-200 text-gray-700 dark:bg-gray-500 dark:text-gray-200')
        : ''
)

const badgeContainerClass = computed(() => {
    if (!props.badge) return ''
    const status = props.badge.status
    if (status === 'active')
        return 'border-emerald-200 dark:border-emerald-800/40 bg-emerald-50 dark:bg-emerald-900/20'
    if (status === 'lost')
        return 'border-red-200 dark:border-red-800/40 bg-red-50 dark:bg-red-900/20'
    return 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/40'
})
</script>