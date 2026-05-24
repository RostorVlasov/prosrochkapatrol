<template>
    <div class="flex flex-col gap-6">
        <div v-for="i in 8" :key="i" class="p-4 dark:bg-gray-700 bg-stone-100 rounded-xl">
            <div class="flex items-center gap-2 mb-3">
                <USkeleton class="h-5 w-22 rounded-md" />
                <USkeleton class="h-5 w-24 rounded-full" />
            </div>
            <div class="flex items-center gap-2 flex-wrap">
                <USkeleton class="size-2 rounded-full shrink-0" />
                <USkeleton class="h-3.5 w-16 rounded-md" />
                <USkeleton class="h-3.5 w-20 rounded-md ml-auto" />
            </div>
            <div class="mt-3 pt-3 border-t dark:border-gray-600 border-gray-300 flex items-start gap-1.5">
                <USkeleton class="size-4 rounded shrink-0 mt-0.5" />
                <USkeleton class="h-3.5 w-[65%] rounded-md mt-0.5" />
            </div>
        </div>
    </div>
</template>