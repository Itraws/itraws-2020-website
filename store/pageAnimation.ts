import { GetterTree, ActionTree, MutationTree } from 'vuex'

interface BlogState {
  [key: string]: any | []
}

export const state = () =>
  ({
    page: 'index'
  } as BlogState)

// RootState
export type RootState = ReturnType<typeof state>

// Getters
export const getters: GetterTree<RootState, RootState> = {}

// Mutations
export const mutations: MutationTree<RootState> = {
  UPDATE_PAGE(state, pageName) {
    state.page = pageName
  }
}

// Actions
export const actions: ActionTree<RootState, RootState> = {}
