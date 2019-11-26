<template>
	<div>
		<div class="block">
			<h2>State</h2>
			<p>count: {{ count }}</p>
			<p>mapStateCount {{ mapStateCount }}</p>
			<p>mapStateCountAlias {{ mapStateCountAlias }}</p>
			<p>localCount: {{ localCount }} | mapStateCountPlusLocalState {{ mapStateCountPlusLocalState }}</p>

			<p>
				<button @click="decrement">
					-
				</button>
				<button @click="increment">
					+
				</button>
			</p>
		</div>
		<div class="block">
			<h2>Getters</h2>
			<p>doneTodos: {{ doneTodos }}</p>
			<p>filterId: {{ filterId }} - filterTodo: {{ filterTodo }}</p>
			<p>mapGetters - doneTodosCount: {{ doneTodosCount }}</p>
		</div>
	</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

const component = {
	data() {
		return {
			// for state
			localCount: 5,
			// for getters
			filterId: 2,
		};
	},
	computed: {
		// for state
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
		// for getters
		doneTodos() {
			return this.$store.getters.doneTodos;
		},
		filterTodo() {
			return this.$store.getters.getTodoById(this.filterId);
		},
		...mapGetters([
			'doneTodosCount',
		]),
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
.block {
	text-align: left;
	margin-left: 16px;
}
</style>
