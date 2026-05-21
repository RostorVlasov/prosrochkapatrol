//сгенерировано ИИ для десктопа нужны правки. Просто чтобы было

<template>
    <!-- Header: Фиксированная шапка -->
    <header class="fixed z-50 right-0 left-0 top-0 px-5 py-2 md:py-4 md:px-8 bg-white/80 dark:bg-black/80 backdrop-blur-2xl dark:border-0 border-b border-gray-200 transition-colors flex justify-between items-center">
         <NuxtLink to="/">
            <!-- Уменьшил логотип на десктопе для пропорций, можешь убрать w-32 если не нужно -->
            <img class="w-32 h-auto md:w-40" :src="mode.value === 'dark' ? '/freshcheck-light.png' : '/freshcheck.png'" alt="FreshCheck Logo">
         </NuxtLink>

         <!-- Desktop Navigation (Скрыто на мобильных, видно на md и выше) -->
         <nav class="hidden md:flex items-center gap-6">
            <NuxtLink to="/" class="text-gray-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-500 font-medium transition-colors">Главная</NuxtLink>
            <NuxtLink to="/blog" class="text-gray-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-500 font-medium transition-colors">Блог</NuxtLink>
            <NuxtLink to="/shops" class="text-gray-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-500 font-medium transition-colors">Магазины</NuxtLink>
            <NuxtLink to="/badges" class="text-gray-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-500 font-medium transition-colors">Бейджи</NuxtLink>

            <!-- Выпадающее меню для второстепенных ссылок -->
            <div class="relative group">
                <button class="flex items-center gap-1 text-gray-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-500 font-medium transition-colors focus:outline-none">
                    Ещё
                    <!-- Иконка стрелочки (опционально) -->
                    <svg class="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                
                <!-- Dropdown Content -->
                <div class="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50 p-2">
                    <div class="flex flex-col gap-1">
                        <NuxtLink to="/faq" class="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-200">Часто задаваемые вопросы (FAQ)</NuxtLink>
                        <NuxtLink to="/admin-info" class="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-200">Информация для администраций</NuxtLink>
                        <NuxtLink to="/docs" class="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-200">Документы проекта</NuxtLink>
                        <div class="h-px bg-gray-200 dark:bg-gray-700 my-1"></div>
                        <NuxtLink to="/report-violation" class="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-200">Сообщить о нарушении</NuxtLink>
                        <NuxtLink to="/report-error" class="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-200">Ошибка или неточность в отчёте</NuxtLink>
                    </div>
                </div>
            </div>
         </nav>

         <!-- Кнопка смены темы -->
         <button @click="toggleColorMode" class="text-gray-800 dark:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <AppIcon class="size-6 md:size-8" name="theme"/>
        </button>
    </header>

    <!-- Main Content: Контейнер -->
    <div class="dark:bg-gray-800 dark:text-white text-black min-h-screen transition-colors">
        <!-- pt-20 (80px) для мобильного хедера, md:pt-24 (96px) для десктопного хедера. pb-14 только для мобильного -->
        <div @click="menuActive = false" class="pt-20 pb-14 md:pb-0 md:pt-24 px-0 md:px-8 transition-all">
            <slot></slot>
        </div>
    </div>
    
    <!-- Mobile Bottom Navigation: Видно только на мобильных (md:hidden) -->
    <nav class="fixed bottom-0 right-0 left-0 z-40 md:hidden bg-surface-base/90 dark:bg-black/90 backdrop-blur-md rounded-tr-2xl rounded-tl-2xl border-t border-gray-200 dark:border-gray-800">
        <!-- Slide up Menu (FAQ и т.д. на мобильном) -->
        <MenuSlide>
            <div v-if="menuActive" class="p-5 flex flex-col gap-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <MobileMenuItem to="/faq">Часто задаваемые вопросы (FAQ)</MobileMenuItem>
                <MobileMenuItem to="/admin-info">Информация для администраций магазинов</MobileMenuItem>
                <MobileMenuItem to="/docs">Документы проекта FreshCheck</MobileMenuItem>
                <MobileMenuItem to="/report-violation">Сообщить о нарушении</MobileMenuItem>
                <MobileMenuItem to="/report-error">Ошибка или неточность в отчёте</MobileMenuItem>
            </div>
        </MenuSlide>

        <!-- Иконки нижней панели -->
        <div class="py-3 pb-6 px-8">
            <div class="flex justify-between items-center">
                <MobileNavItem @click="menuActive = false" icon="home" to="/"></MobileNavItem>
                <MobileNavItem @click="menuActive = false" icon="posts" to="/blog"></MobileNavItem>
                <MobileNavItem @click="menuActive = false" class="h-6 w-6" icon="shops" to="/shops"></MobileNavItem>
                <MobileNavItem @click="menuActive = false" class="h-7 w-7" icon="badge" to="/badges"></MobileNavItem>
                
                <!-- Кнопка меню (FAQ) на мобильном -->
                <div class="flex items-center" @click="menuActive = !menuActive">
                    <AppIcon :class="`${menuActive ? 'text-surface-brown' : 'text-gray-500 dark:text-gray-400'} size-7 transition-colors`"
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

<style scoped>
/* Если нужно, чтобы градиент тени работал именно на дропдауне */
.group:hover .group-hover\:block {
    display: block;
}
</style>