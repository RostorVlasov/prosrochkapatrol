export default defineEventHandler(async () => {
    const data = await $fetch('https://www.roi.ru/api/petition/153114.json', {
        headers: { Accept: 'application/json' },
    })
    return data
})
