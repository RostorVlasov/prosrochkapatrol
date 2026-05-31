<template>
    <section class="py-24">
        <div>
            <BaseSectionHeader pill="Правовые основания" title-before="Почему наша работа"
                title-italic="полностью законна" centered />

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div v-for="block in legalBlocks" :key="block.title"
                    class="bg-white dark:bg-gray-700 rounded-3xl p-8 border border-beige-100 dark:border-gray-500 min-w-0">
                    <div
                        class="w-14 h-14 bg-beige-100 dark:bg-gray-500 rounded-2xl flex items-center justify-center mb-6">
                        <AppIcon :name="block.icon" class="w-7 h-7 text-beige-500" />
                    </div>
                    <h3 class="sm:text-2xl text-lg font-bold mb-4">{{ block.title }}</h3>
                    <ul class="space-y-4 text-gray-500 dark:text-beige-100/80 text-sm sm:text-base">
                        <li v-for="item in block.items" :key="item.text" class="flex gap-3">
                            <AppIcon name="checkCircle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            <span>
                                <span v-if="item.label" class="font-bold">{{ item.label }}</span>{{
                                    item.text }}
                            </span>
                        </li>
                    </ul>
                    <p class="mt-6 text-sm text-beige-500">{{ block.note }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { legalBlocks } from '~/data/data';

</script>
