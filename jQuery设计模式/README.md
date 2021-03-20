# 《jQuery设计模式》

* jQuery 如何获取元素

将一个选择表达式，放进构造函数jQuery()（简写为$），然后得到被选中的元素。
选择器可以是CSS选择器
```javascript
$(document) //选择整个文档对象

$('#myId') //选择ID为myId的网页元素

$('div.myClass') // 选择class为myClass的div元素

$('input[name=first]') // 选择name属性等于first的input元素
```
也可以是jQuery特有的表达式：
```javascript
$('a:first') //选择网页中第一个a元素

$('tr:odd') //选择表格的奇数行

$('#myForm :input') // 选择表单中的input元素

$('div:visible') //选择可见的div元素

$('div:gt(2)') // 选择所有的div元素，除了前三个

$('div:animated') // 选择当前处于动画状态的div元素
```
* jQuery的链式操作是怎样的

使用jQuery选中网页元素以后，可以对它进行一系列操作，并且所有操作可以连接在一起，以链条的形式写出来，这样的原理在于每一步的jQuery操作，返回的都是一个jQuery对象，所以不同操作可以连在一起。
```javascript
$('div').find('h3').eq(2).html('Hello');
```
也就是
```javascript
$('div')
        .find('h3')
        .eq(2)
        .html('Hello');
```
* jQuery 如何创建元素

把新元素直接传入jQuery的构造函数：
```javascript
$('<p>Hello</p>');

$('<li class="new">new list item</li>');
```
同时可以复制元素使用.clone()。

删除元素使用.remove()和.detach()。两者的区别在于，前者不保留被删除元素的事件，后者保留，有利于重新插入文档时使用。

清空元素内容（但是不删除该元素）使用.empty()
* jQuery 如何移动元素

操作元素在网页中的位置移动有两组方法。一组方法是直接移动该元素，另一组方法是移动其他元素，使得目标元素达到我们想要的位置。

第一种方法是使用.insertAfter()，把div元素移动p元素后面，并返回div元素：
```javascript
$('div').insertAfter($('p'));
```
第二种方法是使用.after()，把p元素加到div元素前面，并返回p元素：
```javascript
$('p').after($('div'));
```
* jQuery 如何修改元素的属性

操作网页元素，最常见的需求是取得它们的值，或者对它们进行赋值。
```javascript
.html() 取出或设置html内容

.text() 取出或设置text内容

.attr() 取出或设置某个属性的值

.width() 取出或设置某个元素的宽度

.height() 取出或设置某个元素的高度

.val() 取出某个表单元素的值
```
* jQuery中的学习点
    * 链式调用
    * 一个函数通过传入参数个数不同进行不同的操作

