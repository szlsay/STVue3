<template>
  <div>
    <home></home>
    <button @click="addName">+name</button>
  </div>
</template>

<script>
  import Home from './Home.vue';
  import { computed } from 'vue';

  export default {
    components: {
      Home
    },
    provide() {
      return {
        name: "why",
        age: 18,
        sex: "men",
        length: computed(() => this.names.length) // ref对象 .value
      }
    },
    data() {
      return {
        names: ["abc", "cba", "nba"]
      }
    },
    methods: {
      addName() {
        this.names.push("why");
        console.log(this.names);
      }
    }
  }
</script>

<style scoped>

</style>