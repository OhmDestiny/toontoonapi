<template>
  <div
    class="mainPadding"
    style="width: 100%; max-width: 1600px; margin: auto; height: 100px"
  >
    <div>
      <div align="right" style="100%">
        <div
          @click="addNewUserBtn()"
          class="adNewUser row items-center justify-evenly"
        >
          <q-icon size="21px" name="fa-solid fa-plus" />
          <div class="font16">เพิ่มผู้ใช้งาน</div>
        </div>
        <!-- ad new user dialog -->
        <q-dialog v-model="addNewUserDia" persistent>
          <q-card style="width: 700px; max-width: 80vw">
            <q-card-section>
              <div class="font22" align="center">เพิ่มผู้ใช้งาน</div>
              <div align="center">
                <hr style="width: " />
              </div>
            </q-card-section>
            <q-card-section>
              <div class="row items-center">
                <div class="font18 col-2" align="center">ชื่อผู้ใช้งาน</div>
                <div class="col-1"></div>
                <q-input
                  class="col"
                  style="width: 430px"
                  outlined
                  v-model.trim="input.username"
                  dense
                />
              </div>
              <div class="row items-center q-pt-lg">
                <div class="font18 col-2" align="center">รหัสผ่าน</div>
                <div class="col-1"></div>
                <q-input
                  class="col"
                  style="width: 430px"
                  outlined
                  v-model.trim="input.password"
                  dense
                />
              </div>
              <div class="row">
                <div class="col-3"></div>
                <div class="font14" style="color: #646464">
                  ต้องมีอักษรอย่างน้อย 6 ตัว
                </div>
              </div>
              <!-- radio -->
              <div class="row q-pt-md">
                <div class="font18 col-2" align="center">การเข้าถึง</div>
                <div class="" style="width: 45px"></div>
                <div>
                  <div class="font16px">
                    <q-checkbox v-model="userAccess.book" />
                    หนังสือ
                  </div>
                  <div class="font16px">
                    <q-checkbox v-model="userAccess.category" />
                    หมวดหมู่
                  </div>
                  <div class="font16px">
                    <q-checkbox v-model="userAccess.rank" />
                    อันดับ
                  </div>
                  <div class="font16px">
                    <q-checkbox v-model="userAccess.ads" />
                    โฆษณา
                  </div>
                  <div class="font16px">
                    <q-checkbox v-model="userAccess.admin" />
                    ผู้ดูแลระบบ
                  </div>
                </div>
              </div>
            </q-card-section>
            <q-card-actions align="center">
              <div class="row">
                <div
                  class="cancelAdNewUserDiaBtn"
                  @click="closeAddNewUserDia()"
                  align="center"
                >
                  ยกเลิก
                </div>
                <div style="width: 20px"></div>
                <div
                  @click="submitUpdateUser()"
                  class="submitAdNewUserDiaBtn"
                  align="center"
                >
                  ตกลง
                </div>
              </div>
            </q-card-actions>
            <br />
          </q-card>
        </q-dialog>

        <!-- alert delete dialog  -->
        <q-dialog v-model="delUserDia" persistent>
          <q-card>
            <q-card-section>
              <div class="items-center">
                <div class="row">
                  <div class="col"></div>
                  <img src="../../public/image/alertBinIcon.svg" alt="" />
                  <div style="width: 15px"></div>
                  <div class="font18">ลบผู้ใช้งาน</div>
                  <div class="col"></div>
                </div>
              </div>

              <hr style="width: 400px" />
              <div align="center">
                <div>
                  คุณต้องการลบผู้ใช้งาน:
                  <i>{{ delItem.name }}</i
                  >?
                </div>
              </div>
            </q-card-section>
            <q-card-actions align="center">
              <div class="row">
                <div
                  class="cancelAdNewUserDiaBtn"
                  @click="closeDelUserDia()"
                  align="center"
                >
                  ยกเลิก
                </div>
                <div style="width: 20px"></div>
                <div
                  @click="delUserBtn()"
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
      </div>
      <!-- table header -->
      <div class="q-pt-md row">
        <div class="colTable">ลำดับ</div>
        <div class="colTable">ชื่อผู้ใช้งาน</div>
        <div class="colTable">หนังสือ</div>
        <div class="colTable">หมวดหมู่</div>
        <div class="colTable">อันดับ</div>
        <div class="colTable">โฆษณา</div>
        <div class="colTable">ผู้ใช้งาน</div>
        <div class="colTable">ลบ</div>
        <div class="colTable">แก้ไข</div>
      </div>
      <hr />
      <div
        class="q-pt-md row stripMain"
        v-for="(item, index) in userData"
        :key="index"
        :class="[index % 2 == 1 ? 'stripRow' : '']"
      >
        <div class="colTable">{{ index + 1 }}</div>
        <div class="colTable">{{ item.username }}</div>
        <div class="colTable">
          <check-pic :checkValue="item.book"></check-pic>
        </div>
        <div class="colTable">
          <check-pic :checkValue="item.category"></check-pic>
        </div>
        <div class="colTable">
          <check-pic :checkValue="item.rank"></check-pic>
        </div>
        <div class="colTable">
          <check-pic :checkValue="item.ads"></check-pic>
        </div>
        <div class="colTable">
          <check-pic :checkValue="item.admin"></check-pic>
        </div>
        <div
          @click="showDeluserDia(item.userid, item.username)"
          class="colTable cursor-pointer"
        >
          <img width="20px" src="../../public/image/delete.svg" alt="" />
        </div>
        <div class="colTable cursor-pointer">
          <img width="20px" src="../../public/image/edit.svg" alt="" />
        </div>
      </div>
      <div class="fullscreen backdrop" v-if="showBackDrop"></div>
    </div>

    <!-- problem dialog  -->
    <q-dialog v-model="problemAlertDia" persistent>
      <q-card>
        <q-card-section>
          <div class="row items-center">
            <div class="col"></div>
            <img src="../../public/image/alertDiaIcon.svg" alt="" />
            <div style="width: 20px"></div>
            <div class="font22">ข้อผิดพลาด</div>
            <div class="col"></div>
          </div>
          <hr style="width: 400px" />
          <div class="q-pt-md" align="center">
            <div class="font18" align="center">{{ this.problemText }}</div>
          </div>
        </q-card-section>
        <q-card-action>
          <div align="center">
            <div @click="closeProbDia()" class="submitAlertDiaBtn font18">
              ตกลง
            </div>
          </div>
          <br />
        </q-card-action>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import axios from "axios";
