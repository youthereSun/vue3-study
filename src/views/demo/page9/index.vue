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

  <div style="display: flex;flex-direction: column;border: 1px salmon solid;align-items: center">
    <lazy-load-img lazy_src="https://th.bing.com/th/id/R.b102e96fc559231358e1e7d92daa6a64?rik=JSIb2iiWxX0SRA&riu=http%3a%2f%2fwww.panpan.org%2fjh2012uploads%2fallimg%2f130522%2f1-130522153104133.jpg&ehk=A7bbW6Xf%2buRgJsBYNp9Ug3Wd2EwhQN%2fKNT51h5jaedQ%3d&risl=&pid=ImgRaw&r=0" />
    <lazy-load-img lazy_src="https://th.bing.com/th/id/R.f4a2c90a0aac5943b17dcbd211380249?rik=5y6qm%2fSNP0US8Q&riu=http%3a%2f%2f222.186.12.239%3a10010%2feqcmei_20190109%2f002.jpg&ehk=J4Und7vN4QwI4vcGZ26CjeFpXGfAUSpEf9zlFNg191Q%3d&risl=&pid=ImgRaw&r=0" />
    <lazy-load-img lazy_src="https://th.bing.com/th/id/R.8eb5b6b782d28e8f06c00a512a158c9f?rik=4HL%2bSmdt25xosQ&riu=http%3a%2f%2ffeizhuliu.vipyl.com%2fattached%2fimage%2f20130130%2f20130130115165106510.jpg&ehk=ZwWljmDo1cLEUNFEvL8vsVWg9gO2m7NX%2buTaJBzkw1s%3d&risl=&pid=ImgRaw&r=0" />
    <lazy-load-img lazy_src="https://th.bing.com/th/id/R.47de9dfcc25d579d84850d4575d24a6a?rik=%2fGkmrewzIEY4Iw&riu=http%3a%2f%2fimg3.redocn.com%2ftupian%2f20150930%2fqizhimeinvlisheyingtu_5034226.jpg&ehk=rG9Ks2QRzj81mZl38gVGmWVAgCHVLWppoDezpfwdxjo%3d&risl=&pid=ImgRaw&r=0" />
  </div>

</div>


</template>

<script>
export default {
  name: "index",
}
</script>
<script setup>
import AnimationButton from "../../../components/AnimationButton.vue";
import LazyLoadImg from '../../../components/lazyLoadImg/index.vue'
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