<template>
  <div class="choice-question-container">
    <div v-html="item.content"></div>
    <b-form-radio-group v-model="record.user_answer">
      <b-form-radio value="A">A</b-form-radio>
      <b-form-radio value="B">B</b-form-radio>
      <b-form-radio value="C">C</b-form-radio>
      <b-form-radio value="D">D</b-form-radio>
      <b-button variant="success" size="sm" style="float:right" @click="storeAnswer">保存答案</b-button>
    </b-form-radio-group>
  </div>
</template>

<script>
import mixins from '../mixins'

export default {
  name:'ChoiceQuestion',
  mixins:[mixins]
}
</script>

<style scoped>
.choice-question-container {
  margin: 20px;
  padding: 10px;
}
</style>