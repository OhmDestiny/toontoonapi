<template>
  <div class="mainPadding" style="width: 100%; margin: auto">
    <div>
      <div align="right" style="width: 100%">
        <q-btn label="เพิ่มผู้ใช้งาน" @click="addNewUser()" />
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
</style>
