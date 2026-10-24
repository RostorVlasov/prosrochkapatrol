// Keep the form component and page source intact for future reactivation.
export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/contact' || to.path.startsWith('/contact/')) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Приём обращений временно приостановлен',
      message: 'Отправка обращений через сайт недоступна. Мы продолжаем помогать с подготовкой обращений через наши контакты.',
      fatal: true,
    })
  }
})
