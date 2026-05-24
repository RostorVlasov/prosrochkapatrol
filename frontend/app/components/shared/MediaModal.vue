<template>
    <Teleport to="body">
        <Transition name="modal-fade">
            <div v-if="model !== null"
                class="fixed inset-0 z-100 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md"
                @click.self="close">
                
                <button @click="close"
                    class="absolute top-6 right-6 z-10 text-white flex items-center justify-center hover:text-gray-300 transition-colors"
                    aria-label="Закрыть">
                    <AppIcon name="cross" class="flex size-10" />
                </button>

                <div class="absolute top-6 left-6 z-10 bg-black/70 text-white text-sm px-3.5 py-1.5 rounded-full pointer-events-none">
                    {{ model + 1 }} / {{ images.length }}
                </div>

                <div class="relative w-full flex-1 overflow-hidden">
                    <Swiper
                        :modules="modules"
                        :initial-slide="modelValue || 0"
                        :zoom="true"
                        :keyboard="true"
                        class="h-full w-full"
                        @slideChange="onSlideChange"
                        @click="handleSwiperClick"
                        @swiper="onSwiper"
                        style="touch-action: pan-y;" 
                        ref="swiperRef"
                    >
                        <SwiperSlide v-for="(img, idx) in images" :key="idx" class="flex items-center justify-center">
                            <div class="swiper-zoom-container w-full h-full flex items-center justify-center">
                                <img :src="buildApiUrl(img.photo.url)"
                                    class="max-w-full max-h-full object-contain rounded-2xl pointer-events-none select-none"
                                    draggable="false" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div v-if="images.length > 1"
                    ref="thumbnailsRef"
                    class="w-full flex gap-2.5 overflow-x-auto pb-safe mb-2  px-4 py-3 scrollbar-hide snap-x snap-mandatory">
                    <img v-for="(img, idx) in images" :key="idx"
                        :src="buildApiUrl(img.photo.url)"
                        class="w-14 h-14 shrink-0 object-cover rounded-xl cursor-pointer border-2 transition-all snap-start"
                        :class="modelValue === idx ? 'border-white scale-105' : 'border-transparent opacity-50'"
                        @click="goTo(idx)" />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import type { Photo } from '~/types/photo.types'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Zoom, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/keyboard'

const swiperInstance = ref<any>(null)
const thumbnailsRef = ref<HTMLElement | null>(null)

const props = defineProps<{
    images: Photo[]
}>()

const scrollThumbnailIntoView = (idx: number) => {
    const container = thumbnailsRef.value
    if (!container) return
    const thumb = container.children[idx] as HTMLElement
    if (!thumb) return
    const containerCenter = container.offsetWidth / 2
    const thumbCenter = thumb.offsetLeft + thumb.offsetWidth / 2
    container.scrollTo({ left: thumbCenter - containerCenter, behavior: 'smooth' })
}

const model = defineModel<number | null>({required: true})

const { buildApiUrl } = useApiBuilder()
const modules = [Zoom, Keyboard]

const onSwiper = (swiper: any) => {
    swiperInstance.value = swiper;
};

const close = () => {
    model.value = null
}

const goTo = (idx: number) => {
    model.value = idx
    swiperInstance.value.slideTo(idx)
    scrollThumbnailIntoView(idx)
}

const onSlideChange = (swiper: any) => {
    if (model.value !== swiper.activeIndex) {
        model.value = swiper.activeIndex
        scrollThumbnailIntoView(swiper.activeIndex)
    }
}

const handleSwiperClick = (swiper: any) => {
    if (swiper.zoom.scale === 1) {
        close()
    }
}

watch(model, (val) => {
    document.body.style.overflow = val !== null ? 'hidden' : ''
})

onUnmounted(() => {
    document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.pb-safe {
    padding-bottom: env(safe-area-inset-bottom, 12px);
}
</style>