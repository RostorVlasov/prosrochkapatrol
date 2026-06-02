export const formatDate = (dateString: string | undefined) => {
    if (!dateString) return '—'
    return new Date(dateString).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    })
}