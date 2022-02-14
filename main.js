import App from './App'
import store from './store'
import i18n from './lang/i18n'


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
	i18n,
	store,
	...App
})
app.$mount()
// #endif


// #ifdef VUE3
import {createSSRApp} from 'vue'
import uView from '@/uni_modules/uview-ui'
export function createApp() {
	const app = createSSRApp(App)
	app.use(i18n)
	app.use(store)
	app.use(uView)
	return {app}
}
// #endif
