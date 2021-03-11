# 《JS数据类型》
## 数字和字符串
都是一，1和'1'有什么不同呢？
### 功能不同
* 数字是数字，字符串是字符串，要严谨
* 数字可以+-*/，字符串不能
* 字符串可以储存电话号码，数字不能
### 存储形式不同
* 在JS中，数字使用64位浮点数储存，将十进制转化为二进制
* 在JS中，字符串使用类似UTF8的格式储存，将键盘上的所有键编号，48代表0， 65代表A，97代表a，这样就将字符进行了编码后存储。
## 基本数据类型
四基两空一对象：
### number,
* +0，-0都是0
* NaN表示不是一个数字，但他本身是一个数字
* Infinity，+Infinity，-Infinity表示无穷
### bool,
五个falsy值(表示false，但本身不是false)：
undefined,null,'',0,NaN
### string,
* 引号不包含在字符串中
* 如果想在''中在写'，就需要用到转义`'it\'s yours'`

还有其他转义如：
* \'表示'
* \"表示"
* \n表示换行
* \r表示回车
* \t表示tab制表符
* \\表示\
* \uFFFF表示对应的Unicode字符
* \xFF表示前256个Unicode字符
### symbol,

### undefined,

### null,

### object

## 变量声明
### let声明
* 作用与块级作用域
* 不能重复声明
* 可以赋值，也可以不赋值
* 必须先声明再使用
* 全局声明的let变量，不会成为window的属性
* for循环配合let有奇效
### const声明
* 只读变量，声明时必须赋值，而且不能再改变
* 其他和let一样 
## 类型转换
### number=>string
* String(number)
* number + ''
### string=>number
* Number(string)
* string - 0
* +string
### x=>bool
* Boolean(x)
* !!x 