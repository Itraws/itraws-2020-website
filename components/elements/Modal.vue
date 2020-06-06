<template>
  <div class="modal">
    <div class="modal__container">
      <span class="modal--label">Label:</span>
      <p class="modal--message">Modal message.</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      error: '',
      loading: ''
    }
  }
})
</script>
