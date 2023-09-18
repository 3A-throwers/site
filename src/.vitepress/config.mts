import { defineConfig } from 'vitepress';
import footnote from 'markdown-it-footnote';
import markdownItKatex from '@vscode/markdown-it-katex';
import useJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  title: 'Aya Prover',
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aya-prover' },
    ],
    editLink: {
      pattern: 'https://github.com/aya-prover/aya-prover-docs/tree/main/src/:path',
      text: 'Suggest changes to this page',
    },
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Publications', link: '/pubs/' },
      { text: 'Blog', link: '/blog/' },
    ],
    search: {
      provider: 'local',
    },
    sidebar: [
      {
        text: 'Blog',
        items: [
          { text: 'Inductive Props', link: '/blog/ind-prop' },
          { text: 'Def. projection in classes', link: '/blog/class-defeq' },
          { text: 'Path constructor elaboration', link: '/blog/pathcon-elab' },
          { text: 'Path type elaboration', link: '/blog/path-elab' },
          { text: 'Binary operators', link: '/blog/binops' },
          { text: 'Index unification', link: '/blog/index-unification' },
          { text: 'Language extensions?', link: '/blog/lang-exts' },
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Get Started', link: '/guide/' },
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