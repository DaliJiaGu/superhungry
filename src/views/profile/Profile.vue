<!--  -->
<template>
  <div id="profile">
    <nav-bar><div slot="center" class="profile-nav">个人中心</div></nav-bar>
    <user-msg></user-msg>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import UserMsg from "components/content/user/UserMsg";
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    UserMsg,
  },
};
</script>

<style  scoped>
.profile-nav {
  font-style: " Microsoft YaHei";
  font-weight: 600;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>
