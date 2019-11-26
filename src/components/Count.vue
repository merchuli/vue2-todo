<template>
	<div>
		<p>count: {{ count }}</p>
		<p>mapStateCount {{ mapStateCount }}</p>
		<p>mapStateCountAlias {{ mapStateCountAlias }}</p>
		<p>localCount: {{ localCount }} | mapStateCountPlusLocalState {{ mapStateCountPlusLocalState }}</p>

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
import {mapState} from 'vuex';

const component = {
	data() {
		return {
			localCount: 5,
		};
	},
	computed: {
		count() {
			return this.$store.state.count;
		},
		...mapState({
			mapStateCount: state => state.count,
			mapStateCountAlias: 'count',
			mapStateCountPlusLocalState(state) {
				return state.count + this.localCount;
			},
		}),
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
