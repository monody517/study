import Demo from './Demo.vue'

let Vue = window.Vue

Vue.config.productionTip = false

const vm = new Vue({
  components:{
    Demo
  },
  data:{
    n:0,
    array:[1,2,3,4,5,6,7,8]
  },
  created(){
    console.log("出现在内存中，没有出现在页面中")
  },
  mounted(){
    console.log("已出现在页面中")
  },
  updated(){
    console.log("更新了")
    console.log(this.n)
  },
  template:`
    <div>
      {{n}}
      <Demo :message="n" :fn="add"/>
    </div>
  `,
  methods:{
    add(){
      this.n+=1
    },
    filter(){
     return this.array.filter(i => i%2 === 0)
    },

  }
})
vm.$mount('#frank')