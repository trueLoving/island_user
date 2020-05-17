<template>
  <div>
    <div class="table-container">
      <vxe-table
        align="center"
        :data="list"
        style="font-size:16px;"
        :loading="loading"
        height="600"
      >
        <vxe-table-column field="id" title="序号"></vxe-table-column>
        <vxe-table-column field="name" title="题库名称"></vxe-table-column>
        <vxe-table-column field="tagName" title="标签"></vxe-table-column>
        <vxe-table-column field="username" title="创建者"></vxe-table-column>
        <vxe-table-column field="updated_at" title="更新时间"></vxe-table-column>
        <vxe-table-column title="操作">
          <template slot-scope="{row}">
            <b-button variant="success" size="sm">开始刷题</b-button>
          </template>
        </vxe-table-column>
      </vxe-table>

      <br />

      <vxe-pager
        :loading="loading"
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

export default { 
  data () {
    return {
      list: [],
      loading: false,
      listQuery: {
        currentPage: 1,
        pageSize: 20,
        totalResult: 0
      }
    }
  },
  methods:{
    handlePageChange(){

    },
    getList(){
      api.getLibraries({
        currentPage:1
      }).then((res)=>{
        this.list = res.data;
        this.listQuery.totalResult = res.data.length;
      })
    }
  },
  mounted(){
    this.getList();
  }
}
</script>
<style scoped>
.exercises-container {
  /* width: 95vw;
  margin: 30px auto;
  box-shadow: 10px 10px 10px 10px gray;
  padding: 20px;
  border-radius: 6px; */
  /* height: 820px; */
  /* background: #fff;
  overflow: auto; */
}
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
