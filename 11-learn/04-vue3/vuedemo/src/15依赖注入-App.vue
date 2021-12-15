<template>
  <div>
    father {{ moneyFather }}
    <son></son>
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
    const moneyFather = ref(1000);
    provide("moneyFather", moneyFather);

    const changeMoney = (v) => {
      console.log("changeMoneyFather:" + v);
      moneyFather.value -= v;
    };
    provide("changeMoney", changeMoney);
    return {
      moneyFather,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>