<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="登录"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      v-model="modalShow"
      ok-title="确定"
      cancel-title="取消"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="用户名:">
          <b-form-input v-model="form.username" placeholder="请输入用户名" :state="usernameState"></b-form-input>
        </b-form-group>

        <b-form-group label="密码:">
          <b-form-input v-model="form.password" placeholder="请输入密码" :state="passwordState"></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      usernameState: null,
      passwordState: null,
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
      if (!this.form.username) {
        this.usernameState = false;
        return false;
      }
      if (!this.form.password) {
        this.passwordState = false;
        return false;
      }
      return true;
    },
    resetModal() {
      this.username = "";
      this.password = "";
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