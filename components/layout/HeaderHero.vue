<template>
  <section
    class="section"
    :class="isHomePage ? 'section--100vh header-bg' : 'section--not100vh'"
  >
    <span
      :class="isHomePage ? 'shape-red' : isBlogPage ? '' : 'shape-red--alt'"
    />
    <span v-show="isHomePage" class="shape-red--2" />
    <span
      :class="isHomePage ? 'shape-blue' : isBlogPage ? '' : 'shape-blue--alt'"
    />
    <span v-show="isHomePage" class="shape-blue--2" />
    <span
      :class="isHomePage ? 'pattern--circle' : 'pattern--circle-alt'"
      class="pattern"
    />
    <div class="section__content">
      <div class="section__inner">
        <div
          class="hero"
          :class="
            isHomePage
              ? 'hero--homePage'
              : isBlogPage
              ? 'hero--blogPage'
              : 'hero--altPage'
          "
        >
          <span v-if="!isBlogPage" class="pattern pattern--dot-vertical" />
          <h1
            v-if="!isBlogPage"
            class="hero__headline text-bold"
            :class="isHomePage ? 'display-typo mg-bottom-5' : 'mg-bottom-3'"
          >
            {{ isHomePage ? data.homePage.headline : data.otherPage.headline }}
          </h1>

          <div v-if="isBlogPage" class="blog-headline-container">
            <h4 class="mg-bottom-2 text-rich-black text-medium text-capitalize">
              featured
            </h4>
            <nuxt-link to="blog/ok">
              <h2 class="text-bold">
                {{ data.blogPage.headline }}
              </h2>
              <img
                class="icon icon-arrow--circle-right mg-left-3"
                src="~/assets/UI/Icons/Arrows/Arrow-circle-right.svg"
                alt="See Article"
              />
            </nuxt-link>
          </div>
          <p
            v-if="isHomePage || isBlogPage"
            class="hero__text text-regular"
            :class="isBlogPage ? 'blog-hero-excerp' : ''"
          >
            {{ isHomePage ? data.homePage.text : data.blogPage.text }}
          </p>
          <h4 v-else class="text-regular text-rich-black-75">
            {{ data.otherPage.text }}
          </h4>
          <button v-if="isHomePage" class="button button--oceanBlue">
            Know more
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HeaderHero',

  data() {
    return {
      data: {
        homePage: {
          headline: 'Stillness. Firmness. Constancy.',
          text:
            '“Every mountain top is within reach if you just keep climbing.”'
        },
        otherPage: {
          headline: 'Aiming for the peak',
          text:
            'At Itraws we build infrastructural technologies to improve the world we live in.'
        },
        blogPage: {
          pageTitle: 'Blog',
          headline: 'Episode 1: Technology and Africa',
          text:
            'Our Google connection is our key asset. We call on experts from Google’s offices around the world to help our portfolio companies grow.'
        }
      }
    }
  },

  computed: {
    isHomePage() {
      const indexName = this.$route.name
      return indexName === 'index'
    },
    isBlogPage() {
      const indexName = this.$route.name
      return indexName === 'blog'
    }
  }
})
</script>
