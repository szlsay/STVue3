<script setup lang="ts">
import { ref } from "vue";
import { login, LoginAndRegParams } from "@/api/user";
import { Toast } from "vant";
import tools from '@/utils/tools'
const username = ref("");
const password = ref("");
const btnloading = ref(false)
const onSubmit = async (values: LoginAndRegParams) => {
  console.log("submit", values);
  if(!values.username.trim()) {
    Toast.fail("请输入用户名")
    return
  }
  if (!values.password.trim()){
    Toast.fail("请输入密码")
    return
  }
  btnloading.value = true
  try {
    let {data, message} = await login(values);
    console.log("data:", data)
  } catch (error) {
    console.log("error:", error)
  } finally {
    btnloading.value = false
  }
  
};
</script>

<template>
  <div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[
          { required: true, message: '请填写用户名' },
          {
            validator: (val: string) => tools.useCheckUsername(val),
            message: '用户名格式错误',
          }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          clearable
          :rules="[{ required: true, message: '请填写密码' },
          {
            validator: (val: string) => tools.useCheckPassword(val),
            message: '密码格式错误',
          }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit" :loading="btnloading">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped lang="less">
</style>