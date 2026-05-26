<template>
  <UIcon :name="icons[name]" :class="props.class">
    <template #loading>
      <USkeleton class="rounded" :class="props.class" />
    </template>
  </UIcon>
</template>

<script setup lang="ts">
const icons = {
  square:            'ph:square-fill',
  star:              'ph:star',
  starFilled:        'ph:star-fill',
  posts:             'ph:pencil-simple-line',
  home:              'ph:house-fill',
  docs:              'ph:file-doc',
  error:             'ph:warning-circle',
  faq:               'ph:chat-circle-dots',
  hamburger:         'ph:list',
  user:              'ph:user',
  question:          'ph:question',
  shops:             'ph:storefront',
  badge:             'ph:address-book',
  report:            'ph:bug',
  calendarText:      'ph:calendar-blank',
  location:          'ph:map-pin',
  calendarMonth:     'ph:calendar',
  checkMark:         'ph:check-bold',
  arrowUp:           'ph:arrow-up',
  arrowUpDashed:     'ph:arrow-up-bold',
  camera:            'ph:camera',
  cross:             'ph:x',
  exit:              'ph:sign-out-bold',
  settings:          'ph:gear',
  share:             'ph:share-network',
  theme:             'ph:sun',
  trash:             'ph:trash-bold',
  loveOutline:       'ph:heart',
  loveFilled:        'ph:heart-fill',
  message:           'ph:chat-bold',
  menuDots:          'ph:dots-three-bold',
  right:             'ph:caret-right-fill',
  left:              'ph:caret-left-fill',
  paperclip:         'ph:paperclip',
  image:             'ph:file-image',
  chatBubble:        'ph:chat-fill',
  telegram:          'ph:telegram-logo',
  //не робит вк
  vk:                'ph:square-fill',
  instagram:         'ph:instagram-logo',
  tiktok:            'ph:tiktok-logo',

  arrowDown:              'i-heroicons-arrow-down-20-solid',
  arrowRight:             'i-heroicons-arrow-right-20-solid',
  checkCircle:            'i-heroicons-check-circle-20-solid',
  xCircle:                'i-heroicons-x-circle-20-solid',
  minus:                  'i-heroicons-minus-20-solid',
  scale:                  'i-heroicons-scale-20-solid',
  magnifyingGlass:        'i-heroicons-magnifying-glass-20-solid',
  documentText:           'i-heroicons-document-text-20-solid',
  handRaised:             'i-heroicons-hand-raised-20-solid',
  exclamationCircle:      'i-heroicons-exclamation-circle-20-solid',
  exclamationTriangle:    'i-heroicons-exclamation-triangle-20-solid',
  envelope:               'i-heroicons-envelope-20-solid',
  phone:                  'i-heroicons-phone-20-solid',
  paperAirplane:          'i-heroicons-paper-airplane-20-solid',
  isOpen:                 'i-heroicons-minus-20-solid',
  noOpen:                 'i-heroicons-plus-20-solid',
  userPlus:               'i-heroicons-user-plus-20-solid',
  cameraHero:             'i-heroicons-camera-20-solid',
  chatBubbleSingle:       'ph:square-fill',
  globeAlt:               'i-heroicons-globe-alt-20-solid',
  eye:                    'i-heroicons-eye-20-solid',
  chatBubbleLeft:         'ph:square-fill',
  arrowPath:              'i-heroicons-arrow-path-20-solid',
  userHero:               'i-heroicons-user-20-solid',
  bolt:                   'i-heroicons-bolt-20-solid',
  shoppingBag:            'i-heroicons-shopping-bag-20-solid',
  buildingStorefront:     'i-heroicons-building-storefront-20-solid',
  handThumbUp:            'i-heroicons-hand-thumb-up-20-solid',
  users:                  'i-heroicons-users-20-solid',
  heart:                  'i-heroicons-heart-20-solid',
  identification:         'i-heroicons-identification-20-solid',
  bellAlert:              'i-heroicons-bell-alert-20-solid',
  cursorArrowRipple:      'i-heroicons-cursor-arrow-ripple-20-solid',
  trophy:                 'i-heroicons-trophy-20-solid',
  buildingOffice:         'i-heroicons-building-office-20-solid',
  clipboardDocumentCheck: 'i-heroicons-clipboard-document-check-20-solid',
  arrowTrendingUp:        'i-heroicons-arrow-trending-up-20-solid',
  informationCircle:      'i-heroicons-information-circle-20-solid',
  starHero:               'i-heroicons-star-20-solid',
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