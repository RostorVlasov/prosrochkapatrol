<template>
    <div class="flex select-none gap-y-1.5 gap-1.5 flex-wrap text-sm">
        <span
            v-for="rubric in sortedRubrics"
            :key="rubric.id"
            @click.stop.prevent="handleRubricClick(rubric)"
            class="p-1 py-px text-[10px] md:text-sm w-max wrap-break-word text-white bg-surface-brown uppercase rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
            :class="blogStore.selectedRubricIds.includes(rubric.id) && 'border dark:border-white border-zinc-900'"
        >
            {{ rubric.name }}
        </span>
    </div>
</template>

<script lang="ts" setup>
import type { Rubric } from '~/types/rubrics.types';
import { pages } from '~/data/pages';
import { useBlogStore } from '~/stores/blog';

const props = defineProps<{
    rubrics: Rubric[]
}>()

const blogStore = useBlogStore()
const router = useRouter()
const route = useRoute()

const sortedRubrics = computed(() => {
    return [...props.rubrics].sort((a, b) => a.name.length - b.name.length)
})

const handleRubricClick = (rubric: Rubric) => {
    blogStore.toggleRubric(rubric.id)
    if (route.path !== pages.sidebar.news.url) {
        router.push(pages.sidebar.news.url)
    }
}
</script>