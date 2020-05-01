<template>
  <div class="body">
    <LayoutHeader />
    <HeaderHero />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LayoutHeader from '~/components/layout/Header'
import HeaderHero from '~/components/layout/HeaderHero'

export default Vue.extend({
  name: 'LandingPageLayout',
  components: {
    LayoutHeader,
    HeaderHero
  },
  data() {
    return {}
  }
})
</script>
