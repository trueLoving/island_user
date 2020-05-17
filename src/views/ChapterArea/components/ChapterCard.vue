<template>
  <div class="chapter-container">
    <div class="chapter-title">
      <div class="chapter-title-inner">
        <h4>章节标题</h4>
      </div>
    </div>
    <div class="chapter-content">章节内容</div>
    <div class="chapter-button">
      <b-button variant="success" @click="start">开始刷题</b-button>
    </div>
  </div>
</template>
  
<script>
export default {
    name:'ChapterCard',
    data(){
      return{

      }
    },
    methods:{
      start(){
        this.$router.push({path:'/answerArea'})
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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