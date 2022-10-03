import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    currentMenu:'user',
    currentPage: 1,
    pageSize:10,
    checkbox: 0,
    checkItems: 0,
    checkedAll: true,
    deletePopup: false,
    detailpanelState: false,
    rowItems: [],
    paymentRowItems:[],
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
      name: "User Name",
      pic: "user.svg",
      email: "user@gmail.com"
    },
    organization: {
      logo: "client-logo.svg",
      name: "Organization Name"
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
    paymentRowItems(state) {
      return state.paymentRowItems
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
    currentMenu(state) {
      return state.currentMenu
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
    paymentRowItems(state, payload) {
      state.paymentRowItems = payload
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
    currentMenu(state, payload) {
      state.currentMenu = payload
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