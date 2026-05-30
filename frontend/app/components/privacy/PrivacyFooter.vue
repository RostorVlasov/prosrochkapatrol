<template>
    <div
        class="pt-8 border-t border-off-white dark:border-gray-500 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
            <h4 class="font-bold text-slate dark:text-white mb-1">Остались юридические вопросы?</h4>
            <p class="text-sm text-gray-500/60 dark:text-off-white/50">Свяжитесь с администрацией для официальных
                разъяснений</p>
        </div>
        <a :href="EMAIL"
            class="inline-flex items-center gap-2 px-5 py-3 bg-slate dark:bg-white text-white dark:text-slate rounded-xl font-bold text-sm hover:bg-gray-600 dark:hover:bg-off-white transition-colors shadow-md">
            <AppIcon name="envelope" class="w-4 h-4" />
            {{ EMAIL_PLACEHOLDER }}
        </a>
    </div>
</template>

<script setup lang="ts">
import { EMAIL, EMAIL_PLACEHOLDER } from '~/data/social';

</script>