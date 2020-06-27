<template>
  <section v-if="isOpen" class="cookie section">
    <div class="section__inner cookie__inner">
      <div class="cookie__message">
        <small>{{ uiCookieContent.message }}</small>
      </div>
      <div class="cookie__actions">
        <button-component
          :button-value="uiCookieContent.acceptLabel"
          button-type="button"
          button-color="white"
          @click.native="accept"
        />
        <button-component
          :button-to="localePath(privacylink.link_url)"
          :button-value="uiCookieContent.label"
          button-type="link"
          button-color="richblack"
          class="mg-left-3"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonComponent from '~/components/elements/ButtonComponent.vue'
const subNavigationEn = require('~/assets/content/sub-navigation-en.json')
const subNavigationFr = require('~/assets/content/sous-navigation-fr.json')
const uiSettings = require('~/assets/site/uisettings.json')

interface CookieComponent {
  isOpen: boolean
}

interface objectType {
  [key: string]: any | []
}

export default Vue.extend({
  name: 'CookieMessage',
  components: {
    ButtonComponent
  },
  props: {
    buttonTextAccept: {
      type: String,
      default: 'Accept'
    },
    buttonTextDetails: {
      type: String,
      default: 'See details'
    },
    message: {
      type: String,
      default:
        'We use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our Privacy Policy. By continuing to browse our website, you agree to our use of cookies.'
    },
    position: {
      type: String,
      default: 'top'
    }
  },
  data(): CookieComponent {
    return {
      isOpen: false
    }
  },
  computed: {
    containerPosition(): string {
      return `cookie--${this.position}`
    },
    privacylink(): objectType | any {
      const local = this.$i18n.locale
      return local === 'en'
        ? subNavigationEn.navigation_list[0]
        : subNavigationFr.navigation_list[0]
    },
    uiCookieContent(): object | any {
      return this.$i18n.locale === 'en'
        ? {
            message: uiSettings.cookieMessageEn,
            label: uiSettings.cookieLabelEn,
            acceptLabel: uiSettings.cookieAcceptLabelEn
          }
        : this.$i18n.locale === 'fr'
        ? {
            message: uiSettings.cookieMessageFr,
            label: uiSettings.cookieLabelFr,
            acceptLabel: uiSettings.cookieAcceptLabelFr
          }
        : null
    }
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true
    }
  },
  methods: {
    getGDPR(): object | any {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted')
      }
    },
    accept(): any | void {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', 'true')
      }
    }
  }
})
</script>
