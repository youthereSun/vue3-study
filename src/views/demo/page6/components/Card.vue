<template>
  <div class="my-card"  v-show="modelValue">
    <div class="header">
      <a-button @click="changeShow">close inner</a-button>
    </div>
    <div class="body">
      <p>v-model 就是:modelValue的简写，用'update:modelValue'派发事件</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>
<script setup>
defineProps({
  modelValue:Boolean
})

const emits=defineEmits(['update:modelValue'])

const changeShow=()=>{
  emits('update:modelValue',false)
}

</script>

<style scoped lang="less">
.my-card{
  width: 200px;
  height: 200px;
  border: 1px salmon solid;
  padding: 10px;
}

</style>