// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueSocketio from 'vue-socket.io'
import Vuex from 'vuex'

import ShowScreen from './components/ShowScreen'
import DeveloperScreen from './components/DeveloperScreen'

Vue.use(Vuetify)
Vue.use(Vuex)

Vue.config.productionTip = false

const routes = {
  '/': ShowScreen,
  '/dev': DeveloperScreen
}

const store = new Vuex.Store({
  state: {
    snippet: {
      code: '',
      timeToSolve: 0,
      new: false
    }
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})

