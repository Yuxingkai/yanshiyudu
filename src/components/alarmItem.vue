<template>
  <div class='alarmItem_' :class="{hasborder:hasborder}">
    <div class="alarmItem_pic">
      <span class="camera" v-if="item.faceUrl">
         <img
             class="people-pic"
                  :src="item.faceUrl"
                >
      </span>
      <span class="camera" v-else>
       <!-- <div :class="{people: true}"></div> -->
       <div class="tip">
         <img src="../assets/imgs/common/noimg.png" alt="">
       </div>
      </span>
    </div>
    <div class="alarmItem_info" v-if="type == 'people'">
      <div style="height:0.6rem">
        <span class="alarmItem_info_name">{{item.peopleName}}</span>
        <span class="alarmItem_info_belong">{{item.tags}}</span>
      </div>
      <div style="display:flex;height:0.5rem;padding-top: 0.24rem;">
        <span class="alarmItem_info_address">{{item.address}}</span>
        <span class="alarmItem_info_staus" style="flex:1;padding-right: 0.24rem;" 
        :style="{'color': item.state == '未处理' ? '#FF9999': (item.state == '已处理' ? '#00F9FC' : '#F8E71C')}">{{item.state}}</span>
        <span v-if="type == 2" class="alarmItem_info_staus" style="flex:1;padding-right: 0.24rem;color:'#FFD99A'">
         <span></span>{{typeCode[item.openType]}}</span>
      </div>
      <div style="display:flex;height:0.6rem">
        <span class="alarmItem_info_laber">{{item.description}}</span>
        <span v-if="compareDate(item.alarmTime)=='今日' || compareDate(item.alarmTime) =='昨日'" class="prewarnItem_info_time" style="flex:1;text-align: right;">
          <span style="margin-right:0.12rem">{{compareDate(item.alarmTime)}}</span>
          {{ formatDate(item.alarmTime,'HH:mm:ss')}}  
        </span>
        <span v-else class="alarmItem_info_time" style="flex:1;text-align: right;padding-right: 0.24rem;">
          {{ item.alarmTime }}     
        </span>
      </div>
    </div>
    <div class="alarmItem_info" v-if="type == 'device'">
      <div style="height:0.6rem">
        <span class="alarmItem_info_name">{{item.title}}</span>
        <span class="alarmItem_info_belong">{{item.tags}}</span>
      </div>
      <div style="display:flex;height:0.5rem;padding-top: 0.24rem;">
        <span class="alarmItem_info_address">{{item.address}}</span>
        <span class="alarmItem_info_staus" style="flex:1;padding-right: 0.24rem;" 
        :style="{'color': item.state == '未处理' ? '#FF9999': (item.state == '已处理' ? '#00F9FC' : '#F8E71C')}">{{item.state}}</span>
        <span v-if="type == 2" class="alarmItem_info_staus" style="flex:1;padding-right: 0.24rem;color:'#FFD99A'">
         <span></span>{{typeCode[item.openType]}}</span>
      </div>
      <div style="display:flex;height:0.6rem">
        <span class="alarmItem_info_laber">{{item.description}}</span>
        <span v-if="compareDate(item.alarmTime)=='今日' || compareDate(item.alarmTime) =='昨日'" class="prewarnItem_info_time" style="flex:1;text-align: right;">
          <span style="margin-right:0.12rem">{{compareDate(item.alarmTime)}}</span>
          {{ formatDate(item.alarmTime,'HH:mm:ss')}}  
        </span>
        <span v-else class="alarmItem_info_time" style="flex:1;text-align: right;padding-right: 0.24rem;">
          {{ item.alarmTime }}     
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import { compareDate} from '../Utils/Com.js'
export default {
  name: "alarmItem",
  props: {
    item: {
      default: function() {
        return {
          a : '未处理',
          b : '手机NFC开门',
        }
      },
      type: Object
    },
    type: {
      default: 'device',//fire,people,vehicle
      type: String
    },
    hasborder: {
      default: false,//
      type: Boolean
    },
  },
  data() {
    return{
      typeCode:JSON.parse(window.localStorage.getItem('opendoorType')) || {},//码表
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
.hasborder {
  border: 1px solid rgba(201, 231, 255, 0.2);
}
.alarmItem_{
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 0.38rem;
  box-sizing: border-box;
  padding: 0.08rem;
  text-align: center;
  // border: 1px solid rgba(201, 231, 255, 0.2);
  cursor: pointer;
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
        // .device {
        //   width:  1.38rem;
        //   height:  1.84rem;
        //   background: url("../assets/imgs/photoDefault.png");
        //   background-size: 100% 100%;       
        // }
    }
  }
  &info{
    flex: 1;
    text-align: left;
    .alarmItem_info_name{     
      // margin: 0.24rem  0.54rem 0.24rem 0;
      padding-top: 0.24rem;
      margin-right: 0.54rem;
      display: inline-block;
      font-family: "HY75";
      color: #C9E7FF;
    }
    .alarmItem_info_belong{
      color: #C9E7FF;
      font-size: 0.28rem;
      font-family: "HY65";
    }
    .alarmItem_info_address {
      font-family: "HY55";
      font-size: 0.28rem;
      color: #C9E7FF;
      opacity:0.7;
    }

    .alarmItem_info_laber{
      font-family: "HY55";
      font-size: 0.28rem;
      color: #C9E7FF;
      opacity:0.6;
      width: 1.8rem;
      overflow: hidden;
      text-overflow: ellipsis; //超出部分以省略号显示
      white-space: nowrap;
    }
    .alarmItem_info_staus{
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
    .alarmItem_info_time{
      font-family: "HY55";
      font-size: 0.28rem;
      color: #C9E7FF;
      padding-right: 0.24rem;
      width: 2.4rem;

    } 
    .prewarnItem_info_time{
      font-family: "HY55";
      font-size: 0.28rem;
      color: #C9E7FF;
      padding-right: 0.24rem;
      width: 2.4rem;

    } 
  }
}
</style>
