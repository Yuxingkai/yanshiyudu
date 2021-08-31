<template>
  <div class='prewarnItem_'>
    <div class="prewarnItem_pic">
      <span class="left_box" >
         <span :class='item.alarmType'></span>
         <!-- <span class='house'> </span> -->
      </span>
    </div>
    <div class="prewarnItem_info">
      <div style="height:0.6rem">
        <span class="prewarnItem_info_name">{{item.virtualSpaceName}}</span>
        <!-- <span class="prewarnItem_info_belong">{{item.labelNames}}</span> -->
      </div>
      <div style="display:flex;height:0.5rem;padding-top: 0.24rem;">
        <span class="prewarnItem_info_address">{{item.address}}</span>
        <span v-if="type == 1" class="prewarnItem_info_staus" style="flex:1;padding-right: 0.24rem;" 
        :style="{'color': item.a == '未处理' ? '#FF9999': (item.a == '已处理' ? '#00F9FC' : '#F8E71C')}">{{item.a}}</span>
        <span v-if="type == 2" class="prewarnItem_info_staus" style="flex:1;padding-right: 0.24rem;color:'#FFD99A'">
         <span></span>{{item.address}}</span>
      </div>
      <div style="display:flex;height:0.6rem">
        <!-- <el-tooltip class="item" effect="dark" placement="bottom">
           <span class="prewarnItem_info_laber" slot="content">{{item.alarmTypeName}}</span>
           <span class="prewarnItem_info_laber">{{item.alarmTypeName}}</span>
        </el-tooltip> -->
        <span class="prewarnItem_info_laber">{{item.alarmTypeName}}</span>
        <span v-if="compareDate(item.alarmTime)=='今日' || compareDate(item.alarmTime) =='昨日'" class="prewarnItem_info_time" style="flex:1;text-align: right;padding-right: 0.24rem;">
          <span style="margin-right:0.12rem">{{compareDate(item.alarmTime)}}</span>
          {{ formatDate(item.alarmTime,'HH:mm:ss')}}  
        </span>
        <span v-else class="prewarnItem_info_time" style="flex:1;text-align: right;padding-right: 0.24rem;">
          {{ item.alarmTime }}     
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import { compareDate} from '../Utils/Com.js'
export default {
  name: "detailItem",
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
      default: '2',//
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
    }
      .ysqz_lxtx {
              width: 0.9rem;
              height: 0.9rem;
              display: inline-block;
              background: url("../../assets/imgs/realhouse/houseQun.png");
              background-size: 100% 100%;
        }
        .doorOpen {
              width: 0.9rem;
              height: 0.9rem;
              display: inline-block;
              background: url("../../assets/imgs/realhouse/doorUnlock.png");
              background-size: 100% 100%;
        }
        .yskz_lxtx {
              width: 0.9rem;
              height: 0.9rem;
              display: inline-block;
              background: url("../../assets/imgs/realhouse/houseEmpty.png");
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
      width: 2.6rem;
      overflow: hidden;
      text-overflow: ellipsis; //超出部分以省略号显示
      white-space: nowrap;
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
