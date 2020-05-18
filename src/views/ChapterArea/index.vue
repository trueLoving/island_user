<template>
  <div class="chapter-area-container">
    <ChapterCard v-for="(item,index) in chapters" 
      :key="index" 
      :name="item.name" 
      :exercise_num="item.exercise_num"  
      :created_at="item.created_at" 
      :updated_at="item.updated_at"/>
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
</style>