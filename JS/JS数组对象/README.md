# 《JS数组对象》
## JS的数组不是典型的数组
* 元素的数据类型可以不同
* 内存不一定是连续的
* 通过字符串下标，这意味着数组可以有任何key
## 创建一个数组
### 创建
`let arr = [1,2,3]`或`let arr= new Array(1,2,3)`
### 转化
`let arr = '1,2,3'.split(',')`或`let arr = '123'.split('')`或`Array.from('123')`
### 合并
`arr1.concat(arr2)`返回一个新的arr1和arr2合并的数组
### 截取
`arr.slice(1)`从第二个元素开始

`arr.slice(0)`复制一个数组
### 伪数组
`let divList = document.querySelectorAll('div')`
伪数组的原型直接指向Object的原型，而没有指向Array的原型，因此没有数组的常用方法
## 数组的增删改查
### 删数组
#### 不推荐的方法
```JavaScript
let arr = ['a','b','c']
delete arr['0']
arr //[empty,'b','c']
```
注意数组的长度没有变化
```JavaScript
let arr = ['a','b','c']
arr.length = 1
arr //['a']
```
不要随便改length，会改变数组的元素
#### 推荐的方法
* 删除头部的元素 `arr.shift()`
* 删除尾部的元素 `arr.pop()`
* 删除中间的元素 `arr.splice(index,1)`
```JavaScript
let arr = [1，2，3，4，5，6，7]
arr.splice(2,1) //[1,2,4,5,6,7]
arr.splice(3,1,666) //[1,2,4,666,6,7]
```
### 查数组
Object的查方法
#### 查看数字属性名和值
 ```JavaScript
for(let i = 0,;i<arr.length;i++){
    console.log(`${i} : ${arr[i]}`)
}
arr.forEach(function(item,index){
    console.log(`${index} : ${item}`)
})
```
两种方式基本没有区别，但是for可以进行break和continue，同时for是块级作用域，forEach是函数作用域
#### 查看单个属性
和对象查看方式一样，但要注意索引越界问题(注意判断条件不要<=arr.length)
* 查看某个元素是否在数组中`arr.indexOf(item)`不存在返回-1
* 使用条件查找元素`arr.find(item => item%2 ===0)`找到**第一个**偶数
* 使用条件查找元素的索引`arr.findIndex(item =>item%2 ===0)`
### 加数组
* 尾部添加元素`arr.push(item)`修改arr，返回新长度
* 头部添加元素`arr.unshift()`修改arr，返回新长度
* 中间添加元素`arr.splice(index,0,'x')`在x处插入'x' 
#### 修改数组
* 反转`arr.reverse()`修改原数组
* 排序`arr.sort(function(a,b){})`
### 数组变换(不改变原数组)
* `map(arr,function(){})`n变n，arr里的item依次执行function
* `filter(arr,function(){})`n变少，arr里的item依次由function进行判断，输出符合条件的元素组成的新数组
* `reduce(arr,function(){})`n变1，由初始值加arr的item[1]并依次加到item[length-1]，返回结果



