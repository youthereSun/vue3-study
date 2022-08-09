<template>
  <div id="app">
    <a-spin :spinning="$store.state.showLoading" tip="加载中...">
      <router-view />
    </a-spin>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
<script setup>
import {useStore} from 'vuex'
const store=useStore()
</script>

<style>
</style>

