<template>
  <section
    class="container position-relative section--space overflow-hidden"
    :class="isHomePage ? 'section--100vh ' : 'section--not100vh'"
  >
    <span :class="isHomePage ? 'shape-red' : 'shape-red--alt'" />
    <span
      v-if="width >= 768"
      :class="isHomePage ? 'shape-blue' : 'shape-blue--alt'"
    />
    <span
      :class="isHomePage ? 'pattern--circle' : 'pattern--circle-alt'"
      class="pattern"
    />
    <div class="row w-100  align-items-center">
      <div class="col col-lg-8">
        <div class="hero" :class="isHomePage ? '' : ''">
          <!-- <span class="pattern pattern--dot-vertical" /> -->
          <h1
            class="hero__headline  text-bold"
            :class="
              isHomePage ? 'display-3 mg-bottom-5' : 'display-4 mg-bottom-3'
            "
          >
            {{ heroHeadline }}
          </h1>

          <h3 v-if="width >= 768" class="hero__text text-regular">
            {{ heroText }}
          </h3>
          <h4 v-else class="hero__text text-regular">
            {{ heroText }}
          </h4>
          <!-- <h3 class="text-regular text-rich-black-75">
            {{ heroText }}
          </h3> -->
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
import { useWindowSize } from '~/mixins/windowSize'

export default Vue.extend({
  name: 'HeaderHero',
  components: {
    ButtonComponent
  },
  mixins: [useWindowSize],
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
