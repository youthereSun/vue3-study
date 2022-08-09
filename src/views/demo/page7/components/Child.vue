<template >
    <div id="page7-child">
        <p>这是child组件</p>
        <p>这是个普通值：{{a}}</p>
        <p>这是个ref值：{{b}}</p>
        <p>这是个reactive值:{{c}}</p>
    </div>
</template>
<script setup>
import { inject,onMounted, toRaw } from 'vue'; 
let a=inject('normal_data')
let b=inject('ref_data')
let c=inject('reactive_data')
const updateRefDataChild=inject('updateRefData')
const updateReactiveDataChild=inject('updateReactiveData')
onMounted(()=>{
    console.log('child组件onMounted！！')
    //不具备响应式
    a=100
    //具备响应式，但是不推荐在自组件中修改，破坏单向流动理念，provide中使用readonly
     //b.value='hello inject'  //[Vue warn] Set operation on key "value" failed: target is readonly. 
     updateRefDataChild('hello inject')
    
     updateReactiveDataChild('name','dio')
     //以下两种均不可修改，设置了readonly
      //c.name='dio'
      //c.child.sex='女'

      //toRaw还是可以修改子级对象中的数据
      let d=toRaw(c.child)
      //JSON.parse(JSON.stringify(c))则不会修改
      let f=JSON.parse(JSON.stringify(c))
      d.sex='未知'
      f.sex='unknown'
      console.log(d)
      console.log(f)
      
})


</script>
<style lang="less" scoped>
</style>