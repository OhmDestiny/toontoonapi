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
      <div class="font32 col" align="center">แก้ไขเนื้อเรื่อง</div>
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
                  v-model.trim="input.synopsis"
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
          <div class="col row" style="padding-top: 30px" v-if="!delFileCover">
            <div>{{ oldFileName }}</div>
            <div
              style="padding-left: 5px"
              class="cursor-pointer"
              @click="deleteFile()"
            >
              <img src="../../public/image/trash_symbol.svg" alt="" />
            </div>
          </div>
          <div class="col row" style="padding-top: 30px" v-else>
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
    <!-- alert delete dialog  -->
    <q-dialog v-model="delFileDialog" persistent>
      <q-card>
        <q-card-section>
          <div class="items-center">
            <div class="row">
              <div class="col"></div>
              <img src="../../public/image/alertBinIcon.svg" alt="" />
              <div style="width: 15px"></div>
              <div class="font18">ลบรูปภาพ</div>
              <div class="col"></div>
            </div>
          </div>

          <hr style="width: 400px" />
          <div align="center">
            <div>คุณต้องการลบรูปภาพ?</div>
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
      input: {
        title: "",
        category: [],
        synopsis: "",
        folder: "",
        coverfile: "",
      },
      oldFileName: "",
      oldfolder: "",
      categoryList: [],
      cartoonid: this.$route.params.id,
      delFileDialog: false,
      showBackDrop: false,
      delFileCover: false,
    };
  },
  methods: {
    async saveBtn() {
      //Check data
      if (
        this.input.title.length == 0 ||
        this.input.category.length == 0 ||
        this.input.synopsis.length == 0 ||
        this.input.folder.length == 0
      ) {
        this.redNotify("กรุณาใส่ข้อมูลให้ครบถ้วน");
        return;
      }
      if (this.delFileCover) {
        if (this.input.coverfile[0] == undefined) {
          this.redNotify("กรุณาใส่ข้อมูลให้ครบถ้วน");
          return;
        }
      }

      let categoryData = "";
      this.input.category.forEach((x) => {
        categoryData += "[" + x + "],";
      });
      let themeid;
      categoryData = categoryData.slice(0, -1);
      let key = this.$q.localStorage.getItem("key");
      //add database
      let dataTemp;
      if (this.delFileCover) {
        dataTemp = {
          key: key,
          title: this.input.title,
          category: categoryData,
          synopsis: this.input.synopsis,
          folder: this.input.folder,
          coverfile: this.input.coverfile[0].name,
          newfile: true,
          id: this.cartoonid,
          oldfolder: this.oldfolder,
        };
      } else {
        dataTemp = {
          key: key,
          title: this.input.title,
          category: categoryData,
          synopsis: this.input.synopsis,
          folder: this.input.folder,
          coverfile: this.oldFileName,
          newfile: false,
          id: this.cartoonid,
          oldfolder: this.oldfolder,
        };
      }
      let url = this.serverpath + "editbookinfo.php";
      let res = await axios.post(url, JSON.stringify(dataTemp));

      //add file
      if (this.delFileCover) {
        const formData = new FormData();
        formData.append("id", this.cartoonid);
        formData.append("filecoverfile", this.input.coverfile[0]);

        const headers = { "Content-Type": "multipart/form-data" };
        axios.post(this.serverpath + "getimagefile.php", formData, { headers });
      }
      this.greenNotify("บันทึกข้อมูลเรียบร้อยแล้ว");
      this.$router.push("/bookpage/" + this.cartoonid);
    },
    confirmDelBtn() {
      this.delFileCover = true;
      this.delFileDialog = false;
      this.showBackDrop = false;
    },
    deleteFile() {
      this.delFileDialog = true;
      this.showBackDrop = true;
    },
    closeDelDia() {
      this.delFileDialog = false;
      this.showBackDrop = false;
    },
    backBtn() {
      this.$router.push("/bookpage/" + this.cartoonid);
    },
    async loadData() {
      let key = this.$q.localStorage.getItem("key");
      let dataTemp = {
        key: key,
        cartoonid: this.cartoonid,
      };
      let url = this.serverpath + "getbookinfo.php";
      let res = await axios.post(url, JSON.stringify(dataTemp));
      this.input.title = res.data[0].title;
      this.input.synopsis = res.data[0].synopsis;

      this.input.category = res.data[0].catid
        .split(",")
        .map((x) => x.replace("[", "").replace("]", ""));
      this.input.folder = res.data[0].folder;
      this.oldfolder = res.data[0].folder;
      this.oldFileName = res.data[0].coverfile;
      // console.log(res.data);
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
    },
  },
  async mounted() {
    await this.loadCategory();
    this.loadData();
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
.backdrop {
  background-color: rgba($color: #535353, $alpha: 0.8);
}
</style>
