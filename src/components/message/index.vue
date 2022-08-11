<template>
  <transition appear enter-active-class="animate__animated animate__swing">
    <div v-if="showMessage" class="wjyyds-message" ref="message">
      <p>
        <heart-filled class="message-icon"/>
        {{ text }}
        <fire-outlined v-show="closeable" @click="remove" class="message-icon-close"/>
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "index"
}
</script>
<script setup>
import {onMounted, ref} from 'vue'
import {HeartFilled,FireOutlined} from '@ant-design/icons-vue';

const message = ref(null)
const showMessage = ref(true)

const props = defineProps({
  text: {
    type: String,
    default: '这是一条消息'
  },
  iconColor: {
    type: String,
    default: 'red'
  },
  borderColor: {
    type: String,
    default: 'slategray'
  },
  closeable: {
    type: Boolean,
    default: false
  },
  druation: {
    type: Number,
    default: 3000
  },
  remove:{
    type:Function
  }
})


onMounted(() => {
  // if(!props.closeable){
  //   setTimeout(()=>{
  //     message.value.parentElement.remove()
  //     //message.value.remove()
  //   },props.druation)
  // }
  if (!props.closeable) {
      setTimeout(()=>{
        props.remove()
      },props.druation)
  }

})
</script>

<style scoped lang="less">
.wjyyds-message {
  display: inline-block;
  padding: 10px 15px;
  border: 1px v-bind(borderColor) solid;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.15);
  margin-bottom: 10px;


  p {
    padding: 0;
    margin: 0;
    font-size: 14px;

    .message-icon {
      margin-right: 10px;
      color: v-bind(iconColor);
    }

    .message-icon-close{
      margin-right: 10px;
      color: red;
    }
  }
}
</style>