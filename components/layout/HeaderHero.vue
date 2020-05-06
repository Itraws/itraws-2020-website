<template>
  <section
    class="section"
    :class="isHomePage ? 'section--100vh header-bg' : 'section--not100vh'"
  >
    <span :class="isHomePage ? 'shape-red' : 'shape-red--alt'" />
    <span v-if="isHomePage" class="shape-red--2" />
    <span :class="isHomePage ? 'shape-blue' : 'shape-blue--alt'" />
    <span v-if="isHomePage" class="shape-blue--2" />
    <span
      :class="isHomePage ? 'pattern--circle' : 'pattern--circle-alt'"
      class="pattern"
    />
    <div class="section__content">
      <div class="section__inner">
        <div
          class="hero"
          :class="isHomePage ? 'hero--homePage' : 'hero--altPage'"
        >
          <span class="pattern pattern--dot-vertical" />
          <h1
            class="hero__headline text-bold"
            :class="isHomePage ? 'display-typo mg-bottom-5' : 'mg-bottom-3'"
          >
            {{ isHomePage ? data.homePage.headline : data.otherPage.headline }}
          </h1>

          <p v-if="isHomePage" class="hero__text text-regular">
            {{ data.homePage.text }}
          </p>
          <h4 v-else class="text-regular text-rich-black-75">
            {{ data.otherPage.text }}
          </h4>
          <button v-if="isHomePage" class="button button--oceanBlue">
            Know more
          </button>
        </div>

        <!-- Alt Page Hero End -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderHero',

  data() {
    return {
      data: {
        homePage: {
          headline: 'Stillness. Firmness. Constancy.',
          text:
            '“Every mountain top is within reach if you just keep climbing.”'
        },
        otherPage: {
          headline: 'Aiming for the peak',
          text:
            'At Itraws we build infrastructural technologies to improve the world we live in.'
        }
      }
    }
  },

  computed: {
    isHomePage() {
      const indexName = this.$route.name
      return indexName === 'index'
    }
  }
})
</script>
