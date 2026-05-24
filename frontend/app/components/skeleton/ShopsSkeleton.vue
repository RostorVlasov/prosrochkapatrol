<template>
    <div class="flex flex-col gap-3">
        <div v-for="i in 6" :key="i" class="p-4 bg-white dark:bg-gray-700 rounded-xl">
            <USkeleton class="w-full h-[50vh] mb-4 rounded-2xl" />
            <div class="flex items-center justify-between mb-3">
                <USkeleton class="h-6 w-24 rounded-full" />
                <USkeleton class="h-3.5 w-20" />
            </div>
            
            <USkeleton class="h-5 w-[55%] rounded-md" />
            <div class="flex items-center gap-2 mt-1.5">
                <USkeleton class="size-4 rounded-full shrink-0" />
                <USkeleton class="h-3.5 w-28 rounded-md" />
            </div>
            <div class="flex items-center gap-2.5 mt-3">
                <div class="flex items-center gap-1">
                    <USkeleton v-for="i in 5" :key="i" class="size-4.5 rounded" />
                </div>
                <USkeleton class="h-4 w-14 rounded-md" />
            </div>
        </div>
    </div>
</template>