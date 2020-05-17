<template>
  <div class="chapter-area-container">
    <ChapterCard v-for="i in 8" :key="i"/>
  </div>
</template>

<script>

import ChapterCard from "./components/ChapterCard";

export default {
    name:'ChapterArea',
    components:{
      ChapterCard
    }
}
</script>

<style scoped>
.chapter-area-container {
  display: flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content: center;
}
</style>