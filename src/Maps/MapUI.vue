<template>
  <div id="mapDiv" class="container">
    <!-- <div style="margin-left: 5rem;">
     longitude:{{ longitude }}
     latitude:{{ latitude }}
     showArr: {{ showArr }}
    </div> -->
    <div v-if="posiRight" class="buttons" @click.stop="stopProp">
        <div @click="tuliClick" class="buttons_act"><img src="../assets/imgs/zhihuipaishui/map/tuli.png" alt="">
          <!-- <div v-if="tuliShow" class="tuli" @click.stop="stopProp">
            <div class="title">
              <div><span/><span/></div>
              <div style="font-size: .36rem;margin-left: .3rem;">图例</div>
              <div class="mapDiv_sel">
                <a-select
                  style="width: 1.2rem;margin-right: .2rem;"
                  placeholder="请选择"
                  optionFilterProp = "children"
                  v-model="selectedItem"
                  @change="handleChange1"
                  :showArrow="showArrow"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in checkType" :key="roleindex.toString()" :title="role.title" :value="role.value">
                    {{ role.title }}
                  </a-select-option>
                </a-select>
              </div>
              <div class="mapDiv_sel">
                <a-select
                  style="width: 1.2rem;margin-right: .2rem;"
                  placeholder="请选择"
                  optionFilterProp = "children"
                  v-model="selectedItem"
                  @change="handleChange1"
                  :showArrow="showArrow"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in checkType" :key="roleindex.toString()" :title="role.title" :value="role.value">
                    {{ role.title }}
                  </a-select-option>
                </a-select>
              </div>
            </div>
            <div class="content" style="justify-content: space-around">
              <div>管线</div>
              <div>状态</div>
              <div>道路</div>
              <div>类型</div>
            </div>
            <div class="content">
              <div><img style="width: 1.04rem;height: .08rem;" src="../assets/imgs/zhihuipaishui/map/gray.png" alt=""></div>
              <div>未摸查</div>
              <div><img style="width: 1.04rem;height: .08rem;" src="../assets/imgs/zhihuipaishui/map/dashedgray.png" alt=""></div>
              <div>城市道路</div>
            </div>
            <div class="content">
              <div><img style="width: 1.04rem;height: .08rem;" src="../assets/imgs/zhihuipaishui/map/yellow.png" alt=""></div>
              <div>运行正常</div>
              <div><img style="width: 1.04rem;height: .08rem;" src="" alt=""></div>
              <div></div>
            </div>
            <div class="content">
              <div><img style="width: 1.04rem;height: .08rem;" src="../assets/imgs/zhihuipaishui/map/orange.png" alt=""></div>
              <div>管网缺陷</div>
              <div><img style="width: 1.04rem;height: .08rem;" src="" alt=""></div>
              <div></div>
            </div>
          </div> -->
        </div>
        <div @click="chaxunClick" class="buttons_act"><img src="../assets/imgs/zhihuipaishui/map/chaxun.png" alt="">
            <div v-if="chaxunShow" class="chaxun" @click.stop="stopProp">
              <div class="title">
                <div><span/><span/></div>
                <div style="font-size: .36rem;margin-left: .3rem;">查询统计</div>
              </div>
              <div style="margin-top: .4rem;">
                <span>选择图层</span>
                <a-select
                  style="width: 2.2rem;margin-left: .2rem;"
                  placeholder="请选择"
                  optionFilterProp = "children"
                  v-model="selectedItem"
                  @change="handleChange1"
                  :showArrow="showArrow"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in checkType" :key="roleindex.toString()" :title="role.title" :value="role.value">
                    {{ role.title }}
                  </a-select-option>
                </a-select>
              </div>
              <div style="margin-top: .4rem;">
                <span>空间查询</span>
                <img @click="searchByDraw('point')" style="width: .5rem;height: .5rem;vertical-align: middle;margin-left: .2rem;" src="../assets/imgs/zhihuipaishui/map/point.png" alt="">
                <img @click="searchByDraw('polyLine')" style="width: .5rem;height: .5rem;vertical-align: middle;margin-left: .2rem;" src="../assets/imgs/zhihuipaishui/map/line.png" alt="">
                <span @click="searchByDraw('Circle')" style="display: inline-block;width: .5rem;height: .5rem;border-radius: .25rem;background: #267ad4;vertical-align: middle;margin-left: .2rem;"></span>
                <img @click="searchByDraw('Polygon')" style="width: .5rem;height: .5rem;vertical-align: middle;margin-left: .2rem;" src="../assets/imgs/zhihuipaishui/map/polygon.png" alt="">
                <img @click="clearTucen" style="width: .5rem;height: .5rem;vertical-align: middle;margin-left: .2rem;" src="../assets/imgs/zhihuipaishui/ppline/delete.png" alt="">
              </div>
              <div style="margin-top: .4rem;">
                <span>统计图表</span>
                <img @click="chartsPop" style="width: .5rem;height: .5rem;vertical-align: middle;margin-left: .2rem;" src="../assets/imgs/zhihuipaishui/map/charts.png" alt="">
              </div>
            </div>
        </div>
        <div @click="exportClick" class="buttons_act"><img src="../assets/imgs/zhihuipaishui/map/图标/导出图标.png" alt=""></div>
        <div @click="celiangClick" class="buttons_act"><img src="../assets/imgs/zhihuipaishui/map/celiang.png" alt="">
          <div v-if="celiangComShow" class="chaxun" @click.stop="stopProp">
              <div class="title">
                <div><span/><span/></div>
                <div style="font-size: .36rem;margin-left: .3rem;">测量</div>
              </div>
              <div style="margin-top: .4rem;">
                <div style="display: flex;margin-bottom: .2rem;">
                  <div style="" @click="doMeasure('length')">测量距离</div>
                  <div style="margin-left: .5rem;" @click="doMeasure('area')">测量面积</div>
                  <div style="margin-left: .5rem;" @click="clearTucen2" >清除</div>
                </div>
                <div>
                  <span style="vertical-align: middle;">距离：</span><span style="vertical-align: middle;display: inline-block;width: 2.14rem;height: .5rem;background: #205187;border-radius: .1rem;">{{ dislength }}</span><span style="vertical-align: middle;margin-left: .3rem;">米</span>
                </div>
                <div style="margin-top: .5rem;">
                  <span style="vertical-align: middle;">面积：</span><span style="vertical-align: middle;display: inline-block;width: 2.14rem;height: .5rem;background: #205187;border-radius: .1rem;">{{ disarea }}</span><span style="vertical-align: middle;margin-left: .3rem;">平方米</span>
                </div>
              </div>
          </div>
        </div>
        <div style="position: relative;" @click="printClick" class="buttons_act"><img src="../assets/imgs/zhihuipaishui/map/print.png" alt="">
          <canvas
            :width="canvasWidth"
            :height="canvasHeight"
            ref="canvas"
            style="position: absolute;left: -9999px;"
          ></canvas>
        </div>
        <div @click="jiaoheClick" class="buttons_act"><img src="../assets/imgs/zhihuipaishui/map/hecha.png" alt=""></div>
        <div @click="suyuanClick" class="buttons_act"><img src="../assets/imgs/zhihuipaishui/suyuan.png" alt=""></div>
        <!-- <div @click="getNowPosition" class="buttons_act"><img src="../assets/imgs/zhihuipaishui/position.png" alt=""></div> -->
        <div @click="clearTucen3" class="buttons_act"><img src="../assets/imgs/zhihuipaishui/ppline/delete.png" alt=""></div>
    </div>
    <chartsAlay @close="closeCharts" v-if="chartsAlay" style="position: absolute;bottom:.3rem;right:.3rem;z-index: 100;"/>
    <exportCom @close="closeExport" v-if="exportComShow" style="position: absolute;bottom:.3rem;right:9.5rem;z-index: 100;"/>
  </div>
