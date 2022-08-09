<template>
    <div id="page7">
        <p class="page-title"> vite 配置学习 </p>

      <a-card class="card-body" title="suspense,defineAsyncComponent">
        <p>通过defineAsyncComponent异步导入组件，[打包时会单独打出一个组件文件]可以解决性能问题，减少打包的体积，在用到时才会加载对应组件文件</p>

        <p>Suspense是内置组件，提供了default（装载异步组件）和fallback（装载异步组件未加载完毕的组件）两个插槽</p>
        <suspense>
          <template #default>
            <async-child></async-child>
          </template>
          <template #fallback>
            <p>加载中！！</p>
          </template>
        </suspense>
      </a-card>

        <a-card class="card-body" title="env文件">
            <p>原理：基于dotenv库，项目启动扫描env文件，把读取到的变量注入node-process中  </p>
            <p>调用loadEnv方法，vite会自动根据当前mode来进行读取环境变量 </p>
            <p>默认的环境变量以VITE_为前缀，安全原因，可通过envPrefix去修改前缀</p>
            <p style="font-size: 20px;color:red" >读取环境变量APP_KEY：{{app_key}}</p> 
        </a-card>
         <a-card class="card-body" title="provide inject">
            <Child />
        </a-card>


    </div>

</template>
<script setup>
import { onMounted,provide,reactive,readonly,ref,defineAsyncComponent } from 'vue';
import Child from './components/Child.vue'

//import AsyncChild from "./components/AsyncChild.vue";
const AsyncChild=defineAsyncComponent(()=>import('./components/AsyncChild.vue'))
console.log('child',Child)
let app_key=ref(0)
let ref_data=ref('hello vite')

const updateRefData=(val)=>{
    ref_data.value=val
}

const updateReactiveData=(key,val)=>{
    reactive_data[key]=val
}

const reactive_data=reactive(
    {
        name:'jojo',
        age:20,
        child:{
            sex:'男'
        }
    }
)

provide('normal_data',10)
provide('ref_data',readonly(ref_data))
//注入方法
provide('updateRefData',updateRefData)
provide('reactive_data',readonly(reactive_data))
provide('updateReactiveData',updateReactiveData)
onMounted(()=>{
    const {ENV_APP_KEY} =import.meta.env
    console.log(ENV_APP_KEY)
    app_key.value=ENV_APP_KEY
})

</script>
<style lang="less" scoped>
#page7 {
    min-height: 100vh;
    min-width: 1080px;
    background: azure;
  padding: 10px;
  .card-body{
    margin-bottom: 20px;
  }

    .page-title {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        padding: 10px 0;
    }
}
</style>