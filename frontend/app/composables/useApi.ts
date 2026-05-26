export const useApi = () => {
    const config = useRuntimeConfig()

    const api = $fetch.create({
        baseURL: config.public.API_URL,
        credentials: 'include',
    })

    return { api }
}