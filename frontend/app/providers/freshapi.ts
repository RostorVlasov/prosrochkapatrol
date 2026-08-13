import { joinURL } from 'ufo'
import type { ProviderGetImage } from '@nuxt/image'

export const getImage: ProviderGetImage = (src, { baseURL } = {}) => {
  return {
    url: joinURL(baseURL || 'https://api.freshcheckastra.ru', src),
  }
}

export default { getImage }
