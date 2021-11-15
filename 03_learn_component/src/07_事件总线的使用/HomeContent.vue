<template>
  <div>
  </div>
</template>

<script>
  import emitter from './utils/eventbus';
  import {WHY_EVENT} from   './utils/constants';

  export default {
    created() {
      emitter.on(WHY_EVENT, (info) => {
        console.log("why:", info);
      });

      emitter.on("kobe", (info) => {
        console.log("kobe:", info);
      });

      emitter.on("*", (type, info) => {
        console.log("* listener:", type, info);
      })
    }
  }
</script>

<style scoped>

</style>