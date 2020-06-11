<template>
  <div class="body">
    <modal-component v-if="getModalStatus" />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions, mapGetters } from 'vuex'
import modalComponent from '~/components/elements/Modal.vue'

export default Vue.extend({
  name: 'LandingPageLayout',
  transition: {
    name: 'default',
    mode: 'out-in'
  },
  components: {
    modalComponent
  },
  data() {
    return {
      error: '',
      loading: false
    }
  },
  computed: {
    ...mapState('pageAnimation', ['page']),
    ...mapGetters('modal', ['getModalStatus'])
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
