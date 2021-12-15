<template>
  <div>
    Father-{{ count }}
    <!-- <son :modelValue="count" @update:modelValue="changeCount"></son> -->
    <!-- <son :modelValue="count" @update:modelValue="count = $event"></son> -->
    <!-- <son v-model:modelValue="count"></son> -->
    <son v-model="count"></son>
  </div>
</template>

<script>
import { provide, ref } from "vue";
import Son from "./Son.vue";
export default {
  components: {
    Son,
  },
  setup() {
    const count = ref(23);
    const changeCount = (v) => {
      console.log("changeCount");
      count.value = v;
    };
    return {
      count,
      changeCount,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>