<template>
  <div class="sidebar-container">
    <SidebarItem
      v-for="(route,index) in routes"
      :key="index"
      :text="route.meta.text"
      :link="route.path"
      :isActive="route.meta.isActive"
    ></SidebarItem>
  </div>
</template>

<script>
import  personCenterRoutes from "@/router/module/personCenterRoutes";
import SidebarItem from "./SidebarItem";

export default {
  name:'Sidebar',
  components: {
    SidebarItem
  },
  data() {
    return {
      routes: []
    };
  },
  watch: {
    $route: {
      handler(route) {
        this.routes.forEach(r => {
          r.meta.isActive = r.meta.text === route.meta.text;
        });
      },
      immediate: true
    }
  },
  mounted() {
    const route = this.$route;
    this.routes = personCenterRoutes.map(r => {
      r.meta.isActive = r.meta.text === route.meta.text;
      return r;
    });
  }
};
</script>

<style scoped>
.sidebar-container {
  float: left;
  width: 23%;
  height: 88vh;
  background: #fff;
  border-radius: 6px;
  box-shadow: 6px 6px 6px 6px gray;
  overflow: auto;
}
</style>