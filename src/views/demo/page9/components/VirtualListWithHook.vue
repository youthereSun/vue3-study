<template>
  <div class="virtual-list-warpper" :style="{height:props.height}" ref="virtualList">
    <div class="virtual-list-scroll-box" :style="{height:props.list.length*props.itemHeight+'px'}">
      <div class="list-item"
           :style="{
                    height: props.itemHeight + 'px',
                    top: (i + state.offsetIndex) * props.itemHeight + 'px'
                }"
           v-for="(item,i) in computedData.group" :key="item.id">
        <!--  list-item-content具名插槽    -->
        <slot name="list-item-content" :item="item" />
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
import {useOffset} from "../../../../hooks";
const {scrollTop} = useOffset({el:'.virtual-list-warpper'})

const virtualList = ref(null)

const props = defineProps({
  height: {
    type: String,
    default: '500px'
  },
  width: {
    type: String,
    default: '100%'
  },
  list: {
    type: Array,
    default: () => []
  },
  itemHeight:{
    type:Number,
    required:true
  }
})

const state = reactive({
  offsetIndex: 0
})

//视口可显示的item数量
const count = Math.ceil(parseInt(props.height) / props.itemHeight);

const computedData = computed(() => {
  let group = []
  let index = Math.floor(scrollTop.value / props.itemHeight);
  state.offsetIndex = index;
  group = props.list.slice(index, count + index)
  return {
    group
  }
})
//
// onMounted(() => {
//   let parent_dom = virtualList.value
//   parent_dom.addEventListener('scroll', () => {
//     state.offset = parent_dom.scrollTop;
//   }, true)
// })


</script>

<style scoped lang="less">
.virtual-list-warpper {
  overflow-y: scroll;

  .virtual-list-scroll-box {
    position: relative;

    .list-item {
      position: absolute;
      width: 100%;
    }
  }
}

</style>