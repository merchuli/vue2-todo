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

  

Method-Styled Access

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