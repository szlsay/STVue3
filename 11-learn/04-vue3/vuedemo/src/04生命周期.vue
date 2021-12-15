<template>
  <div>
    {{ msg }}
    <button @click="change">click</button>
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from "vue";
export default {
  setup() {
    console.log("setup:" + this);
    const msg = ref(123);
    onBeforeMount(() => {
      console.log("onBeforeMount:" + this);
    });
    onMounted(() => {
      console.log("onMounted:" + this);
    });
    onMounted(() => {
      console.log("onMounted:" + this);
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate:" + this);
    });
    onUpdated(() => {
      console.log("onUpdated:" + this);
    });
    const change = () => {
      msg.value = 456;
    };
    return { msg, change };
  },
  beforeCreate() {
    console.log("beforeCreate:");
  },
  created() {
    console.log("created:");
  },
  beforeMount() {
    console.log("beforeMount:");
  },
  mounted() {
    console.log("mounted:");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
};
</script>

<style lang="scss" scoped>
</style>