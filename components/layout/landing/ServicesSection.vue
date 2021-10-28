<template>
  <section class="py-5 section--services">
    <div class="container">
      <div class="row row-cols-lg-2 gy-5 g-lg-1">
        <div class="col-sm-auto col-lg-4 px-2">
          <h2 class="text-bold">{{ heading }}</h2>
        </div>
        <div class="col-sm-auto col-lg-8">
          <h4 class="text-regular">{{ paragraph }}</h4>
          <TabList v-if="tabData.length >= 1" :articles="tabData" />
          <nuxt-link
            to="/services"
            class=" w-100 mg-top-4 d-flex align-items-center"
          >
            <span class="text-semibold ms-auto  h4">See Our services</span>
            <Icon
              i-type="fas"
              i-icon="arrow-right"
              i-color="white"
              i-background="false"
              class="hvr-forward"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import TabList from '~/components/layout/List/TabList.vue'
import Icon from '~/components/elements/Icon.vue'

export default Vue.extend({
  name: 'LandingPageSevicesSection',
  components: {
    TabList,
    Icon
  },

  props: {
    heading: { type: String, default: 'heading' },
    paragraph: { type: String, default: 'enter text here' },
    tabData: { type: Array, default: () => [] }
  }
})
</script>
