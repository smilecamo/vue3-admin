<template>
  <el-sub-menu
    v-if="route.children && route.children.length > 0"
    :index="route.path"
  >
    <template #title>
      <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
    </template>
    <SidebarItem
      v-for="item of route.children"
      :key="item.path"
      :route="item"
    ></SidebarItem>
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
  </el-menu-item>
</template>

<script setup>
import MenuItem from "./MenuItem.vue";
import { defineProps } from "vue";
const props = defineProps({
  route: {
    type: Object,
    required: true,
  },
});
console.log(props.route);
</script>

<style lang="scss" scoped></style>
