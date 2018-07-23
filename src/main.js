import Vue from 'vue';
import App from './App.vue';
import Preview from './Preview.vue';
import './assets/sass/main.scss';

Vue.config.productionTip = false;

const routes = {
  '/': App,
  '/preview': Preview
}

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
