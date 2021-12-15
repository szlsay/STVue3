<template>
  <div>
    {{ name }}
    <button @click="change">click</button>
    {{ data }}
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("haha");
    const change = () => {
      name.value = "st";
    };

    const data = ref(null);
    setTimeout(() => {
      data.value = { name: "st", age: 18 };
    }, 3000);
    return {
      name,
      change,
      data,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>