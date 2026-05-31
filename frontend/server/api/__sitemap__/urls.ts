import { defineSitemapEventHandler, asSitemapUrl } from '#imports'
import { ShopsResponse } from '~/types/shops.types';
import { PostsResponse } from '~/types/post.types';

export default defineSitemapEventHandler(async () => {
    const baseURL = 'https://api.FreshCheckAstra.ru'

    const [shops, posts] = await Promise.all([
        $fetch<ShopsResponse>('/api/shops?limit=1000&depth=1', { baseURL }),
        $fetch<PostsResponse>('/api/posts?limit=1000&depth=1', { baseURL }),
    ])

    return [
        ...shops.docs.map((item) => {
            const images = [
                item.shop_photo?.url
                    ? { loc: `${baseURL}${item.shop_photo.url}` }
                    : null,
                ...(item.photos ?? [])
                    .filter(p => p.photo?.url)
                    .map(p => ({ loc: `${baseURL}${p.photo.url}` })),
            ].filter(Boolean)

            return asSitemapUrl({
                loc: `/product-review/${item.id}`,
                lastmod: item.updatedAt,
                images,
            })
        }),
        ...posts.docs.map((item) =>
            asSitemapUrl({
                loc: `/news/${item.id}`,
                lastmod: item.updatedAt,
                images: item.cover?.url
                    ? [{ loc: item.cover.url }]
                    : [],
            })
        ),
    ]
})
