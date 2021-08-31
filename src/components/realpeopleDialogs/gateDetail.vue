<template>
  <!--<el-dialog  :visible.sync="dialogVisible" append-to-body>-->
  <div class="gateDetailDialog">
    <!--<div class="gateDetailDialog_title">-->
    <!--西大门主出入口-->
    <!--</div>-->
    <div class="header">
      <div>{{param.e.name}}</div>
      <div><img
          @click="close"
          :src="closeImg"
          alt=""
        /></div>
    </div>
    <div class="gateDetailDialog_content">
      <div class="gateDetailDialog_content_left">
        <div class="doorTab">
          <!-- 自定义tab -->
          <div
            class="tabName"
            v-if="cameraDevices.length>0"
          >
            <div
              class="tabbox"
              v-for="(v,i) in cameraDevices"
              :key="i"
              @click="doTab(i)"
            >{{v.name}}
              <div
                class="active"
                v-show="activeIndex == i"
              ></div>
            </div>
          </div>
          <div
            class="tabName"
            v-else
          ></div>
          <div
            class="video_content"
            v-if="cameraDevices.length>0"
          >
            <player
              :src="tvSrc"
              style="transform: scale(1);transform-origin: 0 0;"
            />
          </div>
          <div
            class="video_content"
            v-else
          >
            暂无设备！
          </div>
        </div>
        <div class="capture">
          <div
            class="middle_ul"
            v-show="capturePhoto"
          >
            <div
              v-show="capturePhoto"
              class="capture_title"
            >实时抓拍</div>
            <ul class="">
              <swiper
                :options="swiperOption"
                ref="mySwiper"
                class="swiper-no-swiping"
              >
                <swiper-slide
                  v-for="(item, index) in imgInfo"
                  :key="index"
                >
                  <li class="swiperLi">
                    <div class="imgBox">
                      <!--:class="{testDiv : isMask === true}"-->
                      <img
                        style="width: 100%;height: 100%"
                        :src="changePic(item.faceUrl)"
                        alt=""
                      >
                    </div>
                  </li>
                </swiper-slide>
              </swiper>
              <div
                class="swiper-button-prev click_left"
                slot="button-prev"
              />
              <div
                class="swiper-button-next click_right"
                slot="button-next"
              />
            </ul>
          </div>
        </div>
      </div>
      <div class="rightTab">
        <el-tabs
          v-model="activeName1"
          @tab-click="handleClick"
        >
          <el-tab-pane
            label="实时通行"
            name="first"
          >
            <div
              class="content_list"
              v-if='activeName1 == "first"'
            >
              <div class="flowDetail_content_p">
                <div
                  v-for="(item, index) in asscessPList"
                  :key="index"
                >
                  <prewarnItem
                    :item='item'
                    type="2"
                  ></prewarnItem>
                </div>
              </div>
              <!-- <div v-else class="flowDetail_content">
                        <div v-for="(item, index) in asscessPList" :key="index" @click="showPass(item)">
                            <prewarnItem :item='item' type="1"></prewarnItem>
                        </div>
                    </div> -->
              <infinite-loading
                spinner="bubbles"
                :distance="distance"
                @infinite="infiniteHandler"
              >
                <!--<div slot="spinner">加载中...</div>-->
                <div slot="no-more">没有更多数据!</div>
                <div slot="no-results">没有更多数据!</div>
              </infinite-loading>
            </div>
          </el-tab-pane>
          <el-tab-pane
            label="人口预警"
            name="second"
          >
            <div
              class="content_list"
              v-if='activeName1 == "second"'
            >
              <div class="flowDetail_content_p">
                <div
                  v-for="(item, index) in asscessPList"
                  :key="index"
                >
                  <prewarnItem
                    :item='item'
                    type="3"
                  ></prewarnItem>
                </div>
              </div>
              <!-- <div v-else class="flowDetail_content">
                        <div v-for="(item, index) in asscessPList" :key="index" @click="showPass(item)">
                            <prewarnItem :item='item' type="1"></prewarnItem>
                        </div>
                    </div> -->
              <infinite-loading
                spinner="bubbles"
                :distance="distance"
                @infinite="infiniteHandler1"
              >
                <!--<div slot="spinner">加载中...</div>-->
                <div slot="no-more">没有更多数据!</div>
                <div slot="no-results">没有更多数据!</div>
              </infinite-loading>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
  <!--</el-dialog>-->
