<template>
  <div>
    <HeaderHero
      :hero-headline="contentCms.content_list[0].headline"
      :hero-text="contentCms.content_list[0].text"
    />
    <div class="about-page">
      <section class="section section--white-smoke">
        <div class="section__inner">
          <div class="section__grid">
            <div class="about-section">
              <h1 class="text-ocean-blue mg-bottom-3">
                {{ contentCms.content_list[1].headline }}
              </h1>
              <h4 class="text-persian-blue text-medium">
                {{ contentCms.content_list[1].text }}
              </h4>
            </div>
            <div class="about-section__image--1">
              <img
                class="about-section__image--1"
                :src="contentCms.content_list[1].image_url"
                alt="image 1"
              />
            </div>
          </div>
          <div class="section__grid mg-top-10">
            <div class="about-section__image--2">
              <img
                class="about-section__image--2"
                :src="contentCms.content_list[2].image_url"
                alt="image 2"
              />
            </div>
            <div class="about-section">
              <h3 class="text-ocean-blue mg-bottom-3">
                {{ contentCms.content_list[2].headline }}
              </h3>
              <p class="text-persian-blue">
                {{ contentCms.content_list[2].text }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- <section class="section section">
        <div class="section__inner">
          <div class="section__grid mission-grid">
            <div class="mission-section">
              <h1>{{ content.sectionThree.headline }}</h1>
            </div>
            <div class="mission-section">
              <h4 class="text-semibold mg-bottom-5">
                {{ content.sectionThree.paragraph }}
              </h4>
              <ul class="mission-section__list">
                <li
                  v-for="point in content.sectionThree.points"
                  :key="point.id"
                  class="mission-section__list__item"
                >
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> -->
      <LayoutFooter />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderHero from '~/components/layout/HeaderHero.vue'
import LayoutFooter from '~/components/layout/Footer.vue'
// import content from '~/content/about.md'
const contentCmsEn = require('~/assets/content/page/about-en.json')
const contentCmsFr = require('~/assets/content/page/apropos-fr.json')

export default Vue.extend({
  name: 'AboutPage',
  components: {
    HeaderHero,
    LayoutFooter
  },
  computed: {
    contentCms() {
      return this.$i18n.locale === 'en'
        ? contentCmsEn
        : this.$i18n.locale === 'fr'
        ? contentCmsFr
        : null
    }
  }
})
</script>
