<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="修改密码"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      v-model="modalShow"
      ok-title="确定"
      cancel-title="取消"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="新密码:">
          <b-form-input
            v-model="form.password1"
            placeholder="请输入新密码"
            :state="password1State"
            type="password"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="确认密码:">
          <b-form-input
            v-model="form.password2"
            placeholder="请再次输入新密码"
            :state="password2State"
            type="password"
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>


import { changePwd } from "@/api/user.js";

export default {
  name: "ChangePwd",
  inject: ["reload"],
  data() {
    return {
      form: {
        password1: "",
        password2: ""
      },
      password1State: null,
      password2State: null,
      modalShow: false
    };
  },
  methods: {
    openModel() {
      this.modalShow = true;
    },
    closeModel() {
      this.modalShow = false;
    },
    checkFormValidity() {
      if (!this.form.password1) {
        this.password1State = false;
        return false;
      }
      if (!this.form.password2) {
        this.password2State = false;
        return false;
      }
      if (this.form.password2!==this.form.password1) {
        this.$message({type:'error',text:'输入不符合要求'});
        this.password1State = false;
        this.password2State = false;
        return false;
      }
      return true;
    },
    resetModal() {
      this.form.password1 = "";
      this.form.password2 = "";
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }

      changePwd(this.form).then((res)=>{
        this.$message({type:'success',text:'修改成功'});
        this.reload();
      })

      // todo 密码修改

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    }
  }
};
</script>

<style>
</style>