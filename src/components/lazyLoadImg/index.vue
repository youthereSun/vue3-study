<template>
    <div class="wjyyds-lazyload-img">
      <img :style="{width,height}" :lazy_src="lazy_src" ref="imgIns">
    </div>
</template>

<script>
export default {
  name: "index"
}
</script>
<script setup>
import {onMounted, onUnmounted, ref} from "vue";
let observer;
const imgIns=ref(null)
defineProps({
  lazy_src:{
    type:String,
    default:''
  },
  height:{
    type:String,
    default:'200px'
  },
  width:{
    type:String,
    default:'auto'
  }
})

onMounted(()=>{
  const callback=(entries)=>{
    entries.forEach(v=>{
      const  {target,isIntersecting} =v
      if(isIntersecting){
        target.src=target.getAttribute('lazy_src')
        observer.unobserve(target)
      }
    })

  }
  observer=new IntersectionObserver(callback)
  console.log(imgIns)
  observer.observe(imgIns.value)

})

onUnmounted(()=>{
  observer.disconnect()
  console.log('observer',observer)
})

</script>

<style scoped lang="less">
.wjyyds-lazyload-img{
  display: inline;
}

</style>