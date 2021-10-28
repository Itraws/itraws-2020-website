<template>
  <div>
    <HeaderHero
      :hero-headline="contentCms.content_list[0].headline"
      :hero-text="contentCms.content_list[0].text"
    />
    <div class="about-page">
      <section class="section section--dark">
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col">
              <div class="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/is8drsL0q9k?rel=0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section--white-smoke py-5">
        <div class="container">
          <div
            class="row row-cols-lg-2 gy-5 g-lg-1 justify-content-between align-items-center"
          >
            <div class="col-sm-12 col-lg">
              <h1 class="text-ocean-blue mg-bottom-3">
                {{ contentCms.content_list[1].headline }}
              </h1>
              <h4 class="text-persian-blue text-medium">
                {{ contentCms.content_list[1].text }}
              </h4>
            </div>
            <div
              class="col-sm-12 col-lg d-flex justify-content-center my-sm-5 my-lg-0"
            >
              <img
                class="about-section__image--1"
                :src="contentCms.content_list[1].image_url"
                alt="image 1"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="section section--services py-5">
        <div class="container">
          <div class="row mg-bottom-10">
            <div class="col">
              <h4 class="text-regular text-uppercase">Rules to Live By</h4>
              <h3 class="">Our Values</h3>
            </div>
          </div>
          <div class="row row-cols-lg-2 g-5">
            <div
              v-for="(x, index) in 4"
              :key="index"
              class="col-sm-auto col-md-6"
            >
              <h1 class="display-3 text-bold">01</h1>
              <h2 class="text-semibold h3">Love your creaft.</h2>
              <p class="text-regular lead">
                We’re here because we love what we do. It’s our passion, hobby,
                career, and vocation. We’re looking for others who feel the same
                way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderHero from '~/components/layout/HeaderHero.vue'
const contentCmsEn = require('~/assets/content/page/about-en.json')
const contentCmsFr = require('~/assets/content/page/apropos-fr.json')

export default Vue.extend({
  name: 'AboutPage',
  components: {
    HeaderHero
  },
  computed: {
    contentCms() {
      return this.$i18n.locale === 'en'
        ? contentCmsEn
        : this.$i18n.locale === 'fr'
        ? contentCmsFr
        : null
    }
  }
})
</script>
