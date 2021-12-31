<script setup lang="ts">
import { ref } from "vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

const activeTab = ref("login")
</script>

<template>
  <div class="wrapper">
    <van-cell-group inset class="main">
        <van-tabs v-model:active="activeTab">
          <van-tab title="登录" name="login">
            <Login></Login>
          </van-tab>
          <van-tab title="注册" name="register">注册</van-tab>
        </van-tabs> 
    </van-cell-group>

  </div>
</template>

<style scoped lang="less">
.wrapper {
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/login_background.jpeg");
  background-size: 100% 100%;
  padding-top: 25vh;
}

.main{
  min-height: 30vh;
  margin: 10px;
}
</style>