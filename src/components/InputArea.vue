<template>
	<div>
		<p>{{ msg }}</p>
		<!-- <p>Key up enter - different layers</p> -->
		<input
			v-model="item"
			type="text"
			@keyup.enter="addItem"
		>
		<p>Use watcher: how many characters: {{ textNumber }}</p>
		<p>Use computed: how many characters: {{ otherTextNumber }}</p>
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
			textNumber: 0,
			// item1: '',
			// item2: '',
			// item3: '',
		};
	},
	computed: {
		otherTextNumber() {
			return this.item.length;
		},
	},
	watch: {
		item(newVal, oldVal) {
			this.updateTextNumber(newVal.length - oldVal.length);
		},
		textNumber: 'someAction',
	},
	methods: {
		addItem() {
			this.$emit('add-item', this.item);
			this.item = '';
		},
		updateTextNumber(addNum) {
			this.textNumber += addNum;
		},
		someAction() {
			console.log('some actions');
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
