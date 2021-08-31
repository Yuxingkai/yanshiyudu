<template>
  <div class='prewarnItem_'>
    <div class="prewarnItem_pic">
      <span class="left_box" >
         <span :class='item.deviceType' v-if="item.deviceType"> </span>
        <span class="tip" v-else>
          <img src="../assets/imgs/common/noimg.png" >
        </span>
      </span>
    </div>
    <div class="prewarnItem_info">
      <div style="height:0.6rem">
        <span class="prewarnItem_info_name">{{item.deviceTypeName + item.opsTypeName}}</span>
        <span class="prewarnItem_info_belong">{{item.tags}}</span>
      </div>
      <div style="display:flex;height:0.5rem;padding-top: 0.24rem;">
        <span class="prewarnItem_info_address">{{item.installAddr}}</span>
        <span v-if="type == 1" class="prewarnItem_info_staus" style="flex:1;padding-right: 0.24rem;" 
        :style="{'color': item.a == '未处理' ? '#FF9999': (item.a == '已处理' ? '#00F9FC' : '#F8E71C')}">{{item.state}}</span>
        <span v-if="type == 2" class="prewarnItem_info_staus" style="flex:1;padding-right: 0.24rem;color:'#FFD99A'">
         <span></span>{{item.opsTypeName}}</span>
      </div>
      <div style="display:flex;height:0.6rem">
        <span class="prewarnItem_info_laber">{{item.virtualSpaceName}}</span>
        <span v-if="compareDate(item.opsTime)=='今日' || compareDate(item.opsTime) =='昨日'" class="prewarnItem_info_time" style="flex:1;text-align: right;padding-right: 0.24rem;">
          <span style="margin-right:0.12rem">{{compareDate(item.opsTime)}}</span>
          {{ formatDate(item.opsTime,'HH:mm:ss')}}  
        </span>
        <span v-else class="prewarnItem_info_time" style="flex:1;text-align: right;padding-right: 0.24rem;">
          {{ item.opsTime }}     
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import { compareDate} from '../Utils/Com.js'
export default {
  name: "prewarnItem",
  props: {
    item: {
      default: function() {
        return {}
      },
      type: Object
    },
    type: {
      default: '1',//
      type: String
    },
  },
  data() {
    return{
      typeCode: JSON.parse(window.localStorage.getItem('opendoorType')) || {},//码表
    }
  },
  methods: {
   formatDate(date, fmt){
      date = new Date(date);
      if (typeof (fmt) === "undefined") {
      fmt = "yyyy-MM-dd HH:mm:ss";
      }
      if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      let o = {
      'Y': date.getFullYear(),
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
      }
      for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length));
      }
      }
      return fmt
    },
    compareDate(timestamp){
        let t = +new Date() - new Date(timestamp) 
        // console.log(+new Date())
        // console.log(+new Date(timestamp))
        // console.log(t)
        if (t <  3600*24*1000){
          return '今日'
        }
        else if (
          t < 3600*24*1000*2
        ){
          return '昨日'
        }
    }

  },
};
</script>

