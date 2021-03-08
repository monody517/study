# 《请求和响应server.js》
## 代码逻辑
* 每次收到请求会把中间的代码执行一遍
* 用if...else判断路径并返回响应
* 如果是已知路径，一律返回200
* 如果是未知路径，一律返回404
* Content-Type表示内容的{类型/语法}(这里规定的类型才是真正的文件类型，而不是使用后缀)
* response.write()可以填写返回的内容
* response.end()表示响应可以发给用户了
## HTTP基础概念
### 请求
* 请求动词 路径加查询参数 协议名/版本
* Host: 域名或IP
* Accept: text/html
* Content-Type: 请求体的格式
* 回车
* 请求体（上传内容）
#### 细节
* 三部分：请求行 请求头 请求体
* 请求动词有：POST/GET/PUT/PATCH/DELETE等
* 请求体在GET请求中一般为空
* HTTP对大小写不敏感，但JS中需要区分大小写
### 响应
* 协议名/版本 状态码 状态字符串
* Content-Type: 响应体的格式
* 回车
* 响应体（下载的内容）
#### 细节
* 三部分：响应行 响应头 响应体
* 状态码是经常考的
## crul构造请求
crul -v http://127.0.0.1:8888
### 设置请求动词
-X POST(注意大小写)
### 设置路径和查询参数
直接在url后面加
### 设置请求头
-H 'Name:value'或者--header 'Name:header'
### 设置请求体
-d '内容'或者--data '内容'
### 举例
crul -v -X POST -H 'Content-Type: text/plain;charset=utf-8' -d '请求体内容' http://loaclhost:8888/xxxx?wd=hi#nihao
## Node.js读取请求
### 读取请求动词
request.method
### 读取路径
* request.url 路径，带查询参数
* path 纯路径 ，不带查询参数
* query 只有查询参数
### 读取请求头
request.headers['Accept']
## Node.js设置响应
### 设置响应状态码
response.statusCode = 200
### 设置响应头
response.setHeader('Content-Type','text/html')
### 设置响应体
response.write('内容')


