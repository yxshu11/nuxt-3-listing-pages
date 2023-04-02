import { defineNuxtModule, extendPages } from '@nuxt/kit'
import { resolve } from 'pathe'

export default defineNuxtModule({
  setup() {
    extendPages((pages) => {
      // Add /test page
      pages.push({
        name: 'Brands Page',
        path: '/brands/[id]',
        file: resolve(__dirname, './brands/[id].vue')
      })
    })
  }
})