<style scoped lang="scss">
.prewarnItem_{
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 0.38rem;
  box-sizing: border-box;
  text-align: center;
  &pic{
    width: 1.38rem;
    height: 1.84rem;
    margin-right: 0.38rem;
    border: 1px solid rgba(201, 231, 255, 0.2);
    .left_box {
        width: 100%;
        height: 100%;
        display: inline-block;
        display: flex;
        justify-content: center;
        align-items: center;
        // margin-right: 0.22rem;
        // margin-top: 0.48rem;
        // background: url("../assets/imgs/common/camera.png");
        // background-size: 100% 100%;
        .people-pic{
          // width:  1.38rem;
          // height:  1.84rem;
        }
        .tip {
          display: inline-block;
          width:  100%;
          height:  100%;
          // text-align: center;
          // line-height:  1.84rem;
          // padding-top: 0.2rem;
          color: #C9E7FF;
          font-size: 0.28rem;
          font-family: "HY65";
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 0.88rem;
            height: 0.88rem;
          }
        }
    }
      .access {
              width: 0.9rem;
              height: 0.9rem;
              display: inline-block;
              background: url("../assets/imgs/realEquip/door_access.png");
              background-size: 100% 100%;
        }
        .camera {
               width: 0.9rem;
              height: 0.9rem;
              display: inline-block;
              background: url("../assets/imgs/realEquip/catch_camera.png");
              background-size: 100% 100%;         
        }
        .smokeDetector {
              width: 0.9rem;
              height: 0.9rem;
              display: inline-block;
              background: url("../assets/imgs/maps/color/online/smokeDetector.png");
              background-size: 100% 100%;   
             }
            .waterPressureSensor {
              width: 0.9rem;
              height: 0.9rem;
              display: inline-block;
              background: url("../assets/imgs/maps/color/online/waterPressureSensor.png");
              background-size: 100% 100%;   
             }
             .smartSeat{
              width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              background: url("../assets/imgs/maps/color/online/smartSeat.png");
              background-size: 100% 100%;                 
             }
             .smartlamp{
              width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              background: url("../assets/imgs/maps/color/online/smartlamp.png");
              background-size: 100% 100%;    
             }
             .manholeCover{
              width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              background: url("../assets/imgs/maps/color/online/manholeCover.png");
              background-size: 100% 100%;                 
             }
             .groundLock{
              width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              background: url("../assets/imgs/maps/color/online/groundlock.png");
              background-size: 100% 100%;   
             }
             .geomagnetic{
              width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              background: url("../assets/imgs/maps/color/online/geomagnetic.png");
              background-size: 100% 100%; 
             }
             .fireCock{
               width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              background: url("../assets/imgs/maps/color/online/fireCock.png");
              background-size: 100% 100%;                 
             }
             .electricArc{
               width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              background: url("../assets/imgs/maps/color/online/electricArc.png");
              background-size: 100% 100%; 
             }
             .charger{
                width: 0.36rem;
              height: 0.36rem;
              display: inline-block;
              background: url("../assets/imgs/maps/color/online/charger.png");
              background-size: 100% 100%;                
             }
  }
  &info{
    flex: 1;
    text-align: left;
    .prewarnItem_info_name{     
      // margin: 0.24rem  0.54rem 0.24rem 0;
      padding-top: 0.24rem;
      margin-right: 0.54rem;
      display: inline-block;
      font-family: "HY75";
      color: #C9E7FF;
    }
    .prewarnItem_info_belong{
      color: #C9E7FF;
      font-size: 0.28rem;
      font-family: "HY65";
    }
    .prewarnItem_info_address {
      font-family: "HY55";
      font-size: 0.28rem;
      color: #C9E7FF;
      opacity:0.7;
    }

    .prewarnItem_info_laber{
      font-family: "HY55";
      font-size: 0.28rem;
      color: #C9E7FF;
      opacity:0.6;
    }
    .prewarnItem_info_staus{
      font-family: "HY65";
      font-size: 0.28rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      // .logoFace {
      //   width: 0.32rem;
      //   height: 0.32rem;
      //   display: inline-block;
      //   background: url("../assets/imgs/realpeople/face.png");
      //   background-size: 100% 100%;
      //   margin-right: 0.02rem;
      // }
      // .logoCard {
      //   width: 0.32rem;
      //   height: 0.32rem;
      //   display: inline-block;
      //   background: url("../assets/imgs/realpeople/card.png");
      //   background-size: 100% 100%;
      //   margin-right: 0.02rem;
      // }
      // .logoNfc {
      //   width: 0.32rem;
      //   height: 0.32rem;
      //   display: inline-block;
      //   background: url("../assets/imgs/realpeople/nfc.png");
      //   background-size: 100% 100%;
      //   margin-right: 0.02rem;
      // }
    }
    .prewarnItem_info_time{
      font-family: "HY55";
      font-size: 0.28rem;
      color: #C9E7FF;
    } 
  }
}
</style>
