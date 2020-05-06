<template>
  <div class="blog-post-page">
    <BlogPostHeaderHero
      :post-hero="{
        title: data.title,
        excerpt: data.excerpt,
        image: data.feature_image
      }"
    />
    <PostMetaBar />
    <section class="section">
      <div class="section__inner">
        <section class="blog-container">
          <article class="blog-post" v-html="data.html" />
        </section>
      </div>
    </section>
    <ArticlesPreview />
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BlogPostHeaderHero from '~/components/layout/BlogPostHeaderHero.vue'
import PostMetaBar from '~/components/elements/PostMetaBar.vue'
import ArticlesPreview from '~/components/layout/ArticlesPreview.vue'
import LayoutFooter from '~/components/layout/Footer.vue'

export default Vue.extend({
  name: 'BlogPostPage',
  layout: 'BlogPostLayout',
  components: {
    BlogPostHeaderHero,
    PostMetaBar,
    ArticlesPreview,
    LayoutFooter
  },
  async asyncData({ store, params }) {
    try {
      const post = await store.dispatch('blog/fetchSinglePost', params.slug)
      return { data: post }
    } catch (error) {
      console.log({ error })
    }
  }
})
</script>
