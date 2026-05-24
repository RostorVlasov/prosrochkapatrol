<template>
    <Icon :name="icons[props.name]" :class="props.class">
        <template #loading>
            <USkeleton class="rounded" :class="props.class" />
        </template>
    </Icon>
</template>

<script setup lang="ts">
// @iconify-json/ic ic:baseline-square ic:baseline-star
// @iconify-json/solar solar:posts-carousel-horizontal-bold-duotone solar:heart-bold solar:heart-linear solar:trash-bin-trash-bold solar:menu-dots-bold
// @iconify-json/material-symbols material-symbols:home-outline-rounded material-symbols:person-book-outline-sharp material-symbols:bug-report-outline material-symbols:location-on material-symbols:calendar-month material-symbols:android-camera material-symbols:settings material-symbols:light-mode
// @iconify-json/streamline streamline:interface-help-question-circle-circle-faq-frame-help-info-mark-more-query-question streamline:shopping-store-1-store-shop-shops-stores
// @iconify-json/mdi mdi:calendar-text mdi:file-image-box
// @iconify-json/fluent-emoji-high-contrast fluent-emoji-high-contrast:check-mark
// @iconify-json/tabler tabler:arrow-up tabler:arrow-narrow-up-dashed
// @iconify-json/mingcute mingcute:share-forward-line mingcute:right-fill mingcute:left-fill
// @iconify-json/iconamoon iconamoon:comment-bold
// @iconify-json/fluent fluent:arrow-exit-24-filled
// @iconify-json/maki maki:cross-11

const icons = {
    square: 'ic:baseline-square',
    star: 'material-symbols:kid-star-outline',
    posts: 'solar:pen-new-square-linear',
    home: 'fluent:home-16-filled',
    docs: 'material-symbols:docs',
    error: 'material-symbols:error-outline',
    faq: 'streamline-ultimate:contact-us-faq',
    hamburger: 'solar:hamburger-menu-outline',
    user: 'mdi:account',
    question: 'mdi:help-circle-outline',
    shops: 'solar:shop-linear',
    starFilled: 'material-symbols:kid-star',
    badge: 'material-symbols:person-book-outline-sharp',
    report: 'solar:bug-outline',
    calendarText: 'mdi:calendar-text',
    location: 'material-symbols:location-on',
    calendarMonth: 'material-symbols:calendar-month',
    checkMark: 'fluent-emoji-high-contrast:check-mark',
    arrowUp: 'tabler:arrow-up',
    arrowUpDashed: 'tabler:arrow-narrow-up-dashed',
    camera: 'material-symbols:android-camera',
    cross: 'maki:cross-11',
    exit: 'fluent:arrow-exit-24-filled',
    settings: 'material-symbols:settings',
    share: 'mingcute:share-forward-line',
    theme: 'material-symbols:light-mode',
    trash: 'solar:trash-bin-trash-bold',
    loveOutline: 'solar:heart-linear',
    loveFilled: 'solar:heart-bold',
    message: 'iconamoon:comment-bold',
    menuDots: 'solar:menu-dots-bold',
    right: 'mingcute:right-fill',
    left: 'mingcute:left-fill',
    paperclip: 'streamline-flex:paperclip-1',
    image: 'mdi:file-image-box'
} as const

export type IconName = keyof typeof icons

const props = withDefaults(defineProps<{
    name?: IconName
    class?: string
}>(), {
    name: 'square',
    class: 'size-5 text-icon-primary flex'
})
</script>