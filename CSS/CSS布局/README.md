# 《float布局》
## 步骤
1. 子元素上加float:left和width
2. 父元素上加clearfix(使父元素重新包裹子元素)
```CSS
.clearfix:after{
    content:'';
    display:block;
    clear:both;
}
```
## 经验
1. 一般最后一个子元素不设置width
2. 不需要做响应式
# 《flex布局》
## 父元素
添加display:flex，可选属性有：
* flex-direction：row，column，row-reverse，column-reverse（排列方向，主轴的方向）
* flex-wrap:wrap（是否折行，默认不折行）
* justify-content:flex-start，flex-end，center，space-between，space-around，space-evenly（主轴的排列方式）
* align-items:flex-start，flex-end，center，stretch（次轴的排列方式）
## 子元素（可选）
可选属性有：
* order：（给子元素添加数字并按照从小到大排列）
* flex-grow：（分配多余的空间给子元素的比例）
* flex-shrink：（当空间不足时子元素缩小的比例） 


