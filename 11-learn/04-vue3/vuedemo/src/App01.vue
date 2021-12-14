<template>
  <div>
    <div>x轴：{{ x }}</div>
    <div>y轴：{{ y }}</div>
    <div>count: {{count}}
        <button @click="add">增加</button>
    </div>
  </div>
</template>

<script>
  import { ref } from "vue";

  export default {
    setup() {
      const x = ref(0);
      const y = ref(0);
      const count = ref(0);
      const move = (e) => {
        // console.log(e);
        x.value = e.pageX
        y.value = e.pageY
      };
      const add = () => count.value++
      return { x, y, move, count,  add};
    },
    mounted() {
      console.log("mounted");
      document.addEventListener('mousemove', this.move);
    },
    destroyed() {
        document.removeEventListener('mousemove', this.move)
    },
  };
</script>

<style lang="scss" scoped></style>
