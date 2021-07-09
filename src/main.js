import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    type: "",
    description: "",
  },
  getters: {
    GET_Type: state => {
      return state.type;
    },
    GET_Desc: state => {
      return state.description;
    },
  },
  mutations: {
    SET_ID: (state, value) => {
      state.type = value;
    },
    SET_Name: (state, value) => {
      state.description = value;
    },
  },
})

new Vue({
  store: store,
  render: h => h(App)
}).$mount('#app')