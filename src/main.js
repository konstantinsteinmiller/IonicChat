// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './AppInit'
import router from './router'
import Store from './store'

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'ion-app',
  'ion-title',
  'ion-header',
  'ion-toolbar',
  'ion-page',
  'ion-content',
  'ion-button',
  'ion-list',
  'ion-item',
  'ion-label',
  'ion-input',
  // 'ion-button',
  // 'ion-button',
  // 'ion-button',
]

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: Store,
  template: '<App/>',
  components: { App }
})
