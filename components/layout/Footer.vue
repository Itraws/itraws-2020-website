<template>
  <footer class="section footer">
    <div class="section__content">
      <div class="section__inner footer__content">
        <ItrawsLogo :is-header="false" />
        <ul class="footer-menu">
          <li
            v-for="(social, index) in socialMedias"
            v-show="social.display"
            :key="index"
            class="footer-menu__item meta-typo"
          >
            <a :href="social.profileUrl" target="_blank"
              ><Icon
                i-type="fab"
                :i-icon="social.socialMediaName.toLowerCase()"
                i-color="white"
                i-background="true"
            /></a>
          </li>
        </ul>
        <small class="footer-copyright">
          {{ contentCms.copyright }} /
          <nuxt-link
            v-for="(link, index) in contentCms.menu.navigation_list"
            v-show="link.link_display"
            :key="index"
            :to="localePath(link.link_url)"
            >{{ link.link_name }}</nuxt-link
          >
        </small>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import ItrawsLogo from '~/components/branding/Logo.vue'
import Icon from '~/components/elements/Icon.vue'
const socialMediaSetting = require('~/assets/site/settings/socialmediasettings.json')
const uiSettings = require('~/assets/site/uisettings.json')
const subNavigationEn = require('~/assets/content/sub-navigation-en.json')
const subNavigationFr = require('~/assets/content/sous-navigation-fr.json')

export default Vue.extend({
  name: 'Footer',
  components: {
    ItrawsLogo,
    Icon
  },
  computed: {
    socialMedias: () => socialMediaSetting.socialNetworks,
    contentCms() {
      const contentCopyRightEn = uiSettings.copyrightTextEn
      const contentCopyRightFr = uiSettings.copyrightTextFr
      return this.$i18n.locale === 'en'
        ? { copyright: contentCopyRightEn, menu: subNavigationEn }
        : this.$i18n.locale === 'fr'
        ? { copyright: contentCopyRightFr, menu: subNavigationFr }
        : null
    }
  }
})
</script>
