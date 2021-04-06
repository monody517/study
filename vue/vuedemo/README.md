# 《vue构造选项》
## 学什么？
`const vm = new Vue(options)`
* Vue 实例名是vm
* vm 对象封装了对视图的所有操作，包括数据读写、事件绑定、DOM更新。
* vm 的构造函数是Vue，按照ES6的说法，vm所属的类是Vue。
* options 是 new Vue() 的参数，一般称之为选项或构造选项。
## options里面有什么？
* 数据：data、props、propsData、conputed、methods、watch
* DOM：el、template、render、renderError
* 生命周期钩子：beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、activated、deactivated、beforeDestroy、destroyed、errorCaptured
* 资源：directives、filters、components
* 组合：parent、mixins、extends、provide、inject
* 其他：先不看。
## 入门属性
* el-挂载点

与$mount存在替换关系
* data-内部数据

支持对象和函数，优先使用函数

* methods-方法

事件处理函数或普通函数
* components-组件

使用Vue组件，注意大小写


