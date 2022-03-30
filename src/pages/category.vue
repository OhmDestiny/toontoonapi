<template>
  <!-- add category button -->
  <div
    class="mainPadding"
    style="width: 100%; max-width: 1600px; margin: auto; height: 100px"
  >
    <div>
      <div align="right" style="100%">
        <div
          @click="addCategoryBtn()"
          class="adNewCategory row items-center justify-evenly"
        >
          <q-icon size="21px" name="fa-solid fa-plus" />
          <div class="font16">เพิ่มผู้ใช้งาน</div>
        </div>
      </div>
      <div class="heightSpace"></div>
      <!-- category box -->

      <div class="q-pt-md row">
        <div class="colTable font18" align="center">ลำดับ</div>
        <div class="colTable2 q-pl-xl font18">หมวดหมู่</div>
        <div class="colTable font18" align="center">ออนไลน์</div>
        <div class="colTable font18" align="center">ลบออก</div>
        <div class="colTable font18" align="center">แก้ไข</div>
      </div>

      <hr />
      <!-- category column -->
      <div
        v-for="(item, index) in category"
        :key="index"
        class="q-pt-md row stripMain"
        :class="[index % 2 == 1 ? 'stripRow' : '']"
      >
        <div class="colTable font18" align="center">{{ index + 1 }}</div>
        <div class="colTable2 q-pl-xl font18">{{ item.name }}</div>
        <div
          class="colTable onlineBTN"
          align="center"
          @click="changeCategoryData(item.catid, item.online)"
        >
          <div class="" v-if="item.online == 1">
            <img src="../../public/image/online_btn.svg" alt="" />
          </div>
          <div class="" v-else>
            <img src="../../public/image/offline_btn.svg" alt="" />
          </div>
        </div>
        <div
          class="iconDiv colTable"
          align="center"
          @click="delFormBtn(item.catid, item.name)"
        >
          <img width="20px" src="../../public/image/trash_symbol.svg" alt="" />
        </div>
        <div
          class="iconDiv colTable"
          align="center"
          @click="editFormBtn(item.catid, item.name)"
        >
          <img width="20px" src="../../public/image/edit_symbol.svg" alt="" />
        </div>
      </div>

      <q-dialog v-model="addNewDialog" persistent>
        <q-card class="mainDialog" style="height: 200px">
          <div align="center" class="q-pa-sm">เพิ่มหมวดหมู่</div>
          <hr />
          <div class="row">
            <div class="col-3 labelTxt" align="center">ชื่อหมวดหมู่</div>
            <div class="col-8">
              <q-input
                v-model="categoryName"
                outlined
                dense
                @keyup.enter="saveBtn()"
              />
            </div>
            <div class="col-1"></div>
          </div>
          <div class="row justify-center q-pt-md">
            <div class="q-pr-md">
              <q-btn
                class="shortInactiveBtn"
                label="ยกเลิก"
                outline
                @click="cancelBtn()"
              />
            </div>
            <div class="q-pl-md">
              <q-btn class="shortActiveBtn" label="บันทึก" @click="saveBtn()" />
            </div>
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="delDialog" persistent>
        <q-card style="height: 180px; width: 500px">
          <div align="center" class="q-pa-sm">ลบหมวดหมู่</div>
          <hr />
          <div class="q-px-md" align="center">
            คุณต้องการจะลบหมวดหมู่ <i>{{ deleteItem.name }}</i> ?
          </div>
          <div class="row justify-center q-pt-md">
            <div class="q-pr-md">
              <q-btn
                class="shortInactiveBtn"
                label="ยกเลิก"
                outline
                @click="deleteCancelBtn()"
              />
            </div>
            <div class="q-pl-md">
              <q-btn
                class="shortActiveBtn"
                label="ลบ"
                @click="deleteRunBtn()"
              />
            </div>
          </div>
        </q-card>
      </q-dialog>

      <q-dialog v-model="editDialog" persistent>
        <q-card class="mainDialog" style="height: 200px">
          <div align="center" class="q-pa-sm">แก้ไขหมวดหมู่</div>
          <hr />
          <div class="row">
            <div class="col-3 labelTxt" align="center">ชื่อหมวดหมู่</div>
            <div class="col-8">
              <q-input
                v-model="editItem.name"
                outlined
                dense
                @keyup.enter="saveEditBtn()"
              />
            </div>
            <div class="col-1"></div>
          </div>
          <div class="row justify-center q-pt-md">
            <div class="q-pr-md">
              <q-btn
                class="shortInactiveBtn"
                label="ยกเลิก"
                outline
                @click="cancelEditBtn()"
              />
            </div>
            <div class="q-pl-md">
              <q-btn
                class="shortActiveBtn"
                label="บันทึก"
                @click="saveEditBtn()"
              />
            </div>
          </div>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      category: [],
      addNewDialog: false,
      categoryName: "",
      delDialog: false,
      deleteItem: {
        id: "",
        name: "",
      },
      editDialog: false,
      editItem: {
        id: "",
        name: "",
      },
    };
  },
  methods: {
    async loadData() {
      this.category = [];
      let key = this.$q.localStorage.getItem("key");
      let dataSend = { key: key };
      let url = this.serverpath + "categorylist.php";
      let res = await axios.post(url, JSON.stringify(dataSend));
      if (res.data == "go to welcome") {
        this.$router.push("welcome");
      } else if (res.data == "go to login") {
        this.$q.localStorage.clear();
        this.$router.push("/");
      } else {
        this.category = res.data;
        this.category.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
    },
    async changeCategoryData(id, data) {
      let url = this.serverpath + "updatecategorydata.php";
      let key = this.$q.localStorage.getItem("key");
      let dataSend = {
        catid: id,
        online: data,
        key: key,
      };
      let res = await axios.post(url, JSON.stringify(dataSend));
      if (res.data == "go to welcom") {
        this.$router.push("welcome");
      } else if (res.data == "go to login") {
        this.$q.localStorage.clear();
        this.$router.push("/");
      } else if (res.data == "online") {
        this.loadData();
      } else res.data == "offlline";
      this.loadData();
    },
    addCategoryBtn() {
      this.addNewDialog = true;
    },
    cancelBtn() {
      this.addNewDialog = false;
    },
    async saveBtn() {
      let url = this.serverpath + "addcategory.php";
      let key = this.$q.localStorage.getItem("key");
      let dataSend = {
        category: this.categoryName,
        key: key,
      };
      let res = await axios.post(url, JSON.stringify(dataSend));
      if (res.data == "go to welcome") {
        this.$router.push("welcome");
      } else if (res.data == "go to login") {
        this.$q.localStorage.clear();
        this.$router.push("/");
      } else {
        this.loadData();
        this.addNewDialog = false;
        this.greenNotify("เพิ่มหมวดหมู่");
      }
    },
    delFormBtn(id, name) {
      this.deleteItem.id = id;
      this.deleteItem.name = name;
      this.delDialog = true;
    },
    async deleteRunBtn() {
      let key = this.$q.localStorage.getItem("key");
      let dataSend = {
        id: this.deleteItem.id,
        key: key,
      };
      let url = this.serverpath + "delcategory.php";
      let res = await axios.post(url, JSON.stringify(dataSend));
      if (res.data == "go to welcome") {
        this.$router.push("welcome");
      } else if (res.data == "go to login") {
        this.$q.localStorage.clear();
        this.$router.push("/");
      } else {
        this.loadData();
        this.delDialog = false;
        this.greenNotify("ลบหมวดหมู่สำเร็จ");
      }
    },
    deleteCancelBtn() {
      this.delDialog = false;
    },
    editFormBtn(id, name) {
      this.editItem.name = name;
      this.editItem.id = id;
      this.editDialog = true;
    },
    cancelEditBtn() {
      this.editDialog = false;
    },
    async saveEditBtn() {
      let key = this.$q.localStorage.getItem("key");
      let dataSend = {
        id: this.editItem.id,
        name: this.editItem.name,
        key: key,
      };
      let url = this.serverpath + "editcategory.php";
      let res = await axios.post(url, JSON.stringify(dataSend));
      if (res.data == "go to welcome") {
        this.$router.push("welcome");
      } else if (res.data == "go to login") {
        this.$q.localStorage.clear();
        this.$router.push("/");
      } else {
        this.loadData();
        this.editDialog = false;
        this.greenNotify("แก้ไขหมวดหมู่สำเร็จ");
      }
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.adNewCategory {
  width: 135px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #474747;
  color: #474747;
  cursor: pointer;
}
.colTable {
  width: 15%;
  text-align: center;
}
.colTable2 {
  width: 40%;
  text-align: left;
}
.addCategoryBTN {
  width: 135px;
  height: 40px;
  border: 1px solid #515151;
  cursor: pointer;
}
.middleSpace {
  width: 30px;
}
.leftSpace {
  width: 5px;
}
.fontCategory {
  font-size: 16px;
  line-height: 20px;
  padding-left: 0px;
}
.heightSpace {
  height: 40px;
}
.rightSpace {
  width: 5px;
}
.iconDiv {
  cursor: pointer;
}
.onlineBTN {
  cursor: pointer;
}
.stripRow {
  background-color: rgba($color: #7291ff, $alpha: 0.15);
}
.stripMain {
  vertical-align: middle;
  line-height: 40px;
}

.labelTxt {
  line-height: 45px;
}
</style>
