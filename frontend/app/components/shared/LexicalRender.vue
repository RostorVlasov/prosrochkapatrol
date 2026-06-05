<script setup lang="ts">
import { computed } from 'vue'

// Важно задать имя компонента для рекурсивного вызова
defineOptions({ name: 'LexicalRender' })

interface LexicalNode {
    type: string
    version: number
    children?: LexicalNode[]
    text?: string
    format?: number | string
    tag?: string
    listType?: string
    checked?: boolean
    value?: { url: string; alt?: string }
    indent?: number
    parent?: any
    // Добавляем fields для поддержки LinkNode
    fields?: {
        url?: string
        newTab?: boolean
        linkType?: string
        [key: string]: any
    }
    [key: string]: any
}

const props = defineProps<{ node: LexicalNode }>()

const getTextClasses = (format: number): string => {
    const classes = []
    if (format & 1) classes.push('font-bold')
    if (format & 2) classes.push('italic')
    if (format & 4) classes.push('line-through')
    if (format & 8) classes.push('underline')
    if (format & 16) classes.push('font-mono bg-gray-100 text-red-600 px-1 rounded')
    if (format & 32) classes.push('align-sub text-xs')
    if (format & 64) classes.push('align-super text-xs')
    return classes.join(' ')
}

const getBlockClasses = (node: LexicalNode): string => {
    const classes = []
    if (node.format === 'center') classes.push('text-center')
    else if (node.format === 'right') classes.push('text-right')
    else if (node.format === 'justify') classes.push('text-justify')
    else classes.push('text-left')
    return classes.join(' ')
}

const getIndentStyle = (node: LexicalNode): Record<string, string> => {
    if (node.indent && node.indent > 0) {
        return { paddingLeft: `${node.indent * 2}rem` }
    }
    return {}
}

const getTag = (node: LexicalNode): string => {
    switch (node.type) {
        case 'root': return 'div'
        case 'heading': return node.tag || 'h2'
        case 'paragraph': return 'p'
        case 'quote': return 'blockquote'
        case 'list': return node.listType === 'number' ? 'ol' : 'ul'
        case 'listitem': return 'li'
        case 'text': return 'span'
        case 'horizontalrule': return 'hr'
        case 'upload': return 'div'
        // Добавляем link/autolink в маппинг (хот шаблон обрабатывает их отдельно, для надежности)
        case 'link': return 'a'
        case 'autolink': return 'a'
        default: return 'div'
    }
}

const isWrapperListItem = (node: LexicalNode): boolean => {
    if (node.type !== 'listitem') return false
    const children = node.children ?? []
    return children.length === 1 && children[0]!.type === 'list'
}

// --- ОБНОВЛЕННАЯ ЛОГИКА: Парсинг ссылок и Email ---
const parseTextContent = (text: string) => {
    if (!text) return []
    
    // Приоритет проверки важен!
    // 1. https://...
    // 2. www.
    // 3. EMAIL
    // 4. Просто домен (domain.com)
    const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|([a-zA-Z0-9-]+\.[a-zA-Z]{2,}[^\s]*)/g
    
    const parts = []
    let lastIndex = 0
    let match

    while ((match = urlRegex.exec(text)) !== null) {
        // Текст до совпадения
        if (match.index > lastIndex) {
            parts.push({ type: 'text', content: text.slice(lastIndex, match.index) })
        }

        let url = match[0]
        
        // Убираем знаки препинания в конце
        let trailingPunctuation = ''
        if (/[.,;:!?)]$/.test(url)) {
            trailingPunctuation = url.slice(-1)
            url = url.slice(0, -1)
        }

        let href = ''
        let type = 'link'

        if (match[1]) {
            href = url
        } else if (match[2]) {
            href = `https://${url}`
        } else if (match[3]) {
            href = `mailto:${url}`
        } else if (match[4]) {
            href = `https://${url}`
        }

        parts.push({ type, content: url, href })

        if (trailingPunctuation) {
            parts.push({ type: 'text', content: trailingPunctuation })
        }

        lastIndex = match.index + match[0].length
    }

    if (lastIndex < text.length) {
        parts.push({ type: 'text', content: text.slice(lastIndex) })
    }

    return parts
}

const { buildApiUrl } = useApiBuilder()
</script>

