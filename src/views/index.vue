<template lang="pug">
  el-button(@click="handleCommon") 提交
  div(class="name"): span(style="font-size: 30px") 张三
    el-button submit
  .name(style="font-size: 50px") 张三
    .n1 王五
      el-button test
  #name 李四

</template>

<script setup lang="ts">
import {
  reactive,
  onMounted,
  onUnmounted,
  ref,
} from 'vue';
import {useRouter, useRoute} from "vue-router";
import {common} from "@/api/test";

const router = useRouter()
const route = useRoute()

const handleCommon = () => {
  common({ param: 'hello' }).then(res => {
    console.log(res)
  })
}

onMounted(() => {
  console.log("onMounted")
})
</script>

<style scoped lang="sass">
.name
  color: salmon
  .n1
    font-size: 30px
</style>