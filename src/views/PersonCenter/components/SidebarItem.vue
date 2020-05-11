<template>
  <router-link :to="link" :style="isActive?'color:green':'color:#333'">
    <b-card>
      <b-card-text style="padding:0 0 0 20px;">
        <div class="sidebar-item-text">{{text}}</div>
        <ArrowRight class="sidebar-item-arrow-right" />
      </b-card-text>
    </b-card>
  </router-link>
</template>

<script>
import ArrowRight from "./ArrowRight";

export default {
  name: "SidebarItem",
  components: {
    ArrowRight
  },
  props: {
    isActive: {
      type: Boolean,
      required: false,
      default: false
    },
    link: {
      type: String,
      required: false,
      default: "./test/detail"
    },
    text: {
      type: String,
      required: false,
      default: "文本内容"
    }
  }
};
</script>

<style scoped>
.card-body:hover {
  background: #eee;
  color: #25bb9b
}
a {
  text-decoration: none;
}
.sidebar-item-text {
  display: inline-block;
  margin-left: 30px;
  font-size: 16px;
  font-weight: 400;
  font-family: "Microsoft YaHei", "system";
}
.sidebar-item-arrow-right {
  font-size: 1.5rem;
  line-height: 1.5rem;
  float: right;
  margin: 0.5rem 10px 0px 0px;
}
</style>