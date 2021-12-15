<template>
  <div>
    Son-{{ modelValue }}
    <button @click="fn">click</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
    },
  },
  setup(props, { emit }) {
    const fn = () => {
      emit("update:modelValue", props.modelValue - 10);
    };
    return { fn };
  },
};
</script>

<style lang="scss" scoped>
</style>