import checkPic from "../components/checkinuser";
export default {
  components: { checkPic },
  data() {
    return {
      userData: [],
      input: {
        username: "",
        password: "",
      },
      addNewUserDia: false,
      showBackDrop: false,
      delUserDia: false,
      delItem: {
        id: "",
        name: "",
      },
      userAccess: {
        book: false,
        category: false,
        rank: false,
        ads: false,
        admin: false,
      },

      problemAlertDia: false,
      problemText: "",
    };
  },
  methods: {
    async loadUser() {
      let key = this.$q.localStorage.getItem("key");
      let dataSend = { key: key };

      let url = this.serverpath + "userlist.php";
      let res = await axios.post(url, JSON.stringify(dataSend));
      if (res.data == "go to welcome") {
        this.$router.push("welcome");
      } else if (res.data == "go to login") {
        this.$q.localStorage.clear();
      } else {
        this.userData = res.data;
      }
    },

    closeAddNewUserDia() {
      this.addNewUserDia = false;
      this.showBackDrop = false;
      this.input.username = "";
      this.input.password = "";
      this.userAccess = [];
    },
    showAddNewUserDia() {
      this.addNewUserDia = true;
      this.showBackDrop = true;
    },
    addNewUserBtn() {
      this.showAddNewUserDia();
      // console.log(this.showAddNewUserDia);
    },

    // del user
    showDeluserDia(id, name) {
      this.delItem.id = id;
      this.delItem.name = name;
      this.delUserDia = true;
      this.showBackDrop = true;
    },
    closeDelUserDia() {
      this.delUserDia = false;
      this.showBackDrop = false;
    },
    delUserBtn() {
      this.greenNotify("ลบชื่อผู้ใช้งานสำเร็จ");
    },

    // กดปุุ่ม ตกลงหน้า ad user dialog
    async submitUpdateUser() {
      if (this.input.username == 0 || this.input.password == 0) {
        this.showProbDia();
        this.problemText = "กรุณาระบุผู้ใช้งาน";
        return;
      } else if (this.input.password.length < 6) {
        this.showProbDia();
        this.problemText = "กรุณาระบุรหัสผ่านอย่างน้อย 6 ตัว";
        return;
      } else if (this.userAccess < 1) {
        this.showProbDia();
        this.problemText = "คุณต้องเลือกการเข้าถึงอย่างน้อย 1 ตัวเลือก";
        return;
      }
      console.log(this.userAccess);
      let key = this.$q.localStorage.getItem("key");
      let dataSend = {
        key: key,
        username: this.input.username,
        password: this.input.password,
        book: this.userAccess.book ? 1 : 0,
        category: this.userAccess.category ? 1 : 0,
        rank: this.userAccess.rank ? 1 : 0,
        ads: this.userAccess.ads ? 1 : 0,
        admin: this.userAccess.admin ? 1 : 0,
      };

      let url = this.serverpath + "addnewuser.php";
      let res = await axios.post(url, JSON.stringify(dataSend));
      if (res.data == "go to welcome") {
        this.$router.push("welcome");
      } else if (res.data == "go to login") {
        this.$q.localStorage.clear();
      } else {
        this.closeAddNewUserDia();
        this.greenNotify("เพิ่มผู้ใช้งานสำเร็จ");
        this.mounted();
      }
    },

    showProbDia() {
      this.problemAlertDia = true;
    },

    closeProbDia() {
      this.problemAlertDia = false;
    },
  },
  mounted() {
    this.loadUser();
  },
};
</script>

<style lang="scss" scoped>
.colTable {
  width: 11.1%;
  text-align: center;
}
.adNewUser {
  width: 135px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #474747;
  color: #474747;
  cursor: pointer;
}
.stripRow {
  background-color: rgba($color: #7291ff, $alpha: 0.15);
}
.stripMain {
  vertical-align: middle;
  line-height: 40px;
}
.submitAdNewUserDiaBtn {
  width: 120px;
  height: 40px;
  line-height: 40px;
  color: white;
  background-color: #2d6be4;
  border-radius: 3px;
  cursor: pointer;
}
.cancelAdNewUserDiaBtn {
  width: 120px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #2d6be4;
  color: #2d6be4;
  cursor: pointer;
}
.delUserDiaBtn {
  width: 120px;
  height: 40px;
  line-height: 40px;
  color: white;
  background-color: #2d6be4;
  border-radius: 3px;
  cursor: pointer;
}
.backdrop {
  background-color: rgba($color: #535353, $alpha: 0.8);
}
.submitAlertDiaBtn {
  width: 120px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  color: white;
  background-color: #2d6be4;
  border-radius: 3px;
  cursor: pointer;
}
</style>
