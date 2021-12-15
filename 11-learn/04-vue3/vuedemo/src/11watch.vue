<template>
  <div>
    <div>{{ count }}</div>
    <button @click="add">click-count</button>
    <hr />
    <div>{{ name }}:{{ age }}</div>
    <button @click="change">click-obj</button>
  </div>
</template>

<script>
import { computed, reactive, ref, toRefs, watch } from "vue";
export default {
  setup() {
    const count = ref(18);
    const add = () => {
      count.value++;
    };
    watch(count, (new1, old1) => {
      console.log("count-watch new1:", new1, ";old1:", old1);
    });

    const obj = reactive({
      name: "st",
      age: 18,
      brand: {
        id: 1,
        name: "yuyu",
      },
      infos: [{ id: 1, name: "yuyu" }],
    });
    const change = () => {
      // obj.age++;
      obj.brand.name = "ttt";
      // obj.infos[0].name = "ttt";
    };
    watch(
      obj,
      (new1, old1) => {
        console.log("obj-watch new1:", new1, ";old1:", old1);
      },
      {
        // deep: true,
        immediate: true,
      }
    );

    // watch([count, obj], (new1, old1) => {
    //   console.log("more new1:", new1, ";old1:", old1);
    // });

    // watch(
    //   () => obj.age,
    //   (new1, old1) => {
    //     console.log("obj.age-watch new1:", new1, ";old1:", old1);
    //   }
    // );

    watch(
      () => obj.brand,
      (new1, old1) => {
        console.log("obj.brand-watch new1:", new1, ";old1:", old1);
      },
      {
        deep: true,
      }
    );

    return {
      count,
      add,
      ...toRefs(obj),
      change,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>