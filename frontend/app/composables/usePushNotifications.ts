// composables/usePushNotifications.ts

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = atob(base64)
  return Uint8Array.from([...rawData].map(c => c.charCodeAt(0)))
}

export const usePushNotifications = () => {
  const subscribe = async () => {
    console.log(navigator)
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) return
    console.log('Проверка пройдена');
    
    const reg = await navigator.serviceWorker.register('/sw.js')
    console.log(reg)
    console.log('Регистрация прошла успешно')
    const permission = await Notification.requestPermission()
    console.log('Запрос подтверждение');
    if (permission !== 'granted') return
    console.log('Уведомления одобрены');

    console.log(useRuntimeConfig().public.vapidPublicKey)
    console.log('Публичный ключ')
    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        useRuntimeConfig().public.vapidPublicKey as string
      )
    })


    console.log('Подписка получена')
    console.log(sub)

    const { endpoint, keys } = sub.toJSON()
    console.log(endpoint, keys)
    await $fetch('https://api.freshcheckastra.ru/api/push-subscriptions', {
      method: 'POST',
      body: { endpoint, keys }
    })
    
    console.log('Ключи отправлены')
    console.log({ endpoint, keys })

  }

  return { subscribe }
}