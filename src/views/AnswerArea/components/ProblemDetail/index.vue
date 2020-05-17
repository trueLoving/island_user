<template>
  <div class="problem-detail-container">
    <h2>题目详情</h2>
    <hr style="border-bottom:2px solid black;" />
    <!-- <div class="toolbar">
      <b-button variant="success" class="next-button">下一题</b-button>
      <b-button variant="success" class="pre-button">上一题</b-button>
    </div> -->
    <ChoiceQuestion />
  </div>
</template>

<script>

import ChoiceQuestion from './components/ChoiceQuestion'

export default {
    name:'ProblemDetail',
    components:{
      ChoiceQuestion
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.problem-detail-container {
  float: right;
  width: 63vw;
  margin: 50px 40px 0;
  box-shadow: 10px 10px 10px 10px gray;
  padding: 20px;
  border-radius: 6px;
  height: 820px;
  background: #fff;
  overflow: auto;
}
.toolbar {
  /* 开启BFC 清除浮动带来的影响 */
  overflow: hidden;
}
.pre-button,
.next-button {
  float: right;
  margin: 20px;
}
.problem-detail-content {
  border: 1px solid red;
  margin: 20px;
}
</style>