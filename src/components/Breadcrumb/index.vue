<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in routeList" :key="item.path">
        <span class="no-redirect" v-if="index === routeList.length - 1">
          {{ item.meta.title }}
        </span>
        <span
          class="redirect"
          v-else
          :to="item.path"
          @click="handleClick(item)"
        >
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from "vue";

import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
const routeList = ref([]);
const route = useRoute();
const router = useRouter();
// 通过 route.matched 获取当前的路由
const getBreadcrumbData = () => {
  routeList.value = route.matched.filter((item) => {
    return item.meta && item.meta.title;
  });
};
// 监听路由的变化
watch(
  route,
  () => {
    getBreadcrumbData();
    console.log(routeList.value);
  },
  {
    immediate: true,
  }
);
// 点击跳转
const handleClick = (item) => {
  console.log(item);
  router.push(item.path);
};
//  linkHoverColor
// 获取主题的颜色
const store = useStore();
const linkHoverColor = ref(store.getters.cssVar.menuBg);
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  width: 300px;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .redirect {
    color: #666;
    font-weight: 600;
    cursor: pointer;
  }

  .redirect:hover {
    // 将来需要进行主题替换，所以这里不去写死样式
    color: v-bind(linkHoverColor);
  }

  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
