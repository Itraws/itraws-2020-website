<template>
  <header
    class="fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out false"
    :class="{ header__scroll: scrollPosition > 50 }"
  >
    <div class="max-w-6xl mx-auto px-5 sm:px-6">
      <div class="flex items-center justify-between h-auto ">
        <div class="flex-shrink-0 mr-4">
          <ItrawsLogo
            :is-header="true"
            :white-logo="
              page === `blog-slug___${currentLocal}` && scrollPosition < 50
                ? 'true'
                : 'false'
            "
          />
        </div>
        <!-- tablet/desktop -->
        <nav class="flex flex-grow hidden sm:block">
        <ul class="flex flex-grow justify-end flex-wrap items-center">
          <li
            v-for="(link, index) in contentCms[0].navigation_list"
            v-show="link.link_display"
            :key="index"
            class="itrw-nav--item"
          >
            <nuxt-link
              :to="localePath(link.link_url)"
              class="px-5 py-3 items-center transition duration-150 ease-in-out capitalize font-semibold"
              :class="{
                'itrw-nav--item--blogpost':
                  page === `blog-slug___${currentLocal}` && scrollPosition < 50
              }"
              >{{ link.link_name }}</nuxt-link
            >
          </li>
          <li
            v-for="locale in availableLocales"
            :key="locale.code"
            class="itrw-nav--item"
          >
            <nuxt-link
              :to="switchLocalePath(locale.code)"
              class="flex px-5 py-3 items-center transition duration-150 ease-in-out capitalize font-semibold"
              :class="{
                'itrw-nav--item--blogpost':
                  page === `blog-slug___${currentLocal}` && scrollPosition < 50
              }"
              ><Icon
                i-type="fas"
                i-icon="globe-africa"
                i-color="blue"
                i-background="false"
                class="mg-right-1"
              />
              {{ locale.name }}</nuxt-link
            >
          </li>
        </ul>
        </nav>
        <nav class="flex flex-grow sm:hidden h-20 ">
          <div class="flex flex-grow justify-end flex-wrap items-center header-menu--mobile">
            <div class="menu-hamburger" @click="hamburgerClickedActive()">
              <div
                class="menu-hamburger--bar"
                :class="{
                  'menu-hamburger--bar--clicked': hamburger,
                  'menu-hamburger--bar--white':
                    page === `blog-slug___${currentLocal}` && scrollPosition < 50,
                  'menu-hamburger--bar--black':
                    page !== `blog-slug___${currentLocal}` || scrollPosition > 50,
                }"
              />
            </div>
          </div>
          </nav>
      </div>
    </div>
    <!--  mobile below -->
    <div
      :class="
        hamburger
          ? 'mobile-menu scale-in-ver-top'
          : ' hidden transition duration-150 scale-in-ver-top '
      "
    >
      <ul class="mobile-menu__list">
        <li
          v-for="(link, index) in contentCms[0].navigation_list"
          v-show="link.link_display"
          :key="index"
          class="mobile-menu__list__item"
        >
          <nuxt-link
            :to="localePath(link.link_url)"
            @click.native="hamburgerClickedActive()"
            >{{ link.link_name }}</nuxt-link
          >
        </li>
        <li
          v-for="locale in availableLocales"
          :key="locale.code"
          class="mobile-menu__list__item mobile-menu__list__item--bgblue"
        >
          <nuxt-link
            :to="switchLocalePath(locale.code)"
            class="mobile-menu__lang"
            @click.native="hamburgerClickedActive()"
            ><Icon
              i-type="fas"
              i-icon="globe-africa"
              i-color="white"
              i-background="false"
              class="mg-right-1"
            />
            {{ locale.name }}</nuxt-link
          >
        </li>
      </ul>
      <div class="mobile-menu__sub">
        <ul class="mobile-menu__sub__list">
          <li
            v-for="(link, index) in contentCms[1].navigation_list"
            v-show="link.link_display"
            :key="index"
            class="mobile-menu__sub__list__item"
          >
            <nuxt-link
              :to="localePath(link.link_url)"
              @click.native="hamburgerClickedActive()"
              >{{ link.link_name }}</nuxt-link
            >
          </li>
        </ul>
        <div class="mobile-menu__sub__social">
          <a
            v-for="(social, index) in socialMedias"
            v-show="social.display"
            :key="index"
            :href="social.profileUrl"
            target="_blank"
            ><Icon
              i-type="fab"
              :i-icon="social.socialMediaName.toLowerCase()"
              i-color="blue"
              i-background="true"
          /></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import ItrawsLogo from '~/components/branding/Logo.vue'
import Icon from '~/components/elements/Icon.vue'
const socialMediaSetting = require('~/assets/site/settings/socialmediasettings.json')
const contentCmsEn = require('~/assets/content/navigation-en.json')
const contentCmsFr = require('~/assets/content/navigation-fr.json')
const subNavigationEn = require('~/assets/content/sub-navigation-en.json')
const subNavigationFr = require('~/assets/content/sous-navigation-fr.json')

interface objectType {
  [key: string]: any | []
}

interface headerData {
  hamburger: boolean
  scrollPosition: number
  subNavigation: Array<{}>
}

export default Vue.extend({
  components: {
    ItrawsLogo,
    Icon
  },
  data(): headerData {
    return {
      hamburger: false,
      scrollPosition: 0,
      subNavigation: [
        { link: '/press', name: 'press' },
        { link: '/privacy', name: 'privacy policy' }
      ]
    }
  },
  computed: {
    ...mapState('pageAnimation', ['page']),
    socialMedias: () => socialMediaSetting.socialNetworks,
    currentLocal(): string | any {
      return this.$i18n.locale
    },
    availableLocales(): [] | any {
      const locales: objectType = this.$i18n.locales || { ok: '' }
      return locales.filter((i: objectType) => i.code !== this.$i18n.locale)
    },
    contentCms(): object | any {
      return this.$i18n.locale === 'en'
        ? [contentCmsEn, subNavigationEn]
        : this.$i18n.locale === 'fr'
        ? [contentCmsFr, subNavigationFr]
        : null
    },
    getHamburger(): boolean {
      return this.hamburger
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    hamburgerClickedActive() {
      if (!this.getHamburger) {
        this.updateHamburger(true)
      } else {
        this.updateHamburger(false)
      }
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    updateHamburger(value: boolean) {
      this.hamburger = value
    }
  }
})
</script>
