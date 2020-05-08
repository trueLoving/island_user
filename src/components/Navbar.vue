<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand to="./home">旧岛</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="./home" :active="activeStatus[0]">主页</b-nav-item>
          <b-nav-item to="./exams" :active="activeStatus[1]">考试</b-nav-item>
          <b-nav-item to="./practices" :active="activeStatus[2]">刷题</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b-avatar variant="primary" :text="name" v-if="isLogin"></b-avatar>
              <span v-else>用户</span>
            </template>
            <div v-if="isLogin">
              <b-dropdown-item href="#">个人中心</b-dropdown-item>
              <b-dropdown-item href="#">退出</b-dropdown-item>
            </div>
            <b-dropdown-item href="#" v-else>登录</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["isLogin", "name"])
  },
  data() {
    return {
      activeStatus: [true, false, false]
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        const { i } = route.meta;
        this.activeStatus = this.activeStatus.map((_, index) =>
          index == i ? true : false
        );
      },
      immediate: true
    }
  },
  methods: {
    handleRouteChange(i) {}
  }
};
</script>

<style>
</style>