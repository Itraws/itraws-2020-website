import { GetterTree, ActionTree, MutationTree } from 'vuex'
import {
  getPosts,
  getFeaturedPost,
  getSinglePost,
  getLatestPosts
} from '~/api/GhostApi'
interface BlogState {
  [key: string]: any | []
}

export const state = () =>
  ({
    blogPosts: [],
    featuredPost: [],
    lastestPosts: []
  } as BlogState)

// RootState
export type RootState = ReturnType<typeof state>

// Getters
export const getters: GetterTree<RootState, RootState> = {
  getAllPosts: (state) => state.blogPosts,
  getFeaturedPost: (state) => state.featuredPost[0],
  getLatestPosts: (state) => state.lastestPosts
}

// Mutations
export const mutations: MutationTree<RootState> = {
  SET_BLOG_POSTS(state, posts: []) {
    state.blogPosts = posts
  },
  SET_FEATURED_POST(state, post: []) {
    state.featuredPost = post
  },
  SET_LATEST_POSTS(state, posts: []) {
    state.lastestPosts = posts
  }
}

// Actions
export const actions: ActionTree<RootState, RootState> = {
  fetchBlogPosts: async ({ commit, dispatch }) => {
    try {
      const posts: [] = await getPosts()
      commit('SET_BLOG_POSTS', posts)
      dispatch('fetchFeaturedPost')
    } catch (error) {
      console.log({ error })
    }
  },
  fetchFeaturedPost: async ({ commit }) => {
    try {
      const featured: [] = await getFeaturedPost()
      commit('SET_FEATURED_POST', featured)
    } catch (error) {
      console.error({ error })
    }
  },
  fetchSinglePost: async ({ dispatch, commit }, slug: string) => {
    try {
      const post: [] = await getSinglePost(slug)
      return post
    } catch (error) {
      console.log({ errorMessage: error })
    }
  },
  fetchLatestPosts: async ({ commit, getters }, n: string) => {
    try {
      const posts: [] = await getLatestPosts(n)
      commit('SET_LATEST_POSTS', posts)
    } catch (error) {
      console.log({ error })
    }
  }
}
