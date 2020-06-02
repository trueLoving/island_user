<template>
  <div class="choice-question-container">
    <div v-html="item.content"></div>
    <b-form-group>
      <b-form-checkbox-group v-model="answers">
        <b-form-checkbox value="A">A</b-form-checkbox>
        <b-form-checkbox value="B">B</b-form-checkbox>
        <b-form-checkbox value="C">C</b-form-checkbox>
        <b-form-checkbox value="D">D</b-form-checkbox>
        <b-form-checkbox value="E">E</b-form-checkbox>
        <b-button variant="success" size="sm" style="float:right" @click="checkAnswer">查看答案</b-button>
      </b-form-checkbox-group>
    </b-form-group>
    <div class="analysis-container" v-if="isShow">
      <div>答案: {{item.answer}}</div>
      <div>
        回答情况:
        <span class="right" v-if="answers.join('')==item.answer">正确</span>
        <span class="error" v-else>错误</span>
      </div>
      <span>解析:</span>
      {{item.analysis}}
    </div>
  </div>
</template>

<script>
export default {
  name:'MultipleChoiceQuestion',
  props:{
    item:{
      type:Object,
      required:true
    }
  },
  data(){
    return{
      answers:[],
      isShow:false
    }
  },
  methods:{
    checkAnswer(){
      this.isShow  = true;
    },
    init(){
      this.answers = [];
      this.isShow = false;
    }
  },
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