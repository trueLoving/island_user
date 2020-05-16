<template>
  <div class="rich-editor-container">
    <vue-editor v-model="content"></vue-editor>
    <div class="toolbar">
      <b-button variant="danger" class="reset-button" @click="reset">重置</b-button>
      <b-button variant="primary" class="submit-button" @click="submit">提交</b-button>
    </div>
  </div>
</template>

<script>

import { VueEditor } from "vue2-editor";

export default {
    name:"RichEditor",
    components:{
        VueEditor
    },
    props:{
        c:{
            type:String,
            required:false,
            default:""
        }
    },
    data(){
        return{
            content:""
        }
    },
    methods:{
        submit(){
            // todo submit
        },
        reset(){
            this.content = "";
        }
    },
    mounted(){
        if(!this.c)this.content = this.c;
    }
}
</script>

<style scoped>
.rich-editor-container {
  padding: 6px;
}
.toolbar {
  margin: 20px;
  text-align: center;
}
.reset-button,
.submit-button {
  margin: 20px;
}
</style>