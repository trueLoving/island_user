<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
    <LoadWrapper v-if="isLoading" />
  </div>
</template>

<script>

import LoadWrapper from "@/components/LoadWrapper";

export default {
  components:{
    LoadWrapper
  },
  name: 'App',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true,
      isLoading:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(()=>{
        this.isRouterAlive = true;
      })
    }
  },
  mounted(){
    this.isLoading = false;
  }
}
</script>
