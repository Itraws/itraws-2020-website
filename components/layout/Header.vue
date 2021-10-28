<template>
  <header
    class="section header"
    :class="{ header__scroll: scrollPosition > 50 }"
  >
    <nav class="navbar navbar-expand-lg py-4">
      <div class="container">
            <ItrawsLogo
              :is-header="true"
              :white-logo="
                page === `blog-slug___${currentLocal}` && scrollPosition < 50
                  ? 'true'
                  : 'false'
              "
            />
            <div class="header-menu--mobile">
              <div class="menu-hamburger" @click="hamburgerClickedActive()">
                <div
                  class="menu-hamburger--bar"
                  :class="{
                    'menu-hamburger--bar--clicked': hamburger,
                    'menu-hamburger--bar--white':
                      page === `blog-slug___${currentLocal}`,
                    'menu-hamburger--bar--black':
                      page !== `blog-slug___${currentLocal}`
                  }"
                />
              </div>
            </div>
            <ul class="header-menu navbar-nav ms-auto">
              <li
                v-for="(link, index) in contentCms[0].navigation_list"
                v-show="link.link_display"
                :key="index"
                class=" header-menu__item"
              >
                <nuxt-link
                  :to="localePath(link.link_url)"
                  :class="{
                    'header-menu__item--active':
                      page === link.link_url + `___${currentLocal}` ||
                      page === `blog-slug___${currentLocal}` ||
                      (page === `index___${currentLocal}` &&
                        link.link_name === 'home') ||
                      (page === `index___${currentLocal}` &&
                        link.link_name === 'Acceuil'),
                    'header-menu__item--blogpost':
                      page === `blog-slug___${currentLocal}` &&
                      scrollPosition < 50
                  }"
                  >{{ link.link_name }}</nuxt-link
                >
              </li>
              <li
                v-for="locale in availableLocales"
                :key="locale.code"
                class="header-menu__item"
              >
                <nuxt-link
                  :to="switchLocalePath(locale.code)"
                  :class="{
                    'header-menu__item--blogpost':
                      page === `blog-slug___${currentLocal}` &&
                      scrollPosition < 50
                  }"
                  class="header-menu__item--active"
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
        </section>
      </div>
    </nav>
    <div
    v-if="width <= 768"
      :class="
        hamburger
          ? 'mobile-menu scale-in-ver-top'
          : 'mobile-menu--closed scale-in-ver-top--reversed'
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

import { useWindowSize } from '~/mixins/windowSize'
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
  mixins: [useWindowSize],
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
