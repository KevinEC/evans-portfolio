import Vue from 'vue'
import App from './App.vue'
import bootstrap from "bootstrap"

Vue.config.productionTip = false

// Directive to use on scroll listener
Vue.directive('scroll', {
	inserted: function (el, binding) {
		let f = function (evt) {
			if (binding.value(evt, el)) {
				window.removeEventListener('scroll', f)
			}
		}
		window.addEventListener('scroll', f)
	}
});

new Vue({
  render: h => h(App),
}).$mount('#app');