<template>
  <section class="section section--dark section--not100vh">
    <div class="section__content">
      <div class="section__inner section__flex">
        <div class="hero-blog-post">
          <span class="pattern pattern--dot-rectangle-blog-post" />
          <div class="breadcrumb mg-bottom-10">
            <nuxt-link to="/blog" class="breadcrumb__parent">Blog</nuxt-link>
            <svg
              class="breadcrumb__icon"
              width="18px"
              height="33px"
              viewBox="0 0 18 33"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
              <title>Icons/Arrows/Arrow-noBranch-right</title>
              <g
                id="Icons-&amp;-components"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
              >
                <g
                  id="Icons/Arrows/Arrow-noBranch-right"
                  class="breadcrumb__icon--color"
                  transform="translate(-6.000000, 1.000000)"
                  stroke-width="2"
                >
                  <polyline
                    transform="translate(15.000000, 15.500000) scale(-1, 1) rotate(90.000000) translate(-15.000000, -15.500000) "
                    points="-5.93275429e-15 8 15 23 30 8"
                  />
                </g>
              </g>
            </svg>
            <span class="breadcrumb__child">{{ postHero.title }}</span>
          </div>
          <h1 class="hero__headline text-bold text-coconut">
            {{ postHero.title }}
          </h1>
          <p class="text-coconut">{{ postHero.excerpt }}</p>
        </div>
        <div
          class="hero-blog-post-image"
          :style="{ backgroundImage: `url(${postHero.image})` }"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    postHero: {
      type: Object,
      default: () => {}
    }
  }
})
</script>
