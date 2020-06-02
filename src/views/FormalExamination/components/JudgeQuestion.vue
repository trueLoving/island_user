<template>
  <div class="judge-question-container">
    <div v-html="item.content"></div>
    <b-form-radio-group v-model="record.user_answer">
      <b-form-radio value="正确">T</b-form-radio>
      <b-form-radio value="错误">F</b-form-radio>
      <b-button variant="success" size="sm" style="float:right" @click="storeAnswer">保存答案</b-button>
    </b-form-radio-group>
  </div>
</template>

<script>

import mixins from '../mixins'


export default {
  name:'JudgeQuestion',
  mixins:[mixins]
}
</script>

<style scoped>
.judge-question-container {
  margin: 20px;
  padding: 10px;
}
</style>