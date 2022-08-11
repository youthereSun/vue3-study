<template>
  <div class="wjyyds-bar-warpper">
    <div class="bar" ref="bar"></div>
  </div>
</template>

<script>
export default {
  name: "LoadingBar"
}
</script>
<script setup>
import { ref} from "vue";

const bar = ref(null)
let barLength = 0
let threshold = 90
let timer
const loadBar = () => {
  let dom = bar.value
  barLength=0
  timer = window.requestAnimationFrame(function fn() {
    if (barLength < threshold) {
      barLength++
      dom.style.width = barLength + '%'
      //递归
      timer = window.requestAnimationFrame(fn)
    } else {
      window.cancelAnimationFrame(timer)
    }
  })
}
//todo 加载完成够隐藏组件
const unloadBar = () => {
  let dom = bar.value
  setTimeout(()=>{
    window.requestAnimationFrame(()=>{
      barLength=100
      dom.style.width=barLength+'%'
    })
  },200)
}

defineExpose({
  loadBar,
  unloadBar
})


</script>

<style scoped lang="less">
.wjyyds-bar-warpper {
  width: 100vw;
  height: 2px;
  position: fixed;
  top: 0;

  .bar {
    height: inherit;
    width: 0;
    background: #6bafbb;
  }
}

</style>