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
      <div class="font32 col" align="center">{{ dataGet.title }}</div>
      <div class="blockDiv"></div>
    </div>
    <hr />
    <!-- poster -->
    <div class="mainPoster row" :class="themeClass">
      <div class="q-pa-sm q-pt-md" style="vertical-align: middle">
        <img style="height: 90%" :src="coverPic" alt="" />
      </div>
      <div class="col q-pa-sm">
        <div align="right">
          <div class="editBtn row justify-evenly" @click="editPage()">
            <img
              style="width: 15px"
              src="../../public/image/editwhite.svg"
              alt=""
            />
            <div class="font18">แก้ไข</div>
          </div>
        </div>
        <div class="font32 q-pt-lg">{{ dataGet.title }}</div>
        <div class="font16 q-pt-sm q-pr-sm">
          {{ dataGet.synopsis }}
        </div>
        <div class="col"></div>
        <div class="font16 footer">{{ categoryListText }}</div>
      </div>
    </div>

    <div>
      <div class="row justify-end q-pt-md">
        <div class="addbtn" @click="addNewBtn()">
          <div class="row" style="padding-top: 5px; padding-left: 5px">
            <div><img src="../../public/image/plus.svg" alt="" /></div>
            <div
              style="padding-left: 10px; padding-top: 3px; padding-right: 10px"
            >
              เพิ่มตอนใหม่
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      coverPic: "",
      dataGet: {
        title: "",
        synopsis: "",
        category: [],
        theme: "",
        bookid: "",
      },
      cartoonid: this.$route.params.id,
      categoryList: [],
      categoryListText: [],
      themeClass: "",
    };
  },
  methods: {
    addNewBtn() {
      this.$router.push("/addchapter/" + this.cartoonid);
    },
    editPage() {
      this.$router.push("/bookedit/" + this.dataGet.bookid);
    },
    async loadAllCat() {
      let key = this.$q.localStorage.getItem("key");
      let dataSend = {
        key: key,
      };
      let url = this.serverpath + "loadallcat.php";
      let res = await axios.post(url, JSON.stringify(dataSend));
      this.categoryList = res.data;
    },
    covertType(data) {
      //load all category
      let catRaw = data.split(",");
      let catNumberArray = catRaw.map((x) =>
        Number(x.replace("[", "").replace("]", ""))
      );
      let catTextArray = catNumberArray.map((x) => {
        return this.categoryList.filter((y) => y.catid == x)[0].name;
      });
      return catTextArray;
    },

    backBtn() {
      this.$router.push("/book");
    },
    async loadData() {
      let key = this.$q.localStorage.getItem("key");
      let dataSend = { key: key, pageid: this.cartoonid };
      let url = this.serverpath + "cartoonDetailTitle.php";
      let res = await axios.post(url, JSON.stringify(dataSend));
      console.log(res.data);
      this.dataGet.bookid = res.data[0].bookid;
      this.dataGet.title = res.data[0].title;
      this.dataGet.synopsis = res.data[0].synopsis;
      this.dataGet.category = this.covertType(res.data[0].catid);
      this.dataGet.theme = res.data[0].theme;
      this.dataGet.category.forEach((x, index) => {
        if (index == 0) {
          this.categoryListText += x;
        } else {
          this.categoryListText += " | " + x;
        }
      });
      this.themeClass = "bgbook" + this.dataGet.theme;
      this.coverPic =
        this.serverpath +
        "cover/" +
        res.data[0]["bookid"] +
        ".jpg?" +
        Math.random() * 2000;
    },
  },
  async mounted() {
    await this.loadAllCat();
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.coverPic {
  margin: auto;
  width: 100%;
  position: relative;
}
.posterPic {
  position: absolute;
}
.mainPoster {
  position: relative;
  margin: auto;
  width: 100%;
  height: 340px;
}
.editBtn {
  width: 120px;
  height: 40px;
  line-height: 40px;
  background-color: #2d6be4;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  top: 0 px;
}
.footer {
  position: absolute;
  bottom: 20px;
}

.addbtn {
  border: 1px solid #959699;
  height: 40px;
  color: #333;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  width: 150px;
}
</style>
