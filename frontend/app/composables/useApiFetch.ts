import type { UseFetchOptions } from "#app"

export function useApiFetch<T>(url: string | (() => string), options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig()

  const baseURL = import.meta.server
    ? (config.apiUrl as string)
    : config.public.API_URL

  return useFetch(url, { baseURL, ...options })
}