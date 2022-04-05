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
      <div class="adsBG scrollBar q-pl-sm q-pt-md">
        <div class="font22 q-pl-sm">สัดส่วนการโฆษณาบนเว็บไซต์</div>
        <div class="row items-center q-pt-lg">
          <!-- finnBett lotto -->
          <div class="col-6 font16 q-pl-sm">
            FinnBet หวยอันดับหนึ่ง [ทั่วไป]
          </div>
          <q-slider
            v-model="finnBettlotto"
            style="width: 202px"
            :min="0"
            :max="100"
            :step="1"
            dense
          />
          <div class="averageBox" align="center">
            {{ finnBettlotto }}
          </div>
        </div>
        <div style="height: 35px"></div>

        <div class="row items-center">
          <!-- slot games -->
          <div class="col-6 font16 q-pl-sm">สล็อตหยุดจักรวาล [เกม/สล็อต]</div>
          <q-slider
            v-model="slotGames"
            style="width: 202px"
            :min="0"
            :max="100"
            :step="1"
            dense
          />
          <div class="averageBox" align="center">
            {{ slotGames }}
          </div>
        </div>
        <div style="height: 35px"></div>

        <div class="row items-center">
          <!-- lotto shutdown the world -->
          <div class="col-6 font16 q-pl-sm">หวยหยุดโลก [หวย]</div>
          <q-slider
            v-model="worldSlot"
            style="width: 202px"
            :min="0"
            :max="100"
            :step="1"
            dense
          />
          <div class="averageBox" align="center">
            {{ worldSlot }}
          </div>
        </div>
        <div style="height: 35px"></div>

        <div class="row items-center">
          <!-- casino never say no -->
          <div class="col-6 font16 q-pl-sm">คาสิโนไม่ say no [คาสิโน]</div>
          <q-slider
            v-model="casioNeversayno"
            style="width: 202px"
            :min="0"
            :max="100"
            :step="1"
            dense
          />
          <div class="averageBox" align="center">
            {{ casioNeversayno }}
          </div>
        </div>
        <div style="height: 35px"></div>

        <div class="row items-center">
          <!-- soccerbetting -->
          <div class="col-6 font16 q-pl-sm">แทงบอล [แทงบอล]</div>
          <q-slider
            v-model="soccerBet"
            style="width: 202px"
            :min="0"
            :max="100"
            :step="1"
            dense
          />
          <div class="averageBox" align="center">
            {{ soccerBet }}
          </div>
        </div>
        <div style="height: 35px"></div>
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
      <div class="q-pt-md">
        <div class="font22">FinnBet หวยอันดับหนึ่ง [เกม/สล็อต]</div>
        <div class="row justify-evenly q-pt-lg">
          <!-- bannerPC -->
          <div class="smallAdsBG q-pt-sm">
            <div class="row justify-between">
              <div class="q-pl-lg font22">PC</div>
              <div
                class="q-pr-lg"
                style="padding-top: 5px"
                @click="searchBtn()"
              >
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
              <div class="q-pt-md font16">ยอดคนคลิก</div>
              <div class="q-pt-md q-pl-sm font16">2510 คลิก</div>
            </div>
          </div>
          <!-- bannerTablet -->
          <div class="smallAdsBG q-pt-sm">
            <div class="row justify-between">
              <div class="q-pl-lg font22">Tablet</div>
              <div
                class="q-pr-lg"
                style="padding-top: 5px"
                @click="searchBtn()"
              >
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
              <div class="q-pt-md font16">ยอดคนคลิก</div>
              <div class="q-pt-md q-pl-sm font16">2510 คลิก</div>
            </div>
          </div>
          <!-- bannerMobile -->
          <div class="smallAdsBG q-pt-sm">
            <div class="row justify-between">
              <div class="q-pl-lg font22">Mobile</div>
              <div
                class="q-pr-lg"
                style="padding-top: 5px"
                @click="searchBtn()"
              >
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
              <div class="q-pt-md font16">ยอดคนคลิก</div>
              <div class="q-pt-md q-pl-sm font16">2510 คลิก</div>
            </div>
          </div>
        </div>
      </div>
      <!-- finnBet lottery -->
      <div class="q-pt-lg">
        <div class="font22">FinnBet หวยอันดับหนึ่ง [หวย]</div>
        <div class="row justify-evenly q-pt-lg">
          <!-- bannerPC -->
          <div class="smallAdsBG q-pt-sm">
            <div class="row justify-between">
              <div class="q-pl-lg font22">PC</div>
              <div
                class="q-pr-lg"
                style="padding-top: 5px"
                @click="searchBtn()"
              >
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
                src="../../public/image/finnbetads/finnbetAds2.png"
                alt="searchIcon"
              />
              <div class="q-pt-md font16">ยอดคนคลิก</div>
              <div class="q-pt-md q-pl-sm font16">2510 คลิก</div>
            </div>
          </div>
          <!-- bannerTablet -->
          <div class="smallAdsBG q-pt-sm">
            <div class="row justify-between">
              <div class="q-pl-lg font22">Tablet</div>
              <div
                class="q-pr-lg"
                style="padding-top: 5px"
                @click="searchBtn()"
              >
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
                src="../../public/image/finnbetads/finnbetAds2.png"
                alt="searchIcon"
              />
              <div class="q-pt-md font16">ยอดคนคลิก</div>
              <div class="q-pt-md q-pl-sm font16">2510 คลิก</div>
            </div>
          </div>
          <!-- bannerMobile -->
          <div class="smallAdsBG q-pt-sm">
            <div class="row justify-between">
              <div class="q-pl-lg font22">Mobile</div>
              <div
                class="q-pr-lg"
                style="padding-top: 5px"
                @click="searchBtn()"
              >
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
                src="../../public/image/finnbetads/finnbetAds2.png"
                alt="searchIcon"
              />
              <div class="q-pt-md font16">ยอดคนคลิก</div>
              <div class="q-pt-md q-pl-sm font16">2510 คลิก</div>
            </div>
          </div>
        </div>
      </div>
      <!-- slotBreakUnivers -->
      <div class="q-pt-lg">
        <div class="font22">สล็อตหยุดจักรวาล [เกม/สล็อต]</div>
        <div class="row justify-evenly q-pt-lg">
          <!-- bannerPC -->
          <div class="smallAdsBG q-pt-sm">
            <div class="row justify-between">
              <div class="q-pl-lg font22">PC</div>
              <div
                class="q-pr-lg"
                style="padding-top: 5px"
                @click="searchBtn()"
              >
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
              <div class="q-pt-md font16">ยอดคนคลิก</div>
              <div class="q-pt-md q-pl-sm font16">2510 คลิก</div>
            </div>
          </div>
          <!-- bannerTablet -->
          <div class="smallAdsBG q-pt-sm">
            <div class="row justify-between">
              <div class="q-pl-lg font22">Tablet</div>
              <div
                class="q-pr-lg"
                style="padding-top: 5px"
                @click="searchBtn()"
              >
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
              <div class="q-pt-md font16">ยอดคนคลิก</div>
              <div class="q-pt-md q-pl-sm font16">2510 คลิก</div>
            </div>
          </div>
          <!-- bannerMobile -->
          <div class="smallAdsBG q-pt-sm">
            <div class="row justify-between">
              <div class="q-pl-lg font22">Mobile</div>
              <div
                class="q-pr-lg"
                style="padding-top: 5px"
                @click="searchBtn()"
              >
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
              <div class="q-pt-md font16">ยอดคนคลิก</div>
              <div class="q-pt-md q-pl-sm font16">2510 คลิก</div>
            </div>
          </div>
        </div>
      </div>
      <!-- lottoStoptheworld -->
      <div class="q-pt-lg">
        <div class="font22">สล็อตหยุดจักรวาล [เกม/สล็อต]</div>
        <div class="row justify-evenly q-pt-lg">
          <!-- bannerPC -->
          <div class="smallAdsBG q-pt-sm">
            <div class="row justify-between">
              <div class="q-pl-lg font22">PC</div>
              <div
                class="q-pr-lg"
                style="padding-top: 5px"
                @click="searchBtn()"
              >
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
                src="../../public/image/finnbetads/finnbetAds2.png"
                alt="searchIcon"
              />
              <div class="q-pt-md font16">ยอดคนคลิก</div>
              <div class="q-pt-md q-pl-sm font16">2510 คลิก</div>
            </div>
          </div>
          <!-- bannerTablet -->
          <div class="smallAdsBG q-pt-sm">
            <div class="row justify-between">
              <div class="q-pl-lg font22">Tablet</div>
              <div
                class="q-pr-lg"
                style="padding-top: 5px"
                @click="searchBtn()"
              >
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
                src="../../public/image/finnbetads/finnbetAds2.png"
                alt="searchIcon"
              />
              <div class="q-pt-md font16">ยอดคนคลิก</div>
              <div class="q-pt-md q-pl-sm font16">2510 คลิก</div>
            </div>
          </div>
          <!-- bannerMobile -->
          <div class="smallAdsBG q-pt-sm">
            <div class="row justify-between">
              <div class="q-pl-lg font22">Mobile</div>
              <div
                class="q-pr-lg"
                style="padding-top: 5px"
                @click="searchBtn()"
              >
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
                src="../../public/image/finnbetads/finnbetAds2.png"
                alt="searchIcon"
              />
              <div class="q-pt-md font16">ยอดคนคลิก</div>
              <div class="q-pt-md q-pl-sm font16">2510 คลิก</div>
            </div>
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
      finnBettlotto: 40,
      slotGames: 10,
      worldSlot: 15,
      casioNeversayno: 15,
      soccerBet: 20,
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
.adsBG {
  width: 510px;
  height: 410px;
  border-radius: 5px;
  background-color: white;
}
.smallAdsBG {
  width: 340px;
  height: 190px;
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
  font-size: 16px;
}
</style>
