<template>
  <div>
    <HeaderHero />
    <div class="home-page">
      <section class="section">
        <div class="section__grid">
          <div class="card">
            <div class="card__content">
              <span class="pattern pattern--dot-rectangle" />
              <h1 class="text-coconut text-bold mg-right-">
                {{ content.cardOne.headline }}
              </h1>
              <h4 class="text-coconut text-medium">
                {{ content.cardOne.text }}
              </h4>
              <ul class="card-menu mg-top-6">
                <li
                  v-for="link in content.cardOne.links"
                  :key="link.id"
                  class="card-menu__item"
                >
                  <h3 class="h3-alt text-coconut text-semibold mg-right-1">
                    <nuxt-link :to="{ path: link.url }"
                      >{{ link.text }}
                      <Icon
                        i-type="fas"
                        i-icon="arrow-right"
                        i-color="white"
                        i-background="false"
                        class="mg-left-2 hvr-forward"
                    /></nuxt-link>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="card__content">
              <span class="shape-red--3" />
              <span class="shape-white" />
              <h1 class="text-coconut text-bold mg-bottom-1">
                {{ content.cardTwo.headline }}
              </h1>
              <h4 class="text-coconut text-medium">
                {{ content.cardTwo.text }}
              </h4>
              <div class="card-form mg-top-6">
                <form
                  id="mc-embedded-subscribe-form"
                  :action="letterSignUp"
                  name="mc-embedded-subscribe-form"
                  class="validate"
                  target="_blank"
                  novalidate
                >
                  <input
                    id="mce-EMAIL"
                    class="newsletter mg-right-4 required email"
                    placeholder="Enter your email..."
                    type="email"
                    :value="newsletterEmail"
                    name="EMAIL"
                  />
                  <button-component
                    id="mc-embedded-subscribe"
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    :button-value="content.cardTwo.button"
                    button-type="button"
                    button-color="coconut"
                  />
                </form>
                <script
                  type="text/javascript"
                  src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
                ></script>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LayoutArticlesPreview />
      <LayoutFooter />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderHero from '~/components/layout/HeaderHero.vue'
import LayoutArticlesPreview from '~/components/layout/ArticlesPreview.vue'
import LayoutFooter from '~/components/layout/Footer.vue'
import Icon from '~/components/elements/Icon.vue'
import ButtonComponent from '~/components/elements/ButtonComponent.vue'
import content from '~/content/home.md'

export default Vue.extend({
  name: 'HomePage',
  components: {
    HeaderHero,
    Icon,
    ButtonComponent,
    LayoutArticlesPreview,
    LayoutFooter
  },
  data() {
    return {
      newsletterEmail: '',
      error: '',
      signUpResponse: ''
    }
  },
  computed: {
    content: () => content.attributes
  },
  methods: {
    async letterSignUp() {
      try {
        const signup: any = await this.$axios.$post(
          'https://itraws.us17.list-manage.com/subscribe/post?u=f57565c6062a47de5613bbb3a&amp;id=6ebd1999fb',
          {
            EMAIL: this.newsletterEmail
          }
        )
        this.signUpResponse = signup.response.data
      } catch (error) {
        this.error = error
      }
    }
  }
})
</script>
