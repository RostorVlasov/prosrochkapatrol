<template>
    <AdaptiveContainer class="dark:bg-surface-base bg-stone-100 rounded-md">
        <div class="mx-auto">
            <!-- Header -->
<div class="mb-8">
                <h1 class="text-4xl font-bold leading-tight text-stone-900 dark:text-stone-100 mb-4">
                    Нашли нарушение в магазине? Сообщите нам!
                </h1>
                <p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400 mb-4">
                    Заполните форму ниже — расскажите, где вы столкнулись с просроченными продуктами или другими нарушениями. Наш проект проводит независимый общественный мониторинг, и ваша информация поможет активистам быстрее организовать проверку в этой торговой точке.
                </p>
                <div
                    class="border-l-2 border-beige-600 dark:border-beige-500 pl-4 py-1 bg-beige-50 dark:bg-beige-900 rounded-r-lg">
                    <p class="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                        Обратите внимание: FreshCheck — это <strong class="text-beige-700 dark:text-beige-400 font-medium">не официальный орган власти</strong>, а общественный проект (активисты осуществляют выезды <strong class="text-beige-700 dark:text-beige-400 font-medium">только по Астрахани</strong>). Для привлечения магазина к административной ответственности и назначения штрафов мы настоятельно советуем вам также направить официальную жалобу напрямую в Роспотребнадзор.
                    </p>
                </div>
            </div>

            <form class="space-y-7" @submit.prevent="handleSubmit">

                <!-- Адрес -->
                <div class="space-y-1.5">
                    <label for="address" class="block text-sm font-medium text-stone-800 dark:text-stone-200">
                        Адрес магазина (город, улица, дом)
                        <span class="text-beige-600 dark:text-beige-400 ml-0.5">*</span>
                    </label>
                    <input id="address" v-model="form.store_address" type="text" required
                        class="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-600 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-beige-500 focus:ring-3 focus:ring-beige-500/15 transition-all" />
                    <p class="text-xs text-stone-400 dark:text-stone-500 leading-relaxed">
                        Укажите точный адрес магазина, чтобы мы могли корректно зафиксировать информацию.
                    </p>
                </div>

                <hr class="border-stone-200 dark:border-stone-700">

                <!-- Проблема -->
                <div class="space-y-2">
                    <p class="text-sm font-medium text-stone-800 dark:text-stone-200">
                        С чем связана проблема?
                        <span class="text-beige-600 dark:text-beige-400 ml-0.5">*</span>
                    </p>
                    <div class="space-y-2">
                        <label v-for="option in problemOptions" :key="option.value"
                            class="flex items-start gap-3 cursor-pointer group">
                            <input v-model="form.problem_types" type="checkbox" :value="option.value"
                                class="mt-0.5 size-4 rounded border-stone-300 dark:border-stone-600 accent-beige-600 cursor-pointer shrink-0"
                                @change="errors.problems = false" />
                            <span
                                class="text-sm text-stone-700 dark:text-stone-300 leading-snug group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors">
                                {{ option.label }}
                            </span>
                        </label>
                    </div>
                    <p v-if="errors.problems" class="text-xs text-red-500 mt-1">Выберите хотя бы один вариант</p>
                    <div
                        class="mt-2 rounded-lg bg-stone-200/60 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-3.5 py-3">
                        <p class="text-xs leading-relaxed text-stone-500 dark:text-stone-400">
                            Мы рассматриваем только сообщения, связанные с качеством товаров, условиями их
                            хранения и санитарным состоянием магазина. Жалобы на поведение персонала, цены,
                            обслуживание или иные потребительские споры рекомендуем направлять напрямую в
                            Роспотребнадзор.
                        </p>
                    </div>
                </div>

                <hr class="border-stone-200 dark:border-stone-700">

                <!-- Дата и время -->
                <div class="space-y-1.5">
                    <label for="datetime" class="block text-sm font-medium text-stone-800 dark:text-stone-200">
                        Когда вы заметили проблему? Дата + примерное время
                    </label>
                    <input id="datetime" v-model="form.problem_date" type="text" required
                        placeholder="Например: 22 мая, около 16:00"
                        class="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-600 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-beige-500 focus:ring-3 focus:ring-beige-500/15 transition-all" />
                    <p class="text-xs text-stone-400 dark:text-stone-500 leading-relaxed">
                        Даже приблизительное время помогает нам корректно оценить ситуацию.
                    </p>
                </div>

                <hr class="border-stone-200 dark:border-stone-700">

                <!-- Обращение к персоналу -->
                <div class="space-y-2">
                    <p class="text-sm font-medium text-stone-800 dark:text-stone-200">
                        Было ли обращение к персоналу?
                        <span class="text-beige-600 dark:text-beige-400 ml-0.5">*</span>
                    </p>
                    <div class="space-y-2">
                        <label class="flex items-start gap-3 cursor-pointer group">
                            <input v-model="form.staff_contacted" type="radio" value="yes"
                                class="mt-0.5 size-4 border-stone-300 dark:border-stone-600 accent-beige-600 cursor-pointer shrink-0"
                                @change="errors.staffContacted = false" />
                            <span
                                class="text-sm text-stone-700 dark:text-stone-300 leading-snug group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors">
                                Я сообщил(а) сотрудникам магазина о проблеме
                            </span>
                        </label>
                        <label class="flex items-start gap-3 cursor-pointer group">
                            <input v-model="form.staff_contacted" type="radio" value="no"
                                class="mt-0.5 size-4 border-stone-300 dark:border-stone-600 accent-beige-600 cursor-pointer shrink-0"
                                @change="errors.staffContacted = false" />
                            <span
                                class="text-sm text-stone-700 dark:text-stone-300 leading-snug group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors">
                                Я не сообщал(а) сотрудникам магазина о проблеме
                            </span>
                        </label>
                    </div>
                    <p v-if="errors.staffContacted" class="text-xs text-red-500 mt-1">Выберите один из вариантов</p>
                </div>

                <hr class="border-stone-200 dark:border-stone-700">

                <!-- Описание -->
                <div class="space-y-1.5">
                    <label for="description" class="block text-sm font-medium text-stone-800 dark:text-stone-200">
                        Опишите проблему подробно
                        <span class="text-beige-600 dark:text-beige-400 ml-0.5">*</span>
                    </label>
                    <textarea id="description" v-model="form.description" required rows="5"
                        class="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-600 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 outline-none focus:border-beige-500 focus:ring-3 focus:ring-beige-500/15 transition-all resize-y" />
                    <p class="text-xs text-stone-400 dark:text-stone-500 leading-relaxed">
                        Напишите: Что именно вы обнаружили? Какие товары или условия вызвали сомнения?
                        Дата и примерное время, если помните.&nbsp;
                        Не указывайте свои персональные данные и данные третьих лиц (ФИО, телефоны, e-mail и т.д.).
                        Сообщения с личной информацией могут быть отклонены модератором.
                    </p>
                </div>

                <hr class="border-stone-200 dark:border-stone-700">

                <!-- Фото -->
                <ReportPhoto :items="photoItems" :is-dragging="isDragging" :uploaded-count="uploadedCount"
                    :error-count="errorCount" @update:is-dragging="isDragging = $event" @file-change="onFileInputChange"
                    @drop="onDrop" @retry="retryUpload" @remove="removePhoto" />

                <!-- Submit -->
                <div class="pt-1 flex flex-col gap-3">
                    <button type="submit" :disabled="isSubmitting || hasActiveUploads"
                        class="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-lg bg-beige-600 hover:bg-beige3-700 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium transition-all cursor-pointer">
                        <svg v-if="isSubmitting" class="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                stroke-width="2.5" />
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        <svg v-else class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        <span v-if="hasActiveUploads">Дождитесь загрузки фото...</span>
                        <span v-else-if="isSubmitting">Отправка...</span>
                        <span v-else>Отправить</span>
                    </button>

                    <Transition name="fade">
                        <div v-if="submitted"
                            class="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                            <svg class="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Сообщение отправлено. Спасибо!
                        </div>
                    </Transition>

                    <p class="flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-500">
                        <svg class="size-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        Все данные конфиденциальны и используются только для проверки
                    </p>
                </div>

            </form>
        </div>
    </AdaptiveContainer>
</template>

<script lang="ts" setup>

const {
    form, errors,
    photoItems, isDragging,
    uploadedCount, errorCount, hasActiveUploads,
    isSubmitting, submitted,
    retryUpload, removePhoto, onFileInputChange, onDrop,
    handleSubmit,
} = useReportForm()

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-4px);
}
</style>