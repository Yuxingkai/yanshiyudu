<template>
  <div class="peopleAlarmDialog" v-if="dialogVisible">
    <div class="alarm_title">
      <div class="text">{{allData.alarmTypeName}} <span class="lable">{{allData.state}}</span></div>   
      <div class="quitBtn" @click="doClose">X</div>
    </div>
    <div class="alarm_content" v-if='type == "people"'>
      <div class="alarm_content_add">
        <div class="alarm_content_left">
          <div class="alarm_content_left_info">
            <div class="alarm_content_left_info_detail">
              <div class="info_detail_left">报警类型: </div>
              <div class="info_detail_right">通行报警</div>
            </div>
            <div class="alarm_content_left_info_detail">
              <div class="info_detail_left">人员姓名: </div>
              <div class="info_detail_right">张冰冰</div>
            </div>
            <div class="alarm_content_left_info_detail">
              <div class="info_detail_left">报警时间: </div>
              <div class="info_detail_right">2020.01.26 13：11:23</div>
            </div>
            <div class="alarm_content_left_info_detail">
              <div class="info_detail_left">最近通行时间: </div>
              <div class="info_detail_right">2020.01.26 13：11:23</div>
            </div>
            <div class="alarm_content_left_info_detail">
              <div class="info_detail_left">居住地址: </div>
              <div class="info_detail_right">田林十二村23号2020室</div>
            </div>
          </div>
          <div class="alarm_content_left_btn">
            <div class="video">查看视频</div>
            <div class="img">查看图片</div>
          </div>
        </div>
        <div class="alarm_content_right">
          <peopleInfoItem />
        </div>
        <div class="alarm_content_process">
          <div class="process_line">
              <div class="title_1">
                <span>01</span>
                <span>发现</span>
              </div>
              <div class="aim_1 process_on"></div>
              <div class="title_2">
                <span>02</span>
                <span>立案</span>
              </div>
              <div class="aim_2"></div>
              <div class="title_3">
                <span>03</span>
                <span>派单</span>
              </div>
              <div class="aim_3"></div>
              <div class="title_4">
                <span>04</span>
                <span>接单</span>
              </div>
              <div class="aim_4"></div>
              <div class="title_5">
                <span>05</span>
                <span>处置</span>
              </div>
              <div class="aim_5 process_on"></div>
              <div class="title_6">
                <span>06</span>
                <span>结案</span>
              </div>
              <div class="aim_6"></div>
          </div>
          <div class="process_box">
            <div class="process_box_find">
              <div>发现时间: <span>2020.03.23 12:23:56</span></div>
              <div>案件类型: 通行报错</div>
              <div>发现地点: 田林十二村23号楼一单元</div>
            </div>
            <div class="process_box_add">
              <div>立案时间: <span>2020.03.23 12:23:56</span></div>
              <div>立案单位：街道中心</div>
              <div>排单类型：自动立案</div>           
              <div>立案备注: 同意立案，并提交派单。</div>           
            </div>
            <div class="process_box_assign">
              <div>立案时间: <span>2020.03.23 12:23:56</span></div>
              <div>排单主体：街道中心</div>
              <div>排单类型：自动排单</div>  
            </div>
          </div>
          <div class="process_line process_line_second"></div>
          <div class="process_box">
            <div class="process_box_accept">
              <div>发现时间: <span>2020.03.23 12:23:56</span></div>
              <div>接单主体：街道中心</div>
              <div>接单人员：张大大</div>
              <div>接单备注：已接收，已派下发处理。</div>
            </div>
            <div class="process_box_deal">
              <div>立案时间: <span>2020.03.23 12:23:56</span></div>
              <div>完成时间: <span>2020.03.23 12:23:56</span></div>
              <div>处置主体：街道中心</div>
              <div>处置人员：张大大</div>           
              <div>处置意见：已接收，已派下发处理。</div>           
            </div>
            <div class="process_box_end">
              <div>立案时间: <span>2020.03.23 12:23:56</span></div>
              <div>结案主体：街道中心</div>
              <div>结案意见：同意结案</div>  
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="alarm_content_device" v-if='type == "device"'>
      <div class="basicInfo">
        <div class="basicInfo_title">报警详情</div>
        <div class="basicInfo_detail">
          <div class="basicInfo_detail_box">
            <div class="basicInfo_detail_item">
              <span>报警位置：</span>
              <span>{{allData.address}}</span>
            </div>
            <div class="basicInfo_detail_item">
              <span>报警时间：</span>
              <span>{{allData.alarmTime}}</span>
            </div>
              <div class="basicInfo_detail_item">
              <span>报警详情：</span>
              <span>请确认</span>
            </div>
          </div>
          <div class="basicInfo_detail_item">
            <span>报警类型：</span>
            <span>{{allData.alarmTypeName}}</span>
          </div>
        </div>
      </div>
      <div class="basicInfo">
        <div class="basicInfo_title">设备详情</div>
        <div class="basicInfo_detail">
            <div class="basicInfo_detail_box">
              <div class="basicInfo_detail_item">
                <span>设备名称：</span>
                <span>{{deviceInfo&&deviceInfo.name}}</span>
              </div>
              <div class="basicInfo_detail_item">
                <span>设备厂家：</span>
                <span>{{deviceInfo&&deviceInfo.productBrand}}</span>
              </div>
                <div class="basicInfo_detail_item">
                <span>安装位置：</span>
                <span>{{deviceInfo&&deviceInfo.installAddr}}</span>
              </div>
            </div>
            <div class="basicInfo_detail_item">
              <span>报警详情：</span>
              <span>未知</span>
            </div>
        </div>
      </div>
      <div class="basicInfo">
        <div class="basicInfo_title">责任人信息</div>
        <div class="basicInfo_list">
            <div class="processUserInfo">
              <div class="user">责任人</div>
              <div class="tel">手机号码</div>
              <div class="status">报警状态</div>
              <div class="alert">催办</div>
            </div>
            <div class="info_box">
              <div class="processUserInfo" v-for="(v,i) in processUserInfo" :key="i">
                <div class="user">{{v.userName}}</div>
                <div class="tel">{{v.phoneNo}}</div>
                <div class="status"></div>
                <div class="alert"></div>
              </div>
            </div>
            <div class="process">
              <div class="process_item" v-for="(item,index) in alarmHistoryContent" :key="index">
                <div class="name">
                  {{item.processName}}
                  <div class="dot" v-if="index != alarmHistoryContent.length-1"></div>
                  <div v-else class="active"></div>
                </div>
                <div class="day">{{formatDate(item.processTime,'MM.dd')}}</div>
                <div class="time">{{formatDate(item.processTime,'HH:mm:ss')}}</div>
              </div>
            </div>
        </div>
      </div>    
     </div>
  </div>
