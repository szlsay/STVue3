<template>
  <div>
    <button @click="btnClick">按钮点击</button>
  </div>
</template>

<script>
  import emitter from './utils/eventbus';
  import {WHY_EVENT} from   './utils/constants';
  export default {
    methods: {
      btnClick() {
        console.log("about按钮的点击");
        emitter.emit(WHY_EVENT, {name: "why", age: 18});
        emitter.emit("kobe", {name: "kobe", age: 30});
      }
    }
  }
</script>

<style scoped>

</style>