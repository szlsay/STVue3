<template>
  <div class="contont-app">
    App
    <h1>
      作者：周杰伦
      <a href="javascript:;" @click="followFn">{{
        loading ? "请求中..." : "关注"
      }}</a>
    </h1>
    <son></son>
  </div>
</template>

<script>
import { followMixin } from "./mixins";
import Son from "./Son.vue";

export default {
  components: {
    Son,
  },
  mixins: [followMixin],
};
</script>
