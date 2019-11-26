# Vue 學習筆記

>背景：使用 Angular 一年多以上，以此為基礎記錄轉 Vue 遇到的困惑點

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


