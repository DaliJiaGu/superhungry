<!--  -->
<template>
  <div id="user-msg">
    <user-message>
      <img
        src="https://img.zcool.cn/community/0120df5b5ac3baa801215c8f026d1d.jpg@1280w_1l_2o_100sh.jpg"
        slot="left"
      />
      <span slot="right">我的天</span>
    </user-message>
  </div>
</template>

<script>
import UserMessage from "components/common/userMess/UserMessage";
export default {
  data() {
    return {};
  },
  props: {},
  components: {
    UserMessage,
  },
};
</script>

<style  scoped>
#user-msg {
  height: 90px;
  background-color: rgb(187, 212, 181);
}

#user-msg img {
  position: relative;
  left: 8px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
</style>
