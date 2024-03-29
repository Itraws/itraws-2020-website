<template>
  <main class="flex-grow">
    <section class="relative max-w-6xl mx-auto px-5 sm:px-6">
      <BlogHeaderHero :featured-post="getFeaturedPost" />
    </section>
    <!-- filterbar -->
    <section class="relative">
      <FilterBar @changeSearchInput="updateSearchInput($event)" />
    </section>
    <!-- blog list -->
    <section class="relative section--white-smoke">
      <div class="max-w-6xl mx-auto px-5 sm:px-6">
        <div class="py-12 sm:py-20">
          <BlogCard v-for="( post, index ) in pageList" :key="index" :card-color="
            post.tags[0].slug === 'blog-post'
              ? 'white'
              : post.tags[0].slug === 'publication'
                ? 'blue'
                : post.tags[0].slug === 'open-source'
                  ? 'black'
                  : 'white'
          " i-type="fas" :i-icon="
  post.tags[0].slug === 'blog-post'
    ? 'newspaper'
    : post.tags[0].slug === 'publication'
      ? 'file-alt'
      : post.tags[0].slug === 'open-source'
        ? 'file-code'
        : post.tags[0].slug === 'podcast'
          ? 'podcast'
          : ''
" i-color="blue" i-background="true" :i-link="`/blog/${post.slug}`">
            <template #postCategory>
              <p v-if="post.tags[0]" class="blog-card__category">
                {{ post.tags[0].name }}
              </p>
            </template>
            <template #postTag>
              <p v-if="post.tags[1]" class="blog-card__posttype">
                {{ post.tags[1].name }}
              </p>
            </template>
            <template #postTitle>
              <h3 class="blog-card__title mg-bottom-2">
                <nuxt-link :to="{ path: `/blog/${post.slug}` }">{{
                    post.title
                }}</nuxt-link>
              </h3>
            </template>
            <template #postExcerp>
              <p class="blog-card__excerp">{{ post.excerpt }}</p>
            </template>
            <template #postDate>
              <p class="blog-card__date">
                {{ $moment(post.created_at).format('MMM Do YYYY') }}
              </p>
            </template>
          </BlogCard>
          <Pagination :filter-data="search" />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import BlogHeaderHero from '~/components/layout/BlogHeaderHero.vue'
import FilterBar from '~/components/elements/FilterBar.vue'
import BlogCard from '~/components/blog/BlogCard.vue'
import Pagination from '~/components/elements/Pagination.vue'

export default Vue.extend({
  name: 'BlogPage',
  transition: {
    name: 'bloglist',
    mode: 'out-in',
  },
  components: {
    FilterBar,
    BlogHeaderHero,
    BlogCard,
    Pagination,
  },
  async fetch() {
    try {
      await this.fetchBlogPosts()
      await this.fetchFeaturedPost()
    } catch (error) {
      throw error;
    }
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapGetters('blog', ['getBlogPostsLength', 'getFeaturedPost']),
    ...mapGetters('blog', {
      blogPosts: 'getFilteredPosts',
      paginatedPosts: 'getFilteredPostsV2',
    }),
    ...mapGetters('pagination', ['getCurrentPage', 'getNumberOfPages']),
    pageList(): [] {
      return this.blogPosts(this.search)
    },
  },
  activated() {
    // call fetch again if last fetch more than 60 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch()
    }
  },
  methods: {
    ...mapActions('blog', ['setFilteredPosts', 'fetchBlogPosts', 'fetchFeaturedPost']),
    updateSearchInput(input: string) {
      this.search = input
    },
  },
})
</script>
