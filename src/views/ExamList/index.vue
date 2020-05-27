<template>
  <div class="exam-details-container">
    <vxe-table :data="exams" align="center">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="名称"></vxe-table-column>
      <vxe-table-column field="created_at" title="创建时间">
        <template v-slot="{row}">{{row.created_at | parseTime }}</template>
      </vxe-table-column>
      <vxe-table-column field="updated_at" title="更新时间">
        <template v-slot="{row}">{{row.updated_at | parseTime }}</template>
      </vxe-table-column>
      <vxe-table-column field="start" title="考试开始时间">
        <template v-slot="{row}">{{row.start | parseTime }}</template>
      </vxe-table-column>
      <vxe-table-column field="end" title="考试结束时间">
        <template v-slot="{row}">{{row.end | parseTime }}</template>
      </vxe-table-column>
      <vxe-table-column title="操作">
        <template v-slot="{row}">
          <b-button variant="success" size="sm" @click="handleClick(row)">报名考试</b-button>
        </template>
      </vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>

import * as api from "@/api/exams.js";

export default {
    name:'ExamList',
    data(){
      return{
        library_id:"",
        exams:[]
      }
    },
    methods:{
      getList(){
        api.getExams(this.library_id).then((res)=>{
          this.exams = res.data
        }).catch((err)=>{
          this.$message({type:'error',text:err.message})
        })
      },
      handleClick(exam){
        const {start,end,exam_id} = exam;

        console.log(exam);
      }
    },
    mounted(){
      this.library_id = this.$route.query.id;
      this.getList();
    }
}
</script>

<style scoped>
.exam-details-container {
  width: 95vw;
  margin: 30px auto;
  box-shadow: 10px 10px 10px 10px gray;
  padding: 20px;
  border-radius: 6px;
  background: #fff;
  overflow: auto;
}
</style>