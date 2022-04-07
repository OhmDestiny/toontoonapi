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
        <div class="row q-pt-md">
          <div class="labelDiv">รูปแบบ</div>
          <div class="col">
            <div class="row">
              <div
                class="q-pa-sm cursor-pointer"
                v-if="input.theme[0] == false"
                @click="themeClick(1)"
              >
                <img
                  src="../../public/image/theme/t1.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>
              <div class="q-pa-sm" v-else>
                <img
                  src="../../public/image/theme/t1x.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>

              <div
                class="q-py-sm cursor-pointer"
                @click="themeClick(2)"
                v-if="input.theme[1] == false"
              >
                <img
                  src="../../public/image/theme/t2.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>
              <div class="q-py-sm cursor-pointer" v-else>
                <img
                  src="../../public/image/theme/t2x.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>

              <div
                class="q-pa-sm cursor-pointer"
                @click="themeClick(3)"
                v-if="input.theme[2] == false"
              >
                <img
                  src="../../public/image/theme/t3.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>
              <div class="q-pa-sm cursor-pointer" v-else>
                <img
                  src="../../public/image/theme/t3x.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>

              <div
                class="q-py-sm cursor-pointer"
                @click="themeClick(4)"
                v-if="input.theme[3] == false"
              >
                <img
                  src="../../public/image/theme/t4.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>
              <div class="q-py-sm cursor-pointer" v-else>
                <img
                  src="../../public/image/theme/t4x.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>

              <div
                class="q-pa-sm cursor-pointer"
                @click="themeClick(5)"
                v-if="input.theme[4] == false"
              >
                <img
                  src="../../public/image/theme/t5.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>
              <div class="q-pa-sm cursor-pointer" v-else>
                <img
                  src="../../public/image/theme/t5x.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>

              <div
                class="q-py-sm cursor-pointer"
                @click="themeClick(6)"
                v-if="input.theme[5] == false"
              >
                <img
                  src="../../public/image/theme/t6.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>
              <div class="q-py-sm cursor-pointer" v-else>
                <img
                  src="../../public/image/theme/t6x.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>

              <div
                class="q-pa-sm cursor-pointer"
                @click="themeClick(7)"
                v-if="input.theme[6] == false"
              >
                <img
                  src="../../public/image/theme/t7.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>
              <div class="q-pa-sm cursor-pointer" v-else>
                <img
                  src="../../public/image/theme/t7x.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>

              <div
                class="q-py-sm cursor-pointer"
                @click="themeClick(8)"
                v-if="input.theme[7] == false"
              >
                <img
                  src="../../public/image/theme/t8.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>
              <div class="q-py-sm cursor-pointer" v-else>
                <img
                  src="../../public/image/theme/t8x.svg"
                  alt=""
                  style="width: 40px"
                />
              </div>
            </div>
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
        synopsis: "",
        folder: "",
        coverfile: "",
        theme: [true, false, false, false, false, false, false, false, false],
      },
      categoryList: [],
      cartoonid: this.$route.params.id,
    };
  },
  methods: {
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
      console.log(res.data);
    },
  },
  mounted() {
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
</style>
