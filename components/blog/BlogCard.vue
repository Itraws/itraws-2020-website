<template>
  <article class="blog-card">
    <div class="blog-card__header mg-bottom-3">
      <i class="icon icon-blog--post mg-right-2" />
      <div class="blog-card__type">
        <p class="blog-card__category text-semibold">Blog post</p>
        <p class="blog-card__posttype text-regular">podcast</p>
      </div>
    </div>
    <div class="blog-card__main">
      <h3 class="blog-card__title mg-bottom-2">
        Episode 1: Technology and Africa
      </h3>
      <p class="blog-card__excerp text-rich-black-75">
        Here we put in some text blah blah blah oskdoaskdo okdoaskd okadoak
        dodao k doaksdokaodkao dakosdkaokd .
      </p>
    </div>
    <div class="blog-card__footer mg-top-5">
      <p class="blog-card__date  text-rich-black-75">
        14 apr 2020
      </p>
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
