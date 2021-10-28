<template>
  <div class="container-fluid px-0">
    <LayoutHeader />
    <BlogHeaderHero :featured-post="getFeaturedPost" />
    <nuxt keep-alive />
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import LayoutHeader from '~/components/layout/Header.vue'
import BlogHeaderHero from '~/components/layout/BlogHeaderHero.vue'
import LayoutFooter from '~/components/layout/Footer.vue'

export default Vue.extend({
  name: 'BlogPageLayout',
  transition: {
    name: 'default',
    mode: 'out-in'
  },
  components: {
    LayoutHeader,
    LayoutFooter,
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
