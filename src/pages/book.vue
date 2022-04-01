<template>
  <div
    class="mainPadding"
    style="width: 100%; max-width: 1600px; margin: auto; height: 100px"
  >
    <div><top-bar @searchDataOut="searchDataOut"></top-bar></div>
    <div class="row">
      <div class="col-3 q-pa-md" align="center">
        <book-box></book-box>
      </div>
      <div class="col-3 q-pa-md" align="center">
        <book-box></book-box>
      </div>
      <div class="col-3 q-pa-md" align="center">
        <book-box></book-box>
      </div>
      <div class="col-3 q-pa-md" align="center">
        <book-box></book-box>
      </div>
      <div class="col-3 q-pa-md" align="center">
        <book-box></book-box>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import topBar from "../components/topmenu_in_book.vue";
import bookBox from "../components/bookBox.vue";
export default {
  components: { topBar, bookBox },
  data() {
    return {};
  },
  methods: {
    searchDataOut(dataOut) {
      console.log("searchText: " + dataOut.searchText);
      console.log("searchCat: " + dataOut.searchCat.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
