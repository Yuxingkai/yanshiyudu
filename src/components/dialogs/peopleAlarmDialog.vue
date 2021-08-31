<template>
 <el-dialog :visible.sync="dialogVisible" :width="realWidth" append-to-body>
  <div class="peopleAlarmDialog">
    <div class="alarm_title">
      <span class="text">吸毒人员连续3天未出门报警</span><span class="lable">未处理</span>
    </div>
    <div class="alarm_content">
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
          <peopleInfoItem @clickRelation="clickRelation" />
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
      <div class="relation" v-if="!click">
        <div class="main_img"></div>  
        <div class="img_1"></div>
        <div class="img_2"></div>
        <div class="img_3"></div>
        <div class="img_4"></div>
        <div class="line_1"></div>
        <div class="line_2"></div>
        <div class="line_3"></div>
        <div class="line_4"></div>
      </div> 
    </div>
  </div>
 </el-dialog>
</template>
<script>
import peopleInfoItem from './peopleInfoItem'
export default {
  name: 'peopleAlarmDialog',
  components: {
    peopleInfoItem
  },
  data () {
    return {
     dialogVisible: true,
     activeName: 'second',
     click: true
    }
  },
  mounted () {
    this.$bus.on('peopleAlarmDialog', () => {
      this.dialogVisible = true
    })
  },
  computed: {
    realWidth: function () {
      return this.click ? '24.34rem' : '34.44rem'
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
  // background-color: rgba(0, 0, 0, 0.1) !important;
}
.el-dialog__header {
  background-color: rgba(0, 0, 0, 0.1) !important;
}
</style>
<style lang="scss" scoped>
.peopleAlarmDialog {
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
        width: 8.48rem;
        height: 5.32rem;
        margin-right: 0.6rem;
        display: flex;
        border: 1px solid #1893FF;
        .alarm_content_left_btn{
          width: 2.1rem;
          margin-top: 0.6rem;
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
        width: 14rem;
        height: 5.32rem;
        border: 1px solid #1893FF;
      }
      .alarm_content_process {
        margin-top: 0.6rem;
        width: 23.14rem;
        border: 1px solid #1893FF;
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
    .relation {
      width: 10rem;
      // background-color: red;
      position: relative;
      .main_img {
        position: absolute;
        top: 5.2rem;
        left: 0rem;
        width: 5.4rem;
        height: 4.6rem;
        background: url("../../assets/imgs/home/img_main.png");
        background-size: 100% 100%;
      }
      .img_1 {
        position: absolute;
        top: 1rem;
        left: 3.6rem;
        width: 2.04rem;
        height: 2.12rem;
        background: url("../../assets/imgs/home/img_1.png");
        background-size: 100% 100%;
        }
      .img_2 {
        position: absolute;
        top: 4.5rem;
        left: 6.4rem;
        width: 3.3rem;
        height: 2.04rem;
        background: url("../../assets/imgs/home/img_2.png");
        background-size: 100% 100%;
        }
      .img_3 {
        position: absolute;
        top: 8.4rem;
        left: 5.4rem;
        width: 4.08rem;
        height: 2.52rem;
        background: url("../../assets/imgs/home/img_3.png");
        background-size: 100% 100%;
        }
      .img_4 {
        position: absolute;
        bottom: 2rem;
        left: 2.8rem;
        width: 2.7rem;
        height: 2rem;
        background: url("../../assets/imgs/home/img_4.png");
        background-size: 100% 100%;
        }
        .line_1 {
          width: 3.4rem;
          height: 0.02rem;
          background-color: #C9E7FF;
          position: absolute;
          top: 4.1rem;
          left: 1.2rem;
          transform:rotate(-57deg);
          -ms-transform:rotate(-57deg);     /* IE 9 */
          -moz-transform:rotate(-57deg);    /* Firefox */
          -webkit-transform:rotate(-57deg); /* Safari 和 Chrome */
          -o-transform:rotate(-57deg);  /* Opera */
          
        }
        .line_2 {
          width: 3.0rem;
          height: 0.02rem;
          background-color: #C9E7FF;
          position: absolute;
          top: 6.1rem;
          left: 3.5rem;
          transform:rotate(-25deg);
          -ms-transform:rotate(-25deg);     /* IE 9 */
          -moz-transform:rotate(-25deg);    /* Firefox */
          -webkit-transform:rotate(-25deg); /* Safari 和 Chrome */
          -o-transform:rotate(-25deg);  /* Opera */
          
        }
        .line_3 {
          width: 3.7rem;
          height: 0.02rem;
          background-color: #C9E7FF;
          position: absolute;
          top: 9.2rem;
          left: 3.5rem;
          transform:rotate(20deg);
          -ms-transform:rotate(20deg);     /* IE 9 */
          -moz-transform:rotate(20deg);    /* Firefox */
          -webkit-transform:rotate(20deg); /* Safari 和 Chrome */
          -o-transform:rotate(20deg);  /* Opera */
          
        }
        .line_4 {
          width: 3.7rem;
          height: 0.02rem;
          background-color: #C9E7FF;
          position: absolute;
          top: 11rem;
          left: 1rem;
          transform:rotate(70deg);
          -ms-transform:rotate(70deg);     /* IE 9 */
          -moz-transform:rotate(70deg);    /* Firefox */
          -webkit-transform:rotate(70deg); /* Safari 和 Chrome */
          -o-transform:rotate(70deg);  /* Opera */
          
        }

    }
  }
}
</style>