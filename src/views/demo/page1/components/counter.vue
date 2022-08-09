<template>
  <div id="counter">
    <p> {{num}}</p>
    <a-button type="primary" @click="addNum">submit count</a-button>
  </div>
</template>

<script>
export default {
  name: "counter"
}
</script>
<script setup>
import {ref, toRefs, onMounted, watch} from 'vue'
const props = defineProps({
  count:{
    type:Number,
    default:0
  }
})
console.log(props)
let num= ref(props.count)

watch(props, (newValue, oldValue) => {
  console.log('watch 已触发[props]', newValue)
})

watch(num, (newValue, oldValue) => {
  console.log('watch 已触发[num]', newValue)
})

const emits = defineEmits(['submitNum'])


const addNum =()=>{
  emits('submitNum',++num.value)
}




</script>

<style scoped lang="less">
#counter{


}

</style>