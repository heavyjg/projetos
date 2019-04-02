// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueSwal from 'vue-swal';
import router from './router';
import Vuetify from 'vuetify';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify)
Vue.use(VueSwal);
Vue.use(Vuetify, {
  iconfont: 'fa'
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
