import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/element.js'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import store from './store'
import '@/styles/index.scss'
import './assets/fonts/iconfont.css'
// import cookie from 'vue-cookie'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
// Vue.prototype.$cookie = cookie

// Vue.use(ElementUI)

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount('#app')
