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
            <div class="labelDiv">หนังสือ</div>
          </div>
          <!-- menu category -->
          <div class="row bookLink q-ma-md q-pa-sm">
            <div class="leftSpace"></div>
            <div class="iconDiv">
              <img src="../../public/image/book.svg" alt="" />
            </div>
            <div class="labelDiv">หมวดหมู่</div>
          </div>
        </div>

        <q-page-container>
          <router-view />
        </q-page-container>
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
.leftSpace {
  width: 65px;
}
</style>
