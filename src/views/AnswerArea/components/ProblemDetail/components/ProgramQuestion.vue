<template>
  <div>
    <div class="content">题目内容....................</div>
    <CodeEditor/>
  </div>
</template>

<script>

import CodeEditor from "@/components/CodeEditor";

export default {
    name:'ProgramQuestion',
    components:{
      CodeEditor
    }
}
</script>

<style>
</style>