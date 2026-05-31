<template>
    <section id="contacts" class="py-24">
        <div class="text-center">
            <BaseSectionHeader pill="Связь" title-before="Остались вопросы?" title-italic="Пишите"
                subtitle="Основатель проекта отвечает быстро и по-честному" centered />
            <div class="flex flex-col gap-4 justify-center mb-2 w-full sm:px-12 mx-auto">
                <ContactCard v-for="btn in contactButtons" :key="btn.title" v-bind="btn" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { PHONE, PHONE_PLACEHOLDER, PRESS_EMAIL, PRESS_EMAIL_PLACEHOLDER, TELEGRAM_FOUNDER, TELEGRAM_FOUNDER_PLACEHOLDER, VK_FOUNDER, VK_FOUNDER_PLACEHOLDER } from '~/data/social';
import type { ContactButtonProps } from '~/types/props.types';

const contactButtons: ContactButtonProps[] = [
    { href: TELEGRAM_FOUNDER, icon: 'telegram', title: 'Telegram',   value: TELEGRAM_FOUNDER_PLACEHOLDER },
    { href: VK_FOUNDER,       icon: 'vk',       title: 'ВКонтакте',  value: VK_FOUNDER_PLACEHOLDER },
    { href: PRESS_EMAIL,            icon: 'envelope', title: 'Email',      value: PRESS_EMAIL_PLACEHOLDER },
    { href: PHONE,            icon: 'phone',    title: 'Телефон',    value: PHONE_PLACEHOLDER },
]

</script>