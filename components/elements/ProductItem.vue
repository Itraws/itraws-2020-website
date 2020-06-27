<template>
  <article class="product-item">
    <img v-if="!linkUrl" :src="imageUrl" :alt="altValue" class="product-logo" />
    <a v-else :href="linkUrl">
      <img :src="imageUrl" :alt="altValue" class="product-logo" />
    </a>
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
