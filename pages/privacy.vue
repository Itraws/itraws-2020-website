<template>
  <main class="flex-grow">
    <section class="relative max-w-6xl mx-auto px-5 sm:px-6">
      <header-hero :hero-headline="contentCms.content_list[0].headline" :hero-text="contentCms.content_list[0].text" />
    </section>
    <section class="relative policy-page">
      <div class="max-w-6xl mx-auto px-5 sm:px-6">
        <div class="py-12 sm:py-20">
          <div class="blog-container">
            <article class="blog-post" v-html="$md.render(contentCms.content_markdown)"></article>
          </div>
        </div>
      </div>
    </section>
    <section class="relative articles-preview">
      <articles-preview />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderHero from '~/components/layout/HeaderHero.vue'
import ArticlesPreview from '~/components/layout/ArticlesPreview.vue'
import LayoutFooter from '~/components/layout/Footer.vue'
const contentCmsEn = require('~/assets/content/page/privacy-policy-en.json')
const contentCmsFr = require('~/assets/content/page/politique-de-confidentialité-fr.json')

interface objectType {
  [key: string]: any | []
}

export default Vue.extend({
  name: 'ProductsPage',
  components: {
    HeaderHero,
    ArticlesPreview,
    LayoutFooter
  },
  computed: {
    contentCms(): objectType {
      return this.$i18n.locale === 'en'
        ? contentCmsEn
        : this.$i18n.locale === 'fr'
          ? contentCmsFr
          : null
    }
  }
})
</script>
