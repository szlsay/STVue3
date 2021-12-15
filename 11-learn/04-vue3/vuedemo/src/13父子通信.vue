<template>
  <div>
    father
    <hr />
    <son></son>
    <Son :title="titleF" @sonClick="clickF"></Son>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Son from "./Son.vue";
export default {
  setup() {
    const titleF = ref("father title");
    const clickF = (v) => {
      console.log(v);
    };
    return {
      titleF,
      clickF,
    };
  },
  components: {
    Son,
  },
};
</script>

<style lang="scss" scoped>
</style>