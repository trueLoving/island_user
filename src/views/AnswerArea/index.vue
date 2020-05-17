<template>
  <div class="answer-area-container">
    <ProblemList/>
    <ProblemDetail/>
  </div>
</template>

<script>

import ProblemList from "./components/ProblemList";
import ProblemDetail from "./components/ProblemDetail";

export default {
  name: "AnswerArea",
  components:{
    ProblemList,
    ProblemDetail
  },
  data(){
    return{
      
    }
  }
};
</script>

<style>
</style>