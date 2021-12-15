<template>
  <div>
    <div>今年：{{ age }}</div>
    <div>明年：{{ agenext }}</div>
    <input type="text" v-model="agenext" />
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const age = ref(18);
    // const agenext = computed(() => {
    //   return age.value + 1;
    // });
    const agenext = computed({
      get() {
        return age.value + 1;
      },
      set(value) {
        console.log(value);
        age.value = value - 1;
      },
    });
    return {
      age,
      agenext,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>