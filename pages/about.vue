<template>
  <div>
    <HeaderHero />
    <div class="about-page">
      <section class="section section--white-smoke">
        <div class="section__inner">
          <div class="section__grid">
            <div class="about-section">
              <h1 class="text-ocean-blue mg-bottom-3">
                {{ content.sectionOne.headline }}
              </h1>
              <h4 class="text-persian-blue text-medium">
                {{ content.sectionOne.paragraph }}
              </h4>
            </div>
            <div class="about-section__image--1">
              <img
                class="about-section__image--1"
                src="https://itrawsorigin.s3.ca-central-1.amazonaws.com/about-image-1-v2.jpg"
                alt="image 1"
              />
            </div>
          </div>
          <div class="section__grid mg-top-10">
            <div class="about-section__image--2">
              <img
                class="about-section__image--2"
                src="https://itrawsorigin.s3.ca-central-1.amazonaws.com/about-image-2-v2.jpg"
                alt="image 2"
              />
            </div>
            <div class="about-section">
              <h3 class="text-ocean-blue mg-bottom-3">
                {{ content.sectionTwo.headline }}
              </h3>
              <p class="text-persian-blue">
                {{ content.sectionTwo.paragraph }}
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
const content = require('~/content/about.md')

export default Vue.extend({
  name: 'AboutPage',
  components: {
    HeaderHero,
    LayoutFooter
  },
  computed: {
    content: () => content.attributes
  }
})
</script>
