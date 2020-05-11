<template>
  <div class="personCenter-container">
    <b-container fluid>
      <div class="sidebar-container">
        <SidebarItem text="个人中心" />
        <SidebarItem text="历史习题" />
        <SidebarItem text="历史考试" />
        <SidebarItem text="错题集" />
      </div>
      <div class="app-container"></div>
    </b-container>
  </div>
</template>

<script>
import SidebarItem from "./components/SidebarItem";

export default {
  name: "PersonCenter",
  components: {
    SidebarItem
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.personCenter-container {
  width: 95vw;
  margin: 10px auto;
  padding: 20px;
  border-radius: 6px;
  height: 820px;
}
.sidebar-container {
  float: left;
  width: 23%;
  height: 750px;
  background: #fff;
}
.app-container {
  float: right;
  width: 75%;
  height: 750px;
  background: #fff;
}
</style>