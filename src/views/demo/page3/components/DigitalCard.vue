<template>
  <div id="digital-card">
    <div class="cards">
      <div class="card">
          <div class="card-title">
            总采集数
          </div>
        <div class="card-body">
          <div class="count">{{cardData.count1}}</div>
        </div>
      </div>

    </div>
    <div class="cards">
      <div class="card half-card">
        <div class="card-title">
          总审核数
        </div>
        <div class="card-body">
          <div class="count">9999</div>
        </div>
      </div>
      <div class="card half-card">
        <div class="card-title">
          未审核数
        </div>
        <div class="card-body">
          <div class="count">9999</div>
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="card half-card">
        <div class="card-title">
          总系统数
        </div>
        <div class="card-body">
          <div class="count ">9999</div>
        </div>
      </div>
      <div class="card half-card">
        <div class="card-title">
          总防护设备数量
        </div>
        <div class="card-body">
          <div class="count">9999</div>
        </div>
      </div>
    </div>




  </div>
</template>

<script>
export default {
  name: "DigitalCard"
}
</script>
<script  setup>
import {watch} from "vue";

const props  =defineProps({
  cardData:{
    type:Object,
    default:()=>{}
  }

})

watch(props, (newValue, oldValue) => {
  console.log('watch 已触发[cardData]', newValue)
})


</script>

<style scoped lang="less">
#digital-card{
  width:100%;
  height:250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cards{
    width: 30%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .half-card{
      height: 48% !important;
    }

    .card{
      width: 100%;
      height: 100%;
      background: white;
      .card-title{
        height: 40px;
        padding:  0 10px;
        border-bottom: 1px #f0f0f0 solid;
        font-weight: 500;
        line-height: 40px;
      }

      .card-body{
        height: calc(100% - 40px);
        position: relative;
        .count{
          position: absolute;
          top:50%;
          left: 50%;
          transform: translate(-50%,-50%);
          text-align:center;
          font-size:30px;
          font-weight: 500;
        }

      }

    }

  }
}

</style>