<template>
  <div>
    <div class="row">
      <div>
        <q-select
          :options="categoryList"
          label="หมวดหมู่"
          v-model="categorySelected"
          emit-value
          map-options
        />
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
      categorySelected: "",
    };
  },
  methods: {
    loadData() {
      this.categorySelected = this.categoryList[0];
    },
  },
  mounted() {
    this.loadData;
  },
};
</script>

<style lang="scss" scoped></style>
