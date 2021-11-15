<template>
  <div>
    HomeContent: {{name}} - {{age}} - {{length.value}} - {{sex}}
  </div>
</template>

<script>
  export default {
    inject: ["name", "age", "length", "sex"],
  }
</script>

<style scoped>

</style>