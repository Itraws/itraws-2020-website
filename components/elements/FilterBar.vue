<template>
  <section class="filter-section">
    <div class="filter-section__inner">
      <div class="filter-select">
        <ul class="filter-select__menu">
          <li class="filter-select__item filter-select__item--active">
            All
          </li>
          <li class="filter-select__item">
            podcast
          </li>
          <li class="filter-select__item">
            blog post
          </li>
          <li class="filter-select__item">
            publication
          </li>
          <li class="filter-select__item">
            news
          </li>
          <li class="filter-select__item">
            open source
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
          v-model="searchInput.field"
          class="filter-search-input"
          name="search"
          role="button"
          type="text"
          @focus="onFocus($event)"
          @blur="onBlur"
        />
        <img
          class="icon filter-search-icon"
          src="~/assets/UI/Icons/search-icon.svg"
          alt="Search"
          role="img"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

interface searchInput {
  field: string
  isFocused: boolean
}

export default Vue.extend({
  name: 'FilterBar',
  data() {
    return {
      searchInput: {
        field: '',
        isFocused: false
      }
    }
  },
  computed: {
    searchInputLength() {
      return this.searchInput.field.length
    }
  },
  methods: {
    onFocus(event) {
      event.target.select()
      this.searchInput.isFocused = true
    },
    onBlur(event) {
      if (this.searchInputLength <= 0) {
        this.searchInput.isFocused = false
      }
    }
  }
})
</script>
