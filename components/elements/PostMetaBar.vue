<template>
  <section class="post-meta-section">
    <div class="post-meta-section__inner">
      <div class="post-meta-social">
        <span class="meta-typo text-semibold mg-right-6">share</span>
        <nuxt-link to="about"
          ><img
            class="icon"
            src="~/assets/icons/social/tw-social-icon.svg"/></nuxt-link
        ><nuxt-link to="products"
          ><img class="icon" src="~/assets/icons/social/fb-social-icon.svg"
        /></nuxt-link>
        <nuxt-link to="blog"
          ><img
            class="icon"
            src="~/assets/icons/social/linkedin-social-icon.svg"
        /></nuxt-link>
      </div>
      <div class="post-meta-authors">
        <span class="meta-typo text-semibold mg-right-6">
          {{ authors.length > 1 ? 'authors' : 'author' }}
        </span>
        <div
          v-for="author in authors"
          :key="author.id"
          class="post-meta-author__card"
        >
          <div class="post-meta-author__card__bubble">
            <span>{{ author.abr }}</span>
          </div>
          <small class="text-capitalize mg-left-1 text-rich-black-75">{{
            author.name
          }}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PostMetaBar',
  data() {
    return {
      authors: [
        { abr: 'cm', name: 'carlo moleka' },
        { abr: 'ab', name: 'axel bossekota' },
        { abr: 'lm', name: 'leon masengo' }
      ]
    }
  }
})
</script>
