<template>
    <div id="wjyyds-loading" :style="{backgroundColor}" v-if="isShowLoading">
      <component :animateColor="animateColor"  :is="M[animateType]" ></component>
    </div>
</template>

<script>
export default {
  name: "index"
}
</script>
<script setup>
import {ref} from "vue";
import A1 from './animates/A1.vue'
import A2 from './animates/A2.vue'

const M={
  A1,
  A2
}


defineProps({
  animateType:{
    type:String,
    default:'A1'
  },
  backgroundColor:{
    type:String,
    default:'rgba(255, 255, 255, 0.3)'
  },
  animateColor:{
    type:String,
    default:'rgba(0, 150, 136,1.0)'
  }
})

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
#wjyyds-loading{
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  backdrop-filter: blur(10px);

  .wjyyds-loading-animate{
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

}

</style>