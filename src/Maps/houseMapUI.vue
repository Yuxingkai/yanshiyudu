<template>
  <div id="houseMapDiv" class="container">
  </div>
</template>

<script>
  import remoteLoad from './remoteLoad.js'
  import {mapCenterPoint} from '../Utils/config.js'
   import {clearDataLayer}  from '../Maps/mapApi.js'
  export default {
    data () {
      return {
        globalMap: null,
        polyline: '',
      }
    },
    destroyed: function () {
    },
    mounted: function () {

    },
    created () {
      this.init()
    },
    methods: {
      init () {
        remoteLoad('http://webapi.amap.com/maps?v=1.4.7&key=c0dd08f714daa79c862a8cee1dddbb39').then(() => {
          // 创建地图
          let map = new window.AMap.Map('houseMapDiv', {
            zooms: [10, 20],
            resizeEnable: true,
            rotateEnable:true,
            pitchEnable:false,
            zoom: 17.5,
            // center: [116.40317,39.937734],
            center: mapCenterPoint,
            mapStyle: 'amap://styles/a0bdd61825a6b35495f33926b7206839',
            pitch:30,
            viewMode:'3D',//开启3D视图,默认为关闭
            expandZoomRange:true,
          })
          console.log(map)
          this.globalMap = map
          this.$bus.off('drawLine')
          this.$bus.on('drawLine',(lineArr) => {
            console.log(lineArr)
            //去掉之前绘制的
            this.globalMap.remove(this.polyline);
            // clearDataLayer('polyline');
            this.drawLine(lineArr)
            // this.drawLine([[116.3984554619,39.9383997581],[116.3986554619,39.9386997581]])//测试
          })
          map.setFitView();
        })
      },
      // 画线
      drawLine (lineArr) {
        var polyline = new window.AMap.Polyline({
          map: this.globalMap,
          path: lineArr,
          showDir:true,
          strokeColor: "#50E3C2",  //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 6,      //线宽
          strokeStyle: "dashed"  //线样式
        });
        this.polyline = polyline
      }
    },
    watch: {
    }
  }
</script>

<style scoped>
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
