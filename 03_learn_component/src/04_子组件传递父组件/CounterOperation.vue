<template>
  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
  <input type="text" v-model.number="num">
  <button @click="incrementN">+n</button>
</template>

<script>
  export default {
    emits: {
      add: null,
      reduce: null,
      addN: (num, name, age) => {
        console.log("--------")
        console.log(num, name, age);
        if (num > 10) {
          return true
        }
        return false;
      }
    },
    data(){
      return {
        num: 0
      }
    },
    methods: {
      increase(){
        this.$emit("add")
      },
      decrease(){
        this.$emit("reduce")
      },
      incrementN(){
        this.$emit('addN', this.num, "why", 18);
      }
    }
  }
</script>

<style scoped>

</style>