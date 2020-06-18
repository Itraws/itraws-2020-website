<template>
  <div>
    <header-hero />
    <div class="error-page">
      <section class="section">
        <div class="section__inner">
          <center>
            <h1 class="display-typo text-bold text-ocean-blue">
              Oopsss
            </h1>
            <h3
              v-if="statusCode === 404"
              class="h3-alt text-medium text-rich-black-75 mg-bottom-8"
            >
              {{ message }}
            </h3>
            <button-component
              button-to="/"
              button-value="Home page"
              button-type="link"
              button-color="oceanBlue"
            />
          </center>
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
import ButtonComponent from '~/components/elements/ButtonComponent.vue'
import ArticlesPreview from '~/components/layout/ArticlesPreview.vue'
import LayoutFooter from '~/components/layout/Footer.vue'

export default Vue.extend({
  components: {
    HeaderHero,
    ButtonComponent,
    ArticlesPreview,
    LayoutFooter
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    }
  },
  head() {
    return {
      title: 'Itraws - Something went wrong.'
    }
  }
})
</script>
