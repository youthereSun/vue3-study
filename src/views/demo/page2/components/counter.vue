<template>
  <div id="my-counter">
    <p class="count-style">{{`count:${props.count}`}}</p>
    <p class="count-style">{{`子组件的localCount:${localCount}`}}</p>
    <a-input @change="changeCount" :value="props.count" />
    <a-button @click="modifyCount">子组件修改count</a-button>
  </div>
</template>

<script>
export default {
  name: "counter"
}
</script>
<script setup>
import {toRefs} from 'vue'

const props = defineProps({
  count:{
    type:Number,
    default:0
  }
})

const {count:localCount}= toRefs(props)
console.log(localCount)//ObjectRefImpl

const emits =  defineEmits(['handleModifyCount'])

const modifyCount =(val)=>{
  emits('handleModifyCount', typeof (val) =='number'?val:new Date().getTime())
}

const changeCount =(e)=>{
  let val = e.target.value||0
  modifyCount(parseInt(val))

}

</script>

<style scoped lang="less">
#my-counter{
  .count-style{
    font-weight:500;
    font-size: 30px;
    text-align: center;
  }

}

</style>