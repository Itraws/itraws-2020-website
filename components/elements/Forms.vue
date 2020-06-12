<template>
  <form
    name="subscription-form"
    class="newsletter"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="form-name" value="subscription-form" />
    <input
      v-model="newsletterFname"
      class="newsletter__input"
      placeholder="First name"
      type="text"
      name="FIRSTNAME"
      required
    />
    <input
      v-model="newsletterLname"
      class="newsletter__input"
      placeholder="Last name"
      type="text"
      name="LASTNAME"
      required
    />
    <input
      v-model="newsletterEmail"
      class="newsletter__input"
      placeholder="Enter your email..."
      type="email"
      name="EMAIL"
      required
    />
    <button-component
      type="submit"
      value="Subscribe"
      name="subscribe"
      :button-value="content.cardTwo.button"
      button-type="button"
      button-color="coconut"
    />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import ButtonComponent from '~/components/elements/ButtonComponent.vue'
const content = require('~/content/home.md')

interface modalState {
  [key: string]: any | []
}

export default Vue.extend({
  components: {
    ButtonComponent
  },
  props: {
    value: {
      type: String,
      default: () => ''
    }
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
    ...mapActions('modal', ['setSuccess', 'setError']),
    encode(data: modalState) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    async handleSubmit(e: modalState) {
      try {
        e.preventDefault()
        const form = e.target
        // const formSubmit = fetch('./ntfunctions/node-fetch', {
        //   headers: { accept: 'Accept: application/json' }
        // })
        const formSubmit = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': form.getAttribute('name'),
            FIRSTNAME: form.FIRSTNAME.value,
            LASTNAME: form.LASTNAME.value,
            EMAIL: form.EMAIL.value
          })
        })
        // const axiosConfig = {
        //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        // }
        // const formSubmit = await this.$axios.$post(
        //   '/',
        //   this.encode({ 'form-name': 'subscription-form', ...this.form }),
        //   axiosConfig
        // )
        console.log(formSubmit)
        this.setSuccess({
          label: 'Newsletter',
          message: 'Thank you for subscribing.',
          fdata: formSubmit
        })
      } catch (error) {
        this.setError(error)
      }
    }
  }
})
</script>
