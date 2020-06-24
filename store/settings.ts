import { GetterTree, ActionTree, MutationTree } from 'vuex'

interface siteMetaSettings {
  description: string
  keywords: Array<string>
}

interface pageSettings {
  title: string
  slogan: string
  meta: siteMetaSettings
}

export const state = () =>
  ({
    title: '',
    slogan: '',
    meta: {
      description: '',
      keywords: []
    }
  } as pageSettings)

export type RootState = ReturnType<typeof state>

// Getters
export const getters: GetterTree<RootState, RootState> = {
  getTitle: (state) => state.title,
  getSlogan: (state) => state.slogan,
  getMeta: (state) => state.meta,
  getMetaDescription: (state) => state.meta.description,
  getMetaKeywords: (state) => state.meta.keywords
}

// Mutations
export const mutations: MutationTree<RootState> = {
  SET_SITE_TITLE: (state, title: string) => {
    state.title = title
  },
  SET_SITE_SLOGAN: (state, slogan: string) => {
    state.slogan = slogan
  },
  SET_SITE_META: (state, meta: siteMetaSettings) => {
    state.meta = meta
  }
}

// Actions
export const actions: ActionTree<RootState, RootState> = {
  // fetchSiteSetting: ({ commit }, payload: {}) => {
  //   const data = payload
  // }
}
