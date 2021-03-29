import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import Multiselect from 'vue-multiselect'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  Multiselect
}).$mount('#app')
