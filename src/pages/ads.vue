<template>
  <div class="" style="width: 100%; max-width: 1600px; margin: auto">
    <!-- head BTN -->
    <div class="row justify-start">
      <div class="q-pa-md" @click="procressingBTN()">
        <q-btn class="headBarBTN" label="ผลดำเนินงาน" />
      </div>
      <div class="q-pa-md" @click="usedAddBTN()">
        <q-btn class="headBarBTN" label="โฆษณาที่ใช้" />
      </div>
      <div class="q-pa-md" @click="addInventoryBTN()">
        <q-btn class="headBarBTN" label="คลังโฆษณา" />
      </div>
    </div>
    <!-- circle graph  -->

    <div class="q-pt-md brx">
      <div class="GraphBG sectionPadding">
        <div>สัดส่วนการโฆษณาบนเว็บไซต์</div>
        <img
          class=""
          src="../../public/image/graph/circlegraph.png"
          alt=""
          width="855px"
        />
      </div>
      <div class="GraphBG sectionPadding">
        <div>สัดส่วนการโฆษณาบนเว็บไซต์</div>
        <img
          class=""
          src="../../public/image/graph/circlegraph.png"
          alt=""
          width="855px"
        />
      </div>
      <div class="GraphBG sectionPadding">
        <div>สัดส่วนการโฆษณาบนเว็บไซต์</div>
        <img
          class=""
          src="../../public/image/graph/circlegraph.png"
          alt=""
          width="855px"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    procressingBTN() {},
    usedAddBTN() {},
    addInventoryBTN() {},
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
</style>
