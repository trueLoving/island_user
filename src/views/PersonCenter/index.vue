<template>
  <div class="personCenter-container">
    <Sidebar />
    <AppMain />
  </div>
</template>

<script>
import AppMain from "./components/AppMain";
import Sidebar from "./components/Sidebar";

export default {
  name: "PersonCenter",
  components: {
    Sidebar,
    AppMain
  }
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
</style>