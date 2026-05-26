export default defineEventHandler(async (event) => {
  const url = event.path || event.node.req.url
  
  if (url?.startsWith('/api/')) {
    const target = 'https://api.test.prosrochkapatrol.ru' + url
    return proxyRequest(event, target)
  }
})