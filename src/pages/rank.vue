<template>
  <div
    class="mainPadding"
    style="width: 100%; max-width: 1600px; margin: auto; height: 100px"
  >
    <div>
      <div class="row justify-between selectDiv">
        <div class="font22">เลือกจัดอันดับ</div>
        <div class="font14 q-pt-sm">อัพเดทล่าสุด {{ updateData }}</div>
      </div>
      <div class="selectDiv q-pt-md">
        <div class="row">
          <div style="width: 30px">1.</div>
          <div class="col">
            <q-select
              v-model="bookInput.book01id"
              :options="bookInput.option01"
              outlined
              dense
              map-options
              emit-value
              use-input
              input-debounce="0"
              @filter="filterFn01"
            />
          </div>
        </div>
        <div class="row q-pt-md">
          <div style="width: 30px">2.</div>
          <div class="col">
            <q-select
              v-model="bookInput.book02id"
              :options="bookInput.option02"
              outlined
              dense
              map-options
              emit-value
              use-input
              input-debounce="0"
              @filter="filterFn02"
            />
          </div>
        </div>
        <div class="row q-pt-md">
          <div style="width: 30px">3.</div>
          <div class="col">
            <q-select
              v-model="bookInput.book03id"
              :options="bookInput.option03"
              outlined
              dense
              map-options
              emit-value
              use-input
              input-debounce="0"
              @filter="filterFn03"
            />
          </div>
        </div>
        <div class="row q-pt-md">
          <div style="width: 30px">4.</div>
          <div class="col">
            <q-select
              v-model="bookInput.book04id"
              :options="bookInput.option04"
              outlined
              dense
              map-options
              emit-value
              use-input
              input-debounce="0"
              @filter="filterFn04"
            />
          </div>
        </div>
        <div class="row q-pt-md">
          <div style="width: 30px">5.</div>
          <div class="col">
            <q-select
              v-model="bookInput.book05id"
              :options="bookInput.option05"
              outlined
              dense
              map-options
              emit-value
              use-input
              input-debounce="0"
              @filter="filterFn05"
            />
          </div>
        </div>
        <div class="row q-pt-md">
          <div style="width: 30px">6.</div>
          <div class="col">
            <q-select
              v-model="bookInput.book06id"
              :options="bookInput.option06"
              outlined
              dense
              map-options
              emit-value
              use-input
              input-debounce="0"
              @filter="filterFn06"
            />
          </div>
        </div>
        <div class="row q-pt-md">
          <div style="width: 30px">7.</div>
          <div class="col">
            <q-select
              v-model="bookInput.book07id"
              :options="bookInput.option07"
              outlined
              dense
              map-options
              emit-value
              use-input
              input-debounce="0"
              @filter="filterFn07"
            />
          </div>
        </div>
        <div class="row q-pt-md">
          <div style="width: 30px">8.</div>
          <div class="col">
            <q-select
              v-model="bookInput.book08id"
              :options="bookInput.option08"
              outlined
              dense
              map-options
              emit-value
              use-input
              input-debounce="0"
              @filter="filterFn08"
            />
          </div>
        </div>
        <div class="row q-pt-md">
          <div style="width: 30px">9.</div>
          <div class="col">
            <q-select
              v-model="bookInput.book09id"
              :options="bookInput.option09"
              outlined
              dense
              map-options
              emit-value
              use-input
              input-debounce="0"
              @filter="filterFn09"
            />
          </div>
        </div>
        <div class="row q-pt-md">
          <div style="width: 30px">10.</div>
          <div class="col">
            <q-select
              v-model="bookInput.book10id"
              :options="bookInput.option10"
              outlined
              dense
              map-options
              emit-value
              use-input
              input-debounce="0"
              @filter="filterFn10"
            />
          </div>
        </div>
        <div class="submitDiv">
          <q-btn label="อัพเดท" class="submitBtn" @click="saveRankBtn()" />
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
      bookOptionsFull: [],
      updateData: "ไม่การอัพเดท",
      bookInput: {
        book01id: null,
        option01: [],
        book02id: null,
        option02: [],
        book03id: null,
        option03: [],
        book04id: null,
        option04: [],
        book05id: null,
        option05: [],
        book06id: null,
        option06: [],
        book07id: null,
        option07: [],
        book08id: null,
        option08: [],
        book09id: null,
        option09: [],
        book10id: null,
        option10: [],
      },
    };
  },
  methods: {
    async saveRankBtn() {
      if (
        !this.bookInput.book01id ||
        !this.bookInput.book02id ||
        !this.bookInput.book03id ||
        !this.bookInput.book04id ||
        !this.bookInput.book05id ||
        !this.bookInput.book06id ||
        !this.bookInput.book07id ||
        !this.bookInput.book08id ||
        !this.bookInput.book09id ||
        !this.bookInput.book10id
      ) {
        this.redNotify("กรุณาเลือกลำดับทั้ง 10 อันดับ");
        return;
      }

      let dataTemp = {
        book01id: this.bookInput.book01id,
        book02id: this.bookInput.book02id,
        book03id: this.bookInput.book03id,
        book04id: this.bookInput.book04id,
        book05id: this.bookInput.book05id,
        book06id: this.bookInput.book06id,
        book07id: this.bookInput.book07id,
        book08id: this.bookInput.book08id,
        book09id: this.bookInput.book09id,
        book10id: this.bookInput.book10id,
      };
      let url = this.serverpath + "saverank.php";
      let res = await axios.post(url, JSON.stringify(dataTemp));
      this.greenNotify("บันทึกข้อมูลเสร็จสิ้น");
    },
    async loadOption() {
      this.bookOptions = [];
      this.bookOptionsFull = [];
      let key = this.$q.localStorage.getItem("key");
      if (key == null) {
        this.$router.push("/");
        return;
      }
      let dataSend = { key: key };
      let url = this.serverpath + "loadbooklist.php";
      let res = await axios.post(url, JSON.stringify(dataSend));
      if (res.data == "go to welcome") {
        this.$router.push("welcome");
        return;
      } else if (res.data == "go to login") {
        this.localStorage.clear();
        this.$router.push("/");
        return;
      }
      let dataTemp = res.data;

      dataTemp.sort((a, b) => a.bookid - b.bookid);
      dataTemp.forEach((item) => {
        let temp = {
          label: item.title,
          value: item.bookid,
        };
        this.bookOptionsFull.push(temp);
      });
      this.bookInput.option01 = this.bookOptionsFull;
      this.bookInput.option02 = this.bookOptionsFull;
      this.bookInput.option03 = this.bookOptionsFull;
      this.bookInput.option04 = this.bookOptionsFull;
      this.bookInput.option05 = this.bookOptionsFull;
      this.bookInput.option06 = this.bookOptionsFull;
      this.bookInput.option07 = this.bookOptionsFull;
      this.bookInput.option08 = this.bookOptionsFull;
      this.bookInput.option09 = this.bookOptionsFull;
      this.bookInput.option10 = this.bookOptionsFull;
    },
    async loadData() {
      let url = this.serverpath + "loadrank.php";
      let res = await axios.get(url);
      this.updateData = res.data[0].timestamp;
      if (res.data[0].book01id != 0) {
        this.bookInput.book01id = res.data[0].book01id;
      }
      if (res.data[0].book02id != 0) {
        this.bookInput.book02id = res.data[0].book02id;
      }
      if (res.data[0].book03id != 0) {
        this.bookInput.book03id = res.data[0].book03id;
      }
      if (res.data[0].book04id != 0) {
        this.bookInput.book04id = res.data[0].book04id;
      }
      if (res.data[0].book05id != 0) {
        this.bookInput.book05id = res.data[0].book05id;
      }
      if (res.data[0].book06id != 0) {
        this.bookInput.book06id = res.data[0].book06id;
      }
      if (res.data[0].book07id != 0) {
        this.bookInput.book07id = res.data[0].book07id;
      }
      if (res.data[0].book08id != 0) {
        this.bookInput.book08id = res.data[0].book08id;
      }
      if (res.data[0].book09id != 0) {
        this.bookInput.book09id = res.data[0].book09id;
      }
      if (res.data[0].book10id != 0) {
        this.bookInput.book10id = res.data[0].book10id;
      }
    },
    filterFn01(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase();
        this.bookInput.option01 = this.bookOptionsFull.filter(
          (v) => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterFn02(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase();
        this.bookInput.option02 = this.bookOptionsFull.filter(
          (v) => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterFn03(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase();
        this.bookInput.option03 = this.bookOptionsFull.filter(
          (v) => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterFn04(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase();
        this.bookInput.option04 = this.bookOptionsFull.filter(
          (v) => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterFn05(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase();
        this.bookInput.option05 = this.bookOptionsFull.filter(
          (v) => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterFn06(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase();
        this.bookInput.option06 = this.bookOptionsFull.filter(
          (v) => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterFn07(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase();
        this.bookInput.option07 = this.bookOptionsFull.filter(
          (v) => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterFn08(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase();
        this.bookInput.option08 = this.bookOptionsFull.filter(
          (v) => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterFn09(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase();
        this.bookInput.option09 = this.bookOptionsFull.filter(
          (v) => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterFn10(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase();
        this.bookInput.option10 = this.bookOptionsFull.filter(
          (v) => v.label.toLowerCase().indexOf(needle) > -1
        );
      });
    },
  },
  async mounted() {
    await this.loadOption();
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.selectDiv {
  width: 700px;
  margin: auto;
}
.submitDiv {
  padding-top: 30px;
  text-align: center;
}
</style>
