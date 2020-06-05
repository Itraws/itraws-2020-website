<template>
  <div
    class="icon"
    :class="
      `icon--${iColor} ${
        iBackground === 'true' ? `icon--bg--` + iColor : 'icon--bg--transparent'
      }`
    "
  >
    <font-awesome-icon :icon="[iType, iIcon]" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Icon',
  props: {
    iType: {
      type: String,
      required: true
    },
    iIcon: {
      type: String,
      required: true
    },
    iColor: {
      type: String,
      required: true
    },
    iBackground: {
      type: String,
      required: true
    }
  }
})
</script>
