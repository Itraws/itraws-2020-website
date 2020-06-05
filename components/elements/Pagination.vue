<template>
  <section class="pagination-section">
    <div class="pagination-section__inner">
      <div class="pagination">
        <Icon
          id="previous"
          alt="Previous"
          class="pagination__arrow previous"
          i-type="fas"
          i-icon="chevron-left"
          :i-color="
            getPreviousPage !== null
              ? 'blue'
              : getPreviousPage == null
              ? 'black25'
              : ''
          "
          i-background="false"
          :style="getPreviousPage !== null ? 'cursor: pointer;' : ''"
          @click="previousPage(getPreviousPage)"
        />
        <div class="pagination__list">
          <button
            v-for="page in getNumberOfPages"
            :key="page.id"
            :class="page == getCurrentPage ? 'active' : ''"
            class="pagination__list-item"
            role="button"
            @click="setCurrentPage(page)"
          >
            <span>{{ page }}</span>
          </button>
        </div>
        <Icon
          id="next"
          alt="Next"
          class="pagination__arrow next"
          i-type="fas"
          i-icon="chevron-right"
          :i-color="
            getNextPage !== null ? 'blue' : getNextPage == null ? 'black25' : ''
          "
          i-background="false"
          :style="getNextPage !== null ? 'cursor: pointer;' : ''"
          @click="nextPage(getNextPage)"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Icon from '~/components/elements/Icon.vue'

interface filterInt {
  [key: string]: any | {}
}

export default Vue.extend({
  name: 'Pagination',
  components: {
    Icon
  },
  props: {
    filterData: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      paginationLoaded: false
    }
  },
  computed: {
    ...mapGetters('blog', ['getFilteredPosts', 'getBlogPostsLength']),
    ...mapGetters('pagination', [
      'getCurrentPage',
      'getNumberOfPages',
      'getNextPage',
      'getPreviousPage'
    ])
  },
  methods: {
    ...mapActions('pagination', ['setCurrentPage', 'nextPage', 'previousPage'])
  }
})
</script>
