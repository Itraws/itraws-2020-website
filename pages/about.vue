<template>
  <main class="flex-grow">
    <section class="relative max-w-6xl mx-auto px-5 sm:px-6">
      <HeaderHero :hero-headline="contentCms.content_list[0].headline" :hero-text="contentCms.content_list[0].text" />
    </section>
    <!-- About us -->
    <section class="relative section--white-smoke">
      <div class="max-w-6xl mx-auto px-5 sm:px-6">
        <div class="py-12 sm:py-20">
          <!-- block 1 -->
          <div id="block-1" class="md:grid md:grid-cols-12 md:gap-6">
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-4">
              <div class="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h2 class="text-ocean-blue font-bold h2 mb-3">
                  {{ contentCms.content_list[1].headline }}
                </h2>
              </div>
            </div>
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-8 mb-6 md:mb-0 md:order-1">
              <div class="mb-8">
                <p class="text-persian-blue font-medium text-xl">
                  {{ contentCms.content_list[1].text }}
                </p>
              </div>
              <div class="mb-8">
                <h4 class="text-ocean-blue h4 font-bold mb-3">
                  {{ contentCms.content_list[2].headline }}
                </h4>
                <p class="text-persian-blue text-normal">
                  {{ contentCms.content_list[2].text }}
                </p>
              </div>
              <!-- <img class="md:max-w-none mx-auto rounded about-section__image--1"
                :src="contentCms.content_list[1].image_url" alt="image 1" /> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="relative">
      <div class="max-w-6xl mx-auto px-5 sm:px-6">
        <div class="py-12 sm:py-20">
          <!-- Products heading -->
          <div id="products-heading" class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 class="h2 text-persian-blue font-semibold mb-4 capitalize">
              {{ productsCms.content_list[0].headline }}
            </h2>
            <p class="text-xl text-gray-600">
              {{ productsCms.content_list[0].text }}
            </p>
          </div>
          <!-- Products list -->
          <div class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <!-- product -->
            <ProductItem v-for="(product, index) in productsCms.content_list[1].products" v-show="product.image_display"
              :key="index" :image-url="product.image_url" :link-url="product.link_url" :alt-value="product.alt_text" />
            <!-- product end -->
          </div>
        </div>
      </div>
    </section>
    <section class="relative articles-preview">
      <layout-articles-preview />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderHero from '~/components/layout/HeaderHero.vue'
import LayoutFooter from '~/components/layout/Footer.vue'
import ProductItem from '~/components/elements/ProductItem.vue'
// import content from '~/content/about.md'
import LayoutArticlesPreview from '~/components/layout/ArticlesPreview.vue'
const contentCmsEn = require('~/assets/content/page/about-en.json')
const contentCmsFr = require('~/assets/content/page/apropos-fr.json')
const productsEn = require('~/assets/content/page/our-products-en.json')
const productsFr = require('~/assets/content/page/nos-produits-fr.json')
export default Vue.extend({
  name: 'AboutPage',
  components: {
    HeaderHero,
    LayoutFooter,
    ProductItem,
    LayoutArticlesPreview,
  },
  computed: {
    contentCms() {
      return this.$i18n.locale === 'en'
        ? contentCmsEn
        : this.$i18n.locale === 'fr'
          ? contentCmsFr
          : null
    },
    productsCms() {
      return this.$i18n.locale === 'en'
        ? productsEn
        : this.$i18n.locale === 'fr'
          ? productsFr
          : null
    },
  },
})
</script>
