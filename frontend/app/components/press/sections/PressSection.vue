<template>
    <section id="press" class="py-24">
        <div class="text-center mb-20">
            <SectionPill>Пресс-центр</SectionPill>
            <h2 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                Для <span class="italic text-beige-500">журналистов</span> и СМИ
            </h2>
            <p class="text-xl text-gray-500 dark:text-off-white/70 max-w-3xl mx-auto">
                Справочная информация, контакты для комментариев и правила использования материалов
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div class="space-y-6">
                <div class="bg-off-white/20 dark:bg-gray-500/20 rounded-2xl p-6 border border-beige-500/20">
                    <h3 class="font-bold text-lg sm:text-xl mb-3 flex items-center gap-2">
                        <AppIcon name="identification" class="w-6 h-6 text-beige-500" />
                        Кто мы (по документам)
                    </h3>
                    <ul class="space-y-3 text-gray-500 dark:text-off-white/80">
                        <li v-for="(item, i) in whoWeAreList" :key="i" class="flex gap-2 text-sm sm:text-base">
                            <AppIcon name="checkCircle" class="w-5 h-5 text-beige-500 shrink-0 mt-0.5" />
                            <span v-html="item"></span>
                        </li>
                    </ul>
                </div>

                <div class="bg-white dark:bg-slate rounded-3xl p-8 border border-off-white dark:border-gray-500">
                    <h3 class="font-bold text-lg sm:text-xl mb-4 flex items-center gap-2">
                        <AppIcon name="cameraHero" class="w-6 h-6 text-beige-500" />
                        Чем занимаемся
                    </h3>
                    <ul class="space-y-3 text-gray-500 text-sm sm:text-base dark:text-off-white/80">
                        <li v-for="(item, i) in whatWeDoList" :key="i" class="flex gap-2">
                            <AppIcon name="arrowRight" class="w-5 h-5 text-beige-500 shrink-0 mt-0.5" />
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-white dark:bg-slate rounded-3xl p-8 border border-off-white dark:border-gray-500">
                    <h3 class="font-bold text-base sm:text-xl mb-4 flex items-center gap-2">
                        <AppIcon name="userCircle" class="w-6 h-6 text-beige-500" />
                        Контакт для комментариев
                    </h3>
                    <div class="flex items-start gap-4 mb-6">
                        <div class="size-12 sm:size-14 bg-beige-500 rounded-2xl flex items-center justify-center shrink-0">
                            <span class="text-xl font-bold text-white">РТ</span>
                        </div>
                        <div>
                            <p class="font-bold text-lg text-slate dark:text-white">Роман Трошин</p>
                            <p class="text-beige-500 font-medium">Основатель проекта</p>
                        </div>
                    </div>

                    <div class="space-y-3 text-sm sm:text-base text-gray-500 dark:text-off-white/80">
                        <a v-for="(contact, i) in contactList" :key="i" :href="contact.link"
                            class="flex items-center gap-2 group hover:text-beige-500 transition-colors">
                            <AppIcon :name="contact.icon" class="w-5 h-5 text-beige-500" />
                            <span>{{ contact.label }}: <span class="font-bold">{{ contact.value }}</span></span>
                        </a>
                    </div>
                </div>

                <div class="bg-off-white/20 dark:bg-gray-500/20 rounded-2xl p-6 border border-beige-500/20">
                    <h3 class="font-bold text-xl mb-3 flex items-center gap-2">
                        <AppIcon name="documentDuplicate" class="w-6 h-6 text-beige-500" />
                        Использование материалов
                    </h3>
                    <p class="text-gray-500 dark:text-off-white/80 leading-relaxed mb-4">
                        Любой желающий вправе использовать информацию и тексты публикаций проекта на своих сайтах и
                        ресурсах <span class="font-bold">при условии сохранения ссылки на источник</span>.
                    </p>
                    <p class="text-sm text-gray-500 dark:text-off-white/60">
                        При цитировании материалов СМИ руководствуемся ст. 1274 ГК РФ: цитирование в объёме, оправданном
                        целью, с указанием источника и автора.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import AppIcon, { type IconName } from '@/components/ui/AppIcon.vue'
import { whatWeDoList, whoWeAreList } from '~/data/data';
import { EMAIL, EMAIL_PLACEHOLDER, PHONE, PHONE_PLACEHOLDER, TELEGRAM_FOUNDER, TELEGRAM_FOUNDER_PLACEHOLDER } from '~/data/social';
  

interface ContactType {
    icon: IconName,
    label: string,
    value: string,
    link: string
}

const contactList: ContactType[] = [
    {
        icon: 'telegram',
        label: 'Telegram',
        value: TELEGRAM_FOUNDER_PLACEHOLDER,
        link: TELEGRAM_FOUNDER
    },
    {
        icon: 'phone',
        label: 'Телефон',
        value: PHONE_PLACEHOLDER,
        link: PHONE
    },
    {
        icon: 'envelope',
        label: 'Email',
        value: EMAIL_PLACEHOLDER,
        link: EMAIL
    }
]

</script>