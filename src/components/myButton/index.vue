<template>
    <div class="sun-button" @click="handleClick">这是我自定义的button</div>
</template>

<script>
export default {
  name: "sunButton"
}
</script>
<script setup>
const emits=defineEmits(['handleClick'])
const handleClick=()=>{
  emits('handleClick')
}

</script>

<style scoped>
.sun-button{
  display: inline-block;
  padding: 10px 5px;
  background-color: #7cb305;
  border: 1px salmon solid;
  border-radius: 20px;
}

</style>