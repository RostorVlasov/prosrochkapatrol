<template>
    <div class="flex flex-col gap-4 justify-center mb-2 w-full sm:px-12 mx-auto">
        <ContactCard v-for="btn in contactButtons" :key="btn.title" v-bind="btn" />
    </div>
</template>

<script setup lang="ts">
import { contactButtons } from '~/data/data';

</script>