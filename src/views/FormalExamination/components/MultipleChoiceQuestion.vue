<template>
  <div class="choice-question-container">
    <div v-html="item.content"></div>
    <b-form-group>
      <b-form-checkbox-group v-model="record.user_answer">
        <b-form-checkbox value="A">A</b-form-checkbox>
        <b-form-checkbox value="B">B</b-form-checkbox>
        <b-form-checkbox value="C">C</b-form-checkbox>
        <b-form-checkbox value="D">D</b-form-checkbox>
        <b-form-checkbox value="E">E</b-form-checkbox>
        <b-button variant="success" size="sm" style="float:right" @click="storeAnswer">保存答案</b-button>
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
      if(this.record.user_answer){
        this.record.user_answer =  this.record.user_answer.split('');
      }else{
         this.record.user_answer = [];
      }    
    }
  }
}
</script>

<style scoped>
.choice-question-container {
  margin: 20px;
  padding: 10px;
}

</style>