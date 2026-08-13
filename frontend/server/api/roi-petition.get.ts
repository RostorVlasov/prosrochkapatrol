const PETITION_ID = 153114

export default defineEventHandler(async () => {
    try {
        const data = await $fetch(`https://www.roi.ru/api/petition/${PETITION_ID}.json`, {
            headers: { Accept: 'application/json' },
        })
        return data
    } catch {
        return null
    }
})
