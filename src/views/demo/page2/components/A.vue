<template>
  <div style="width: 200px;height: 200px;background: #578bc9">
    <p>组件A</p>
    <a-button @click="doChange">修改B组件的值</a-button>
  </div>
</template>

<script>
export default {
  name: "A"
}
</script>
<script setup>
import {getCurrentInstance} from 'vue'
const {proxy} =getCurrentInstance()
console.log('proxy',proxy)
const doChange=()=>{
  //派发onModifyBVal事件
  proxy.$Bus.emit('onModifyBVal','我是MITT，我可以实现平级组件通信')

}
</script>

<style scoped>

</style>