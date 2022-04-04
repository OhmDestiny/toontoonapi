<template>
  <div>
    <div
      class="row q-py-sm font16"
      style="width: 100%"
      :class="[indexNumber % 2 == 1 ? 'stripRow' : '']"
    >
      <div style="width: 200px" class="q-px-sm">{{ data.dateBook }}</div>
      <div class="col">
        <span @click="bookUrl(data.bookId)"
          ><u>{{ data.bookName }}</u></span
        >
      </div>
      <div style="width: 100px" align="center">{{ data.episode }}</div>
      <div style="width: 100px" align="center">{{ data.click }}</div>
      <div style="width: 100px" align="center">{{ data.status }}</div>
      <div style="width: 100px" align="center" class="cursor-pointer">
        <img
          src="../../public/image/trash_symbol.svg"
          alt=""
          @click="deleteBtn(data.bookId)"
        />
      </div>
      <div style="width: 100px" align="center" class="cursor-pointer">
        <img
          src="../../public/image/edit.svg"
          alt=""
          @click="editBtn(data.bookId)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "indexNumber"],
  methods: {
    deleteBtn(id) {
      console.log(id);
    },
    editBtn(id) {
      console.log(id);
    },
    bookUrl(id) {
      this.$router.push("bookpage/" + id);
    },
  },
};
</script>

<style lang="scss" scoped>
.stripRow {
  background-color: rgba($color: #7291ff, $alpha: 0.15);
}
</style>
