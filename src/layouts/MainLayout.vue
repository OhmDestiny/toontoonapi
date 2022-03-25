<template>
  <q-layout view="lHh Lpr lFf">
    <div class="fullscreen">
      <div style="max-width: 1600px; margin: auto" class="shadow-2">
        <div class="leftdrawer shadow-3">
          <div>123</div>
        </div>
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.leftdrawer {
  width: 300px;
  height: 100vh;
  background-color: white;
}
</style>
