<template>
  <div class="mask" v-show="loadingShow">
    <div class="loading">系统初始化中...</div>
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    loadingShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: calc(100vh - 262px);
  height: 100%;
  background: rgba(0, 0, 0, 1);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading {
  position: absolute;
  /* width: 25px; */
}

</style>
