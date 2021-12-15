<template>
  <div>
    {{ name }}
    <button @click="change">click</button>
  </div>
</template>

<script>
import { reactive, ref, toRef, toRefs } from "vue";
export default {
  setup() {
    const obj = reactive({
      name: "obj",
      age: 111,
    });

    // 1. 响应式转成值，
    console.log(obj);
    console.log("------------");
    const { name, age } = obj;
    console.log(name, age);
    console.log("------------");
    const objtemp = { ...obj };
    console.log(objtemp);
    console.log(objtemp.name, objtemp.age);

    // 2.值转响应式
    console.log("------------");
    const objR = reactive(objtemp);
    console.log(objR);

    // 3.响应式字段
    console.log("------------");
    const objRef = toRefs(obj);
    console.log(objRef);
    console.log(objRef.name);
    console.log(objRef.age);

    const change = () => {
      objRef.name.value = "st";
      // objRef.name = "st"; //无效
    };
    return {
      ...objRef,
      change,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>