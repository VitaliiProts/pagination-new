import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import state from './state';

Vue.use(Vuex)

export default {
    mutations,
    actions,
    getters,
    state,
    new Vuex.Store({})
}