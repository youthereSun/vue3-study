<template>
  <div id="query-table">
    <div class="controller">
      <a-range-picker  @change="onChangeRangeDate" :locale="locale" />
      <a-button @click="doQuery">查询</a-button>
    </div>
    <a-table :columns="columns" :data-source="data" :locale="locale" />
  </div>
</template>
<script setup>
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import { ref } from 'vue';

const props = defineProps({
  columns:Array,
  data:Array
})

const emits = defineEmits(['onDatePicked'])
const dateRange = ref([])


const onChangeRangeDate =(value,dateString)=>{
  let startDate = dateString[0]
  let endDate = dateString[1]
  dateRange[0]=startDate
  dateRange[1]=endDate
}

const doQuery=()=>{
  emits('onDatePicked',dateRange)
}

</script>
<style lang="less" scoped>
#query-table{
  .controller{
    text-align:right;
    margin-bottom: 20px;
  }
}
</style>