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
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
</style>
