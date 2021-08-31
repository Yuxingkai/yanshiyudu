<template>
 <el-dialog :visible.sync="dialogVisible" :width="realWidth" append-to-body>
  <div class="eachCarProfileDialog">
    <div class="eachProfile_title">
      <span class="text">一车一档</span>
    </div>
    <div class="eachProfile_content">
        <div class="eachProfile_left">
          <div class="left_up">
            <div class="left_up_pic fixMr">
              <div class="image" v-if='idPicSrc'>
                <img
                  class="people-pic"
                  :src="idPicSrc"
                >
              </div>
              <div class="image" v-else>
               <div class="pic"></div>
              </div>
            </div>
          </div>
          <div class="left_info">
            <div class="profileInfo">
                <div class="profileInfo_detail"><span class="jus_name">车辆类型: </span><span class="numStyle">{{carInfo.vehiclesType == 1 ? '机动车': '非机动车'}}</span></div>
                <div class="profileInfo_detail"><span class="jus_name">车辆型号: </span>{{carInfo.vehiclesModel}}</div>
                <div class="profileInfo_detail"><span class="jus_name">车辆品牌: </span ><span>{{carInfo.vehiclesBrand}}</span></div>
                <div class="profileInfo_detail"><span class="jus_name">车身颜色: </span>{{carInfo.vehiclesColor}}</div>
                <div class="profileInfo_detail"><span class="jus_name">车主姓名: </span><span>{{carUser}}</span></div>
                <div class="profileInfo_detail"><span class="jus_name">车辆标签: </span><span class="colorStyle">{{plateNo}}</span></div>
            </div>
          </div>
          <div class="left_down">
            <div v-for="(item, index) in carData" :key="index" class="dataItem" @click='doTab(index)'>
              <span>{{item.name}}</span>
              <span>{{item.num}}</span>
            </div>
          </div>
        </div>
        <div class="eachProfile_center">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="通行记录" name="first">
              <accessLog :plateNo='plateNo' @getJump='getJump' />
            </el-tab-pane>
            <el-tab-pane label="车辆轨迹" name="second">
              <div id="map2" style="width: 100%;height: 16.48rem">
                <houseMapUI />
              </div>
              <!--<div class="detailBox" v-for="(item,index) in faceLog" :key="index">-->
                <!--<div class="dot"></div>-->
                <!--<div class="date">{{item.date}}</div>-->
                <!--<div class="detail">-->
                  <!--<div class="detail_box" v-for="(box,index) in item.list" :key="index">-->
                    <!--<div class="time">{{formatDate(box.faceCaptureTime,'HH:mm:ss')}}</div>-->
                    <!--<div class="address">特斯联1号楼出入口</div>-->
                    <!--<div class="img"></div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
                <!--<div class="detailBox" v-if="faceLog.length == 0">-->
                    <!--暂无抓拍记录！-->
                <!--</div>-->
            </el-tab-pane>
            <el-tab-pane label="抓拍记录" name="third">
              <div class="nodata" v-show="faceLog.length == 0">
                暂无近七天抓拍记录！
              </div>
              <div class="detailBox" v-for="(item,index) in faceLog" :key="index">
                <div class="dot"></div>
                <div class="date">{{item.date}} 
                    <span class='more' @click="doMore(item.date)">>></span>
                </div>
                <div class="detail">
                  <div class="detail_box" v-for="(box,index) in item.list" :key="index" v-show="box.isCanShow">
                    <div class="time">{{formatDate(box.faceCaptureTime,'HH:mm:ss')}}</div>
                    <div class="address">{{box.address}}</div>
                    <div class="img">
                      <img
                        class="people-pic"
                        :src="box.faceUrl"
                      > 
                    </div>
                  </div>
                </div>
              </div>              
            </el-tab-pane>
            <el-tab-pane label="通行车场" name="fouth">
              <div class="houseInfo" v-if='carP.length>0'>
                <div class="houseInfoItem" v-for="(item, index) in carP" :key="index">
                  <div class="name">{{item.superVirtualName}}</div>
                  <div class="content">
                    <div class="parking"></div>
                    <span>{{item.name}}</span>
                  </div>
                </div>
              </div>
                <div class="houseInfo" v-else>
                    暂无通行车场！
                </div>
            </el-tab-pane>
            <el-tab-pane label="通行道闸" name="fifth">
                <div class="accessInfo" v-if='accseeLog.length>0'>
                  <div class="accessInfoItem" v-for="(item, index) in accseeLog" :key="index">
                    <div class="content">
                      <box4 class="box_">
                        <div class="icon_">{{item.name}}</div>
                      </box4>
                      <span>{{item.installAddr}}</span>
                    </div>
                  </div>
              </div>            
                <div class="accessInfo" v-else>
                    暂无通行道闸！
                </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="eachProfile_right" v-if='showRight'>
          <div class="right_filter">
            <span class="jusPL" :class="{'active': activeClass == 'first'}" @click="doChange(0)">全部</span>
            <span :class="{'active': activeClass == 'second'}" @click="doChange(1)">通行轨迹</span>
            <span :class="{'active': activeClass == 'third'}" @click="doChange(2)">抓拍轨迹</span>
            <div class="search_">
              <span class="search" @click="search"></span>
            </div>
            <div class="filter_box" v-if='searchBox'>
              <div class="laberType">
                <div class="left">通行位置</div>
                <div class="right">
                  <el-select v-model="value" placeholder="请选择" popper-class='selcet-panel' :popper-append-to-body='false'>
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>     
              <div class="laberType">
                <div class="left">通行时间</div>
                <div class="right">
                  <el-date-picker
                    v-model="time"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    placeholder="选择日期时间">
                  </el-date-picker>
                </div>
              </div>           
            </div>
          </div>
          <div class="filter_content" v-if='trailLogs.length > 0'>
            <div class="detailBox" v-for="(item,index) in 3" :key="index">
              <div class="dot"></div>
              <div class="date">2020-09-23</div>
              <div class="detail">
                <div class="detail_box" v-for="(item,index) in 3" :key="index">
                  <div class="time">12:23:34</div>
                  <div class="address">特斯联1号楼出入口</div>
                  <div class="img">
                    <img
                      class="people-pic"
                      :src="item.faceUrl"
                    >      
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="filter_content" v-else>
                    暂无轨迹记录！
            </div> 
        </div>
    </div>
  </div>
 </el-dialog>
