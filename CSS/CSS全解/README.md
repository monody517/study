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

