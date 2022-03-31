<template>
  <div
    class="mainPadding font16"
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
      <div class="font32 col" align="center">เพิ่มเรื่องใหม่</div>
      <div class="blockDiv"></div>
    </div>
    <hr />
    <div class="row q-py-md">
      <div class="col-3" align="center">
        <div class="infobox">
          <div>
            <img src="../../public/image/info.svg" alt="" />
          </div>
          <div class="font22">ข้อมูลทั่วไป</div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="labelDiv">ชื่อเรื่อง</div>
          <div class="col">
            <q-input v-model.trim="input.title" outlined dense />
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="labelDiv">หมวดหมู่</div>
          <div class="col">
            <q-select
              v-model="input.category"
              :options="categoryList"
              map-options
              emit-value
              outlined
              dense
            />
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="labelDiv">
            <div>เรื่องย่อ</div>
            <div class="font12 text-grey">มากสุด 500 ตัวอักษร</div>
          </div>
          <div class="col">
            <q-input
              v-model.trim="input.synposis"
              type="textarea"
              outlined
              dense
            />
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="labelDiv">แฟ้มข้อมูล</div>
          <div class="col">
            <q-input v-model.trim="input.folder" outlined dense />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="row q-py-md">
      <div class="col-3" align="center">
        <div class="infobox2">
          <div>
            <img src="../../public/image/picture.png" width="90px" alt="" />
          </div>
          <div class="font22">รูปภาพ</div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="labelDivwithsubtitle">
            <div>ภาพหน้าปก</div>
            <div class="font12 text-grey">ขนาด 225x325px</div>
          </div>
          <div class="col">
            <q-input
              v-model="input.coverfile"
              type="file"
              accept=".jpg"
              outlined
              dense
            />
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="labelDivwithsubtitle">
            <div>ภาพพื้นหลัง PC</div>
            <div class="font12 text-grey">ขนาด 1400x380px</div>
          </div>
          <div class="col">
            <q-input
              v-model="input.bg.pc"
              type="file"
              outlined
              dense
              accept=".jpg"
            />
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="labelDivwithsubtitle">
            <div>ภาพพื้นหลัง Tablet</div>
            <div class="font12 text-grey">ขนาด 225x325px</div>
          </div>
          <div class="col">
            <q-input
              v-model="input.bg.tablet"
              type="file"
              outlined
              dense
              accept=".jpg"
            />
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="labelDivwithsubtitle">
            <div>ภาพพื้นหลัง Mobile</div>
            <div class="font12 text-grey">ขนาด 225x325px</div>
          </div>
          <div class="col">
            <q-input
              v-model="input.bg.mobile"
              type="file"
              outlined
              dense
              accept=".jpg"
            />
          </div>
        </div>
      </div>
    </div>
    <div align="center" class="q-pt-md">
      <div class="row justify-center">
        <div><q-btn label="ยกเลิก" class="cancelBtn" @click="backBtn()" /></div>
        <div class="q-pl-md">
          <q-btn label="บันทึก" class="submitBtn" @click="saveBtn()" />
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
      input: {
        title: "",
        category: "",
        synposis: "",
        folder: "",
        coverfile: "",
        bg: {
          pc: "",
          tablet: "",
          mobile: "",
        },
      },
      categoryList: [],
    };
  },
  methods: {
    backBtn() {
      this.$router.push("/book");
    },
    async saveBtn() {
      //Check input
      console.log(this.input.coverfile[0].name);
      if (
        this.input.title.length == 0 ||
        this.input.category.length == 0 ||
        this.input.synposis.length == 0 ||
        this.input.folder.length == 0 ||
        this.input.coverfile[0] == undefined ||
        this.input.bg.pc[0] == undefined ||
        this.input.bg.tablet[0] == undefined ||
        this.input.bg.mobile[0] == undefined
      ) {
        this.redNotify("กรุณาใส่ข้อมูลให้ครบถ้วน");
        return;
      }

      //add database
      let dataTemp = {
        title: this.input.title,
        category: this.input.category,
        synposis: this.input.synposis,
        folder: this.input.folder,
        coverfile: this.input.coverfile[0].name,
        bg_pc: this.input.bg.pc[0].name,
        bg_tablet: this.input.bg.tablet[0].name,
        bg_mobile: this.input.bg.mobile[0].name,
      };
      let url = this.serverpath + "addnewbookinfo.php";
      let res = await axios.post(url, JSON.stringify(dataTemp));
      let recordId = res.data;
      const formData = new FormData();
      formData.append("id", recordId);
      formData.append("filebgpc", this.input.bg.pc[0]);
      formData.append("filebgtablet", this.input.bg.tablet[0]);
      formData.append("filebgmobile", this.input.bg.mobile[0]);

      const headers = { "Content-Type": "multipart/form-data" };
      axios.post(this.serverpath + "getimagefile.php", formData, { headers });
    },
    async loadCategory() {
      this.categoryList = [];
      let key = this.$q.localStorage.getItem("key");
      let dataSend = { key: key };
      let url = this.serverpath + "categorylist.php";
      let res = await axios.post(url, JSON.stringify(dataSend));
      res.data.forEach((item) => {
        let dataTemp = {
          label: item.name,
          value: item.catid,
        };
        this.categoryList.push(dataTemp);
      });
      this.input.category = this.categoryList[0];
    },
  },
  mounted() {
    this.loadCategory();
  },
};
</script>

<style lang="scss" scoped>
.blockDiv {
  width: 100px;
}
.labelDiv {
  width: 150px;
  padding-top: 5px;
}
.infobox {
  padding-top: 60px;
}
.infobox2 {
  padding-top: 30px;
}
.labelDivwithsubtitle {
  width: 150px;
  padding-top: 0px;
}
</style>
