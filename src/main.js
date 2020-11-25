import Vue from 'vue'
import App from './App.vue'
import Contadores from './components/Contadores'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.component('app-contadores', Contadores)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
