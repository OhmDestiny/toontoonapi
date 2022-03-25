<template>
  <div class="mainPadding brx" style="width: 100%; margin: auto">
    <div>
      <div align="right" class="brx" style="width: 100%">
        <q-btn label="เพิ่มผู้ใช้งาน" @click="addNewUser()" />
      </div>
      <!-- table header -->
      <div class="q-pt-md">
        <div class="colTable">ลำดับ</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.colTable {
  width: 11.1%;
}
</style>