</template>
<script>
import prewarnItem from '../../components/accesslistItem'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { apiNames, videoStream } from '../../Utils/config'
import { Post, PostCopy } from '../../Utils/Http'
import user from '../../Utils/user'
export default {
  name: 'gateDetail',
  data() {
    return {
      closeImg: require('../../assets/imgs/close.png'),
      distance: 100,
      dialogVisible: true,
      click: false,
      activeName: 'second',
      activeName1: 'first',
      capturePhoto: true, // 是否需要八张图片展示
      swiperOption: {
        slidesPerView: 5, slidesPerGroup: 1, spaceBetween: 10, noSwiping: true, speed: 2000,
        /* autoplay: {delay: 2000, stopOnLastSlide: false, disableOnInteraction: false}, */
        //  loop: true, 
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', hideOnClick: false }
      },
      imgInfo: [],
      asscessPList: [],
      pagenum: 1,
      activeIndex: 0,
      cameraDevices: [],
      thingCode: '',
      tvSrc: '',
      ggcode: ''
    }
  },
  props: {
    param: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  components: {
    prewarnItem,
    swiper,
    swiperSlide
  },
  mounted() {
     console.log(this.param.e)
    this.getDevices()
  },
  watch: {
    activeName1() {
      this.pagenum = 1
      this.asscessPList = []
    }
  },
  created() {
    // setTimeout(()=>{ 
    //   console.log(this.param.e)
    //     this.getDevices()
    //  },500)
  },
  methods: {
    changePic(url) {
      if (url) {
        let hostname = window.location.hostname
        let origin = 'http://' + hostname + ':19000'
        let curl = origin + url
        return curl
      }
    },
    doTab(i) {
      this.activeIndex = i
      this.thingCode = this.cameraDevices[i].thingID
      this.getstrema()
      //切视频
    },
    getPic() {
      this.$post(apiNames['实时流量列表'], {
        virtualSpaceCode: this.param.e.superVirtualCode,
        pageNum: 1,
        pageSize: 8,
        thingCode: this.ggcode
      }).then(res => {
        if (res.responseStatus.resultCode === 0) {
          this.imgInfo = res.data
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
    getstrema() {
      let that = this
      let reqParam = user.getRequestHeader()
      reqParam.ID = this.thingCode
      Post({
        async: true,
        url: apiNames['获取流媒体'],
        data: reqParam,
        dataType: 'json',
        success: function (data) {
          if (data.Code === 0) {
            that.tvSrc = 'rtmp://' + videoStream + data.Data.RTMP
          }
        },
        error: function (err) {
          console.log(JSON.stringify(err) + 'popup 获取门禁信息')
        }
      })
    },
    //获取该出入口下的设备
    getDevices() {
      this.$post(apiNames['所有地图撒点'], {
        codes: [this.param.e.code],//获取该空间下的
        usingType: ['6'],//设备
      }).then(res => {
        if (res.responseStatus.resultCode === 0) {
          console.log(res)
          res.data.forEach((item) => {
            if (item.deviceType == 'camera') {
              this.cameraDevices.push(item)
            }
            this.thingCode = this.cameraDevices[0].thingID
            this.ggcode = this.cameraDevices[0].code
            this.getstrema()
            this.getPic()
          })
        } else {
          this.$newthost({
            content: res.data.name
          })
        }
      })
    },
    close() {
      window.pop.close(this.param.level)
    },
    infiniteHandler($state) {
      console.log("触发")
      setTimeout(() => {
        if (!this.thingCode) { $state.complete(); return }
        this.$post(apiNames['地图实时通行'], {
          thingCode: this.thingCode,
          pageNum: this.pagenum,
          pageSize: 10,
        }).then(res => {
          if (res.responseStatus.resultCode === 0) {
            console.log(res)
            let totalPage = parseInt(res.data.totalCount / 10) + 1
            console.log(totalPage)
            console.log(this.pagenum <= totalPage)
            if (this.pagenum <= totalPage) {
              this.asscessPList = this.asscessPList.concat(res.data.result)
              this.pagenum = this.pagenum + 1
              $state.loaded();
            } else {
              $state.complete();
            }
          } else {
            this.$newthost({
              content: res.data.name
            })
          }
        })
      }, 500)
    },
    infiniteHandler1($state) {
      console.log("触发")
      setTimeout(() => {
        if (!this.thingCode) { $state.complete(); return }
        this.$post(apiNames['地图人口预警'], {
          thingCode: this.thingCode,
          pageNum: this.pagenum,
          pageSize: 10,
        }).then(res => {
          if (res.responseStatus.resultCode === 0) {
            console.log(res)
            let totalPage = parseInt(res.data.totalCount / 10) + 1
            console.log(totalPage)
            console.log(this.pagenum <= totalPage)
            if (this.pagenum <= totalPage) {
              this.asscessPList = this.asscessPList.concat(res.data.result)
              this.pagenum = this.pagenum + 1
              $state.loaded();
            } else {
              $state.complete();
            }
          } else {
            this.$newthost({
              content: res.data.name
            })
          }
        })
      }, 500)
    },
  }
}
</script>
<style lang="scss">
.el-dialog {
  width: 23.2rem;
  // height: 15.4rem;
  background: linear-gradient(320deg, #080c18 0%, #011f41 100%);
  box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
  border: 1px solid;
  border-image: linear-gradient(
      139deg,
      rgba(83, 140, 206, 1),
      rgba(5, 77, 125, 1)
    )
    1 1;
  .el-dialog__headerbtn {
    font-size: 0.5rem;
  }
}
.el-dialog__header {
  padding-top: 0.2rem !important;
}
.el-dialog__body {
  //  background-color: rgba(0, 0, 0, 0.1) !important;
  padding: 0.5rem 0.6rem 0;
}

.gateDetailDialog {
  .doorTab {
    .el-tabs__content {
      height: 8rem;
      background-color: pink;
    }
  }
  .el-tabs__nav-wrap::after {
    width: 0;
  }
  .el-tabs__active-bar {
    width: 0.6rem !important;
    background-color: #00f9fc;
    left: 0.34rem;
  }
  .el-tabs__item {
    color: rgba(201, 231, 255, 0.6);
    font-family: 'HY65';
    font-size: 0.32rem;
  }
  .el-tabs__item.is-active {
    color: #00f9fc;
  }
  .rightTab {
    .el-tabs__content {
      // background-color: rgb(193, 192, 255);
    }
  }
}
</style>
<style lang="scss" scoped>
.gateDetailDialog {
  width: 23.2rem;
  background: linear-gradient(320deg, #080c18 0%, #011f41 100%);
  box-shadow: 0px 0px 0.12rem 0.12rem rgba(74, 144, 226, 0.35);
  border: 1px solid;
  border-image: linear-gradient(
      139deg,
      rgba(83, 140, 206, 1),
      rgba(5, 77, 125, 1)
    )
    1 1;
  padding: 0 0.4rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .header {
    display: flex;
    padding: 0.34rem 0 0 0;
    justify-content: space-between;
    div {
      font-size: 0.36rem;
      font-family: HYQiHei-GES, HYQiHei;
      color: #ffffff;
    }
    img {
      width: 0.36rem;
      height: 0.36rem;
      cursor: pointer;
    }
  }
  .gateDetailDialog_title {
    position: absolute;
    top: -0.6rem;
    left: -0.3rem;
    font-size: 0.36rem;
    font-family: 'HY75';
    color: #ffffff;
    margin-right: 0.6rem;
  }
  .gateDetailDialog_content {
    display: flex;
    flex-direction: row;
    padding-top: 0.3rem;
    .gateDetailDialog_content_left {
      width: 13.8rem;
      .doorTab {
        .tabName {
          height: 1rem;
          display: flex;
          margin-bottom: 0.2rem;
          .tabbox {
            position: relative;
            width: 4rem;
            line-height: 1rem;
            .active {
              position: absolute;
              bottom: 0.1rem;
              left: 0.5rem;
              width: 3rem;
              height: 2px;
              background-color: #00f9fc;
            }
          }
        }
        .video_content {
          height: 8rem;
          display: flex;
          background: #040613;
          border: 1px solid rgba(201, 231, 255, 0.2);
          justify-content: center;
          align-items: center;
        }
      }
      .capture {
        .middle_ul {
          position: relative;
          width: 100%;
          height: 4rem;
          box-sizing: border-box;
          padding: 0 0.1rem;
          margin-top: 0.16rem;
          overflow: hidden;
          // background: url("../../assets/imgs/buttonBg.png") no-repeat center;
          background-size: 100% 100%;
          .swiperLi {
            .imgBox {
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
          padding: 0 0.5rem;
        }

        .middle_ul ul li {
          height: 2.3rem;
          width: 2.25rem;
          box-sizing: border-box;
          padding-left: 0.28rem;
          float: left;
          margin-right: 0.2rem;
          position: relative;
        }
        .middle_ul ul li .ul_time {
          position: absolute;
          text-align: center;
          font-size: 0.28rem;
          bottom: 0rem;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          line-height: 0.5rem;
          background: rgba(0, 0, 0, 0.3);
          color: #dcf6ff;
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
          width: 0.28rem;
          height: 0.9rem;
          line-height: 0.36rem;
          text-align: center;
          display: inline-block;
          font-size: 0.24rem;
          color: #ffffff;
          background: #348bd5;
          background: linear-gradient(135deg, transparent 0.08rem, #348bd5 0);
          position: absolute;
          top: 0.04rem;
          left: 0;
          box-sizing: border-box;
          padding-top: 0.1rem;
        }

        .middle_ul .click_left {
          display: inline-block;
          position: absolute;
          left: 0;
          top: 60%;
          border: none;
          transform: translateY(-50%);
          height: 1.2rem;
          width: 0.6rem;
          outline-style: none;
          margin-top: 0 !important;
        }
        .middle_ul .click_right {
          display: inline-block;
          position: absolute;
          right: 0;
          top: 60%;
          height: 1.2rem;
          width: 0.6rem;
          border: none;
          outline-style: none;
          transform: translateY(-50%) scale(-1);
          margin-top: 0 !important;
        }
        .swiper-button-prev,
        .swiper-container-rtl .swiper-button-next {
          /*background: url("../../../assets/images/left_buttom.svg") no-repeat left center;*/
          background: url('../../assets/imgs/leftButton.png') no-repeat left
            center;
          background-size: 100% 100%;
        }
        .swiper-button-prev:hover,
        .swiper-container-rtl .swiper-button-next {
          /*background: url("../../../assets/images/left_buttom.svg") no-repeat left center;*/
          background: url('../../assets/imgs/leftButton_active.png') no-repeat
            left center;
          background-size: 100% 100%;
          transform: translateY(-50%) scale(-1);
        }
        .swiper-button-next,
        .swiper-container-rtl .swiper-button-prev {
          background: url('../../assets/imgs/leftButton.png') no-repeat left
            center;
          background-size: 100% 100%;
        }
        .swiper-button-next:hover,
        .swiper-container-rtl .swiper-button-prev {
          background: url('../../assets/imgs/leftButton_active.png') no-repeat
            left center;
          background-size: 100% 100%;
          transform: translateY(-50%) scale(1);
        }

        // width: 13.8rem;

        // position: relative;
        // text-align: left;

        .capture_title {
          font-family: 'HY65';
          color: #00f9fc;
          font-size: 0.32rem;
          // height: 1.44rem;
          // line-height: 1.44rem;
          padding: 0.44rem 0;
          text-align: left;
        }
        .more {
          float: right;
          position: relative;
          padding-right: 0.2rem;
          padding-top: 0.44rem;
          font-family: 'HY55';
          color: #c9e7ff;
          font-size: 0.28rem;

          .moreLogo {
            position: absolute;
            left: 0.68rem;
            bottom: 0.09rem;
            display: inline-block;
            width: 0.2rem;
            height: 0.2rem;
            background: url('../../assets/imgs/common/more.png');
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
      .content_list {
        height: 12.5rem;
        overflow-y: scroll;
      }
    }
  }
}
</style>