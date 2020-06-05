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
          i-color="blue"
          i-background="false"
          @click="previousPage()"
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
          i-color="blue"
          i-background="false"
          @click="nextPage()"
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
    },
    // Dictates the amount of items to show per page.
    numberPerPage: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      paginationLoaded: false
    }
  },
  computed: {
    ...mapGetters('blog', ['getFilteredPosts', 'getBlogPostsLength']),
    ...mapGetters('pagination', ['getCurrentPage', 'getNumberOfPages'])
  },
  async created() {
    await this.setNumberOfPages(
      Math.ceil(this.getBlogPostsLength / this.numberPerPage)
    )
  },
  methods: {
    ...mapActions('pagination', [
      'setCurrentPage',
      'setNumberOfPages',
      'nextPage',
      'previousPage'
    ])
  }
})
</script>
