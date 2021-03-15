# 《JS函数对象》
## 定义一个函数
### 具名函数
function 函数名(形参1,形参2){
    语句
    return 返回值
}
### 匿名函数
具名函数去掉函数名就是匿名函数。也叫函数表达式

`let a = function(x,y){return x+y}`

也可以具名函数和匿名函数结合`let a = function fn(x,y){x+y}`注意该fn只在等号右边的作用域有意义，其他地方都为undefined
### 箭头函数
```javascript
let f1 = x => x*x
let f2 = (x,y) => x*y //括号不能省
let f3 = (x,y) => {return x*y} //花括号不能省
let f4 = (x,y) => ({name:x,age:y}) //返回对象加括号
```
## 函数的要素
* 调用时机
* 作用域

如果多个作用域含有同名的变量，那么查找该变量声明时，就向上取最近的作用域，这就是就近原则。查找变量的过程与函数执行无关，但变量的值与函数执行有关。
* 形式参数
* 调用栈

JS引擎在调用一个函数前，需要把函数所在环境push到一个数组里，这个数组叫调用栈。函数执行完成后，就会把环境pop出来，然后return到之前的环境，继续执行后面得代码。
* 函数提升
`function fn(){}`不管你将fn声明在哪里，都会跑到第一行
`let fn = function(){}`这是赋值，不会进行变量提升
* **arguments和this**
每个函数都有，除了箭头函数(里面的this=外面的this)。

arguments是包含所有元素的伪数组

this在默认情况下指向window。使用`fn.call(this)`可以给fn指定一个this，当传入的不是一个对象时，call会自动将其封装为对象

我们想让函数获取对象的引用，但是不想通过变量名的方式做到，Python通过额外的self参数做到，JS通过额外的this做到：person.sayHi()会把person自动传给sayHi，sayHi通过this引用person

this有两种使用方法：
* 隐式传递:`fn(1,2)`等价于`fn.call(undefined,1,2)`；`obj.fn(1,2)`等价于`fn.call(obj,1,2)`
* 显示传递:`fn.call(undefined,1,2)`或`fn.apply(undefined,[1,2])`
同时可以进行this绑定：`let f2 = f1.bind({name:'frank'},hi)`等价于`f1.call({name:'frank'},hi)`