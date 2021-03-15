# 《JS函数执行时机》
**JS函数的调用时机不同，得到的结果不同。**

1. 解释为什么如下代码会打印 6 个 6
```javascript
let i = 0
for(i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}
```
代码中的setTimeout()方法用于在指定的毫秒数后调用函数或计算表达式；其意思就是尽快，而不是马上。所谓尽快，就是指暂时跳过setTimeout()内的代码，当其他所有代码执行完毕再返回执行。这就是JS的执行机制，遇到异步操作任务会先将异步任务存到任务队列中，等同步任务执行完了，再开始任务队列中的任务。

对于本题来说，一共有6个`console.log(i)`的任务加入到任务队列中，等到任务队列执行时，i已经由for循环变为了6，因此输出6个6。

2. 写出让上面代码打印 0、1、2、3、4、5 的方法
```javascript
for(let i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}
```
 因为let变量的作用域只能在当前函数中，所以每次for循环生成的都是一个新的i， setTimeout里输出的i就是这个新的i，这个i是不会变化的，所以输出的就是正常的。
3. 除了使用 for let 配合，还有什么其他方法可以打印出 0、1、2、3、4、5，
* 使用const关键字
```javascript
let i
for(i = 0; i<6; i++){
    const x = i
    setTimeout(()=>{
      console.log(x)
    })
}
```
* 使用setTimeout的第三个参数
```javascript
for(var i=0;i<6;i++){
    setTimeout(function(j){
        console.log(j);
    },0,i);
}
```
