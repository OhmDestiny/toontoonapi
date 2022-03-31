<template>
  <div>
    <div class="loginBox shadow-2 absolute-center">
      <!-- avatar -->
      <div align="center" class="q-pt-md">
        <img :src="imageFile" width="174px" />
      </div>
      <!-- input -->
      <div class="inputSection">
        <div>
          <q-input
            v-model.trim="input.username"
            outlined
            label="ชื่อผู้ใช้งาน"
          />
        </div>
        <div class="q-pt-md">
          <q-input
            v-model.trim="input.password"
            outlined
            label="รหัสผ่าน"
            :type="isPwd ? 'password' : 'text'"
            @keyup.enter="loginBtn()"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              /> </template
          ></q-input>
        </div>
        <div class="q-pt-xl" align="center">
          <q-btn
            class="submitAdNewUserDiaBtn"
            label="เข้าสู่ระบบ"
            @click="loginBtn()"
          />
          <q-dialog v-model="loginAlertDia" persistent>
            <q-card>
              <q-card-section>
                <div class="font22" align="center">ไม่สามารถเข้าสู่ระบบได้</div>
                <hr style="width: 400px" />
                <div align="center">
                  <img src="../../public/image/alertInAlertBox.svg" alt="" />
                </div>
                <div class="font18 q-pt-md" align="center">
                  <div>ชื่อผู้ใช้งาน / รหัสผ่านไม่ถูกต้อง</div>
                  <div>กรุณาลองใหม่อีกครั้ง</div>
                </div>
              </q-card-section>
              <q-card-actions class="font18" align="center">
                <div
                  @click="closeDialog()"
                  class="submitInLoginDiaBtn text-white"
                  align="center"
                >
                  ตกลง
                </div>
              </q-card-actions>
              <div style="height: 20px"></div>
            </q-card>
          </q-dialog>
        </div>
      </div>
    </div>
    <div class="fullscreen backdrop" v-if="showBackDrop"></div>
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
      loginAlertDia: false,
      isPwd: true,
      showBackDrop: false,
      avatarchange: 0,
      imageFile: "",
    };
  },
  methods: {
    randomAvatarProfile() {
      this.avatarchange = Math.floor(Math.random() * 9) + 1;
      this.imageFile = this.serverpath + "avatar/" + this.avatarchange + ".png";
    },
    async loginBtn() {
      if (this.input.username.length == 0 || this.input.password.length == 0) {
        this.showDialog();
        return;
      }
      let url = this.serverpath + "login.php";
      let res = await axios.post(url, JSON.stringify(this.input));
      if (res.data == "not pass") {
        this.showDialog();
        return;
      } else {
        this.$q.localStorage.set("key", res.data);
        this.$router.push("/welcome");
      }
    },
    showDialog() {
      this.loginAlertDia = true;
      this.showBackDrop = true;
    },
    closeDialog() {
      this.loginAlertDia = false;
      this.showBackDrop = false;
    },
  },
  mounted() {
    this.randomAvatarProfile();
    console.log(this.avatarchange);
  },
};
</script>

<style lang="scss" scoped>
.loginBox {
  width: 600px;
  height: 464px;
  border-radius: 30px;
  background-color: white;
}
.inputSection {
  width: 330px;
  margin: auto;
}
.submitInLoginDiaBtn {
  width: 120px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #2d6be4;
  cursor: pointer;
}
.logInBtn {
  width: 120px;
  height: 45px;
}
.backdrop {
  background-color: rgba($color: #535353, $alpha: 0.8);
}
</style>
