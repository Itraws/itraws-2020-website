<template>
  <section class="section section--not100vh">
    <layout-header />
    <span class="pattern pattern--circle-alt" />
    <div class="section__content">
      <div class="section__inner">
        <div class="hero hero--blogPage">
          <div class="blog-headline-container">
            <h4 class="mg-bottom-2 text-rich-black text-medium text-capitalize">
              featured
            </h4>
            <nuxt-link
              :to="{
                path: `/blog/${featuredPost.slug}`,
                params: { slug: featuredPost.slug }
              }"
            >
              <h2 class="text-bold">
                {{ featuredPost.title }}
              </h2>
              <Icon
                class="mg-left-5 hvr-forward"
                i-type="fas"
                i-icon="arrow-right"
                i-color="blue"
                i-background="true"
              />
            </nuxt-link>
          </div>
          <p class="hero__text text-regular blog-hero-excerp">
            {{ featuredPost.excerpt }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import LayoutHeader from '~/components/layout/Header.vue'
import Icon from '~/components/elements/Icon.vue'

export default Vue.extend({
  name: 'BlogPageHero',
  components: {
    Icon,
    LayoutHeader
  },

  props: {
    featuredPost: {
      type: Object,
      default: () => {
        return { slug: 'default', title: 'default', excerpt: 'default' }
      }
    }
  }
})
</script>
