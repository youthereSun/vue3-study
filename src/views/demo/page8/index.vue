<template>
  <div id="page8">
    <a-card class="card-body" title="hook介绍">
      <p>vue3中的hooks其实是函数的写法，就是将文件的一些单独功能的js代码进行抽离出来，放到单独的js文件中。这样其实和我们在vue2中学的mixin比较像</p>
    </a-card>
    <a-card class="card-body" title="hook把图片变为base64">
      <img  class="img-style" lazy_src="https://pic3.zhimg.com/v2-58d652598269710fa67ec8d1c88d8f03_r.jpg?source=1940ef5c">
    <a-button @click="consoleBase64">控制台显示base64</a-button>
    </a-card>
    <a-card class="card-body" title="hook实现计数器">
      <p>{{count}}</p>
      <a-button @click="decrement">--</a-button>
      <a-button @click="increment">++</a-button>

    </a-card>
    <a-card class="card-body" title="hook实现图片懒加载,出现在视口才会加载资源">
      <div style="display: flex;flex-direction: column">
        <img class="lazy-img" lazy_src="https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg">
        <img class="lazy-img" lazy_src="https://pic.qqtn.com/up/2017-7/2017071317523053609.jpg">
        <img class="lazy-img" lazy_src="https://pic3.zhimg.com/v2-58d652598269710fa67ec8d1c88d8f03_r.jpg?source=1940ef5c">
      </div>
    </a-card>
  </div>
</template>
<script setup>
import {useToBase64,useCount,useLazyloadImg} from "../../../hooks";
import {onMounted} from "vue";
const {count,increment,decrement}=useCount({count:100})

useLazyloadImg()
let option={
  el:'.img-style'
}
const {base64} =useToBase64(option)
const consoleBase64=()=>{
  console.log(base64.value)
}
onMounted(()=>{
  console.log('hooks在我之前先执行了')
})

</script>


<style scoped lang="less">
#page8{
  padding: 10px;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  .card-body{
    margin: 20px;


    .img-style,.lazy-img{
      width:200px;
      height:200px;
    }
  }

}

</style>