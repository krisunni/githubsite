import Vue from 'vue'
import App from './App'
import jquery from 'jquery'

require('bootstrap')
require('jquery.easing')

/* Load boostrap css */
require('bootstrap/dist/css/bootstrap.css')
require('devicons/css/devicons.css')
require('font-awesome/css/font-awesome.css')

/*  Global variable jquery to use anywhere in .vue with this.jquery. */
Vue.prototype.jquery = jquery

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
