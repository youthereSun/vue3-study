<template>
  <div id="page6">
    <p class="page-title"> mixin watch computed </p>

    <a-card class="card-body" title="mixin">
      <p class="arr-item" :key="item.id" v-for="item in $store.state.arr">
        {{ item.des }}
      </p>
      <a-button @click="resetStoreArr">通过mixin清空arr【局部引入，解构出来使用】</a-button>
      <a-button @click="printInfo">全局mixin方法调用，直接使用</a-button>
    </a-card>


    <a-card class="card-body" title="watch">
      <p>监听数据指定属性,属性为object时，需要deep</p>
      {{ dataset }}
      <a-input prefix="活动名称：" v-model:value="dataset.title"/>
      <a-input prefix="姓名：" v-model:value="dataset.user.name"/>
      <a-input prefix="宠物名称：" v-model:value="dataset.user.pet.name"/>
      <a-input prefix="车辆型号：" v-model:value="dataset.user.cars[0].modal"/>
      <a-button @click="stopWatch">停止监听</a-button>
    </a-card>


    <a-card class="card-body" title="computed">
      <div>通过JSON.parse(JSON.stringify(dataset))可以将reactive({})变为普通类型，可以拿到原始类型数据</div>
      <div>车辆数量： {{ computedData.carCount }}</div>
      <div>名字+后缀： {{ computedData.userName }}</div>
      <div>车辆：{{ computedData.carList }}</div>
    </a-card>

    <a-card class="card-body" title="toRaw">
      {{ a.name }}
      {{ a.arr }}
      {{ a.arrObj }}
      {{obj_ref.pet}}
      <a-button @click="toRawTest">测试</a-button>
      <p>当一个数据a，被设置为reactive后，经过响应式变化后，可以直接通过a拿到最新的值</p>
      <a-button @click="test">测试1</a-button>
    </a-card>

    <a-card class="card-body" title="nextTick">
     <p ref="msg">{{message}}</p>
      <p>{{message1}}</p>
      <a-button @click="changemsg">测试nextTick</a-button>
    </a-card>

    <a-card class="card-body" title="v-model in vue3">

      <card v-model="showCard"  />
      <a-button @click="showCard=!showCard">toggle card show outter!</a-button>

    </a-card>
  </div>
</template>

<script>
export default {
  name: "page6",
}
</script>

<script setup>
const {proxy: instance} = getCurrentInstance()
import Card from "./components/Card.vue";
import {mixin} from "../../../mixin/mixin";
import {
  getCurrentInstance,
  reactive,
  watch,
  watchEffect,
  computed,
  toRef,
  markRaw,
  toRaw,
  ref,
  toRefs,
  nextTick
} from "vue";
import {useStore} from 'vuex'
//console.log(mixin)
const {resetStoreArr} = mixin.methods
const store = useStore()

const showCard=ref(false)
const message=ref('你好，世界')
const message1=ref('')

const dataset = reactive({
  title: '信息填报',
  user: {
    name: '刘亦菲',
    pet: {
      name: 'jojo',
      sex: 'male'
    },
    cars: [
      {
        id: 1,
        modal: '宝马'
      },
      {
        id: 2,
        modal: '奔驰'
      }
    ]
  }
})

//监听整个对象
const watchData = watch(dataset, (newVal, oldVal) => {
  console.log('数据变化了 watch！！')
  //console.log({...dataset.user})

}, {
  immediate: true
})

//监听数据指定属性
const watchTitle = watch(() => dataset.title, (newVal, oldVal) => {
  console.log('title变化了 watch！！')
}, {
  //immediate:true
})

//监听数据指定属性,属性为object时，需要deep
const watchUser = watch(() => dataset.user, (newVal, oldVal) => {
  console.log('user变化了 watch！！')
}, {
  //immediate:true
  deep: true
})


//监听store数据
watch(() => store.state.arr, (newVal, oldVal) => {
  console.log('store-state-arr变化了 watch！！')
}, {
  immediate: true,
  deep: true
})

//停止监听
const stopWatch = () => {
  watchData()
  watchTitle()
  watchUser()

}

//watchEffect会自动收集参数里的变量进行监听
const effect = () => console.log(`通过watchEffect监听title：` + dataset.title)
watchEffect(effect)


// 计算属性基本使用
const computedData = computed(() => {
  // 回调函数必须return，结果就是计算的结果
  // 如果计算属性依赖的数据发生变化，那么会重新计算


  //这种写法会响应式改变原数据，不可以
  //let userName = dataset.user.name+='出生于2000年'

  //toRaw 和markRaw+Object.assign()
  let {user: {name, cars}} = JSON.parse(JSON.stringify(dataset))
  let userName = name + '出生于2000年'
  let car = {
    id: 3,
    modal: '雷克萨斯'
  }
  let carList = [...cars, car]
  let carCount = cars.length
  //todo 怎么解决剥离数组的响应式
  carList[0].modal = '什么车？'
  return {
    userName,
    carList,
    carCount
  }
})




let a = reactive({
  name: 'kiki',
  age: 20,
  arr: [1, 2, 3, 4],
  arrObj: [
    {
      name: 'a'
    },
    {
      name: 'b'
    },
    {
      name: 'c'
    }
  ]
})

const msg=ref(null)
const changemsg=()=>{
  message.value='hello world'
  //直接使用会拿取重新渲染的值
  //message1.value = msg.value.innerHTML
  //使用nextTick将函数调用推迟到下次dom更新完成后执行
  nextTick(()=>{
    message1.value = msg.value.innerHTML
  })
}

const toRawTest = () => {
  let a_raw = toRaw(a)
  let {name, age, arr, arrObj} = a_raw
  name = 'bibi'
  arr = [...arr, 0, 1, 2, 3]
  arrObj[0].name = 'f'

  console.log(name)
  console.log(arr)
  console.log(arrObj)

}

const obj={
  name:'wangjun',
  age:20,
  pet:{
    name:'kukakuka'
  }
}


let obj_ref=reactive(obj)
const test =()=>{
  //可以修改ref数据
  obj_ref.pet.name='biubiu'
  //可以修改原数据
  obj.pet.sex='male'
  console.log(obj)

}



</script>

<style scoped lang="less">

#page6 {
  min-height: 100vh;
  padding: 0 20px;
  background-color: #f0f2f5;

  .page-title {
    font-weight: 500;
    font-size: 30px;
    text-align: center;
  }

  .arr-item {
    border: 1px solid green;
    padding: 10px;
    width: 200px;
  }

  .card-body {
    margin-bottom: 20px;
  }
}
</style>