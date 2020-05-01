<template>
  <div class="blog-post-page">
    <PostMetaBar />
    <section class="section">
      <div class="section__inner">
        psot
      </div>
    </section>
    <ArticlesPreview />
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostMetaBar from '~/components/elements/PostMetaBar'
import ArticlesPreview from '~/components/layout/ArticlesPreview'
import LayoutFooter from '~/components/layout/Footer'

export default Vue.extend({
  name: 'BlogPostPage',
  components: {
    PostMetaBar,
    ArticlesPreview,
    LayoutFooter
  }
})
</script>
