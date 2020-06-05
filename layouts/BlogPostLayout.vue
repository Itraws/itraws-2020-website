<template>
  <div class="body">
    <LayoutHeader />
    <nuxt keep-alive />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LayoutHeader from '~/components/layout/Header.vue'

export default Vue.extend({
  name: 'BlogPageLayout',
  transition: {
    name: 'default',
    mode: 'out-in'
  },
  components: {
    LayoutHeader
  }
})
</script>