</template>
<script>
import accessLog from '../carLog'
// import RelationChart from '../relationCharts/RelationChart'
//掉接口
import { apiNames } from '../../Utils/config'
import { formatDate } from '../../Utils/Com.js'
// import houseMapUI from '../../Maps/houseMapUI'
export default {
  name: 'eachProfileDialog',
  components: {
    accessLog,
    // houseMapUI,
  },
  data () {
    return {
     dialogVisible: false,
     activeName: 'first',
     activeClass: 'first',
     formatDate: formatDate,
     click: true,
     carUser: '',
     showRight: false,
     carData: [
        { name: '通行车场', num: 0,},
        { name: '通行道闸', num: 0,},
        { name: '通行记录', num: 0,},
        { name: '抓拍记录', num: 0,},
        { name: '车辆轨迹', num: '-',},
      ],
      carInfo: {},
      // plateNo: '',
      labers: '',
      carP: [],//车场信息
      plateNo: '沪B0G412',//车牌号
      idPicSrc: '',//证件照地址
      faceLog: [],//抓拍记录
      accseeLog: [],//通行门禁
      searchBox: false,
      options: [],
      value: '',
      time: '',
      trailLogs: [],//轨迹记录
      pagenum: 1,
    }
  },
  mounted () {
    this.$bus.on('eachcarProfileDialog', (e) => {
      this.dialogVisible = true
      console.log(e)
      this.carUser = e.peopleName
      this.init(e)
    })
  },
  computed: {
    realWidth: function () {
      return this.click ? '34.84rem' : '34.44rem'
    }
  },
  methods: {
    search() {
      this.searchBox = !this.searchBox
      if(!this.searchBox) {
        console.log('search')
      }
    },
    doChange(i){
      switch(i){
          case 0 :
            //语句
          this.activeClass = 'first' 
            break; 
          case 1 :
          this.activeClass = 'second' 
            break; 
          case 2 :
           this.activeClass = 'third' 
            break; 
          default : 
            this.activeClass = 'first' 
      }
    },
    init(e) {
      let that = this
      this.$post(apiNames['一车一档'],{
        plateNo: e.plateNo
        }).then(res=> { 
           if (res.responseStatus.resultCode === 0) { 
                console.log(res)
               that.carInfo = res.data.carInfo&&res.data.carInfo ? res.data.carInfo : {}
              //  that.plateNo = res.data.plateNo
              //  that.houseInfo = res.data.houseDetail
              //  that.credentialNo = that.peopleInfo.credentialNo
              //  that.idPicSrc = that.peopleInfo.idPic
              // that.carData[1] = res.data.accessNum
              that.carData[0].num = res.data.accessSpaceCodeNum
              that.carData[1].num = res.data.thingcodesNum
              that.carData[2].num = res.data.accessNum
              that.carData[3].num = res.data.accessNum
              // that.carData[4].num = res.data.accessNum
              // that.carData[4].num = res.data.houseNum
              // // relationshipInfo: [,…]
              // // 0: {credentialNo: "130104197801102413", relationshipCredentialNo: "130104197801102413", peopleName: "牛亚明",…}
              // // credentialNo: "130104197801102413"
              // // ownerRelation: 1
              // // peopleName: "牛亚明"
              // // relationshipCredentialNo: "130104197801102413"
              // // 1: {credentialNo: "1", relationshipCredentialNo: "130104197801102413", peopleName: "住户1",…}
              // // credentialNo: "1"
              // // ownerRelation: 3
              // // peopleName: "住户1"
              // // relationshipCredentialNo: "130104197801102413"
             } else {
              this.$newthost({
                  content: res.data.name
                })     
             }
       }) 
      this.$post(apiNames['车辆轨迹'],{
          plateNo: e.plateNo
         }).then(res=> { 
           if (res.responseStatus.resultCode === 0) { 
            //  that.accseeLog = res.data
             this.$bus.emit('drawLine', res.data)
             console.log('车辆轨迹'+res)
             } else {
              this.$newthost({
                  content: res.data.name
                })    
             }
       })
        this.$post(apiNames['车辆抓拍列表'],{
        virtualSpaceCode: this.$store.state.currentVirtualSpaceCode,
        pageNum: this.pagenum,
        pageSize: 10,
        }).then(res=> { 
           if (res.responseStatus.resultCode === 0) { 
            //  that.faceLog = res.data
             console.log(res)
             } else {
              this.$newthost({
                  content: res.data.name
                })      
             }
       }) 
      this.$post(apiNames['通行车场'],{
          plateNo: e.plateNo,
        }).then(res=> { 
           if (res.responseStatus.resultCode === 0) { 
              this.carP = res.data
             console.log(res)
             } else {
              this.$newthost({
                  content: res.data.name
                })      
             }
       })  
    // this.$post(apiNames['车辆通行记录'],{
    //       plateNo: '沪B0G412'||e.plateNo,
    //       pageNum: this.pagenum,
    //       pageSize: 8,
    //       accessTimeStart: '',
    //       accessTimeEnd: '',
    //       virtualCodes: '',
    //       inOutType: '',
    //     }).then(res=> { 
    //        if (res.responseStatus.resultCode === 0) { 

    //          console.log(res)
    //          } else {
    //           this.$newthost({
    //               content: res.data.name
    //             })      
    //          }
    //    })          
            
    },

    doTab(i) {
      switch(i){
          case 0 :
            //语句
          this.showRight = false
          this.activeName = 'fouth'     
            break; 
          case 1 :
           this.showRight = false
           this.activeName = 'fifth'        
            break; 
          case 2 :
           this.showRight = false
           this.activeName = 'first'        
            break; 
          case 3 :
           this.activeName = 'third'  
           this.showRight = true
            break; 
          case 4 :
           this.showRight = false
           this.activeName = 'second' 
            break; 
          default : 
           this.showRight = false
            this.activeName = 'first' 
      }
    },
    getJump() {
      this.activeName = 'third'
    },
    handleClick(event) {
        if(event.name == 'third'){
          this.showRight = true
        }else {
          this.showRight = false
        }
      },
    clickRelation(e) {
        // e就是子组件传过来的值
        this.click = e
      },
    beforeDestroy () {
    this.$bus.off('eachProfileDialog')//移出监听
  }
  }
}
</script>
<style lang="scss">
.el-dialog {
  margin-top: 1.6rem!important;
  margin: 1.0rem auto!important;
  // height: 19.42rem;
  background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
  box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
  border: 1px solid;
  border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
  .el-dialog__headerbtn {
    font-size: 0.5rem;
  }
  .el-dialog__body {
    padding: 0.5rem 0.6rem 0.4rem;
  }
}
.eachCarProfileDialog {
  .el-tabs__header {
    margin: 0!important;
    background: rgba(44, 76, 113, 0.4);
  }
  .el-tabs__nav .is-top {
    color: #FFFFFF;
    font-size: 0.32rem;
    font-family: "HY65";
  }
    .el-tabs__item {
         padding: 0 20px 0 20px !important;
         height: 0.92rem;
         line-height: 0.92rem;
    }
  .el-tabs__item.is-active{
    color: #00F9FC;
  }
  .el-tabs__nav-wrap::after {
    width: 0;
  }
  .el-tabs__active-bar{
    width: 1rem!important;
    background: linear-gradient( to right,transparent -4%, #00FBFD 40%,#00F9FC 70%,transparent 104%);
    left: 0.14rem;
    bottom: 0.1rem;
    // width: 50px;
    border-radius: 50%;
    height: 2px;

  }
  .el-tabs__content{
    height: 16.48rem;
    // background-color: pink;
    // background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
    // background: transparent;
    overflow-y: scroll;
    padding-top: 0.2rem;
        // height: 16rem;
      .detailBox {
            // height: 3rem;
            position: relative;
            margin-left: 0.25rem;
            margin-top: 0.3rem;
            border-left: 1px dashed #C9E7FF;
          .dot {
                width: 0.48rem;
                height: 0.48rem;
                background: url("../../assets/imgs/common/dot.png");
                background-size: 100% 100%;
                position: absolute;
                top: -0.32rem;
                left: -0.24rem;
              }
          .date {
               position: absolute;
                top: -0.32rem;
                left: 0.24rem;
                padding-left: 0.2rem;
                color: #c9e7ff;            
                font-family: "DINBOLD";
                font-weight: bold;
                font-size: 0.32rem;
                
            }
            .detail {
              padding-left: 0.43rem;
              padding-bottom: 0.36rem;
              display: flex;
              flex-wrap: wrap;
              .detail_box:last-child{
                  margin-right: 0rem;
                }
              .detail_box {
                display: flex;
                flex-direction: column;
                margin-right: 0.7rem;
                .time {
                  padding-top: 0.26rem;
                  color: #BAD2E5;            
                  font-family: "DINBOLD";
                  font-weight: bold;
                  font-size: 0.28rem;
                }
                .address {
                  padding: 0.2rem 0 0.2rem;
                  font-family: "HY55";
                  font-size: 0.24rem;
                  color: #BAD2E5;
                }
                .img {
                  width: 2.88rem;
                  height: 2rem;
                  background-color: #fff;
                }

              }
            }
      }

      .detailBox:last-child {
                border-left: unset;
      }
      .houseInfo {
         display: flex;
          flex-wrap: wrap;
          padding: 0 0.4rem;
        .houseInfoItem {
          display: flex;
          flex-direction: column;
          margin-right: 0.7rem;
          width: 2.88rem;
          .name {
            color: #FFFFFF;
            font-family: "HY65";
            font-size: 0.28rem;
            padding: 0.12rem 0;
            height: 0.34rem;
          }
          .content{
            width: 2.88rem;
            height: 3.2rem;
            font-family: "HY55";
            font-size: 0.24rem;
            border: 1px solid rgba(201, 231, 255, 0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .parking {
              width: 0.94rem;
              height: 0.87rem;
              margin-bottom: 0.34rem;
              background: url("../../assets/imgs/realcar/parking.png");
              background-size: 100% 100%; 
            }
            .icon1 {
              width: 0.94rem;
              height: 0.87rem;
              margin-bottom: 0.34rem;
              background: url("../../assets/imgs/common/icon1.png");
              background-size: 100% 100%; 
            }
            .icon2 {
              width: 0.94rem;
              height: 0.87rem;
              margin-bottom: 0.34rem;
              background: url("../../assets/imgs/common/icon2.png");
              background-size: 100% 100%; 
            }
          }
        }
      }
      .accessInfo {
          display: flex;
          flex-wrap: wrap;
          padding: 0 0.4rem;
        .accessInfoItem {
          display: flex;
          // flex-direction: column;
          margin-right: 0.7rem;
          width: 2.88rem;
          height: 3.2rem;
          border: 1px solid rgba(201, 231, 255, 0.2);
          .content {
            display: flex;
            width: 2.88rem;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            .box_ {
              width: 0.92rem;
              height: 0.92rem;
              margin-bottom: 0.2rem;
              color: #C9E7FF;
              font-family: "HY65";
              font-size: 0.32rem;   
            }
            span {
              color: #C9E7FF;
              font-family: "HY55";
              font-size: 0.24rem;   
            }
          }
          }
      }
  }
}
      .eachProfile_right {
          .el-input__inner {
          width: 6.4rem!important;
          height: 0.64rem!important; 
          background: #101824!important;;
          border: 1px solid rgba(186, 210, 229, 0.3)!important;
        }
        .el-input__suffix {
          margin-right: 0!important;
        }
        .el-input__icon {
          line-height: 0.64rem!important;
        }
        .el-select-dropdown {  
            background: #101824!important;
            border-radius: 3px!important;
            border: 1px solid rgba(186, 210, 229, 0.3)!important;
            color: #C9E7FF!important;
            padding: 0.2rem!important;
          }
        .el-select-dropdown__item.selected {
          color: #00F9FC!important;
        }
        .el-select-dropdown__item.hover {
              color: #00F9FC!important;
              background: rgba(78, 101, 131, 0.65)!important;
          }
        .popper__arrow {
          display: none!important;
        }  
      }
</style>
<style lang="scss" scoped>
.eachCarProfileDialog {
  position: relative;


  .eachProfile_title {
    position: absolute;
    top: -0.4rem;
    left: 0;
    .text {     
      font-size: 0.36rem;
      font-family: "HY65";
      color: #FFFFFF;
      margin-right: 0.6rem;
    }
  }

  .eachProfile_content {
    display: flex;
    flex-direction: row;
    padding-top: 0.6rem;
    // height: 4rem;
    .eachProfile_left {
      // background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
      .left_up {
        display: flex;
        flex-direction: row;       
        .fixMr {
          // margin-right: 0.8rem;
          width: 7.5rem;
          height: 4.34rem;
          background: #040613;
          border: 1px solid rgba(201, 231, 255, 0.2);
        }
        .left_up_pic{
          display: flex;
          flex-direction: column; 
          align-items: center;
          justify-content: center;     
          .image {
            width: 7.08rem;
            height: 3.9rem;
            // background-color: pink;
            .people-pic {
              width: 100%;
              height: 100%;
            }
            .pic {
              width: 100%;
              height: 100%;
              background: url("../../assets/imgs/application/realcar.png");
              background-size: 100% 100%;
            }
          }
          .title {
            text-align: center;
            padding-top: 0.22rem;
          }
        }
      }
      .left_info {
        .profileInfo {
          .profileInfo_record {
            margin-top: 0.6rem;
             color: #C9E7FF;
              font-family: "HY75";
              font-size: 0.32rem;             
            .jus_title {
              color: #ffffff;
              font-family: "HY75";
              font-size: 0.32rem;
              margin-right: 0.4rem;            
            }
          }
          .profileInfo_detail {
            margin-top: 0.6rem;
            color: #C9E7FF;
            font-family: "HY75";
            font-size: 0.32rem;           
            .jus_name {
              font-family: "HY75";
              font-size: 0.32rem;  
            }
            .numStyle {
              font-family: "DINBOLD";
              font-size: 0.32rem;
            }
            .laberStyle {
              color: #50E3C2;
              text-decoration:underline;
            }
            .colorStyle {
              color: #50E3C2;
            }
          }
        }
      }
      .left_down {
          display: flex;
          flex-wrap: wrap;
        //   justify-content: space-around;
          // margin-left: 0.34rem;
          margin-top: 1.24rem;
          width: 8rem;
          .dataItem {
            // flex: 1;
            cursor: pointer;
            width: 1.5rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            margin-bottom: 0.44rem;
            span:nth-child(1){
              font-size: 0.24rem;
              color: #BAD2E5;
              font-family: "HY65";
            }
            span:nth-child(2){
              font-size: 0.44rem;
              height: 1.3rem;
              width: 1.3rem;
              margin: 0 auto;
              color: #c9e7ff;            
              font-family: "DINBOLD";
              font-weight: bold;
              line-height: 1.3rem;
              background: url("../../assets/imgs/common/circleBg_item.png");
              background-size: 100% 100%;
            //   margin-top: 0.08rem;
            }
          }
      }
    }

    .eachProfile_center {
      flex: 1;
      // background: rgba(44, 76, 113, 0.4);
    }
    .eachProfile_right {
      width: 8rem;
      padding-left: 0.38rem;
      padding-top: 0.3rem;
      .right_filter {
        display: flex;
        padding-bottom: 0.12rem;
        position: relative;
        .jusPL {
          margin-left: 0.18rem;
        }
        .active {
          color: #00F9FC;
        }
        span {
          margin-right: 0.6rem;
          font-size: 0.28rem;
          font-family: "HY55";
          color: #C9E7FF;
        }
        
        .search_{
          flex: 1;
          text-align: right;

          .search{
          display: inline-block;
          width: 0.32rem;
          height: 0.32rem;
          background: url("../../assets/imgs/search.png");
          background-size: 100% 100%;            
          }
        }
        .filter_box {
          position: absolute;
          top: 0.6rem;
          left: 0.2rem;
          z-index: 1;
          width: 7.2rem;
          height: 3.64rem;
          background: #101824;
          border-radius: 3px;
          border: 1px solid rgba(186, 210, 229, 0.3);
          display: flex;
          flex-direction: column;
          padding: 0.4rem;
          box-sizing: border-box;
            .laberType {
                  width: 100%;
                  // width: 5rem;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: space-around;
                  // margin-right: 1rem;
                  text-align: left;
                  .left {
                    width: 100%;
                    font-size: 0.28rem;
                    font-family: "HY65";
                    color: #BAD2E5;        
                  }
                  .right {
                    width: 100%;
                    margin-top: 0.1rem;
                    margin-bottom: 0.4rem;
                  }
              }

        }
      }
      .filter_content {
        overflow-y: scroll;
        height: 16rem;
        .detailBox {
            // height: 3rem;
            position: relative;
            margin-left: 0.25rem;
            margin-top: 0.3rem;
            border-left: 1px dashed #C9E7FF;
          .dot {
                width: 0.48rem;
                height: 0.48rem;
                background: url("../../assets/imgs/common/dot.png");
                background-size: 100% 100%;
                position: absolute;
                top: -0.32rem;
                left: -0.24rem;
              }
          .date {
               position: absolute;
                top: -0.32rem;
                left: 0.24rem;
                padding-left: 0.2rem;
                color: #c9e7ff;            
                font-family: "DINBOLD";
                font-weight: bold;
                font-size: 0.32rem;
                
            }
            .detail {
              padding-left: 0.43rem;
              padding-bottom: 0.36rem;
              display: flex;
              flex-wrap: wrap;
              .detail_box:nth-child(odd){
                  margin-right: 0.7rem;
                }
              .detail_box {
                display: flex;
                flex-direction: column;
                .time {
                  padding-top: 0.26rem;
                  color: #BAD2E5;            
                  font-family: "DINBOLD";
                  font-weight: bold;
                  font-size: 0.28rem;
                }
                .address {
                  padding: 0.2rem 0 0.2rem;
                  font-family: "HY55";
                  font-size: 0.24rem;
                  color: #BAD2E5;
                }
                .img {
                  width: 2.88rem;
                  height: 2rem;
                  background-color: #fff;
                }

              }
            }
          }

        .detailBox:last-child {
                border-left: unset;
          }
      }
    }
  }
}
</style>