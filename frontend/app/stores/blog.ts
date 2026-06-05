import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', () => {
  const selectedRubricIds = ref<number[]>([])

  function toggleRubric(id: number) {
    const index = selectedRubricIds.value.indexOf(id)
    if (index !== -1) {
      selectedRubricIds.value.splice(index, 1)
    } else {
      selectedRubricIds.value.push(id)
    }
  }

  function clearRubrics() {
    selectedRubricIds.value = []
  }

  return {
    selectedRubricIds,
    toggleRubric,
    clearRubrics,
  }
})