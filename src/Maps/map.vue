<template>
  <div id="mapDiv">
  </div>
</template>
<script>
import { initMap } from './map.js'
import { apiNames } from '../Utils/config'

export default {
  name: 'mapDiv',
  data() {
    return {
    }
  },
  props: {
  },
  mounted() {
      this.initMapFun()
    //   this.$get('/geoserver/yufan/wms?service=WMS&version=1.1.0&request=GetMap&layers=yufan%3Atc-yufan&bbox=474169.5625%2C2721438.5%2C475131.4375%2C2721785.5&width=768&height=330&srs=EPSG%3A4326&format=application/openlayers').then(res => {
    //   })
  },
  created() {
  },
  methods: {
      initMapFun () {
          initMap()
      }
  },
  destroyed() {
  },
}
</script>
<style lang="scss" scoped>
#mapDiv {
    width: 100%;
    height: 100%;
}
</style>
