<template>
 <el-dialog :visible.sync="dialogVisible" :width="realWidth" append-to-body>
  <div class="groupRentDialog" v-if='alarmType == "ysqz_lxtx"'>
     <div class="groupRentDialog_title">
        {{roomInfo.alarmTypeName}}
     </div>   
    <div class="groupRentDialog_content" >
      <div class="groupRentDialog_content_info">
          <div class="info_item"><span class="info_name">小区名称：</span>{{roomInfo.virtualSpaceName}}</div>
          <div class="info_item"><span class="info_name">房屋信息：</span>{{roomInfo.address}}</div>
          <div class="info_item"><span class="info_name">预警时间：</span>{{roomInfo.alarmTime}}</div>
      </div>
      <div class="groupRentDialog_content_tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="通行记录" name="first">
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  width="100"
                  label="通行方式">
                </el-table-column>
                <el-table-column
                  prop="name"
                  width="70"
                  label="进/出">
                </el-table-column>
                <el-table-column
                  width="120"
                  prop="address"
                  label="通行位置">
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="通行时间">
                </el-table-column>
              </el-table>            
          </el-tab-pane>
          <el-tab-pane label="房屋详情" name="second">
            <div class="nodata" v-if='houseDList.length == 0' style="text-align: center;padding-top: 0.2rem;">暂无房屋详情记录!</div>
            <div class="houseDetail_content">
              <div v-for="(item, index) in houseDList" :key="index" class="houseDList_item">
                <detailItem :item='item'></detailItem>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
  <div class="groupRentDialog" v-if='alarmType == "yskz_lxtx"'>
     <div class="groupRentDialog_title">
        {{roomInfo.alarmTypeName}}
     </div>   
    <div class="groupRentDialog_content" >
      <div class="groupRentDialog_content_info">
          <div class="info_item"><span class="info_name">小区名称：</span>{{roomInfo.virtualSpaceName}}</div>
          <div class="info_item"><span class="info_name">房屋信息：</span>{{roomInfo.address}}</div>
          <div class="info_item"><span class="info_name">预警时间：</span>{{roomInfo.alarmTime}}</div>
      </div>
      <div class="groupRentDialog_content_tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="通行记录" name="first">
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  width="100"
                  label="通行方式">
                </el-table-column>
                <el-table-column
                  prop="name"
                  width="70"
                  label="进/出">
                </el-table-column>
                <el-table-column
                  width="120"
                  prop="address"
                  label="通行位置">
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="通行时间">
                </el-table-column>
              </el-table>            
          </el-tab-pane>
          <el-tab-pane label="房屋详情" name="second">
            <div class="nodata" v-if='houseDList.length == 0' style="text-align: center;padding-top: 0.2rem;">暂无房屋详情记录!</div>
            <div class="houseDetail_content">
              <div v-for="(item, index) in houseDList" :key="index" class="houseDList_item">
                <detailItem :item='item'></detailItem>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
  <div class="gateDetailDialog" v-if='alarmType == "doorOpen"'>
     <div class="gateDetailDialog_title">
        {{roomInfo.alarmTypeName}}
     </div>   
    <div class="gateDetailDialog_content">
      <div class="gateDetailDialog_content_left">
        <div class="groupRentDialog_content_info">
          <div class="info_item"><span class="info_name">小区名称：</span>{{roomInfo.virtualSpaceName}}</div>
          <div class="info_item"><span class="info_name">房屋信息：</span>{{roomInfo.address}}</div>
          <div class="info_item"><span class="info_name">预警时间：</span>{{formatDate(roomInfo.alarmTime,'MM.dd HH:mm:ss')}}</div>
        </div>
        <div class="doorTab">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="大门入口" name="first">
                <player
                    :src="tvSrc"
                />
            </el-tab-pane>
            <el-tab-pane label="大门出口" name="second">
                <player
                    :src="tvSrc"
                />
            </el-tab-pane>
          </el-tabs>
          <div class="videoTip">
            30s视频
          </div>
        </div>
        <div class="capture">
          <!-- <div>
            <div class="more">更多<span class="moreLogo"></span></div>
            <div class="capture_title">实时抓拍</div>
          </div>
          <div class="picItem">
            <div v-for="(item, index) in 5" :key="index" class="dataItem">
              1
            </div>
          </div> -->
            <div
              class="middle_ul"
              v-show="capturePhoto">
              <div v-show="capturePhoto"  class="capture_title">实时抓拍</div>
              <ul class="">
                <swiper
                  :options="swiperOption"
                  ref="mySwiper"
                  class="swiper-no-swiping">
                  <swiper-slide
                    v-for="item in imgInfo"
                    :key="item.id">
                    <li class="swiperLi">
                      <div class="imgBox">   
                          <img
                            :class="{testDiv : isMask === true}"
                            :src="item.Pic"
                            alt="">
                      </div>
                    </li>
                  </swiper-slide>
                </swiper>
                <div
                  class="swiper-button-prev click_left"
                  slot="button-prev"/>
                <div
                  class="swiper-button-next click_right"
                  slot="button-next"/>
              </ul>
            </div>
        </div>
      </div>
      <div class="rightTab">
        <div class="title">今日通行记录</div>
          <div class="content_list">
          <div class="nodata" v-if='accessTList.length == 0' style="text-align: center;padding-top: 2rem;">暂无今日通行记录!</div>
          <div class="flowDetail_content" id='access_'>
            <div v-for="(item, index) in accessTList" :key="index">
              <prewarnItem :item='item' :type='1'></prewarnItem>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
 </el-dialog>
