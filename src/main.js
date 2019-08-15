import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'


Vue.use(BootstrapVue)
Vue.use(Chartkick.use(Chart))


new Vue({
  el: '#app',
  render: h => h(App)
})
