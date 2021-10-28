<template>
  <section class="container-fluid p-0 mg-top-10">
    <div class="row">
      <div v-if="articles.length >= 1" class="col">
        <article
          v-for="(article, index) in articles"
          :key="index"
          class="border-bottom border-2 py-2"
        >
          <nuxt-link :to="article.href" class="d-flex align-items-center">
            <h4 class="h3 text-bold">
              {{ article.title }}
            </h4>
            <Icon
              i-type="fas"
              i-icon="arrow-right"
              i-color="white"
              i-background="false"
              class="hvr-forward ms-auto"
            />
          </nuxt-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Icon from '~/components/elements/Icon.vue'

interface Article {
  title: string
  content: string
  href: string
}

export default Vue.extend({
  name: 'TabList',
  components: {
    Icon
  },
  props: {
    articles: {
      type: Array as PropType<Array<Article>>,
      default: () => []
    }
  }
})
</script>