</template>
<script>

import prewarnItem from '../../components/accesslistItem'
import detailItem from './detailItem'
import { apiNames } from '../../Utils/config'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import '../../assets/css/swiper.min.css'
export default {
  name: 'groupRentDialog',

  data () {
    return {
     dialogVisible: false,
     click: true,
     activeName: 'first',
     houseDList:[],
     tableData: [],
      alarmType: '',
      roomInfo: {},
      accessTList: [],//今日通行记录
      houseCode: '',
      isCanGo: true,
      pagenum: 1,
      tvSrc: '',//视频流地址
      swiperOption: {slidesPerView: 5, slidesPerGroup: 1, spaceBetween: 10, noSwiping: true, speed: 2000, 
      /* autoplay: {delay: 2000, stopOnLastSlide: false, disableOnInteraction: false}, */
      //  loop: true, 
      navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', hideOnClick: false}
      },
      imgInfo: [],
      capturePhoto: true, // 是否需要八张图片展示
      isMask: true,
    }
  },
  components: {
    prewarnItem,
    detailItem,
    swiper,
    swiperSlide
  },
  mounted () {
    this.$bus.on('groupRent', (item) => {
    this.dialogVisible = true
    this.houseCode = item.spaceCode
    this.alarmType = item.alarmType
    this.roomInfo = item
    this.pagenum = 1
    this.activeName = 'first'
    this.getAccess()
    console.log(item,111111111111)
      if(this.alarmType == "doorOpen"){
        setTimeout(()=>{ 
        this.scroll()
          },500) 
      }
    })
  },
  created() {
  },
  computed: {
    realWidth: function () {
      return this.alarmType == "doorOpen" ? '23rem' : '17rem' 
    },
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
      //无限滚动
    scroll() {
      let that = this
       var scrolldiv=document.getElementById("access_");
      //监听滚动事件，当滚动条的位置距离小于某个值的时候，就加载数据
       scrolldiv.addEventListener('scroll',function(){
         if(scrolldiv.scrollHeight-scrolldiv.scrollTop < 750){
         console.log(scrolldiv.scrollHeight,scrolldiv.scrollTop)
         if(that.isCanGo){           
                that.loadData();
              }
            }
        })
    },
    //加载数据函数
    loadData() {
      this.pagenum++
      this.getAccess()
      this.isCanGo = false
    }, 
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    getAccess() {
      this.$post(apiNames['房屋今日通行记录'],{
        houseCode: this.houseCode,
        pageNum: this.pagenum,
        pageSize: 10,
      }).then(res=> {
        if (res.responseStatus.resultCode === 0) { 
              this.isCanGo = true
              if(res.data.length>0) {

                this.accessTList = this.accessTList.concat(res.data)
              }

            } else {
              this.$newthost({
                  content: res.data.name
                })    
            }
      })  
    },  
    handleClick() {
        // console.log(tab, event);
      },
  },
  beforeDestroy () {
    this.$bus.off('groupRent')//移出监听
  }
}
</script>
<style lang="scss">
.el-dialog {
  // width: 17rem;
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
.groupRentDialog {
  .el-tabs__content{
    // height: 2rem;
    // background-color: pink;
  }
  .el-tabs__nav-wrap::after {
    width: 0;
  }
  .el-tabs__active-bar{
    // width: 1.2rem!important;
    // background-color: #00F9FC;
    background: -webkit-linear-gradient(left, rgba(136, 243, 226, 0) -4%, #6cebd2 50%, rgba(96, 231, 203, 0.57) 80%, rgba(80, 227, 194, 0) 100%);
    left: 0rem;
  }
  .el-tabs__item {
    color: rgba(201, 231, 255, 0.6);
    font-family: "HY65";
    font-size: 0.32rem; 
  }
  .el-tabs__item.is-active{
    color: #00F9FC;
  }
}
.groupRentDialog_content_tab{
  table {
    border-collapse: collapse!important;
  }
  .el-table, .el-table__expanded-cell {
        background-color: transparent!important;
    }
  .el-table tr {
    border: 0!important;
    background-color: transparent!important;
    }
  thead {
   
    th {
      background-color: #4E6583!important;
      height: 0.56rem;
      box-sizing: border-box;
      padding: 0;
      font-family: "HY65";
      font-size: 0.28rem;
      color: #C9E7FF;
    }
  }
  tbody {
    tr {
      td {
       padding: 0.22rem 0 0 0;
       font-family: "HY55";
       font-size: 0.28rem;
       color: #C9E7FF;
      }
      :nth-child(4){
       font-family: "DINBOLD";
       font-size: 0.28rem;
      }
    }
    .el-table__row {
      border-bottom: 1px solid rgba(201,231,255,0.2) !important;
    }
    .el-table__row:last-child {
      border-bottom: none!important;
    }
  }
  .el-table td, .el-table th.is-leaf {
    border-bottom: none;
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color:rgb(0, 12, 46) !important;
    }
}
.gateDetailDialog{
  .doorTab {
    .el-tabs__content{
      height: 8rem;
      background-color: #040613;
      padding: 0.3rem;
      box-sizing: border-box;
    }
  }
  .el-tabs__nav-wrap::after {
    width: 0;
  }
  .el-tabs__active-bar{
    // width: 0.6rem!important;
    background: -webkit-linear-gradient(left, rgba(136, 243, 226, 0) -4%, #6cebd2 50%, rgba(96, 231, 203, 0.57) 80%, rgba(80, 227, 194, 0) 100%);
    left: 0rem;
  }
  .el-tabs__item {
    color: rgba(201, 231, 255, 0.6);
    font-family: "HY65";
    font-size: 0.32rem; 
  }
  .el-tabs__item.is-active{
    color: #00F9FC;
  }
  .rightTab {
    .el-tabs__content{
   
    // background-color: rgb(193, 192, 255);
  }
  }
}

</style>
<style lang="scss" scoped>
.groupRentDialog {
  position: relative;

    .groupRentDialog_title {
      position: absolute;
      top: -0.6rem;
      left: -0.2rem;
      font-size: 0.36rem;
      font-family: "HY75";
      color: #FFFFFF;
      margin-right: 0.6rem;
    }
  .groupRentDialog_content{
    .groupRentDialog_content_info{
      display: flex;
     justify-content: space-between;
      // .info_laber {
      //   margin-left: 0.6rem;
      //   color: #FF9999;
      //   font-size: 0.24rem;
      // }
      .info_item{
        // width: 5rem;
        text-align: left;
        padding: 0.3rem 0;
        font-size: 0.32rem;
        font-family: "HY55";
        color: #C9E7FF;        
        .info_name {
          display: inline-block;
          // width: 1.4rem;
          text-align:justify;
          text-align-last:justify;
        }

      }
      // div:nth-child(even){
      //   padding-left: 0.6rem;
      // }
    }

    .groupRentDialog_content_tab {
      .el-tabs__content {
              height: 5rem;
              overflow-y: scroll;     
      }
       .container{
              width: 100%;
              // height: 3.2rem;
              display: flex;
              flex-wrap: wrap;
              overflow-y: scroll;
              .itemBox {
                width: 7.3rem;
              }
            }
            .houseDetail_content {
              display: flex;
              flex-wrap: wrap;
              height: 5rem;
              overflow-y: scroll;
              .houseDList_item {
                width: 7.3rem;
              &:nth-child(odd) {
                margin-right: 0.5rem;
              }
              }
            }
    }
  }

}
.gateDetailDialog {
    position: relative;
  .doorTab {
    position: relative;
    .videoTip{
      position: absolute;
      right: 0;
      top: 0.5rem;
      font-size: 0.24rem;
      font-family: "HY55";
      color: #00F9FC;
      text-decoration: underline;
    }
  }
    .gateDetailDialog_title {
      position: absolute;
      top: -0.6rem;
      left: -0.3rem;
      font-size: 0.36rem;
      font-family: "HY75";
      color: #FFFFFF;
      margin-right: 0.6rem;
    }
    .gateDetailDialog_content {
      display: flex;
      flex-direction: row;
      padding-top: 0.3rem;
      .gateDetailDialog_content_left {
        width: 13.8rem;
      .groupRentDialog_content_info{
          display: flex;
        justify-content: space-between;
          // .info_laber {
          //   margin-left: 0.6rem;
          //   color: #FF9999;
          //   font-size: 0.24rem;
          // }
          .info_item{
            // width: 5rem;
            text-align: left;
            padding: 0.3rem 0;
            font-size: 0.32rem;
            font-family: "HY55";
            color: #C9E7FF;        
            .info_name {
              display: inline-block;
              // width: 1.4rem;
              text-align:justify;
              text-align-last:justify;
            }

          }
      // div:nth-child(even){
      //   padding-left: 0.6rem;
      // }
    }
        .capture {
          .middle_ul {
            position: relative;
            width: 100%;
            height: 4rem;
            box-sizing: border-box;
            padding: 0 .1rem;
            margin-top: .16rem;
            overflow: hidden;
            // background: url("../../assets/imgs/buttonBg.png") no-repeat center;
            background-size: 100% 100%;
            .swiperLi {
              .imgBox  {
                  width: 100%;
                  height: 100%;
                  box-sizing: border-box;
                  background: #000;
                  padding: 0.1rem;
              }
            }
          }

          .middle_ul ul {
            box-sizing: border-box;
            padding: 0 .5rem;
          }

          .middle_ul ul li {
            height: 2.3rem;
            width: 2.25rem;
            box-sizing: border-box;
            padding-left: .28rem;
            float: left;
            margin-right: .2rem;
            position: relative;
          }
          .middle_ul ul li .ul_time{
            position: absolute;
            text-align: center;
            font-size: .28rem;
            bottom: 0rem;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            line-height: .5rem;
            background: rgba(0, 0, 0, .3);
            color: #DCF6FF;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          // .middle_ul ul li img {
          //   width: 95%;
          //   height: 95%;
          //   margin: 2.5% auto;
          // }

          .middle_ul ul li span {
            width: .28rem;
            height: .9rem;
            line-height: .36rem;
            text-align: center;
            display: inline-block;
            font-size: .24rem;
            color: #ffffff;
            background: #348bd5;
            background: linear-gradient(135deg, transparent .08rem, #348bd5 0);
            position: absolute;
            top: .04rem;
            left: 0;
            box-sizing: border-box;
            padding-top: .1rem;
          }

          .middle_ul .click_left {
            display: inline-block;
            position: absolute;
            left: 0;
            top: 60%;
            border: none;
            transform: translateY(-50%);
            height: 1.2rem;
            width: .6rem;
            outline-style: none;
            margin-top: 0 !important;
          }
          .middle_ul .click_right {
            display: inline-block;
            position: absolute;
            right: 0;
            top: 60%;
            height: 1.2rem;
            width: .6rem;
            border: none;
            outline-style: none;
            transform: translateY(-50%) scale(-1);
            margin-top: 0 !important;
          }
          .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
            /*background: url("../../../assets/images/left_buttom.svg") no-repeat left center;*/
            background: url("../../assets/imgs/leftButton.png") no-repeat left center;
            background-size: 100% 100%;
          }
          .swiper-button-prev:hover, .swiper-container-rtl .swiper-button-next{
            /*background: url("../../../assets/images/left_buttom.svg") no-repeat left center;*/
            background: url("../../assets/imgs/leftButton_active.png") no-repeat left center;
            background-size: 100% 100%;
            transform: translateY(-50%) scale(-1);
          }
          .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
            background: url("../../assets/imgs/leftButton.png") no-repeat left center;
            background-size: 100% 100%;
          }
          .swiper-button-next:hover, .swiper-container-rtl .swiper-button-prev {
            background: url("../../assets/imgs/leftButton_active.png") no-repeat left center;
            background-size: 100% 100%;
            transform: translateY(-50%) scale(1);
          }

          // width: 13.8rem;
    
          // position: relative;
          // text-align: left;

          .capture_title {
            font-family: "HY65";
            color: #00F9FC;   
            font-size: 0.32rem;  
            // height: 1.44rem;
            // line-height: 1.44rem;
            padding: 0.44rem 0;      
            }
          .more {
            float: right;
            position: relative;
            padding-right: 0.2rem;
            padding-top: 0.44rem;
            font-family: "HY55";
            color: #C9E7FF;   
            font-size: 0.28rem;  
            
            .moreLogo {
              position: absolute;
               left: 0.68rem;
               bottom: 0.09rem;
               display: inline-block;
               width: 0.2rem;
               height: 0.2rem;
               background: url("../../assets/imgs/common/more.png");
               background-size: 100% 100%;
            }
            
          }

          .picItem {
            display: flex;
            .dataItem {
              width: 2.4rem;
              height: 3.1rem;
              background-color: blue;
              margin-right: 0.46rem;
              border: 1px solid rgba(201, 231, 255, 0.2);
            }
          }
        }
      }

      .rightTab {
        width: 7.4rem;
        margin-left: 0.5rem;
        .title {
            color: #00F9FC;
            font-size: 0.32rem;
            font-family: "HY65";
        }
        .content_list {
          height: 13.8rem;
          // overflow-y: scroll;
          .flowDetail_content{
              margin-top: 0.3rem;
              height: 13.8rem;
              overflow-y: scroll;
          }
        }
      }

    }
  }
</style>