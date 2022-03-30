<template>
  <q-layout view="lHh Lpr lFf">
    <div class="fullscreen">
      <div
        style="
          max-width: 1600px;
          width: 100%;
          height: 100vh;
          margin: auto;
          background-color: #f6f7fb;
        "
        class="shadow-2 row"
      >
        <div class="leftdrawer shadow-3">
          <!-- user avatar -->
          <div class="row q-pa-md justify-center" @click="profielBtn()">
            <div>
              <img src="../../public/image/avatar01.png" width="100px" />
            </div>
            <div class="fontUserName"><u>Aunny</u></div>
          </div>
          <!-- menu book -->
          <div v-if="menuData.book == 1">
            <div
              class="row bookLink q-ma-md q-pa-sm cursor-pointer"
              @click="menuBook()"
              v-if="$route.name != 'book'"
            >
              <div class="leftSpace"></div>
              <div class="iconDiv">
                <img src="../../public/image/book.svg" alt="" />
              </div>
              <div class="middleSpace"></div>
              <div class="labelDiv">หนังสือ</div>
            </div>

            <div class="row bookLink q-ma-md q-pa-sm" v-else>
              <div class="leftSpace"></div>
              <div class="iconDiv">
                <img src="../../public/image/bookblue.svg" alt="" />
              </div>
              <div class="middleSpace"></div>
              <div class="labelDivBlue">หนังสือ</div>
            </div>
            <hr style="width: 270px" />
          </div>

          <!-- menu category -->
          <div v-if="menuData.category == 1">
            <div
              class="row bookLink q-ma-md q-pa-sm cursor-pointer"
              @click="menuCategory()"
              v-if="$route.name != 'category'"
            >
              <div class="leftSpace"></div>
              <div class="iconDiv">
                <img src="../../public/image/category.svg" alt="" />
              </div>
              <div class="middleSpace"></div>
              <div class="labelDiv">หมวดหมู่</div>
            </div>
            <div class="row bookLink q-ma-md q-pa-sm" v-else>
              <div class="leftSpace"></div>
              <div class="iconDiv">
                <img src="../../public/image/categoryblue.svg" alt="" />
              </div>
              <div class="middleSpace"></div>
              <div class="labelDivBlue">หมวดหมู่</div>
            </div>
            <hr style="width: 270px" />
          </div>
          <!-- menu ranking -->
          <div v-if="menuData.rank == 1">
            <div
              class="row bookLink q-ma-md q-pa-sm cursor-pointer"
              @click="menuRank()"
              v-if="$route.name != 'rank'"
            >
              <div class="FixleftSpace"></div>
              <div class="iconDiv">
                <img src="../../public/image/rank.svg" alt="" />
              </div>
              <div class="FixmiddleSpace"></div>
              <div class="labelDiv">อันดับ</div>
            </div>
            <div class="row bookLink q-ma-md q-pa-sm" v-else>
              <div class="FixleftSpace"></div>
              <div class="iconDiv">
                <img src="../../public/image/rankblue.svg" alt="" />
              </div>
              <div class="FixmiddleSpace"></div>
              <div class="labelDivBlue">อันดับ</div>
            </div>
            <hr style="width: 270px" />
          </div>
          <!-- menu advertise -->
          <div v-if="menuData.ads == 1">
            <div
              class="row bookLink q-ma-md q-pa-sm items-center cursor-pointer"
              @click="menuAds()"
              v-if="$route.name != 'ads'"
            >
              <div class="FixleftSpace2"></div>
              <div class="iconDiv q-pt-sm">
                <img src="../../public/image/ads.svg" alt="" />
              </div>
              <div class="FixmiddleSpace2"></div>
              <div class="labelDiv">โฆษณา</div>
            </div>
            <div class="row bookLink q-ma-md q-pa-sm items-center" v-else>
              <div class="FixleftSpace2"></div>
              <div class="iconDiv q-pt-sm">
                <img src="../../public/image/adsblue.svg" alt="" />
              </div>
              <div class="FixmiddleSpace2"></div>
              <div class="labelDivBlue">โฆษณา</div>
            </div>
            <hr style="width: 270px" />
          </div>
          <!-- menu administrator -->
          <div v-if="menuData.admin == 1">
            <div
              class="row bookLink q-ma-md q-pa-sm cursor-pointer"
              @click="menuUser()"
              v-if="$route.name != 'user'"
            >
              <div class="leftSpace"></div>
              <div class="iconDiv">
                <img src="../../public/image/user.svg" alt="" />
              </div>
              <div class="FixmiddleSpace"></div>
              <div class="labelDiv">ผู้ใช้งาน</div>
            </div>
            <div class="row bookLink q-ma-md q-pa-sm" v-else>
              <div class="leftSpace"></div>
              <div class="iconDiv">
                <img src="../../public/image/userblue.svg" alt="" />
              </div>
              <div class="FixmiddleSpace"></div>
              <div class="labelDivBlue">ผู้ใช้งาน</div>
            </div>
          </div>
          <!-- menu sign out -->
          <div class="setBottom">
            <hr style="width: 270px" />
            <div
              class="row bookLink q-ma-md q-pa-sm cursor-pointer"
              @click="logoutBtn()"
            >
              <div class="leftSpace"></div>
              <div class="iconDiv q-pt-sm">
                <img src="../../public/image/signout.svg" alt="" />
              </div>
              <div class="middleSpace"></div>
              <div class="labelDiv">ออกจากระบบ</div>
            </div>
          </div>
        </div>
        <div class="col" style="height: 100vh">
          <q-page-container>
            <router-view />
          </q-page-container>
        </div>
      </div>
      <div class="bgdrop fullscreen" v-show="showBgDrop"></div>
      <!-- -logout dialog  -->
      <q-dialog v-model="logoutDialog" persistent>
        <q-card class="smallDialog">
          <q-card-section>
            <div class="items-center">
              <div class="row">
                <div class="col"></div>
                <img src="../../public/image/questionmark.svg" alt="" />
                <div style="width: 15px"></div>
                <div class="font18">ออกจากระบบ</div>
                <div class="col"></div>
              </div>
            </div>

            <hr />
            <div align="center">
              <div>คุณต้องการออกจากระบบ?</div>
            </div>
          </q-card-section>
          <q-card-actions align="center">
            <div class="row">
              <div
                class="cancelDiaBtn"
                @click="closeLogoutDialog()"
                align="center"
              >
                ยกเลิก
              </div>
              <div style="width: 20px"></div>
              <div @click="logout()" class="submitDiaBtn" align="center">
                ออกจากระบบ
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <!-- profile dialog -->
      <q-dialog v-model="profileDialog" persistent>
        <q-card class="smallDialog">
          <q-card-section>
            <div class="items-center">
              <div class="row">
                <div class="col"></div>
                <img src="../../public/image/questionmark.svg" alt="" />
                <div style="width: 15px"></div>
                <div class="font18">ผู้ใช้งาน</div>
                <div class="col"></div>
              </div>
            </div>

            <hr />
            <div align="center">
              <div>คุณต้องการออกจากระบบ?</div>
            </div>
          </q-card-section>
          <q-card-actions align="center">
            <div class="row">
              <div
                class="cancelDiaBtn"
                @click="closeProfileDialog()"
                align="center"
              >
                ยกเลิก
              </div>
              <div style="width: 20px"></div>
              <div @click="logout()" class="submitDiaBtn" align="center">
                ออกจากระบบ
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-layout>
</template>

