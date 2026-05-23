<template>
    <NuxtLink :to="'/blog/' + post.id">
        <div class="p-4 pb-6 active:dark:bg-gray-600 hover:dark:bg-gray-600 dark:bg-gray-700 bg-white active:bg-gray-100 hover:bg-gray-100 transition-colors rounded-xl">

            <div class="mb-4 flex gap-2 items-center">
                <Avatar :avatar-url="post.admin_panel.author?.avatar.url"/>
                <span class="font-semibold text-md">{{ post.admin_panel.author?.name }}</span>
                <span class="dark:text-gray-300 text-gray-700"> - </span>
                <span class="text-sm dark:text-gray-300 text-gray-700">{{ formatDate(post.updatedAt) }}</span>
            </div>

            <MediaGallery v-if="post.cover" class="pointer-events-none" :images="[{
                id: post.cover.id,
                photo: post.cover
            }]" />

            <div v-if="post.rubrics && post.rubrics.length > 0" class="flex mt-3 select-none gap-2 flex-wrap text-sm">
                <span class="p-2 py-1 text-white bg-surface-brown uppercase rounded-md" v-for="rubric in post.rubrics">{{
                    rubric.name }}</span>
            </div>
            <h4 class="text-2xl mt-2 font-bold">{{ post.title }}</h4>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
import type { PostDoc } from '~/types/post.types';

const {buildApiUrl} = useApiBuilder()

const props = defineProps<{
    post: PostDoc
}>()


</script>