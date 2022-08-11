<template>
  <footer class="w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out false footer">
    <div class="max-w-6xl mx-auto px-5 sm:px-6 py-6 sm:py-12">
      <div class="flex items-center justify-between flex-wrap">
        <div class="flex-shrink mr-20">
          <ItrawsLogo :is-header="false" />
        </div>
        <nav class="flex flex-grow hidden sm:block">
          <ul class="flex flex-grow justify-start items-center">
            <li
              v-for="(social, index) in socialMedias"
              v-show="social.display"
              :key="index"
              class="footer-menu__item meta-typo"
            >
              <a :href="social.profileUrl" target="_blank" class="items-center"
                ><Icon
                  i-type="fab"
                  :i-icon="social.socialMediaName.toLowerCase()"
                  i-color="white"
                  i-background="true"
              /></a>
            </li>
          </ul>
        </nav>
      </div>
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
