<template>
  <section class="app-main">
    <Navbar />
    <transition name="fade">
      <router-view />
    </transition>
  </section>
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
  transition: all .5s ease;
}
.fade-enter-leave-active {
  transition: all .8s ease;
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