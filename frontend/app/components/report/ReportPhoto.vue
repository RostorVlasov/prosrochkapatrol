<template>
    <div class="space-y-3">
        <div>
            <p class="text-sm font-medium text-stone-800 dark:text-stone-200 mb-0.5">
                Прикрепите фотографии
            </p>
            <p class="text-xs text-stone-400 dark:text-stone-500">
                Фото помогут точнее оценить нарушение. Принимаются JPEG, PNG, WebP до 10 МБ каждое.
            </p>
        </div>

        <!-- Dropzone -->
        <div class="relative border-2 border-dashed rounded-xl transition-colors" :class="isDragging
            ? 'border-beige-400 bg-beige-50 dark:bg-beige-950/20'
            : 'border-stone-300 dark:border-stone-600 hover:border-beige-400 dark:hover:border-beige-500'"
            @dragover.prevent="$emit('update:isDragging', true)" @dragleave.prevent="$emit('update:isDragging', false)"
            @drop.prevent="$emit('drop', $event)">
            <input ref="fileInputRef" type="file" accept="image/jpeg,image/png,image/webp" multiple
                class="absolute inset-0 opacity-0 cursor-pointer w-full h-full" @change="$emit('fileChange', $event)" />
            <div class="flex flex-col items-center justify-center gap-2 py-8 px-4 pointer-events-none select-none">
                <div class="size-10 rounded-full bg-stone-100 dark:bg-stone-700 flex items-center justify-center">
                    <svg class="size-5 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                    </svg>
                </div>
                <p class="text-sm text-stone-600 dark:text-stone-300 text-center">
                    Перетащите фото сюда или
                    <span class="text-beige-600 dark:text-beige-400 font-medium">нажмите для выбора</span>
                </p>
                <p class="text-xs text-stone-400 dark:text-stone-500">Можно несколько файлов сразу</p>
            </div>
        </div>

        <!-- Preview grid -->
        <TransitionGroup v-if="items.length" tag="div" name="photo" class="grid grid-cols-3 gap-2">
            <div v-for="item in items" :key="item.id"
                class="relative aspect-square rounded-lg overflow-hidden bg-stone-200 dark:bg-stone-700 group">
                <img :src="item.previewUrl" :alt="item.file.name" class="w-full h-full object-cover" />

                <!-- uploading -->
                <div v-if="item.status === 'uploading'"
                    class="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-1.5">
                    <svg class="size-5 text-white animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2.5" />
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    <span class="text-white text-xs font-medium">{{ item.progress }}%</span>
                </div>

                <!-- done -->
                <div v-else-if="item.status === 'done'"
                    class="absolute top-1.5 right-1.5 size-5 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg class="size-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>

                <!-- error -->
                <div v-else-if="item.status === 'error'"
                    class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-1 px-2">
                    <svg class="size-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span class="text-red-300 text-xs text-center leading-tight">{{ item.errorMessage }}</span>
                    <button type="button" class="text-xs text-white underline mt-0.5 cursor-pointer"
                        @click.stop="$emit('retry', item)">
                        Повторить
                    </button>
                </div>

                <!-- remove -->
                <button v-if="item.status === 'idle' || item.status === 'done'" type="button"
                    class="absolute top-1.5 right-1.5 size-5 rounded-full bg-black/50 hover:bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    @click.stop="$emit('remove', item.id)">
                    <svg class="size-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="3" stroke-linecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <!-- filename -->
                <div
                    class="absolute bottom-0 inset-x-0 bg-black/40 px-1.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p class="text-white text-xs truncate">{{ item.file.name }}</p>
                </div>
            </div>
        </TransitionGroup>

        <!-- summary -->
        <p v-if="items.length" class="text-xs text-stone-400 dark:text-stone-500">
            {{ uploadedCount }} из {{ items.length }} загружено
            <span v-if="errorCount" class="text-red-400 ml-1">· {{ errorCount }} с ошибкой</span>
        </p>
    </div>
</template>

<script lang="ts" setup>


defineProps<{
    items: PhotoItem[]
    isDragging: boolean
    uploadedCount: number
    errorCount: number
}>()

defineEmits<{
    'update:isDragging': [val: boolean]
    'fileChange': [e: Event]
    'drop': [e: DragEvent]
    'retry': [item: PhotoItem]
    'remove': [id: string]
}>()
</script>

<style scoped>
.photo-enter-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.photo-leave-active {
    transition: opacity 0.15s ease, transform 0.15s ease;
    position: absolute;
}

.photo-enter-from {
    opacity: 0;
    transform: scale(0.9);
}

.photo-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>