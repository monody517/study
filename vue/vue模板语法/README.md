# 模板template的三种写法
## vue完整版，写在HTML里
```javascript
<div id="xxx">
    {{n}}
    <button @click="add">+1</button>
</div>

new Vue({
    el:"#xxx",
    data:{  //这里可以改为函数
        n = 0
    }, 
    methods:{
        add(){}
    },
})
```
## vue完整版，写在选项里
```javascript
<div id="xxx">
</div>

new Vue({
    template:`
        <div>
            {{n}}
            <button @click="add">+1</button>
        </div>
    `,
    data:{
        n = 0
    },
    methods:{
        add(){}
    },
}).$mount('#xxx')
```
## Vue非完整版，配合xxx.vue文件
```javascript
<template>
    <div>
        {{n}}
        <button @click="add">+1</button>
    </div>
</template>
<script>
    export default{
        data(){return {n:0}}, //data必须是函数
        methods:{
            add(){}
        },
    }
</script>
//在另一个文件中
import x form "./xxx.vue"
new Vue({
    render: h=>h(x)
}).$mount('#app')
```

# template中的语法
### 表达式
* {{object.n}} 表达式
* {{n+1}} 运算式
* {{f(n)}} 函数
* 如果值为undefined和null就不显示
### html内容
* 假设data的值为`<strong>hi</strong>`
* `<div v-html="x"></div>`,即可显示粗体的hi
### 展示{{n}}
`<div v-pre>{{n}}</div>`不会对模板进行编译
### 绑定属性
`<img v-bind:src="x"/>`简写为=>`<img :src="x"/>`
### 绑定事件
* `<button v-on:click="add">+1</button>`
* `<button v-on:click="xxx(1)">+1</button>`
* `<button v-on:click="n+=1">+1</button>`
* 简写=>``<button @click="add">+1</button>``
### 条件判断
v-if
### 循环
`<li v-for="(u,index) in users" :key="u.id"></li>`
### 隐藏 显示
`<div v-show="n%2===0">n是偶数</div>`
## 修饰符
有些指令支持修饰符，目前需要会的有：
* v-on支持：
  
.stop：阻止事件传播/冒泡
  
.prevent：阻止后执行
* v-bind支持：.sync：
  
一个组件在修改父组件的的值时，要遵循下面三个规定：
  * 组件不能修改props外部数据
  * $emit可以触发事件，并传参
  * $event可以获取$emit的参数
  * 由于这样的场景常见所以创造了sync，它是一个语法糖，如下所示：
    `<div :foo.sync="bar"></div>`会被拓展为`<div :foo="bar" @update:foo="bar=$event"></div>`
* v-model支持：.lazy,.number,.trim