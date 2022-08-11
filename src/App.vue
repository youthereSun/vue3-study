<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
<script setup>
import {getCurrentInstance,onMounted} from "vue";
const {proxy }=getCurrentInstance()
import {useStore} from 'vuex'
const store=useStore()
onMounted(()=>{
  //window.VUE_PROXY=proxy
})
</script>

<style>
</style>

