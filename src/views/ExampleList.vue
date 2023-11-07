<script setup>
import example_list from "@/assets/json/example.json"

</script>

<template>
  <div class="example-list">
    <div class="example-list-item" v-for="item of example_list">
      <strong class="example-list-item-title">{{item.title}}</strong>
      <br />
      <small class="example-list-item-file">({{item.file}}.html)</small>
      <p class="example-list-item-discription">{{item.description}}</p>
    </div>
  </div>
</template>

<style scoped>
</style>
