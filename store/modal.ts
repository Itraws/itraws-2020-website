import { GetterTree, ActionTree, MutationTree } from 'vuex'
interface modalState {
  [key: string]: any | []
}

export const state = () =>
  ({
    display: false,
    error: {
      isActive: false,
      data: {}
    },
    success: {
      isActive: false,
      data: {}
    }
  } as modalState)
// RootState
export type RootState = ReturnType<typeof state>
// Getters
export const getters: GetterTree<RootState, RootState> = {
  getModalStatus: (state) => state.display,
  getError: (state) => state.error,
  getSuccess: (state) => state.success
}

// Mutations
export const mutations: MutationTree<RootState> = {
  SET_MODAL_STATUS: (state, status) => {
    state.display = status
  },
  SET_ERROR: (state, error) => {
    state.error.isActive = true
    state.error.data = error
  },
  SET_SUCCESS: (state, message) => {
    state.success.isActive = true
    state.success.data = message
  }
}

// Actions
export const actions: ActionTree<RootState, RootState> = {
  setError: ({ commit }, error) => {
    commit('SET_ERROR', error)
    commit('SET_MODAL_STATUS', true)
  },
  setSuccess: ({ commit }, message) => {
    commit('SET_SUCCESS', message)
    commit('SET_MODAL_STATUS', true)
  }
}
