<template>
  <div id="app">
    <!--   路由默认的插槽 -->
    <router-view  #default="{route,Component}">
      <transition enter-active-class="animate__animated animate__slideInLeft" >
        <component :is="Component" />
      </transition>

    </router-view>
  </div>
</template>

<script>
import 'animate.css'
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

