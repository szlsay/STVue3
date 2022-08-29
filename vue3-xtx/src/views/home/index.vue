<template>
  <!-- 首页入口 -->
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <home-category></home-category>
      <!-- 轮播图 -->
      <HomeBanner />
    </div>
  </div>
</template>

<script setup>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
</script>

<style lang="less" scoped>

</style>
