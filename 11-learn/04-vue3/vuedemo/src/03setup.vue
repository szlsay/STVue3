<template>
  <div>
    {{ msg }}
    <button @click="say">click</button>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    console.log("setup:" + this);
    const msg = "hello,st";
    onMounted(() => {
      console.log("onMounted:" + this);
      msg = "hello,123"; //Uncaught TypeError: Assignment to constant variable.
    });
    const say = () => {
      console.log("say");
    };
    return { msg, say };
  },
  beforeCreate() {
    console.log("beforeCreate:");
  },
  created() {
    console.log("created:");
  },
  mounted() {
    console.log("mounted:");
  },
};
</script>

<style lang="scss" scoped>
</style>