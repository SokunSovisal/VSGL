
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');



// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))



// User Router
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// let routes = [
//     { path: '/login', component: require('./components/Login.vue').default },
//     { path: '/', component: require('./components/Dashboard.vue').default },
//     { path: '/dashboard', component: require('./components/Dashboard.vue').default },
//     { path: '/users', component: require('./components/Users.vue').default }
// ]

// const router = new VueRouter({
//     mode: 'history',
//     routes // short for `routes: routes`
//   })



// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('navbar', require('./components/Navbar.vue').default);
// Vue.component('popup', require('./components/Popup.vue').default);

  


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false







// Import Vuetitfy
import Vuetify from 'vuetify'
Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')





// const app = new Vue({
//     el: '#app',
//     router
// });

