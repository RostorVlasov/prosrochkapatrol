<template>
    <NuxtLink :to="`${pages.sidebar.news.url}/${post.id}`" class="h-full">
        <div
            class="p-4 h-full flex flex-col pb-6 active:dark:bg-gray-600 hover:dark:bg-gray-600 dark:bg-gray-700 bg-white active:bg-stone-100 hover:bg-stone-100 transition-colors rounded-xl">

            <div>
                <div class="mb-4 flex gap-2 items-center">
                    <Avatar v-if="post.admin_panel.author?.avatar" size="md"
                        :avatar="post.admin_panel.author?.avatar" />
                    <span class="font-semibold text-md">{{ post.admin_panel.author?.name }}</span>
                    <span class="dark:text-gray-300 text-gray-700"> - </span>
                    <span class="text-sm dark:text-gray-300 text-gray-700">{{ formatDate(post.updatedAt) }}</span>
                </div>

                <MediaGallery v-if="post.cover" class="pointer-events-none aspect-video" :images="[{
                    id: post.cover.id,
                    photo: post.cover
                }]" />
                <RubricList class="mt-3" v-if="post.rubrics && post.rubrics.length > 0" :rubrics="post.rubrics" />
            </div>

            <div class="flex-1 flex flex-col mt-2">
                <h4 class="md:text-2xl text-xl mt-auto font-bold">{{ post.title }}</h4>
            </div>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
import { pages } from '~/data/pages';
import type { PostDoc } from '~/types/post.types';

const props = defineProps<{
    post: PostDoc
}>()


</script>