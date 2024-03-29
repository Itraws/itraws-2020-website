<template>
  <div v-show="articlesDisplay" class="px-5 sm:px-6 py-6 sm:py-12  max-w-6xl mx-auto ">
    <div class="w-full flex flex-col">
      <h4 class="articles-preview__link mb-5 text-rich-black font-semibold mr-4">
        <nuxt-link to="/blog">{{ contentCms }}
          <Icon i-type="fas" i-icon="arrow-right" i-color="red" i-background="false" class="ml-1 hvr-forward" />
        </nuxt-link>
      </h4>
      <div v-if="getLatestPosts" class="articles-container container flex items-center justify-between">
        <BlogCard v-for="post in getLatestPosts" :key="post.id" :card-color="
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
            <p v-if="post.tags ? post.tags[0] : ''" class="blog-card__category">
              {{ post.tags[0].name }}
            </p>
          </template>
          <template #postTag>
            <p v-if="post.tags ? post.tags[1] : ''" class="blog-card__posttype">
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
            <p class="blog-card__excerp">
              {{ post.excerpt }}
            </p>
          </template>
          <template #postDate>
            <p class="blog-card__date">
              {{ $moment(post.created_at).format('MMM Do YYYY') }}
            </p>
          </template>
        </BlogCard>
      </div>
      <div v-else class="articles-container">
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import BlogCard from '~/components/blog/BlogCard.vue'
import Icon from '~/components/elements/Icon.vue'
const uiSettings = require('~/assets/site/uisettings.json')

export default Vue.extend({
  name: 'BlogArticlesPreview',
  components: {
    BlogCard,
    Icon
  },
  async fetch() {
    await this.fetchLatestPosts('3')
  },
  computed: {
    ...mapGetters('blog', ['getLatestPosts']),
    articlesDisplay() {
      return uiSettings.blogArticlePreviewDisplay
    },
    contentCms() {
      const contentArticlePreviewEn = uiSettings.articlePreviewEn
      const contentArticlePreviewFr = uiSettings.articlePreviewFr
      return this.$i18n.locale === 'en'
        ? contentArticlePreviewEn
        : this.$i18n.locale === 'fr'
          ? contentArticlePreviewFr
          : null
    }
  },
  activated() {
    // call fetch again if last fetch more than 60 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch()
    }
  },
  // created() {
  //   this.fetchLatestPosts('3')
  // },
  methods: {
    ...mapActions('blog', ['fetchLatestPosts'])
  }
})
</script>
