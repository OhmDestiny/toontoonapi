<template>
  <div>
    <div>
      <img
        src="../../public/image/checkright.png"
        alt=""
        v-if="checkValue == 1"
      />
      <img
        src="../../public/image/checkwrong.png"
        alt=""
        v-if="checkValue == 0"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["checkValue"],
};
</script>

<style lang="scss" scoped></style>
