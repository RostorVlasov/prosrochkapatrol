import type { UseFetchOptions } from 'nuxt/app'

export function useApiFetch<T>(url: string | (() => string), options: UseFetchOptions<T> = {}) {
    const config = useRuntimeConfig()

    const defaults: UseFetchOptions<T> = {
        baseURL: config.public.API_URL

    }

    return useFetch(url, { ...defaults, ...options })
}
