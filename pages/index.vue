<template>
  <div class="home-page">
    <section class="section">
      <div class="section__grid">
        <div class="card">
          <div class="card__content">
            <span class="pattern pattern--dot-rectangle" />
            <h1 class="text-coconut text-bold mg-right-">
              We stand tall
            </h1>
            <h4 class="text-coconut text-medium">Empowering Africain tech</h4>
            <ul class="card-menu mg-top-6">
              <li class="card-menu__item">
                <h3 class="h3-alt text-coconut text-semibold mg-right-4">
                  <nuxt-link to="/about">Who we are</nuxt-link>
                </h3>
                <i class="icon icon-arrow--branch-white-right" />
              </li>
              <li class="card-menu__item">
                <h3 class="h3-alt text-coconut text-semibold mg-right-4">
                  <nuxt-link to="/products">What we build</nuxt-link>
                </h3>
                <i class="icon icon-arrow--branch-white-right" />
              </li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card__content">
            <span class="shape-red--3" />
            <span class="shape-white" />
            <h1 class="text-coconut text-bold mg-bottom-1">We lead</h1>
            <h4 class="text-coconut text-medium">
              Stay up to date with our progress
            </h4>
            <div class="card-form mg-top-6">
              <input
                class="newsletter mg-right-4"
                placeholder="Enter your email..."
                type="text"
              />
              <button class="button button--coconut">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <LayoutArticlesPreview />
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LayoutArticlesPreview from '~/components/layout/ArticlesPreview'
import LayoutFooter from '~/components/layout/Footer'

export default Vue.extend({
  name: 'HomePage',
  components: {
    LayoutArticlesPreview,
    LayoutFooter
  }
})
</script>
