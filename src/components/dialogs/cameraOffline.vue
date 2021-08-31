<template>
 <el-dialog :visible.sync="dialogVisible" :width="realWidth" append-to-body>
  <div class="cameraOfflineDialog">
    <div class="alarm_title">
      <span class="text">摄影机离线</span><span class="lable">未处理</span>
    </div>
    <div class="alarm_content">
      <div class="alarm_content_add">
        <div class="alarm_content_left">
          <div class="alarm_content_left_title">报警详情</div>
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
          </div>
        </div>
        <div class="alarm_content_right">
          <div class="alarm_content_left_title">设备详情</div>
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
          </div>         
        </div>
        <div class="alarm_content_process">
          <div class="people_title">责任人信息</div>
          <div class="people_info">
            <div class="name">
              <span>责任人</span>
              <span>赵国庆</span>
            </div>
            <div class="tel">
              <span>手机号码</span>
              <span>1312122599</span>
            </div>
            <div class="status">
              <span>报警状态</span>
              <span>接收</span>
            </div>
            <div class="deal">
              <span>催办</span>
              <span class="bell"></span>
            </div>
          </div>
          <div class="process_line"></div>
          <div class="process_box">
            <div class="process_box_item" v-for="(item,index) in 6" :key='index'>
              <div class="title">发现
                <div class="tipBox">
                 <div :class="{tipdiv:!(index == 1 || index == 2),tipon:index == 1,tipnext:index == 2,}"></div>
                </div>
              </div>
              <div class="date">2.23</div>
              <div class="time">20:20:20</div>
              <div class="linetip"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </el-dialog>
