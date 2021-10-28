<template>
  <div>
    <HeaderHero
      hero-headline="Our Services"
      hero-text="Whether we are developing a new web platform or mobile app, implementing an e-commerce strategy, delivering online services, or supporting your content production and digital marketing activities, our team of experts draws on its creativity, determination, and ingenuity to help you achieve your goals."
    />
    <div class="services-page">
      <section class="section  py-5">
        <div class="container">
          <div
            v-for="(x, index) in 4" :key="index"
            class="row row-cols-lg-2 gy-5 g-lg-5 justify-content-between align-items-center"
          >
            <div class="col-sm-12 col-lg border-2 border-top border-secondary pe-5 py-5">
              <h2 class="text-ocean-blue">Brand Identity + Positioning</h2>
              <p class="text-rich-black-75 my-4">
                Today’s customers expect the brands they interact with to have
                an opinion. To take a stance. To give a sh*t.</br></br> We design brands
                that connect to audiences through shared culture and values, and
                that explore the cultural tensions that determine loyalties and
                behaviours.
              </p>
              <ul class="mb-5">
                <li v-for="(x, index) in 4" :key="index" class="mb-3 text-rich-black-75">Brand Strategy</li>
              </ul>
              <button-component
                button-to="/services/brand-strategy-positioning"
                button-value="Learn More"
                button-type="link"
                button-color="oceanBlue"
              />
            </div>
            <div class="col-sm-12 col-lg">
              <figure class="figure">
                <img
                  src="https://itrawsorigin.s3.ca-central-1.amazonaws.com/about-image-1-v2.jpg"
                  class="figure-img img-fluid"
                  alt="..."
                />
                </figure>
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
import ButtonComponent from '~/components/elements/ButtonComponent.vue'
export default Vue.extend({
  name: 'ServicesPages',
  components: {
    HeaderHero,
    ButtonComponent
  },
  computed: {}
})
</script>
