<template>
  <section
    class="section"
    :class="isHomePage ? 'section--100vh' : 'section--not100vh'"
  >
    <layout-header />
    <span :class="isHomePage ? 'shape-red' : 'shape-red--alt'" />
    <span :class="isHomePage ? 'shape-blue' : 'shape-blue--alt'" />
    <span
      :class="isHomePage ? 'pattern--circle' : 'pattern--circle-alt'"
      class="pattern"
    />
    <div class="section__content">
      <div class="section__inner">
        <div
          class="hero"
          :class="isHomePage ? 'hero--homePage' : 'hero--altPage'"
        >
          <span class="pattern pattern--dot-vertical" />
          <h1
            class="hero__headline text-bold"
            :class="isHomePage ? 'display-typo mg-bottom-5' : 'mg-bottom-3'"
          >
            {{
              isHomePage
                ? homeContent.heroHeadline
                : isAboutPage
                ? aboutContent.heroHeadline
                : isProductsPage
                ? productsContent.heroHeadline
                : ''
            }}
          </h1>

          <p v-if="isHomePage" class="hero__text text-regular">
            {{ homeContent.heroText }}
          </p>
          <h4 v-else class="text-regular text-rich-black-75">
            {{
              isAboutPage
                ? aboutContent.heroText
                : isProductsPage
                ? productsContent.heroText
                : ''
            }}
          </h4>
          <button-component
            v-if="isHomePage"
            :button-to="homeContent.heroButton.url"
            :button-value="homeContent.heroButton.text"
            button-type="link"
            button-color="oceanBlue"
          />
        </div>

        <!-- Alt Page Hero End -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonComponent from '~/components/elements/ButtonComponent.vue'
import LayoutHeader from '~/components/layout/Header.vue'
import homeContent from '~/content/home.md'
import aboutContent from '~/content/about.md'
import productsContent from '~/content/products.md'

export default Vue.extend({
  name: 'HeaderHero',
  components: {
    ButtonComponent,
    LayoutHeader
  },

  computed: {
    isHomePage() {
      const indexName = this.$route.name
      return indexName === 'index'
    },
    isAboutPage() {
      const indexName = this.$route.name
      return indexName === 'about'
    },
    isProductsPage() {
      const indexName = this.$route.name
      return indexName === 'products'
    },
    homeContent: () => homeContent.attributes,
    aboutContent: () => aboutContent.attributes,
    productsContent: () => productsContent.attributes
  }
})
</script>
