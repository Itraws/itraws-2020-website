<template>
  <section class="section section--dark section--not100vh">
    <layout-header />
    <div class="section__content">
      <div class="section__inner section__flex">
        <div class="hero-blog-post">
          <span class="pattern pattern--dot-rectangle-blog-post" />
          <div class="breadcrumb mg-bottom-10">
            <nuxt-link to="/blog" class="breadcrumb__parent">Blog</nuxt-link>
            <Icon
              class="breadcrumb__icon"
              i-type="fas"
              i-icon="chevron-right"
              i-color="blue"
              i-background="false"
            />
            <span class="breadcrumb__child">{{ postHero.title }}</span>
          </div>
          <h1 class="hero__headline text-bold text-coconut">
            {{ postHero.title }}
          </h1>
          <p class="text-coconut">{{ postHero.excerpt }}</p>
          <p class="text-ocean-blue text-semibold">
            {{ $moment(postHero.created_at).format('MMM Do YYYY') }}
          </p>
        </div>
        <div
          class="hero-blog-post-image"
          :style="{ backgroundImage: `url(${postHero.image})` }"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import LayoutHeader from '~/components/layout/Header.vue'
import Icon from '~/components/elements/Icon.vue'

export default Vue.extend({
  components: {
    Icon,
    LayoutHeader
  },
  props: {
    postHero: {
      type: Object,
      default: () => {}
    }
  }
})
</script>
