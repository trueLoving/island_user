<template>
  <div class="problem-list-item-container" @click="publish">
    <span class="problem-title">第{{index}}题 &nbsp;&nbsp;&nbsp; 题目类型:{{item.type | typeFilter}}</span>
  </div>
</template>

<script>

import PubSub from "pubsub-js";

export default {
  name:'ProblemListItem',
  filters:{
    typeFilter(t){
      const types = {
        1:'单选题',
        2:'多选题',
        3:'判断题'
      }
      return types[t];
    }
  },
  props:{
    index:{
      type:Number,
      default:1
    },
    item:{
      type:Object,
      required:true
    }
  },
  methods:{
    publish(){
      const item = this.item;
      const title = `第${this.index}题`
      PubSub.publish('item',{item,title});
    }
  },
  mounted(){

  }
}
</script>

<style scoped>
.problem-list-item-container {
  border: 1px solid rgb(51, 51, 51);
  text-align: center;
  cursor: pointer;
  margin: 20px;
}
.problem-title {
  font-size: 22px;
  font-weight: 400;
  font-family: sans-serif;
}
</style>