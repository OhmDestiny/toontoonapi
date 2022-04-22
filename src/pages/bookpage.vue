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
    <div class="mainPoster row">
      <div class="q-pa-sm q-pt-md" style="vertical-align: middle">
        <img style="height: 300px" :src="coverPic" alt="" />
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

    <div v-if="chapterExtra.length > 0">
      <div class="font22">ตอนพิเศษ</div>
      <div class="row">
        <div style="width: 240px">วันที่</div>
        <div style="width: 100px" align="center">ลำดับ</div>
        <div class="col">ตอนพิเศษ</div>
        <div style="width: 100px" align="center">สถานะ</div>
        <div style="width: 100px" align="center">ลบออก</div>
        <div style="width: 100px" align="center">แก้ไข</div>
        <div style="width: 100px" align="center">พรีวิว</div>
      </div>
      <hr />
      <div
        v-for="(item, index) in chapterExtra"
        :key="index"
        class="row lineData"
        :class="[index % 2 == 1 ? 'stripRow' : '']"
      >
        <div style="width: 240px">{{ item.timestamp }}</div>
        <div style="width: 100px" align="center">{{ item.orderid }}</div>
        <div class="col">{{ item.chapter }}</div>
        <div style="width: 100px" class="q-pt-sm">
          <div
            class="onlinebtn"
            @click="changeCategoryData(item.id, 0)"
            v-if="item.online == 1"
            align="center"
          >
            Online
          </div>

          <div
            class="offlinebtn"
            @click="changeCategoryData(item.id, 1)"
            v-else
            align="center"
          >
            offline
          </div>
        </div>
        <div
          style="width: 100px"
          align="center"
          @click="deleteBtn(item.id, item.chapter)"
          class="cursor-pointer"
        >
          <img src="../../public/image/trash_symbol.svg" alt="" />
        </div>
        <div
          style="width: 100px"
          align="center"
          @click="editBtn(item.id)"
          class="cursor-pointer"
        >
          <img src="../../public/image/edit_symbol.svg" alt="" />
        </div>
        <div
          style="width: 100px"
          align="center"
          @click="previewBtn(item.id)"
          class="cursor-pointer"
        >
          <img src="../../public/image/preview.svg" alt="" />
        </div>
      </div>
      <br />
    </div>

    <div v-if="chapterNormal.length > 0">
      <div class="font22">ตอนทั่วไป</div>
      <div class="row">
        <div style="width: 240px">วันที่</div>
        <div style="width: 100px" align="center">ลำดับ</div>
        <div class="col">ตอน</div>
        <div style="width: 100px" align="center">สถานะ</div>
        <div style="width: 100px" align="center">ลบออก</div>
        <div style="width: 100px" align="center">แก้ไข</div>
        <div style="width: 100px" align="center">พรีวิว</div>
      </div>
      <hr />
      <div
        v-for="(item, index) in chapterNormal"
        :key="index"
        class="row lineData"
        :class="[index % 2 == 1 ? 'stripRow' : '']"
      >
        <div style="width: 240px">{{ item.timestamp }}</div>
        <div style="width: 100px" align="center">{{ item.orderid }}</div>
        <div class="col">{{ item.chapter }}</div>
        <div style="width: 100px" align="center" class="q-pt-sm">
          <div
            class="onlinebtn"
            @click="changeCategoryData(item.id, 0)"
            v-if="item.online == 1"
            align="center"
          >
            Online
          </div>

          <div
            class="offlinebtn"
            @click="changeCategoryData(item.id, 1)"
            v-else
            align="center"
          >
            offline
          </div>
        </div>
        <div
          style="width: 100px"
          align="center"
          @click="deleteBtn(item.id, item.chapter)"
          class="cursor-pointer"
        >
          <img src="../../public/image/trash_symbol.svg" alt="" />
        </div>
        <div
          style="width: 100px"
          align="center"
          @click="editBtn(item.id)"
          class="cursor-pointer"
        >
          <img src="../../public/image/edit_symbol.svg" alt="" />
        </div>
        <div
          style="width: 100px"
          align="center"
          @click="previewBtn(item.id)"
          class="cursor-pointer"
        >
          <img src="../../public/image/preview.svg" alt="" />
        </div>
      </div>
    </div>
    <!-- alert delete dialog  -->
    <q-dialog v-model="delDia" persistent>
      <q-card>
        <q-card-section>
          <div class="items-center">
            <div class="row">
              <div class="col"></div>
              <img src="../../public/image/alertBinIcon.svg" alt="" />
              <div style="width: 15px"></div>
              <div class="font18">ลบตอนการ์ตูน</div>
              <div class="col"></div>
            </div>
          </div>

          <hr style="width: 400px" />
          <div align="center">
            <div>คุณต้องการลบตอน {{ delChapterText }}</div>
          </div>
        </q-card-section>
        <q-card-actions align="center">
          <div class="row">
            <div
              class="cancelAdNewUserDiaBtn"
              @click="closeDelDia()"
              align="center"
            >
              ยกเลิก
            </div>
            <div style="width: 20px"></div>
            <div
              @click="confirmDelBtn()"
              class="submitAdNewUserDiaBtn"
              align="center"
            >
              ลบ
            </div>
          </div>
        </q-card-actions>
        <br />
      </q-card>
    </q-dialog>
    <div class="fullscreen backdrop" v-if="showBackDrop"></div>
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
        bookid: "",
      },
      cartoonid: this.$route.params.id,
      categoryList: [],
      categoryListText: [],
      chapterExtra: [],
      chapterNormal: [],
      delDia: false,
      delChapter: "",
      showBackDrop: false,
      delChapterText: "",
    };
  },
  methods: {
    editBtn(chapterid) {
      this.$router.push(
        "/editchapter/" + chapterid + "/" + this.$route.params.id
      );
    },
    previewBtn(chapterid) {
      this.$router.push("/preview/" + chapterid + "/" + this.$route.params.id);
    },
    async confirmDelBtn() {
      let delTemp = {
        id: this.delChapter,
        cartoonid: this.cartoonid,
      };
      let url = this.serverpath + "cartoondel.php";
      let res = await axios.post(url, JSON.stringify(delTemp));
      this.greenNotify("ลบตอนสำเร็จ");
      this.loadChapter();
    },
    deleteBtn(id, chapter) {
      this.delChapterText = chapter;
      this.delChapter = id;
      this.delDia = true;
      this.showBackDrop = true;
    },
    closeDelDia() {
      this.delDia = false;
      this.showBackDrop = false;
    },
    async changeCategoryData(bookid, online) {
      let dataTemp = {
        bookid: bookid,
        online: online,
      };
      let url = this.serverpath + "cartoononline.php";
      let res = await axios.post(url, JSON.stringify(dataTemp));
      if (res.data == "finish") {
        this.loadChapter();
      }
    },
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
      if (res.data == "go to welcome") {
        this.$router.push("welcome");
        return;
      } else if (res.data == "go to login") {
        this.$q.localStorage.clear();
        this.$router.push("/");
        return;
      }
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
      this.dataGet.bookid = res.data[0].bookid;
      this.dataGet.title = res.data[0].title;
      this.dataGet.synopsis = res.data[0].synopsis;
      this.dataGet.category = this.covertType(res.data[0].catid);
      this.dataGet.category.forEach((x, index) => {
        if (index == 0) {
          this.categoryListText += x;
        } else {
          this.categoryListText += " | " + x;
        }
      });
      this.coverPic =
        this.serverpath +
        "cover/" +
        res.data[0]["bookid"] +
        ".jpg?" +
        Math.random() * 2000;
    },

    async loadChapter() {
      let key = this.$q.localStorage.getItem("key");
      let dataSend = { key: key, pageid: this.cartoonid };
      let url = this.serverpath + "cartoonchapter.php";
      let res = await axios.post(url, JSON.stringify(dataSend));
      this.chapterExtra = res.data.filter((x) => x.type == "ตอนพิเศษ");
      if (this.chapterExtra.length > 0) {
        this.chapterExtra.sort((a, b) => Number(a.orderid) - Number(b.orderid));
      }
      this.chapterNormal = res.data.filter((x) => x.type == "ตอนปกติ");
      if (this.chapterNormal.length > 0) {
        this.chapterNormal.sort(
          (a, b) => Number(a.orderid) - Number(b.orderid)
        );
      }
      console.log(this.chapterExtra);
    },
  },
  async mounted() {
    await this.loadAllCat();
    await this.loadData();
    await this.loadChapter();
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
  background-color: #dfdede;
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
.stripRow {
  background-color: rgba($color: #7291ff, $alpha: 0.15);
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
.onlinebtn {
  font-size: 12px;
  color: #1f8616;
  border: 1px solid #1f8616;
  width: 60px;
  height: 25px;
  line-height: 25px;
  border-radius: 5px;
  cursor: pointer;
  margin: auto;
}
.offlinebtn {
  font-size: 12px;
  color: #ec5454;
  border: 1px solid #ec5454;
  width: 60px;
  height: 25px;
  line-height: 25px;
  border-radius: 5px;
  cursor: pointer;
  margin: auto;
}
.lineData {
  height: 40px;
  line-height: 49px;
}
</style>
