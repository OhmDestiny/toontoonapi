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
      <div class="font32 col" align="center">แก้ไขตอน</div>
      <div class="blockDiv"></div>
    </div>
    <hr />
    <div class="row">
      <div style="width: 200px">
        <img
          src="../../public/image/book.png"
          alt=""
          style="padding-top: 35px; padding-left: 20px"
        />
      </div>
      <div class="col">
        <div class="row">
          <div class="labelInput">ลำดับ</div>
          <div class="col">
            <q-input outlined dense v-model="input.orderid" />
          </div>
          <div style="width: 120px"></div>
        </div>
        <div class="row q-pt-md">
          <div class="labelInput">ประเภท</div>
          <div class="col">
            <q-select
              outlined
              dense
              :options="optionType"
              v-model="input.type"
            />
          </div>
          <div style="width: 120px"></div>
        </div>

        <div class="row q-pt-md">
          <div class="labelInput">ตอน</div>
          <div class="col">
            <q-input outlined dense v-model="input.episode" />
          </div>
          <div style="width: 120px"></div>
        </div>

        <div class="row q-pt-md">
          <div class="labelInput2">
            ภาพหน้าปก
            <div class="font12">jpg 225x325px</div>
          </div>
          <div class="col" v-if="fileInput.coverFile">
            <q-input
              outlined
              dense
              v-model="input.coverPage"
              type="file"
              accept=".jpg"
            />
          </div>
          <div v-else class="row blockblank">
            <div>{{ fileName.coverFile }}</div>
            <div class="q-pl-md cursor-pointer" @click="deleteCoverFile()">
              <img src="../../public/image/trash_symbol.svg" alt="" />
            </div>
          </div>
          <div style="width: 120px"></div>
        </div>

        <div class="row q-pt-md">
          <div class="labelInput2">
            ไฟล์การ์ตูน
            <div class="font12">jpg zip file</div>
          </div>
          <div class="col" v-if="fileInput.cartoonFile">
            <q-input
              outlined
              dense
              v-model="input.cartoonFile"
              type="file"
              accept=".zip"
            />
          </div>
          <div v-else class="row blockblank">
            <div>{{ fileName.cartoonFile }}</div>
            <div class="q-pl-md cursor-pointer" @click="deleteCartoonFile()">
              <img src="../../public/image/trash_symbol.svg" alt="" />
            </div>
          </div>
          <div style="width: 120px"></div>
        </div>

        <div align="center" class="q-pt-md">
          <div class="row justify-center">
            <div>
              <q-btn label="ยกเลิก" class="cancelBtn" @click="backBtn()" />
            </div>
            <div class="q-pl-md">
              <q-btn label="บันทึก" class="submitBtn" @click="saveBtn()" />
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
      cartoonid: this.$route.params.cartoon,
      pageid: this.$route.params.id,
      optionType: ["ตอนปกติ", "ตอนพิเศษ"],
      input: {
        orderid: "",
        type: "ตอนปกติ",
        episode: "",
        coverPage: "",
        cartoonFile: "",
      },
      fileInput: {
        coverFile: false,
        cartoonFile: false,
      },
      fileName: {
        coverFile: "",
        cartoonFile: "",
      },
    };
  },
  methods: {
    deleteCoverFile() {
      this.fileInput.coverFile = true;
    },
    deleteCartoonFile() {
      this.fileInput.cartoonFile = true;
    },
    backBtn() {
      this.$router.push("/bookpage/" + this.cartoonid);
    },
    async saveBtn() {
      if (this.input.orderid.length == 0 || this.input.episode.length == 0) {
        this.redNotify("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
      }
      if (this.fileInput.coverFile && this.input.coverPage == "") {
        this.redNotify("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
      }
      if (this.fileInput.cartoonFile && this.input.cartoonFile == "") {
        this.redNotify("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
      }
      let coverFileSave = "NONE";
      if (this.fileInput.coverFile) {
        coverFileSave = this.input.coverPage[0].name;
      }

      let cartoonFileSave = "NONE";
      if (this.fileInput.cartoonFile) {
        cartoonFileSave = this.input.cartoonFile[0].name;
      }

      let dataTemp = {
        recordid: this.pageid,
        type: this.input.type,
        orderid: this.input.orderid,
        chapter: this.input.episode,
        coverFile: coverFileSave,
        cartoonFile: cartoonFileSave,
      };
      let url = this.serverpath + "editchapterinfo.php";
      let res = await axios.post(url, JSON.stringify(dataTemp));

      const formData = new FormData();
      formData.append("id", this.pageid);
      formData.append("cartoonId", this.cartoonid);
      formData.append("coverfileSend", cartoonFileSave);
      formData.append("cartoonfileSend", this.cartoonFileSave);
      formData.append("coverfile", this.input.coverPage[0]);
      formData.append("cartoonfile", this.input.cartoonFile[0]);
      const headers = { "Content-Type": "multipart/form-data" };
      let res2 = await axios.post(
        this.serverpath + "geteditchapter.php",
        formData,
        { headers }
      );

      this.greenNotify("เพิ่มตอนใหม่สำเร็จ");
      this.backBtn();
    },
    async loadData() {
      let key = this.$q.localStorage.getItem("key");
      if (key == null) {
        this.$router.push("/");
        return;
      }
      let dataTemp = {
        id: this.pageid,
        key: key,
      };
      let url = this.serverpath + "loadchapterinfo.php";
      let res = await axios.post(url, JSON.stringify(dataTemp));
      if (res.data == "go to welcome") {
        this.$router.push("/welcome");
        return;
      } else if (res.data == "go to login") {
        this.localStorage.clear();
        this.$router.push("/");
        return;
      }
      this.input.orderid = res.data[0].orderid;
      this.input.type = res.data[0].type;
      this.input.episode = res.data[0].chapter;
      this.fileName.coverFile = res.data[0].coverfile;
      this.fileName.cartoonFile = res.data[0].cartoonfile;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.labelInput {
  width: 120px;
  padding-top: 10px;
}
.labelInput2 {
  width: 120px;
}
.stripRow {
  background-color: rgba($color: #7291ff, $alpha: 0.15);
}
.blockblank {
  border: 1.5px solid #bbbcbf;
  border-radius: 4px;
  width: 75%;
  line-height: 40px;
  padding-left: 10px;
}
</style>
