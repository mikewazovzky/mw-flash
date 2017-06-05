import Vue from 'vue'
import Flash from './Flash.vue'

const plugin = {
  install(Vue, options) {
  	Vue.component('Flash', Flash)
  }
}

export default plugin
