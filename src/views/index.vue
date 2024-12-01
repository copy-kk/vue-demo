<template>
  <div>
    <el-button @click="handleCommon">提交</el-button>
  </div>
</template>

<script setup lang="ts">
import {
  reactive,
  onMounted,
  onUnmounted,
  ref,
} from 'vue';
import {useRouter, useRoute, onBeforeRouteLeave} from "vue-router";
import {common} from "@/api/test";

const router = useRouter()
const route = useRoute()

const handleCommon = () => {
  common().then(res => {
    console.log(res)
  })
}

onMounted(() => {
  console.log("onMounted")
})
</script>

<style scoped>

</style>