<template>
<div id="page10">
  <a-card title="借助animate.css动画   切换动画">
    <p>库地址 https://animate.style/</p>
    <transition :duration="500" enter-active-class="animate__animated animate__wobble" leave-active-class="animate__animated animate__backOutDown">
      <div v-show="toggle" class="a1">HELLO MY SUN</div>
    </transition>
    <a-button @click="toggle=!toggle">toggle!</a-button>
    <a-button @click="toggleM">toggle by method!</a-button>
  </a-card>
  <a-card title="借助animate.css动画   初始动画">
    <p>appear类属性</p>
    <transition :duration="500" appear  appear-to-class="animate__animated animate__wobble">
      <div v-show="toggle" class="a1">HELLO MY SUN</div>
    </transition>

  </a-card>

  <a-card title="transition-group">
    <p>列表过度动画</p>
    <transition-group leave-active-class="animate__animated animate__hinge">
      <p :key="item" v-for="item in arr">{{item}}</p>
    </transition-group>
    <a-button @click="add">add</a-button>
    <a-button @click="del">del</a-button>
  </a-card>

  <a-card title="调用全局自定义组件">

    <a-button @click="showLoading">show loading!!</a-button>
    <sun-button @handleClick="$loading.show()"/>
  </a-card>


</div>
</template>

<script>
import 'animate.css'
export default {
  name: "index"
}
</script>
<script setup>
import {reactive, ref,onMounted,getCurrentInstance} from 'vue'
import {useRoute} from 'vue-router'
const {proxy} =getCurrentInstance()
const route=useRoute()
const toggle=ref(true)
const arr=reactive([1,2,3,4])
const toggleM=()=>{
  toggle.value=!toggle.value
}
const add=()=>{
  arr.push(5)
}
const del=()=>{
  arr.splice(0,1)
}

const showLoading=()=>{
  proxy.$loading.show();
  setTimeout(()=>{
    proxy.$loading.hide();
  },3000)
}

onMounted(()=>{
  const {tag} =route.query;
  console.log('这是通过route.query解构出的参数:',tag)
})

</script>

<style scoped lang="less">
#page10{
  .a1{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
}

</style>