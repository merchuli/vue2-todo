<template>
	<div>
		<div class="block">
			<h2>State</h2>
			<p>count: {{ count }}</p>
			<p>mapStateCount {{ mapStateCount }}</p>
			<p>mapStateCountAlias {{ mapStateCountAlias }}</p>
			<p>localCount: {{ localCount }} | mapStateCountPlusLocalState {{ mapStateCountPlusLocalState }}</p>
		</div>
		<div class="block">
			<h2>Getters</h2>
			<p>doneTodos: {{ doneTodos }}</p>
			<p>filterId: {{ filterId }} - filterTodo: {{ filterTodo }}</p>
			<p>mapGetters - doneTodosCount: {{ doneTodosCount }}</p>
		</div>
		<div class="block">
			<h2>Mutations</h2>
			<p>
				<button @click="decrementNum">
					-3
				</button>
				<button @click="decrement">
					-
				</button>
				<button @click="reset">
					Reset
				</button>
				<button @click="increment">
					+
				</button>
				<button @click="incrementNum">
					+3
				</button>
				<button @click="multiIncrement">
					+*
				</button>
			</p>
		</div>
		<div class="block">
			<h2>Actions</h2>
			<p>action increment</p>
			<button @click="actionIncrement">
				+
			</button>
			<p>action increment (short)</p>
			<button @click="actionShortIncrement">
				+
			</button>
			<p>async increment (delay 2s)</p>
			<button @click="asyncDecrementNum">
				-3
			</button>
			<button @click="asyncIncrement">
				+
			</button>
			<button @click="asyncIncrementNum">
				+3
			</button>
		</div>
	</div>
</template>

<script>
import {
	mapState, mapGetters, mapMutations, mapActions,
} from 'vuex';

const component = {
	data() {
		return {
			// for state
			localCount: 5,
			// for getters
			filterId: 2,
			// for mutations
			multiIncrementNum: 5,
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
		// == For mutations ==
		...mapMutations([
			// this.$store.commit('decrement');
			'decrement',
			// this.$store.commit('increment');
			'increment',
			'reset',
		]),
		// decrement() {
		// 	this.$store.commit('decrement');
		// },
		// increment() {
		// 	this.$store.commit('increment');
		// },
		multiIncrement() {
			this.$store.commit('multiIncrement', this.multiIncrementNum);
		},
		// Commit with payload
		decrementNum() {
			this.$store.commit('decrementNum', {amount: 3});
		},
		// Object-Styled commit
		incrementNum() {
			this.$store.commit({type: 'incrementNum', amount: 3});
		},
		// == For actions ==
		...mapActions([
			'actionIncrement',
			'actionShortIncrement',
		]),
		// actionIncrement() {
		// 	this.$store.dispatch('actionIncrement');
		// },
		// actionShortIncrement() {
		// 	this.$store.dispatch('actionShortIncrement');
		// },
		asyncIncrement() {
			this.$store.dispatch('asyncIncrement');
		},
		// Dispatch with payload
		asyncDecrementNum() {
			this.$store.dispatch('asyncDecrementNum', {amount: 3});
		},
		// Object-Styled dispatch
		asyncIncrementNum() {
			this.$store.dispatch({type: 'asyncIncrementNum', amount: 3});
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
