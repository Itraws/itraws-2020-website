<template>
  <div class="body">
    <nuxt keep-alive />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import LayoutHeader from '~/components/layout/Header.vue'

export default Vue.extend({
  name: 'LandingPageLayout',
  transition: {
    name: 'default',
    mode: 'out-in'
  },
  components: {
    LayoutHeader
    // BlogHeaderHero
  },
  computed: {
    ...mapState('pageAnimation', ['page'])
  },
  created() {
    this.fetchBlogPosts()
  },
  methods: {
    ...mapActions('blog', ['fetchBlogPosts'])
  }
})
</script>
