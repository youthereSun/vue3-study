<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>

<script>
export default {
  name: "pieCharts"
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
    default: () => ['#c22f59','#de7f9a','#6f434f']
  },
  data:{
    type:Array,
    default:()=>[]
  },
  radius: {//饼图半径，支持string和数组
    type: [String, Array],
    default: '80%'
 },
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
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show:false
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: props.radius,
        data:props.data,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 2
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  myChart.setOption(option)


}



</script>

<style scoped>

</style>