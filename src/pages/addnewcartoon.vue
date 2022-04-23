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
              multiple
              map-options
              emit-value
              outlined
              use-input
              use-chips
              dense
            />
          </div>
        </div>

        <div class="row q-pt-sm">
          <div class="labelDiv">
            <div>เรื่องย่อ</div>
            <div class="font12 text-grey">มากสุด 500 ตัวอักษร</div>
          </div>
          <div class="col">
            <div>
              <div>
                <q-input
                  v-model.trim="input.synposis"
                  type="textarea"
                  outlined
                  dense
                />
              </div>
            </div>
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
    <div class="row q-py-sm">
      <div class="col-3" align="center">
        <div>
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
          <div class="col" style="padding-top: 30px">
            <q-input
              v-model="input.coverfile"
              type="file"
              accept=".jpg"
              outlined
              dense
            />
          </div>
        </div>
      </div>
    </div>
    <div align="center">
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
        category: [],
        synposis: "",
        folder: "",
        coverfile: "",
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
      if (
        this.input.title.length == 0 ||
        this.input.category.length == 0 ||
        this.input.synposis.length == 0 ||
        this.input.folder.length == 0 ||
        this.input.coverfile[0] == undefined
      ) {
        this.redNotify("กรุณาใส่ข้อมูลให้ครบถ้วน");
        return;
      }
      let categoryData = "";
      this.input.category.forEach((x) => {
        categoryData += "[" + x + "],";
      });

      categoryData = categoryData.slice(0, -1);
      let key = this.$q.localStorage.getItem("key");
      //add database
      let dataTemp = {
        key: key,
        title: this.input.title,
        category: categoryData,
        synposis: this.input.synposis,
        folder: this.input.folder,
        coverfile: this.input.coverfile[0].name,
      };
      let url = this.serverpath + "addnewbookinfo.php";
      let res = await axios.post(url, JSON.stringify(dataTemp));
      let recordId;
      if (res.data == "go to welcome") {
        this.$router.push("/welcome");
        return;
      } else if (res.data == "go to login") {
        this.$q.localStorage.clear();
        this.$router.push("/");
        return;
      } else if (res.data == "The directory exists.") {
        this.redNotify("แฟ้มข้อมูลนี้มีการใช้งานแล้ว");
        return;
      } else {
        recordId = res.data;
      }

      //add file
      const formData = new FormData();
      formData.append("id", recordId);
      formData.append("filecoverfile", this.input.coverfile[0]);

      const headers = { "Content-Type": "multipart/form-data" };
      axios.post(this.serverpath + "getimagefile.php", formData, { headers });
      this.greenNotify("บันทึกข้อมูลเรียบร้อยแล้ว");
      this.$router.push("/book");
    },
    async loadCategory() {
      this.categoryList = [];
      let key = this.$q.localStorage.getItem("key");
      let dataSend = { key: key };
      let url = this.serverpath + "categorylistinbook.php";
      let res = await axios.post(url, JSON.stringify(dataSend));
      if (res.data == "go to welcome") {
        this.$router.push("welcome");
        return;
      } else if (res.data == "go to login") {
        this.$q.localStorage.clear();
        this.$router.push("/");
        return;
      }
      res.data.forEach((item) => {
        let dataTemp = {
          label: item.name,
          value: item.catid,
        };
        this.categoryList.push(dataTemp);
      });
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

.labelDivwithsubtitle {
  width: 150px;
  padding-top: 30px;
}
.borderSynopsis {
  border: 1.5px solid #c9cace;
  height: 60px;
  line-height: 60px;
  border-radius: 5px;
}
</style>
