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
      <vxe-table-column title="其他">
        <template v-slot="{row}">
          <b-button variant="success" size="sm" @click="handleEnroll(row)" v-if="row.status===0&&row.has===0">报名考试</b-button>
          <span v-else>{{ row | statusFilter }}</span>
        </template>
      </vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>

import * as api from "@/api/exams.js";
import { parseTime } from "@/utils/index.js";


export default {
    name:'ExamList',
    inject:['reload'],
    data(){
      return{
        user_id:"",
        library_id:"",
        exams:[]
      }
    },
    filters:{
      statusFilter(exam){
        const {status,has} = exam;
        const statusObject = {
          0:'报名中',
          1:'已开始',
          2:'批改中',
          3:'已结束'
        }
        if(status===0&&has===1){
          return '已报名' 
        }

        return statusObject[status];
        
      }
    },
    methods:{
      getList(){
        api.getExams(this.library_id).then((res)=>{
          console.log(res);
          this.exams = res.data
        }).catch((err)=>{
          this.$message({type:'error',text:err.message})
        })
      },
      handleEnroll(exam){

        const {start,end,id:exam_id} = exam;

        const data = {
          start:parseTime(start),
          end:parseTime(end),
          exam_id,
          user_id:this.user_id
        }

        api.enrollExams(data).then((res)=>{
          this.$message({type:'success',text:'报名成功'});
          this.reload();
        })


      }
    },
    mounted(){
      this.library_id = this.$route.query.id;
      this.user_id = this.$store.getters.user_id;
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