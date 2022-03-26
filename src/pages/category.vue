<template>
  <!-- add category button -->
  <div>
    <div class="heightSpace"></div>
    <div class="row">
      <div class="col-9"></div>
      <div class="addCategoryBTN q-pt-sm">
        <div class="row justify-center">
          <div class="leftSpace"></div>
          <div class="iconDiv middleSpace">
            <img src="../../public/image/plus_symbol.svg" alt="" />
          </div>
          <div class="fontCategory">เพิ่มหมวดหมู่</div>
          <div class="rightSpace"></div>
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div class="heightSpace"></div>
    <!-- category box -->
    <div class="categoryBG">
      <div class="row headBarcategory items-center">
        <div class="col-2 q-pl-xl font18">ลำดับ</div>
        <div class="col-6 q-pl-xl font18">หมวดหมู่</div>
        <div class="col-2 font18" align="center">ลบออก</div>
        <div class="col font18" align="center">แก้ไข</div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: [
        { id: 1, name: "โรแมนติก" },
        { id: 2, name: "แฟนตาซี" },
        { id: 5, name: "แอคชั่น" },
      ],
    };
  },
  methods: {
    loadData() {
      this.category.sort((a, b) => (a.name > b.name ? 1 : -1));
      console.log(this.category);
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.categoryBG {
  width: 781px;
  height: 774px;
  margin: auto;
}
.addCategoryBTN {
  width: 135px;
  height: 40px;
  border: 1px solid #515151;
}
.headBarcategory {
  width: 781px;
  height: 43px;
}
.middleSpace {
  width: 30px;
}
.leftSpace {
  width: 5px;
}
.fontCategory {
  font-size: 16px;
  line-height: 20px;
  padding-left: 0px;
}
.heightSpace {
  height: 40px;
}
.rightSpace {
  width: 5px;
}
</style>
