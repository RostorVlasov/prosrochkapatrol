<template>
    <div class="bg-beige-50/90 dark:bg-gray-900/90 min-h-screen px-6 text-slate dark:text-beige-100 overflow-x-hidden">
        <BlobsBg />
        <AdaptiveContainer class="p-0!">
            <main>

                <slot></slot>

            </main>
        </AdaptiveContainer>
    </div>
</template>
