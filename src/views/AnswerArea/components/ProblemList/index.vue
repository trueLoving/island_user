<template>
  <div class="problem-list-container">
    <h2>题目列表</h2>
    <hr style="border-bottom:2px solid black;" />
    <div class="problem-container">
      <ProblemListItem v-for="(item,index) in list" 
      :key="index" 
      :index="(listQuery.currentPage-1)*listQuery.pageSize+index+1" 
      :item="item"
      />
    </div>
    <div class="pagination-container">
      <vxe-pager :current-page="listQuery.currentPage" :page-size="listQuery.pageSize" :total="listQuery.totalResult" :layouts="['PrevPage', 'JumpNumber', 'NextPage']" @page-change="handlePageChange"></vxe-pager>
    </div>
  </div>
</template>

<script>
import ProblemListItem from "./components/ProblemListItem";
import * as api from "@/api/answerArea.js";
export default {
  name: 'ProblemList',
  components: {
    ProblemListItem
  },
  data() {
    return {
      listQuery: {
        chapter: '',
        currentPage: 1,
        pageSize: 20,
        type: "",
        totalResult: 1000
      },
      list: []
    }
  },
  methods: {
    handlePageChange({
      pageSize,
      currentPage
    }) {
      this.listQuery.pageSize = pageSize;
      this.listQuery.currentPage = currentPage;
    },
    getList() {
      api.getProblems(this.listQuery).then((res) => {
        this.list = res.data.rows;
        this.listQuery.totalResult = res.data.count;
      })
    }
  },
  mounted() {
    this.listQuery.chapter = this.$route.query.id;
    this.getList();
  }
}
</script>

<style scoped>
  .problem-list-container {
    float: left;
    width: 26vw;
    margin: 50px 60px 0;
    box-shadow: 10px 10px 10px 10px gray;
    padding: 20px;
    border-radius: 6px;
    height: 820px;
    background: #fff;
    overflow: hidden;
    position: relative;
  }
  .problem-container {
    height: 640px;
    overflow: auto;
  }
  .pagination-container {
    margin: 20px 0;
    text-align: center;
    position: absolute;
    bottom: 0;
  }
</style>