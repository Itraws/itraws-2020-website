import { getAllPosts } from './api/GhostApi'

export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || 'Itraws - Empowering Africain tech.',
    // meta: [
    //   { charset: 'utf-8' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //   {
    //     hid: 'description',
    //     name: 'description',
    //     content: process.env.npm_package_description || ''
    //   }
    // ],
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  /*
   ** Middleware
   */
  router: {
    middleware: 'pages',
  },
  generate: {
    routes: async () => {
      const data = await getAllPosts()
      return data.map((post) => {
        return {
          route: `/blog/${post.slug}`,
          payload: post,
        }
      })
    },
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/fontawesome.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/moment',
    '@nuxtjs/google-analytics',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'vue-social-sharing/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/markdownit',
    '@nuxtjs/tailwindcss',
  ],
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
  },
  sitemap: {
    hostname: 'https://www.itraws.com',
    gzip: true,
    exclude: ['/admin/**'],
  },
  i18n: {
    baseUrl: 'https://www.itraws.com',
    seo: true,
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
      },
      {
        code: 'fr',
        name: 'Francais',
        iso: 'fr-FR',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
        fr: require('./locales/fr.json'),
      },
    },
  },
  // Google analytics
  googleAnalytics: {
    id: 'UA116353420-1',
    autoTracking: {
      screenview: true,
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: false,
  },
  proxy: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    hotMiddleware: {
      client: {
        overlay: false,
      },
    },
    extend(config) {
      // add frontmatter-markdown-loader
      config.module.rules.push({})
    },
  },
  server: {
    port: 3001, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
}
