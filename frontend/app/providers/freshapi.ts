import { joinURL } from 'ufo'
import { defineProvider } from '@nuxt/image/runtime'

export default defineProvider({
  getImage: (src, { baseURL } = {}) => {
    return {
      url: joinURL(baseURL || 'https://api.freshcheckastra.ru', src),
    }
  },
})
