<template>
    <div class="mapSearch">
        <input @click.stop="stopstop" v-model="content" type="text">
        <div v-if="clearShow" @click.stop="clear" class="clear"/>
        <div class="search" @click.stop="search">
            <img :src="searchPic" alt="">
        </div>
        <div v-if="contentShow" class="content">
            <div @click.stop="chooseItem(item)" v-for="(item, index) in keyData" :key="index">
                <img :src="searchPic" alt="">
                <span>{{ item.name }}&nbsp;&nbsp;&nbsp;{{ item.description }}</span>
            </div>
            <span v-if="noData" style="position: absolute;top: 2rem;left: 2.5rem;">暂无数据</span>
        </div>
    </div>
</template>

<script>
  import { MapClass, MapOverLayer, MapType, MapExtent, MapLineType, CoorSystem, MapPointStyle } from '../../Maps/mapClass'

  import {  showLayer, showCar, closePopup, showStranger, baiduToWGS84, hideLayer, getLyrFullName, getLyrByName,
    // eslint-disable-next-line
    getMapZoom, stopBlinkingObj, clearDataLayer, clearPointLayer, addPointsLayerScale, setCenterAndZoom} from '../../Maps/mapApi.js'
  //掉接口
  import { apiNames, HtmlConfig } from '../../Utils/config'
  export default {
    name: 'mapSearch',
    props: {
      param: {
        type: Object,
        default: () => {
          return {}
        },
      },
    },
    data() {
      return {
        contentShow: false,
        searchPic: require('../../assets/imgs/maps/mapsearch.png'),
        clearShow: false,
        content: '',
        name: '菊儿1小区',
        timer: null,
        noData: false,
        keyData: [],
      }
    },
    watch: {
      content(newValue, oldValue) {
        if (newValue.length !== 0) {
          this.clearShow = true
        } else {
          this.clearShow = false
        }
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.content) {
          return
        }
        this.contentShow = true
        this.timer = setTimeout(() => {
          //  qingqiujiekou
          this.searchMap()
        }, 100)
      }
    },
    methods: {
      searchMap () {
        let param = {
          virtualSpaceCodes: this.$store.state.virtualSpaceCodes,
          keyWord: this.content,
          size: 10
        }
        this.$post(apiNames['地图搜索'],param).then(res=> {
          if (res.responseStatus.resultCode === 0 && res.data.length !== 0) {
            this.keyData = res.data
            this.noData = false
          } else {
            this.keyData = []
            this.noData = true
          }
        }).catch(err => {
          this.keyData = []
          this.noData = true
        })
      },
      stopstop () {
        console.log('//')
      },
      clear () {
        this.clearShow = false
        this.content = ''
      },
      search () {
        // 对搜索到的第一条进行操作
        let one = this.keyData[0]
        this.chooseItem(one)
      },
      // 添加放大点位的icon
      scaleIcon (item) {
        let iconWidth = HtmlConfig.mapIconParams.width
        let iconHeight = HtmlConfig.mapIconParams.height
        let isClickable = true
        let isLabel = true
        if (item.usingType === 1 || item.usingType === 11 || item.usingType === 12) {
          if (item.usingType === 1) {
            item.type = 'position'
            this.$bus.emit('startInterval', 1)
          } else if (item.usingType === 11) {
            item.type = 'face'
          } else if (item.usingType === 12) {
            item.type = 'car'
          }
          addPointsLayerScale(item.type, item.type, [item],
            new MapPointStyle(iconWidth, iconHeight, HtmlConfig.mapIconParams.styles, -10, -34, 0), isLabel,
            HtmlConfig.mapIconParams.extension, isClickable)
          setCenterAndZoom(item.longitude, item.latitude, 17.5)
        } else if (item.usingType === 6) {
          this.getDeviceType(item.code, item)
        }
      },
      getDeviceType (thingCode, item) {
        this.$get(apiNames['获取设备详情']+thingCode).then(res=> {
          if (res.responseStatus.resultCode === 0) {
            let deviceType = res.data.type
            let iconWidth = HtmlConfig.mapIconParams.width
            let iconHeight = HtmlConfig.mapIconParams.height
            let isClickable = true
            let isLabel = true
            addPointsLayerScale(deviceType, deviceType, [item],
              new MapPointStyle(iconWidth, iconHeight, HtmlConfig.mapIconParams.styles, -10, -34, 0), isLabel,
              HtmlConfig.mapIconParams.extension, isClickable)
            setCenterAndZoom(item.longitude, item.latitude, 17.5)
          } else {
            this.$newthost({
              content: res.data.name
            })
          }
        })
        return deviceType
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
      chooseItem (item) {
        console.log(item)
        if (item.source === 'vs' && item.usingType === 1) {
          // 查找小区
          this.toBourdy(item)
        } else if (item.source === 'vsr' && item.usingType === 6) {
          // 查找设备
          this.scaleIcon(item)
        } else {
          // 查找点位
          this.scaleIcon(item)
        }
        window.pop.close(this.param.level)
      }
    },
    created () {
      this.$bus.off('close')
      this.$bus.on('close', () => {
        window.pop.close(this.param.level)
      })
    }
  }
</script>

<style scoped lang="scss">
.mapSearch {
    width: 6.4rem;
    height: .8rem;
    background: linear-gradient(320deg, #080c18 0%, #011f41 100%);
    box-shadow: 0px 0px 0.12rem 0.12rem rgba(74, 144, 226, 0.35);
    border: 1px solid;
    border-image: linear-gradient(
            139deg,
            rgba(83, 140, 206, 1),
            rgba(5, 77, 125, 1)
    )
    1 1;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    input {
        width: 100%;
        height: 100%;
        background: none;
        color: white;
        border: none;
    }
    .clear {
        height: .8rem;
        width: .8rem;
        background-image: url("../../assets/imgs/clear.png");
        background-size: 50% 50%;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
    }
    .search {
        height: .8rem;
        width: .8rem;
        background: #007aff;
        position: absolute;
        right: -.8rem;
        top: 0;
        cursor: pointer;
        img {
            width: 70%;
            height: 70%;
            margin: 15% 0 0 12%
        }
    }
    .content {
        width: 6.4rem;
        height: 5rem;
        background: linear-gradient(320deg, #080c18 0%, #011f41 100%);
        position: absolute;
        left: 0;
        top: .85rem;
        overflow-y: scroll;
        div:hover {
            background: #2c4090;
        }
        div {
            width: 100%;
            height: .8rem;
            line-height: .8rem;
            text-align: left;
            cursor: pointer;
            img {
                width: .4rem;
                height: .4rem;
                vertical-align: middle;
                margin-left: .2rem;
            }
            span {
                margin-left: .2rem;
            }
        }
    }
}
</style>