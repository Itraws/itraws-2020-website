import { GetterTree, ActionTree, MutationTree } from 'vuex'
const uiSettings = require('~/assets/site/uisettings.json')

interface siteMetaSettings {
  description: string
  keywords: Array<string>
}

interface pageSettings {
  title: string
  slogan: string
  meta: siteMetaSettings
  uiSettings: object
}

export const state = () =>
  ({
    title: '',
    slogan: '',
    meta: {
      description: '',
      keywords: []
    },
    uiSettings: {},
  } as pageSettings)

export type RootState = ReturnType<typeof state>

// Getters
export const getters: GetterTree<RootState, RootState> = {
  getTitle: (state) => state.title,
  getSlogan: (state) => state.slogan,
  getMeta: (state) => state.meta,
  getMetaDescription: (state) => state.meta.description,
  getMetaKeywords: (state) => state.meta.keywords,
  getUiSettings: (state) => state.uiSettings,
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
  },
  SET_UI_SETTINGS: (state, payload: {}) => {
    state.uiSettings = payload
  },
}

// Actions
export const actions: ActionTree<RootState, RootState> = {
  // This should only be limited to component state.
  fetchSiteSetting: ({ commit }) => {
    const data = uiSettings
    commit('SET_UI_SETTINGS', data)
  }
}
