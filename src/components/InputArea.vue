<template>
	<div>
		<h1>Todo List</h1>
		<p>{{ msg }}</p>
		<!-- <p>Key up enter - different layers</p> -->
		<input
			v-model="item"
			type="text"
			@keyup.enter="addItem"
		>
		<!-- <p>My input - {{ item }}</p> -->


		<!-- Some Practice -->
		<!-- Two way binding -->
		<!-- <p>v-model</p>
		<input type="text" v-model="item1">
		<p>My input - {{ item1 }}</p>

		<p>v-bind and v-on</p>
		<input :value="item2" @input="item2 = $event.target.value">
		<p>My input - {{ item2 }}</p> -->

		<!-- Deliver and Emit -->
		<!-- <p>Key up enter - the same layer</p>
		<input type="text" v-model="item3" v-on:keyup.enter="addData">
		<p>My input - {{ item3 }}</p> -->
	</div>
</template>

<script>
export default {
	props: {
		msg: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			item: '',
			// item1: '',
			// item2: '',
			// item3: '',
		};
	},
	methods: {
		addItem() {
			this.$emit('addItem', this.item);
			this.item = '';
		},
		// addData() {
		//   console.log('add data', this.item3);
		// },
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
