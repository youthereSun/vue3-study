<template>
  <div id="page-menu">


    <a-card :title="page.name" class="box-card" :key="page.key" v-for="page in pages">
      <template #extra>
        <a-button @click="emit('onMenuClick',page.path)">前 往</a-button>
      </template>
      <div class="text item">{{ 'path：' + page.path }}</div>
      <div class="text item">{{ 'des：' + page.des }}</div>
    </a-card>

  </div>
</template>

<script setup>
//定义事件集，上传事件，this.$emit
const emit = defineEmits(['onMenuClick']);
//定义属性，接受数据
defineProps({
  pages: {
    type: Array,
    default: () => []
  }
});

</script>

<style scoped lang="less">


#page-menu {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //vue3推荐的deep选择器
  //还有插槽选择器，:soltted()  :global()
  :deep(.ant-card-bordered) {
    border-color: #437cb4;
  }


  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
    margin-bottom: 20px;
  }
}

</style>