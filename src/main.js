import Vue from 'vue'
import ElementUI from 'element-ui'
import '../node_modules/element-theme-chalk/src/index.scss';
import App from './App.vue';
import locale from 'element-ui/lib/locale/lang/en';

Vue.use(ElementUI, { locale });

new Vue({
  el: '#app',
  render: h => h(App)
})
