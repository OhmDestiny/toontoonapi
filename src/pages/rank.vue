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
export default {
  data() {
    return {
      bgPic: "",
      baloonPic: "",
    };
  },
  methods: {
    loadData() {
      this.bgPic = this.serverpath + "image/bgwelcome.jpg?1";
      this.baloonPic = this.serverpath + "image/baloon.png";
      console.log(this.bgPic);
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
