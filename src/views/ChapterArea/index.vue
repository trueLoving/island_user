<template>
  <div class="chapter-area-container">
    <div id="tip">
      <h2>暂无内容</h2>
    </div>
    <ChapterCard
      v-for="(item,index) in chapters"
      :key="index"
      :id="item.id"
      :name="item.name"
      :exercise_num="item.exercise_num"
      :created_at="item.created_at"
      :updated_at="item.updated_at"
    />
  </div>
</template>

<script>

import * as api from "@/api/chapter.js";

import ChapterCard from "./components/ChapterCard";

export default {
    name:'ChapterArea',
    components:{
      ChapterCard
    },
    data(){
      return{
        chapters:[]
      }
    },
    mounted(){
      const { id } = this.$route.query;
      api.getChapters(id).then((res)=>{
        this.chapters = res.data;
        const tip = document.getElementById('tip');
        this.chapters.length==0?tip.style.display='block':'';
      })
    }
}
</script>

<style scoped>
.chapter-area-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
#tip{
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: rgba(0, 0, 0, 0.49);
  font-size: 45px;
}
</style>