<template>
  <div
    class="mainPadding"
    style="width: 100%; max-width: 1600px; margin: auto; height: 100px"
  >
    <div class="row">
      <div class="blockDiv" @click="backBtn()">
        <img
          style="padding-top: 10px"
          src="../../public/image/backbtn.svg"
          alt=""
        />
      </div>
      <div class="font32 col" align="center">เพิ่มเรื่องใหม่</div>
      <div class="blockDiv"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.blockDiv {
  width: 100px;
}
</style>
