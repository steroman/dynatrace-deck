// theme/index.ts
import { defineShikiSetup } from '@slidev/types'

export default {
  layouts: {
    default: () => import('./layouts/default.vue'),
    twocol: () => import('./layouts/twocols.vue'),
    cover: () => import('./layouts/cover.vue'),
  },
  // auto-load components in theme/components
  components: true,

  // load theme-level CSS
  css: [
    './styles.css'
  ],
}
