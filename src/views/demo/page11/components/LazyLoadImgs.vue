<template>
  <div class="lazy-load-container" :style="{height:boxHeight,width:boxWidth}">

    <img class="img-style" :key="item.id" v-for="item in data" :data-src="item.url" v-LazyLoad />

  </div>
</template>

<script>
export default {
  name: "LazyLoadImgs"
}
</script>
<script setup>
defineProps({
  data: {
    type:Array,
    default:()=>[]
  },
  boxHeight: String,
  boxWidth: String
})

const callback=(entries)=>{
  console.log(entries)
  entries.forEach(v=>{
    const {target,isIntersecting} =v
    if(isIntersecting){
      console.log('元素与视口交叉了')
      target.src=target.getAttribute('data-src')
      observer.unobserve(target)
    }
  })
}
let observer = new IntersectionObserver(callback)

const vLazyLoad={
  mounted(el){
    observer.observe(el)
  }
}

</script>

<style scoped lang="less">
.lazy-load-container {
  width:100%;
  background: slategray;
  overflow: scroll;
  .img-style{
    width: 100%;
    height: 300px;

  }
}

</style>