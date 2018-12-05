import Vue from 'vue';
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics';

import App from './App.vue';
import Preview from './Preview.vue';
import './assets/sass/main.scss';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  router: [
    { path: '/', component: App },
    { path: '/preview', component: Preview },
    { path: '/:uid', redirect: '/' },
  ],
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


Vue.use(VueAnalytics, {
  id: ['UA-128817330-1', 'UA-128817330-2'],
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
});
