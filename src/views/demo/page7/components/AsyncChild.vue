<template>
  <div class="async-child">
    <p :key="item.id" v-for="item in arr">{{item}}</p>
  </div>
</template>

<script>
export default {
  name: "AsyncChild"
}
</script>
<script setup>
import {GetMockArr} from "../../../../api/api";
import {reactive, toRefs} from "vue";
const state=reactive({
  arr:[]
})
const {arr}=toRefs(state)
const getMockData=async ()=>{
  return  new Promise((resolve, reject) =>{
    setTimeout(()=>{
      GetMockArr((res)=>{
        resolve(res.data)
      })
    },3000)
  } )
}

state.arr=await getMockData()

</script>

<style scoped>

</style>