<template>
  <div>
    <HeaderHero
      :hero-headline="content.heroHeadline"
      :hero-text="content.heroText"
    />
    <div class="products-page">
      <section class="section">
        <div class="section__inner">
          <div class="product-list">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
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
import ProductItem from '~/components/elements/ProductItem.vue'
const content = require('~/content/products.md')

export default Vue.extend({
  name: 'ProductsPage',
  components: {
    HeaderHero,
    ProductItem,
    ArticlesPreview,
    LayoutFooter
  },
  computed: {
    content: () => content.attributes
  }
})
</script>
