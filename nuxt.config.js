import FMMode from 'frontmatter-markdown-loader'
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || 'Itraws - Empowering Africain tech.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/fontawesome.js', '~/api/mailChimp'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/moment', '@nuxtjs/dotenv'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'vue-social-sharing/nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  proxy: {
    '/mailchimp': {
      target: 'https://us17.api.mailchimp.com/3.0/lists/13b05b8a03'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
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
