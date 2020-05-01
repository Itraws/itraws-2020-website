<template>
  <section class="section articles-preview">
    <div class="section__inner">
      <div class="articles-preview__link mg-bottom-5">
        <h4 class="text-rich-black text-semibold mg-right-4">
          <nuxt-link to="/blog">Read more on our blog</nuxt-link>
        </h4>
        <i class="icon icon-arrow--branch-red-right" />
      </div>
      <div class="articles-container">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import BlogCard from '~/components/blog/BlogCard'
export default Vue.extend({
  name: 'BlogArticlesPreview',
  components: {
    BlogCard
  }
})
</script>
