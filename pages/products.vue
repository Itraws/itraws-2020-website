<template>
  <div>
    <HeaderHero
      :hero-headline="contentCms.content_list[0].headline"
      :hero-text="contentCms.content_list[0].text"
    />
    <div class="products-page">
      <section class="section">
        <div class="section__inner">
          <div class="product-list">
            <ProductItem
              v-for="(product, index) in contentCms.content_list[1].products"
              v-show="product.image_display"
              :key="index"
              :image-url="product.image_url"
              :link-url="product.link_url"
              :alt-value="product.alt_text"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderHero from '~/components/layout/HeaderHero.vue'
import ProductItem from '~/components/elements/ProductItem.vue'
const contentCmsEn = require('~/assets/content/page/our-products-en.json')
const contentCmsFr = require('~/assets/content/page/nos-produits-fr.json')

export default Vue.extend({
  name: 'ProductsPage',
  components: {
    HeaderHero,
    ProductItem
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
