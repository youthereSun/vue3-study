<template>
<div id="child">
  <p>可以在template标签里直接使用defineprops接受的数据</p>
  <p>name:{{name}}</p>
  <p>arr:{{arr}}</p>
<a-button @click="testLog">在script中直接使用defineprops数据</a-button>
  <a-button @click="testLog1">在script中直接使用props接受defineprops数据</a-button>

  <a-button @click="modify">在子组件中直接修改</a-button>
</div>
</template>

<script>
export default {
  name: "Child"
}
</script>
<script setup>
// defineProps({
//   name:String,
//   arr:Array
// })




const props=defineProps({
  name:String,
  arr:Array
})
const testLog=()=>{
  console.log(name)
  console.log(arr)
}

const testLog1=()=>{
  console.log(props.name)
  console.log(props.arr)
}

const modify=()=>{
  //props.name='jojo'
  //props.arr[0]=10
}

</script>

<style scoped>

</style>