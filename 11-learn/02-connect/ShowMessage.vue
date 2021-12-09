<template>
  <div>
    <span @click="subadd" :class="{active: isActive}">{{ title }}</span>
  </div>
</template>

<script>
export default {
  emits: ['superadd'],
  props: ["title", 'isActive'],
  setup(props, context) {
    console.log(props.title)
    const subadd = (() => context.emit('superadd', props.title))
    return {
      subadd
    }
  }
};
</script>

<style scoped>
.active{
  color: red;
}
</style>