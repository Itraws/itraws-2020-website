<template>
  <div class="w-full py-20 sm:py-32  flex flex-col justify-center" :class="isHomePage ? 'h-screen' : ''">
    <span class="invisible sm:visible" :class="isHomePage ? 'shape-red' : 'shape-red--alt'" />
    <span class="invisible sm:visible" :class="isHomePage ? 'shape-blue' : 'shape-blue--alt'" />
    <span :class="isHomePage ? 'pattern--circle' : 'pattern--circle-alt'" class="pattern overflow-hidden" />
    <div class="w-full flex" :class="isHomePage ?'justify-center' : 'justify-start'">

      <div class="flex-col" :class="isHomePage ? 'max-w-2xl' : 'max-w-md '">
        <h1 class="hero__headline font-bold" :class="isHomePage ? 'text-5xl mb-7 text-center' : 'mb-3'">
          {{ heroHeadline }}
        </h1>

        <p v-if="isHomePage" class="hero__text font-normal mb-7 text-lg text-center">
          {{ heroText }}
        </p>
        <p v-else class="font-normal text-lg text-rich-black-75">
          {{ heroText }}
        </p>
        <!-- <button-component v-if="heroButtonText" :button-to="heroButtonTo" :button-value="heroButtonText"
          button-type="link" button-color="oceanBlue" /> -->
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonComponent from '~/components/elements/ButtonComponent.vue'

export default Vue.extend({
  name: 'HeaderHero',
  components: {
    ButtonComponent,
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
