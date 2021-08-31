<template>
  <div class="content">
    <!-- 有地图的页面 -->
    <router-view style="z-index:8"></router-view>
  </div>
</template>
<script>
// import mapUI from '../../Maps/MapUI'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    // mapUI
  },
  mounted () {

  },
  methods: {
  }
}
</script>
<style lang="scss">
.content {
  position: relative;
  width: 100%;
  // height: 100%;
  #map {
    height: 100%;
    position: absolute;
  }
}
</style>