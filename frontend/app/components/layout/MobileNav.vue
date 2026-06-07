<template>
    <nav class="lg:hidden fixed bottom-0 right-0 left-0 z-50
        dark:bg-surface-base bg-beige-500 rounded-tr-2xl rounded-tl-2xl">

        <div class="menu-slide" :class="{ 'menu-open': menuActive }">
            <div class="menu-inner">
                <div class="p-5 flex flex-col gap-4">
                    <MobileMenuItem v-for="page in pages.other" :icon="page.icon" @click="menuActive = false" :to="page.url">
                        {{ page.name }}
                    </MobileMenuItem>
                </div>
            </div>
        </div>

        <div class="py-3 pb-6 px-8">
            <div class="flex justify-between items-center mobile-navbar">
                <MobileNavItem v-for="page in pages.sidebar" @click="menuActive = false" :label="page.name" :icon="page.icon"
                    :to="page.url" />
                <div class="flex items-center cursor-pointer" @click.stop="menuActive = !menuActive">
                    <AppIcon :class="`size-8 ${menuActive
                        ? 'dark:text-surface-brown text-white'
                        : 'dark:text-white text-beige-100'}`" name="hamburger" />
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { pages } from '~/data/pages';

const menuActive = defineModel({ required: true })

</script>

<style scoped>
.menu-slide {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.3s ease;
}

.menu-slide.menu-open {
    grid-template-rows: 1fr;
    opacity: 1;
}

.menu-inner {
    overflow: hidden;
}
</style>