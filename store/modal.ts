import { GetterTree, ActionTree, MutationTree } from 'vuex'
interface errorState {
  [key: string]: any | []
}

export type RootState = ReturnType<typeof state>

export const state = () =>
  ({
    display: false,
    error: {}
  } as errorState)

// Getters
export const getters: GetterTree<RootState, RootState> = {
  getModalStatus: (state) => state.display,
  getError: (state) => state.error
}

// Mutations
export const mutations: MutationTree<RootState> = {
  SET_MODAL_STATUS: (state, status) => {
    state.display = status
  },
  SET_ERROR: (state, error) => {
    state.error = error
  }
}

// Actions
export const actions: ActionTree<RootState, RootState> = {
  setError: ({ commit }, error) => {
    commit('SET_ERROR', error)
    commit('SET_MODAL_STATUS', true)
  }
}
