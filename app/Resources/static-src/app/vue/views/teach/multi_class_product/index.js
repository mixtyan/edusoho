import Vue from 'common/vue';
import Router from 'vue-router'
import routes from 'app/vue/router/teach/multi_class_product/index.js'

const router = new Router({
  mode: 'hash',
  routes
})

new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})

