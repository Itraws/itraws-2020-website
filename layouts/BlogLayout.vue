<template>
  <div class="body">
    <LayoutHeader />
    <BlogHeaderHero :featured-post="getFeaturedPost" />
    <nuxt keep-alive />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import LayoutHeader from '~/components/layout/Header.vue'
import BlogHeaderHero from '~/components/layout/BlogHeaderHero.vue'

export default Vue.extend({
  name: 'BlogPageLayout',
  components: {
    LayoutHeader,
    BlogHeaderHero
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('blog', ['getFeaturedPost'])
  },
  created() {
    this.fetchBlogPosts()
  },
  methods: {
    ...mapActions('blog', ['fetchBlogPosts'])
  }
})
</script>
