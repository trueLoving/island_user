<template>
  <div class="judge-question-container">
    <p>{{item.content}}</p>
    <b-form-radio-group v-model="answer.user_answer">
      <b-form-radio value="正确">T</b-form-radio>
      <b-form-radio value="错误">F</b-form-radio>
      <b-button variant="success" size="sm" style="float:right" @click="storAnswer">查看答案</b-button>
    </b-form-radio-group>
  </div>
</template>

<script>

import mixins from '../mixins'


export default {
  name:'JudgeQuestion',
  mixins:[mixins],
  methods:{
    
  }
}
</script>

<style scoped>
.judge-question-container {
  margin: 20px;
  padding: 10px;
}
.analysis-container {
  margin: 60px 0;
  font-size: 16px;
  font-weight: 400;
  font-family: sans-serif;
}
.error {
  color: red;
}
.right {
  color: #28a745;
}
</style>