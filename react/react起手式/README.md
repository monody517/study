## 引入React
* 从CDN引入React
  	引入React：http://.../react.x.min.js
  	引入React DOM：http://.../react-dom.x.min.js
cjs和umd的区别
cjs全程CommonJS,是Node.js支持的模块规范
umd是统一的模块定义，兼容各种模块规范(含浏览器)
优先使用umd，最新的模块规范使用import和export关键字。
* 通过webpack引入React
  	yarn add react react-dom
  	import React from 'react
  	import ReactDOM from 'react-dom'
* create-react-app
安装 yarn global add create-react-app
yarn start
## 关于6个6的问题
```javascript
let i
for(i=0;i<6;i++){
    setTimeout(()=>console.log(i),100)
}
// 6*6
for(var i=0;i<6;i++){
   !function(j){
    setTimeout(()=>console.log(j),100) //j是i传给的值
   }(i)
 }
 //1 2 3 4 5 6
 ```
函数的本质——延迟
普通代码立即求值，读取a的当前值
函数等调用的时再求值，即延迟求值。且求值时才会读取最新值。
App1 = React.createElement('div',null,n)---App1是一个React元素
App2 = ()=>React.createElement('div',null,n)---App2是一个React函数组件
函数App2是延迟执行的代码，调用的时候在执行。
同步和异步是得到结果的时机
## React元素
createElement的返回值element可以代表一个div但element不是真正的div(DOM对象)，element为虚拟DOM对象
()=>React元素
返回一个element的函数，也可以代表一个div，可执行多次，得到新的虚拟div，React会根据DOM diff算法对比两个虚拟div。
## JSX
.vue文件里写`<template><script><style>`,通过vue-loader变成一个构造选项。
React里有JSX，然而JSX-loader被babel-loader取代了，babel-loader集成了jsx，webpack也内置了babel-loader
* 方法一：CDN
引入babel.min.js
把`<script>`改成`<script type="text/babel">`
babel会自动进行转义，不支持src
不建议使用，效率低，需要引入babel.js
示例
具体流程：先下载babel.js，babel.js将script的jsx内容转换为js然后在替换原先script里的内容。
* 方法二：webpack+babel-loader
* 方法三：使用create-react-app
## 注意事项
* 注意className
`<div className="red">n</div>`转译为`React.createElement('div',{className:'red'},'n')`
* 插入变量
标签内的所有JS要用{}包起来
* return ()