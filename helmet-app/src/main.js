// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueSwal from 'vue-swal';
import router from './router';
import Vuetify from 'vuetify';
import NProgress from 'vue-nprogress'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.use(Vuetify);
Vue.use(VueSwal);
Vue.use(NProgress);
Vue.use(Vuetify, {
  iconfont: 'fa'
});

const nprogress = new NProgress({ parent: '.nprogress-container' });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  nprogress,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
