<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="注册"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      v-model="modalShow"
      ok-title="确定"
      cancel-title="取消"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="用户名:">
          <b-form-input v-model="form.username" placeholder="请输入用户名"></b-form-input>
          <b-form-invalid-feedback :state="errMsg.sex==''">{{errMsg.username}}</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="性别">
          <b-form-radio-group v-model="form.sex">
            <b-form-radio value="1">男</b-form-radio>
            <b-form-radio value="2">女</b-form-radio>
          </b-form-radio-group>
          <b-form-invalid-feedback :state="errMsg.sex==''">{{errMsg.sex}}</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="账号:">
          <b-form-input v-model="form.account" placeholder="请输入账号"></b-form-input>
          <b-form-invalid-feedback :state="errMsg.account==''">{{errMsg.account}}</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="密码:">
          <b-form-input v-model="form.password" placeholder="请输入密码"></b-form-input>
          <b-form-invalid-feedback :state="errMsg.password==''">{{errMsg.password}}</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="确认密码:">
          <b-form-input v-model="form.passwordAgain" placeholder="请再次输入密码"></b-form-input>
          <b-form-invalid-feedback :state="errMsg.passwordAgain==''">{{errMsg.passwordAgain}}</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="邮箱">
          <b-form-input v-model="form.email" placeholder="请输入邮箱"></b-form-input>
          <b-form-invalid-feedback :state="errMsg.email==''">{{errMsg.email}}</b-form-invalid-feedback>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { isNotEmpty, validateEMail } from "@/validators/index.js";

export default {
  name: "RegisterForm",
  data() {
    return {
      form: {
        username: "",
        sex: "",
        account: "",
        password: "",
        passwordAgain: "",
        email: ""
      },
      rules: {
        username: [isNotEmpty],
        sex: [isNotEmpty],
        account: [isNotEmpty],
        password: [isNotEmpty],
        passwordAgain: [isNotEmpty],
        email: [isNotEmpty, validateEMail]
      },
      errMsg: {
        username: "123",
        sex: "",
        account: "",
        password: "",
        passwordAgain: "",
        email: ""
      },
      modalShow: false,
      validate: true
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
      
      this.validate = true;

      Object.keys(this.form).forEach(key => {
        let currentValidate = this.rules[key].every(rule =>
          rule(this.form[key], key, this.errMsg)
        );
        if (!currentValidate) {
          this.validate = false;
        }
      });

      if (this.form.password !== this.form.passwordAgain) {
        this.errMsg.passwordAgain = "密码输入不一致";
        this.state.passwordAgain = false;
        this.validate = false;
      }

      return this.validate;
    },
    resetModal() {
      this.username = "";
      this.sex = "";
      this.account = "";
      this.password = "";
      this.passwordAgain = "";
      this.email = "";
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
      // todo api request

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