<template>
  <div class="about-page">
    <section class="section section--dark">
      <div class="section__inner">
        <div class="section__grid">
          <div class="about-section">
            <h1 class="text-coconut mg-bottom-3">Our story</h1>
            <h4 class="text-coconut text-medium">
              Like phantasy brought forth to reality, Itraws is the work of a
              dreamer. Built with the sole goal to improve society at the
              benefit of the public, through the use of technology. Our journey
              is one of a traveler encountering many bumps on his way to the
              summit. A story of self-education, perseverance and dreams.
            </h4>
          </div>
          <div class="about-section__image--1">
            <img
              class="about-section__image--1"
              src="~/assets/img/about-image-1.png"
              alt="image 1"
            />
          </div>
        </div>
        <div class="section__grid mg-top-10">
          <div class="about-section__image--2">
            <img
              class="about-section__image--2"
              src="~/assets/img/about-image-2.png"
              alt="image 2"
            />
          </div>
          <div class="about-section">
            <h3 class="text-coconut mg-bottom-3">Solutions for society</h3>
            <p class="text-coconut-75">
              For as long as we can remember, we’ve been fascinated with
              technology. It enables us to build solutions that solve problems,
              build ideas and infrastructures that constitute the world we live
              in.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section section--white-smoke">
      <div class="section__inner">
        <div class="section__grid mission-grid">
          <div class="mission-section">
            <h1>Our mission</h1>
          </div>
          <div class="mission-section">
            <h4 class="text-semibold mg-bottom-5">
              To provide better solutions that: (improves public life), Offer
              commercial advantages, retells the story and shifts the status
              quo.
            </h4>
            <ul class="mission-section__list">
              <li class="mission-section__list__item">
                Develop commercial solutions.
              </li>
              <li class="mission-section__list__item">
                Create economic opportunity.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LayoutFooter from '~/components/layout/Footer'

export default Vue.extend({
  name: 'AboutPage',
  components: {
    LayoutFooter
  }
})
</script>
