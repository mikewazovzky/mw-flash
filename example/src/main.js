import Vue from 'vue'
import App from './App.vue'

// import <flash> component from npm module
import Flash from 'mw-flash'
Vue.use(Flash);

// use local <flash> component
// Vue.component('flash', require('./components/Flash.vue'));

// global event bus
window.events = new Vue(); 

// global flash function
window.flash = function(message) {
	window.events.$emit('flash', message);
}

new Vue({
  	el: '#app',
  	render: h => h(App)
})
