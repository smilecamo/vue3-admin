<template>
  <div class="app-wrapper">
    <!-- 左侧 -->
    <sidebar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    ></sidebar>
    <!-- 导航 -->
    <div class="main-container">
      <div class="fixed-header"><nav-bar></nav-bar></div>

      <!-- 内容 -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import variables from "@/assets/styles/variables.scss";
import Sidebar from "./components/Sidebar/index";
import AppMain from "./components/AppMain";
import NavBar from "./components/NavBar";
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/mixin.scss";
@import "~@/assets/styles/variables.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - $sideBarWidth);
  transition: width $sideBarDuration;
}

.hideSidebar .fixed-header {
  width: calc(100% - $hideSideBarWidth);
}
</style>
