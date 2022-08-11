<template>
  <div class="w-full py-20 sm:py-32  flex flex-col justify-center ">
    <span class="pattern pattern--circle-alt overflow-hidden" />
    <div class="flex justify-start">
      <div class="w-full max-wd-lg">
        <!-- headline/title -->
        <h4 class="mb-2 text-rich-black font-medium capitalize">
          featured
        </h4>
        <h2 class="font-bold capitalize ">
          <nuxt-link :to="{
            path: `/blog/${featuredPost.slug}`,
            params: { slug: featuredPost.slug }
          }" class="flex items-center justify-start py-2">
            <p class="mr-5">
              {{ featuredPost.title }}
            </p>
            <Icon class="invisible sm:visible hvr-forward" i-type="fas" i-icon="arrow-right" i-color="blue"
              i-background="true" />
          </nuxt-link>
        </h2>
        <!-- excerpt -->
        <p class="hero__text  text-lg font-normal  blog-hero-excerp">
          {{ featuredPost.excerpt }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/elements/Icon.vue'

export default Vue.extend({
  name: 'BlogPageHero',
  components: {
    Icon,
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
