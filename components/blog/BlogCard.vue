<template>
  <article
    class="blog-card hvr-float"
    :class="
      cardColor === 'white'
        ? 'blog-card--white'
        : cardColor === 'blue'
        ? 'blog-card--blue'
        : cardColor === 'black'
        ? 'blog-card--black'
        : 'blog-card--white'
    "
  >
    <div class="blog-card__header mg-bottom-3">
      <div class="blog-card__icon">
        <Icon
          :i-type="iType"
          :i-icon="iIcon"
          :i-color="iColor"
          :i-background="iBackground"
        />
      </div>
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
      <nuxt-link :to="iLink">
        <Icon
          i-type="fas"
          i-icon="arrow-right"
          i-color="blue"
          i-background="true"
          class="hvr-bounce-in"
        />
      </nuxt-link>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/elements/Icon.vue'
export default Vue.extend({
  name: 'BlogCard',
  components: {
    Icon
  },
  props: {
    cardColor: {
      type: String,
      default: 'white'
    },
    iType: {
      type: String,
      required: true
    },
    iIcon: {
      type: String,
      required: true
    },
    iColor: {
      type: String,
      required: true
    },
    iBackground: {
      type: String,
      required: true
    },
    iLink: {
      type: String,
      required: true
    }
  }
})
</script>
