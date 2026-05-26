<template>
  <UIcon :name="icons[name]" :class="props.class">
    <template #loading>
      <USkeleton class="rounded" :class="props.class" />
    </template>
  </UIcon>
</template>

<script setup lang="ts">
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
  image: 'mdi:file-image-box',
  
  arrowDown: 'i-heroicons-arrow-down-20-solid',
  arrowRight: 'i-heroicons-arrow-right-20-solid',
  checkCircle: 'i-heroicons-check-circle-20-solid',
  chatBubble: 'tdesign:chat-bubble-filled',
  xCircle: 'i-heroicons-x-circle-20-solid',
  minus: 'i-heroicons-minus-20-solid',
  scale: 'i-heroicons-scale-20-solid',
  magnifyingGlass: 'i-heroicons-magnifying-glass-20-solid',
  documentText: 'i-heroicons-document-text-20-solid',
  handRaised: 'i-heroicons-hand-raised-20-solid',
  exclamationCircle: 'i-heroicons-exclamation-circle-20-solid',
  exclamationTriangle: 'i-heroicons-exclamation-triangle-20-solid',
  envelope: 'i-heroicons-envelope-20-solid',
  phone: 'i-heroicons-phone-20-solid',
  paperAirplane: 'i-heroicons-paper-airplane-20-solid',
  
  telegram: 'i-simple-icons-telegram',
  vk: 'i-simple-icons-vk',

  isOpen: 'i-heroicons-minus-20-solid',
  noOpen: 'i-heroicons-plus-20-solid',

  userPlus: 'i-heroicons-user-plus-20-solid',
  cameraHero: 'i-heroicons-camera-20-solid',
  chatBubbleSingle: 'i-heroicons-chat-bubble-20-solid',
  globeAlt: 'i-heroicons-globe-alt-20-solid',
  eye: 'i-heroicons-eye-20-solid',
  chatBubbleLeft: 'i-heroicons-chat-bubble-left-20-solid',
  arrowPath: 'i-heroicons-arrow-path-20-solid',
  userHero: 'i-heroicons-user-20-solid',
  bolt: 'i-heroicons-bolt-20-solid',
  shoppingBag: 'i-heroicons-shopping-bag-20-solid',
  buildingStorefront: 'i-heroicons-building-storefront-20-solid',
  handThumbUp: 'i-heroicons-hand-thumb-up-20-solid',
  users: 'i-heroicons-users-20-solid',
  heart: 'i-heroicons-heart-20-solid',
  identification: 'i-heroicons-identification-20-solid',
  bellAlert: 'i-heroicons-bell-alert-20-solid',
  cursorArrowRipple: 'i-heroicons-cursor-arrow-ripple-20-solid',
  trophy: 'i-heroicons-trophy-20-solid',
  buildingOffice: 'i-heroicons-building-office-20-solid',
  clipboardDocumentCheck: 'i-heroicons-clipboard-document-check-20-solid',
  arrowTrendingUp: 'i-heroicons-arrow-trending-up-20-solid',
  instagram: 'i-simple-icons-instagram',
  tiktok: 'i-simple-icons-tiktok',
  
  informationCircle: 'i-heroicons-information-circle-20-solid',
  starHero: 'i-heroicons-star-20-solid',
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