</template>
<script>
import peopleInfoItem from './peopleInfoItem'

import { apiNames } from '../../Utils/config'

export default {
  name: 'peopleAlarmDialog',
  props: {
    type: {
      default: 'device',//fire,people,vehicle
      type: String
    },
    // dialogVisible: {
    //   default: false,//fire,people,vehicle
    //   type: Boolean
    // },
  },
  components: {
    peopleInfoItem
  },
  data () {
    return {
     dialogVisible: false,
     activeName: 'second',
     click: true,
     deviceInfo: {},
     allData: {},//报警位置
     processUserInfo: [],
     alarmHistoryContent: []
    }
  },
  mounted () {
    this.$bus.on('peopleAlarmDialog', (item,tag) => {
      this.dialogVisible = tag
      // console.log(item)
      if(tag) this.getInfos(item._id)
    })
  },
  computed: {
    realWidth: function () {
      return this.click ? '24.34rem' : '34.44rem'
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
    doClose(){
      this.dialogVisible = false
    },
    alertTip (msg) {
      this.$newthost({
        content: msg
      })
    },
    //
    getInfos(id){
      this.$get(apiNames['报警详情']+id).then(res=> {
        if (res.responseStatus.resultCode === 0) {  
                console.log(res.data)
                this.deviceInfo = res.data.deviceInfo
                this.allData = res.data
                this.processUserInfo = res.data.alarmHistoryContent[0].processUserInfo
                this.alarmHistoryContent = res.data.alarmHistoryContent
              
            } else {
              this.alertTip(res.data)    
            }
      })  
    },
    handleClick() {
        // console.log(tab, event);
      },
    clickRelation(e) {
        // e就是子组件传过来的值
        this.click = e
      }
  },
  beforeDestroy () {
    this.$bus.off('peopleAlarmDialog')//移出监听
  }
}
</script>

<style lang="scss" scoped>
.peopleAlarmDialog {
  position: relative;
  border: 1px solid rgba(201, 231, 255, 0.2);
  padding-left: 0.74rem ;
  padding-bottom: 0.74rem;

  .alarm_title {
    justify-content: space-between;
    display: flex;
    margin-top: 0.38rem;
    .text {     
      font-size: 0.36rem;
      font-family: "HY65";
      color: #FFFFFF;
      .lable {
        margin-left: 0.6rem;
        display: inline-block;
        color: #FFFFFF;
        font-size: 0.24rem;
        padding: 0.04rem 0.14rem;    
        background: rgba(255, 101, 120, 0.3);
        border-radius: 3px;
        border: 1px solid #FF6578;
      }
    }
    .quitBtn {
      justify-content: flex-end;
      padding-right: 0.48rem;
    }
  }

  .alarm_content {
    display: flex;
    flex-direction: row;
    padding-top: 0.6rem;
    .alarm_content_add {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          // width: 24rem;
      .alarm_content_left {
        width: 9.6rem;
        height: 5.32rem;
        margin-right: 0.6rem;
        display: flex;
        border-right: 1px solid #1893FF;
        .alarm_content_left_btn{
          width: 2.1rem;
          margin-top: 0.6rem;
          margin-left: 0.2rem;
          margin-right: 1.4rem;
          .video, .img {
            border: 1px solid red;
            width: 1.65rem;
            height: 0.56rem;
            line-height: 0.56rem;
            text-align: center;
            background: rgba(78, 167, 254, 0.1);
            border: 1px solid #51CFFF;
            color: #C5E4FF;
            font-family: "HY55";
            font-size: 0.24rem;
          }
          .img {
            margin-top: 0.4rem;
          }
        
        }
        .alarm_content_left_info{
          flex: 1;
          .alarm_content_left_info_detail {
            display: flex;
            margin-top: 0.6rem;
            color: rgba(255, 255, 255, 0.8);
            font-family: "HY55";
            font-size: 0.28rem;
            .info_detail_left {
              flex: 2;
              text-align: right;
              padding-right: 0.1rem;
            }
            .info_detail_right {
              flex: 3;
              text-align: left;
            }
          }
        }
      }
      .alarm_content_right {
        width: 17.4rem;
        height: 5.32rem;
        // border: 1px solid #1893FF;
      }
      .alarm_content_process {
        margin-top: 0.6rem;
        width: 23.14rem;
        // border: 1px solid #1893FF;
        padding: 0.5rem 0.4rem;
        box-sizing: border-box;

        .process_line {
          position: relative;
          margin-top: 0.7rem;
          margin-bottom: 0.5rem;
          width: 100%;
          height: 0.04rem;
          background: url("../../assets/imgs/common/line_bg.png");
          background-size: 100% 100%;    
          // border: 0.04rem dashed #4E699D;
          .title_1,.title_4 {
              position: absolute;
              top: -1rem;
              left: 3.2rem;
              color: #C5E4FF;
              :nth-child(1) {
              font-family: "DINBOLD";
              font-size: 0.4rem;
              font-weight: bold;
              margin-right: 0.16rem;
              }
              :nth-child(2) {
              font-family: "HY75";
              font-size: 0.36rem;
              font-weight: bold;
              }
            }
            .aim_1,.aim_4 {
              position: absolute;
              top: -0.5rem;
              left: 3.2rem;
              width: 1rem;
              height: 1rem;
              background: url("../../assets/imgs/common/process_off.png");
              background-size: 100% 100%;
            }
          .title_2,.title_5 {
              position: absolute;
              top: -1rem;
              left: 11.2rem;
              color: #C5E4FF;
              :nth-child(1) {
              font-family: "DINBOLD";
              font-size: 0.4rem;
              font-weight: bold;
              margin-right: 0.16rem;
              }
              :nth-child(2) {
              font-family: "HY75";
              font-size: 0.36rem;
              font-weight: bold;
              }
            }
            .aim_2,.aim_5 {
              position: absolute;
              top: -0.52rem;
              left: 11.2rem;
              width: 1rem;
              height: 1rem;
              background: url("../../assets/imgs/common/process_off.png");
              background-size: 100% 100%;
            }
            .title_3,.title_6 {
              position: absolute;
              top: -1rem;
              left: 18.8rem;
              color: #C5E4FF;
              :nth-child(1) {
              font-family: "DINBOLD";
              font-size: 0.4rem;
              font-weight: bold;
              margin-right: 0.16rem;
              }
              :nth-child(2) {
              font-family: "HY75";
              font-size: 0.36rem;
              font-weight: bold;
              }
            }
            .aim_3,.aim_6 {
              position: absolute;
              top: -0.52rem;
              left: 18.8rem;
              width: 1rem;
              height: 1rem;
              background: url("../../assets/imgs/common/process_off.png");
              background-size: 100% 100%;
            }
            .title_4,.title_5,.title_6 {
              top: 3.8rem;
            }
            .aim_4,.aim_5,.aim_6 {
              top: 4.1rem;
              z-index: 10;
            }
          .process_on {
            width: 1rem;
            height: 1rem;
            background: url("../../assets/imgs/common/process_on.png");
            background-size: 100% 100%;
          }
        }
        .process_line_second {
          margin-top: 1.1rem;
        }
        .process_box {
          display: flex;
          flex-direction: row;
          .process_box_find, .process_box_add, .process_box_assign, .process_box_accept,.process_box_deal, .process_box_end {
          
            width: 6.96rem;
            height: 2.92rem;
            background: rgba(120, 147, 236, 0.16);
            border: 1px solid #0F1B43;
            text-align: left;
            padding-left: 0.6rem;
            font-family: "HY65";
            font-size: 0.28rem;



            :nth-child(1) {
              color: #00FFF3;
              padding-top: 0.38rem;
              span {
              font-family: "DINBOLD";
              font-size: 0.28rem;
              font-weight: 600; 
              }
            }
            :nth-child(2) {
              color: #FFFFFF;
              padding-top: 0.28rem;
            }
            :nth-child(3) {
              color: #FFFFFF;
              padding-top: 0.26rem;
            }
            :nth-child(4) {
              color: #FFFFFF;
              padding-top: 0.26rem;
            }
            :nth-child(5) {
              color: #FFFFFF;
              padding-top: 0.26rem;
            }
          }
          .process_box_find {
            margin-right: 0.64rem;
            :nth-child(2) {
              color: #FF5E5E;
              padding-top: 0.28rem;
            }
          }
          .process_box_add {
            margin-right: 0.64rem;
          }
          .process_box_accept,.process_box_deal, .process_box_end {
            height: 3.52rem;
          }
          .process_box_accept,.process_box_deal {
            margin-right: 0.64rem;
          }
          .process_box_deal {
            :nth-child(1) {
              color: #00FFF3;
              padding-top: 0.38rem;
              span {
              font-family: "DINBOLD";
              font-size: 0.28rem;
              font-weight: 600; 
              }
            }
            :nth-child(2) {
              color: #00FFF3;
              padding-top: 0.38rem;
              span {
              font-family: "DINBOLD";
              font-size: 0.28rem;
              font-weight: 600; 
              }
            }
          }
        }
      }
    }
  }
  .alarm_content_device {
    display: flex;
    flex-direction: column;
    
    .basicInfo {
    margin-top: 0.6rem;
    .basicInfo_list {
      display: flex;
      flex-direction: column;
      padding: 0 0.8rem 0.3rem 0.8rem;
      margin-top: 0.6rem;
      box-sizing: border-box;
      border: 1px solid rgba(201, 231, 255, 0.2);
      .info_box {
        height: 2rem;
        overflow-y: scroll;
      }
      .processUserInfo {
        border-bottom: 1px solid rgba(201, 231, 255, 0.2);
        height: 1rem;
        line-height: 1rem;
        display: flex;
        flex-direction: row;
        .user,.tel,.alert,.status {
          padding-left: 0.6rem;
          text-align: left;
          flex: 3;
            color: #C5E4FF;
            font-family: "HY55";
            font-size: 0.24rem;
        }
      }
      .process {
        margin-top: 0.8rem;
        display:flex;

        .process_item{
          width: 2.6rem;
          height: 2rem;
          display: flex;
          flex-direction: column;
          .name {
            height: 1rem;
            line-height: 1rem;
            color: #00F9FC;
            font-family: "HY75";
            font-size: 0.24rem;  
            border-top: 1px dashed rgba(201, 231, 255, 0.2);
            position: relative;
            .dot{
                width: 0.48rem;
                height: 0.48rem;
                background: url("../../assets/imgs/common/process_off.png");
                background-size: 100% 100%;
                position: absolute;
                top: -0.26rem;
                left: 1.1rem;
            }
            .active {
                width: 0.48rem;
                height: 0.48rem;
                background: url("../../assets/imgs/common/process_on.png");
                background-size: 100% 100%;
                position: absolute;
                top: -0.26rem;
                left: 1.1rem;
            }
          }
          .time,.day{
            color: #00F9FC;
            font-family: "DINBOLD";
            font-size: 0.24rem;   
          }
        }
      }
    }
      .basicInfo_title {
        color: #00F9FC;
        padding-left: 0.4rem;
        font-size: 0.32rem;
        text-align: left;
        font-family: "HY65";
        border-left: 3px solid #00F9FC;
      }
      .basicInfo_detail {
        margin-top: 0.44rem;
        padding: 0.36rem 0.6rem;  
        background: rgba(0, 249, 252, 0.04);
        border-radius: 0.2rem;
        .basicInfo_detail_box{
          display: flex;
          justify-content: space-between;
        }
        .basicInfo_detail_item{
          margin-bottom: 0.36rem;
          text-align: left;
          width: 6rem;
          font-size: 0.32rem;
          font-family: "HY55";
          color: #C9E7FF;
        }
      }
    }
  }
}
</style>