<template>
    <UApp :toaster="{
        position: 'top-right',
        duration: 5000,
        expand: true,
        class: 'my-custom-toast',
    }">
        <NuxtLayout>
            <NuxtLoadingIndicator color="#A0876E" errorColor="#f44336" />
            <slot></slot>
            <AppFooter />
        </NuxtLayout>
    </UApp>
</template>