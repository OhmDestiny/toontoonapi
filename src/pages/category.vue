<template>
  <div>category</div>
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

<style lang="scss" scoped></style>
