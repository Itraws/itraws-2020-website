<template>
  <a :href="buttonTo" :type="buttonType" class="button hvr-grow" :class="`button--${buttonColor}`">{{ buttonValue }}</a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ButtonComponent',
  props: {
    buttonValue: {
      type: String,
      required: true,
      default: () => ''
    },
    buttonTo: {
      type: String,
      required: true,
      default: () => ''
    },
    buttonType: {
      type: String,
      required: true,
      default: () => ''
    },
    buttonColor: {
      type: String,
      required: true,
      default: () => ''
    }
  }
})
</script>
