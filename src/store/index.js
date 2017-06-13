import Vue from 'vue';
import Vuex from 'vuex';
import pub from './modules/public'
import getters from './getters'

Vue.use(Vuex);
const store = new Vuex.Store({
   modules: {
    pub
  },
  getters
});

export default store
