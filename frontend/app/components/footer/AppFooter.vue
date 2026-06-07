<template>
    <footer class="relative border-t border-beige-100 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
        <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,180,120,0.06),transparent_35%)]" />

        <div class="relative max-w-7xl mx-auto px-6 py-7">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div class="flex flex-col gap-4">
                    <NuxtLink to="/" class="inline-flex w-max">
                        <ClientOnly>
                            <NuxtImg
                                format="webp"
                                quality="80"
                                :src="isDark ? '/freshcheck-light.png' : '/freshcheck.png'"
                                alt="логотип FreshCheck"
                                class="h-14 w-auto"
                            />

                            <template #fallback>
                                <NuxtImg
                                    format="webp"
                                    quality="80"
                                    src="/freshcheck.png"
                                    alt="логотип FreshCheck"
                                    class="h-14 w-auto"
                                />
                            </template>
                        </ClientOnly>
                    </NuxtLink>

                    <div class="flex flex-col gap-1.5">
                        <a
                            v-for="detail in contactDetails"
                            :key="detail.value"
                            :href="detail.href"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group text-xs transition-colors duration-300"
                        >
                            <span
                                class="font-semibold text-slate dark:text-white"
                            >
                                {{ detail.label }}:
                            </span>

                            <span
                                class="ml-1 text-gray-500 dark:text-beige-100/60 group-hover:text-beige-500"
                            >
                                {{ detail.value }}
                            </span>
                        </a>
                    </div>
                </div>

                <div class="flex flex-col gap-2 items-start">
                    <div
                        class="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-beige-100/40"
                    >
                        Документы
                    </div>

                    <div class="flex flex-col gap-1.5">
                        <a
                            v-for="doc in documents"
                            :key="doc.href"
                            :href="doc.href"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="group text-xs transition-colors duration-300"
                        >
                            <span
                                class="text-gray-500 dark:text-beige-100/60 group-hover:text-beige-500"
                            >
                                {{ doc.label }}
                            </span>
                            
                        </a>
                        <NuxtLink class="text-gray-500 text-xs transition-colors duration-300 dark:text-beige-100/60 hover:text-beige-500" to="/privacy">Политика конфиденциальности</NuxtLink>
                    </div>
                </div>

                <div class="flex items-center gap-2 md:justify-end">
                    <a
                        v-for="link in contactIcons"
                        :key="link.href"
                        :href="link.href"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="link.label"
                        class="group flex h-9 w-9 items-center justify-center rounded-lg border border-beige-100 dark:border-gray-700 bg-white/70 dark:bg-gray-800/40 hover:border-beige-300 dark:hover:border-beige-500/40 transition-all duration-300"
                    >
                        <AppIcon
                            :name="link.icon"
                            class="w-4 h-4 text-beige-500 group-hover:scale-110 transition-transform duration-300"
                        />
                    </a>
                </div>

                
            </div>

            <div
                class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-5 mt-5 border-t border-beige-100 dark:border-gray-700"
            >
                <div class="w-max">
                    <Mervik />
                </div>
                <p class="max-w-4xl text-[11px] text-gray-400 dark:text-beige-100/40 md:text-right">*Слова «проверка» и «проверяющий» означают «общественный мониторинг» и «участник общественного мониторинга» соответственно</p>
                <p
                    class="max-w-4xl text-[11px] leading-relaxed text-gray-400 dark:text-beige-100/40 md:text-right"
                >
                    © 2025–{{ currentYear }}
                    <span class="font-bold text-slate dark:text-white">
                        FreshCheck
                    </span>
                    — независимая гражданская инициатива и не подменяет работу
                    официальных государственных контролирующих органов.
                    Основатель проекта: Роман Трошин.
                </p>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { BADGES_DOC_URL, DECLARATION_DOC_URL, PUBLIC_POLICY_DOC_URL, REGULATION_DOC_URL } from '~/data/docs'
import {
    TELEGRAM_FOUNDER,
    TELEGRAM_FOUNDER_PLACEHOLDER,
    EMAIL,
    EMAIL_PLACEHOLDER,
    VK_FOUNDER,
    VK_FOUNDER_PLACEHOLDER,
    PHONE,
    PHONE_PLACEHOLDER,
    TELEGRAM_CHANNEL,
    TIKTOK,
    VK_GROUP
} from '~/data/social'


const documents = [
    {
        label: 'Публичная политика',
        href: PUBLIC_POLICY_DOC_URL,
    },
    {
        label: 'Бейджи',
        href: BADGES_DOC_URL,
    },
    {
        label: 'Декларация',
        href: DECLARATION_DOC_URL,
    },
    {
        label: 'Положение',
        href: REGULATION_DOC_URL,
    },
]

const mode = useColorMode()
const isDark = computed(() => mode.value === 'dark')
const currentYear = new Date().getFullYear()

const contactIcons = [
    { href: TELEGRAM_CHANNEL, icon: 'telegram' as const, label: 'Telegram' },
    { href: TIKTOK, icon: 'tiktok' as const, label: 'TikTok' },
    { href: VK_GROUP, icon: 'vk' as const, label: 'ВКонтакте' },
]

const contactDetails = [
    { label: 'ТГ', value: TELEGRAM_FOUNDER_PLACEHOLDER, href: TELEGRAM_FOUNDER },
    { label: 'Почта', value: EMAIL_PLACEHOLDER, href: EMAIL },
    { label: 'Телефон', value: PHONE_PLACEHOLDER, href: PHONE },
    { label: 'ВКонтакте', value: VK_FOUNDER_PLACEHOLDER, href: VK_FOUNDER },
]

</script>