</template>
<script>
// import peopleInfoItem from './peopleInfoItem'
export default {
  name: 'cameraOfflineDialog',
  components: {
    // peopleInfoItem
  },
  data () {
    return {
     dialogVisible: false,
     activeName: 'second',
     click: true
    }
  },
  mounted () {
    this.$bus.on('peopleAlarmDialog111', () => {
      this.dialogVisible = true
    })
  },
  computed: {
    realWidth: function () {
      return this.click ? '19.6rem' : '34.44rem'
    }
  },
  methods: {
    handleClick() {
        // console.log(tab, event);
      },
    clickRelation(e) {
        // e就是子组件传过来的值
        this.click = e
      }
  }
}
</script>
<style lang="scss">
.el-dialog {
  margin-top: 1.6rem!important;
  // height: 13.4rem!important;
  // width: 24.34rem;
  // height: 925px;
  // width: 100%;
  // width: fit-content;//目前这个属性只支持Chrome和Firefox浏览器
  // width:-moz-fit-content;
  // width:-webkit-fit-content;
  background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
  box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
  border: 1px solid;
  border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
  .el-dialog__headerbtn {
    font-size: 0.5rem;
  }
}
.el-dialog__body {
  background-color: rgba(0, 0, 0, 0.1) !important;
}
.el-dialog__header {
  background-color: rgba(0, 0, 0, 0.1) !important;
}
</style>
<style lang="scss" scoped>
.cameraOfflineDialog {
  position: relative;


  .alarm_title {
    position: absolute;
    top: -0.6rem;
    left: 0;
    .text {     
      font-size: 0.36rem;
      font-family: "HY65";
      color: #FFFFFF;
      margin-right: 0.6rem;
    }
    .lable {
      display: inline-block;
      color: #FFFFFF;
      font-size: 0.24rem;
      padding: 0.04rem 0.14rem;    
      background: rgba(255, 101, 120, 0.3);
      border-radius: 3px;
      border: 1px solid #FF6578;
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
          width: 24rem;
      .alarm_content_left {
        width: 8.7rem;
        height: 5.32rem;
        margin-right: 0.6rem;
        display: flex;
        flex-direction: column;
        border: 1px solid #1893FF;
        box-sizing: border-box;
        .alarm_content_left_title {
            // font-family: "HY55";
            font-size: 0.28rem;
            color: #00FFF3;
            padding-top: 0.42rem;
            padding-left: 0.6rem;
        }
        .alarm_content_left_info{
          flex: 1;
          padding-top: 0.6rem;
          .alarm_content_left_info_detail {
            display: flex;
            // margin-top: 0.6rem;
            padding-left: 0.84rem;
            padding-bottom: 0.6rem;
            color: rgba(255, 255, 255, 0.8);
            font-family: "HY55";
            font-size: 0.28rem;
            .info_detail_left {         
              text-align: right;
              padding-right: 0.1rem;
            }
            .info_detail_right {
              flex: 1;
              text-align: left;
            }
          }
        }
      }
      .alarm_content_right {
        // width: 8.48rem;
        // height: 5.32rem;
        // border: 1px solid #1893FF;
        width: 8.7rem;
        height: 5.32rem;
        // margin-right: 0.6rem;
        display: flex;
        flex-direction: column;
        border: 1px solid #1893FF;
        box-sizing: border-box;
        .alarm_content_left_title {
            // font-family: "HY55";
            font-size: 0.28rem;
            color: #00FFF3;
            padding-top: 0.42rem;
            padding-left: 0.6rem;
        }
        .alarm_content_left_info{
          flex: 1;
          padding-top: 0.6rem;
          .alarm_content_left_info_detail {
            display: flex;
            // margin-top: 0.6rem;
            padding-left: 0.84rem;
            padding-bottom: 0.6rem;
            color: rgba(255, 255, 255, 0.8);
            font-family: "HY55";
            font-size: 0.28rem;
            .info_detail_left {         
              text-align: right;
              padding-right: 0.1rem;
            }
            .info_detail_right {
              flex: 1;
              text-align: left;
            }
          }
        }
      }
      .alarm_content_process {
        margin-top: 0.6rem;
        width: 18rem;
        border: 1px solid #1893FF;
        padding: 0.5rem 0rem;
        box-sizing: border-box;
        .people_title {
            font-size: 0.32rem;
            color: #00FFF3;
            padding-left: 0.6rem;
            padding-bottom: 0.2rem;          
        }
        .people_info {
          // padding-top: 0.2rem;
          display: flex;
          justify-content: space-between;
          padding: 0 1rem;
          .name,.tel,.status,.deal {
           display: flex;
           flex-direction: column;
           font-family: "HY75";
           font-size: 0.28rem;
           color: #C9E7FF;
           span {
             margin-top: 0.28rem;
           }          
          }
          .bell {
            display: inline-block;
            width: 0.36rem;
            height: 0.38rem;
            margin-left: 0.1rem;
            background: url("../../assets/imgs/common/bell.png");
            background-size: 100% 100%;
          }
        }

        .process_line {
          position: relative;
          margin-top: 0.7rem;
          // margin-bottom: 0.5rem;
          width: 100%;
          height: 0.04rem;
          background: url("../../assets/imgs/common/line_bg.png");
          background-size: 100% 100%;    
 
        }
        .process_box {
          display: flex;
          flex-direction: row;
          .process_box_item {
            width: 3rem;
            height: 1.5rem;
            position: relative;
            text-align: center;
            padding-top: 0.4rem;
             font-size: 0.32rem;
             color: #28BFFF;
             font-family: "HY75";
             .title {
               position: relative;
               .tipBox {
                 position: absolute;
                 top: -0.6rem;
                 left: 50%;
                 width: 0.4rem;
                 height: 0.4rem;
                 transform: translateX(-50%);
                 display: flex;
                 align-items: center;
                 justify-content: center;
                 
                .tipdiv {
                  width: 0.36rem;
                  height: 0.36rem;
                  background-color: #00A0A2;
                  border-radius: 0.32rem;
                }
                 .tipon {
                  width: 0.36rem;
                  height: 0.36rem;
                  background-color: #00F9FC;
                  border-radius: 0.32rem;
                  position: relative;
                  &:before {
                    position: absolute;
                    content: "";
                    left: -0.06rem;
                    top: -0.06rem;
                    width: 0.44rem;
                    height: 0.44rem;
                    border-radius: 0.44rem;
                    border: 1px solid #00F9FC;
                  }
                 }
                 .tipnext{
                  width: 0.36rem;
                  height: 0.36rem;
                  background-color: #00A0A2;
                  border-radius: 0.32rem;
                  &:before {
                    position: absolute;
                    content: "";
                    left: -0.05rem;
                    top: -0.05rem;
                    width: 0.44rem;
                    height: 0.44rem;
                    border-radius: 0.44rem;
                    border: 1px solid #00A0A2;
                  }
                 }
               }
             }         
            .date {
              padding-top: 0.1rem;
              padding-bottom: 0.1rem;
            }
          }
        }
      }
    }
  }
}
</style>