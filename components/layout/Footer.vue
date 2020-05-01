<template>
  <footer class="section footer">
    <div class="section__content">
      <div class="section__inner footer__content">
        <ItrawsLogo :is-header="false" />
        <ul class="footer-menu">
          <li class="footer-menu__item meta-typo">
            <nuxt-link to="about"
              ><img
                class="footer-icon"
                src="~/assets/icons/social/tw-social-icon.svg"
            /></nuxt-link>
          </li>
          <li class="footer-menu__item meta-typo">
            <nuxt-link to="products"
              ><img
                class="footer-icon"
                src="~/assets/icons/social/fb-social-icon.svg"
            /></nuxt-link>
          </li>
          <li class="footer-menu__item meta-typo">
            <nuxt-link to="blog"
              ><img
                class="footer-icon"
                src="~/assets/icons/social/linkedin-social-icon.svg"
            /></nuxt-link>
          </li>
        </ul>
        <small class="footer-copyright">
          © 2020 Itraws / All rights reserved /
          <nuxt-link to="privacy">Privacy Policy</nuxt-link>
        </small>
      </div>
    </div>
  </footer>
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
