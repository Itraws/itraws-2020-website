<template>
  <section class="post-meta-section">
    <div class="post-meta-section__inner">
      <div class="post-meta-social">
        <span class="meta-typo text-semibold mg-right-6">share</span>

        <ShareNetwork
          v-for="(network, index) in networks"
          :key="index"
          :network="network"
          :url="postUrl"
          :title="postTitle"
          :description="postDescription"
          :hashtags="postHashTag"
          style="cursor: pointer;"
        >
          <Icon
            class="filter-search-icon"
            i-type="fab"
            :i-icon="network"
            i-color="white"
            i-background="true"
          />
        </ShareNetwork>
      </div>
      <div class="post-meta-authors">
        <span class="meta-typo text-semibold mg-right-6">
          {{ authors.length > 1 ? 'authors' : 'author' }}
        </span>
        <div
          v-for="author in authors"
          :key="author.id"
          class="post-meta-author__card"
        >
          <div class="post-meta-author__card__bubble">
            <span class="text-semibold">{{
              authorNameAbreviation(author.name)
            }}</span>
          </div>
          <small
            class="text-capitalize mg-left-1 text-rich-black-75 text-semibold"
            >{{ author.name }}</small
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/elements/Icon.vue'

export default Vue.extend({
  name: 'PostMetaBar',
  components: {
    Icon
  },
  props: {
    authors: {
      type: Array,
      default: () => []
    },
    postUrl: {
      type: String,
      required: true,
      default: ''
    },
    postTitle: {
      type: String,
      required: true,
      default: ''
    },
    postDescription: {
      type: String,
      required: true,
      default: ''
    },
    postHashTag: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {
      networks: ['facebook', 'twitter', 'linkedin']
    }
  },
  methods: {
    authorNameAbreviation(name: string) {
      const splitNames = name.trim().split(' ')
      if (splitNames.length > 1) {
        return splitNames[0].charAt(0) + splitNames[1].charAt(0)
      }
      return splitNames[0].charAt(0)
    }
  }
})
</script>
