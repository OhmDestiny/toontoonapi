<template>
  <div>
    <div class="cartoonBox">
      <div class="q-pa-sm titleBox ellipsis-2-lines" align="left">
        {{ data.bookName }}
      </div>
      <div class="q-px-sm" align="center">
        <img width="100%" src="../../public/poster/bleach.png" alt="" />
      </div>
      <div align="left" class="q-px-sm row justify-between">
        <div class="onlineBtn" v-if="data.status == 'online'">Online</div>
        <div class="offlineBtn" v-if="data.status != 'online'">Offline</div>
        <div class="row">
          <div class="cursor-pointer" @click="trashBtn(data.bookId)">
            <img src="../../public/image/trash_symbol.svg" alt="" />
          </div>
          <div class="q-px-sm cursor-pointer">
            <img src="../../public/image/edit_symbol.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="row q-pb-sm">
        <div class="font12 q-pl-md">ตอนที่ {{ data.episode }}</div>
        <div class="col"></div>
        <div class="font12 q-pr-md">ยอดเข้าชม {{ data.click }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    trashBtn(id) {
      console.log("trash : " + id);
    },
  },
};
</script>

<style lang="scss" scoped>
.cartoonBox {
  width: 100%;
  aspect-ratio: 230 / 370;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.titleBox {
  font-size: 16px;
  height: 60px;
}
.onlineBtn {
  border: 1px solid #1f8616;
  border-radius: 3px;
  width: 60px;
  height: 25px;
  font-size: 12px;
  text-align: center;
  line-height: 25px;
  color: #1f8616;
  cursor: pointer;
}
.offlineBtn {
  border: 1px solid #ec5454;
  border-radius: 3px;
  width: 60px;
  height: 25px;
  font-size: 12px;
  text-align: center;
  line-height: 25px;
  color: #ec5454;
  cursor: pointer;
}
</style>
