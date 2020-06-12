<template>
  <article class="product-item">
    <img
      src="https://itrawsorigin.s3.ca-central-1.amazonaws.com/itraws2020assets/UI/Branding/product-logo.png"
      alt="Victoria Analytica"
      class="product-logo"
    />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    image: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
})
</script>
