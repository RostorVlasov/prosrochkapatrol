<template>
    <footer class="bg-white dark:bg-gray-900 border-t border-beige-100 dark:border-gray-700">
        <div class="max-w-7xl mx-auto px-6 py-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                <div class="flex flex-col gap-4">
                    <NuxtLink to="/">
                        <ClientOnly>
                            <img :src="isDark ? '/freshcheck-light.png' : '/freshcheck.png'" alt="FreshCheck"
                                class="h-12 w-auto" />
                            <template #fallback>
                                <img src="/freshcheck.png" alt="FreshCheck" class="h-12 w-auto" />
                            </template>
                        </ClientOnly>
                    </NuxtLink>
                    <p class="text-sm font-semibold italic text-beige-500 leading-snug max-w-[220px]">
                        Безопасные продукты — это право каждого, а не привилегия.
                    </p>
                </div>
                <div class="flex flex-col items-start md:items-center gap-4">
                    <h3 class="text-lg font-black tracking-tight text-slate dark:text-white">Контакты</h3>
                    <div class="flex items-center gap-4">
                        <a v-for="link in contactIcons" :key="link.href" :href="link.href" target="_blank"
                            rel="noopener noreferrer"
                            class="text-beige-500 hover:text-beige-600 transition-colors duration-200"
                            :aria-label="link.label">
                            <AppIcon :name="link.icon" class="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div class="flex flex-col gap-2 md:items-end">
                    <a v-for="detail in contactDetails" :key="detail.value" :href="detail.href" target="_blank"
                        rel="noopener noreferrer"
                        class="text-sm text-gray-500 dark:text-beige-100/70 hover:text-beige-500 dark:hover:text-beige-400 transition-colors duration-200">
                        <span class="font-medium text-slate dark:text-white">{{ detail.label }}:</span>
                        {{ detail.value }}
                    </a>
                </div>
            </div>
        </div>
        <div class="border-t border-beige-100 dark:border-gray-700">
            <div class="max-w-7xl mx-auto px-6 py-4">
                <div class="w-max my-4">
                    <Mervik />
                </div>
                <p class="text-xs text-gray-400 dark:text-beige-100/40 leading-relaxed">
                    © 2025–{{ currentYear }} «FreshCheck». Деятельность проекта
                    <span class="font-bold text-slate dark:text-white">FreshCheck</span>
                    является
                    <span class="font-bold text-slate dark:text-white">независимой гражданской инициативой</span>
                    и не подменяет собой работу официальных государственных контролирующих органов.
                    Основатель проекта: Роман Трошин.
                </p>
            </div>
        </div>

    </footer>
</template>

<script lang="ts" setup>
import {
    TELEGRAM_FOUNDER,
    TELEGRAM_FOUNDER_PLACEHOLDER,
    EMAIL,
    EMAIL_PLACEHOLDER,
    VK_FOUNDER,
    VK_FOUNDER_PLACEHOLDER,
    PHONE,
    PHONE_PLACEHOLDER,
} from '~/data/social'
 
const mode = useColorMode()
const isDark = computed(() => mode.value === 'dark')
const currentYear = new Date().getFullYear()
 
const contactIcons = [
    { href: TELEGRAM_FOUNDER, icon: 'telegram' as const, label: 'Telegram' },
    { href: EMAIL,            icon: 'envelope' as const, label: 'Email' },
    { href: VK_FOUNDER,       icon: 'vk' as const,       label: 'ВКонтакте' },
]
 
const contactDetails = [
    { label: 'ТГ',             value: TELEGRAM_FOUNDER_PLACEHOLDER, href: TELEGRAM_FOUNDER },
    { label: 'Почта',          value: EMAIL_PLACEHOLDER,             href: EMAIL },
    { label: 'Телефон',        value: PHONE_PLACEHOLDER,             href: PHONE },
    { label: 'ВКонтакте',      value: VK_FOUNDER_PLACEHOLDER,        href: VK_FOUNDER },
]
</script>
 