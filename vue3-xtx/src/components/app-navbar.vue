<template>
<nav class="app-topnav">
  <div class="container">
    <ul>
      <li><a href="javascript:;">请先登录</a></li>
      <li><a href="javascript:;">我的订单</a></li>
      <li><a href="javascript:;">会员中心</a></li>
      <li><a href="javascript:;">帮助中心</a></li>
      <li><a href="javascript:;">关于我们</a></li>
      <li><a href="javascript:;">手机版</a></li>
    </ul>
  </div>
</nav>
</template>

<script setup>

</script>

<style lang="less" scoped>
.app-topnav{
  background-color: #333;
  ul{
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li{
      a{
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        &:hover{
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
