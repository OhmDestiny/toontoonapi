<template>
  <div
    class="mainPadding bookShow"
    style="width: 100%; max-width: 1600px; margin: auto"
  >
    <div><top-bar @searchDataOut="searchDataOut"></top-bar></div>
    <div class="row mainShow">
      <div
        class="col-3 q-pa-md"
        align="center"
        v-for="(item, index) in dataBook"
        :key="index"
      >
        <book-box :data="item"></book-box>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import topBar from "../components/topmenu_in_book.vue";
import bookBox from "../components/bookBox.vue";
export default {
  components: { topBar, bookBox },
  data() {
    return {
      dataBook: [
        {
          bookId: 1,
          bookName: "Bleach เทพมรณะ",
          coverpic: "01.jpg",
          status: "online",
          episode: "12",
          click: 160,
        },
        {
          bookId: 2,
          bookName: "Dragon ball",
          coverpic: "02.jpg",
          status: "online",
          episode: "65",
          click: 260,
        },
        {
          bookId: 3,
          bookName: "One Piece วันพีช",
          coverpic: "03.jpg",
          status: "offline",
          episode: "42",
          click: 560,
        },
        {
          bookId: 4,
          bookName:
            "เกิดใหม่ทั้งทีก็กลายเป็นสไลม์ไปซะแล้ว! เกิดใหม่ทั้งทีก็กลายเป็นสไลม์ไปซะแล้ว!",
          coverpic: "03.jpg",
          status: "offline",
          episode: "120",
          click: 56000,
        },
        {
          bookId: 5,
          bookName: "เกิดใหม่ทั้งทีก็กลายเป็นสไลม์ไปซะแล้ว!",
          coverpic: "03.jpg",
          status: "offline",
          episode: "120",
          click: 560,
        },
      ],
    };
  },
  methods: {
    async loadData(page, catid) {
      let dataTemp = {
        key: key,
        page: page,
        cat: catid,
      };
      let url = this.serverpath + "loaddatawithpageandcat.php";
      let res = await axios.post(url, JSON.stringify(this.input));
    },
    searchDataOut(dataOut) {
      console.log("searchText: " + dataOut.searchText);
      console.log("searchCat: " + dataOut.searchCat.value);
      console.log("DisplayMode: " + dataOut.displayMode);
    },
  },

  mounted() {
    this.loadData(1, 0);
  },
};
</script>

<style lang="scss" scoped>
.bookShow {
  overflow-y: auto;
}
.mainShow {
  height: calc(100vh - 120px);
  overflow-y: auto;
}
</style>
