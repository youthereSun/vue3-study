<template>
  <div id="page5">
    <p class="page-title">axios</p>
    <p style="color: red;text-align: center">reactive({...})的数据【Proxy类型】作为接口上传的参数时，会自动维护成普通类型，无需处理</p>
    <a-card class="card-body" title="从getCurrentInstance()挂载的实例中拿取axios" >
      <p>{{dataset.userInfo}}</p>
      <a-button @click="getData">通过axios直接获取数据</a-button>
    </a-card>
    <a-card class="card-body" title="从封装apis中获取数据" >
      <p>{{dataset.userInfo}}</p>
      <a-button @click="getDataByApi">通过axios封装获取数据</a-button>
    </a-card>

    <a-card class="card-body" title="通过请求改变store数据" >
      <p class="arr-item" :key="item.id" v-for="item in $store.state.arr">
        {{item.des}}
      </p>

      <a-button @click="getDataAndUpdateArr">通过axios更新store数据</a-button>
    </a-card>


  </div>
</template>

<script>
export default {
  name: "page5"
}
</script>
<script setup>
import {getCurrentInstance, reactive} from 'vue'
import {GetMockData ,GetMockArr} from "../../../api/api";
import {useStore} from 'vuex'

//const { ctx }  = getCurrentInstance();  //  方式一，这种方式只能在开发环境下使用，生产环境 下的ctx将访问不到
//const { proxy }  = getCurrentInstance();  //  方式二，此方法在开发环境以及生产环境下都能到组件上下文对象（推荐）

const { proxy:instance}=getCurrentInstance()
const store = useStore()

const dataset=reactive({
  userInfo:{}
})

const getData=()=>{
  instance.$axios.get('./mock.json').then(res=>{
    const {data} =res
    dataset.userInfo=data
  })
}

const getDataByApi=()=>{
  GetMockData(function (res){
    const {data} =res
    dataset.userInfo=data
  })
}

const getDataAndUpdateArr=()=>{
  GetMockArr(res=>{
    const {data} =res
    store.commit('updateArr',data)
  })

}



</script>

<style scoped lang="less">
#page5{
  min-height: 100vh;
  padding: 0 20px;
  background-color: #f0f2f5;
.page-title{
  font-weight: 500;
  font-size: 30px;
  text-align: center;
}

  .arr-item{
    border: 1px solid green;
    padding: 10px;
    width: 200px;
  }

  .card-body{
    margin-bottom:20px;
  }
}

</style>