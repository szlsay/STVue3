<template>
  <div>
    <div ref="box">box</div>
    <ul>
      <li v-for="i in 4" :key="i" :ref="setDom">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { onMounted } from "vue";
export default {
  setup() {
    const box = ref(null);
    const domList = [];
    const setDom = (el) => {
      domList.push(el);
    };

    onMounted(() => {
      console.log("onMounted");
      console.log(box);
      console.log(box.value);
      box.value.innerText = "st";

      console.log(domList);
    });
    return { box, setDom };
  },
  mounted() {
    console.log("mounted");
    console.log(this.$refs.box);
  },
};
</script>

<style lang="scss" scoped>
</style>