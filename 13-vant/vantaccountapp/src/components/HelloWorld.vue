<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ msg: string }>()
const count = ref(0)

</script>

<template>
  <h1>{{ msg }}</h1>
<van-button type="primary">主要按钮</van-button>
</template>

<style scoped>

</style>
