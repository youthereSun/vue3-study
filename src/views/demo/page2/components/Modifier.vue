<template>
  <div id="modifier">
    {{props.originData}}
    <div class="container">
        <a-input  v-model:value="props.title" ></a-input>
        <p>基本信息</p>
        <a-input prefix="姓名"  v-model:value="props.originData.name"  />
        <a-input prefix="年龄"  v-model:value="props.originData.age" type="number" />
        <a-input prefix="工作"  v-model:value="props.originData.job" />
        <p>父母信息</p>
        <a-input prefix="父亲姓名"  v-model:value="props.originData.parents.father.name"  />
        <a-input prefix="母亲年龄"  v-model:value="props.originData.parents.father.age" type="number" />
        <a-input prefix="父亲工作"  v-model:value="props.originData.parents.father.job" />
        <a-input prefix="母亲姓名"  v-model:value="props.originData.parents.mother.name"  />
        <a-input prefix="母亲年龄"  v-model:value="props.originData.parents.mother.age" type="number" />
        <a-input prefix="母亲工作"  v-model:value="props.originData.parents.mother.job" />
        <p>宠物信息</p>
        <a-input prefix="昵称"  v-model:value="props.originData.pet.name"  />
        <a-input prefix="性别"  v-model:value="props.originData.pet.sex" />
        <p>书架</p>
        <a-button @click="addBook">添加书籍</a-button>
        <div v-for="item in props.originData.books">
          <a-input prefix="书名"  v-model:value="item.name"  />
          <a-input prefix="作者"  v-model:value="item.author" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modifier"
}
</script>
<script setup>
import {toRefs, ref, reactive} from 'vue'
import {watch} from "vue";
const emits=defineEmits(['handleDataChange'])
const props= defineProps({
  originData:{
    type:Object
  },
  title: String
})
console.log( props.originData)//Proxy object
console.log(props.title)//string


const addBook=()=>{
  let book={
    name:'',
    author:''
  }
  props.originData.books.push(book)

}
/*
//通过解构将user变成子组件副本
const {originData:user}=reactive( {...props})
console.log(user)

watch(user,(val,oldVal)=>{
  console.log('user changed!')
})

const updateUser=()=>{
  emits('handleDataChange',user)


}*/

</script>

<style scoped lang="less">
#modifier{
  .container{
    padding:20px;
    border: 1px solid darkgrey;
  }

}

</style>