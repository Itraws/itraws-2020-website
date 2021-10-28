<template>
  <div class="service-page" >
    <!-- Hero -->

    <section class="section section--space">
    <div class="container position-relative overflow-hidden py-5">
      <span class="pattern--circle-alt pattern" />
      <div class="row g-4 justify-content-between">
        <div class="col-sm-auto col-lg-6 ">
        <h1 class="display-6 text-bold mg-bottom-10 text-persian-blue">
          Website Design + Development
        </h1>
          </div>
        </div>
      <div class="row row-cols-sm-1 row-cols-lg-2 g-4 justify-content-between">
        <div class="col-sm-auto col-lg-6 ">
          <h5 class="text-semibold text-rich-black-75">
            Stunning, high-performing websites should be the rule, not the
            exception. Luckily, we make the rules here, so…they are.
          </h5>
        </div>
        <div class="col-sm-auto col-lg-6">
          <small class=" text-rich-black-50 text-medium">
You can’t just tell people what your brand is—you need to show them. Your brand is the invisible thread that runs through your services, website, mailouts, emails, answering machine, even your team’s behaviour. These daily connections are the battleground where your brand will thrive or fail in existing and future customers’ minds
          </small>
        </div>
      </div>
    </div>
    </section>
    <!-- Approch -->
    <section class="section  section--space">
      <div class="container">
        <div class="row row-cols-sm-1 row-cols-lg-2 g-4">
          <div class="col-sm-auto">
              <h4 class="text-rich-black-50 text-uppercase">Approch to web design</h4>
              <h3 class="text-ocean-blue">Brand Identity + Positioning</h3>
              <small class="text-rich-black-75 my-4">
                Today’s customers expect the brands they interact with to have
                an opinion. To take a stance. To give a sh*t.</br></br> We design brands
                that connect to audiences through shared culture and values, and
                that explore the cultural tensions that determine loyalties and
                behaviours.
              </small>
</div>
          <div class="col-sm-auto">
              <figure class="figure">
                <img
                  src="https://itrawsorigin.s3.ca-central-1.amazonaws.com/about-image-1-v2.jpg"
                  class="figure-img img-fluid rounded"
                  alt="..."
                />
                </figure>
</div>
        </div>
      </div>
    </section>
    <!-- Sub Services -->
      <section class="section section--space section--services">
        <div class="container">
          <div class="row g-4 justify-content-between mg-bottom-5">
            <div class="col-sm-auto col-lg-7 ">
              <small class="text-coconut-75 text-regular text-uppercase">WEB DESIGN SERVICES</small>
              <h5 class="text-semibold mt-2">Our website design + development services have been purposefully created to position our clients’ brands for success in today’s dynamic, constantly evolving world.</h5>
            </div>
          </div>
          <div class="row row-cols-lg-4 g-5 justify-content-between mg-top-5">
            <div
              v-for="(x, index) in 4"
              :key="index"
              class="col-sm-auto col-md-5"
            >
              <h6 class="text-regular">01</h6>
              <h5 class="text-semibold  my-3">Love your creaft.</h5>
              <ul class="list-unstyled">
                <li v-for="(y, _index) in 5" :key="_index" >
                 <small class="text-coconut-75 text-regular">okaodkaok</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    <!-- Gallery -->
    <!-- Related Blog Posts -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ServicePage',
  async asyncData({ params, error }) {},
  computed: {}
})
</script>
