<template>
  <div id="home">
    <p class="title">Home</p>
    <page-menu
        :pages="data"
        @onMenuClick="handleJump"
    />
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { reactive, onMounted } from "vue";
import PageMenu from "../../components/PageMenu.vue";
import router from "../../router";
import {useStore} from 'vuex'

let pages=  [
  {
    key:1,
    name:'Page1',
    des:'简单路由跳转',
    path:'/page1'
  },
  {
    key:2,
    name:'Page2',
    des:'子父组件传值 MITT第三方实现eventBus',
    path:'/page2'
  },
  {
    key:3,
    name:'Page3',
    des:'构建echarts',
    path:'/page3'
  },
  {
    key:4,
    name:'Page4',
    des:'vuex',
    path:'/page4'
  },
  {
    key:5,
    name:'Page5',
    des:'axios请求',
    path:'/page5'
  },
  {
    key:6,
    name:'Page6',
    des:'watch computed nextTick v-model',
    path:'/page6'
  },
  {
    key:7,
    name:'Page7',
    des:'vite配置 provide inject  suspense/defineAsyncComponent',
    path:'/page7'
  },{
    key:8,
    name:'Page8',
    des:'自定义directive， hooks filters(vue3移除了，可自定义挂载全局)',
    path:'/page8'
  },{
    key:9,
    name:'Page9',
    des:'组件演示 slot slotProps',
    path:'/page9'
  },{
    key:10,
    name:'Page10',
    des:'dom动画  自定义全局loading组件',
    path:'/page10'
  },{
    key:11,
    name:'Page11',
    des:'intersectionObserver',
    path:'/page11'
  }
]

const data=ref(pages)
const store =useStore()

const handleJump=(path)=>{
  router.push({
    path,
    query:{
      tag:'test'
    }
  })
}

console.log('setup！')
onMounted(() => {
  console.log('onMounted！')

  store.dispatch('getUserInfo',{id:1})
});




</script>

<style scoped lang="less">

#home{
  min-height: 100vh;
  min-width: 1080px;
  background: azure;

  .title{
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding:10px 0;
  }
}


</style>