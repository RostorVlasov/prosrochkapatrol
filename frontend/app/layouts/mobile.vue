<template>
    <header class="px-5 absolute z-50 right-0 left-0 top-0 py-2 bg-white dark:border-0 border-b border-gray-200 backdrop-blur-2xl dark:bg-black/70 flex justify-between">
         <NuxtLink to="/">
            <img class="w-50 h-auto" :src="mode.value === 'dark' ? '/freshcheck-light.png' : '/freshcheck.png'" alt="">
         </NuxtLink>
        <button @click="toggleColorMode" class="text-gray-800 dark:text-white">
            <AppIcon class="size-8" name="theme"/>
        </button>
    </header>
    <div class="dark:text-white text-black min-h-screen transition-colors">
        <div @click="menuActive = false" class="pt-20 pb-14">
            <slot></slot>
        </div>
    </div>
    
    <nav class="fixed bottom-0 right-0 left-0 z-99 dark:bg-surface-base bg-beige-500 rounded-tr-2xl rounded-tl-2xl">
        <MenuSlide>
        <div v-if="menuActive" class="p-5 flex flex-col gap-4">
            <MobileMenuItem @click="menuActive = false" to="">Часто задаваемые вопросы (FAQ)</MobileMenuItem>
            <MobileMenuItem @click="menuActive = false" to="">Информация для администраций магазинов</MobileMenuItem>
            <MobileMenuItem @click="menuActive = false" to="">Документы проекта FreshCheck</MobileMenuItem>
            <MobileMenuItem @click="menuActive = false" to="/badges">Бейджики участников</MobileMenuItem>
            <MobileMenuItem @click="menuActive = false" to="">Ошибка или неточность в отчёте</MobileMenuItem>
        </div>
        </MenuSlide>
        <div class="py-3 pb-6 px-8">
            <div class="flex justify-between mobile-navbar items-center">
                <MobileNavItem @click="menuActive = false" icon="home" to="/"></MobileNavItem>
                <MobileNavItem @click="menuActive = false" icon="posts" to="/blog"></MobileNavItem>
                <MobileNavItem @click="menuActive = false" class="h-6 w-6" icon="shops" to="/shops"></MobileNavItem>
                <MobileNavItem @click="menuActive = false" class="h-8 w-8" icon="report" to="/report"></MobileNavItem>
                <div class="flex items-center" @click="menuActive = !menuActive">
                    <AppIcon :class="`${menuActive ? 'dark:text-surface-brown text-white' : 'dark:text-white text-beige-100'} size-7`"
                    name="faq" />
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>

const menuActive = ref<boolean>(false)
const mode = useColorMode()

function toggleColorMode() {
    if (mode.value === 'dark') {
        mode.preference = 'light'
    } else {
        mode.preference = 'dark'
    }
}

useHead({
    meta: [
        { name: 'theme-color', content: '#6a7282' }
    ]
})

</script>
