<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/index";

export default {
  components:{
    Navbar
  }
};
</script>

<style>
</style>