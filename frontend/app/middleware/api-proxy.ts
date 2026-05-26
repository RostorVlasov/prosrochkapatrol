import { proxyRequest, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const url = event.node.req.url || ''

  if (url.startsWith('/api/')) {
    const target = 'https://api.test.prosrochkapatrol.ru' + url
    
    try {
      const res = await proxyRequest(event, target)
      return res
    } catch (err: any) {
      console.error(`[PROXY] FAILED for ${target}`)
      console.error(`[PROXY] Error code: ${err.code}`)
      console.error(`[PROXY] Error message: ${err.message}`)
      
      throw createError({
        statusCode: 502,
        statusMessage: `Proxy Error: ${err.message}`
      })
    }
  }
})