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
              <img :src="profilePicFile" width="100px" />
            </div>
            <div class="fontUserName">{{ username }}</div>
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

      <!-- profile dialog header -->
      <q-dialog v-model="profileDialog" persistent>
        <q-card class="profileDialog" style="width: 750px; max-width: 80vw">
          <q-card-section>
            <div class="row">
              <div class="col-1"></div>
              <div class="col row justify-center">
                <div>
                  <img
                    class=""
                    :src="profilePicFile"
                    alt="ยีราฟ"
                    width="60px"
                  />
                </div>
                <div class="font22 q-pt-md q-pl-md">{{ username }}</div>
              </div>
              <div class="col-1"></div>
              <div class="cursor-pointer q-pt-md" @click="closeProfileDialog()">
                <img src="../../public/image/close-x.svg" alt="" />
              </div>
            </div>

            <hr />
            <!-- profile avatar change -->
            <div align="left">
              <div class="row">
                <div class="" style="width: 41%">
                  <div class="font22 q-pl-md">รูปโปรไฟล์</div>
                  <div class="avatarSpace"></div>
                  <div class="row q-pl-md">
                    <div v-if="profilePicId == '1'">
                      <img
                        src="../../public/image/avatar/1x.png"
                        alt="ยีราฟ"
                        width="80px "
                      />
                    </div>
                    <div v-else>
                      <img
                        src="../../public/image/avatar/1.png"
                        alt="ยีราฟ"
                        width="80px "
                        height="80px"
                      />
                    </div>
                    <div class="q-pl-md">
                      <div v-if="profilePicId == '2'">
                        <img
                          src="../../public/image/avatar/2x.png"
                          alt="กระรอก"
                          width="80px"
                        />
                      </div>
                      <div v-else>
                        <img
                          src="../../public/image/avatar/2.png"
                          alt="กระรอก"
                          width="80px"
                        />
                      </div>
                    </div>
                    <div class="q-pl-md">
                      <div v-if="profilePicId == '3'">
                        <img
                          src="../../public/image/avatar/3x.png"
                          alt="แพะ"
                          width="80px"
                        />
                      </div>
                      <div v-else>
                        <img
                          src="../../public/image/avatar/3.png"
                          alt="กระรอก"
                          width="80px"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="avatarSpace"></div>
                  <div class="row q-pl-md">
                    <div v-if="profilePicId == '4'">
                      <img
                        src="../../public/image/avatar/4x.png"
                        alt="แกะ"
                        width="80px"
                        height="80px"
                      />
                    </div>
                    <div v-else>
                      <img
                        src="../../public/image/avatar/4.png"
                        alt="กระรอก"
                        width="80px"
                      />
                    </div>
                    <div class="q-pl-md">
                      <div v-if="profilePicId == '5'">
                        <img
                          src="../../public/image/avatar/5x.png"
                          alt="ม้าลาย"
                          width="80px"
                        />
                      </div>
                      <div v-else>
                        <img
                          src="../../public/image/avatar/5.png"
                          alt="กระรอก"
                          width="80px"
                        />
                      </div>
                    </div>
                    <div class="q-pl-md">
                      <div v-if="profilePicId == '6'">
                        <img
                          src="../../public/image/avatar/6x.png"
                          alt="อัลปาก้า"
                          width="80px"
                        />
                      </div>
                      <div v-else>
                        <img
                          src="../../public/image/avatar/6.png"
                          alt="กระรอก"
                          width="80px"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="avatarSpace"></div>
                  <div class="row q-pl-md">
                    <div v-if="profilePicId == '7'">
                      <img
                        src="../../public/image/avatar/7x.png"
                        alt="กิ้งก่า"
                        width="80px"
                        height="80px"
                      />
                    </div>
                    <div v-else>
                      <img
                        src="../../public/image/avatar/7.png"
                        alt="กระรอก"
                        width="80px"
                      />
                    </div>
                    <div class="q-pl-md">
                      <div v-if="profilePicId == '8'">
                        <img
                          src="../../public/image/avatar/8x.png"
                          alt="ไก่"
                          width="80px"
                        />
                      </div>
                      <div v-else>
                        <img
                          src="../../public/image/avatar/8.png"
                          alt="กระรอก"
                          width="80px"
                        />
                      </div>
                    </div>
                    <div class="q-pl-md">
                      <div v-if="profilePicId == '9'">
                        <img
                          src="../../public/image/avatar/9x.png"
                          alt="ฮิปโป"
                          width="80px"
                        />
                      </div>
                      <div v-else>
                        <img
                          src="../../public/image/avatar/9.png"
                          alt="กระรอก"
                          width="80px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div style="width: 2%" align="center">
                  <div class="heightSeparator"></div>
                </div>
                <div class="" style="width: 57%">
                  <div class="font22 q-pl-md">แก้ไขรหัสผ่าน</div>
                  <!-- old password -->
                  <div class="row q-pt-sm">
                    <div class="row col q-pt-md justify-center">
                      <div class="font16 q-pt-sm q-pl-md">รหัสผ่านเดิม</div>
                      <div class="col"></div>
                      <div class="">
                        <q-input
                          style="width: 230px"
                          v-model.trim="input.password"
                          outlined
                          dense
                          :type="isPwd ? 'password' : 'text'"
                        >
                          <template v-slot:append>
                            <q-icon
                              :name="isPwd ? 'visibility_off' : 'visibility'"
                              class="cursor-pointer"
                              @click="isPwd = !isPwd"
                            /> </template
                        ></q-input>
                      </div>
                    </div>
                  </div>
                  <!-- new password -->
                  <div class="row q-pt-md">
                    <div class="row col q-pt-md justify-center">
                      <div class="font16 q-pt-sm q-pl-md">รหัสผ่านใหม่</div>
                      <div class="col"></div>
                      <div class="">
                        <q-input
                          style="width: 230px"
                          v-model.trim="input.newpassword"
                          outlined
                          :type="isPwd ? 'password' : 'text'"
                          dense
                        >
                          <template v-slot:append>
                            <q-icon
                              :name="isPwd ? 'visibility_off' : 'visibility'"
                              class="cursor-pointer"
                              @click="isPwd = !isPwd"
                            /> </template
                        ></q-input>
                        <div class="font12" style="color: #646464">
                          ต้องมีตัวอักษรอย่างน้อย 6 ตัว
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- confirm new password -->
                  <div class="row">
                    <div class="row col q-pt-md justify-center">
                      <div class="font16 q-pt-sm q-pl-md">
                        ยืนยันรหัสผ่านใหม่
                      </div>
                      <div class="col"></div>
                      <div class="">
                        <q-input
                          style="width: 230px"
                          v-model.trim="input.confirmnewpassword"
                          outlined
                          :type="isPwd ? 'password' : 'text'"
                          dense
                          ><template v-slot:append>
                            <q-icon
                              :name="isPwd ? 'visibility_off' : 'visibility'"
                              class="cursor-pointer"
                              @click="isPwd = !isPwd"
                            /> </template
                        ></q-input>
                        <div class="font12" style="color: #646464">
                          ต้องมีตัวอักษรอย่างน้อย 6 ตัว
                        </div>
                      </div>
                    </div>
                  </div>
                  <q-card-actions align="center">
                    <div class="row q-pt-sm">
                      <div style="width: 20px"></div>
                      <div
                        @click="profileChange()"
                        class="submitDiaBtn"
                        align="center"
                      >
                        บันทึก
                      </div>
                    </div>
                  </q-card-actions>
                </div>
              </div>
            </div>
          </q-card-section>
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
      showpicture: true,
      isPwd: true,
      leftDrawerOpen: false,
      menuData: { book: 0, category: 0, rank: 0, ads: 0, admin: 0 },
      showBgDrop: false,
      logoutDialog: false,
      profileDialog: false,
      input: {
        password: "",
        newpassword: "",
        confirmnewpassword: "",
      },
      username: "",
      profilePicId: "",
      profilePicFile: "",
    };
  },
  methods: {
    async loadAvatarPic() {
      let key = this.$q.localStorage.getItem("key");
      let dataSend = {
        key: key,
      };

      let url = this.serverpath + "getprofilepic.php";
      let res = await axios.post(url, JSON.stringify(dataSend));
      if (res.data == "go to login") {
        this.$q.localStorage.clear();
        this.$router.push("/");
        return;
      }
      this.username = res.data[0].username;
      this.profilePicId = res.data[0].profilepic;
      console.log(res.data);
      this.profilePicFile =
        this.serverpath + "avatar/" + this.profilePicId + ".png";
    },
    profielBtn() {
      this.showBgDrop = true;
      this.profileDialog = true;
    },
    async profileChange() {
      if (
        this.input.password.length >= 6 ||
        this.input.newpassword.length >= 6 ||
        this.input.confirmnewpassword.length >= 6
      ) {
        this.redNotify("กรุณากรอกรหัสผ่านให้ถูกต้อง");
        return;
      }
      if (this.input.newpassword != this.input.confirmnewpassword) {
        this.redNotify("กรุณายืนยันรหัสผ่านใหม่ให้ถูกต้อง");
      }
      let url = this.serverpath + "profilepasswordcheck.php";
      let res = await axios.post(url, JSON.stringify(this.input));
      console.log(res.data);
      if (res.data == "no") {
        this.redNotify("รหัสผ่านไม่ถูกต้องกรุณาลองใหม่อีกครั้ง");
        return;
      } else {
        this.greenNotify("รหัสผ่านไม่ถูกต้องกรุณาลองใหม่อีกครั้ง");
      }
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
    this.loadAvatarPic();
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
.profileDialog {
  border-radius: 30px;
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
.avatarSpace {
  height: 5px;
}
.heightSeparator {
  height: 324px;
  border: 1px solid #9a9a9a;
  width: 1px;
}
.inputTap {
  width: 230px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #313131;
}
</style>
