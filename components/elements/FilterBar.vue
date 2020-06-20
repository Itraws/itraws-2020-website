<template>
  <section class="filter-section">
    <div class="filter-section__inner">
      <div class="filter-select">
        <ul class="filter-select__menu">
          <li
            v-for="key in searchKeys"
            :key="key.id"
            class="filter-select__item"
            :class="
              getActiveTab === key
                ? 'filter-select__item--active'
                : getActiveTab === ''
                ? setActiveTab('all')
                : ''
            "
            @click="setActiveTab(key)"
          >
            {{ key }}
          </li>
        </ul>
      </div>
      <div class="filter-search-bar">
        <label
          id="filter-search-label"
          class="filter-search-label"
          :class="
            searchInput.isFocused
              ? 'filter-search-label--focused'
              : 'filter-search-label--not-focused'
          "
          for="search"
          >Search</label
        >
        <input
          v-model="search"
          class="filter-search-input"
          name="search"
          role="button"
          type="text"
          @focus="onFocus($event)"
          @blur="onBlur"
        />
        <Icon
          class="filter-search-icon"
          i-type="fas"
          i-icon="search"
          i-color="blue"
          i-background="true"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Icon from '~/components/elements/Icon.vue'

export default Vue.extend({
  name: 'FilterBar',
  components: {
    Icon
  },
  data() {
    return {
      search: '',
      searchInput: {
        isFocused: false
      },
      searchKeys: [
        'all',
        'podcast',
        'blog post',
        'publication',
        'news',
        'open source'
      ]
    }
  },
  computed: {
    ...mapGetters('blog', ['getActiveTab']),
    searchInputLength(): number {
      return this.search.length
    }
  },
  watch: {
    search() {
      this.$emit('changeSearchInput', this.search)
    }
  },
  methods: {
    ...mapActions('blog', ['setActiveTab']),
    onFocus(event: {} | any) {
      event.target.select()
      this.searchInput.isFocused = true
    },
    onBlur() {
      if (this.searchInputLength <= 0) {
        this.searchInput.isFocused = false
      }
    }
  }
})
</script>
