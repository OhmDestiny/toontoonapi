<template>
  <div
    style="width: 100%; max-width: 1600px; margin: auto; height: 100vh"
    :style="{ 'background-image': 'url(' + this.bgPic + ')' }"
  >
    <div class="bigcow"><img src="../../public/image/oldcow.png" alt="" /></div>
    <div
      class="pos-baloon"
      :style="{ 'background-image': 'url(' + this.baloonPic + ')' }"
    >
      <div class="textinbaloon">
        <div class="bigFont" align="center">I'm coding this page.</div>
        <div align="center">coming soon</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      bgPic: "",
      baloonPic: "",
    };
  },
  methods: {
    async loadData() {
      this.bgPic = this.serverpath + "image/bgwelcome.jpg?1";
      this.baloonPic = this.serverpath + "image/baloon.png";
      let key = this.$q.localStorage.getItem("key");
      let dataTemp = {
        key: key,
      };
      let urlTotal = this.serverpath + "checkads.php";
      let res = await axios.post(urlTotal, JSON.stringify(dataTemp));
      if (res.data == "go to welcome") {
        this.$router.push("welcome");
        return;
      } else if (res.data == "go to login") {
        this.$q.localStorage.clear();
        this.$router.push("/");
        return;
      }
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.bigcow {
  position: absolute;
  bottom: 0px;
}
.pos-baloon {
  position: absolute;
  width: 460px;
  right: 200px;
  top: 30px;
  height: 345px;
}
.bigFont {
  font-weight: 900;
  font-size: 32px;
}
.textinbaloon {
  padding-top: 130px;
  font-size: 22px;
}
</style>
