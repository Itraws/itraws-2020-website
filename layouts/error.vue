<template>
  <main class="flex-grow">
    <section class="relative">
      <header-hero hero-headline="" hero-text="" />
    </section>
    <!-- error -->
    <section class="relative">
      <div class="max-w-6xl mx-auto px-5 sm:px-6">
        <div class="py-12 sm:py-20 flex flex-col items-center justify-center">
          <h1 class="display-typo text-bold text-ocean-blue">
            Oopsss
          </h1>
          <h3 v-if="statusCode === 404" class="h3-alt text-medium text-rich-black-75 mg-bottom-8">
            {{ message }}
          </h3>
        </div>
      </div>
    </section>
    <section class="relative articles-preview">
      <ArticlesPreview />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderHero from '~/components/layout/HeaderHero.vue'
import ArticlesPreview from '~/components/layout/ArticlesPreview.vue'

export default Vue.extend({
  components: {
    HeaderHero,
    ArticlesPreview,
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
