<template>
  <div>
    <div class="loginBox shadow-2 absolute-center">
      <!-- avatar -->
      <div align="center" class="q-pt-md">
        <img
          src="../../public/image/avatar01.png"
          alt=""
          width="160px"
          height="160px"
        />
      </div>
      <!-- input -->
      <div class="inputSection">
        <div>
          <q-input v-model="input.username" outlined label="ชื่อผู้ใช้งาน" />
        </div>
        <div class="q-pt-md">
          <q-input v-model="input.password" outlined label="รหัสผ่าน" />
        </div>
        <div class="q-pt-md" align="center">
          <q-btn
            class="shortActiveBtn"
            label="เข้าสู่ระบบ"
            @click="loginBtn()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async loginBtn() {
      let url = this.serverpath + "login.php";
      let res = await axios.post(url, JSON.stringify(this.input));
      if (res.data == "not pass") {
        console.log("not pass");
      } else {
        this.$q.localStorage.set("key", res.data);
        this.$router.push("/welcome");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loginBox {
  width: 600px;
  height: 400px;
  border-radius: 30px;
  background-color: white;
}
.inputSection {
  width: 330px;
  margin: auto;
}
</style>
