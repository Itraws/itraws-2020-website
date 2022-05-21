<template>
  <main class="flex-grow">
    <section class="relative max-w-6xl mx-auto px-5 sm:px-6">
      <landing-hero page-title="home" :hero-headline="contentCms.content_list[0].headline"
        :hero-text="contentCms.content_list[0].text" :hero-button-to="contentCms.content_list[0].button_url"
        :hero-button-text="contentCms.content_list[0].button_value" />
    </section>
    <section class="relative articles-preview">
      <layout-articles-preview />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import LandingHero from '~/components/layout/HeaderHero.vue'
import LayoutArticlesPreview from '~/components/layout/ArticlesPreview.vue'

const contentCmsEn = require('~/assets/content/page/home-page-en.json')
const contentCmsFr = require('~/assets/content/page/page-acceuil-fr.json')

export default Vue.extend({
  name: 'HomePage',
  components: {
    LandingHero,
    LayoutArticlesPreview,
  },
  computed: {
    contentCms() {
      return this.$i18n.locale === 'en'
        ? contentCmsEn
        : this.$i18n.locale === 'fr'
          ? contentCmsFr
          : null
    }
  },
})
</script>
