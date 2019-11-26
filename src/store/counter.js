import Vue from 'vue';
import Vuex from 'vuex';

const initState = {
	count: 0,
	todos: [
		{id: 1, text: 'apple', done: true},
		{id: 2, text: 'banana', done: false},
	],
};

const initGetters = {
	doneTodos: state => state.todos.filter(todo => todo.done),
	doneTodosCount: (state, getters) => getters.doneTodos.length,
	getTodoById: state => id => state.todos.find(todo => todo.id === id),
};

const mutations = {increment: state => { state.count += 1; }, decrement: state => { state.count -= 1; }};


Vue.use(Vuex);

const store = new Vuex.Store({
	namespaced: true,
	state: initState,
	getters: initGetters,
	mutations,
});

export default store;
