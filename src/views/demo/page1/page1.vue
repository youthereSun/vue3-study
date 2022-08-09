<template>
  <div>
    page1
    {{$store.state.count}}
    <a-input v-model:value="word" placeholder="Please input your word" />
    <a-button @click="sayHi">sayHi</a-button>
    <a-button @click="setWord">setWord</a-button>
    <a-input v-model:value="personRef.name" placeholder="Please input your name" />
    <a-input v-model:value="personRef.age" placeholder="Please input your age" />
    <a-input v-model:value="personRef.weight" placeholder="Please input your weight" />
    <a-button @click="printPersonInfo">printPersonInfo</a-button>
    <stepper
        :callback="callback"
        @onSend="sayCallback"
        @onClick="doCallback"
    />
    <counter
        :count="countNum"
        @submitNum="add"
    />
  </div>
</template>

<script >
import {defineComponent,onMounted,onUnmounted,ref,reactive} from "vue";
import { message } from 'ant-design-vue';
import stepper from "./components/stepper.vue";
import counter from "./components/counter.vue";
import { useStore } from 'vuex'

export default  defineComponent({
  emits:[],
  components:{stepper,counter},
  setup(props, { emit }) {
    const store= useStore()

    onMounted(()=>{
      console.log('page1 success mounted!')
      setWord()
    })
    onUnmounted(()=>{
      console.log(`last word is : ${word.value}`)
    })
    const countNum=ref(0)

    const callback = ref('请修改文本')

    const count =ref(0)
    const word=ref('')
    let person={
      name:'wangjun',
      age:18,
      weight:'110'
    }
    const personRef=reactive(person)
    const sayHi=()=>{
      console.log(word)
      //使用ref定义的数据取值和赋值需要加value
      message.info(word.value)
    }


    const add=(val)=>{
      countNum.value=val
      console.log(`countnum:${countNum.value}`)
    }
    const sayCallback=(value)=>{
      callback.value=value
    }

    const doCallback =()=>{
      message.info(callback.value)
    }

    const  setWord =()=>{
      word.value='default'
    }

    const printPersonInfo =()=>{
      console.log(personRef)
    }

    return{
      personRef,
      count,
      sayHi,
      setWord,
      printPersonInfo,
      word,
      sayCallback,
      callback,
      doCallback,
      countNum,
      add
    }
  }
})




</script>

<style scoped>

</style>