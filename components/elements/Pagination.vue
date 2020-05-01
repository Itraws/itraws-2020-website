<template>
  <section class="pagination-section">
    <div class="pagination-section__inner">
      <div class="pagination">
        <img
          class="pagination__arrow previous"
          src="~/assets/UI/Icons/Arrows/Arrow-noBranch-left.svg"
          alt="Previous"
        />
        <div class="pagination__list">
          <button class="pagination__list-item active" role="button">
            <span>1</span>
          </button>
          <button class="pagination__list-item" role="button">
            <span>2</span>
          </button>
        </div>
        <img
          class="pagination__arrow next"
          src="~/assets/UI/Icons/Arrows/Arrow-noBranch-right.svg"
          alt="Next"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Pagination',
  data() {
    return {
      activePage: 1
    }
  }
})
</script>
