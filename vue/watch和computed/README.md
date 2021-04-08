# computed
看上去是方法，实际上是计算属性，它会根据你所**依赖**的数据动态显示新计算的结果，计算结果会被**缓存**，只有在它依赖的属性值改变之后，下一次获取computed的值时才会重新调用对应的getter来计算
例子：https://codesandbox.io/s/recursing-rgb-61xi8?file=/src/index.html
#  watch
数据监听，当数据改变时执行对应的回调函数。可以设置deep属性来判断在监听对象时是否向内看。设置immediate来判断第一次渲染是否执行。它里面不能使用箭头函数。
例子：https://codesandbox.io/s/festive-fermat-pbb3v?file=/src/index.html
# computed和watch的区别
* computed，计算属性，根据响应式依赖进行缓存。当依赖发生改变时会重新计算。
* watch，侦听器，用于侦听数据，当数据发生变化时，执行异步或开销较大的操作。