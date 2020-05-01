<template>
  <header class="section header">
    <section class="section__content header__content">
      <ItrawsLogo :is-header="true" />
      <ul class="header-menu">
        <li class="header-menu__item meta-typo">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li class="header-menu__item meta-typo">
          <nuxt-link to="/products">Our Products</nuxt-link>
        </li>
        <li class="header-menu__item meta-typo">
          <nuxt-link to="/blog">Newsroom</nuxt-link>
        </li>
      </ul>
    </section>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import ItrawsLogo from '~/components/branding/Logo.vue'

export default Vue.extend({
  components: {
    ItrawsLogo
  }
})
</script>
