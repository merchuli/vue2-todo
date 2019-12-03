<template>
	<div id="app">
		<!-- Practice Vue - Todo List -->
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
		<!-- Practice Vue - Slots -->
		<h1>Practice Vue - Slots</h1>
		<h2>- Slot Content -</h2>
		<my-slot>Outer Message {{ listIndex }}</my-slot>
		<h2>- Named Slots -</h2>
		<base-layout>
			<template #header>
				<h3>Header</h3>
				<h4>Here might be a page title for the Header</h4>
			</template>

			<h3>Default</h3>
			<p>A paragraph for the main content.</p>
			<p>And another one.</p>

			<template v-slot:footer="slotProps">
				<h3>Footer</h3>
				<p>Here's some user info</p>
				{{ slotProps.user.career }}
			</template>

			<b>Some other words, although put on the bottom of the parent component but this paragraph would show on the default block</b>
		</base-layout>

		<hr>
		<!-- Practice Vuex -->
		<h1>Practice Vuex</h1>
		<counter />
	</div>
</template>

<script>
import BaseLayout from './components/layout/BaseLayout.vue';
import InputArea from './components/InputArea.vue';
import List from './components/List.vue';
import MySlot from './components/MySlot.vue';
import Counter from './components/Count.vue';

export default {
	components: {
		BaseLayout,
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
