<template>
  <div
    class="mainPadding bookShow"
    style="width: 100%; max-width: 1600px; margin: auto"
  >
    <div><top-bar @searchDataOut="searchDataOut"></top-bar></div>
    <div class="row mainShow">
      <div v-if="displayMode == 1" style="width: 100%">
        <div class="row q-pt-md font16">
          <div style="width: 200px" class="q-px-md">วันที่</div>
          <div class="col">ชื่อเรื่อง</div>
          <div style="width: 100px" align="center">ตอน</div>
          <div style="width: 100px" align="center">ยอดเข้าชม</div>
          <div style="width: 100px" align="center">สถานะ</div>
          <div style="width: 100px" align="center">ลบออก</div>
          <div style="width: 100px" align="center">เพิ่มตอน</div>
        </div>
        <div><hr /></div>
        <div v-for="(item, index) in dataBook" :key="index">
          <book-list :data="item" :indexNumber="index"></book-list>
        </div>
      </div>
      <div
        class="col-3 q-pa-md"
        align="center"
        v-for="(item, index) in dataBook"
        :key="index"
        v-if="displayMode == 2"
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
import bookList from "../components/bookList";
export default {
  components: { topBar, bookBox, bookList },
  data() {
    return {
      displayMode: 1, // 1 = list view
      dataBook: [
        {
          bookId: 1,
          dateBook: "2020/04/01 18:00",
          bookName: "Bleach เทพมรณะ",
          coverpic: "01.jpg",
          status: 1,
          episode: "12",
          click: 160,
        },
        {
          bookId: 2,
          dateBook: "2020/04/02 18:00",
          bookName: "Dragon ball",
          coverpic: "02.jpg",
          status: 1,
          episode: "65",
          click: 260,
        },
        {
          bookId: 3,
          dateBook: "2020/04/05 18:00",
          bookName: "One Piece วันพีช",
          coverpic: "03.jpg",
          status: 0,
          episode: "42",
          click: 560,
        },
        {
          bookId: 4,
          dateBook: "2020/04/08 18:00",
          bookName:
            "เกิดใหม่ทั้งทีก็กลายเป็นสไลม์ไปซะแล้ว! เกิดใหม่ทั้งทีก็กลายเป็นสไลม์ไปซะแล้ว!",
          coverpic: "03.jpg",
          status: 0,
          episode: "120",
          click: 56000,
        },
        {
          bookId: 5,
          dateBook: "2020/05/01 18:00",
          bookName: "เกิดใหม่ทั้งทีก็กลายเป็นสไลม์ไปซะแล้ว!",
          coverpic: "03.jpg",
          status: 0,
          episode: "120",
          click: 560,
        },
      ],
    };
  },
  methods: {
    async loadData(page, catid) {
      this.dataBook = [];
      let key = this.$q.localStorage.getItem("key");
      let dataTemp = {
        key: key,
        page: page,
        cat: catid,
      };
      console.log(dataTemp);
      let url = this.serverpath + "loaddatawithpageandcat.php";
      let res = await axios.post(url, JSON.stringify(dataTemp));
      res.data.forEach((item) => {
        let dataTemp = {
          bookId: item.bookid,
          dateBook: item.timestamp,
          bookName: item.title,
          coverpic: item.bookid + ".jpg",
          status: Number(item.online),
          episode: Number(item.lastchapter),
          click: Number(item.view),
        };
        this.dataBook.push(dataTemp);
      });
    },
    searchDataOut(dataOut) {
      this.displayMode = dataOut.displayMode;
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
