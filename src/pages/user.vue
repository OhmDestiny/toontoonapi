<template>
  <div class="mainPadding" style="width: 100%; margin: auto">
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
                  v-model="addNewUserDiaInput.username"
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
                  v-model="addNewUserDiaInput.password"
                  dense
                />
              </div>
              <div class="row">
                <div class="col-3"></div>
                <div class="font14" style="color: #646464">
                  ต้องมีอักษรอย่างน้อย5ตัว
                </div>
              </div>
              <!-- radio -->
              <div class="row q-pt-md">
                <div class="font18 col-2" align="center">การเข้าถึง</div>
                <div class="" style="width: 45px"></div>
                <q-option-group
                  class="font16"
                  :options="userAccessCheckList"
                  type="checkbox"
                  v-model="userAccess"
                />
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
                <div class="submitAdNewUserDiaBtn" align="center">ตกลง</div>
              </div>
            </q-card-actions>
            <div style="height: 40px"></div>
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
      <div class="q-pt-md row" v-for="(item, index) in userData" :key="index">
        <div class="colTable">{{ index + 1 }}</div>
        <div class="colTable">{{ item.username }}</div>
        <div class="colTable">{{ item.book }}</div>
        <div class="colTable">{{ item.category }}</div>
        <div class="colTable">{{ item.rank }}</div>
        <div class="colTable">{{ item.ads }}</div>
        <div class="colTable">{{ item.admin }}</div>
        <div class="colTable">ลบ</div>
        <div class="colTable">แก้ไข</div>
      </div>
    </div>
    <div class="fullscreen backdrop" v-if="showBackDrop"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userData: [
        {
          userid: 1,
          username: "test",
          book: 1,
          category: 0,
          rank: 1,
          ads: 1,
          admin: 1,
        },
        {
          userid: 2,
          username: "test1",
          book: 1,
          category: 0,
          rank: 0,
          ads: 1,
          admin: 1,
        },
      ],
      addNewUserDia: false,
      showBackDrop: false,
      addNewUserDiaInput: {
        username: "",
        password: "",
      },
      userAccess: [],
      userAccessCheckList: [
        { label: "หนังสือ", value: "book", color: "blue" },
        { label: "หมวดหมู่", value: "category", color: "blue" },
        { label: "อันดับ", value: "rank", color: "blue" },
        { label: "โฆกษณา", value: "ads", color: "blue" },
        { label: "ผู้ดูแลระบบ", value: "admin", color: "blue" },
      ],
    };
  },
  methods: {
    async loadUser() {
      let url = this.serverpath + "userlist.php";
      let res = await axios.get(url);
    },
    showAddNewUserDia() {
      this.addNewUserDia = true;
      this.showBackDrop = true;
    },
    closeAddNewUserDia() {
      this.addNewUserDia = false;
      this.showBackDrop = false;
    },
    addNewUserBtn() {
      this.showAddNewUserDia();
      // console.log(this.showAddNewUserDia);
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
.dialogWidth {
  width: 600px;
}
.backdrop {
  background-color: rgba($color: #535353, $alpha: 0.8);
}
</style>
