import { defineConfig } from 'vitepress';
import footnote from 'markdown-it-footnote';
import markdownItKatex from '@vscode/markdown-it-katex';
import useJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  title: '3A Throwers',
  description: '',
  head: [
    ['link', {
      rel: 'stylesheet',
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css",
      crossorigin: "anonymous",
    }],
    ['link', {
      rel: 'stylesheet',
      href: "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,700;0,900;1,300;1,700&display=swap",
    }],
    ['link', {
      rel: 'icon',
      href: `/logo.svg`,
    }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/3A-Throwers' },
    // ],
    editLink: {
      pattern: 'https://github.com/3A-Throwers/site/tree/main/src/:path',
      text: 'Suggest changes to this page',
    },
    nav: [
      { text: 'Guide', link: '/guide/' },
      // { text: 'Blog', link: '/blog/' },
    ],
    search: {
      provider: 'local',
    },
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Get Started', link: '/guide/' },
          { text: 'Online Tutorials', link: '/guide/tutorials' },
        ]
      },
    ]
  },
  markdown: {
    config: (md) => {
      md.use(footnote)
      md.use(markdownItKatex)
    }
  },
  lastUpdated: true,
  vite: {
    plugins: [useJsx()],
  }
})
