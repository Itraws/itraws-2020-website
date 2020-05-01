<template>
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
</template>

<script lang="ts">
import Vue from 'vue'
import ArticlesPreview from '~/components/layout/ArticlesPreview'
import LayoutFooter from '~/components/layout/Footer'
import ProductItem from '~/components/elements/ProductItem'

export default Vue.extend({
  name: 'AboutPage',
  components: {
    ProductItem,
    ArticlesPreview,
    LayoutFooter
  }
})
</script>
