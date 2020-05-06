<template>
  <div class="blog-page">
    <FilterBar />
    <section class="section section--white-smoke">
      <div class="section__inner">
        <div class="articles-container">
          <BlogCard v-for="post in getAllPosts" :key="post.id">
            <template #postCategory>
              <p v-if="post.tags[0]" class="blog-card__category text-semibold">
                {{ post.tags[0].name }}
              </p>
            </template>
            <template #postTag
              ><p v-if="post.tags[1]" class="blog-card__posttype text-regular">
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
        <Pagination />
      </div>
    </section>
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import FilterBar from '~/components/elements/FilterBar.vue'
import BlogCard from '~/components/blog/BlogCard.vue'
import Pagination from '~/components/elements/Pagination.vue'
import LayoutFooter from '~/components/layout/Footer.vue'

export default Vue.extend({
  name: 'BlogPage',
  layout: 'BlogLayout',
  components: {
    FilterBar,
    BlogCard,
    Pagination,
    LayoutFooter
  },
  computed: {
    ...mapGetters('blog', ['getAllPosts'])
  }
})
</script>
