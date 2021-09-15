import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import bootstrap from "bootstrap"

Vue.config.productionTip = false

Vue.use(VueRouter)

import BaseHome from './components/BaseHome.vue'
import BaseAbout from './components/BaseAbout.vue'

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

const routes = [
	{ path: '/', component: BaseHome },
	{ path: '/bar', component: BaseAbout }
]

const router = new VueRouter({
	routes
  })

new Vue({
	router,
  	render: h => h(App),
}).$mount('#app');

