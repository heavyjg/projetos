// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueSwal from 'vue-swal';
import router from './router';
import Vuetify from 'vuetify';
import NProgress from 'nprogress';
import '@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/nprogress/nprogress.css';


Vue.use(Vuetify);
Vue.use(VueSwal);
Vue.use(NProgress);
Vue.use(Vuetify, {
  iconfont: 'fa'
});

Vue.config.productionTip = false;

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
