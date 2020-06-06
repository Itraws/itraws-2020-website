import { GetterTree, ActionTree, MutationTree } from 'vuex'

interface paginationState {
  [key: string]: any | []
}

export const state = () =>
  ({
    meta: {}
  } as paginationState)

export type RootState = ReturnType<typeof state>

// Getters
export const getters: GetterTree<RootState, RootState> = {
  getPagination: (state) => state.meta,
  getNextPage: (state) => state.meta.next,
  getCurrentPage: (state) => state.meta.page,
  getNumberOfPages: (state) => state.meta.pages,
  getPreviousPage: (state) => state.meta.prev,
  getTotalPostsNumber: (state) => state.meta.total
}

// Mutations
export const mutations: MutationTree<RootState> = {
  SET_PAGINATION: (state, data: {}) => {
    state.meta = data
  },
  SET_CURRENT_PAGE: (state, number: number) => {
    state.meta.page = number
  }
}

// Actions
export const actions: ActionTree<RootState, RootState> = {
  setPagination: ({ commit }, pagination: {}) => {
    try {
      commit('SET_PAGINATION', pagination)
    } catch (error) {
      console.log({ error })
    }
  },
  // changePage: ({ commit, dispatch, getters }, number: number) => {
  //   try {
  //     dispatch('blog/fetchBlogPosts', number, { root: true })
  //     commit('SET_CURRENT_PAGE', number)
  //   } catch (error) {
  //     console.log({ error })
  //   }
  // },
  changePage: ({ commit, dispatch, getters }, number: number) => {
    // ca fonctionne, mais je ne sais pas pourquoi...
    if (typeof number !== 'number') number = getters.getCurrentPage
    if (typeof number === 'number') {
      dispatch('blog/fetchBlogPosts', number, { root: true })
      commit('SET_CURRENT_PAGE', number)
    }
  }
}
