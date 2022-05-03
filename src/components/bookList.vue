<template>
  <div>
    <div
      class="row q-py-sm font16"
      style="width: 100%"
      :class="[indexNumber % 2 == 1 ? 'stripRow' : '']"
    >
      <div style="width: 200px" class="q-px-sm">{{ data.dateBook }}</div>
      <div class="col row">
        <div>
          <span @click="bookUrl(data.bookId)" class="cursor-pointer"
            ><u>{{ data.bookName }}</u></span
          >
        </div>
        <div class="hotItemBtn q-ml-sm" v-if="data.hotItem">HOT</div>
      </div>
      <div style="width: 100px" align="center">{{ data.episode }}</div>
      <div style="width: 100px" align="center">{{ data.click }}</div>
      <div style="width: 100px" align="center">
        <div
          class="onlinebtn"
          v-if="data.status == 1"
          @click="upStatus(0, data.bookId)"
        >
          Online
        </div>

        <div class="offlinebtn" v-else @click="upStatus(1, data.bookId)">
          offline
        </div>
      </div>
      <div
        style="width: 100px"
        align="center"
        class="cursor-pointer"
        @click="deleteBtn(data.bookId, data.bookName)"
      >
        <img src="../../public/image/trash_symbol.svg" alt="" />
      </div>
      <div
        style="width: 100px"
        align="center"
        class="cursor-pointer"
        @click="bookUrl(data.bookId)"
      >
        <img src="../../public/image/edit.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "indexNumber"],
  methods: {
    deleteBtn(id, bookName) {
      let dataSend = {
        id: id,
        bookName: bookName,
      };
      this.$emit("clickDel", dataSend);
    },
    upStatus(status, id) {
      let dataSend = {
        status: status,
        id: id,
      };
      this.$emit("clickOnline", dataSend);
    },
    bookUrl(id) {
      this.$router.push("bookpage/" + id);
    },
  },
};
</script>

<style lang="scss" scoped>
.stripRow {
  background-color: rgba($color: #7291ff, $alpha: 0.15);
}
.onlinebtn {
  font-size: 12px;
  color: #1f8616;
  border: 1px solid #1f8616;
  width: 60px;
  height: 25px;
  line-height: 25px;
  border-radius: 5px;
  cursor: pointer;
  margin: auto;
}
.offlinebtn {
  font-size: 12px;
  color: #ec5454;
  border: 1px solid #ec5454;
  width: 60px;
  height: 25px;
  line-height: 25px;
  border-radius: 5px;
  cursor: pointer;
  margin: auto;
}
.hotItemBtn {
  font-size: 12px;
  background-color: #ec5454;
  color: white;
  line-height: 25px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
}
</style>
