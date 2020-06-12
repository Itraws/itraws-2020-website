<template>
  <footer class="section footer">
    <div class="section__content">
      <div class="section__inner footer__content">
        <ItrawsLogo :is-header="false" />
        <ul class="footer-menu">
          <li
            v-for="(social, key, index) in socialMedias"
            :key="index"
            class="footer-menu__item meta-typo"
          >
            <a :href="social" target="_blank"
              ><Icon
                i-type="fab"
                :i-icon="key"
                i-color="white"
                i-background="true"
            /></a>
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
import Icon from '~/components/elements/Icon.vue'
const SocialLinks = require('~/content/social.md')

export default Vue.extend({
  components: {
    ItrawsLogo,
    Icon
  },
  computed: {
    socialMedias: () => SocialLinks.attributes
  }
})
</script>
