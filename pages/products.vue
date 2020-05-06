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
import ArticlesPreview from '~/components/layout/ArticlesPreview.vue'
import LayoutFooter from '~/components/layout/Footer.vue'
import ProductItem from '~/components/elements/ProductItem.vue'

export default Vue.extend({
  name: 'ProductsPage',
  components: {
    ProductItem,
    ArticlesPreview,
    LayoutFooter
  }
})
</script>
