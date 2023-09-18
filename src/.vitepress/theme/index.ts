import { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './index.css'
import AyaHeader from '../components/AyaHeader.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(AyaHeader),
    })
  },
  enhanceApp({ app }: EnhanceAppContext) {
    app
      .component('AyaHeader', AyaHeader)
  },
}
