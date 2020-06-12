<template>
  <div class="modal">
    <div
      class="modal__container"
      :class="{
        'modal--success': getSuccess.isActive,
        'modal--danger': getError.isActive
      }"
    >
      <span class="modal--label">{{
        !getError.isActive ? `${getSuccess.data.label}: ` : 'Error: '
      }}</span>
      <p class="modal--message">
        {{
          !getError.isActive ? getSuccess.data.message : getError.data.message
        }}
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
