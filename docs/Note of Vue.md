# Vue 學習筆記

>背景：使用 Angular 一年半以上，以此為基礎記錄轉 Vue 遇到的困惑點

## Overview

1. Guide

   - Template Syntax
   - Computed Properties and Watchers
2. API
   - Options & Data
3. 注意事項

4. 特性
   - Reactivity



## Guide

### Templae Syntax

＊此處僅列出與 Angular 使用方式較為不同之處，`<Anuglar 用法>` -> `<Vue 用法>`

`[key]` -> `:key`  (v-bind:key)

`(click)` -> `@click`  (v-on:click)



## API

### Options & Data (data / props / propsData? / computed / methods / watch)

#### data

- 該 component 的變數

- Must be plain (含有零個或多個的 key / value )

- 不建議**觀察**擁有狀態行為的對象

```javascript
// Method 1: direct `instance creation` (new Vue)
var data = { count: 1 }

var vm = new Vue({
  data: data
})

vm.a // => 1
vm.$data === data // => true

// Method 2-1: Must use function when in Vue.extend()
var Component = Vue.extend({
  data: function () {
    return { count: 1 }
  },
})

// Method 2-2:  Or defining a new component
Vue.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
})
```

>  **Data Must Be a Function**
>
> Instead, **a component’s `data` option must be a function**, so that each instance can maintain an independent copy of the returned data object:
>
> If Vue didn’t have this rule, clicking on one button would affect the data of *all other instances*



#### props

父層傳下來的變數

> 一開始誤會是在此處定義這個 component 的變數

> 待確認之 Angualr 在區辨父元素傳進的 attribute 時好像沒有這麼友善，突然想到好像也有可以識別的



#### methods

該 component 的 method



#### computed











//////// Draft Draft Draft Draft Draft Draft

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



#### watchers [1]

用來監聽 data 即時變化

This is most useful when you want to perform **asynchronous or expensive operations** in response to changing data.

```javascript

```



#### mixins

Mixins are a flexible way to distribute reusable functionalities for Vue components. A mixin object can contain any component options. When a component uses a mixin, all options in the mixin will be “mixed” into the component’s own options.





#### lifecycle hooks





## 注意事項

1. Properties that start with `_` or `$` will **not** be proxied on the Vue instance because they may conflict with Vue’s internal properties and API methods. You will have to access them as `vm.$data._property`.



## Reference

[1] Watchers

https://www.youtube.com/watch?v=OEitxLemE_g

