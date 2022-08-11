<template>
    <div id="page12">
      <a-card class="card-body" title="动态css">
        <p>通过script中定义变量，在style中使用v-bind()绑定</p>
        <div class="color-block">
          这个颜色是通过js动态控制
        </div>
        <a-button @click="changeBgC">change color!!</a-button>

      </a-card>

      <a-card class="card-body" title="属性选择器">
        <p>:deep()  深层修改组件样式</p>
        <p>:slotted() 在修改slot中的样式</p>
        <p>:globle() 全局样式</p>
      </a-card>


    </div>
</template>

<script>
export default {
  name: "index"
}
</script>
<script setup>
import {reactive, ref} from "vue";

const backgroundColor=ref('red')
const style=reactive({
  color:'white'
})
const changeBgC=()=>{
  backgroundColor.value="yellow"
  style.color='black'
}
</script>

<style scoped lang="less">
#page12{
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  .card-body{
    margin: 20px;
    .color-block{
      width: 200px;
      height: 200px;
      border:1px slategray solid;
      text-align: center;
      color: v-bind('style.color');
      background-color: v-bind(backgroundColor);
    }
  }

}

</style>