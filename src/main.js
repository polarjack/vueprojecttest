import Vue from 'vue'
import VueRouter from 'vue-router'

import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"


import axios from "axios"

import routes from "./config/routes"
// import routerHooks from "./config/routes/hooks"

Vue.use(BootstrapVue)
Vue.use(VueRouter)

// set up routers
const router = new VueRouter({
  routes,
  mode: 'history',
  saveScrollPosition: true
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")

export { router }