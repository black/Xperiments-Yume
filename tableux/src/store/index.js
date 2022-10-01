import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    currentPage: 1,
    pageSize:10,
    checkbox: 0,
    checkItems: 0,
    checkedAll: true,
    deletePopup: false,
    detailpanelState: false,
    rowItems: [],
    detailpanelContent: {
      "img": "",
      "name": "",
      "designation": "",
      "gender": "",
      "status": false,
      "selected": false
    },
    viewType:'default',
    user: {
      name: "Username",
      pic: "user.svg",
      email: "user@gmail.com"
    },
    organization: {
      logo: "client-logo.svg",
      name: "Organization"
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    organization(state) {
      return state.organization
    },
    uscurrentPageer(state) {
      return state.currentPage
    },
    rowItems(state) {
      return state.rowItems
    },
    deletePopup(state) {
      return state.deletePopup
    },
    detailpanelState(state) {
      return state.detailpanelState
    },
    detailpanelContent(state) {
      return state.detailpanelContent
    },
    menu(state) {
      return state.menu
    },
    viewType(state) {
      return state.viewType
    },
    checkbox(state) {
      return state.checkbox
    },
    checkItems(state) {
      return state.checkItems
    }
  },
  mutations: {
    user(state, payload) {
      state.user = payload
    },
    organization(state, payload) {
      state.organization = payload
    },
    currentPage(state, payload) {
      state.currentPage = payload
    },
    rowItems(state, payload) { 
      state.rowItems = payload
    },
    deletePopup(state, payload) {
      state.deletePopup = payload
    },
    detailpanelState(state, payload) {
      state.detailpanelState = payload
    },
    detailpanelContent(state, payload) {
      state.detailpanelContent = payload
    },
    menu(state, payload) {
      state.menu = payload
    },
    viewType(state,payload) {
      state.viewType = payload
    },
    checkbox(state, payload) {
      state.checkbox = payload
    },
    checkItems(state, payload) {
      state.checkItems = payload
    }
  },
  actions: {},
  modules: {}
})