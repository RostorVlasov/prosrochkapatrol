export function NotFoundError() {
    throw createError({
        status: 404,
        statusText: 'Страница не найдена',
        message: 'Страница не найдена или была удалена',
        fatal: true
    })
}