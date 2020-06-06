<template>
  <div class="body">
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  name: 'LandingPageLayout',
  transition: {
    name: 'default',
    mode: 'out-in'
  },
  data() {
    return {
      error: '',
      loading: false
    }
  },
  computed: {
    ...mapState('pageAnimation', ['page'])
  },
  // created() {
  //   this.fetchBlogPosts()
  // },
  async mounted() {
    this.error = ''
    this.loading = true
    try {
      await this.fetchBlogPosts()
    } catch (error) {
      this.error = error
    }
    this.loading = false
  },
  methods: {
    ...mapActions('blog', ['fetchBlogPosts'])
  }
})
</script>
