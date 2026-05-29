<template>
    <section class="py-24">
        <BaseSectionHeader pill="Люди проекта" title-before="Кто" title-italic="мы такие"
            subtitle="Мы — не контролирующий орган и не журналисты. Мы обычные жители Астрахани, которым не всё равно"
            centered />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamMemberCard v-for="member in teamMembers" :key="member.name" v-bind="member" />
        </div>
        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="info in teamInfo" :key="info.title"
                class="p-6 bg-white dark:bg-gray-700 rounded-2xl border border-beige-100 dark:border-gray-500">
                <div class="flex gap-4 items-start">
                    <div
                        class="w-12 h-12 bg-beige-100 dark:bg-gray-500 rounded-xl flex items-center justify-center shrink-0">
                        <AppIcon :name="info.icon" class="w-6 h-6 text-beige-500" />
                    </div>
                    <div>
                        <h3 class="font-bold text-lg mb-2">{{ info.title }}</h3>
                        <p class="text-gray-500 dark:text-beige-100/70 text-sm leading-relaxed">{{ info.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { teamInfo, teamMembers } from '~/data/data';

</script>