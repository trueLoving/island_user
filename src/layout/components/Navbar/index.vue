<template>
  <div>
    <!-- navbar组件 -->
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand to="./home">旧岛</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-if="isLogin">
          <b-nav-item to="/home" :active="activeStatus[0]">主页</b-nav-item>
          <b-nav-item to="/exams" :active="activeStatus[1]">考试</b-nav-item>
          <b-nav-item to="/Exercises" :active="activeStatus[2]">刷题</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b-avatar variant="primary" :text="name" v-if="isLogin"></b-avatar>
              <span v-else>用户</span>
            </template>
            <div v-if="isLogin">
              <b-dropdown-item to="/personCenter">个人主页</b-dropdown-item>
              <b-dropdown-item href="#" @click="$bvModal.show('logout')">退出</b-dropdown-item>
            </div>
            <div v-else>
              <b-dropdown-item href="#" @click="$refs.LoginForm.openModel()">登录</b-dropdown-item>
              <b-dropdown-item href="#" @click="$refs.RegisterForm.openModel()">注册</b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- 登录表单组件 -->
    <LoginForm ref="LoginForm" />
    <!-- 注册表单组件 -->
    <RegisterForm ref="RegisterForm" />

    <b-modal id="logout" title="退出" ok-title="确定" cancel-title="取消" @ok="logout">
      <p>此行为会退出当前用户,是否继续</p>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

export default {
  name: "Navbar",
  components: {
    LoginForm,
    RegisterForm
  },
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
    logout() {
      // todo 
      this.$store.dispatch("user/logout").then(res => {
        this.$router.push({ path: "/" });
      });
    }
  }
};
</script>

<style>
</style>