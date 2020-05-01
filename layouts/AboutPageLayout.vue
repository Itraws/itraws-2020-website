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
  name: 'AboutPageLayout',
  components: {
    LayoutHeader,
    HeaderHero
  }
})
</script>
