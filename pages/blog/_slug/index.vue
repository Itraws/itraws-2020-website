<template>
  <div class="blog-post-page">
    <BlogPostHeaderHero
      :post-hero="{
        title: data.title,
        excerpt: data.excerpt,
        date: data.created_at,
        image: data.feature_image
      }"
    />
    <PostMetaBar
      :authors="data.authors"
      :post-url="fullPageUrl"
      :post-title="data.title"
      :post-description="data.excerpt"
      post-hash-tag="itraws"
    />
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
import { getSinglePost } from '~/api/GhostApi'

export default Vue.extend({
  name: 'BlogPostPage',
  components: {
    BlogPostHeaderHero,
    PostMetaBar,
    ArticlesPreview,
    LayoutFooter
  },
  async asyncData({ params, error }) {
    try {
      const post = await getSinglePost(params.slug)
      return { data: post }
    } catch (e) {
      error({ statusCode: 404, message: e.message })
    }
  },
  computed: {
    fullPageUrl(): string {
      return 'https://dev2020.itraws.com' + this.$route.fullPath
    }
  }
})
</script>
