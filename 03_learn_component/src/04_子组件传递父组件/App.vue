<template>
  <div>
    <div>{{count}}</div>
    <counter-operation  @add="addN" @reduce="reduceN" @addN="addNNum"></counter-operation>
  </div>
</template>

<script>
import CounterOperation from './CounterOperation.vue'
  export default {
    data(){
      return {
        count: 0
      }
    },
    components: { CounterOperation },
    methods: {
      reduceN(){
        console.log("reduceN");
        this.count--;
      },
      addN(){
        console.log("addN");
        this.count++;
      },
      addNNum(num, name, age) {
        console.log("=======")
        console.log(num, name, age);
        this.count += num;
      }
    }
  }
</script>

<style scoped>

</style>