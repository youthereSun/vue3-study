<template>
  <div id="stepper">
    <a-input @change="updateVal" v-model:value="callback" placeholder="Please input" />
    <a-button  @click="sendCallback">sendCallback</a-button>

  </div>
</template>

<script>
import {defineComponent} from "vue";

const props={
  callback:{
    type:String,
    default:''
  }
}

export default defineComponent({
  props,
  emits:['onSend','onClick'],
  setup(props,{emit}){

    const sendCallback=()=>{
      emit('onClick')
    }

    //实时更新数据道父组件
    const updateVal=(val)=>{
      emit('onSend',val)
    }

    return{
      ...props,
      sendCallback,
      updateVal
    }

  }


})
</script>

<style scoped>

</style>