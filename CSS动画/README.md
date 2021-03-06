# 《CSS动画》
## 两种方式
1. 用JS给元素添加left
2. 使用transform

其中transform的性能比left方式要好，因为他不会导致元素重绘
## 浏览器渲染原理
### 浏览器渲染过程
1. 根据HTML构建HTML树（DOM）
2. 根据CSS构建CSS树（CSSOM）
3. 将两棵树合并变为渲染树（Render Tree）
4. Layout布局（文档流，盒模型，计算大小和位置）
5. Paint绘制（将文字颜色，阴影等画出来）
6. Compose合成（根据层叠关系展示画面）
### 如何更新样式
一般使用JS更新样式，比如给div添加一个类。这些更新样式的方法有三种不同的渲染方式
* JS/CSS>样式>布局>绘制>合成

div.remove()触发当前元素消失，其他元素relayout
* JS/CSS>样式>绘制>合成

改变背景颜色
* JS/CSS>样式>合成

改变transform
### 性能优化
* JS优化：使用requestAnimationFrame代替setTimeout或setInterval
* CSS优化：使用will-change或translate
## transform
### 四个常用功能
* 位移translate

translate(-50%,-50%可以做绝对定位的居中)，主要看MDN文档
* 缩放scale
* 旋转rotate
* 倾斜skew

## transition
### 作用
补充关键帧
### 语法
transition:属性名 时长 过渡方式 延迟
eg:transition:left 200ms linear
### 注意
并不是所有属性都可以过渡
display:none=>block没法过渡，一般使用visibility

## animation
### 步骤
* 声明关键帧 @keyframes 动画名{关键帧}
* 添加动画 animation:时长 过渡方式 延迟 次数 方向 填充模式 是否暂停 