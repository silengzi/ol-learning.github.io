<script setup>
import { useRouter } from 'vue-router'
import example_list from "@/assets/json/example.json"
import examplesRoutes from "@/router/example-routes"

const router = useRouter()

const showExampleDetail = (idx) => {
  if(examplesRoutes[idx]) {
    router.push({
      name: examplesRoutes[idx].name
    })
  } else {
    alert("暂未开发")
  }
}
</script>

<template>
  <div class="example-list">
    <div class="example-list-item" v-for="(item, idx) of example_list" :key="idx" @click="showExampleDetail(idx)">
      <strong class="example-list-item-title">{{item.title}}</strong>
      <br />
      <small class="example-list-item-file">({{item.file}}.html)</small>
      <p class="example-list-item-discription">{{item.description}}</p>
    </div>
  </div>
</template>

<style scoped>
</style>
