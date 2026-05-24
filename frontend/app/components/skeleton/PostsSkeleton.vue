<template>
    <div class="flex flex-col gap-6">
        <div v-for="i of 6" :key="i" class="p-4 pb-6 dark:bg-gray-700 bg-white rounded-xl">
            <div class="mb-4 flex gap-2 items-center">
                <USkeleton class="w-10 h-10 rounded-full shrink-0" />
                <div class="flex gap-2 items-center flex-wrap">
                    <USkeleton class="h-4 w-32" />
                    <USkeleton class="h-3 w-2" />
                    <USkeleton class="h-3 w-24" />
                </div>
            </div>
            <USkeleton class="w-full h-64 rounded-2xl" />
            <div class="flex gap-2 flex-wrap mt-3">
                <USkeleton v-for="w in [64, 54, 88, 120, 100]" :key="w" class="h-5 rounded-md"
                    :style="`width: ${w}px`" />
            </div>
            <div class="mt-2 flex flex-col gap-2">
                <USkeleton class="h-6 w-[90%] rounded-md" />
                <USkeleton class="h-6 w-[65%] rounded-md" />
            </div>
        </div>
    </div>
</template>