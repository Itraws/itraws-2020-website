<template>
  <article class="blog-card">
    <div class="blog-card__header mg-bottom-3">
      <i class="icon icon-blog--post mg-right-2" />
      <div class="blog-card__type">
        <slot name="postCategory" />
        <slot name="postTag" />
      </div>
    </div>
    <div class="blog-card__main">
      <slot name="postTitle" />
      <slot name="postExcerp" />
    </div>
    <div class="blog-card__footer mg-top-5">
      <slot name="postDate" />
      <i class="icon icon-arrow--circle-right" />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BlogCard'
})
</script>
