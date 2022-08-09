<template>
  <div id="page3">
    <DigitalCard :card-data="cardData"/>

    <div class="charts">
      <a-card title="近7日每日新增采集数" class="box-card" :style={width:middle_width}>
        <lineCharts
            :data="chart1Data"
            :colorArray="colorArray"
        />
      </a-card>
      <a-card title="近7日每日新增审核数" class="box-card" :style={width:middle_width}>

        <lineCharts
          :data="chart1Data"
          :colorArray="colorArray"
        />
      </a-card>
      <a-card title="等保单位比例" class="box-card" :style={width:middle_width}>

        <pieCharts
            :data="chart2Data.dataset"
        />
      </a-card>
      <a-card title="等保系统比例" class="box-card" :style={width:middle_width}>

        <pieCharts
            :data="chart2Data.dataset"
        />
      </a-card>


      <a-card title="单位类型分布" class="box-card" :style={width:full_width}>
        <barCharts
            :data="chart1Data"
            :colorArray="colorArray"
        />
      </a-card>

      <a-card title="单位行业类型分布top5" class="box-card" :style={width:middle_width}>
        <barCharts
            :data="chart1Data"
            :colorArray="colorArray"
        />
      </a-card>

      <a-card title="系统是否ICP备案" class="box-card" :style={width:middle_width}>
        <pieCharts
            :data="chart2Data.dataset"
        />
      </a-card>
      <a-card title="系统是否公安备案" class="box-card" :style={width:middle_width}>
        <pieCharts
            :data="chart2Data.dataset"
        />
      </a-card>

      <a-card title="信息系统网络应用类型TOP5" class="box-card" :style={width:middle_width}>
        <pieCharts
            :data="chart2Data.dataset"
            :radius="['50%','80%']"
        />
      </a-card>
    </div>

      <a-card title="采集记录查询" class="box-card" :style={width:full_width}>
         <QueryTable
             @onDatePicked="updateTableData"
             :columns="tableSetting.columns"
             :data="tableSetting.data"/>
      </a-card>

  </div>
</template>

<script>
export default {
  name: "page3"
}
</script>
<script setup>
import DigitalCard from "./components/DigitalCard.vue";
import lineCharts from "../../../components/charts/lineCharts.vue";
import barCharts from "../../../components/charts/barCharts.vue";
import pieCharts from "../../../components/charts/pieCharts.vue";
import QueryTable from "./components/QueryTable.vue";
import {reactive, onMounted, ref,toRefs} from "vue";
let data={
  count1:111
}
const cardData=reactive(data)
const chartHeight='300px'
const full_width='100%'
const middle_width='48%'
const small_width='30%'
const colorArray=['#42b883']


const tableSetting=reactive( {
  columns:[  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
  },{
    title: '当日采集单位数',
    dataIndex: 'date',
    key: 'date',
  },{
    title: '信息系统',
    dataIndex: 'date',
    key: 'date',
  },{
    title: '当日审核数',
    dataIndex: 'date',
    key: 'date',
  }],
  data:[]
})

//const chart1Data={
//  x:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//  y:[150, 230, 224, 218, 135, 147, 260]
//}

const chart1Data=reactive({
  x:['Mon'],
  y:[200]
})

let chart2Data=reactive({
    dataset:[
  { value: 1048, name: 'Search Engine' },
    ]}
)

const updateTableData=(range)=>{
  //获取日期进行查询数据
  debugger
}

onMounted(()=>{
  console.log(' page3 onMounted!')
  setTimeout(()=>{
    cardData.count1=1000
  },1000)

  setTimeout(()=>{
    //更新chart数据
    chart1Data.x=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    chart1Data.y=[150, 230, 224, 218, 135, 147, 260]

    chart2Data.dataset=[
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' }
    ]
    console.log(chart1Data)
  },3000)

})



</script>

<style scoped lang="less">
#page3{
  padding: 20px;
  background-color: #f0f2f5;
  min-height: 100vh;
  .charts{
    width:100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .box-card{
      margin-bottom: 20px;
    }
  }
}

</style>