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
        />
      </div>
      <div class="col"></div>
      <div class="row">
        <div class="icontop">
          <img src="../../public/image/searchBtn.svg" alt="" />
        </div>
        <div class="icontop">
          <img src="../../public/image/listview.svg" alt="" />
        </div>
        <div class="icontop">
          <img src="../../public/image/thumbnail.svg" alt="" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryList: [
        {
          value: 1,
          label: "การ์ตูน",
        },
        {
          vaule: 2,
          label: "นิยาย",
        },
      ],
      categorySelected: [],
    };
  },
  methods: {
    loadData() {
      this.categorySelected = this.categoryList[0];
    },
    addNewBtn() {
      this.$router.push("/addnewcartoon");
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
</style>
