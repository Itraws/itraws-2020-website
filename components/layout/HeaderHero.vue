<template>
  <section
    class="section"
    :class="isHomePage ? 'section--100vh' : 'section--not100vh'"
  >
    <layout-header />
    <span :class="isHomePage ? 'shape-red' : 'shape-red--alt'" />
    <span :class="isHomePage ? 'shape-blue' : 'shape-blue--alt'" />
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
          <!-- <span class="pattern pattern--dot-vertical" /> -->
          <h1
            class="hero__headline text-bold"
            :class="isHomePage ? 'display-typo mg-bottom-5' : 'mg-bottom-3'"
          >
            {{ heroHeadline }}
          </h1>

          <p v-if="isHomePage" class="hero__text text-regular">
            {{ heroText }}
          </p>
          <h4 v-else class="text-regular text-rich-black-75">
            {{ heroText }}
          </h4>
          <button-component
            v-if="heroButtonText"
            :button-to="heroButtonTo"
            :button-value="heroButtonText"
            button-type="link"
            button-color="oceanBlue"
          />
        </div>

        <!-- Alt Page Hero End -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonComponent from '~/components/elements/ButtonComponent.vue'
import LayoutHeader from '~/components/layout/Header.vue'

export default Vue.extend({
  name: 'HeaderHero',
  components: {
    ButtonComponent,
    LayoutHeader
  },
  props: {
    heroHeadline: {
      type: String,
      required: true,
      default: ''
    },
    heroText: {
      type: String,
      required: true,
      default: ''
    },
    heroButtonTo: {
      type: String,
      default: '',
      required: false
    },
    heroButtonText: {
      type: String,
      default: '',
      required: false
    },
    pageTitle: {
      type: String,
      required: false,
      default: ''
    }
  },

  computed: {
    isHomePage() {
      const indexName = this.pageTitle
      return indexName === 'home'
    }
  }
})
</script>
