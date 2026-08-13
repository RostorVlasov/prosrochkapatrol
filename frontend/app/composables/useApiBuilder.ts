export const useApiBuilder = () => {
    const config = useRuntimeConfig()
    
    const buildApiUrl = (url: string | undefined): string => {
        if (!url) return ''
        if (url.startsWith('http')) return url
    
        return `${config.public.API_URL}${url}`
    }

    const buildImagePath = (url: string | undefined): string => {
        if (!url) return ''
        if (url.startsWith('http')) {
            try {
                return new URL(url).pathname
            } catch {
                return url
            }
        }
        return url
    }
    
    return {
        buildApiUrl,
        buildImagePath,
    }
}