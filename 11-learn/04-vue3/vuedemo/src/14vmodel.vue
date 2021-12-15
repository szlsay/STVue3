<template>
  <div>
    father
    <hr />
    <!-- <son></son>
    <Son :title="titleF" @sonClick="clickF"></Son> -->
    <!-- <Son :money="moneyF" @update:money="moneyChange"></Son> -->
    <Son v-model:money="money"></Son>
  </div>
</template>

<script>
import { ref } from "vue";
import Son from "./Son.vue";
export default {
  setup() {
    const titleF = ref("father title");
    const clickF = (v) => {
      console.log(v);
    };

    // const moneyF = ref(100);
    // const moneyChange = (v) => {
    //   moneyF.value = v;
    // };

    const money = ref(100);
    const updatemoney = (v) => {
      money.value = v;
    };
    return {
      titleF,
      clickF,
      // moneyF,
      // moneyChange,
      money,
      updatemoney,
    };
  },
  components: {
    Son,
  },
};
</script>

<style lang="scss" scoped>
</style>