</template>

<script>
import {notification} from 'ant-design-vue'
import html2canvas from 'html2canvas';
import chartsAlay from './chartsAlay'
import exportCom from './export'
import { createMap, getFence, hideLayerAndLabel, showLayerAndLabel, addDataLayer, addBoundaryLayer, showLocation, getNextConfig } from './mapJs.js'
import { getMapPointComponent, HtmlConfig, apiNames } from '../Utils/config'
import user from '../Utils/user'
// import upDown from '../Pages/UIKit/upDown'
import test from '../components/dialogs/test.vue'
import car from '../components/dialogs/car.vue'
import {  wgs84ToGaode, showLayer, showCar, closePopup, showStranger, baiduToWGS84, hideLayer, getLyrFullName, getLyrByName, showFace, closeAllPopup, addAlarmPointsLayer, addNomalPointsLayer,measureLine,clearGraphicsLayer,
  // eslint-disable-next-line
  setExtent, mapZoomScale, getMapZoom, stopBlinkingObj, clearDataLayer, cleardrawing, startBlinkingObj, setCenterAndZoom, getLayerNamebyVisibility, clearVillagePolygons, addPointsLayer, searchDataArr, removeGraphics, printMap} from './mapApi.js'
import { MapType, MapPolygonStyle, MapLineType, MapPointStyle } from './mapClass.js'
import Vue from "vue"
let extent = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 }
let villageFences = []
let mapParams
let headString

// 上一个设备闪烁对象
let preBlinkingObj = []
// 上一个人员闪烁对象
let preBlinkingPeo = []

