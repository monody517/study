# 《JS对象分类》
## new运算符
* 自动创建空对象
* 自动为空对象关联原型，原型地址指定为X.prototype
* 自动将空对象指定为this关键字运行构造函数
* 自动return this
## 构造函数X
* X本身负责给对象本身添加属性
* X.prototype负责保存所有对象的共有属性
## 代码规范
* 所有构造函数首字母大写，所有构造函数创建的对象首字母小写
* new后面的函数一般是名词，其他一律用动词
## 类的分类
### 数组对象
`let arr = new Array(1,2,3)`
### 函数对象
## 三个问题
### window是谁构造的
Window
### window.Object是谁构造的
window.Function
### window.Function是谁构造的
window.Function