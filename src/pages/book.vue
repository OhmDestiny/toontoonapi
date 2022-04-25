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
          <book-list
            :data="item"
            :indexNumber="index"
            @clickOnline="onlineClick"
            @clickDel="deleteClick"
          ></book-list>
        </div>
        <div class="q-pa-lg col-12 flex flex-center">
          <q-pagination
            v-model="currentPage"
            color="primary"
            :max="totalPage"
            :max-pages="6"
            boundary-numbers
            @input="loadData()"
          />
        </div>
      </div>

      <div
        class="q-pa-md row items-start"
        align="center"
        v-if="displayMode == 2"
        style="width: 100%"
      >
        <div
          class="col-3 q-pa-md"
          v-for="(item, index) in dataBook"
          :key="index"
          style="max-height: 490px"
        >
          <book-box
            :data="item"
            @clickOnline="onlineClick"
            @clickDel="deleteClick"
          ></book-box>
        </div>
        <div class="q-pa-lg col-12 flex flex-center">
          <q-pagination
            v-model="currentPage"
            color="primary"
            :max="totalPage"
            :max-pages="6"
            boundary-numbers
            @input="loadData()"
          />
        </div>
      </div>

      <div
        v-if="totalPage < 1 && searchText != ''"
        align="center"
        style="width: 100%"
      >
        <div>
          <img
            src="../../public/image/searchlogo.svg"
            alt=""
            style="width: 200px"
          />
        </div>
        <div>ไม่พบข้อมูลที่ค้นหา กรุณาลองค้นหาคำอื่น</div>
      </div>
    </div>

    <!-- alert delete dialog  -->
    <q-dialog v-model="confirmDel" persistent>
      <q-card>
        <q-card-section>
          <div class="items-center">
            <div class="row">
              <div class="col"></div>
              <img src="../../public/image/alertBinIcon.svg" alt="" />
              <div style="width: 15px"></div>
              <div class="font18">ลบผู้ใช้งาน</div>
              <div class="col"></div>
            </div>
          </div>

          <hr style="width: 400px" />
          <div align="center">
            <div>
              คุณต้องการลบหนังสือ:
              <i>{{ deletBookName }}</i
              >?
            </div>
            <div>ข้อมูลในแฟ้มการ์ตูนเรื่องนี้จะถูกลบทั้งหมด</div>
          </div>
        </q-card-section>
        <q-card-actions align="center">
          <div class="row">
            <div
              class="cancelAdNewUserDiaBtn"
              @click="closeDelUserDia()"
              align="center"
            >
              ยกเลิก
            </div>
            <div style="width: 20px"></div>
            <div
              @click="deleteClickAfterConfirm()"
              class="submitAdNewUserDiaBtn"
              align="center"
            >
              ลบ
            </div>
          </div>
        </q-card-actions>
        <br />
      </q-card>
    </q-dialog>
    <div class="fullscreen backdrop" v-if="showBackDrop"></div>
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
      currentPage: 1,
      totalPage: 0,
      catIdSelected: 0,
      searchText: "",
      confirmDel: false,
      showBackDrop: false,
      deleteID: "",
      deletBookName: "",
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
      ],
    };
  },
  methods: {
    closeDelUserDia() {
      this.confirmDel = false;
      this.showBackDrop = false;
    },
    async loadData() {
      let key = this.$q.localStorage.getItem("key");
      let dataTemp = {
        key: key,
      };
      let urlTotal = this.serverpath + "checkbook.php";
      let res = await axios.post(urlTotal, JSON.stringify(dataTemp));
      if (res.data == "go to welcome") {
        this.$router.push("welcome");
        return;
      } else if (res.data == "go to login") {
        this.$q.localStorage.clear();
        this.$router.push("/");
        return;
      }
      let dataTemp2 = {
        key: key,
        page: this.currentPage,
        cat: this.catIdSelected,
        searchText: this.searchText,
      };
      urlTotal = this.serverpath + "loadtotalpage.php";
      let resTotal = await axios.post(urlTotal, JSON.stringify(dataTemp2));
      console.log(resTotal.data);
      this.totalPage = resTotal.data;
      let url = this.serverpath + "loaddatawithpageandcat.php";
      let res2 = await axios.post(url, JSON.stringify(dataTemp2));
      this.dataBook = [];
      res2.data.forEach((item) => {
        let dataLink = this.serverpath + "cover/" + item.bookid + ".jpg";
        let dataTemp = {
          bookId: item.bookid,
          dateBook: item.timestamp,
          bookName: item.title,
          coverpic: dataLink,
          status: Number(item.online),
          episode: Number(item.lastchapter),
          click: Number(item.view),
        };
        this.dataBook.push(dataTemp);
      });
    },
    async onlineClick(dataOut) {
      let key = this.$q.localStorage.getItem("key");
      let dataOuttoAPI = { status: dataOut.status, id: dataOut.id, key: key };
      let url = this.serverpath + "updateonlineBtn.php";
      let res = await axios.post(url, JSON.stringify(dataOuttoAPI));
      if (res.data == "go to login") {
        this.$q.localStorage.clear();
        this.$router.push("/");
      } else if (res.data == "go to welcome") {
        this.$router.push("/welcome");
      } else {
        this.loadData();
      }
    },
    deleteClick(dataOut) {
      this.confirmDel = true;
      this.showBackDrop = true;
      this.deleteID = dataOut.id;
      this.deletBookName = dataOut.bookName;
    },
    async deleteClickAfterConfirm() {
      //Confirm box
      let key = this.$q.localStorage.getItem("key");
      let dataOuttoAPI = { id: this.deleteID, key: key };
      let url = this.serverpath + "deleteBookBtn.php";
      let res = await axios.post(url, JSON.stringify(dataOuttoAPI));
      if (res.data == "go to login") {
        this.$q.localStorage.clear();
        this.$router.push("/");
      } else if (res.data == "go to welcome") {
        this.$router.push("/welcome");
      } else {
        this.confirmDel = false;
        this.showBackDrop = false;
        this.loadData();
      }
    },
    searchDataOut(dataOut) {
      this.displayMode = dataOut.displayMode;
      this.searchText = dataOut.searchText;
      this.catIdSelected = dataOut.searchCat;

      this.loadData();
    },
  },

  mounted() {
    this.loadData();
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
.backdrop {
  background-color: rgba($color: #535353, $alpha: 0.8);
}
</style>
