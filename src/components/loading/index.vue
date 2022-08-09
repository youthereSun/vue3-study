<template>
    <div id="global-loading" v-if="isShowLoading">
      <div style="font-size: 30px;color:white">Loading data...</div>
    </div>
</template>

<script>
export default {
  name: "index"
}
</script>
<script setup>
import {ref} from "vue";

const isShowLoading =ref(false)
const showLoading=()=>{
  isShowLoading.value=true
}

const hideLoading=()=>{
  isShowLoading.value=false
}

//暴露属性，外部获取挂载到全局
defineExpose({
  isShowLoading,
  showLoading,
  hideLoading
})
</script>

<style scoped lang="less">
#global-loading{
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;

  background-color: rgba(56, 158, 13, 0.42);

}

</style>