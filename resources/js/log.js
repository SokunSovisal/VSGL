
require('./bootstrap');

window.Vue = require('vue');


// Import Vuetitfy
import Vuetify from 'vuetify'
Vue.use(Vuetify)


  
import Vue from 'vue'
Vue.component('login', require('./views/Login.vue').default);


const app = new Vue({
    el: '#app'
});

