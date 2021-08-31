<template>
  <div
    style="position: absolute;left:0;bottom:0;top:0;right:0;background:rgba(0,0,0,0);z-index:99"
    v-if="visible">
    <div style="position: absolute;left:50%;top:50%;-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%);-o-transform: translate(-50%,-50%);transform: translate(-50%,-50%);">
      <vue-loading
        :type="type"
        :color="color"
        :size="{ width: width, height: height }"/>
    </div>
  </div>
</template>

<script>
import { VueLoading }  from 'vue-loading-template'

export default {
  name: 'Loading',
  props: {
    color: {
      type: String,
      default: '#ffffff'
    },
    visible: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '1.6rem'
    },
    height: {
      type: String,
      default: '1.6rem'
    },
    type: {
      type: String,
      default: 'spiningDubbles'
    }
  },
  components: {
    VueLoading
  }
}
</script>

<style scoped>

</style>
