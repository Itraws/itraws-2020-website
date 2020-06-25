import FMMode from 'frontmatter-markdown-loader'
import { getAllPosts } from './api/GhostApi'

export default {
  mode: 'universal',
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
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
   ** Middleware
   */
  router: {
    middleware: 'pages'
  },
  generate: {
    routes: () => {
      try {
        const data = getAllPosts()
        return data.map((post) => {
          return {
            route: `/blog/${post.slug}`,
            payload: post
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
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
    ['@nuxtjs/google-analytics', { id: 'UA-170813746-1' }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'vue-social-sharing/nuxt',
    'nuxt-i18n',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://dev2020.itraws.com',
    gzip: true,
    exclude: ['/admin/**']
  },
  i18n: {
    baseUrl: 'https://dev2020.itraws.com',
    seo: true,
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US'
      },
      {
        code: 'fr',
        name: 'Francais',
        iso: 'fr-FR'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
        fr: require('./locales/fr.json')
      }
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: false
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
        overlay: false
      }
    },
    extend(config) {
      // add frontmatter-markdown-loader
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [FMMode.VUE_COMPONENT]
        }
      })
    }
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
