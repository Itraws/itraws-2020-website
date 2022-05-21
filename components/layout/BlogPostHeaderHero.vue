<template>
  <div class="relative max-w-6xl mx-auto px-5 sm:px-6">
    <div class="flex justify-start">
      <div class="w-full max-wd-lg">
        <!-- <span class="pattern pattern--dot-rectangle-blog-post" /> -->
        <div class="breadcrumb mg-bottom-10">
          <nuxt-link to="/blog" class="breadcrumb__parent">Blog</nuxt-link>
          <Icon class="breadcrumb__icon" i-type="fas" i-icon="chevron-right" i-color="blue" i-background="false" />
          <span class="breadcrumb__child">{{ postHero.title }}</span>
        </div>
        <h1 class="hero__headline text-bold text-coconut">
          {{ postHero.title }}
        </h1>
        <p class="text-coconut">{{ postHero.excerpt }}</p>
        <p class="text-ocean-blue text-semibold">
          {{ $moment(postHero.created_at).format('MMM Do YYYY') }}
        </p>
        <!-- <div class="hero-blog-post-image" :style="{ backgroundImage: `url(${postHero.image})` }" /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/elements/Icon.vue'

export default Vue.extend({
  components: {
    Icon,
  },
  props: {
    postHero: {
      type: Object,
      default: () => { }
    }
  }
})
</script>
