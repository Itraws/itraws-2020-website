<template>
  <div class="blog-page">
    <FilterBar />
    <section class="section section--white-smoke">
      <div class="section__inner">
        <div class="articles-container">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <Pagination />
      </div>
    </section>
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FilterBar from '~/components/elements/FilterBar'
import BlogCard from '~/components/blog/BlogCard'
import Pagination from '~/components/elements/Pagination'
import LayoutFooter from '~/components/layout/Footer'

export default Vue.extend({
  name: 'BlogPage',
  components: {
    FilterBar,
    BlogCard,
    Pagination,
    LayoutFooter
  }
})
</script>
