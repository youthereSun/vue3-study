<template>
  <div id="page4">
    <p class="page-title">VUEX演示</p>

    <a-card title="state基本数据类型的处理">
      <p> 在vue组件中使用store数据：[{{$store.state.count}}]</p>
      <p>getters:{{$store.getters.computedCount}}</p>
      <p>{{$store.getters.more20stu}}</p>
      <a-button @click="modifyCount">修改store中的数据【使用commit】</a-button>
      <a-button @click="doAsyncAction">调用异步action[是否超过30]</a-button>
      <a-button @click="resetCount">重置count</a-button>
    </a-card>

    <a-card title="state复杂数据类型的处理">
      <p> userInfo：[{{$store.state.userInfo}}]</p>
      <p> name：[{{$store.state.userInfo.name}}]</p>
      <p> age：[{{$store.state.userInfo.age}}]</p>
      <p> patents：[{{$store.state.userInfo.parents.length}}位]</p>
      <a-input  prefix="更新user name：" @change="(val)=>updateUserName('name',val.target.value)"  />
    </a-card>

    <a-card title="数组类型更新">
      <a-list size="small" bordered :data-source="$store.state.arr">
        <template #renderItem="{ item }">
          <a-list-item>{{ item.des }}</a-list-item>
        </template>
      </a-list>

      <a-button @click="addItem">新增数据</a-button>

    </a-card>

  </div>
</template>

<script>
export default {
  name: "page4"
}
</script>
<script setup>
import { useStore } from 'vuex'
import {onMounted} from "vue"; // 引入useStore 方法
const store = useStore()  // 该方法用于返回store 实例

const modifyCount =()=>{
  store.commit('increment')
}

const doAsyncAction=()=>{
  store.dispatch('is30')
}

const resetCount=()=>{
  store.commit('change',0)
}

const updateUserName=(key,val)=>{
  console.log(val)
  let payload={key,val}
  store.commit('updateUserInfoByKey',payload)

}
const addItem=()=>{
  let items=[]
  for (let i = 0; i < 5; i++) {
    let uuid=new Date().getTime()+i
    items.push({
      id:uuid,
      des:`这是:${uuid}`
    })
  }
  let newArr=[...store.state.arr,... items]

  store.commit('updateArr',newArr)
}

onMounted(()=>{
  setTimeout(()=>{
    //通过commit调用mutation中的方法
    store.commit('change',99)
  },1000)
  //通过dispatch调用actions中方法
  store.dispatch('changeAsync',1000)

})



</script>

<style scoped lang="less">
#page4{
  padding: 0 20px;
  background-color: #f0f2f5;
  .page-title{
    font-weight: 500;
    font-size: 30px;
    text-align: center;
  }
}

</style>