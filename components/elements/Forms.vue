<template>
  <form
    name="subscription-form"
    class="newsletter"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="form-name" value="subscription-form" />
    <input
      v-model="newsletterFname"
      class="newsletter__input"
      placeholder="Enter name"
      type="text"
      name="name"
      required
    />
    <input
      v-model="newsletterEmail"
      class="newsletter__input"
      placeholder="Enter your email..."
      type="email"
      name="email"
      required
    />
    <button-component
      type="submit"
      value="Subscribe"
      name="subscribe"
      :button-value="value"
      button-type="button"
      button-color="coconut"
    />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import ButtonComponent from '~/components/elements/ButtonComponent.vue'

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
            name: form.name.value,
            email: form.email.value
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
