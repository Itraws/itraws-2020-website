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
                  name="mc-embedded-subscribe-form"
                  class="validate"
                  @submit.prevent="letterSignUp"
                >
                  <input
                    id="mce-EMAIL"
                    v-model="newsletterFname"
                    class="newsletter mg-right-4 required email"
                    placeholder="First name"
                    type="text"
                    name="FIRSTNAME"
                  />
                  <input
                    id="mce-EMAIL"
                    v-model="newsletterLname"
                    class="newsletter mg-right-4 required email"
                    placeholder="Last name"
                    type="text"
                    name="LASTNAME"
                  />
                  <input
                    id="mce-EMAIL"
                    v-model="newsletterEmail"
                    class="newsletter mg-right-4 required email"
                    placeholder="Enter your email..."
                    type="email"
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
import { mapActions } from 'vuex'
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
      newsletterFname: '',
      newsletterLname: '',
      newsletterEmail: '',
      error: '',
      signUpResponse: ''
    }
  },
  computed: {
    content: () => content.attributes
  },
  methods: {
    ...mapActions('modal', ['setError']),
    async letterSignUp(evt) {
      evt.preventDefault()
      try {
        const mcData = {
          members: [
            {
              email_address: this.newsletterEmail,
              status: 'subscribed',
              merge_fields: {
                FNAME: this.newsletterFname,
                LNAME: this.newsletterLname
              }
            }
          ]
        }
        const mcPostData = JSON.stringify(mcData)
        const signup = await this.$axios({
          url: '/mailchimp',
          method: 'post',
          headers: {
            Authorization: `apikey ${process.env.MAILCHIMP_AUTH}`
          },
          data: mcPostData
        })
        console.log(signup.response.data)
        this.signUpResponse = signup.response.data
      } catch (error) {
        this.setError(error)
        this.error = error
      }
    }
  }
})
</script>
