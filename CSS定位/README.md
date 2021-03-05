# 《CSS定位》
## div的分层
内敛子元素>浮动元素>块级子元素>border>background

哪个文字出现在后面哪个文字的优先级高
## position
### 五个取值
* static：默认情况
* relative：不会脱离文档流，一般用做absolute的父元素，同时配合z-index使用
* absolute：脱离原先的位置，相对于离他最近的一个position不是static的祖先元素进行定位。
* fixed：相对于视口进行定位。
* sticky：粘滞定位
### 经验
* 一般写absolute一定会在前面加一个relative
* 使用absolute时不加top和right在某些浏览器上会出错
* 不要使用z-index=9999
* 手机上不使用fixed
## 层叠上下文
## 比喻
每一个层叠上下文就是一个新的作用域，z-index只有在同一个作用域中才能进行比较
### 哪些动作会创建层叠上下文
* position值为relative/absolute时，z-index有值
* position值为fixed/或 sticky
* opacity 属性值小于 1 的元素
* transform属性值不为 none 的元素：
