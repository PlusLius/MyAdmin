import Vue from 'vue';
import Vuex from 'vuex';
import pub from './modules/public'
import pubSignal from './modules/pubSignal'
import device from './modules/device'
import getters from './getters'

Vue.use(Vuex);
const store = new Vuex.Store({
   modules: {
    pub,
    pubSignal,
    device
  },
  getters
});

export default store
