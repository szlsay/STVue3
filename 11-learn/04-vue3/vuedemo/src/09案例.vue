<template>
  <div>
    <div>x轴：{{ x }}</div>
    <div>y轴：{{ y }}</div>
    <div>
      count: {{ count }}
      <button @click="add">增加</button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
import { onMounted, onUnmounted } from "vue";
const useMouse = () => {
  const mouse = reactive({
    x: 0,
    y: 0,
  });
  const move = (e) => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  };
  onMounted(() => {
    document.addEventListener("mousemove", move);
  });
  onUnmounted(() => {
    document.removeEventListener("mousemove", move);
  });
  return mouse;
};

export default {
  setup() {
    const mouse = useMouse();
    const count = ref(0);
    const add = () => count.value++;
    return {
      ...toRefs(mouse),
      count,
      add,
    };
  },
};
</script>

<style lang="scss" scoped></style>
