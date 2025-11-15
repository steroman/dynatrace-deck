// uno.config.ts
import { defineConfig } from 'unocss'
import theme from './theme/uno.config.custom'

export default defineConfig({
  // Slidev requires the scanning pipeline to be defined at root
  content: {
    pipeline: {
      include: [
        '**/*.md',
        '**/*.vue',
        'components/**/*.{vue,js,ts}',
        'layouts/**/*.{vue,js,ts}',
        'theme/**/*.{vue,js,ts}',
      ],
    },
  },

  // Spread the theme partial config
  ...theme,
})
