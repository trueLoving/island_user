<template>
  <div class="problem-list-container">
    <h2>题目列表</h2>
    <hr style="border-bottom:2px solid black;" />
  </div>
</template>

<script>
export default {
    name:'ProblemList',
    data(){
        return{

        }
    }   
}
</script>

<style scoped>
.problem-list-container {
  float: left;
  width: 26vw;
  margin: 50px 60px 0;
  box-shadow: 10px 10px 10px 10px gray;
  padding: 20px;
  border-radius: 6px;
  height: 820px;
  background: #fff;
  overflow: hidden;
}
</style>