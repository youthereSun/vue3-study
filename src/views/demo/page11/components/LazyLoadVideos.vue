<template>
  <div class="lazy-load-videos-warpper" ref="warpper"  :style="{height:boxHeight,width:boxWidth}">
    <div class="full-view-port" v-for="item in data" :key="item.id"  >
      <video v-lazyLoad class="video-style" autoplay loop  :lazy-src="item.url" muted />
    </div>
    <div  class="bottom-line" ref="bottomLine">bottom line</div>
  </div>
</template>

<script>
export default {
  name: "LazyLoadVideos"
}
</script>
<script setup>
import {onMounted, onBeforeUnmount,ref} from 'vue'
const props=defineProps({
  data: {
    type:Array,
    default:()=>[]
  },
  boxHeight: String,
  boxWidth: String
})

const emits = defineEmits(  ['loadMore'])

const bottomLine=ref(null)
const warpper=ref(null)
function debounce(fn,wait){
  var timer = null;
  return function(){
    if(timer !== null){
      clearTimeout(timer);
    }
    timer = setTimeout(fn,wait);
  }
}

function handle(){
  //元素距离父容器顶端的距离
  //父元素的position需要设置指定值
  let a= bottomLine.value.offsetTop;
  //父元素可见高度
  let b=parseInt(props.boxHeight)
  //父元素滚动隐藏的高度
  let c=warpper.value.scrollTop
  let d=a-b-c
  if(d<500){
    console.log('加载新数据')
    emits('loadMore')
  }
}
onMounted(()=>{
  warpper.value.addEventListener('scroll',debounce(handle,2000))
})
onBeforeUnmount(()=>{
  //warpper.value.removeEventListener('scroll',debounce(handle,2000))
})


//设置observer观察的元素相对于的根元素为warpper，默认为html
const option={
  root:warpper.value
}
const callback=(entries)=>{
  entries.forEach(v=>{
    const {target,isIntersecting} =v
    if(isIntersecting){
      console.log(v)
      target.src=target.getAttribute('lazy-src')
      observer.unobserve(target)
    }
  })
}
let observer=new IntersectionObserver(callback,option)

const vLazyLoad={
  mounted(el){
      observer.observe(el)
  }
}
</script>

<style scoped lang="less">
.lazy-load-videos-warpper{
  overflow: scroll;
  position:relative;
  border:1px salmon solid;
  .full-view-port{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .video-style{
      width:100%;
    }
  }

  .bottom-line{
    visibility: hidden;
    text-align:center;
    background:red;
  }
}

</style>