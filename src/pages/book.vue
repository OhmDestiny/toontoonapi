<template>
  <div
    class="mainPadding"
    style="width: 100%; max-width: 1600px; margin: auto; height: 100px"
  >
    <div><top-bar></top-bar></div>
  </div>
</template>

<script>
import axios from "axios";
import topBar from "../components/topmenu_in_book.vue";
export default {
  components: { topBar },
  data() {
    return {
     
    };
  },
};
</script>

<style lang="scss" scoped></style>
