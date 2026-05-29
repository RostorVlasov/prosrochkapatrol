export const scrollTo = (id: string) => {
    if (import.meta.client) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}