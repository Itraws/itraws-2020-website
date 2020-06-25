<template>
  <div class="body">
    <modal-component v-if="getModalStatus" />
    <nuxt keep-alive />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions, mapGetters } from 'vuex'
import modalComponent from '~/components/elements/Modal.vue'
const metaSettings = require('~/assets/site/settings/metasettings.json')

export default Vue.extend({
  name: 'LandingPageLayout',
  transition: {
    name: 'default',
    mode: 'out-in'
  },
  components: {
    modalComponent
  },
  data() {
    return {
      error: '',
      loading: false,
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'Internet'
      }
    }
  },
  computed: {
    ...mapState('pageAnimation', ['page']),
    ...mapGetters('modal', ['getModalStatus']),
    metaSettings(): {} | any {
      const local = this.$i18n.locale
      return local === 'en'
        ? {
            title: metaSettings.title,
            slogan: metaSettings.sloganEn,
            description: metaSettings.descriptionEn,
            author: metaSettings.author,
            keywords: metaSettings.keywordsEn,
            metaImage: metaSettings.metaImage
          }
        : {
            title: metaSettings.title,
            slogan: metaSettings.sloganFr,
            description: metaSettings.descriptionFr,
            author: metaSettings.author,
            keywords: metaSettings.keywordsFr,
            metaImage: metaSettings.metaImage
          }
    }
  },
  // async mounted() {
  //   this.error = ''
  //   this.loading = true
  //   try {
  //     await this.fetchBlogPosts()
  //   } catch (error) {
  //     this.setError(error)
  //   }
  //   this.loading = false
  // },
  methods: {
    ...mapActions('blog', ['fetchBlogPosts']),
    ...mapActions('modal', ['setError'])
  },
  head(): {} | any {
    const i18nSeo: {} | any = this.$nuxtI18nSeo()
    return {
      title: `${this.metaSettings.title} - ${this.metaSettings.slogan}`,
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // FaceBook
        { name: 'og:image:width', content: '600' },
        { name: 'og:image:height', content: '600' },
        { name: 'og:site_name', content: this.metaSettings.title }, // website title
        { name: 'og:type', content: 'website' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.metaSettings.title }, // website title
        { property: 'og:description', content: this.metaSettings.description }, // website description
        { property: 'og:image', content: this.metaSettings.metaImage }, // website image with logo
        { property: 'og:url', content: 'https://dev2020.itraws.com' },
        // Twitter
        { name: 'twitter:title', content: this.metaSettings.title }, // website title
        { name: 'twitter:description', content: this.metaSettings.description }, // website description
        { name: 'twitter:image:src', content: this.metaSettings.metaImage }, // website image with logo
        { name: 'twitter:image', content: this.metaSettings.metaImage }, // website image with logo
        { name: 'twitter:site', content: 'https://dev2020.itraws.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@itraws' },
        { name: 'twitter:creator', content: '@itraws' },
        {
          hid: 'description',
          name: 'description',
          content: this.metaSettings.description
        },
        { name: 'author', content: this.metaSettings.author },
        { name: 'keywords', content: this.metaSettings.keywords },
        { name: 'robots', content: 'index, follow' },
        ...i18nSeo.meta
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        ...i18nSeo.link
      ],
      script: [{ type: 'application/ld+json', json: this.structuredData }]
    }
  }
})
</script>
