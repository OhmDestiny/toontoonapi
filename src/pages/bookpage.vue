<template>
  <div
    class="mainPadding"
    style="width: 100%; max-width: 1600px; margin: auto; height: 100px"
  >
    <div class="row">
      <div class="blockDiv cursor-pointer" @click="backBtn()">
        <img
          style="padding-top: 10px"
          src="../../public/image/backbtn.svg"
          alt=""
        />
      </div>
      <div class="font32 col" align="center">One piece</div>
      <div class="blockDiv"></div>
    </div>
    <hr />

    <div
      class="mainPoster row"
      :style="{ 'background-image': 'url(' + bgPic + ')' }"
    >
      <div class="q-pa-sm q-pt-md" style="vertical-align: middle">
        <img
          style="height: 90%"
          src="../../public/poster/onepunchman.png"
          alt=""
        />
      </div>
      <div class="col text-white q-pa-sm">
        <div align="right">
          <div class="editBtn row justify-evenly">
            <img
              style="width: 15px"
              src="../../public/image/editwhite.svg"
              alt=""
            />
            <div class="font18">แก้ไข</div>
          </div>
        </div>
        <div class="font32 q-pt-lg">One Punch Man วันพันช์แมน</div>
        <div class="font16 q-pt-sm q-pr-sm">
          รัฐฟลอริดา สหรัฐอเมริกา ปี ค.ศ. 2011
          หลังเกิดอุบัติเหตุขณะขับรถกับคนรัก โจลีน คูโจห์ (Jolyne Cujoh)
          ถูกตัดสินจำคุก 15
          ปีที่เรือนจำกรีนดอลฟินสตรีทซึ่งเป็นทัณฑสถานของรัฐที่มีการรักษาความปลอดภัยอย่างเข้มงวดสูงสุดจนเรียกกันว่า
          “อควาเรียม” ในช่วงเวลาที่ใกล้หมดหวัง เธอได้รับจี้เส้นหนึ่งจากพ่อ
          ซึ่งทำให้พลังลึกลับบางอย่างตื่นขึ้นมาในตัวเธอ
          “มีบางสิ่งในโลกนี้ที่น่ากลัวยิ่งกว่าความตาย
          และหนึ่งในนั้นก็คือสิ่งที่เกิดขึ้นในคุกแห่งนี้อย่างไม่ต้องสงสัย”
          ข้อความจากเด็กชายลึกลับที่ปรากฏต่อหน้าโจลีน
          เหตุการณ์ลึกลับที่เกิดขึ้นอย่างต่อเนื่อง
          ความจริงอันน่าสยดสยองที่พ่อบอกกับเธอเมื่อเขามาเยี่ยม และชื่อ “ดีโอ”
          ในที่สุดโจลีนจะได้เป็นอิสระจากกำแพงหินกลางมหาสมุทรแห่งนี้หรือไม่
          และการต่อสู้ครั้งสุดท้ายเพื่อยุติการเผชิญหน้าอันยาวนานนับศตวรรษระหว่างครอบครัวโจสตาร์และดีโอกำลังจะเริ่มต้นขึ้น
        </div>
        <div class="col"></div>
        <div class="font16 text-white footer">แอ็คชั่น | พลังวิเศษ</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgPic: "",
    };
  },
  methods: {
    backBtn() {
      this.$router.push("/book");
    },
  },
  mounted() {
    this.bgPic = "http://localhost/cartoon_api/cover/blackred.png";
    console.log(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.coverPic {
  margin: auto;
  width: 100%;
  position: relative;
}
.posterPic {
  position: absolute;
}
.mainPoster {
  position: relative;
  margin: auto;
  width: 100%;
  height: 340px;
}
.editBtn {
  width: 120px;
  height: 40px;
  line-height: 40px;
  background-color: #2d6be4;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  top: 0 px;
}
.footer {
  position: absolute;
  bottom: 20px;
}
.adNewChapter {
  width: 160px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #313131;
  color: #313131;
  cursor: pointer;
}
</style>
