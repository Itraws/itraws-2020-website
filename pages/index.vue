<template>
  <main>
    <HeaderHero
      page-title="home"
      :hero-headline="contentCms.content_list[0].headline"
      :hero-text="contentCms.content_list[0].text"
      :hero-button-to="contentCms.content_list[0].button_url"
      :hero-button-text="contentCms.content_list[0].button_value"
    />
    <ServicesSection 
      heading="We bring together the ingenuity of all the digital professions" 
      paragraph="Understanding your needs and leveraging our expertise to help you meet your business goals and add value to your organization."
      :tabData="dummyData"
    />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import HeaderHero from '~/components/layout/HeaderHero.vue'
import Icon from '~/components/elements/Icon.vue'
import FormComponent from '~/components/elements/Forms.vue'
import ServicesSection from '~/components/layout/landing/ServicesSection.vue'

const contentCmsEn = require('~/assets/content/page/home-page-en.json')
const contentCmsFr = require('~/assets/content/page/page-acceuil-fr.json')

export default Vue.extend({
  name: 'HomePage',
  components: {
    HeaderHero,
    Icon,
    FormComponent,
    ServicesSection
  },
  data() {
      return {
          dummyData: [
            { title: "Digital Strategy, Consulting and Customer Experience", content: "something", href: "/services/experience-design"},
            { title: "User Experience Design (UX)", content: "something", href: "/services/experience-design"},
            { title: "Development & Digital Technology", content: "something", href: "/services/experience-design"},
            { title: "Data Science and Customer Intelligence", content: "something", href: "/services/experience-design"},
          ]
        }
    },
  computed: {
    contentCms() {
      return this.$i18n.locale === 'en'
        ? contentCmsEn
        : this.$i18n.locale === 'fr'
        ? contentCmsFr
        : null
    }
  },
  methods: {
    ...mapActions('modal', ['setError'])
  }
})
</script>
