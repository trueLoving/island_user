<template>
  <div class="choice-question-container">
    <div v-html="item.content"></div>
    <b-form-radio-group v-model="answer">
      <b-form-radio value="A">A</b-form-radio>
      <b-form-radio value="B">B</b-form-radio>
      <b-form-radio value="C">C</b-form-radio>
      <b-form-radio value="D">D</b-form-radio>
      <b-button variant="success" size="sm" style="float:right" @click="checkAnswer">查看答案</b-button>
    </b-form-radio-group>
    <div class="analysis-container" v-if="isShow">
      <div>答案: {{item.answer}}</div>
      <div>
        回答情况:
        <span class="right" v-if="answer==item.answer">正确</span>
        <span class="error" v-else>错误</span>
      </div>
      <span>解析:</span>
      {{item.analysis}}
    </div>
  </div>
</template>

<script>
export default {
  name:'ChoiceQuestion',
  props:{
    item:{
      type:Object,
      required:true
    }
  },
  data(){
    return{
      answer:'',
      isShow:false
    }
  },
  methods:{
    checkAnswer(){
      if(this.answer==""){
        this.$message({type:'info',text:'请填写答案'});
        return
      }
      this.isShow = true;
    },
    init(){
      this.answer = '';
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