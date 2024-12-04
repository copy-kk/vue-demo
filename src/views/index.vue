<template lang="pug">
  el-button(@click="handleCommon") 提交
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

<style scoped>

</style>