<template>
  <div>
    {{ name }}
    <button @click="change">click</button>
  </div>
</template>

<script>
import { reactive, toRef } from "vue";
export default {
  setup() {
    const obj = reactive({
      name: "obj",
      age: 111,
    });

    // 不是响应式
    // const name = obj.name;
    // let { name } = obj;

    const name = toRef(obj, "name");
    
    const change = () => {
      // name = "st";
      name.value = "st";
    };
    return {
      name,
      change,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>