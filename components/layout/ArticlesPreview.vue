<template>
  <section class="section articles-preview">
    <div class="section__inner">
      <div class="articles-preview__link mg-bottom-5">
        <h4 class="text-rich-black text-semibold mg-right-4">
          <nuxt-link to="/blog">Read more on our blog</nuxt-link>
        </h4>
        <i class="icon icon-arrow--branch-red-right" />
      </div>
      <div v-if="getLatestPosts" class="articles-container">
        <BlogCard v-for="post in getLatestPosts" :key="post.id">
          <template #postCategory>
            <p
              v-if="post.tags ? post.tags[0] : ''"
              class="blog-card__category text-semibold"
            >
              {{ post.tags[0].name }}
            </p>
          </template>
          <template #postTag
            ><p
              v-if="post.tags ? post.tags[1] : ''"
              class="blog-card__posttype text-regular"
            >
              {{ post.tags[1].name }}
            </p></template
          >
          <template #postTitle
            ><h3 class="blog-card__title mg-bottom-2">
              <nuxt-link :to="{ path: `blog/${post.slug}` }">{{
                post.title
              }}</nuxt-link>
            </h3></template
          >
          <template #postExcerp
            ><p class="blog-card__excerp text-rich-black-75">
              {{ post.excerpt }}
            </p></template
          >
          <template #postDate
            ><p class="blog-card__date  text-rich-black-75">
              {{ post.created_at }}
            </p></template
          >
        </BlogCard>
      </div>
      <div v-else class="articles-container">
        <p>Loading...</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import BlogCard from '~/components/blog/BlogCard.vue'

export default Vue.extend({
  name: 'BlogArticlesPreview',
  components: {
    BlogCard
  },
  computed: {
    ...mapGetters('blog', ['getLatestPosts'])
  },
  created() {
    this.fetchLatestPosts('3')
  },
  methods: {
    ...mapActions('blog', ['fetchLatestPosts'])
  }
})
</script>
