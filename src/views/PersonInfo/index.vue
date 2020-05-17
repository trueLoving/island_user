<template>
  <div class="personInfo-container">
    <div>
      <b-form v-if="show">
        <b-form-group label="用户名:">
          <b-form-input v-model="user.username"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="用户性别:">
          <b-form-radio-group v-model="user.sex">
            <b-form-radio value="1">男</b-form-radio>
            <b-form-radio value="0">女</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <b-form-group id="input-group-3" label="用户邮箱:" label-for="input-3">
          <b-form-input v-model="user.email" type="email"></b-form-input>
        </b-form-group>

        <div class="toolbar">
          <b-button variant="danger" class="reset-button" @click="reset">重置</b-button>
          <b-button variant="success" class="submit-button" @click="submit">提交</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>

import { getInfo,modifyPersonInfo } from "@/api/user.js";

export default {
    inject:['reload'],
    data() {
      return {
        show:true,
        user:{},
      }
    },
    methods: {
      submit(evt) {
        evt.preventDefault()
        modifyPersonInfo(this.user).then((res)=>{
          console.log(res);
          this.$message({type:'success',text:'修改成功'});
          this.reload();
        })
      },
      reset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.user = {};
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    mounted(){
      getInfo().then((res)=>{
        const { data } = res;
        this.user = data;
      })
    }
  }
</script>

<style scoped>
.personInfo-container {
  margin: 21px auto;
  width: 80%;
  overflow: auto;
  padding: 20px;
}
.toolbar {
  margin: 10px;
  padding: 10px;
  text-align: center;
}
.reset-button,
.submit-button {
  margin: 10px;
}
</style>