# vue对data做了什么？
`vm = new Vue({data: myData})`

## 首先，会马上对myData的所有属性进行监控,也就是对myData进行改造
* 目的是防止myData的属性变化了，vue还不知道
* 做法：
    * 先创建一个value将data中的属性复制过来，再将data的原数据删除
    * 再在data中补偿一个和原数据一样，只是添加了get(value)和set(value)的数据
    * 这样客户对data中的修改，其实是对已经改造的数据的修改，vue可以对修改监控
    * 用到的语法是`Object.defineProperty`
* Object.defineProperty
    * 可以给对象添加属性value
    * 可以给对象添加getter / setter
    * getter / setter用于对属性的读写进行监控

`Object.defineProperty(obj, prop, descriptor)`

obj 要在其上定义属性的对象。

prop 要定义或修改的虚拟属性的名称。

descriptor 将被定义或修改的属性描述符。

## 其次，会让vm成为改造后的myData的代理(proxy)
* 目的就是客户不可以随意的写属性，可以对客户写的属性做出操作，还有我们可以直接通过实例来修改数据，把真实数据上的属性移到实例上面
* 做法：vm=函数调用，函数接受实际数据对象，创建一个空对象，在空对象创建虚拟属性，虚拟属性与实际数据挂钩，函数调用返回这个对象，vm就代理了data上的属性
# Vue的data的局限性
如果数据中有新增加的内容，那该怎么去监听？

监听数据的话，用`Object.defineProperty(obj, 'n' ,.})`的话，数据中必须要有真的n
```javascript
new vue({
   template:`{{n}}`   
   data:{}
})
```
## 解决
### 方法一
数据中每个key一次性都声明好，也就全部监听好了
```javascript
obj{
    a:0,
    b:undefined
}
```
### 方法二
使用`Vue.set`或者`this. $set`
```javascript
methods: {
    setB(){
    Vue.set(this.obj,'b',1)

    //或者,多了个$是为了防止和data中万一有个set咋办 ，$是实例方法
    this.$set(this.obj,'b',1)
}
}
```
作用:

* 新增key
* 自动创建代理和监听(如果没有创建过)
* 触发UI更新(但并不会立刻更新)
## data中存在数组
如果data中存在数组，那就没有办法提前声明了，因为不知道数组的长度，只能使用使用`Vue.set`或者`this. $set`，但是如果要加的数量很多，难道每次改数组都要用`Vue.set`或者`this. $set`。
vue给出了解决方法，vue修改了数组的7个API，这7个新API会调用数组原来的API并且自动增加监听和代理，并更新UI
