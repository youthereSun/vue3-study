<template>
    <transition appear :appear-to-class='animate'>
      <slot />
    </transition>
</template>

<script>
export default {
  name: "AnimateWarpper"
}
</script>
<script setup>
import 'animate.css'
defineProps({
  animate:{
    type:String,
    default:'animate__animated animate__jello'
  }
})

</script>

<style scoped>

</style>