import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

import index from './components/index.vue'
import watch from './components/watch.vue'
import search from './components/search.vue'

import store from './store/store'

const routes=[
  {
    path:'/',
    component:index
  },
  {
    path:'/watch/:id',
    component:watch,
    name:'mvlist'
  }
]
const router=new VueRouter({
  base:__dirname,
  mode:'history',
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
}).$mount("#app")
