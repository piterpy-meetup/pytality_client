// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueSocketio from 'vue-socket.io'
import store from './store'

import HelloWorld from './components/HelloWorld'
import ShowScreen from './components/ShowScreen'

Vue.use(Vuetify)
// Vue.use(VueSocketio, 'http://socketserver.com:1923', store);

Vue.config.productionTip = false

const routes = {
  '/': App,
  '/editor': ShowScreen
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
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
