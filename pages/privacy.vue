<template>
  <div>
    <header-hero hero-headline="Policy" hero-text="What we record" />
    <div class="policy-page">
      <section class="section">
        <div class="section__inner">
          policy goes here
        </div>
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

export default Vue.extend({
  name: 'ProductsPage',
  components: {
    HeaderHero,
    ArticlesPreview,
    LayoutFooter
  }
})
</script>
