# Vuex 學習筆記

![vuex-mutation](images/vuex-mutation.png)



### state

single source of truth

same rules as the `data`

### getters

If more than one component needs to make use of this (function), we have to either duplicate the function, or extract it into a shared helper and import it in multiple places - both are less than ideal.

Like computed properties, a getter's result is cached based on its dependencies, and will only re-evaluate when some of its dependencies have changed.

- Getters will receive the state as their 1st argument

- Getters will also receive other getters as the 2nd argument

  ```javascript
  getters: {
    // ...
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  }
  ```

  

- Method-Styled Access

```javascript
getters: {
  // ...
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
```

```javascript
store.getters.getTodoById(2)
```





### mutations

change state

similar to events

- Commit with Payload

  ```javascript
  // ...
  mutations: {
    increment (state, payload) {
      state.count += payload.amount
    }
  }
  ```

  ```javascript
  store.commit('increment', {
    amount: 10
  })
  ```

- Mutations Follow Vue's Reactivity Rules
- Mutations Must Be Synchronous => If want to use asynchronous operations, use Actions



### actions

similar to mutations, the difference being that:

a. Instead of mutating the state, actions commit mutations.

b. Actions can contain arbitrary asynchronous operations.

>Action handlers receive a context object which exposes the same set of methods/properties on the store instance, so you can call `context.commit` to commit a mutation, or access the state and getters via `context.state` and `context.getters`. 





- Actions are triggered with the `store.dispatch` method:

  ```javascript
  store.dispatch('increment')
  ```

- Perform **asynchronous** operations inside an action

  ```javascript
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
  ```

  

  