<template>
  <div>
    <header-hero
      :hero-headline="contentCms.content_list[0].headline"
      :hero-text="contentCms.content_list[0].text"
    />
    <div class="policy-page">
      <section class="section">
        <div class="section__inner">{{ contentCms.content_markdown }}</div>
      </section>
      <ArticlesPreview />
      <LayoutFooter />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderHero from '~/components/layout/HeaderHero.vue'
import ArticlesPreview from '~/components/layout/ArticlesPreview.vue'
import LayoutFooter from '~/components/layout/Footer.vue'
const contentCmsEn = require('~/assets/content/page/privacy-policy-en.json')
const contentCmsFr = require('~/assets/content/page/politique-de-confidentialité-fr.json')

export default Vue.extend({
  name: 'ProductsPage',
  components: {
    HeaderHero,
    ArticlesPreview,
    LayoutFooter
  },
  computed: {
    contentCms(): object {
      return this.$i18n.locale === 'en'
        ? contentCmsEn
        : this.$i18n.locale === 'fr'
        ? contentCmsFr
        : null
    }
  }
})
</script>
