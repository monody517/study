# 《DOM事件和事件委托》
## 术语
* 从外到内找监听函数，叫事件捕获
* 从内到外找监听函数，叫事件冒泡
* 首先执行事件捕获，然后执行事件冒泡
* 两个过程都会有e对象传给所有的监听函数
* 事件结束后，e对象就不存在了
## addEventListener
`baba.addEventListener('click',fn,bool)`

* 不传或falsy选择冒泡，即当浏览器在冒泡阶段发现baba有fn监听函数，就会调用fn，并提供事件信息；
* true选择捕获，即当浏览器在捕获阶段发现baba有fn监听函数，就会调用fn，并提供事件信息；
## target vs currentTarget
* 区别
    * e.target - 用户操作的元素
    * e.currentTarget - 程序员监听的元素
* 举例
    * div>span{文字},用户点击文字
    * e.target就是span
    * e.currentTarget就是div
* 一个特例
只有一个元素，同时添加了捕获和冒泡，那么谁先监听谁先执行。
## 取消冒泡
`e.stopPropagtion()`所有冒泡皆可取消，默认事件有的可以取消，有的不能
## 禁用滚动
取消特定元素的wheel和touchstart的默认动作
## 自定义事件
* 首先浏览器自带事件，详情见MDN：https://developer.mozilla.org/zh-CN/docs/Web/Events
* 自定义
```javascript
button.addEventListener('click', ()=>{
    const event = new CustomEvent('frank',{
        detail:{name:'frank',age:18},
        bubbles:true/false,
        cancelable:true/false
    })
    button.dispatchEvent(event)
})
button.addEventListener('frank',(e)=>{
    console.log(e.detail)
})
```
## 事件委托
* 场景一
给100个按钮添加点击事件：监听100个按钮的祖先，等冒泡时判断target是不是这100个按钮中的一个
* 场景二
监听目前不存在的元素的点击事件：监听祖先，等点击时判断是不是我想监听的元素
