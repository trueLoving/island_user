<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand>旧岛</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="./home" @click="handleNavBarItemEClick(0)" :active="activeStatus[0]">主页</b-nav-item>
          <b-nav-item to="./exams" @click="handleNavBarItemEClick(1)" :active="activeStatus[1]">考试</b-nav-item>
          <b-nav-item to="./practices" @click="handleNavBarItemEClick(2)" :active="activeStatus[2]">刷题</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>用户</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{
      activeStatus:[true,false,false]
    }
  },
  watch:{
    $route:{
      handler:function(route){
        console.log(route);
      },
      immediate:true
    }
  },
  methods: {
    handleNavBarItemEClick(id) {
      this.activeStatus = this.activeStatus.map((_,index)=>index==id?true:false);
    }
  }
};
</script>

<style>
</style>