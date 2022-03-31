<template>
  <div
    class="mainPadding font16"
    style="width: 100%; max-width: 1600px; margin: auto; height: 100px"
  >
    <div class="row">
      <div class="blockDiv" @click="backBtn()">
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
            <q-input v-model="input.title" outlined dense />
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="labelDiv">หมวดหมู่</div>
          <div class="col">
            <q-input v-model="input.category" outlined dense />
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="labelDiv">
            <div>เรื่องย่อ</div>
            <div class="font12 text-grey">มากสุด 500 ตัวอักษร</div>
          </div>
          <div class="col">
            <q-input v-model="input.synposis" type="textarea" outlined dense />
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="labelDiv">แฟ้มข้อมูล</div>
          <div class="col">
            <q-input v-model="input.folder" outlined dense />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="row q-py-md">
      <div class="col-3" align="center">
        <div class="infobox">
          <div>
            <img src="../../public/image/info.svg" alt="" />
          </div>
          <div class="font22">คอมพิวเตอร์</div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="labelDiv">ชื่อเรื่อง</div>
          <div class="col">
            <q-input v-model="input.title" outlined dense />
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="labelDiv">หมวดหมู่</div>
          <div class="col">
            <q-input v-model="input.category" outlined dense />
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="labelDiv">
            <div>เรื่องย่อ</div>
            <div class="font12 text-grey">มากสุด 500 ตัวอักษร</div>
          </div>
          <div class="col">
            <q-input v-model="input.synposis" type="textarea" outlined dense />
          </div>
        </div>
        <div class="row q-pt-md">
          <div class="labelDiv">แฟ้มข้อมูล</div>
          <div class="col">
            <q-input v-model="input.folder" outlined dense />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        title: "",
        category: "",
        synposis: "",
        folder: "",
      },
    };
  },
  methods: {
    backBtn() {},
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
</style>
