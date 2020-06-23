<template>
  <div>
    <HeaderHero
      page-title="home"
      :hero-headline="contentCms.content_list[0].headline"
      :hero-text="contentCms.content_list[0].text"
      :hero-button-to="contentCms.content_list[0].button_url"
      :hero-button-text="contentCms.content_list[0].button_value"
    />
    <div class="home-page">
      <section class="section">
        <div class="section__grid">
          <div class="card">
            <span class="pattern pattern--dot-rectangle" />
            <div class="card__content">
              <h1 class="text-coconut text-bold mg-right-">
                {{ contentCms.content_list[1].headline }}
              </h1>
              <h4 class="text-coconut text-medium">
                {{ contentCms.content_list[1].text }}
              </h4>
              <ul class="card-menu mg-top-6">
                <li
                  v-for="link in contentCms.content_list[1].section_links"
                  :key="link.id"
                  class="card-menu__item"
                >
                  <h3 class="h3-alt text-coconut text-semibold mg-right-1">
                    <nuxt-link :to="localePath(link.link_url)"
                      >{{ link.link_name }}
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
            <span class="shape-red--3" />
            <span class="shape-white" />
            <div class="card__content">
              <h1 class="text-coconut text-bold mg-bottom-1">
                {{ contentCms.content_list[2].headline }}
              </h1>
              <h4 class="text-coconut text-medium">
                {{ contentCms.content_list[2].text }}
              </h4>
              <div class="card-form mg-top-6">
                <FormComponent
                  :value="contentCms.content_list[2].button_value"
                />
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
import FormComponent from '~/components/elements/Forms.vue'

const contentCmsEn = require('~/assets/content/page/home-page-en.json')
const contentCmsFr = require('~/assets/content/page/page-acceuil-fr.json')

export default Vue.extend({
  name: 'HomePage',
  components: {
    HeaderHero,
    Icon,
    FormComponent,
    LayoutArticlesPreview,
    LayoutFooter
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
