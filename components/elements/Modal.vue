<template>
  <div class="modal">
    <div
      class="modal__container"
      :class="{ 'modal--success': !getError, 'modal--danger': getError }"
    >
      <span class="modal--label">Error:</span>
      <p class="modal--message">{{ getError.message }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  data() {
    return {
      error: ''
    }
  },
  computed: {
    ...mapGetters('modal', ['getError'])
  }
})
</script>
