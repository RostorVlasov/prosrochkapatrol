import { ref } from 'vue'

export function useFaqAccordion() {
  const openIndex = ref<number | null>(null)
  const toggle = (index: number) => {
    openIndex.value = openIndex.value === index ? null : index
  }
  const isOpen = (index: number) => openIndex.value === index
  return {
    openIndex: readonly(openIndex),
    toggle,
    isOpen
  }
}