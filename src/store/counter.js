import Vue from 'vue';
import Vuex from 'vuex';

const initState = {count: 0};

const mutations = {increment: state => { state.count += 1; }, decrement: state => { state.count -= 1; }};


Vue.use(Vuex);

const store = new Vuex.Store({
	namespaced: true,
	state: initState,
	mutations,
});

export default store;
