<template>
    <AdaptiveContainer class="dark:bg-surface-base bg-stone-100 rounded-md">
        <div>
            <div class="flex gap-4 mb-6 items-center">
                <NuxtLink to="/blog" class="flex items-center gap-3">
                    <AppIcon name="arrowUp" class="rotate-270 size-6" />
                    <span class="text-xl font-semibold">Назад</span>
                </NuxtLink>
            </div>
        </div>
        <div class="mb-4 flex gap-2 items-center">
            <Avatar v-if="post.admin_panel.author?.avatar" size="md" :avatar="post.admin_panel.author?.avatar"/>
            <span class="font-semibold text-md">{{ post.admin_panel.author?.name }}</span>
            <span> - </span>
            <span class="text-sm">{{ formatDate(post.updatedAt) }}</span>
        </div>

        <div v-if="post.rubrics && post.rubrics.length > 0" class="flex items-center gap-3 text-center">
            <p class="dark:text-gray-200 text-gray-700 text-lg">Рубрики -</p>
            <div class="flex select-none gap-2 flex-wrap text-sm">
                <span class="p-2 py-1 text-white bg-surface-brown uppercase rounded-md"
                    v-for="rubric in post.rubrics">{{
                        rubric.name }}</span>
            </div>

        </div>
        <div>
            <h1 class="text-2xl mt-4 font-bold">{{ post.title }}</h1>
            <img v-if="post.cover" :src="buildApiUrl(post.cover.url)" :alt="post.cover.alt ? post.cover.alt : 'обложка'"
                class="rounded-lg shadow-xl mt-4" />
        </div>

        <LexicalRender class="mt-2" :node="post.body.root" />
    </AdaptiveContainer>
</template>

<script lang="ts" setup>
import type { PostDoc } from '~/types/post.types';
import LexicalRender from '../shared/LexicalRender.vue';

const { buildApiUrl } = useApiBuilder()

defineProps<{
    post: PostDoc
}>()

</script>