<template>
  <form
    name="subscription-form"
    class="newsletter"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
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
import ButtonComponent from '~/components/elements/ButtonComponent.vue'
const content = require('~/content/home.md')

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
  }
})
</script>
