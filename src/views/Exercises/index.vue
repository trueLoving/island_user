<template>
  <div>
    <div class="table-container">
      <vxe-table align="center" :data="list" style="font-size:16px;" height="600">
        <vxe-table-column title="序号" type="seq" :seq-method="seqMethod"></vxe-table-column>
        <vxe-table-column field="name" title="题库名称"></vxe-table-column>
        <vxe-table-column field="tagName" title="标签"></vxe-table-column>
        <vxe-table-column field="username" title="创建者"></vxe-table-column>
        <vxe-table-column field="updated_at" title="更新时间">
          <template v-slot="{row}">{{row.updated_at | parseTime }}</template>
        </vxe-table-column>
        <vxe-table-column title="操作">
          <template v-slot="{row}">
            <b-button variant="success" size="sm" @click="handleClick(row)">进入题库</b-button>
          </template>
        </vxe-table-column>
      </vxe-table>

      <br />

      <vxe-pager
        :current-page="listQuery.currentPage"
        :page-size="listQuery.pageSize"
        :total="listQuery.totalResult"
        :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
        @page-change="handlePageChange"
      ></vxe-pager>
    </div>
  </div>
</template>
<script>

import * as api from "@/api/library.js";
import { parseTime } from "@/utils/index.js";

export default { 
  data () {
    return {
      list: [],
      listQuery: {
        currentPage: 1,
        pageSize: 20,
        totalResult: 0
      }
    }
  },
  filters:{
    parseTime
  },
  methods:{
    handlePageChange({pageSize,currentPage}){
      this.listQuery.currentPage = currentPage;
      this.listQuery.pageSize = pageSize;
    },
    handleClick(library){
      // console.log(library);
      this.$router.push({path:'/chapterArea',query:{id:library.id}});
    },
    getList(){
      api.getLibraries(this.listQuery).then((res)=>{
        this.list = res.data.rows;
        this.listQuery.totalResult = res.data.count;
      })
    },
    seqMethod({rowIndex}){
      const {currentPage,pageSize} = this.listQuery;
      return (currentPage-1)*pageSize+rowIndex+1;
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
