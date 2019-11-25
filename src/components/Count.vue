<template>
	<div>
		<p>{{ count }}</p>
		<p>
			<button @click="increment">
				+
			</button>
			<button @click="decrement">
				-
			</button>
		</p>
	</div>
</template>

<script>
const component = {
	computed: {
		count() {
			return this.$store.state.count;
		},
	},
	methods: {
		increment() {
			this.$store.commit('increment');
		},
		decrement() {
			this.$store.commit('decrement');
		},
	},
};
export default component;
</script>
<style scoped>
button {
    margin: 4px;
}
</style>
