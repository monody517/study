# 《JS对象》
无序的数据集合，键值对的集合
## 写法
`let obj = {'name':'Frank','age':18}`

`let obj = new Object({'name':'Frank'})`
## 属性名
### 细节
* 键名是字符串，不是标识符，字符串中可以包含任意字符
* 引号可以省略，但省略后只能写标识符
* **就算省略了引号，键名也还是字符串**
### 变量做属性名
```JavaScript
let p1 = 'xxx';
let obj = {
    [p1]: 'frank';//xxx='frank'
}
```
## 隐藏属性
* JS的每一个对象都有一个隐藏属性
* 隐藏属性存储着原型的**地址**
* `let obj = {}; obj.toString()`
## 增删改查对象属性
### 删
`delect obj.xxx`或`delect obj['xxx']`,注意区分属性值为undefined和不含属性名
#### 细节
* 不含属性名 `'xxx' in obj === false`
* 含属性名，但值为false `'xxx' in obj && obj.xxx === undefined`
* 注意`obj.xxx === undefined`不能判断xxx为obj的属性
### 读
* 读属性名`Object.keys(obj)`
* 读属性值`Object.values(obj)`
* 读自身属性`Object.entries(obj)`
* 读自身+共有属性`console.dir(obj)`
* 判断一个属性在自身是否存在(不包括原型)`'name' in obj`
* 判断一个属性是自身有还是共有`obj.hasOwnPropetry(属性名)`
* 查看属性：
  * 中括号语法：`obj['key']`(优先使用这个，可以搞明白属性名是一个字符串)
  * 点语法：`obj.key`
  * 小坑：`obj[key]`变量key的值一般不为'key'
  * `obj.name!=obj[name]`
### 写
批量赋值`Object.assign(obj,{age:18,gender:'man'})`
#### 修改原型上的属性
首先无法通过自身修改或增加共有属性，如果一定要修改，不推荐使用__proto__直接修改，推荐使用`Object.create`

