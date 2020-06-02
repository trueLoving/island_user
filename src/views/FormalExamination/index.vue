<template>
  <div class="problem-detail-container">
    <h2>题目总数:{{count}} <span class="time_word">剩余时间:<Timer ref="timer" @handleOver="handleOver"></Timer></span></h2>
    <hr style="border-bottom:2px solid black;" />
    <transition>
      <div>
        <span class="title">{{title}}</span>
        <div class="toolbar">
          <b-button variant="success" size="sm" @click="submit" style="margin:0 20px" v-if="currentIndex===count">提交试卷</b-button>
          <b-button variant="success" size="sm" @click="prev" style="margin:0 20px">上一题</b-button>
          <b-button variant="success" size="sm" @click="next" style="margin:0 20px">下一题</b-button>
        </div>
        <component v-bind:is="component" ref="component" @store="store"></component>
      </div>
    </transition>
  </div>
</template>

<script>
import { startExams,submitExam } from "@/api/exams.js";

import SingleChoiceQuestion from "./components/SingleChoiceQuestion";
import JudgeQuestion from "./components/JudgeQuestion";
import MultipleChoiceQuestion from "./components/MultipleChoiceQuestion";

import Timer from "./components/Timer";

function typeFilter(t){
  const types = {
    1:'SingleChoiceQuestion',
    2:'MultipleChoiceQuestion',
    3:'JudgeQuestion'
  }
  return types[t];
}


export default {
    name:'FormalExamination',
    data(){
      return{
        rows:[],
        record:[],
        count:'',
        exam_id:'',
        title:'',
        component:'',
        currentIndex:1
      }
    },
    components:{
      SingleChoiceQuestion,
      JudgeQuestion,
      MultipleChoiceQuestion,
      Timer
    },
    methods:{ 
      findRecord(item){

        let result = {};
        this.record.forEach(r=>{
          if(r.id===item.id){
            result  = r;
          }
        })
        return result;

      },
      change(step){
        
        this.currentIndex += step;
        this.title = `第${this.currentIndex}题`
        
        const item = this.rows[this.currentIndex-1];
        const record = this.findRecord(item);

        // 保存用户答案
        // 切换题目界面
        this.component = typeFilter(item.type);
        this.$nextTick(()=>{
          this.$refs.component.init(item,record)
        })

      },
      next(){
        if(this.currentIndex===this.count){
          this.$message({type:'info',text:'已经是第最后一题了'});
          return;
        }
        this.change(1);
      },
      prev(){
        if(this.currentIndex===1){
          this.$message({type:'info',text:'已经是第一题了'});
          return;
        }
        this.change(-1);
      },
      init(){
        this.title = `第${this.currentIndex}题`;
        this.change(0);
      },
      getList(){
        startExams(this.exam_id).then((res)=>{
          console.log(res);
          this.rows = res.data.rows;
          this.record = res.data.record;
          this.count = res.data.count;
          this.init();
        })  
      },
      submit(){
        // todo 请求后端
        submitExam(this.exam_id).then(res=>{
          this.$message({type:'success',text:'提交成功'});
          this.$router.push({path:'/registeredForExamination'});
        })
        // this.$message({type:'success',text:'提交成功'});
        // this.$router.push({path:'/registeredForExamination'});
      },
      handleOver(){
        this.$message({type:'info',text:'考试时间已经结束,将会自动交卷'});
        this.submit();
      },
      store(record){
        const index = this.record.findIndex(r=>r.id===record.id);
        index?this.record[index] = record:this.record.push(record);
      }
    },
    mounted(){
      this.exam_id = this.$route.query.exam_id;
      this.getList();
      this.$refs.timer.init(this.$route.query.start,this.$route.query.end);
    }
}
</script>

<style scoped>
.problem-detail-container {
  width: 80vw;
  margin: 40px auto;
  box-shadow: 10px 10px 10px 10px gray;
  padding: 20px;
  border-radius: 6px;
  height: 820px;
  background: #fff;
  overflow: auto;
  position: relative;
}
.title {
  font-size: 2rem;
}
.toolbar {
  float: right;
  margin: 0 20px;
}
.time_word{
  float: right;
  margin-right: 40px;
}
</style>