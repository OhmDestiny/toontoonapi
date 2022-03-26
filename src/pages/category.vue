<template>
  <!-- add category button -->
  <div>
    <div class="heightSpace"></div>
    <div class="row">
      <div class="col-9"></div>
      <div class="addCategoryBTN q-pt-sm" @click="addCategoryBtn()">
        <div class="row justify-center">
          <div class="leftSpace"></div>
          <div class="iconDiv middleSpace">
            <img src="../../public/image/plus_symbol.svg" alt="" />
          </div>
          <div class="fontCategory">เพิ่มหมวดหมู่</div>
          <div class="rightSpace"></div>
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div class="heightSpace"></div>
    <!-- category box -->
    <div class="categoryBG">
      <div class="row headBarcategory items-center">
        <div class="col-1 font18" align="center">ลำดับ</div>
        <div class="col-5 q-pl-xl font18">หมวดหมู่</div>
        <div class="col-2 font18" align="center">ออนไลน์</div>
        <div class="col-2 font18" align="center">ลบออก</div>
        <div class="col font18" align="center">แก้ไข</div>
      </div>
      <hr />
      <!-- category column -->
      <div
        v-for="(item, index) in category"
        :key="index"
        class="q-pt-md row stripMain"
        :class="[index % 2 == 1 ? 'stripRow' : '']"
      >
        <div class="row headBarcategory items-center">
          <div class="col-1 font18" align="center">{{ index + 1 }}</div>
          <div class="col-5 q-pl-xl font18">{{ item.name }}</div>
          <div class="col-2" align="center">{{ item.online }}</div>
          <div
            class="iconDiv col-2"
            align="center"
            @click="delFormBtn(item.catid)"
          >
            <img src="../../public/image/trash_symbol.svg" alt="" />
          </div>
          <div class="iconDiv col" align="center" @click="clickEdit">
            <img src="../../public/image/edit_symbol.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="addNewDialog" persistent>
      <q-card class="mainDialog" style="height: 200px">
        <div align="center" class="q-pa-sm">เพิ่มหมวดหมู่</div>
        <hr />
        <div class="row">
          <div class="col-3 labelTxt" align="center">ชื่อหมวดหมู่</div>
          <div class="col-8">
            <q-input v-model="categoryName" outlined dense />
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
      <q-card class="mainDialog" style="height: 200px">
        <div align="center" class="q-pa-sm">ลบหมวดหมู่</div>
        <hr />
        <div class="q-px-md">คุณต้องการจะลบหมวดหมู่ :</div>
        <div class="row justify-center q-pt-md">
          <div class="q-pr-md">
            <q-btn
              class="shortInactiveBtn"
              label="ยกเลิก"
              outline
              @click="cancelDelBtn()"
            />
          </div>
          <div class="q-pl-md">
            <q-btn
              class="shortActiveBtn"
              label="บันทึก"
              @click="deleteRunBtn()"
            />
          </div>
        </div>
      </q-card>
    </q-dialog>
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
      deleteId: 0,
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
      } else {
        this.category = res.data;
        this.category.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
    },
    addCategoryBtn() {
      this.addNewDialog = true;
    },
    cancelBtn() {
      this.addNewDialog = false;
    },
    async saveBtn() {
      let url = this.serverpath + "addcategorylist.php";
      let dataSend = {
        category: this.categoryName,
      };
      let res = await axios.post(url, JSON.stringify(dataSend));
      this.loadData();
      this.addNewDialog = false;
    },
    delFormBtn(id) {
      this.deleteId = id;
      this.delDialog = true;
    },
    clickDel() {},
    clickEdit() {},
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.categoryBG {
  width: 781px;
  height: 774px;
  margin: auto;
}
.addCategoryBTN {
  width: 135px;
  height: 40px;
  border: 1px solid #515151;
  cursor: pointer;
}
.headBarcategory {
  width: 781px;
  height: 43px;
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
