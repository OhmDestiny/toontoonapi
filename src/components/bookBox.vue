<template>
  <div>
    <div class="cartoonBox">
      <div class="q-pa-sm titleBox ellipsis-2-lines" align="left">
        {{ data.bookName }}
      </div>
      <div class="q-px-sm" align="center">
        <img width="100%" :src="data.coverpic" alt="" />
      </div>
      <div align="left" class="q-px-sm row justify-between">
        <div
          class="onlineBtn"
          v-if="data.status == 1"
          @click="upStatus(0, data.bookId)"
        >
          Online
        </div>
        <div
          class="offlineBtn"
          v-if="data.status != 1"
          @click="upStatus(1, data.bookId)"
        >
          Offline
        </div>
        <div class="row">
          <div
            class="cursor-pointer"
            @click="deleteBtn(data.bookId, data.bookName)"
          >
            <img src="../../public/image/trash_symbol.svg" alt="" />
          </div>
          <div class="q-px-sm cursor-pointer" @click="showDetail(data.bookId)">
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
    showDetail(id) {
      this.$router.push("/bookpage/" + id);
    },
    upStatus(status, id) {
      let dataSend = {
        status: status,
        id: id,
      };

      this.$emit("clickOnline", dataSend);
    },
    deleteBtn(id, bookName) {
      let dataSend = {
        id: id,
        bookName: bookName,
      };
      this.$emit("clickDel", dataSend);
    },
  },
};
</script>

<style lang="scss" scoped>
.cartoonBox {
  padding: 5px;

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
