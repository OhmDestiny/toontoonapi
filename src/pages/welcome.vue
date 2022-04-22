<template>
  <div
    style="width: 100%; max-width: 1600px; margin: auto; height: 100vh"
    :style="{ 'background-image': 'url(' + this.bgPic + ')' }"
  >
    <div class="bigcow"><img src="../../public/image/bigcow.png" alt="" /></div>
    <div
      class="pos-baloon"
      :style="{ 'background-image': 'url(' + this.baloonPic + ')' }"
    >
      <div class="textinbaloon">
        <div class="bigFont" align="center">
          Welcome guys<br />get more some wine.
        </div>
        <div align="center">กดแทบด้านซ้ายเพื่อทำรายการ</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgPic: "",
      baloonPic: "",
    };
  },
  methods: {
    loadData() {
      let key = this.$q.localStorage.getItem("key");
      if (key == null) {
        this.$router.push("/");
      }
      this.bgPic = this.serverpath + "image/bgwelcome.jpg?1";
      this.baloonPic = this.serverpath + "image/baloon.png";
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
  position: relative;
  width: 460px;
  left: 500px;
  top: 30px;
  height: 345px;
}
.bigFont {
  font-weight: 900;
  font-size: 32px;
}
.textinbaloon {
  padding-top: 90px;
  font-size: 22px;
}
</style>
