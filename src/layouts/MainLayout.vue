<template>
  <q-layout view="lHh Lpr lFf">
    <div class="fullscreen">
      <div
        style="max-width: 1600px; margin: auto background-color:#f6f7fb"
        class="shadow-2 row"
      >
        <div class="leftdrawer shadow-3">
          <!-- user avatar -->
          <div class="row q-pa-md justify-center">
            <div>
              <img src="../../public/image/avatar01.png" width="100px" />
            </div>
            <div class="fontUserName">Aunny</div>
          </div>
          <!-- menu book -->
          <div class="row bookLink q-ma-md q-pa-sm">
            <div class="leftSpace"></div>
            <div class="iconDiv">
              <img src="../../public/image/book.svg" alt="" />
            </div>
            <div class="middleSpace"></div>
            <div class="labelDiv">หนังสือ</div>
          </div>
          <hr style="width: 270px" />
          <!-- menu category -->
          <div class="row bookLink q-ma-md q-pa-sm">
            <div class="leftSpace"></div>
            <div class="iconDiv">
              <img src="../../public/image/category.svg" alt="" />
            </div>
            <div class="middleSpace"></div>
            <div class="labelDiv">หมวดหมู่</div>
          </div>
          <hr style="width: 270px" />
          <!-- menu ranking -->
          <div class="row bookLink q-ma-md q-pa-sm">
            <div class="FixleftSpace"></div>
            <div class="iconDiv">
              <img src="../../public/image/rank.svg" alt="" />
            </div>
            <div class="FixmiddleSpace"></div>
            <div class="labelDiv">อันดับ</div>
          </div>
          <hr style="width: 270px" />
          <!-- menu advertise -->
          <div class="row bookLink q-ma-md q-pa-sm items-center">
            <div class="FixleftSpace2"></div>
            <div class="iconDiv q-pt-sm">
              <img src="../../public/image/ads.svg" alt="" />
            </div>
            <div class="FixmiddleSpace2"></div>
            <div class="labelDiv">โฆษณา</div>
          </div>
          <hr style="width: 270px" />
          <!-- menu administrator -->
          <div class="row bookLink q-ma-md q-pa-sm">
            <div class="leftSpace"></div>
            <div class="iconDiv">
              <img src="../../public/image/user.svg" alt="" />
            </div>
            <div class="FixmiddleSpace"></div>
            <div class="labelDiv">ผู้ใช้งาน</div>
          </div>
          <!-- menu sign out -->
          <div class="setBottom">
            <hr style="width: 270px" />
            <div class="row bookLink q-ma-md q-pa-sm">
              <div class="leftSpace"></div>
              <div class="iconDiv q-pt-sm">
                <img src="../../public/image/signout.svg" alt="" />
              </div>
              <div class="middleSpace"></div>
              <div class="labelDiv">ออกจากระบบ</div>
            </div>
          </div>
        </div>
        <div class="col">
          <q-page-container>
            <router-view />
          </q-page-container>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.setBottom {
  position: absolute;
  bottom: 0px;
  padding-left: 10px;
}
.leftdrawer {
  width: 300px;
  height: 100vh;
  background-color: white;
  cursor: pointer;
}
.fontUserName {
  font-size: 22px;
  line-height: 100px;
  padding-left: 15px;
}
.bookLink:hover {
  background-color: #e5eeff;
}
.iconDiv {
  width: 50px;
}
.labelDiv {
  font-size: 22px;
}
.middleSpace {
  width: 10px;
}
.FixmiddleSpace {
  width: 15px;
}
.FixmiddleSpace2 {
  width: 20px;
}
.leftSpace {
  width: 45px;
}
.FixleftSpace {
  width: 42px;
}
.FixleftSpace2 {
  width: 38px;
}
</style>
