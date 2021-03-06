import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Projects from './views/Users.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/users',
      name: 'users',
      component: Projects
    }

  ]
})
