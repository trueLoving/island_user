<template>
  <div>
    <div class="table-container">
      <vxe-table align="center" :data="list" style="font-size:16px;" height="600">
        <vxe-table-column title="序号" type="seq"></vxe-table-column>
        <vxe-table-column field="name" title="题库名称"></vxe-table-column>
        <vxe-table-column field="start" title="开始时间">
          <template v-slot="{row}">{{row.start | parseTime }}</template>
        </vxe-table-column>
        <vxe-table-column field="end" title="结束时间">
          <template v-slot="{row}">{{row.end | parseTime }}</template>
        </vxe-table-column>
        <vxe-table-column title="操作">
          <template v-slot="{row}">
            <b-button variant="success" size="sm" @click="handleStart(row)">开始考试</b-button>
          </template>
        </vxe-table-column>
      </vxe-table>
    </div>
  </div>
</template>
<script>

import * as api from "@/api/exams.js";

export default { 
  data () {
    return {
      list: []
    }
  },
  methods:{
    getList(){
      api.getEnrolledExams(this.listQuery).then((res)=>{
        this.list = res.data;
      })
    },
    handleStart(exam){

      const {id,start,end} = exam;

      api.startExams(id).then(res=>{
        this.$message({type:'success',text:'请开始考试'})
        this.$router.push({path:`FormalExamination?exam_id=${exam.id}&start=${start}&end=${end}`})
      })

      // this.$router.push({path:`FormalExamination?exam_id=${exam.id}`})

    }
  },
  mounted(){
    this.getList();
  }
}
</script>
<style scoped>
.table-container {
  width: 95vw;
  margin: 30px auto;
  box-shadow: 10px 10px 10px 10px gray;
  padding: 20px;
  border-radius: 6px;
  background: #fff;
  overflow: auto;
}
.toolbar-container {
  width: 95vw;
  margin: 30px auto;
  box-shadow: 10px 10px 10px 10px gray;
  padding: 20px;
  border-radius: 6px;
  background: #fff;
  overflow: auto;
}
</style>
