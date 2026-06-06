self.addEventListener('push', (event) => {
  const data = event.data?.json() ?? {}

  event.waitUntil(
    self.registration.showNotification(data.title || 'Уведомление', {
      body: data.body || '',
      icon: 'icon-192x192.png',
      badge: 'icon-32x32.png', 
      data: { url: data.url || '/' }
    })
  )
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  )
})