import Vue from 'vue';
import Vuex from 'vuex';
import counter from './counter';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {counter},
	state: {count: 10},
	strict: process.env.NODE_ENV !== 'production',
});

export default store;
