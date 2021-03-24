# 《异步与Promise》
## 同步与异步
* 能直接拿到结果就是同步
* 不能直接拿到结果就是异步
### 异步举例
以AJAX为例，request.send()之后，不能直接得到response，必须等到readyState变为4之后，浏览器回头调用request.onreadystatechange函数，这就是回调函数。
### 异步与回调的关系
异步任务完成时需要用到回调函数来通知JS任务执行的结果。但是两者不是唯一的关系，即异步任务不一定要用到回调，回调函数不一定用在异步任务中
### 怎样判断异步函数
如果一个函数的返回值处于以下3种情况，就可以认为这个函数是异步的：
* setTimeout
* AJAX
* AddEventListener
### 总结
* 异步任务不能拿到结果
* 于是我们传一个回调函数给异步任务
* 异步任务完成时调用回调
* 调用的时候把结果作为参数
## Promise
异步任务有时会返回成功或返回失败，这时怎么办？
### 两种方法
* 两个参数
```javascript
fs.readFile('./1.txt',(error,data)=>{
    if(error){console.log('失败'),return}else{
        console.log(data.toString())
    }
})
```
* 两个回调
```javascript
ajax('get','./1.json',data=>{},error=>{})
```
### 上面方法的问题
* 不规范，名称五花八门
* 容易出现回调地狱问题
* 很难进行错误处理
### 解决方法-Promise
* return new Promise((resolve,reject)=> {})
* 任务成功则调用resolve(result)
* 任务失败则调用reject(error)
* 由resolve和reject再分别调用成功和失败的回调函数
* 使用.then(success,fail)传入成功和失败的回调函数

