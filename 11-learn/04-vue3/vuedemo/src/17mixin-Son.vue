<template>
  <div class="contont-son">
    Son
    <h2>
      作者：周杰伦
      <button @click="followFn">{{ loading ? "loading..." : "关注" }}</button>
    </h2>
  </div>
</template>

<script>
import { followMixin } from "./mixins";
export default {
  mixins: [followMixin],
};
</script>

<style lang="scss" scoped>
</style>