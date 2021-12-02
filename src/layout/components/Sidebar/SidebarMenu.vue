<template>
  <el-menu
    :collapse="!$store.getters.sidebarOpened"
    :default-active="activeMenu"
    :unique-opened="true"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    router
  >
    <sidebar-item
      v-for="route of routes"
      :key="route.path"
      :route="route"
    ></sidebar-item>
  </el-menu>
</template>

<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { filterRouters, generateMenus } from "@/utils/route";
import SidebarItem from "./SidebarItem.vue";
const route = useRouter();
const routes = computed(() => {
  const filterRoutes = filterRouters(route.getRoutes());
  return generateMenus(filterRoutes);
});
const activeMenu = computed(() => {
  const { path } = useRoute();
  return path;
});
</script>

<style lang="scss" scoped></style>
