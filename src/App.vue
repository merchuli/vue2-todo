<template>
	<div id="app">
		<img
			alt="Vue logo"
			src="./assets/logo.png"
		>
		<input-area
			msg="please add your todos"
			@addItem="addItem"
		/>
		<list
			:list="list"
			@deleteItem="deleteItem"
		/>
		<hr>
	</div>
</template>

<script>
import InputArea from './components/InputArea.vue';
import List from './components/List.vue';

export default {
	name: 'App',
	components: {
		InputArea,
		List,
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
