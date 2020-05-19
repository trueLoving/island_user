<template>
  <div class="problem-detail-container">
    <h2>题目详情</h2>
    <hr style="border-bottom:2px solid black;" />
    <transition>
      <div>
        <h3>{{title}}</h3>
        <component v-bind:is="component" :item="item" ref="component"></component>
      </div>
    </transition>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
import SingleChoiceQuestion from "./components/SingleChoiceQuestion";
import JudgeQuestion from "./components/JudgeQuestion";
import MultipleChoiceQuestion from "./components/MultipleChoiceQuestion";

export default {
  name: 'ProblemDetail',
  components:{
    SingleChoiceQuestion,
    JudgeQuestion,
    MultipleChoiceQuestion
  },
  data() {
    return {
      title:"",
      item:{},
      component:''
    }
  },
  methods:{
    typeFilter(t){
      const types = {
        1:'SingleChoiceQuestion',
        2:'MultipleChoiceQuestion',
        3:'JudgeQuestion'
      }
      return types[t];
    }
  },
  mounted(){
    PubSub.subscribe('item',(msg,{item,title})=>{
      this.item = item;
      this.title = title;
      this.component = this.typeFilter(item.type);
      this.$nextTick(()=>{
        this.$refs.component.init();
      })
    })
  }
}
</script>

<style scoped>
.problem-detail-container {
  float: right;
  width: 70vw;
  margin: 50px 30px 0;
  box-shadow: 10px 10px 10px 10px gray;
  padding: 20px;
  border-radius: 6px;
  height: 820px;
  background: #fff;
  overflow: auto;
}
.toolbar {
  /* 开启BFC 清除浮动带来的影响 */
  overflow: hidden;
}
.pre-button,
.next-button {
  float: right;
  margin: 20px;
}
.problem-detail-content {
  border: 1px solid red;
  margin: 20px;
}
</style>