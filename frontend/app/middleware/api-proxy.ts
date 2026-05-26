import { proxyRequest, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const url = event.node.req.url || ''

  if (url.startsWith('/api/')) {
    const target = 'https://api.test.prosrochkapatrol.ru' + url
    
    try {
      console.log(`[PROXY] Trying to fetch: ${target}`)
      const res = await proxyRequest(event, target)
      console.log(`[PROXY] Success: ${target}`)
      return res
    } catch (err: any) {
      // Выводим точную ошибку в логи хостинга
      console.error(`[PROXY] FAILED for ${target}`)
      console.error(`[PROXY] Error code: ${err.code}`) // Часто тут видно ECONNREFUSED, UNABLE_TO_VERIFY_LEAF_SIGNATURE и т.д.
      console.error(`[PROXY] Error message: ${err.message}`)
      
      throw createError({
        statusCode: 502,
        statusMessage: `Proxy Error: ${err.message}`
      })
    }
  }
})