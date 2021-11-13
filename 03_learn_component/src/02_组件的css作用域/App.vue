<template>
  <div id="app" class="title">
    <h1>app title</h1>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
  export default {
  components: { HelloWorld },
    
  }
</script>

<style scoped>
h1{
  color: red;
}

.title{
  color: green;
}
</style>