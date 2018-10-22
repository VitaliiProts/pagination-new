import { configure } from '@storybook/vue';
import ElementUI from 'element-ui'

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins
import '../node_modules/element-theme-chalk/src/index.scss';
import locale from 'element-ui/lib/locale/lang/en';

// Install Vue plugins.
Vue.use(Vuex);
Vue.use(ElementUI, { locale });

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);