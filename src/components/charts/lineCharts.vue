<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>

<script>
export default {
  name: "LineCharts"
}
</script>
<script setup>
import {onMounted, ref, watch} from "vue";
import * as echarts from "echarts";


const props=defineProps({
  width: {
    type: String ,
    default: '100%',
  },
  height: {
    type: String ,
    default: '200px',
  },
  colorArray: { // 色盘，对应每个系列，数组
    type: Array,
    default: () => ['#c41d4d']
  },
  data:{//x,y
    type:Object,
    default:()=>{}
  }
});

const chartRef = ref(null)
let myChart

watch(props,(newVal,oldVal)=>{
  console.log('props更新了')
  init()
})

onMounted(
    () => {
      // 基于准备好的dom，初始化echarts实例
      myChart = echarts.init(chartRef.value);
      window.addEventListener('resize', function() {
        myChart.resize()
      })
      init()
    }
)

function init(){

  let option=   {
    color:props.colorArray,
    grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          width: 2,
          color: props.colorArray[0],
        },
      },
    },
    xAxis: {
      type: 'category',
      data: props.data.x||[],
      //data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        show: false,
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.data.y||[],
        type: 'line'
      }
    ]
  }

  myChart.setOption(option)

}

</script>

<style scoped>

</style>