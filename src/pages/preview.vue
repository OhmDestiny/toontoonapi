<template>
  <div
    class="mainPadding"
    style="width: 100%; max-width: 1600px; margin: auto; height: 100px"
  >
    <div class="row">
      <div class="blockDiv cursor-pointer" @click="backBtn()">
        <img
          style="padding-top: 10px"
          src="../../public/image/backbtn.svg"
          alt=""
        />
      </div>
      <div class="font32 col" align="center">ตอนที่ {{ pageName }}</div>
      <div class="blockDiv"></div>
    </div>
    <hr />
    <div class="pageMain">
      <div
        v-for="(item, index) in fileList"
        :key="index"
        class="pageShow"
        align="center"
      >
        <img :src="folder + item" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pageid: this.$route.params.id,
      cartoonid: this.$route.params.cartoon,
      fileList: [],
      pageName: "",
      folder: "",
    };
  },
  methods: {
    backBtn() {
      this.$router.push("/bookpage/" + this.$route.params.cartoon);
    },
    async loadData() {
      let dataTemp = {
        page: this.pageid,
        cartoonid: this.cartoonid,
      };
      let url2 = this.serverpath + "previewcartooninfo.php";
      let res2 = await axios.post(url2, JSON.stringify(dataTemp));
      console.log(res2.data);
      this.pageName = res2.data[0].name;
      this.folder =
        this.serverpath +
        "cartoon/" +
        res2.data[0].folder +
        "/" +
        this.pageid +
        "/book/";
      let url = this.serverpath + "previewcartoonfile.php";
      let res = await axios.post(url, JSON.stringify(dataTemp));
      this.fileList = res.data;
      this.fileList.sort((a, b) => (a > b ? 1 : -1));

      console.log(this.fileList);
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.pageShow {
  width: 100%;
}
.pageMain {
  height: calc(100vh - 100px);
  overflow-y: auto;
}
</style>
