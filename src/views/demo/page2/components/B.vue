<template>
  <div style="width: 200px;height: 200px;background: #7cb305">
    <p>组件B</p>
    <p>{{ info }}</p>
  </div>
</template>

<script>
export default {
  name: "B"
}
</script>
<script setup>
import {getCurrentInstance, ref} from 'vue'

const {proxy} = getCurrentInstance()
const info = ref('')
//接受onModifyBVal事件的触发，并在callback中处理
proxy.$Bus.on('onModifyBVal', (val) => {
  console.log('通过MItt实现了组件通信')
  info.value = val
})

//清除总线事件
//proxy.$Bus.off('onModifyBVal')
//清除所有总线事件
//proxy.$Bus.all.clear()

</script>

<style scoped>

</style>