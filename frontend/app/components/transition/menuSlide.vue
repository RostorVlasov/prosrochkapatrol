<template>
    <Transition name="menu-slide">
        <slot></slot>
    </Transition>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
    transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
    overflow: hidden;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
    max-height: 0;
    opacity: 0;
}

.menu-slide-enter-to,
.menu-slide-leave-from {
    max-height: 350px;
}
</style>