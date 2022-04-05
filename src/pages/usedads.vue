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

    <!-- ads ratio -->
    <div class="row justify-evenly">
      <div class="adsBG scrollBar q-pl-sm q-pt-md font16">
        <div class="font22">สัดส่วนการโฆษณาบนเว็บไซต์</div>

        <!-- finnBett lotto -->
        <div class="q-pt-md row items-center">
          FinnBet หวยอันดับหนึ่ง [ทั่วไป]
          <div class="q-pl-md q-pt-xs">
            <q-slider
              v-model="finnBettlotto"
              style="width: 202px"
              :min="0"
              :max="100"
              :step="1"
              dense
            />
          </div>
          <div class="averageBox" align="center">
            {{ finnBettlotto }}
          </div>
        </div>
        <div style="height: 25px"></div>

        <!-- slot games -->
        <div class="q-pt-md row items-center">
          สล็อตหยุดจักรวาล [เกม/สล็อต]
          <div class="q-pl-md q-pt-xs">
            <q-slider
              v-model="slotGames"
              style="width: 202px"
              :min="0"
              :max="100"
              :step="1"
              dense
            />
          </div>
          <div class="averageBox" align="center">
            {{ slotGames }}
          </div>
        </div>
        <div style="height: 25px"></div>

        <!-- lotto shutdown the world -->
        <div class="q-pt-md row" items-center>
          หวยหยุดโลก [หวย]
          <div class="q-pl-md q-pt-xs">
            <q-slider
              v-model="worldSlot"
              style="width: 202px"
              :min="0"
              :max="100"
              :step="1"
              dense
            />
          </div>
          <div class="averageBox" align="center">
            {{ worldSlot }}
          </div>
        </div>
        <div style="height: 25px"></div>
        <div>คาสิโนไม่ say no [คาสิโน]</div>
        <div style="height: 25px"></div>
        <div>แทงบอล [แทงบอล]</div>
        <div style="height: 25px"></div>
      </div>
      <!-- ads graph ratio -->
      <div class="adsBG">
        <div class="font22 q-pt-md" style="padding-left: 40px">
          สัดส่วนการโฆษณาบนเว็บไซต์
        </div>
        <div align="center" class="q-pt-md">
          <img
            src="../../public/image/graph/circlegraph.png"
            alt=""
            width="475px"
          />
        </div>
      </div>
    </div>
    <div class="mainPadding">
      <!-- finnbet games -->
      <div>
        <div>FinnBet หวยอันดับหนึ่ง [เกม/สล็อต]</div>
      </div>
      <!-- finnBet lottery -->
      <div>
        <div>FinnBet หวยอันดับหนึ่ง [หวย]</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      finnBettlotto: 40,
      slotGames: 10,
      worldSlot: 15,
    };
  },
  methods: {
    procressingBTN() {
      this.$router.push("/ads");
    },
    usedAddBTN() {
      this.$router.go();
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
.mainSection {
  height: calc(100vh - 200px);
  overflow-y: auto;
}
.adsBG {
  width: 510px;
  height: 410px;
  border-radius: 5px;
  background-color: white;
}
.scrollBar {
  overflow-y: auto;
}
.averageBox {
  width: 30px;
  height: 30px;
  border: 1px solid #2d6be4;
  border-radius: 3px;
  color: #2d6be4;
  margin: auto;
  line-height: 30px;
}
</style>
