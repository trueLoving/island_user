<template>
  <div>
    <Navbar />
    <div class="app-main">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/index";

export default {
  components: {
    Navbar
  }
};
</script>


<style scoped>
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