export default {
  data () {
    return {
      canvasWidth: '',
      canvasHeight: '',
      dislength: '',
      disarea: '',
      exportComShow: false,
      chartsAlay: false,
      returnPic: require('../assets/imgs/maps/returnPic.png'),
      mapsearchPic: require('../assets/imgs/maps/mapsearch.png'),
      backgroundImg: `background-image: url("../assets/imgs/smallStrMap.png");background-repeat: no-repeat;background-size: cover;`,
      pic: '',
      animationType: false,
      smallmapShow: false,
      panelShow: false,
      itemInfos: [],
      timer1: '',
      mapsearch: true,
      pCloseShow: false,
      globalNum: 0,
      showArrow: false,
      checkType: [],
      selectedItem: [],
      tuliShow: false,
      jiaoheShow: false,
      suyuanShow: false,
      chaxunShow: false,
      celiangComShow: false,
      posiRight: false,
      longitude: null,
      latitude: null,
      showArr: []
      // videoSrc: ''
    }
  },
  components: {
    chartsAlay,
    exportCom
  },
  destroyed: function () {
    clearDataLayer()
    closePopup()
  },
  mounted: function () {
    let current = this.$route.path.trim()
    if (current == '/pjManagement') {
        this.posiRight = false
      } else {
        this.posiRight = true
      }
    headString = user.getRequestHeader()
    // 修改head，设置villageID,mapextent
    let that = this
    that.$bus.off('/home/webGlobalConfig')
    that.$bus.on('/home/webGlobalConfig', function (e) {
      // console.log('事件/home/webGlobalConfig触发', e)
      let gConfig = e.config
      console.log('事件/home/webGlobalConfig触发', gConfig)
      let vIDs = []
      villageFences = []
      preBlinkingObj = []
      let centerPoints = []
      for (let i = 0; i < gConfig.villageInfos.length; i++) {
        vIDs.push(gConfig.villageInfos[i].spaceNo)
        villageFences.push(gConfig.villageInfos[i].fence)
        centerPoints.push(gConfig.villageInfos[i].mapExtent)
      }
      headString = user.getRequestHeader()
        extent.xmin = gConfig.mapExtent.minLongitude
        extent.ymin = gConfig.mapExtent.minLatitude
        extent.xmax = gConfig.mapExtent.maxLongitude
        extent.ymax = gConfig.mapExtent.maxLatitude
        mapParams = gConfig.mapParams
      createMap(current, headString, extent, villageFences, 'mapDiv', mapParams, function () {
        // 画街道范围
        let streetFences = []
        let strokeColor = '#327AE6'
        if (mapParams.isShowLayerControl) {
          that.getDataType(current)
        }
        that.getRealtimeData(current)
        
        that.$bus.on('/web/event/map/nbdevicealarm', function (e) {
          let obj = JSON.parse(e)
          // console.log(obj)
          let currentVillage = JSON.parse(window.localStorage.getItem('currentVillageID')).villageID
          let id = currentVillage
          if (id === obj.villageID) {
            that.showRealTimeAlarmOnMap(that, obj.deviceID, true, obj.deviceType, null, null)
          }
        })
        window.mapPipeClicked = function (e) {
          that.$bus.emit('showLiebiao', {showBoolean: true, clickType: 'liebiao'})
          setTimeout(() => {
            that.$bus.emit('editPipeForm', JSON.stringify(e))
          }, 50)
        }
        window.mapManholeClicked = function (e) {
          that.$bus.emit('showLiebiao', {showBoolean: true, clickType: 'liebiao'})
          setTimeout(() => {
            that.$bus.emit('editManholeForm', JSON.stringify(e))
          }, 50)
        }
        window.mapCombClicked = function (e) {
          that.$bus.emit('showLiebiao', {showBoolean: true, clickType: 'liebiao'})
          setTimeout(() => {
            that.$bus.emit('editCombForm', JSON.stringify(e))
          }, 50)
        }
        window.mapOutfallClicked = function (e) {
          that.$bus.emit('showLiebiao', {showBoolean: true, clickType: 'liebiao'})
          setTimeout(() => {
            that.$bus.emit('editOutfallForm', JSON.stringify(e))
          }, 50)
        }
        window.mapHunjieClicked = function (e) {
          that.$bus.emit('showLiebiao', {showBoolean: true, clickType: 'liebiao'})
          setTimeout(() => {
            that.$bus.emit('editHunjieForm', JSON.stringify(e))
          }, 50)
        }

        window.mapseptictankClicked = function (e) {
          that.$bus.emit('showLiebiao', {showBoolean: true, clickType: 'liebiao'})
          setTimeout(() => {
            that.$bus.emit('editseptictankForm', JSON.stringify(e))
          }, 50)
        }

        window.mapriserClicked = function (e) {
          that.$bus.emit('showLiebiao', {showBoolean: true, clickType: 'liebiao'})
          setTimeout(() => {
            that.$bus.emit('editriserForm', JSON.stringify(e))
          }, 50)
        }

        //溯源
        window.mapSuyuanClicked = function (e) {
          that.$bus.emit('suyuanclick', JSON.stringify(e))
        }

        //* **************************************************************** */
        window.clickVillageWindow = function (e) {
          let getLocalFence = []
          let secd = JSON.parse(localStorage.getItem('webGlobalConfig')).spaceIDsInfos
          for (let i = 0; i < secd.length; i++) {
            getLocalFence.push(secd[i]) //当前权限下一级
          }
          if (e.type === 'mapSearch' && e.type !== undefined) {
            let commit = []
            if (e.spaceType === 2) {
              if (localStorage.getItem('maxLevel') > 1) {
                commit = getLocalFence.filter((item) => {
                  return item.spaceNo.substring(0, 9) === e.code
                })
              } else {
                commit = streetFences.filter((item) => {
                  return item.spaceNo.substring(0, 9) === e.code
                })
              }
              if (commit.length !== 0 && commit[0].fence !== null) {
                let afence = commit[0].fence
                let centerXs = 0
                let centerYs = 0
                for (let i = 0, len = afence.length; i < len; i++) {
                  centerXs += afence[i][0]
                  centerYs += afence[i][1]
                }
                let centerX = centerXs / afence.length
                let centerY = centerYs / afence.length
                setCenterAndZoom(centerX, centerY, 17.5)
              }
              addBoundaryLayer(commit, new MapPolygonStyle('#FFFFFF', "#327AE6", 5, 0.6, 0, MapLineType.Solid), 'villageFence')
            } else {
              if (localStorage.getItem('maxLevel') > 1) {
                commit = getLocalFence.filter((item) => {
                  return item.spaceName === e.name
                })
              } else {
                commit = streetFences.filter((item) => {
                  return item.spaceName === e.name
                })
              }
              let afence = commit.fence
              let centerXs = 0
              let centerYs = 0
              for (let i = 0, len = afence.length; i < len; i++) {
                centerXs += afence[i][0]
                centerYs += afence[i][1]
              }
              let centerX = centerXs / afence.length
              let centerY = centerYs / afence.length
              setCenterAndZoom(centerX, centerY, 17.5)
              addBoundaryLayer(commit, new MapPolygonStyle('#FFFFFF', "#327AE6", 5, 0.6, 0, MapLineType.Solid), 'villageFence')
            }
          }
          if (e.level === 0) {
            let imgurl = require("../assets/imgs/smallComMap.png")
            that.backgroundImg = `background-image: url(${imgurl});background-repeat: no-repeat;background-size: cover;`
          } else if (e.level === 1) {
            let imgurl = null
            if (localStorage.getItem('maxLevel') > 1) {
              imgurl = require("../assets/imgs/smallStrMap.png")
            } else {
              imgurl = require("../assets/imgs/smallComMap.png")
            }
            that.backgroundImg = `background-image: url(${imgurl});background-repeat: no-repeat;background-size: cover;`
          }
          if (e.showAnimation && e.level !== 2) {
            if (localStorage.getItem('maxLevel') > 1) {
              that.smallmapShow = true
            } else {
              that.smallmapShow = false
            }
          }
          setTimeout(() => {
            that.smallmapShow = false
          }, 2000)
          that.$bus.emit('/map/mapClick', e)
          let item = {}
          let mapLevel = that.$store.state.mapLevelArr
          if (e.level > 0) {
            item.spaceIDs = e.villageID
            item.spaceLevel = e.level
            item.name = e.villageName
            that.$store.state.chooseVillageInfo = item
            if (mapLevel.length <= 1) {
              // 如果只有1个或0个，直接push
              mapLevel.push(e)
              that.$store.state.mapLevelArr = mapLevel
            } else if (e.level == Number(mapLevel[mapLevel.length - 1].level)) {
              // 如果是平级，则替换最后一个
              mapLevel.splice(mapLevel.length - 1, 1)
              mapLevel.push(e)
              that.$store.state.mapLevelArr = mapLevel
            } else if (e.level == Number(mapLevel[mapLevel.length - 1].level - 1)) {
              // 如果是下级，则直接push
              mapLevel.push(e)
              that.$store.state.mapLevelArr = mapLevel
            }
          } else {
            let port = window.location.hostname == 'localhost' ? ':8085' : ':5002'
            let href = '' + window.location.protocol + '//' + window.location.hostname + port + '?spaceIDs=' + e.villageID + '&level=' + e.level
            window.open(href, "_blank")
          }
          if (localStorage.getItem('maxLevel') > 1) {
            villageFences = gConfig.spaceIDsInfos.filter((item) => {
              let num = item.spaceNo
              num = num.substring(0, 9)
              return num === e.spaceNo
            })
            // 点击的街道面并绘制居委面
            if (e.level === 2) {
              let strokeColor = '#327AE6'
              window.clickVillageWindowShow(e)
              that.$bus.emit('/map/smallHide')
              if (e.type === 'mapSearch') {
                // ..
              } else {
                clearVillagePolygons()
              }
              addBoundaryLayer(villageFences, new MapPolygonStyle('#FFFFFF', strokeColor, 2, 0.9, 0, MapLineType.Solid), 'villageFence')
            }
            // 点击的居委面并绘制小区面
            if (e.level === 1) {
              let nextInfo = getNextConfig(e)
              let strokeColor = '#0000FF'
              if (e.type === 'mapSearch') {
                let afence = []
                afence = villageFences.find((item) => {
                  return item.spaceName === e.name
                }).fence
                let centerXs = 0
                let centerYs = 0
                for (let i = 0, len = afence.length; i < len; i++) {
                  centerXs += afence[i][0]
                  centerYs += afence[i][1]
                }
                let centerX = centerXs / afence.length
                let centerY = centerYs / afence.length
                setTimeout(() => {
                  setCenterAndZoom(centerX, centerY, 17.5)
                }, 1000)
              }
              addBoundaryLayer(nextInfo, new MapPolygonStyle('#FFFFFF', strokeColor, 8, 0.9, 0, MapLineType.Solid), 'spaceFence')
              window.clickVillageWindowShow(e)
            }
          } else {
            // 点击的居委面并绘制小区面
            if (e.level === 1) {
              let nextInfo = getNextConfig(e)
              let strokeColor = '#0000FF'
              if (e.type === 'mapSearch') {
                let afence = []
                afence = streetFences.find((item) => {
                  return item.spaceName === e.name
                }).fence
                let centerXs = 0
                let centerYs = 0
                for (let i = 0, len = afence.length; i < len; i++) {
                  centerXs += afence[i][0]
                  centerYs += afence[i][1]
                }
                let centerX = centerXs / afence.length
                let centerY = centerYs / afence.length
                setTimeout(() => {
                  setCenterAndZoom(centerX, centerY, 17.5)
                }, 1000)
              }
              addBoundaryLayer(nextInfo, new MapPolygonStyle('#FFFFFF', strokeColor, 8, 0.9, 0, MapLineType.Solid), 'spaceFence')
              window.clickVillageWindowShow(e)
            }
          }
        }
        //* **************************************************************** */
        window.mapPointClicked = function (e) {
          let path = null
          if (that.globalNum === 0) {
            path ='/alarm/' + e.type.toLowerCase()
          } else {
            path ='/' + e.type.toLowerCase()
          }
            console.log(path, 'dianji点位')
            window.pop.show({
              level: 1,
              component: getMapPointComponent(path),
              param: {
                e: e,
                level: 1
              }
            })
        }
       strokeColor = '#00F5DC'

        that.$bus.off('startInterval')
        that.$bus.on('startInterval', (numbe) => {
          let num = numbe
          that.globalNum = numbe
          console.log(num)
            window.mapPointMove = function (map, infoWindow, e, position) {
              if (num === 0 && e.images[0] ) {
                that.createInfoDom(map, infoWindow, e, position)
              } else {
                console.log('else')
                // ..
              }
              // showFace(e.longitude, e.latitude, e.img)
            }
        })
        window.mapChangeVillageClicked = function (e) {
          that.$store.commit('updateCurrentVirtualSpaceCode',e.code)
          that.$store.commit('updateVirtualSpaceCodes',[e.code])
          let nowVillage = gConfig.villageInfos.filter((item) => {
            return item.spaceNo === e.code
          })
          let nowCenterPoint = centerPointsArr.filter((item) => {
            return item.code === e.code
          })
          clearDataLayer()
          // 画点画面
          let strokeColor = '#00F5DC'
          addBoundaryLayer([nowVillage[0].fence], new MapPolygonStyle('#FFFFFF', strokeColor, 8, 0.9, 0, MapLineType.Solid), 'villageFence')
          that.toBourdy(nowVillage[0])
          let iconWidth = HtmlConfig.mapIconParams.width
          let iconHeight = HtmlConfig.mapIconParams.height
          let isClickable = true
          let isLabel = true
          addPointsLayer('centerPoint', 'centerPoint', nowCenterPoint,
            new MapPointStyle(iconWidth, iconHeight, HtmlConfig.mapIconParams.styles, -10, -34, 0), isLabel,
            HtmlConfig.mapIconParams.extension, isClickable)
        }

      })
    })
  },
  created: function () {
    this.$bus.on('mapLayoutChanged', this.onPositionChanged)
  },
  methods: {
    // printClick () {
    //   printMap()
    // },
    getNowPosition () {
      setCenterAndZoom(591469.227889016, 3478837.45717219)
      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition((position) => {
      //     this.longitude = position.coords.longitude
      //     this.latitude = position.coords.latitude
      //     this.showArr = this.wgs84Tosh(this.latitude, this.longitude)
      //     let arr = this.wgs84Tosh(this.latitude, this.longitude)
      //     setCenterAndZoom(arr[0], arr[1], 0.05)
      //   }, (err) => {
      //     console.log(err)
      //   })
      // }
    },
    wgs84Tosh (lat,lon) {
        var xx, yy, r2d, tolat, tolon, rearth, PI;
        PI = 3.141592653589793;
        r2d = 57.2957795131;
        tolat = (31 + (14.0 + 7.55996 / 60.0) / 60.0) / r2d;
        tolon = (121.0 + (28.0 + 1.80651 / 60.0) / 60) / r2d;
        rearth = 6371006.84;
        var hor, frlat, frlon, gcdist,clatf, clatt, slatf, slatt,gcbrg;
        var dlon, cdlon, sdlon, sdist, cdist, sbrg, cbrg, temp; 
        var intlat, intlon;
        intlat = lat;
        intlon = lon;
        frlat = lat / r2d;
        frlon = lon / r2d;
        clatt = Math.cos(frlat);
        clatf = Math.cos(tolat);
        slatt = Math.sin(frlat);
        slatf = Math.sin(tolat);
        dlon = frlon - tolon;
        cdlon = Math.cos(dlon);
        sdlon = Math.sin(dlon);
        cdist = slatf * slatt + clatf * clatt * cdlon;
        temp = (clatt * sdlon) * (clatt * sdlon) + (clatf * slatt - slatf * clatt * cdlon) * (clatf * slatt - slatf * clatt *cdlon);
        sdist = Math.sqrt(Math.abs(temp));
        if ((Math.abs(sdist) > 1e-7) || (Math.abs(cdist) > 1e-7))
            gcdist = Math.atan2(sdist, cdist);
        else
            gcdist = 0;
        sbrg = sdlon * clatt;
        cbrg = (clatf * slatt - slatf * clatt * cdlon);
        if ((Math.abs(sbrg) > 1e-7) || (Math.abs(cbrg) > 1e-7)) {
            temp = Math.atan2(sbrg, cbrg);
            while (temp < 0) {
                temp = temp + 2 * PI;
                gcbrg=temp;
            }
        } else
            gcbrg = 0;
        hor = gcdist * rearth;
        xx = hor * Math.sin(temp);
        yy = hor * Math.cos(temp); 
        return [xx,yy];
    },
    // getNowPosition () {
    //   console.log('dianjilll', window)
    //   let mapObj = new window.AMap.Map('iCenter');
    //   console.log(mapObj)
    //   mapObj.plugin('window.AMap.Geolocation', function () {
    //       geolocation = new window.AMap.Geolocation({
    //           enableHighAccuracy: true,//是否使用高精度定位，默认:true
    //           timeout: 10000,          //超过10秒后停止定位，默认：无穷大
    //           maximumAge: 0,           //定位结果缓存0毫秒，默认：0
    //           convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
    //           showButton: true,        //显示定位按钮，默认：true
    //           buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
    //           buttonOffset: new window.AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    //           showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
    //           showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
    //           panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
    //           zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    //       });
    //       console.log(geolocation)
    //       mapObj.addControl(geolocation);
    //       geolocation.getCurrentPosition();
    //       window.AMap.event.addListener(geolocation, 'complete', (res) => {
    //           console.log(res)
    //       });//返回定位信息
    //       window.AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    //   });
    // },
    printClick (imgText) {
        const canvasID = document.getElementById('mapDiv');
        const a = document.createElement('a');
        const opts = {
            tainttest: true, // 检测每张图片都已经加载完成
            useCORS: true, // 跨域处理，可以加载网络图片
            logging: true, // 日志开关
        };
        html2canvas(canvasID, opts).then((canvas) => {
            const dom = document.body.appendChild(canvas);
            dom.style.display = 'none';
            a.style.display = 'none';
            document.body.removeChild(dom);
            const blob = this.dataURLToBlob(dom.toDataURL('image/png'));
            a.setAttribute('href', URL.createObjectURL(blob));
            // 这块是保存图片操作  可以设置保存的图片的信息
            a.setAttribute('download', imgText + '.png');
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(blob);
            document.body.removeChild(a);
        });
    },
    dataURLToBlob (dataurl) {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    },
    fanzhuanClick () {
      this.$get(apiNames['查询逆流交换']).then(res => {
        let changeData = res.result
        let saveArr = []
        changeData.forEach(element => {
          saveArr.push({
            in_juncid: element.outJuncid,
            out_juncid: element.inJuncid,
            district_id: element.districtId,
            district_name: element.districtName,
            pipe_categ: element.pipeCateg == '' ? null : Number(element.pipeCateg),
            material: element.material == '' ? null : Number(element.material),
            material_name: element.materialName == '' ? null : element.material_name,
            pipe_lengt: element.pipeLengt == '' ? null : Number(element.pipeLengt),
            shape_data: element.shapeData == '' ? null : Number(element.shapeData),
            flowdirect: 0,
            check_method: element.checkMethod == '' ? null : Number(element.checkMethod),
            check_date: element.checkDate == '' ? null : element.checkDate,
            is_complete: element.isComplete == '' ? null : Number(element.isComplete),
            remark: element.remark == '' ? null : element.remark,
            status: element.status == '' ? null : Number(element.status),
            pipeid: element.pipeid,
            del_flag: 0,
            in_juncid_ms: element.outJuncidMs,
            out_juncid_ms: element.inJuncidMs,
            starsurfac: element.endsurface,
            endsurface: element.starsurfac,
            startx: element.endx,
            starty: element.endy,
            endx: element.startx,
            endy: element.starty,
            roadid: element.roadid,
            road_name: element.roadName,
            objectid: element.objectid,
            constructi: element.constructi == '' ? null : element.constructi,
            judge_dispose: element.judgeDispose
          })
          // let params = {
          //   pipeid: this.nowPipeid
          // }
          // this.$get(apiNames['查询管道缺陷列表'], params).then(res => {})
        });
      })
    },
    jiaoheClick () {
      this.jiaoheShow = !this.jiaoheShow
      this.tuliShow = false
      this.suyuanShow = false
      this.chaxunShow = false
      this.celiangComShow = false
      this.$bus.emit('showLiebiao', {showBoolean: this.jiaoheShow, clickType: 'jiaohe'})
    },
    suyuanClick () {
      this.suyuanShow = !this.suyuanShow
      this.jiaoheShow = false
      this.tuliShow = false
      this.chaxunShow = false
      this.celiangComShow = false
      this.$bus.emit('showLiebiao', {showBoolean: this.suyuanShow, clickType: 'suyuan'})
    },
    tuliClick () {
      this.chaxunShow = false
      this.celiangComShow = false
      this.jiaoheShow = false
      this.tuliShow = !this.tuliShow
      // this.$bus.emit('showLiebiao', this.tuliShow)
      this.$bus.emit('showLiebiao', {showBoolean: this.tuliShow, clickType: 'liebiao'})
    },
    chaxunClick () {
      this.jiaoheShow = false
      this.celiangComShow = false
      this.chaxunShow = !this.chaxunShow
    },
    doMeasure (type) {
      measureLine(type, (res) => {
        // console.log(showPt, result, result.lengths[0].toFixed(3), "千米")
            console.log(res)
            if (type == 'length') {
              this.dislength = res.lengths[0].toFixed(3) * 1000
            } else {
              this.dislength = res.lengths[0].toFixed(3) * 1000000
              this.disarea = res.areas[0].toFixed(3) * 1000000
            }
      })
    },
    exportClick () {
      this.exportComShow = true
    },
    celiangClick () {
      this.celiangComShow = !this.celiangComShow
    },
    clearTucen () {
      removeGraphics()
      if (window.localStorage.getItem('searchMapData')) {
          window.localStorage.removeItem('searchMapData')
          this.$bus.emit('removesearchMapData')
      }
    },
    clearTucen2 () {
      removeGraphics()
      this.dislength = ''
      this.disarea = ''
    },
    clearTucen3 () {
      removeGraphics()
      clearGraphicsLayer()
    },
    closeCharts () {
      this.chartsAlay = false
    },
    closeExport () {
      this.exportComShow = false
    },
    chartsPop () {
      this.chartsAlay = true
    },
    searchByDraw (type) {
      // enableCreatePoly({}, type, true)
      searchDataArr(type, true, (arr) => {
          window.localStorage.setItem('searchMapData', JSON.stringify(arr))
          this.$bus.emit('searchMapData')
      })
    },
    stopProp () {
      console.log('..')
    },
    handleChange1 () {
      console.log(';;')
    },
    toBourdy (item) {
      let afence = item.fence
      let centerXs = 0
      let centerYs = 0
      for (let i = 0, len = afence.length; i < len; i++) {
        centerXs += afence[i][0]
        centerYs += afence[i][1]
      }
      let centerX = centerXs / afence.length
      let centerY = centerYs / afence.length
      setCenterAndZoom(centerX, centerY, 25)
    },
    createInfoDom (map, infoWindow, item, position) {
      let type = null
      switch(item.type) {
        case 'face':
          type = test
          break;
        case 'car':
          type = car
          break;
        default:
          type = test
      }
      let Content = Vue.extend({
        template: `<base-conp :dataObj="item"></base-conp>`,
        name: 'detail',
        components: {
          'base-conp': type
        },
        data(){
          return {
            item: item
          }
        }
      });
      let component = new Content().$mount();
      infoWindow.setContent(component.$el);
      infoWindow.open(map, position);
    },
    pClose () {
      this.$bus.emit('closeMap')
    },
    onPositionChanged: function (args) {
      if (args.show) {
        if (mapParams === undefined) return
        if (mapParams.mapType === MapType.Esri || mapParams.mapType === MapType.Tianditu) {
          // setCenterAndZoom((extent.xmin + extent.xmax) / 2, (extent.ymin + extent.ymax) / 2, mapParams.zoom)
          setCenterAndZoom(121.4375092106, 31.2051581168, mapParams.zoom)
        }
      }
    },
    // 下拉检索使用
    getClickedItem: function (item) {
      let villageInfo = JSON.parse(window.localStorage.getItem('pointVillageInfo'))
      for (let i = 0; i < villageInfo.length; i++) {
        let villageID = villageInfo[i].villageID
        let type = this.getType(item.type.trim())
        if (item.selected) {
          if (type === 'fence') {
            getFence()
            if (getMapZoom() === mapParams.zooms[1]) {
              showLayer(villageID + '_fence_line_label')
            }
          } else if (type === 'all') {
            for (let i = 0; i < this.itemInfos.length; i++) {
              this.itemInfos[i].selected = true
              this.itemInfos[i].bg = true
              if (this.itemInfos[i].type === 'all') continue
              let deviceType = this.getType(this.itemInfos[i].type.trim())
              if (deviceType === 'fence') {
                getFence()
                if (getMapZoom() === mapParams.zooms[1]) {
                  showLayer(villageID + '_fence_line_label')
                }
              } else {
                showLayerAndLabel(villageID + '_' + deviceType, deviceType, true, false)
                hideLayerAndLabel(villageID + '_' + deviceType + '_label')
                if (getMapZoom() === mapParams.zooms[1]) {
                  hideLayerAndLabel(villageID + '_' + deviceType + '_label')
                }
              }
            }
          } else {
            showLayerAndLabel(villageID + '_' + type, type, true, false)
            hideLayerAndLabel(villageID + '_' + type + '_label')
            if (getMapZoom() === mapParams.zooms[1]) {
              hideLayerAndLabel(villageID + '_' + type + '_label')
            }
          }
        } else {
          if (type === 'fence') {
            clearDataLayer(villageID + '_fence_line')
            clearDataLayer(villageID + '_fence_point')
            clearDataLayer(villageID + '_fence_line_label')
          } else if (type === 'all') {
            for (let i = 0; i < this.itemInfos.length; i++) {
              this.itemInfos[i].selected = false
              this.itemInfos[i].bg = false
              if (this.itemInfos[i].type === 'all') continue
              let deviceType = this.getType(this.itemInfos[i].type.trim())
              if (deviceType === 'fence') {
                clearDataLayer(villageID + '_fence_line')
                clearDataLayer(villageID + '_fence_point')
                clearDataLayer(villageID + '_fence_line_label')
              } else {
                hideLayerAndLabel(villageID + '_' + deviceType)
                hideLayer(villageID + '_' + deviceType + '_label')
                if (getMapZoom() === mapParams.zooms[1]) {
                  hideLayer(villageID + '_' + deviceType + '_label')
                }
              }
            }
          } else {
            hideLayerAndLabel(villageID + '_' + type)
            if (getMapZoom() === mapParams.zooms[1]) {
              hideLayer(villageID + '_' + type + '_label')
            }
          }
          stopBlinkingObj()
        }
      }
    },
    getModuleName: function (path) {
      let start = path.lastIndexOf('/')
      return path.slice(start + 1, path.length).trim()
    },
    getDataType: function (current) {
      if (current === '/street') {
        this.panelShow = false
      } else {
        this.itemInfos.splice(0, this.itemInfos.length)
        for (let i = 0; i < window.deviceTypeNames.length; i++) {
          this.itemInfos.push({ type: this.getTypeName(window.deviceTypeNames[i].type.trim()), id: i, bg: false, selected: false })
        }
        this.checkState(current)
      }
    },
    checkState: function (current) {
      switch (current) {
        case '/home/maintenance/camera':
        case '/home/maintenance/access':
        case '/home/maintenance/smokeDetector':
        case '/home/maintenance/electricArc':
        case '/home/maintenance/manholeCover':
        case '/home/maintenance/fireCock':
        case '/home/maintenance/geomagnetic':
        case '/home/maintenance/charger':
        case '/home/maintenance/fence':
        case '/home/maintenance/combustibleGas':
        case '/home/search/face':
        case '/home/search/car':
        case '/home/search/pass':
        case '/home/search/alarm':
        case '/home/search/device':
        case '/home/sensor/operation':
          this.panelShow = false
          break
        case '/home/maintenance/all':
        case '/home/rcservice':
          for (let i = 0; i < this.itemInfos.length; i++) {
            this.itemInfos[i].bg = true
            this.itemInfos[i].selected = true
          }
          this.panelShow = true
          break
        case '/home/sensor/face':
        case '/home/sensor/other':
        case '/home/sensor/pass':
        case '/home/sensor/fire':
        case '/home/sensor/car':
        case '/home/sensor/warning':
          for (let i = 0; i < this.itemInfos.length; i++) {
            let checked = false
            let type = this.getType(this.itemInfos[i].type)
            let deviceType = this.getModuleName(current)
            for (let j = 0; j < HtmlConfig.modelDevice[deviceType].length; j++) {
              if (type === HtmlConfig.modelDevice[deviceType][j]) {
                this.itemInfos[i].bg = true
                this.itemInfos[i].selected = true
                checked = true
                break
              }
            }
            if (!checked) {
              this.itemInfos[i].bg = false
              this.itemInfos[i].selected = false
            }
          }
          this.panelShow = true
          break
      }
    },
    getTypeName: function (type) {
      for (let i = 0; i < window.deviceTypeNames.length; i++) {
        if (window.deviceTypeNames[i].type.trim() === type) { return window.deviceTypeNames[i].typeName.trim() }
      }
    },
    getType: function (typeName) {
      for (let i = 0; i < window.deviceTypeNames.length; i++) {
        if (window.deviceTypeNames[i].typeName === typeName) { return window.deviceTypeNames[i].type.trim() }
      }
    },
    getRealtimeData: function (current) {
      let that = this
      this.$bus.off('/web/event/map/parkingLog')
      this.$bus.off('/web/event/map/faceLog')
      this.$bus.off('/map/locate/deviceID')
      this.$bus.off('/map/locate/peopleID')
      switch (current) {
        case '/home/sensor/car':
          this.$bus.on('/web/event/map/parkingLog', function (e) {
            let obj = JSON.parse(e)
            console.log(obj + '地图车辆点位popup')
            let currentVillage = JSON.parse(window.localStorage.getItem('currentVillageID')).villageID
            let id = currentVillage
            if (id === obj.villageID) {
              let passTime = that.formatDate(obj.passTime)
              showCar(obj.Longitude, obj.Latitude, passTime, obj.parkingName, obj.plateNo, obj.in_outType === 1 ? '驶进' : '驶出', obj.platePic)
              setTimeout(() => {
                closePopup()
              }, 5000)
            }
          })
          break
        case '/home/sensor/face':
          this.$bus.on('/web/event/map/faceLog', function (e) {
            let obj = JSON.parse(e)
            console.log(obj + '地图人脸点位popup')
            let currentVillage = JSON.parse(window.localStorage.getItem('currentVillageID')).villageID
            let id = currentVillage
            if (id === obj.villageID && obj.similarity > 0) {
              let passTime
              let lastPassTime
              obj.passTime === undefined ? passTime = '' : passTime = that.formatDate(obj.passTime)
              obj.lastPassTime === undefined ? lastPassTime = '' : lastPassTime = that.formatDate(obj.lastPassTime)
              let xCoor
              let yCoor
              if (obj.coordinate === '84') {
                xCoor = obj.Longitude
                yCoor = obj.Latitude
              } else {
                // 百度转84
                let xy = baiduToWGS84([
                  [obj.Longitude, obj.Latitude]
                ])
                xCoor = xy[0][0]
                yCoor = xy[0][1]
              }
              showStranger(xCoor, yCoor, obj.Location === undefined ? '' : obj.Location,
                obj.lastLocation === undefined ? '' : obj.lastLocation,
                passTime, lastPassTime, obj.similarity === null ? ' --' : (obj.similarity * 100), obj.faceUrl, obj.lastFaceUrl)
              setTimeout(() => {
                closePopup()
              }, 5000)
            }
          })
          break
      }

      this.$bus.on('/map/locate/peopleID', function (e) {
        that.showRealTimePeopleOnMap(e.isShowLayer, e.param)
      })
      this.$bus.on('/map/locate/deviceID', function (e) {
        let type
        if (e.param.deviceType != null) { type = e.param.deviceType.trim() }
        that.showRealTimeAlarmOnMap(that, null, e.isShowLayer, type, e.param.longitude, e.param.latitude)
      })
    },
    getDeviceInfos: function (deviceID) {
      console.log(deviceID)
    },
    // 缩放至报警点&闪烁
    showRealTimeAlarmOnMap: function (that, deviceID, isShowLayer, deviceType, longitude, latitude) {
      let currentVillage = JSON.parse(window.localStorage.getItem('currentVillageID')).villageID
      if (deviceID != null) {
        that.getDeviceInfos(deviceID).then(function (infos) {
          that.showLoc(currentVillage, deviceType, infos.longitude, infos.latitude, isShowLayer)
        })
      } else {
        that.showLoc(currentVillage, deviceType, longitude, latitude, isShowLayer)
      }
      if (isShowLayer) {
        for (let i = 0; i < that.itemInfos.length; i++) {
          if (that.itemInfos[i].type === that.getTypeName(deviceType)) {
            that.itemInfos[i].selected = true
          }
        }
      }
    },
    showLoc: function (currentVillage, deviceType, longitude, latitude, isShowLayer) {
      if (longitude == null || latitude == null) return
      if (longitude === 0 || latitude === 0) return
      if (deviceType === 'fence') {
        if (isShowLayer) {
          if (!showLayer(currentVillage + '_fence_point')) {
            getFence()
          }
        }
        setCenterAndZoom(longitude, latitude, mapParams.zooms[1] - 1)
        preBlinkingObj.push(startBlinkingObj(longitude, latitude, -20, -23))

        setTimeout(() => {
          if (preBlinkingObj.length > 0) {
            for (let i = 0; i < preBlinkingObj.length; i++) {
              stopBlinkingObj(preBlinkingObj[i])
            }
          }
        }, 6000)
      } else {
        if (isShowLayer) {
          showLayerAndLabel(currentVillage + '_' + deviceType, deviceType, true, true)
        }
        let xoffset = -20
        let yoffset = -44
        if (deviceType === 'camera_car' || deviceType === 'camera_face' || deviceType === 'smokeDetector') {
          yoffset = -40
          xoffset = -15
        }
        setCenterAndZoom(longitude, latitude, mapParams.zooms[1] - 1)
        preBlinkingObj.push(startBlinkingObj(longitude, latitude, xoffset, yoffset))

        setTimeout(() => {
          if (preBlinkingObj.length > 0) {
            for (let i = 0; i < preBlinkingObj.length; i++) {
              stopBlinkingObj(preBlinkingObj[i])
            }
          }
        }, 6000)
      }
    },
    showRealTimePeopleOnMap: function (isShowLayer, param) {
      if (isShowLayer) {
        setCenterAndZoom(param.longitude, param.latitude, mapParams.zooms[1] - 1)
        showLocation(param, 'security', 'security', false)
        preBlinkingPeo.push(startBlinkingObj(param.longitude, param.latitude, -20, -44))

        setTimeout(() => {
          if (preBlinkingPeo.length > 0) {
            for (let i = 0; i < preBlinkingPeo.length; i++) {
              stopBlinkingObj(preBlinkingPeo[i])
            }
            clearDataLayer('security')
          }
        }, 6000)
      }
    },
    formatDate: function (value) {
      let date = new Date(value)
      let MM = date.getMonth() + 1
      MM = MM < 10 ? ('0' + MM) : MM
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let m = date.getMinutes()
      m = m < 10 ? ('0' + m) : m
      let s = date.getSeconds()
      s = s < 10 ? ('0' + s) : s
      return MM + '-' + d + ' ' + h + ':' + m + ':' + s
    }
  },
  watch: {
    $route (newval, oldval) {
      this.clearTucen()
      if (newval.path == '/pjManagement') {
        this.posiRight = false
      } else {
        this.posiRight = true
      }
    }
  }
}
</script>
<style>
  #mapDiv .ant-select-selection--single {
  background: #205187!important;
  color: white;
  border: .02rem solid #03ace3;
  height: .5rem!important;
}
#mapDiv .ant-select-selection__rendered {
  margin: 0;
  line-height: .52rem;
}
#mapDiv .ant-select-dropdown-menu-item, #mapDiv .ant-input {
  padding: 0;
}
#mapDiv .ant-calendar-picker-clear {
  background: none;
  color: #03ace3
}
#mapDiv {
  text-align: left;
}
#mapDiv .ant-input {
  background: #205187!important;
  color: white;
  border: .02rem solid #03ace3;
  height: .5rem;
}

