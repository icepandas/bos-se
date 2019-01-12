import Vue from 'vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource';
import App from './App.vue'
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
