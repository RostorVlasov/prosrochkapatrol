function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = atob(base64)
  return Uint8Array.from([...rawData].map(c => c.charCodeAt(0)))
}

export const usePushNotifications = () => {
  const subscribe = async () => {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) return

  const reg = await navigator.serviceWorker.register('/sw.js')
  
  const existingSub = await reg.pushManager.getSubscription()
  if (existingSub) return
  
  const permission = await Notification.requestPermission()
  if (permission !== 'granted') return

  const sub = await reg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
      useRuntimeConfig().public.vapidPublicKey as string
    )
  })

  const { endpoint, keys } = sub.toJSON()

  await $fetch('https://api.freshcheckastra.ru/api/push-subscriptions', {
    method: 'POST',
    body: { endpoint, keys }
  })
}

  return { subscribe }
}