<template>
  <article id="product-item" class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
    <img v-if="!linkUrl" :src="imageUrl" :alt="altValue" class="product-logo  p-1 -mt-1 mb-2" />
    <a v-else :href="linkUrl">
      <img :src="imageUrl" :alt="altValue" class="product-logo" />
    </a>
    <!-- <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">
      Initial Contact
    </h4> -->
    <!-- <p class="text-gray-600 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p> -->
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    imageUrl: {
      type: String,
      required: false,
      default: ''
    },
    linkUrl: {
      type: String,
      required: false,
      default: ''
    },
    altValue: {
      type: String,
      required: true,
      default: ''
    }
  }
})
</script>
