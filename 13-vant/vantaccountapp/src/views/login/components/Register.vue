<script setup lang="ts">
import { LoginAndRegParams } from "@/api/user";
import tools from "@/utils/tools";
import { Toast } from "vant";
import { ref, reactive } from "vue";

enum LeftIconType {
  CIRCLE = "circle",
  CHECKED = "checked",
  LOADING = "loading",
  CLEAR = "clear",
}

const emit = defineEmits<{
  (e: "toLogin", username: string): void;
}>();

const username = ref<string>("");
const password = ref<string>("");
const btnLoading = ref(false);
const showLeftIcon = reactive<{
  username: LeftIconType;
  password: LeftIconType;
}>({
  username: LeftIconType.CIRCLE,
  password: LeftIconType.CIRCLE,
});

const onSubmit = (values: LoginAndRegParams) => {
  console.log("submit", values);
  if (!values.username.trim()) {
    Toast.fail("请输入用户名");
    return;
  }
  if (!values.password.trim()) {
    Toast.fail("请输入密码");
    return;
  }
  emit("toLogin", username.value);
};

const changeLeftIcon = (
  val: string,
  type: "username" | "password",
  e?: Event
): boolean => {
  const isBlur = e?.type === "blur" || false;
  const result = tools.useCheckUsername(val);

  // const 
  if (result) {
    setTimeout(() => {
      showLeftIcon[type] = LeftIconType.CHECKED;
    }, 500);
  } else {
    if (val.length === 0) {
      showLeftIcon[type] = LeftIconType.CIRCLE;
    } else {
      showLeftIcon[type] =
        isBlur || val.length > 20 ? LeftIconType.CLEAR : LeftIconType.LOADING;
    }
  }
  return true;
};

const clickIcon = (type: "username" | "password") => {
  Toast(
    `数字、字母、下划线至少包含两种, ${
      type === "username"
        ? "长度：最短 4 个字符，最长 20 个字符"
        : "长度：最短 8 个字符，最长 20 个字符"
    }`
  )
}
</script>

<template>
  <van-form
    @submit="onSubmit"
    :readonly="btnLoading"
    validate-trigger="onSubmit"
    label-width="50px"
  >
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请输入用户名"
        clearable
        @blur="(e:Event) => changeLeftIcon(username, 'username', e)"
        :rules="[
        { required: true, message: '请填写用户名' },
        {
          validator: (val:string) => tools.useCheckUsername(val),
          message: '用户名格式错误',
        },
        {
          validator: (val:string) => changeLeftIcon(val, 'username'),
          trigger: 'onChange',
        }
        ]"
      >
        <template v-slot:left-icon>
          <van-loading
            v-if="showLeftIcon.username === 'loading'"
            size="20"
          ></van-loading>
          <van-icon v-else :name="showLeftIcon.username"></van-icon>
        </template>
        <template v-slot:right-icon>
          <van-icon name="info-o" @click="clickIcon('username')"></van-icon>
        </template>
      </van-field>
      <van-field
        v-model="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        clearable
        @blur="(e:Event) => changeLeftIcon(password, 'password', e)"
        :rules="[
        { required: true, message: '请填写密码' },
        {
          validator: (val:string) => tools.useCheckPassword(val),
          message: '密码格式错误',
        },
        {
          validator: (val:string) => changeLeftIcon(val, 'password'),
          trigger: 'onChange',
        }
        ]"
      >
        <template v-slot:left-icon>
          <van-loading
            v-if="showLeftIcon.password === 'loading'"
            size="20"
          ></van-loading>
          <van-icon v-else :name="showLeftIcon.password"></van-icon>
        </template>
         <template v-slot:right-icon>
          <van-icon name="info-o" @click="clickIcon('password')"></van-icon>
        </template>
      </van-field>
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        注册
      </van-button>
    </div>
  </van-form>
</template>

<style scoped lang="less"></style>
