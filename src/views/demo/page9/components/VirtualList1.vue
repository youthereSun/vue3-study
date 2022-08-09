<template>
  <div class="virtual-list-warpper" :style="{height:props.height}" ref="virtualList" >
    <div class="virtual-list-scroll-box" :style="{height:props.list.length*state.itemHeight+'px'}">
      <div class="list-item-group" :style="{  top: state.offset + 'px',height:props.height}">
        <div class="list-item"
             :style="{
                    height: state.itemHeight + 'px',
                    lineHeight: state.itemHeight + 'px',

                }"
             v-for="(item,i) in computedData.group" :key="item.id" >
          <p>{{item.id}}:{{item.text}}</p>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: "VirtualList"
}
</script>
<script setup>

import {ref, onMounted, reactive, computed} from "vue";

const virtualList=ref(null)

const props=defineProps({
  height:{
    type:String,
    default:'500px'
  },
  width:{
    type:String,
    default:'100%'
  },
  list:{
    type:Array,
    default:()=>[]
  }
})

const state=reactive({
  itemHeight:60,
  offset:0,
  offsetIndex:0
})

const computedData=computed(()=>{
  let group=[]
  //视口可现实的item数量
  let count = Math.ceil(parseInt(props.height) / state.itemHeight);
  let index = Math.floor(state.offset / state.itemHeight);
  state.offsetIndex = index;
  group=props.list.slice(index, count + index)
  return{
    group
  }
})

onMounted(()=>{
  let parent_dom=virtualList.value
  parent_dom.addEventListener('scroll', () => {
    state.offset = parent_dom.scrollTop;
  },true)
})


</script>

<style scoped lang="less">
.virtual-list-warpper{
  overflow-y: scroll;
  background: rgba(222, 222, 222, 0.45);
  .virtual-list-scroll-box{
    overflow: hidden;
    position: relative;
    .list-item-group{
      position: absolute;
      width: 100%;
      .list-item{
      }
    }
  }
}

</style>