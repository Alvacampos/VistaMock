import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './router/routes';
import {store} from './store/store';
import HighchartsVue from 'highcharts-vue';

Vue.use(VueRouter);
Vue.use(HighchartsVue);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
