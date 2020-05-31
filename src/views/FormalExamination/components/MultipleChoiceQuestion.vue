<template>
  <div class="choice-question-container">
    <p>{{item.content}}</p>
    <b-form-group>
      <b-form-checkbox-group v-model="record.user_answer">
        <b-form-checkbox value="A">A</b-form-checkbox>
        <b-form-checkbox value="B">B</b-form-checkbox>
        <b-form-checkbox value="C">C</b-form-checkbox>
        <b-form-checkbox value="D">D</b-form-checkbox>
        <b-form-checkbox value="E">E</b-form-checkbox>
        <b-button variant="success" size="sm" style="float:right" @click="storAnswer">保存答案</b-button>
      </b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>

import mixins from '../mixins'


export default {
  name:'MultipleChoiceQuestion',
  mixins:[mixins],
  methods:{
    init(item, record) {
      this.item = JSON.parse(JSON.stringify(item));
      this.record = JSON.parse(JSON.stringify(record));
      this.record.user_answer =  this.record.user_answer.split('');
    }
  }
}
</script>

<style scoped>
.choice-question-container {
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