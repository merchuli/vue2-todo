# Vue 學習筆記

>背景：使用 Angular 一年半以上，以此為基礎記錄轉 Vue 遇到的困惑點

## Overview

1. 定義

   - 常用 Syntax

   - Options & Data

2. Vuex

3. 特性

   - Reactivity



## 定義

### 常用 Syntax

`[key]` -> `:key`  (v-bind:key)

`(click)` -> `@click`  (v-on:click)



### Options & Data

#### props

父層傳下來的變數

> 一開始誤會是在此處定義這個 component 的變數

> 待確認之 Angualr 在區辨父元素傳進的 attribute 時好像沒有這麼友善，突然想到好像也有可以識別的



##### data

該 component 的變數

Must be plain (含有零個或多個的 key / value )

不建議觀察擁有狀態行為的對象

```javascript
// 官網範例 (direct instance creation)
var data = { a: 1 }

var vm = new Vue({
  data: data
})

// 專案用法
data() {
  return {
    listIndex: 1,
    list: [ ],
  };
},
```

​    

#### methods

該 component 的 method



#### computed







//////// Draft Draft Draft Draft Draft Draft

///////

Components 

使用 new Vue 的方式

```javascript
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```



另一個方式

```javascript
// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})


// 
Vue.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```

**Data Must Be a Function**

Instead, **a component’s `data` option must be a function**, so that each instance can maintain an independent copy of the returned data object:

If Vue didn’t have this rule, clicking on one button would affect the data of *all other instances*







//////

Event Modifier







////

Computed Properties and Watchers

#### Computed Setter

```javascript
// when you run vm.fullName = 'John Doe', the setter will be invoked and vm.firstName and vm.lastName will be updated accordingly.
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```



#### watchers

用來監聽 data 即時變化

This is most useful when you want to perform asynchronous or expensive operations in response to changing data.

```javascript

```



#### mixins

Mixins are a flexible way to distribute reusable functionalities for Vue components. A mixin object can contain any component options. When a component uses a mixin, all options in the mixin will be “mixed” into the component’s own options.





#### lifecycle hooks

