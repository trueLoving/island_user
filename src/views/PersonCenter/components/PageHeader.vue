<template>
  <div class="page-header-container">
    <div class="page-header-text">{{text}}</div>
    <hr class="page-header-underline" />
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    text: {
      type: String,
      required: false,
      default: "Hello World"
    }
  }
};
</script>

<style scoped>
.page-header-container {
  margin: 40px auto;
  width: 95%;
}
.page-header-text {
  margin-left: 40px;
  font-size: 22px;
  color: #303133;
}
.page-header-underline {
  border: 0;
  border-bottom: 2px solid rgba(248, 212, 212, 0.959);
}
</style>