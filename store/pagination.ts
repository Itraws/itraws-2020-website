import { GetterTree, ActionTree, MutationTree } from 'vuex'

interface paginationState {
  [key: string]: any | []
}

export const state = () =>
  ({
    currentPage: 1,
    totalNumberOfPages: 0
  } as paginationState)

export type RootState = ReturnType<typeof state>

// Getters
export const getters: GetterTree<RootState, RootState> = {
  getCurrentPage: (state) => state.currentPage,
  getNumberOfPages: (state) => state.totalNumberOfPages
}

// Mutations
export const mutations: MutationTree<RootState> = {
  SET_CURRENT_PAGE: (state, value: number) => {
    state.currentPage = value
  },
  SET_NUMBER_OF_PAGES: (state, value: number) => {
    state.totalNumberOfPages = value
  },
  SET_NEXT_PAGE: (state) => {
    state.currentPage += 1
  },
  SET_PREVIOUS_PAGE: (state) => {
    state.currentPage -= 1
  }
}

// Actions
export const actions: ActionTree<RootState, RootState> = {
  setCurrentPage: ({ commit }, value: number) => {
    commit('SET_CURRENT_PAGE', value)
  },
  setNumberOfPages: ({ commit }, value: number) => {
    commit('SET_NUMBER_OF_PAGES', value)
  },
  nextPage: ({ commit }) => {
    commit('SET_NEXT_PAGE')
  },
  previousPage: ({ commit }) => {
    commit('SET_PREVIOUS_PAGE')
  }
}
