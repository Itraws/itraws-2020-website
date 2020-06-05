<template>
  <header
    class="section header"
    :class="{ header__scroll: scrollPosition > 50 }"
  >
    <section class="header__content">
      <div class="header__inner">
        <ItrawsLogo
          :is-header="true"
          :white-logo="
            page === 'blog-slug' && scrollPosition < 50 ? 'true' : 'false'
          "
        />
        <div class="header-menu--mobile">
          <div class="menu-hamburger" @click="hamburgerClickedActive()">
            <div
              class="menu-hamburger--bar"
              :class="hamburger ? 'menu-hamburger--bar--clicked' : ''"
            />
          </div>
        </div>
        <ul class="header-menu">
          <li
            v-for="link in navigation"
            :key="link.id"
            class="meta-typo header-menu__item"
          >
            <nuxt-link
              :to="link.link"
              :class="{
                'header-menu__item--active': page === link.name,
                'header-menu__item--blogpost':
                  page === 'blog-slug' && scrollPosition < 50
              }"
              >{{ link.name }}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </section>
    <div
      :class="
        hamburger
          ? 'mobile-menu scale-in-ver-top'
          : 'mobile-menu--closed scale-in-ver-top--reversed'
      "
    >
      <ul class="mobile-menu__list">
        <li
          v-for="link in navigation"
          :key="link.id"
          class="mobile-menu__list__item"
        >
          <nuxt-link :to="link.link" @click.native="hamburgerClickedActive()">{{
            link.name
          }}</nuxt-link>
        </li>
      </ul>
      <div class="mobile-menu__sub">
        <ul class="mobile-menu__sub__list">
          <li
            v-for="link in subNavigation"
            :key="link.id"
            class="mobile-menu__sub__list__item"
          >
            <nuxt-link
              :to="link.link"
              @click.native="hamburgerClickedActive()"
              >{{ link.name }}</nuxt-link
            >
          </li>
        </ul>
        <div class="mobile-menu__sub__social">
          <a
            v-for="(social, key, index) in socialMedias"
            :key="index"
            :href="social"
            target="_blank"
            ><Icon i-type="fab" :i-icon="key" i-color="blue" i-background="true"
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
import SocialLinks from '~/content/social.md'

export default Vue.extend({
  components: {
    ItrawsLogo,
    Icon
  },
  data() {
    return {
      hamburger: false,
      scrollPosition: 0,
      navigation: [
        { link: '/about', name: 'about' },
        { link: '/products', name: 'products' },
        { link: '/blog', name: 'blog' }
      ],
      subNavigation: [
        { link: '/press', name: 'press' },
        { link: '/privacy', name: 'privacy policy' }
      ]
    }
  },
  computed: {
    ...mapState('pageAnimation', ['page']),
    socialMedias: () => SocialLinks.attributes
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    hamburgerClickedActive() {
      if (!this.hamburger) {
        this.hamburger = true
      } else {
        this.hamburger = false
      }
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  }
})
</script>
