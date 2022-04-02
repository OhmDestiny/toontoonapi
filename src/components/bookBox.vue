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
        <div>Online</div>
        <div class="font16">เทพมรณะ</div>
      </div>
      <div class="row">
        <div class="font12 q-pl-md">ตอนที่ 12</div>
        <div class="col"></div>
        <div class="font12 q-pr-md">ยอดเข้าชม 130</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
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
</style>
