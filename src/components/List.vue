<template>
	<div id="list">
		<ul>
			<li
				v-for="(item, index) in list"
				:key="item.id"
			>
				<div>
					{{ item.id }}.  {{ item.text }}
					index: {{ index }}
					<button @click="deleteItem(item)">
						Xx
					</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
const component = {
	name: 'List',
	props: {
		list: Array,
	},
	methods: {
		deleteItem(item) {
			this.$emit('deleteItem', item);
		},
	},
};

export default component;
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
  margin: 0 10px;
  text-align: left;
}
a {
  color: #42b983;
}
</style>
