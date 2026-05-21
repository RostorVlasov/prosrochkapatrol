<script setup lang="ts">

interface LexicalNode {
    type: string
    version: number
    children?: LexicalNode[]
    [key: string]: any
}

const props = defineProps<{ node: LexicalNode }>()

const getTextClasses = (format: number): string => {
    const classes = []
    if (format & 1) classes.push('font-bold')
    if (format & 2) classes.push('italic')
    if (format & 4) classes.push('line-through')
    if (format & 8) classes.push('underline')
    if (format & 16) classes.push('font-mono bg-gray-100 text-red-600 px-1 rounded') // Код
    if (format & 32) classes.push('align-sub text-xs')
    if (format & 64) classes.push('align-super text-xs')
    return classes.join(' ')
}

const getBlockClasses = (node: LexicalNode): string => {
    const classes = []

    if (node.indent > 0) {
        classes.push(`pl-[${node.indent * 1.5}rem]`)
    }

    if (node.format === 'center') classes.push('text-center')
    else if (node.format === 'right') classes.push('text-right')
    else if (node.format === 'justify') classes.push('text-justify')
    else classes.push('text-left')

    return classes.join(' ')
}

const getTag = (node: LexicalNode): string => {
    switch (node.type) {
        case 'root': return 'div'
        case 'heading': return node.tag || 'h2'
        case 'paragraph': return 'p'
        case 'list':
            return node.listType === 'number' ? 'ol' : 'ul'
        case 'listitem': return 'li'
        case 'text': return 'span'
        case 'horizontalrule': return 'hr'
        case 'linebreak': return 'br'
        case 'upload': return 'div'
        default: return 'div'
    }
}

const { buildApiUrl } = useApiBuilder()
</script>

<template>
    <component :is="getTag(node)" :class="[
        `node-${node.type}`,
        ['paragraph', 'heading'].includes(node.type) ? getBlockClasses(node) : '',
        node.type === 'list' && node.listType === 'check' ? 'list-none pl-4 space-y-2' : '',
        node.type === 'list' && node.listType === 'bullet' ? 'list-disc pl-5 space-y-1' : '',
        node.type === 'list' && node.listType === 'number' ? 'list-decimal pl-5 space-y-1' : '',
        node.type === 'heading' && node.tag === 'h1' ? 'text-3xl font-extrabold mt-6 mb-4' : '',
        node.type === 'heading' && node.tag === 'h2' ? 'text-2xl font-bold mt-5 mb-3' : '',
        node.type === 'heading' && node.tag === 'h3' ? 'text-xl font-semibold mt-4 mb-2' : '',
        node.type === 'heading' && node.tag === 'h4' ? 'text-lg font-medium mt-3 mb-2' : '',
        node.type === 'paragraph' ? 'mb-3 leading-relaxed' : '',
        node.type === 'horizontalrule' ? 'my-6 border-t border-gray-300' : '',
    ]" :style="node.indent ? { paddingLeft: `${node.indent * 2}rem` } : {}">

        <template v-if="node.type === 'text'">
            <span :class="getTextClasses(node.format)">
                {{ node.text }}
            </span>
        </template>

        <template v-else-if="node.type === 'upload'">
            <div class="my-6 rounded-lg overflow-hidden shadow-md">
                <img :src="buildApiUrl(node.value?.url)" :alt="node.value?.alt || 'Image'" class="w-full h-auto object-cover" />
            </div>
        </template>

        <template v-else-if="node.type === 'listitem' && node.parent?.listType === 'check'">
            <label class="flex items-center space-x-3 cursor-not-allowed opacity-80">
                <input type="checkbox" :checked="node.checked" disabled
                    class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                <span class="select-none">
                    <LexicalRender v-for="(child, index) in node.children" :key="index" :node="child" />
                </span>
            </label>
        </template>

        <template v-else>
            <LexicalRender v-for="(child, index) in node.children" :key="index" :node="child" />
        </template>

    </component>
</template>