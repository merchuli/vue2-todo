import Vue from 'vue';
import Vuex from 'vuex';

// State
const initState = {
	count: 0,
	todos: [
		{id: 1, text: 'apple', done: true},
		{id: 2, text: 'banana', done: false},
	],
};

// Getters
const initGetters = {
	doneTodos: state => state.todos.filter(todo => todo.done),
	doneTodosCount: (state, getters) => getters.doneTodos.length,
	getTodoById: state => id => state.todos.find(todo => todo.id === id),
};

// Mutations
const mutations = {
	reset: state => { state.count = 0; },
	increment: state => { state.count += 1; },
	decrement: state => { state.count -= 1; },
	multiIncrement: (state, n) => { state.count *= n; },
	decrementNum: (state, payload) => { state.count -= payload.amount; },
	incrementNum: (state, payload) => { state.count += payload.amount; },
};

// Actiolns
const actions = {
	actionIncrement: context => context.commit('increment'),
	actionShortIncrement: ({commit}) => commit('increment'),
	asyncIncrement: ({commit}) => { setTimeout(() => commit('increment'), 2000); },
	asyncDecrementNum: ({commit}, payload) => { setTimeout(() => commit('decrementNum', payload), 2000); },
	asyncIncrementNum: ({commit}, payload) => { setTimeout(() => commit('incrementNum', payload), 2000); },
	promiseIncrement: ({commit}) => new Promise(resolve => {
		setTimeout(() => {
			commit('increment');
			resolve('message from the store actions -> promise resolved');
		}, 3000);
	}),
	actionB: ({dispatch, commit}) => dispatch('promiseIncrement').then(() => setTimeout(() => commit('incrementNum', {amount: 3}), 5000)),
};

Vue.use(Vuex);

const store = new Vuex.Store({
	namespaced: true,
	state: initState,
	getters: initGetters,
	mutations,
	actions,
});

export default store;
