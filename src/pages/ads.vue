<template>
  <div style="width: 100%; max-width: 1600px; margin: auto">
    <!-- head BTN -->
    <div class="row mainPadding">
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
    </div>
    <!-- pie graph  -->
    <div class="q-pt-md" align="center">
      <div class="GraphBG">
        <div class="q-pa-lg font22" align="left">สัดส่วนการโฆษณาบนเว็บไซต์</div>

        <img
          class=""
          src="../../public/image/graph/circlegraph.png"
          alt=""
          width="855px"
        />
      </div>
      <!-- bar graph daily -->
      <div style="height: 40px"></div>
      <div class="GraphBG">
        <div class="q-pa-lg row items-center font22">
          กราฟแสดงจำนวนคลิกโฆษณาในแต่ละวันประจำ
          <div class="q-pl-md">
            <q-select
              style="width: 120px"
              outlined
              :options="monthDropdown"
              v-model="monthSelectDaily"
              dense
            />
          </div>
          <div class="q-pl-md">
            <q-select
              style="width: 120px"
              outlined
              :options="yearDropdown"
              v-model="yearSelectDaily"
              dense
            />
          </div>
        </div>
        <img src="../../public/image/graph/bargraph.png" alt="" width="607px" />
      </div>
      <!-- bar graph monthly -->
      <div style="height: 40px"></div>
      <div class="GraphBG">
        <div class="q-pa-lg row justify-start items-center font22">
          กราฟแสดงจำนวนคลิกโฆษณาในแต่ละเดือน
          <div class="q-pl-md">
            <q-select
              style="width: 120px"
              outlined
              :options="yearDropdown"
              v-model="yearSelectMonthly"
              dense
            />
          </div>
        </div>
        <img src="../../public/image/graph/bargraph.png" alt="" width="607px" />
      </div>
      <div style="height: 40px"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monthSelectDaily: "สิงหาคม",
      monthDropdown: [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ],
      yearSelectDaily: "2024",
      yearSelectMonthly: "2022",
      yearDropdown: ["2020", "2021", "2022", "2023", "2024"],
    };
  },
  methods: {
    procressingBTN() {
      this.$router.go();
    },
    usedAddBTN() {
      this.$router.push("/usedads");
    },
    addInventoryBTN() {
      this.$router.push("/adsinventory");
    },
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
.GraphBG {
  width: 1025px;
  height: 586px;
  border-radius: 5px;
  background-color: white;
}
.mainSection {
  height: calc(100vh - 200px);
  overflow-y: auto;
}
</style>
