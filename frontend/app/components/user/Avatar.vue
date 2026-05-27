<template>
  <div :class="[sizeClasses[size], 'relative overflow-hidden rounded-full']">

    <USkeleton
      v-if="isLoading"
      class="absolute inset-0 rounded-full"
    />

    <img
      ref="imgRef"
      :src="buildApiUrl(avatar.url)"
      alt="avatar"
      class="w-full h-full object-cover transition-opacity duration-300"
      :class="isLoading ? 'opacity-0' : 'opacity-100'"
      :draggable="false"
      @load="handleLoad"
    />
  </div>
</template>

<script setup lang="ts">
import type { PhotoMeta } from '~/types/photo.types';

const imgRef = ref<HTMLImageElement | null>(null)
type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const { buildApiUrl } = useApiBuilder()

const props = defineProps<{
  avatar: PhotoMeta
  size: AvatarSize
}>()

const isLoading = ref(true)

onMounted(() => {
  if (imgRef.value?.complete) {
    isLoading.value = false
  }
})

const handleLoad = () => {
  isLoading.value = false
}

watch(
  () => props.avatar?.thumbnailURL,
  () => {
    isLoading.value = true
  }
)

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'w-6 h-6',
  sm: 'w-4 h-4',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
  xl: 'w-24 h-24',
  '2xl': 'w-36 h-36',
}

</script>