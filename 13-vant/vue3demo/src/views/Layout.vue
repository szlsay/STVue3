<template>
  <div class="layout-page">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/goods" icon="search">商品</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="friends-o"
        >会员中心</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "layout-page",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  setup() {},
};
</script>

<style lang="less" scoped>
</style>