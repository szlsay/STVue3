<template>
  <div>
    GrandSon - {{ moneyF }}
    <button @click="fn">click</button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const moneyF = inject("moneyFather");
    console.log("moneyFather:" + moneyF);
    const changeMoney = inject("changeMoney");
    const fn = () => {
      changeMoney(10)
    }
    return { moneyF, fn };
  },
};
</script>

<style lang="scss" scoped>
</style>