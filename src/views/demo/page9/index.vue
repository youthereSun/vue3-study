<template>
<div id="page9">
  <animation-button @handleClick="$router.push({path:'/'})" />
  <p>虚拟滚动列表</p>
  <virtual-list v-if="false" :item-height="60"  :list="listData">
    <template #list-item-content="slotProps">
      <div class="list-item">{{slotProps.item.id}}---{{slotProps.item.text}}<img style="height: 20px;width: 20px" :src="slotProps.item.src"></div>
    </template>
  </virtual-list>
  <virtual-list1 v-if="false"  :list="listData"/>

  <virtual-list-with-hook :item-height="60"  :list="listData">
    <template #list-item-content="slotProps">
      <div class="list-item">{{slotProps.item.id}}---{{slotProps.item.text}}<img style="height: 20px;width: 20px" :src="slotProps.item.src"></div>
    </template>
  </virtual-list-with-hook>

</div>


</template>

<script>
export default {
  name: "index",
}
</script>
<script setup>
import AnimationButton from "../../../components/AnimationButton.vue";
import VirtualList from "./components/VirtualList.vue";
import VirtualList1 from "./components/VirtualList1.vue";
import VirtualListWithHook from "./components/VirtualListWithHook.vue";
import {useRouter} from 'vue-router'
const router=useRouter()

import {reactive,toRefs,onMounted} from "vue";
const state=reactive({
  height:'500px',
  width:'100%',
  listData:[]
})
const {height,width,listData}=toRefs(state)
const getData=async ()=> {
  let list=[]
  return new Promise((resolve => {
    setTimeout(()=>{
      let count=1000
      for (let i = 0; i < count; i++) {
        list.push({
          id:i,
          text:`我是第${i}条数据`,
          src:'https://cn.vuejs.org/logo.svg'
        })
      }
      resolve(list)
    },0)
  }))
}

const setList=async ()=>{
  listData.value= await getData()
  //state.listData=data

}

onMounted(()=>{
  setList()
})


</script>

<style scoped lang="less">
#page9{
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;

  .list-item{
    height:60px;
    text-align: center;
    line-height: 60px;
    border-bottom: 1px salmon dashed;
  }
}

</style>