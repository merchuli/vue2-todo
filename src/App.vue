<template>
	<div id="app">
		<img
			alt="Vue logo"
			src="./assets/logo.png"
		>
		<h1>Practice Vue - Todo List</h1>
		<input-area
			msg="please add your todos"
			@add-item="addItem"
		/>
		<list
			:list="list"
			@deleteItem="deleteItem"
		/>
		<hr>
		<h1>Practice Vue - Slots</h1>
		<my-slot>Outer Message</my-slot>
		<hr>
		<h1>Practice Vuex</h1>
		<counter />
	</div>
</template>

<script>
import InputArea from './components/InputArea.vue';
import List from './components/List.vue';
import MySlot from './components/MySlot.vue';
import Counter from './components/Count.vue';

export default {
	components: {
		InputArea,
		List,
		MySlot,
		Counter,
	},
	data() {
		return {
			listIndex: 1,
			list: [],
		};
	},
	methods: {
		addItem(value) {
			this.list = [...this.list, {id: this.listIndex, text: value}];
			this.listIndex += 1;
		},
		deleteItem(item) {
			this.list = this.list.filter(obj => obj.id !== item.id);
		},
	},
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
