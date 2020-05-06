<template>
  <section class="section section--not100vh">
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
              <img
                class="icon icon-arrow--circle-right mg-left-3"
                src="~/assets/UI/Icons/Arrows/Arrow-circle-right.svg"
                alt="See Article"
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

export default Vue.extend({
  name: 'BlogPageHero',

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
