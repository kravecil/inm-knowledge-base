<script setup>
defineProps(['title', 'caption'])
</script>

<template>
  <div class="card">
    <div class="text-uppercase text-blue-10 text-weight-bold">{{ title }}</div>
    <div class="text-caption text-justify">{{ caption }}</div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 10px;
  background-color: #ddd;
  padding: 10px 20px;
  border: 1px solid #aaa;
}
</style>