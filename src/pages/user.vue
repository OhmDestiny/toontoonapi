<template>
  <div class="mainPadding" style="width: 100%; margin: auto">
    <div>
      <div align="right" style="100%">
        <div
          @click="addNewUser()"
          class="adNewUser row items-center justify-evenly"
        >
          <q-icon size="21px" name="fa-solid fa-plus" />
          <div class="font16">เพิ่มผู้ใช้งาน</div>
        </div>
      </div>
      <!-- table header -->
      <div class="q-pt-md row">
        <div class="colTable">ลำดับ</div>
        <div class="colTable">ชื่อผู้ใช้งาน</div>
        <div class="colTable">หนังสือ</div>
        <div class="colTable">หมวดหมู่</div>
        <div class="colTable">อันดับ</div>
        <div class="colTable">โฆษณา</div>
        <div class="colTable">ผู้ใช้งาน</div>
        <div class="colTable">ลบ</div>
        <div class="colTable">แก้ไข</div>
      </div>
      <hr />
      <div class="q-pt-md row" v-for="(item, index) in userData" :key="index">
        <div class="colTable">{{ index + 1 }}</div>
        <div class="colTable">{{ item.username }}</div>
        <div class="colTable">{{ item.book }}</div>
        <div class="colTable">{{ item.category }}</div>
        <div class="colTable">{{ item.rank }}</div>
        <div class="colTable">{{ item.ads }}</div>
        <div class="colTable">{{ item.admin }}</div>
        <div class="colTable">ลบ</div>
        <div class="colTable">แก้ไข</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userData: [
        {
          userid: 1,
          username: "test",
          book: 1,
          category: 0,
          rank: 1,
          ads: 1,
          admin: 1,
        },
        {
          userid: 2,
          username: "test1",
          book: 1,
          category: 0,
          rank: 0,
          ads: 1,
          admin: 1,
        },
      ],
    };
  },
  methods: {
    async loadUser() {
      let url = this.serverpath + "userlist.php";
      let res = await axios.get(url);
    },
    addNewUser() {
      console.log("hello");
    },
  },
  mounted() {
    this.loadUser();
  },
};
</script>

<style lang="scss" scoped>
.colTable {
  width: 11.1%;
  text-align: center;
}
.adNewUser {
  width: 135px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #474747;
  color: #474747;
  cursor: pointer;
}
</style>
