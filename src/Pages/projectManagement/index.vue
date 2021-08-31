<template>
  <div class="pjmanage" style="width: 100%;height: 100%;background: black;">
      <div class="map">
        <mapUI/>
      </div>
      <router-view name="left" />
      <router-view v-if="posiRight" name="right" />
  </div>
</template>
<script>
import mapUI from '../../Maps/MapUI.vue'
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
export default {
  name: 'pjManagement',
  components: {
    mapUI
  },
  data() {
    return {
      zhCN,
      realPj: [
      ],
      posiRight: true,
      clickTypeStr: ''
    }
  },
  mounted() {
    let current = this.$route.path.trim()
    if (current == '/pjManagement') {
      this.posiRight = true
    } else {
      this.posiRight = false
    }
    this.$bus.off('showLiebiao')
    this.$bus.on('showLiebiao', (e) => {
      this.posiRight = e.showBoolean
      this.clickTypeStr = e.clickType
      console.log(this.posiRight, e)
      if (e.clickType == 'jiaohe') {
        if (this.posiRight) {
          this.$router.push('/ppline/ppline2')
        }
      } else if (e.clickType == 'suyuan') {
        if (this.posiRight) {
          this.$router.push('/ppline/ppline3')
        }
      } else {
        this.$router.push('/ppline')
      }
    })
    setTimeout(() => {
      let allDictItems = JSON.parse(window.localStorage.getItem('allDictItems'))
      let baseMapName = allDictItems.DomainSwitching.filter((item) => { return item.text == 'baseMap'})[0].description
      // http://www.yu-fan.cn:6443/arcgis/rest/services/yudu/MapServer
      // let inRoadUrl = 'http://192.168.3.132:'
      let hostname = window.location.hostname
      // let origin = 'https://' + hostname + `:${window.location.port}`
      let url = hostname === 'localhost' ? 'https://www.yu-fan.cn:8087' : ''
      // let url = hostname === 'localhost' ? 'https://www.yu-fan.cn:8085' : ''  // 于都演示
      let config = {
          "mapExtent":{"maxLongitude":121.42588413351676,"minLongitude":121.42261657437528,"maxLatitude":31.175356280803378,"minLatitude":31.172380764815582},
          "prodcutName":"于都",
          "villageInfos":[
            {
              "spaceId": "8fcfc9c6b0844be497e641e109e5df07",
              "spaceType": 0,
              "spaceNo": "12011640600701",
              "spaceName": "于都",
              "fence": [[121.42346303194334,31.172380764815582],[121.42261657437528,31.173980905915922],[121.42304457739168,31.174155257063884],[121.42270342470198,31.174854168105067],[121.42404481015929,31.175356280803378],[121.42461112187864,31.17427124658472],[121.4256128749621,31.17461507870006],[121.42573184801239,31.174348579067406],[121.42584606214066,31.173801303036065],[121.42588413351676,31.172773375881548],[121.42546534837973,31.1727138893564],[121.42494424641944,31.172534240050457],[121.42450642559446,31.172502117326886],[121.42449809748086,31.172423595113685],[121.42354988227005,31.1723879031986],[121.42346303194334,31.172380764815582]],
              "streetName": "于都",
              "mapExtent":{"maxLongitude":121.42588413351676,"minLongitude":121.42261657437528,"maxLatitude":31.175356280803378,"minLatitude":31.172380764815582},
            }
            ],
            'mapParams': {
              "mapType":"ESRI",
              // "url":`${url}/arcgis/rest/services/baselayer/MapServer`,
              "url":`${url}/arcgis/rest/services/${baseMapName}/MapServer`,
              // "url":"http://192.168.3.132:6080/arcgis/rest/services/kunshan_facility/MapServer",
              "apiUrl":`${url}/3.23/init.js`,
              "apiCss":`${url}/3.23/esri/css/esri.css`,
              // "apiUrl":`https://js.arcgis.com/3.35/`,
              // "apiCss":`https://js.arcgis.com/3.35/esri/css/esri.css`,
              "isRecordExtent":false,
              "zooms":[0,6],
              "zoom":1,
              "isShowTextAtMaxZoom":true,
              "isShowLayerControl":true
          }
        }
      this.$bus.emit('/home/webGlobalConfig', {config})
    }, 50)
  },

  watch: {
    $route (newval, oldval) {
      console.log(newval, 'indexhtml')
      if (newval.path == '/pjManagement') {
        this.posiRight = true
      } else {
        if (this.clickTypeStr == '') {
          this.posiRight = false
        } else {
          // ...
        }
      }
    }
  },
  created() {
  },
  methods: {
  },
  beforeDestroy() {
  }
}
</script>
<style lang='scss'>
.pjmanage .ant-calendar-picker-clear {
  // background: ;
  right: .1rem!important
}
.timeSelect .ant-input {
  border: none;
  background: none;
  color: white;
}
</style>

<style scoped lang='scss'>
.map {
      width: 100%;
      height: 100%;
      // background: #040612;
    }
</style>