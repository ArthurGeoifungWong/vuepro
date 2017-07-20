import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

import search from './components/search.vue'
import sl from './components/searchlist.vue'
import find from './components/find.vue'

const routes=[
  {
      path: '/search',
      component: search
  },
  {
      path:'/search/:id',
      component:sl,
      name:'searchlist'
  },
  {
      path:'/find',
      component:find
  }
]

const router = new VueRouter({
    base: __dirname, //这个很重要
    mode: 'history',
    routes, // `routes: routes` 的简写
  })

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')
