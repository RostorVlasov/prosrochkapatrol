<template>
    <div class="space-y-3">
        <FaqItem v-for="(item, i) in items" :key="i" :question="item.q" :answer="item.a" :use-html="item.html"
            :is-open="isOpen(i)" @toggle="toggle(i)" />
    </div>
</template>

<script setup lang="ts">
import type { FaqItem } from '~/data/faq'
import { useFaqAccordion } from '~/composables/useFaqAccordion'

interface Props {
    items: FaqItem[]
    singleOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    singleOpen: true
})

const { toggle, isOpen } = useFaqAccordion(props.singleOpen)
</script>