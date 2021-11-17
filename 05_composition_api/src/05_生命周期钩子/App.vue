<template>
  <div>
    <button @click="increment">{{counter}}</button>
  </div>
</template>

<script>
  import { onMounted, onUpdated, onUnmounted, ref, onActivated } from 'vue';

  export default {
    setup() {
      const counter = ref(0);
      const increment = () => counter.value++

      onMounted(() => {
        console.log("App Mounted1");
      })
      onMounted(() => {
        console.log("App Mounted2");
      })
      onUpdated(() => {
        console.log("App onUpdated");
      })
      onUnmounted(() => {
        console.log("App onUnmounted");
      })

      onActivated(()=>{
        console.log("App onActivated");
      })
      return {
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>