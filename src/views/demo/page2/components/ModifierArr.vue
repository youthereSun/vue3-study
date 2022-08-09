<template>
  <div>
    <p>这是子组件里的props.arr: {{props.arr}}</p>
    <div class="arr-item" v-for="item in props.arr">
      <a-input v-model:value="item.name"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "ModifierArr"
}
</script>
<script setup>

const props = defineProps({
  arr: Array
})
console.log(props.arr)//Proxy 类型，也可在自组件中直修改


</script>

<style scoped>

</style>