</style>
<style scoped lang='scss'>
#mapDiv {
  .buttons {
    position: absolute;
    right: .5rem;
    top: 1rem;
    cursor: pointer;
    z-index: 100;
    .buttons_act {
      width: .74rem;
      height: .74rem;
      margin-bottom: .54rem;
      position: relative;
      .tuli {
        width: 6.5rem;
        height: 4.1rem;
        padding: .5rem 0 0 .5rem;
        background-image: url('../assets/imgs/zhihuipaishui/pjmanage/squareBac.png');
        background-size: 100% 100%;
        position: absolute;
        right: 1.04rem;
        top: 0;
        .title {
          display: flex;
          span {
            display: inline-block;
            width: .02rem;
            height: .38rem;
            background: white;
            margin-right: .05rem;
            margin-top: .07rem;
          }
          .mapDiv_sel {
            margin-left: .3rem;
          }
        }
        .content {
          display: flex;
          width: 5.78rem;
          justify-content: space-between;
          margin-top: .2rem;
          height: .5rem;
          div {
            width: 25%;
            text-align: center;
            height: .5rem;
          }
        }
      }
      .chaxun {
        width: 6.5rem;
        height: 4.1rem;
        padding: .5rem 0 0 .5rem;
        background-image: url('../assets/imgs/zhihuipaishui/pjmanage/squareBac.png');
        background-size: 100% 100%;
        position: absolute;
        right: 1.04rem;
        top: 0;
        .title {
          display: flex;
          span {
            display: inline-block;
            width: .02rem;
            height: .38rem;
            background: white;
            margin-right: .05rem;
            margin-top: .07rem;
          }
          .mapDiv_sel {
            margin-left: .3rem;
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.toShow {
  width: 100px;
  height: 100px;
  /*background: red;*/
  position: absolute;
  left: 20%;
  top: 5%;
  opacity: 0;
  z-index: 3;
  animation: toRightCenter 2s;
}
.toHide {
  width: 100px;
  height: 100px;
  /*background: red;*/
  position: absolute;
  left: 20%;
  top: 5%;
  opacity: 0;
  z-index: 3;
  animation: toLeftUp 2s;
}
@keyframes toLeftUp {
  0% {
    transform: scale(1.1);
    left: 48%;
    top: 50%;
    opacity: 1;
  }
  20% {
    transform: scale(1.05);
    left: 45%;
    top: 40%;
    opacity: 0.8;
  }
  100% {
    transform: scale(0);
    left: 20%;
    top: 5%;
    opacity: 0;
  }
}
@keyframes toRightCenter {
  0% {
    transform: scale(0);
    left: 20%;
    top: 5%;
    opacity: 0;
  }
  100% {
    transform: scale(1);
    left: 48%;
    top: 50%;
    opacity: 1;
  }
}
.container {
  height: 100%;
  width: 100%;
}
p {
  width: 1.2rem;
  text-align: center;
  line-height: 1.2rem;
  height: 1.2rem;
  font-weight: normal;
  /*border-left: 1px solid #1d4d94;*/
  display: inline-block;
  position: absolute;
}
p span {
  width: 0.9rem;
  text-align: center;
  margin-top: 0.25rem;
  height: 0.9rem;
  font-weight: normal;
  border-radius: 50%;
  display: inline-block;
}
p.pClose {
  right: 1rem;
  top: 0.4rem;
  cursor: pointer;
  z-index: 2;
  line-height: 1.1rem;
}
p.pClose span img {
  width: 0.4rem;
  height: 0.4rem;
  text-align: center;
}
p.pClose span {
  /*background: rgba(255, 8, 8, 0.76);*/
  background: #1893ff;
}
p.pClose:hover span {
  /*background: rgba(255, 8, 8, 0.76);*/
  background: #5564ff;
}

</style>
