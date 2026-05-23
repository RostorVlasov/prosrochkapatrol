import { ref, reactive, computed } from 'vue'
import { useComplaintsStore } from '~/stores/complaints'
import { useMediaStore } from '~/stores/media'
import type { ComplaintRequest } from '~/types/complaints.types'

export type UploadStatus = 'idle' | 'uploading' | 'done' | 'error'

export interface PhotoItem {
    id: string
    file: File
    previewUrl: string
    status: UploadStatus
    progress: number
    uploadedId: string | null
}

export const problemOptions = [
    { value: 'expired_products', label: 'Просроченные товары' },
    { value: 'poor_quality', label: 'Товары с признаками порчи или ненадлежащего качества' },
    { value: 'storage_violation', label: 'Нарушение условий хранения (температура, выкладка, холодильники)' },
    { value: 'unsanitary', label: 'Антисанитария и грязь в торговом зале' },
    { value: 'other', label: 'Другое (уточните ниже)' },
]

export function useReportForm() {
    const { createMedia } = useMediaStore()
    const { createReport } = useComplaintsStore()

    const form = reactive({
        store_address: '',
        problem_types: [] as string[],
        problem_date: '',
        staff_contacted: '' as 'yes' | 'no' | '',
        description: '',
    })

    const errors = reactive({
        problems: false,
        staffContacted: false,
    })

    const photoItems = ref<PhotoItem[]>([])
    const isDragging = ref(false)
    const fileInputRef = ref<HTMLInputElement | null>(null)

    const uploadedCount = computed(() => photoItems.value.filter(p => p.status === 'done').length)
    const errorCount = computed(() => photoItems.value.filter(p => p.status === 'error').length)
    const hasActiveUploads = computed(() => photoItems.value.some(p => p.status === 'uploading'))

    const isSubmitting = ref(false)
    const submitted = ref(false)

    function createPhotoItem(file: File): PhotoItem {
        return {
            id: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
            file,
            previewUrl: URL.createObjectURL(file),
            status: 'idle',
            progress: 0,
            uploadedId: null,
        }
    }

    async function uploadItem(item: PhotoItem) {
        item.status = 'uploading'
        item.progress = 0
        try {
            const res = await createMedia(item.file)
            if (!res) throw new Error('Пустой ответ')
            item.uploadedId = res
            item.progress = 100
            item.status = 'done'
        } catch {
            item.status = 'error'
        }
    }

    function addFiles(files: FileList | File[]) {
        const newItems = Array.from(files)
            .filter(f => f.type.startsWith('image/'))
            .map(createPhotoItem)

        photoItems.value.push(...newItems)

        newItems.forEach(item => {
            const reactive = photoItems.value.find(p => p.id === item.id)!
            uploadItem(reactive)
        })
    }

    function retryUpload(item: PhotoItem) {
        uploadItem(item)
    }

    function removePhoto(id: string) {
        const idx = photoItems.value.findIndex(p => p.id === id)
        if (idx === -1) return
        URL.revokeObjectURL(photoItems.value[idx]!.previewUrl)
        photoItems.value.splice(idx, 1)
    }

    function onFileInputChange(e: Event) {
        const files = (e.target as HTMLInputElement).files
        if (files?.length) addFiles(files)
        if (fileInputRef.value) fileInputRef.value.value = ''
    }

    function onDrop(e: DragEvent) {
        isDragging.value = false
        if (e.dataTransfer?.files.length) addFiles(e.dataTransfer.files)
    }

    async function handleSubmit() {
        errors.problems = form.problem_types.length === 0
        errors.staffContacted = !form.staff_contacted
        if (errors.problems || errors.staffContacted) return

        isSubmitting.value = true
        submitted.value = false

        try {
            const photos = photoItems.value
                .filter(p => p.status === 'done' && p.uploadedId)
                .map(p => p.uploadedId as string)

            createReport({ ...form, photos })

            submitted.value = true
            form.store_address = ''
            form.problem_types = []
            form.problem_date = ''
            form.staff_contacted = ''
            form.description = ''
            photoItems.value.forEach(p => URL.revokeObjectURL(p.previewUrl))
            photoItems.value = []
        } finally {
            isSubmitting.value = false
        }
    }

    return {
        form, errors,
        photoItems, isDragging, fileInputRef,
        uploadedCount, errorCount, hasActiveUploads,
        isSubmitting, submitted,
        retryUpload, removePhoto, onFileInputChange, onDrop,
        handleSubmit,
    }
}