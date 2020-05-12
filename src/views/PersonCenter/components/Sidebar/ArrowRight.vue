<template>
  <div class="arrow-right"></div>
</template>

<script>
export default {
  name:"ArrowRight"
};
</script>

<style scoped>
.arrow-right {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 2px solid gray;
  border-right: 2px solid gray;
  transform: rotate(45deg);
}
</style>