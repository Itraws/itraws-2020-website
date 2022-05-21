<template>
  <main class="flex-grow">
    <section class="relative w-full  py-20 sm:py-32  flex flex-col justify-center section--dark ">
      <BlogPostHeaderHero :post-hero="{
        title: data.title,
        excerpt: data.excerpt,
        date: data.created_at,
        image: data.feature_image
      }" />
    </section>
    <!-- meta bar -->
    <section class="relative post-meta-section w-full ">
      <PostMetaBar :authors="data.authors" :post-url="fullPageUrl" :post-title="data.title"
        :post-description="data.excerpt" post-hash-tag="itraws" />
    </section>
    <!-- post body -->
    <section class="relative">
      <div class="max-w-6xl mx-auto px-5 sm:px-6">
        <section class="py-12 sm:py-20 blog-container">
          <article class="blog-post" v-html="data.html" />
        </section>
      </div>
    </section>
    <section class="relative articles-preview">
      <ArticlesPreview />
    </section>
  </main>
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
      return 'https://www.itraws.com' + this.$route.fullPath
    }
  }
})
</script>
