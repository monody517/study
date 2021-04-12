# 表单与v-model
文档链接：https://cn.vuejs.org/v2/guide/forms.html
* input 事件，键盘，鼠标，任何输入设备的输入
* change 事件，只在input失去焦点时触发
修饰符
* .lazy 副文本编辑器使用。添加 lazy 修饰符，从而转为在 change 事件_之后_进行同步
```javascript
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg">
```
* .number 如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符
`<input v-model.number="age" type="number">`
*•* .trim 要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：
`<input v-model.trim="msg">  `
v-model双向绑定
* v-model本质上是一个语法糖。
* 如下代码`<input v-model="test">`本质上是`<input :value="test" @input="test = $event.target.value">`，其中@input是对input输入事件的一个监听，:value="test"是将监听事件中的数据放入到input，v-model不仅可以给input赋值还可以获取input中的数据，而且数据的获取是实时的，因为语法糖中是用@input对输入框进行监听的。
```javascript
<div id="app">
  <input v-model="test">
  <!-- <input :value="test" @input="test= $event.target.value"> --><!--语法糖-->
</div>
<script src="/resources/js/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      test: '这是一个测试'
    }
  });
</script>
<template>
  <div>
    <Switch v-model:value ="y"/>
    <!-- :value="y" @update:value="y = $event" -->
  </div>
</template>
```
参考链接：https://www.cnblogs.com/mark5/p/11603428.html
登录框：