<script>
import axios from "axios";
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      menuData: { book: 0, category: 0, rank: 0, ads: 0, admin: 0 },
      showBgDrop: false,
      logoutDialog: false,
      profileDialog: false,
    };
  },
  methods: {
    profielBtn() {
      this.showBgDrop = true;
      this.profileDialog = true;
    },

    logoutBtn() {
      this.showBgDrop = true;
      this.logoutDialog = true;
    },
    menuAds() {
      this.$router.push("ads");
    },
    menuRank() {
      this.$router.push("rank");
    },
    menuBook() {
      this.$router.push("book");
    },
    menuUser() {
      this.$router.push("user");
    },
    menuCategory() {
      this.$router.push("category");
    },
    async loadMenu() {
      let key = this.$q.localStorage.getItem("key");
      let dataSend = {
        key: key,
      };
      let url = this.serverpath + "loadmenulist.php";
      let res = await axios.post(url, JSON.stringify(dataSend));
      this.menuData.book = Number(res.data[0].book);
      this.menuData.category = Number(res.data[0].category);
      this.menuData.rank = Number(res.data[0].rank);
      this.menuData.ads = Number(res.data[0].ads);
      this.menuData.admin = Number(res.data[0].admin);
    },
    closeLogoutDialog() {
      this.showBgDrop = false;
      this.logoutDialog = false;
    },
    closeProfileDialog() {
      this.profileDialog = false;
      this.showBgDrop = false;
    },
    logout() {
      this.$q.localStorage.clear();
      this.$router.push("/");
    },
  },
  mounted() {
    this.loadMenu();
  },
};
</script>
<style lang="scss" scoped>
.submitDiaBtn {
  width: 120px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  color: white;
  background-color: #2d6be4;
  border-radius: 3px;
  cursor: pointer;
}
.cancelDiaBtn {
  width: 120px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #2d6be4;
  color: #2d6be4;
  cursor: pointer;
}
.setBottom {
  position: absolute;
  bottom: 0px;
  padding-left: 10px;
}
.leftdrawer {
  width: 300px;
  height: 100vh;
  background-color: white;
}
.fontUserName {
  font-size: 22px;
  line-height: 100px;
  padding-left: 15px;
}
.bookLink:hover {
  background-color: #e5eeff;
}
.iconDiv {
  width: 50px;
}
.labelDiv {
  font-size: 22px;
}
.labelDivBlue {
  font-size: 22px;
  color: #2d6be4;
}
.middleSpace {
  width: 10px;
}
.FixmiddleSpace {
  width: 15px;
}
.FixmiddleSpace2 {
  width: 20px;
}
.leftSpace {
  width: 45px;
}
.FixleftSpace {
  width: 42px;
}
.FixleftSpace2 {
  width: 38px;
}
</style>
