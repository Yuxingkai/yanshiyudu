<template>
  <div class='prewarnItem_'>
    <div class="prewarnItem_pic">
      <span class="camera" v-if="item&&item.minPlatePic">
         <img
             class="people-pic"
                  :src="item.minPlatePic"
                >
      </span>
       <span class="camera" v-else>
       <!-- <div :class="{people: true}"></div> -->
       <div class="tip">
         <img src="../assets/imgs/common/noimg.png" alt="">
       </div>
      </span>     
    </div>
    <div class="prewarnItem_info">
      <div style="height:0.6rem">
        <span class="prewarnItem_info_name" :class="'plateColor'+item.plateColor">{{item.plateNo}}</span>
        <span class="prewarnItem_info_belong">{{item.inOutType==1?'进':'出'}}</span>
      </div>
      <div style="display:flex;height:0.5rem;padding-top: 0.24rem;">
        <span class="prewarnItem_info_address">{{item.address}}</span>
        <span class="prewarnItem_info_staus" style="flex:1;padding-right: 0.24rem;" 
        :style="{'color': item.a == '未处理' ? '#FF9999': (item.a == '已处理' ? '#00F9FC' : '#F8E71C')}">{{item.state}}</span>
      </div>
      <div style="display:flex;height:0.6rem">
        <span class="prewarnItem_info_laber">{{item.peopleName?item.peopleName:'陌生人'}}</span>
        <span v-if="compareDate(item.captureTime)=='今日' || compareDate(item.captureTime) =='昨日'" class="prewarnItem_info_time" style="flex:1;text-align: right;padding-right: 0.24rem;">
          <span style="margin-right:0.12rem">{{compareDate(item.captureTime)}}</span>
          {{ formatDate(item.captureTime,'HH:mm:ss')}}  
        </span>
        <span v-else class="prewarnItem_info_time" style="flex:1;text-align: right;padding-right: 0.24rem;">
          {{ item.captureTime }}     
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
      default: '2',//
      type: String
    },
  },
  data() {
    return{
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
    .camera {
        width: 100%;
        height: 100%;
        display: inline-block;
        // margin-right: 0.22rem;
        // margin-top: 0.48rem;
        // background: url("../assets/imgs/common/camera.png");
        // background-size: 100% 100%;
        .people-pic{
          width:  1.38rem;
          height:  1.84rem;
        }
        .tip {
          width:  1.38rem;
          height:  1.84rem;
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
  }
  &info{
    flex: 1;
    text-align: left;
    .prewarnItem_info_name{     
      // margin: 0.24rem  0.54rem 0.24rem 0;
      padding-top: 0.14rem;
      margin-right: 0.54rem;
      display: inline-block;
      font-family: "HY75";
      color: #C9E7FF;
    }
      .plateColor1 {
        background-color: blue;
      }
      .plateColor2 {
        background-color: yellow;
      }
      .plateColor3 {
        background-color: white;
      }
      .plateColor4 {
        background-color: black;
      }
      .plateColor5 {
        background-color: green;
      }
      .plateColor5 {
        background-color: greenyellow;
      }
      .plateColor99 {
        background-color: gray;
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
