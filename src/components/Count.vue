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
			<p>async - use promise to increment (delay 3s)</p>
			<p>message from promise: {{ msgFromPromise }}</p>
			<button @click="promiseIncrement">
				+
			</button>
			<p>async - use promise to increment -> actionB call promiseIncrement (delay 3s +1, delay 5s + 3)</p>
			<button @click="actionB">
				+1 +3
			</button>
		</div>
		<div class="block">
			<h2>Modules</h2>
			<p>Add local module(counter) count and root count: {{ sumRootCount }}</p>
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
			// for actions
			msgFromPromise: 'no message',
		};
	},
	computed: {
		// == For State ==
		count() {
			// return this.$store.state.count;    // for the state when not separating modules
			return this.$store.state.counter.count;
		},
		...mapState({
			// mapStateCount: state => state.count,    // for the state when not separating modules
			mapStateCount: state => state.counter.count,
			// Since the counter store become the sub module of the root store
			// the count here is the count of the root state
			mapStateCountAlias: 'count',
			mapStateCountPlusLocalState(state) {
				// return state.count + this.localCount;    // for the state when not separating modules
				return state.counter.count + this.localCount;
			},
		}),
		// == For getters == (The comment line is the original way to access state when not separating modules, and marked as *origin: )
		doneTodos() {
			// *origin: return this.$store.getters.doneTodos;
			return this.$store.getters['counter/doneTodos'];
		},
		filterTodo() {
			// *origin: return this.$store.getters.getTodoById(this.filterId);
			return this.$store.getters['counter/getTodoById'](this.filterId);
		},
		// *origin:
		// ...mapGetters([
		// 	'doneTodosCount',
		// ]),
		...mapGetters({
			doneTodosCount: 'counter/doneTodosCount',
		}),
		// == For Modules - getters ==
		sumRootCount() {
			return this.$store.getters['counter/sumRootCount'];
		},
	},
	methods: {
		// == For mutations == (The comment line is the original way to access state when not separating modules, and marked as *origin: )
		// *origin
		// ...mapMutations([
		// 	// this.$store.commit('decrement');
		// 	'decrement',
		// 	// this.$store.commit('increment');
		// 	'increment',
		// 	'reset',
		// ]),
		...mapMutations({
			decrement: 'counter/decrement',
			increment: 'counter/increment',
			reset: 'counter/reset',
		}),
		// decrement() {
		// 	this.$store.commit('decrement');
		// },
		// increment() {
		// 	this.$store.commit('increment');
		// },
		multiIncrement() {
			// *origin: this.$store.commit('multiIncrement', this.multiIncrementNum);
			this.$store.commit('counter/multiIncrement', this.multiIncrementNum);
		},
		// Commit with payload
		decrementNum() {
			// *origin: this.$store.commit('decrementNum', {amount: 3});
			this.$store.commit('counter/decrementNum', {amount: 3});
		},
		// Object-Styled commit
		incrementNum() {
			// this.$store.commit({type: 'incrementNum', amount: 3});
			this.$store.commit({type: 'counter/incrementNum', amount: 3});
		},
		// == For actions == (The comment line is the original way to access state when not separating modules, and marked as *origin: )
		// *origin:
		// ...mapActions([
		// 	'actionIncrement',
		// 	'actionShortIncrement',
		// ]),
		...mapActions('counter', [
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
			// *origin: this.$store.dispatch('asyncIncrement');
			this.$store.dispatch('counter/asyncIncrement');
		},
		// Dispatch with payload
		asyncDecrementNum() {
			// *origin: this.$store.dispatch('asyncDecrementNum', {amount: 3});
			this.$store.dispatch('counter/asyncDecrementNum', {amount: 3});
		},
		// Object-Styled dispatch
		asyncIncrementNum() {
			// *origin: this.$store.dispatch({type: 'asyncIncrementNum', amount: 3});
			this.$store.dispatch({type: 'counter/asyncIncrementNum', amount: 3});
		},
		promiseIncrement() {
			// *origin: this.$store.dispatch('promiseIncrement').then((res => { this.msgFromPromise = res; }));
			this.$store.dispatch('counter/promiseIncrement').then((res => { this.msgFromPromise = res; }));
		},
		actionB() {
			// *origin: this.$store.dispatch('actionB');
			this.$store.dispatch('counter/actionB');
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
