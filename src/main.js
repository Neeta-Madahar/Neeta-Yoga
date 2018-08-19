import Vue from 'vue';
import VueAnalytics from 'vue-analytics';

import App from './App.vue';
import Preview from './Preview.vue';
import './assets/sass/main.scss';

Vue.config.productionTip = false;

const routes = {
  '/': App,
  '/preview': Preview
};


new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || App;
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app');

Vue.use(VueAnalytics, {
  id: 'UA-123353348-2',
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
});
