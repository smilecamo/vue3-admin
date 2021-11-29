<template>
  <div class="login-container">
    <el-form class="login-from" :model="loginData" :rules="loginRules">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!-- username -->
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
        </span>
        <el-input
          placeholder="username"
          name="username"
          type="text"
          v-model="loginData.username"
        ></el-input>
      </el-form-item>
      <!-- password -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password"></svg-icon>
        </span>
        <el-input
          placeholder="password"
          name="password"
          :type="passwordStatus ? 'password' : 'text'"
          v-model="loginData.password"
        ></el-input>
        <span class="show-pwd" @click="passwordStatusChange">
          <span class="svg-container">
            <svg-icon :icon="passwordStatus ? 'eye' : 'eye-open'"></svg-icon>
          </span>
        </span>
      </el-form-item>
      <el-button type="primary" style="width: 100%; margin-bottom: 30px"
        >登录按钮</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { validatePassword } from "./rules";
import { reactive, ref } from "vue";
const loginData = reactive({
  username: "super-name",
  password: 123456,
});
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: "blur",
      message: "请输入用户名",
    },
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      validator: validatePassword(),
    },
  ],
});
// 处理密码框文本展示
const passwordStatus = ref(true);
// 改变文本框的方法
const passwordStatusChange = () => {
  passwordStatus.value = !passwordStatus.value;
};
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  display: flex;
  justify-content: center;
  .login-from {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    overflow: hidden;
    ::v-deep .el-form-item {
      display: flex;
      align-items: center;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      .el-form-item__content {
        display: flex;
        align-items: center;
        input {
          background: transparent;
          border: none;
          border-radius: 0px;
          padding: 12px 5px;
          color: $light_gray;
          caret-color: $cursor;
        }
      }
    }
    ::v-deep ex-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
      color: #fff;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
