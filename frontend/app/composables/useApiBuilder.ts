export const useApiBuilder = () => {
    const config = useRuntimeConfig()
    
    const buildApiUrl = (url: string): string => {
        if (!url) return ''
        if (url.startsWith('http')) return url
    
        return `${config.public.API_URL}${url}`
    }
    
    return {
        buildApiUrl
    }
}