<template>
<header class="app-header">
  <div class="container">
    <h1 class="logo"><router-link to="/">小兔鲜</router-link></h1>
    <AppHeaderNav></AppHeaderNav>
  </div>
</header>
</template>

<script setup>
import AppHeaderNav from './app-header-nav.vue'

</script>

<style lang="less" scoped>
.app-header{
  background-color: #fff;
  .container{
    display: flex;
    align-items: center;
  }
  .logo{
    width: 200px;
    a{
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url(../assets/images/logo.png) no-repeat center 18px / contain;
    }
  }
}
</style>
