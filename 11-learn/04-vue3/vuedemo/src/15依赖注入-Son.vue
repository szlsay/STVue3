<template>
  <div>
    son-{{ title }}

    <button @click="change">click</button>
    <button @click="changeMoney">changeMoney</button>
    {{ money }}
    {{ moneyF }}
    <grand-son></grand-son>
  </div>
</template>

<script>
import { inject } from "vue";
import GrandSon from "./GrandSon.vue";
export default {
  components: {
    GrandSon,
  },
  props: {
    title: {
      type: String,
      require: true,
    },
    money: {
      type: Number,
    },
  },
  setup(props, { emit }) {
    console.log(props);
    const change = () => {
      emit("sonClick", 10);
    };
    const changeMoney = () => {
      emit("update:money", props.money + 10);
    };

    const moneyF = inject("moneyFather");
    console.log("moneyFather:" + moneyF);
    return { change, changeMoney, moneyF };
  },
};
</script>

<style lang="scss" scoped>
</style>