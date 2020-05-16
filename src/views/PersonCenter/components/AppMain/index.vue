<template>
  <div class="app-container">
    <PageHeader :text="text" />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>

import PageHeader from "./PageHeader";

export default {
  name:"AppMain",
  components: {
    PageHeader
  },
  data() {
    return {
      text: "个人中心"
    };
  },
   watch: {
    $route: {
      handler(route) {
        this.text = route.meta.text;
      },
      immediate: true
    }
  },
};
</script>

<style scoped>
.app-container {
  float: right;
  width: 75%;
  height: 88vh;
  background: #fff;
  border-radius: 6px;
  box-shadow: 6px 6px 6px 6px gray;
  overflow: auto;
}
.app-main {
  margin: 20px;
  border: 10px solid red;
  height: 700px;
  width: 100%;
}
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-enter-leave-active {
  transition: all 0.8s ease;
}
.fade-enter {
  transform: translateX(-20px);
  opacity: 0;
}
.fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>