<template>
    <Transition name="menu-slide">
        <slot></slot>
    </Transition>
</template>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
    display: grid;
    transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                opacity 0.3s ease;
    overflow: hidden;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
    grid-template-rows: 0fr;
    opacity: 0;
}

.menu-slide-enter-to,
.menu-slide-leave-from {
    grid-template-rows: 1fr;
    opacity: 1;
}
</style>