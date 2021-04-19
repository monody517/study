# Directives-指令
## 声明一个全局指令
```javascript
Vue.directive('x',{
    inserted: function(el){
        el.addEventListener('click',()=>{console.log('x')}) 
    }
})
```
这样一个v-x指令就可以在全局中使用
## 声明一个局部指令
```javascript
new Vue({
    ...,
    directives('x',directiveOptions)
})
```
这样v-x只能用在该组件中
## directiveOptions
五个参数：bind，inserted，update，componentUpdated，unbind。

具体看文档：https://cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0
## 举例
实现一个v-on
```javascript
Vue.directive('v-on2',{
    inserted: function(el,info){
        el.addEventListener(info.arg,info.value)
    }
    unbind: function(el,info){
        el.removeEventListener(info.arg,info.value)
    }

})
```
## 作用
* 主要用于DOM操作
  * vue实例/组件用于数据绑定，事件监听，DOM更新
  * vue指令主要就是原生的DOM操作
* 减少重复
  * 某个DOM操作十分常用，封装为指令
  * 某个DOM操作复杂，封装为指令
#  mixins-混入
## 减少重复
减少data，methods，钩子的重复

举例：https://codesandbox.io/s/kind-rosalind-86iez
# extends-继承
作用和mixins差不多，只是形式不同
# provide和inject-提供和注入
provide提供可供全局使用的属性，inject在组件中注入provide提供的属性。大范围的共享信息。

举例：https://codesandbox.io/s/fragrant-rain-h8lm6?file=/src/main.js

