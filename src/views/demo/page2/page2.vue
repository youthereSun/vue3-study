<template>
  <div id="page2">
    <p class="page-title">组件通信</p>
    <a-card class='card-body' title="子组件修改父组件的值 简单数据类型">
      <p class="conclusion">结论：子组件用defineprops接受的数据在script标签里不能直接使用，可以先用props接受后再使用，但是在template中可以直接使用</p>
      <child :name="state.name"  :arr="state.arr" />
      <child :name="name1"  :arr="arr1" />
      <p>arr:{{state.arr}}</p>
    </a-card>
    <a-card class='card-body' title="子组件修改父组件的值 简单数据类型">
      <p class="conclusion">结论： reactive对象里的 【 基本数据类型 】 不在子组件中直接修改</p>
      <counter
          @handleModifyCount="modifyCountChild"
          :count="count"
      />
      <div>
        <a-button @click="modifyCount">父组件修改count</a-button>
      </div>
    </a-card>

    <a-card class='card-body' title="子组件修改父组件的值 复杂类型（对象）">
      <p class="conclusion">结论： reactive对象里的 【 对象 】可在子组件中直接修改</p>
      <!--props里的属性为proxy对象，可以直接在子组件里修改值，proxy的代理，原理也是单向数据流-->
      {{ globalData.user }}
      <modifier :title="globalData.title" :origin-data="globalData.user"/>
    </a-card>

    <a-card class='card-body' title="子组件修改父组件的值 复杂类型（数组）">
      <p class="conclusion">结论： reactive对象里的 【 数组 】也可在子组件中直接修改</p>
      <!--props里的属性为proxy对象，可以直接在子组件里修改值，proxy的代理，原理也是单向数据流-->
      {{ globalData.arr }}
      <modifier-arr :arr="globalData.arr" />
    </a-card>

    <a-card class='card-body' title="基于Mitt第三方库实现事件总线">
     <div style="display: flex"> <A/><B/></div>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "page2",
}
</script>
<script setup>
import {ref, reactive,toRefs} from "vue";
import counter from "./components/counter.vue";
import Modifier from "./components/Modifier.vue";
import ModifierArr from "./components/ModifierArr.vue";
import Child from "./components/Child.vue";
import A from './components/A.vue'
import B from './components/B.vue'


const count = ref(0)
//console.log(count)

const globalData = reactive({
  title: '这是基本数据类型，无法直接在组件中修改，需要通过emit修改',
  user: {
    name: 'wangj',
    age: 20,
    job: 'worker',
    pet: {
      name: 'jojo',
      sex: 'male'
    },
    parents: {
      father: {
        name: 'wsp',
        age: 50
      },
      mother: {
        name: 'zyx',
        age: 45
      }
    },
    books: [
      {
        name: '斗罗大陆',
        author: '陆询'
      },
      {
        name: '斗破苍穹',
        author: '西红柿'
      }
    ]

  },
  arr: [
    {
      id: 1,
      name: 'wj'
    },
    {
      id: 2,
      name: 'wsp'
    }
  ]

})


const state=reactive({
  name:'dio',
  arr:[1,2,3,4]
})

const {name:name1,arr:arr1} =state



const modifyCount = () => {
  count.value++
}

const modifyCountChild = (payload) => {
  count.value = payload
}


</script>

<style scoped lang="less">
#page2 {
  min-height: 100vh;
  padding: 0 20px;
  background-color: #f0f2f5;
  .card-body{
    margin: 20px;
  }

  .page-title {
    font-weight: 500;
    font-size: 30px;
    text-align: center;
  }
  .conclusion{
    color: red;
    font-size: 20px;
    font-weight: bold;
  }
}

</style>