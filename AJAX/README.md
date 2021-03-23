# 《AJAX》
## AJAX原理
### 使用AJAX请求一个文件的步骤
* 创建HTTPRequest对象
* 调用对象的open方法
* 监听对象的onload和onerror事件
* 调用对象的send方法
### 一个请求的一生
```javascript
request.onreadystatechange= () => {
    if(request.readyState === 0){
        // 代理被创建，但尚未调用 open() 方法。
    }else if(request.readyState === 1){
        // 	open() 方法已经被调用。
    }
    else if(request.readyState === 2){
        // 	send() 方法已经被调用，并且头部和状态已经可获得。
    }
    else if(request.readyState === 3){
        // 	下载了第一个数据
    }
    else if(request.readyState === 4){
        // 	下载操作已完成。可以对数据进行操作
        if(request.status >= 200 && request.status < 300){
            // 判断下载是否成功
        }
    }
}
```
### 总结
#### HTML是个框，什么都能装进去
* 可以装CSS,JS,HTML,XML...
* 记得设置Content-Type，
* 只要会解析各种文件的内容，就可以使用这些内容
#### 解析方法
* CSS生成style标签
* JS生成script标签
* HTML使用innerHTML和DOMAPI
* XML使用requestXML和DOMAPI
#### JSON的两个方法
* `JSON.parse()`将符合JSON语法的字符串转化为JS数据类型
* `JSON.stringify()`将JS数据类型转化为符合JSON语法的字符串