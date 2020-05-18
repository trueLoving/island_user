<template>
  <div class="chapter-container">
    <div class="chapter-title">
      <div class="chapter-title-inner">{{name}}</div>
    </div>
    <div class="chapter-content">
      <div>创建时间: {{created_at | parseTime}}</div>
      <div>更新时间: {{updated_at | parseTime}}</div>
      <div>题目总数: {{exercise_num}}</div>
    </div>
    <div class="chapter-button">
      <b-button variant="success" @click="start">开始刷题</b-button>
    </div>
  </div>
</template>
  
<script>
export default {
    name:'ChapterCard',
    props:{
      id:{
        props:{
          type:Number,
          required:true
        }
      },
      name:{
        type:String,
        default:''
      },
      created_at:{
        type:String,
        default:''
      },
      updated_at:{
        type:String,
        default:''
      },
      exercise_num:{
        type:Number,
        default:0
      }
    },
    methods:{
      start(){
        this.$router.push({path:'/answerArea',query:{id:this.id}});
      }
    }
}
</script>

<style scoped>
.chapter-container {
  width: 20vw;
  margin: 30px;
  box-shadow: 10px 10px 10px 10px gray;
  padding: 20px;
  border-radius: 6px;
  height: 30vh;
  background: #fff;
}
.chapter-title {
  height: 20%;
  text-align: center;
  position: relative;
}
.chapter-title-inner {
  /* position: absolute; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  font-size: 16px;
  font-weight: 400;
  font-family: sans-serif;
}
.chapter-content {
  height: 50%;
  padding: 10px;
}
.chapter-button {
  margin: 20px;
  height: 20%;
  text-align: right;
}
</style>