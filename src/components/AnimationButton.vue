<template>
    <div class="animation-button" @click="handleClick" >
      <StarOutlined v-show="clicked" class="animation-button-icon " :class="clicked?'animation1':''" />
      <close-outlined  v-show="!clicked"  class="animation-button-icon "  :class="!clicked?'animation':''" />
    </div>
</template>

<script>
export default {
  name: "AnimationButton"
}
</script>
<script setup>
import {StarOutlined,StarFilled,CloseOutlined}  from '@ant-design/icons-vue';
import {ref} from "vue";
let clicked=ref(false)
defineProps({
  width:{
    type:String,
    default:'80px'
  },
  height:{
    type:String,
    default:'30px'
  },

})

const emits = defineEmits('handleClick')


const handleClick=()=>{
    clicked.value=!clicked.value
  emits('handleClick')
}

</script>

<style scoped lang="less">

@keyframes mymove {
  from {
    transform: rotate(0deg);
    opacity:0;
  }
  to {
    transform: rotate(180deg);
    opacity: 100;
  }
}

@keyframes mymove1 {
  from {
    transform: rotate(0deg);
    opacity:100;
  }
  to {
    transform: rotate(144deg);
    opacity: 0;
  }
}

.animation {
  animation: mymove 2s ;
}
.animation1 {
  animation: mymove1 2s ;
  animation-direction: reverse;

}

.animation-button{
  background: #6f6f6f;
  display: inline-block;
  padding:10px 30px;
  .animation-button-icon{
    color: white;
    font-size: 20px;
    font-weight: bold;

  }
}

</style>