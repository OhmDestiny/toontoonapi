<template>
  <div style="width: 100%; max-width: 1600px; margin: auto">
    <!-- head BTN -->
    <div class="row mainPadding items-center">
      <div
        class="q-pa-sm"
        v-if="$route.name != 'ads'"
        @click="procressingBTN()"
      >
        <q-btn class="headBarBTN" label="ผลดำเนินงาน" />
      </div>
      <div class="q-pa-sm" v-else @click="procressingBTN()">
        <q-btn class="headBarBTN" color="primary" label="ผลดำเนินงาน" />
      </div>
      <div
        class="q-pa-sm"
        v-if="$route.name != 'usedads'"
        @click="usedAddBTN()"
      >
        <q-btn class="headBarBTN" label="โฆษณาที่ใช้" />
      </div>
      <div class="q-pa-sm" v-else @click="usedAddBTN()">
        <q-btn class="headBarBTN" color="primary" label="โฆษณาที่ใช้" />
      </div>
      <div
        class="q-pa-sm"
        v-if="$route.name != 'adsinventory'"
        @click="addInventoryBTN()"
      >
        <q-btn class="headBarBTN" label="คลังโฆษณา" />
      </div>
      <div class="q-pa-sm" v-else @click="addInventoryBTN()">
        <q-btn class="headBarBTN" color="primary" label="คลังโฆษณา" />
      </div>

      <!-- adsCategory and addNewAdsBTN -->
      <div class="col"></div>
      <div class="row">
        <div>
          <q-select
            style="width: 160px"
            outlined
            :options="adsCategory"
            v-model="adsCategorySelect"
            dense
          />
        </div>
        <div style="width: 9px"></div>
        <div class="addbtn" @click="addNewBtn()">
          <div
            class="row"
            style="padding-top: 5px; padding-left: 20px; width: 160px"
          >
            <div><img src="../../public/image/plus.svg" alt="" /></div>
            <div
              style="padding-left: 10px; padding-top: 3px; padding-right: 10px"
            >
              เพิ่มโฆษณา
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mainPadding">
      <div class="row items-center q-pl-md">
        <div class="onlinebtn" align="center">online</div>
        <div class="font22 q-pl-md">เกมหมุนวงล้อ [เกม/สล็อต]</div>
        <div class="col-8"></div>
        <div>
          <img src="../../public/image/delete.svg" alt="" />
        </div>
        <div>
          <img src="../../public/image/edit.svg" alt="" />
        </div>
      </div>
      <div class="row justify-evenly">
        <div class="smallAdsBG q-pt-sm">
          <div class="row">
            <div class="q-pl-lg font22">PC</div>
            <div class="col"></div>
            <div class="q-pr-lg" style="padding-top: 5px" @click="searchBtn()">
              <img
                style="height: 19px"
                src="../../public/image/searchBtn.svg"
                alt="searchIcon"
              />
            </div>
          </div>
          <div class="row q-pl-lg">
            <img
              style="width: 295px; height: 100px"
              src="../../public/image/finnbetads/finnbetAds1.png"
              alt="searchIcon"
            />
            <div class="q-pt-md font16">ผู้เข้าชม</div>
            <div class="q-pt-md q-pl-sm font16">2510 คลิก</div>
          </div>
        </div>
        <div class="smallAdsBG"></div>
        <div class="smallAdsBG"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adsCategorySelect: "เกม/สล็อต",
      adsCategory: [
        "ทังหมด (default)",
        "ทั่วไป",
        "หวย",
        "เกม/สล็อต",
        "คาสิโน",
        "แทงบอล",
      ],
    };
  },
  methods: {
    procressingBTN() {
      this.$router.push("/ads");
    },
    usedAddBTN() {
      this.$router.push("/usedads");
    },
    addInventoryBTN() {
      this.$router.go();
    },
    addNewBtn() {},
    searchBtn() {},
  },
};
</script>

<style lang="scss" scoped>
.headBarBTN {
  width: 160px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #313131;
}
.mainSection {
  height: calc(100vh - 200px);
  overflow-y: auto;
}
.addbtn {
  border: 1px solid #959699;
  height: 40px;
  color: #333;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
}
.smallAdsBG {
  width: 340px;
  height: 190px;
  border-radius: 5px;
  background-color: white;
}
.onlinebtn {
  font-size: 12px;
  color: #1f8616;
  border: 1px solid #1f8616;
  width: 60px;
  height: 25px;
  line-height: 25px;
  border-radius: 5px;
  cursor: pointer;
}
.offlinebtn {
  font-size: 12px;
  color: #ec5454;
  border: 1px solid #ec5454;
  width: 60px;
  height: 25px;
  line-height: 25px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