<template>
    <!-- 1. Обработка LinkNode (вставленная вручную ссылка) и Autolink -->
    <template v-if="node.type === 'link' || node.type === 'autolink'">
        <a
            :href="node.fields?.url"
            :target="node.fields?.newTab ? '_blank' : undefined"
            rel="noopener noreferrer"
            class="text-blue-600 underline hover:text-blue-800 transition-colors break-all"
        >
            <!-- Рекурсивно рендерим детей (текст внутри ссылки может быть жирным и т.д.) -->
            <LexicalRender v-for="(child, index) in node.children" :key="index" :node="child" />
        </a>
    </template>

    <!-- 2. Обертка для вложенных списков (логика осталась прежней) -->
    <template v-else-if="isWrapperListItem(node)">
        <LexicalRender v-for="(child, index) in node.children" :key="index" :node="child" />
    </template>

    <!-- 3. Основной компонент для всех остальных типов узлов -->
    <component
        v-else
        :is="getTag(node)"
        :style="getIndentStyle(node)"
        :class="[
            `node-${node.type}`,

            // Параграф
            node.type === 'paragraph' ? ['mb-3 leading-relaxed wrap-break-word', getBlockClasses(node)] : '',

            // Заголовки
            node.type === 'heading' ? getBlockClasses(node) : '',
            node.type === 'heading' && node.tag === 'h1' ? 'text-3xl font-extrabold mt-6 mb-4 wrap-break-word' : '',
            node.type === 'heading' && node.tag === 'h2' ? 'text-2xl font-bold mt-5 mb-3 wrap-break-word' : '',
            node.type === 'heading' && node.tag === 'h3' ? 'text-xl font-semibold mt-4 mb-2 wrap-break-word' : '',
            node.type === 'heading' && node.tag === 'h4' ? 'text-lg font-medium mt-3 mb-2 wrap-break-word' : '',

            // Цитата
            node.type === 'quote'
                ? 'border-l-4 border-gray-400 pl-4 my-4 italic text-gray-600 dark:bg-gray-500 dark:text-white bg-gray-50 py-2 pr-3 rounded-r wrap-break-word'
                : '',

            // Списки
            node.type === 'list' && node.listType === 'check'  ? 'list-none pl-10 space-y-2' : '',
            node.type === 'list' && node.listType === 'bullet' ? 'list-disc pl-10 space-y-1' : '',
            node.type === 'list' && node.listType === 'number' ? 'list-decimal pl-10 space-y-1' : '',

            // Разделитель
            node.type === 'horizontalrule' ? 'my-6 border-t border-gray-300' : '',
        ]"
    >
        <!-- Текст с обработкой ссылок и email (для обычных текстовых узлов) -->
        <template v-if="node.type === 'text'">
            <span :class="[getTextClasses(node.format as number || 0), 'wrap-break-word']">
                <template v-for="(part, index) in parseTextContent(node.text || '')" :key="index">
                    <span v-if="part.type === 'text'">{{ part.content }}</span>
                    <a 
                        v-else 
                        :href="part.href" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="text-blue-600 underline hover:text-blue-800 transition-colors"
                    >
                        {{ part.content }}
                    </a>
                </template>
            </span>
        </template>

        <!-- Изображение (upload) -->
        <template v-else-if="node.type === 'upload'">
            <div class="my-6 rounded-lg overflow-hidden shadow-md">
                <img
                    :src="buildApiUrl(node.value?.url)"
                    :alt="node.value?.alt || 'Image'"
                    class="w-full h-auto object-cover"
                />
            </div>
        </template>

        <!-- Чекбокс-элемент списка -->
        <template v-else-if="node.type === 'listitem' && node.parent?.listType === 'check'">
            <label class="flex items-center space-x-3 cursor-not-allowed opacity-80 wrap-break-word">
                <input
                    type="checkbox"
                    :checked="node.checked"
                    disabled
                    class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 shrink-0 mt-0.5"
                />
                <span class="select-none">
                    <LexicalRender v-for="(child, index) in node.children" :key="index" :node="child" />
                </span>
            </label>
        </template>

        <!-- Всё остальное — рекурсивно -->
        <template v-else>
            <LexicalRender v-for="(child, index) in node.children" :key="index" :node="child" />
        </template>
    </component>
</template>