<template>
  <div class="modal">
    <div
      class="modal__container"
      :class="{ 'modal--success': !getError, 'modal--danger': getError }"
    >
      <span class="modal--label">{{
        !getError ? `${getSuccess.label}: ` : 'Error: '
      }}</span>
      <p class="modal--message">
        {{ !getError ? getSuccess.message : getError.message }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  data() {
    return {
      success: '',
      error: ''
    }
  },
  computed: {
    ...mapGetters('modal', ['getSuccess', 'getError'])
  }
})
</script>
