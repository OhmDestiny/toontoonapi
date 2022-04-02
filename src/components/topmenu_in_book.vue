<template>
  <div>
    <div class="row justifybetween">
      <div>
        <q-select
          :options="categoryList"
          label="หมวดหมู่"
          v-model="categorySelected"
          emit-value
          map-options
          style="width: 200px"
          outlined
          dense
          @input="changeCat()"
        />
      </div>
      <div class="col searchTag" v-if="searchTextFinal.length > 0">
        คำค้นหา :
        <q-chip
          removable
          color="primary"
          text-color="white"
          @remove="resetSearch()"
          >{{ searchTextFinal }}</q-chip
        >
      </div>
      <div class="col"></div>
      <div class="row">
        <div class="icontop" @click="searchBtn()">
          <img src="../../public/image/searchBtn.svg" alt="" />
        </div>

        <div class="icontop" v-if="displayMode == 2" @click="changeMode(1)">
          <img src="../../public/image/listview.svg" alt="" />
        </div>
        <div class="icontop" v-if="displayMode == 1">
          <img src="../../public/image/listviewblue.svg" alt="" />
        </div>
        <div class="icontop" v-if="displayMode == 1" @click="changeMode(2)">
          <img src="../../public/image/thumbnail.svg" alt="" />
        </div>
        <div class="icontop" v-if="displayMode == 2">
          <img src="../../public/image/thumbnailblue.svg" alt="" />
        </div>
        <div class="addbtn" @click="addNewBtn()">
          <div class="row" style="padding-top: 5px; padding-left: 5px">
            <div><img src="../../public/image/plus.svg" alt="" /></div>
            <div
              style="padding-left: 10px; padding-top: 3px; padding-right: 10px"
            >
              เพิ่มเรื่องใหม่
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fullscreen backdrop" v-if="showBackDrop"></div>
    <q-dialog v-model="searchDialog" persistent>
      <q-card class="searchDialog q-pa-md">
        <div class="row justify-between">
          <div>ค้นหาข้อมูล</div>
          <div @click="closeSearchBox()" class="cursor-pointer">
            <q-icon name="fas fa-times" size="24px" />
          </div>
        </div>
        <div class="q-pt-md">
          <q-input
            placeholder="ค้นหาชื่อหนังสือการ์ตูน"
            dense
            v-model.lazy="searchText"
            clearable
            @keyup.enter="searchData()"
          />
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      categoryList: [],
      categorySelected: [],
      searchDialog: false,
      showBackDrop: false,
      searchText: "",
      searchTextFinal: "",
      displayMode: 1, //1=ist mode , 2=thumb nail mode
    };
  },
  methods: {
    async loadData() {
      this.categoryList = [];
      let key = this.$q.localStorage.getItem("key");
      let dataSend = { key: key };
      let url = this.serverpath + "categorylist.php";
      let res = await axios.post(url, JSON.stringify(dataSend));
      res.data.forEach((item) => {
        let dataTemp = {
          label: item.name,
          value: item.catid,
        };
        this.categoryList.push(dataTemp);
      });
      this.categorySelected = this.categoryList[0];
    },
    addNewBtn() {
      this.$router.push("/addnewcartoon");
    },
    searchBtn() {
      this.searchDialog = true;
      this.showBackDrop = true;
      this.searchText = "";
    },
    closeSearchBox() {
      this.searchDialog = false;
      this.showBackDrop = false;
    },
    searchData() {
      this.searchTextFinal = this.searchText;
      this.closeSearchBox();
      this.sendDataOut();
    },
    resetSearch() {
      this.searchTextFinal = "";
    },
    sendDataOut() {
      let dataSearchSendOut = {
        searchText: this.searchTextFinal,
        searchCat: this.categorySelected,
        displayMode: this.displayMode,
      };
      this.$emit("searchDataOut", dataSearchSendOut);
    },
    changeCat() {
      this.sendDataOut();
    },
    changeMode(modeid) {
      this.displayMode = modeid;
      this.sendDataOut();
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.addbtn {
  border: 1px solid #959699;
  height: 40px;
  color: #333;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
}
.icontop {
  padding-top: 7px;
  padding-right: 15px;
  cursor: pointer;
}
.backdrop {
  background-color: rgba($color: #535353, $alpha: 0.8);
}
.searchDialog {
  width: 600px;
  min-width: 600px;
  height: 150px;
}
.searchTag {
  line-height: 40px;
  padding-left: 10px;
}
</style>
