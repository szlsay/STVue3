<template>
  <div>
    {{ obj.name }}
    {{ obj.age }}
    <hr />
    {{ name }}
    {{ age }}
    <hr />
    {{ objST }}
    <hr />
    {{ objST.name }}
    {{ objST.age }}
    <button @click="change">click</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const obj = reactive({
      name: "obj",
      age: 111,
    });
    const objST = {
      name: "objST",
      age: 111,
    };
    const change = () => {
      obj.age = 333;
      objST.age = 222;
    };
    return {
      obj,
      objST,
      change,
      ...toRefs(obj),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>