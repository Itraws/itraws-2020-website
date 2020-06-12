import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { getPosts, getFeaturedPost, getLatestPosts } from '~/api/GhostApi'
interface BlogState {
  [key: string]: any | []
}

export const state = () =>
  ({
    blogPosts: [],
    featuredPost: [],
    lastestPosts: [],
    activeFilterTab: '',
    numberPerPage: 6,
    filteredPosts: []
  } as BlogState)

// RootState
export type RootState = ReturnType<typeof state>

// Getters
export const getters: GetterTree<RootState, RootState> = {
  getAllPosts: (state) => state.blogPosts,
  getFeaturedPost: (state) => state.featuredPost[0],
  getLatestPosts: (state) => state.lastestPosts,
  getFilteredPosts: (state) => (search: string) => {
    if (search.length === 0 && state.activeFilterTab === 'all') {
      return state.blogPosts
    } else if (search.length > 0) {
      return state.blogPosts.filter((post: BlogState) => {
        return post.title.toLowerCase().includes(search.toLowerCase())
      })
    } else if (state.activeFilterTab) {
      return state.blogPosts.filter((post: BlogState) => {
        return post.tags[0].name
          .toLowerCase()
          .includes(state.activeFilterTab.toLowerCase())
      })
    } else if (state.activeFilterTab === 'all') {
      return state.blogPosts
    } else if (search.length > 0 && state.activeFilterTab) {
      return state.blogPosts
        .filter((post: BlogState) => {
          return post.tags[0].name
            .toLowerCase()
            .includes(state.activeFilterTab.toLowerCase())
        })
        .filter((post: BlogState) => {
          return post.title.toLowerCase().includes(search.toLowerCase())
        })
    }
  },
  getActiveTab: (state) => state.activeFilterTab,
  getBlogPostsLength: (state) => {
    return state.blogPosts.length
  },
  getNumberPerPage: (state) => state.numberPerPage,
  getFilteredPostsV2: (state) => state.filteredPosts
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
  },
  SET_ACTIVE_TAB(state, tab: string) {
    state.activeFilterTab = tab
  },
  SET_FILTERED_POSTS(state, data: []) {
    state.filteredPosts = data
  }
}

// Actions
export const actions: ActionTree<RootState, RootState> = {
  fetchBlogPosts: async ({ commit, dispatch }, currentPage: number = 1) => {
    const posts: [] | any = await getPosts(currentPage)
    commit('SET_BLOG_POSTS', posts)
    dispatch('pagination/setPagination', posts.meta.pagination, {
      root: true
    })
    dispatch('fetchFeaturedPost')
  },
  fetchFeaturedPost: async ({ commit }) => {
    const featured = await getFeaturedPost()
    commit('SET_FEATURED_POST', featured)
  },
  // fetchSinglePost: async ({ dispatch, commit }, slug: string) => {
  //   const post = await getSinglePost(slug)
  //   return post
  // },
  fetchLatestPosts: async ({ commit }, n: string) => {
    const posts = await getLatestPosts(n)
    commit('SET_LATEST_POSTS', posts)
  },
  setActiveTab: ({ commit }, key: string) => {
    commit('SET_ACTIVE_TAB', key)
  },
  setFilteredPosts: ({ commit }, data: []) => {
    const filteredData = data
    commit('SET_FILTERED_POSTS', filteredData)
  }
}
