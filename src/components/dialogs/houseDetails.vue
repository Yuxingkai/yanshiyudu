<template>
  <div class="houseDetails">
    <div class="header">
      <div>{{ Houses.name }}</div>
      <div><img @click="close" :src="closeImg" alt="" /></div>
    </div>
    <div class="overlook">
      
      <div v-for="(item, index) in nameAndNum" :key="index" class="overlook_item">
        <span class="text">{{ item.name }}：</span
        ><span style="font-size: 0.56rem" :class="gernerateColor(index)"
          >{{ item.num }}</span
        >
      </div>
    </div>
    <div class="Info">
      <div class="left">
        <div class="titleClass">房屋列表</div>
        <div class="left_content">
          <div v-if="Houses.picUrl" class="points">
            <span>自住</span>
            <span>出租</span>
            <span>空置</span>
          </div>
          <div v-if="Houses.picUrl" class="imgClass">
            <img :src="changePic(Houses.picUrl)" alt="">
          </div>
          <div class="houseList" :style="{height: Houses.picUrl ? '40%' : '100%'}">
            <div style="position: relative" :class="[nowIndex === index ? 'activeClass' : 'unactive']" @click.stop="chooseHouse(index, item.code)" v-for="(item, index) in Houses.houses" :key="index">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="titleClass">房屋详情</div>
        <div class="right_content">
          <div class="legend">
            <div class="legend_item">
              <span class="legend_logo1"></span><span class="legend_title">总人数 </span><span class="legend_num">{{ peoplesObj.totalCount }}</span>
            </div>
            <div class="legend_item">
              <span class="legend_logo2"></span><span class="legend_title">党员人数 </span><span class="legend_num">{{ Houses.dangyuanCount }}</span>
            </div>
            <div class="legend_item legend_item2">
              <span class="legend_logo3"></span><span class="legend_title">重点人员 </span><span class="legend_num">{{ Houses.zhongdianCount }}</span>
            </div>
            <div class="legend_item legend_item3">
              <span class="legend_logo4"></span><span class="legend_title">关爱人员 </span><span class="legend_num">{{ Houses.guanaiCount }}</span>
            </div>
          </div>
          <div class="peopleList">
            <div v-for="(item, index) in peoplesObj.peoples" :key="index" class='prewarnItem_'>
              <div class="prewarnItem_pic" :style="{backgroundImage: 'url(' + (item.idPic ? changePic(item.idPic) : baseImg) + ')', backgroundSize: 'contain'}">
                <!--<span class="camera"></span>-->
              </div>
              <div class="prewarnItem_info">
                <div>
                  <span class="prewarnItem_info_name">{{ item.peopleName }}</span>
                  <span class="prewarnItem_info_belong">{{ item.gender }}/{{ item.age }}岁/{{ item.spaceOwnerRelation }}</span>
                  <span @click.stop="onepeople(item)" style="margin-left: .7rem;font-size: .24rem;font-family: HYQiHei-EES, HYQiHei;color: #00F9FC;text-decoration: underline" class="prewarnItem_info_belong">一人一档</span>
                </div>
                <div style="display:flex;padding-top: 0.14rem;">
                  <span class="prewarnItem_info_address">人员标签：</span><span class="prewarnItem_info_address">{{ item.labelName }}</span>
                </div>
                <div style="display:flex;padding-top: 0.14rem;">
                  <span class="prewarnItem_info_tel">{{ item.phoneNo }}</span>
                </div>
                <div style="display:flex;padding-top: 0.14rem;">
                  <span class="prewarnItem_info_laber">最近通行时间</span>
                  <span class="prewarnItem_info_time" style="flex:1;text-align: right;padding-right: 0.24rem;">{{ item.maxOpenTime }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 一人一档弹框 -->
    <eachProfileDialog />
  </div>
</template>
<script>
// import pop from '../popupContainer'
import { apiNames } from '../../Utils/config'
import eachProfileDialog from '../realpeopleDialogs/eachProfile'
export default {
  name: 'houseDetails',
  props: {
    param: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      dialogVisible: true,
      closeImg: require('../../assets/imgs/close.png'),
      nowIndex: 0,
      Houses: {},
      buildHouses: [],
      nameAndNum: [
        {
          name: '总户数',
          num: 0
        },
        {
          name: '总人数',
          num: 0
        },
        {
          name: '重点人员',
          num: 0
        },
        {
          name: '关爱人员',
          num: 0
        },
        {
          name: '出租房',
          num: 0
        },
        {
          name: '空置房',
          num: 0
        }
      ],
      peoplesObj: {},
      baseImg: '',
      houseCode: 0,
      isShowQJT: false,
    }
  },
  components: {
    eachProfileDialog
  },
  mounted() {
    this.getHousesByBuildingCode()
  },
  computed: {},
  methods: {

    changePic (url) {
      if (url) {
        let hostname = window.location.hostname
        let origin = 'http://' + hostname + ':19000'
        let curl = origin + url
        return curl
      }
    },
    onepeople (e) {
      this.$bus.$emit('eachProfileDialog',e)
      // this.close()
    },
    getHousesByBuildingCode () {
      let param = {
        buildingCode: this.param.e.code,
      }
      this.$post(apiNames['获取楼栋下的房屋信息'],param).then(res=> {
        if (res.responseStatus.resultCode === 0) {
          this.Houses = res.data
          if (res.data.houses&&res.data.houses.length != 0) {
            this.buildHouses = res.data.houses
            this.houseCode = this.buildHouses[0].code
            this.getHousePeoples()
          }
          this.nameAndNum = [
            {
              name: '总户数',
              num: res.data.totalHouseCount
            },
            {
              name: '总人数',
              num: res.data.totalPeopleCount
            },
            {
              name: '重点人员',
              num: res.data.zhongdianCount
            },
            {
              name: '关爱人员',
              num: res.data.guanaiCount
            },
            {
              name: '出租房',
              num: res.data.rentCount
            },
            {
              name: '空置房',
              num: res.data.freeCount
            }
          ]
        }
      })
    },
    getHousePeoples () {
      let param = {
        houseCode: this.houseCode,
      }
      this.$post(apiNames['获取房屋人员信息'],param).then(res=> {
        if (res.responseStatus.resultCode === 0) {
          this.peoplesObj = res.data
        }
      })
    },
    close() {
     //父元素关闭
     this.$emit('close',false)
    },
    gernerateColor(index) {
      return 'color' + (index + 1)
    },
    handleClick() {
      // console.log(tab, event);
    },
    chooseHouse (index) {
      this.nowIndex = index
      this.houseCode = this.buildHouses[index].code
      this.getHousePeoples()
    }
  },
}
</script>
<style lang="scss" scoped>
.houseDetails {
  width: 33.4rem;
  height: 90%;
  background: linear-gradient(320deg, #080c18 0%, #011f41 100%);
  box-shadow: 0px 0px 0.12rem 0.12rem rgba(74, 144, 226, 0.35);
  border: 1px solid;
  border-image: linear-gradient(
      139deg,
      rgba(83, 140, 206, 1),
      rgba(5, 77, 125, 1)
    )
    1 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .header {
    display: flex;
    padding: 0.34rem 0.46rem 0 0.46rem;
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
  .overlook {
    display: flex;
    flex-direction: row;
    font-size: 0.24rem;
    padding-bottom: 0.74rem;
    margin-left: 0.74rem;
    margin-top: 0.6rem;
    position: relative;
    .quanjintu {
      position: absolute;
      right: 0.74rem;
      top: 0.2rem;
      width: 1.66rem;
      height: 0.56rem;
      line-height: 0.56rem;
      text-align: center;
      color: #1679D4;
      background: rgba(22, 121, 212, 0.3);
      border: 1px solid #51CFFF;
      font-family: 'HY55';
      font-size: 0.24rem;
      box-sizing: border-box;
      cursor: pointer;
    }
    .overlook_item {
      margin-right: 0.9rem;
      .text {
        color: #c9e7ff;
        font-family: 'HY55';
        font-size: 0.28rem;
      }
      .color1 {
        font-family: 'DINBOLD';
        color: #ff5b71;
      }
      .color2,
      .color6 {
        font-family: 'DINBOLD';
        color: #90fca7;
      }
      .color3,
      .color7 {
        font-family: 'DINBOLD';
        color: #d5caff;
      }
      .color4 {
        font-family: 'DINBOLD';
        color: #ffd78a;
      }
      .color5 {
        font-family: 'DINBOLD';
        color: #dcf6ff;
      }
    }
  }
  .panorama {
    width: calc(100% - 1.48rem);
    height: calc(85% - .74rem);
    padding: 0 .74rem .74rem .74rem
  }
  .Info {
    display: flex;
    width: calc(100% - 1.48rem);
    height: calc(90% - 2.38rem);
    padding: 0 0.74rem;
    justify-content: space-between;
    .titleClass {
      text-align: left;
      font-size: 0.32rem;
      font-family: HYQiHei-FES, HYQiHei;
      color: #00f9fc;
      margin-bottom: 0.16rem;
    }
    .left {
      width: 6.46rem;
      height: 100%;
      .left_content {
        background: #06142c;
        height: 100%;
        .houseList {
          text-align: left;
          position: relative;
          overflow-y: scroll;
          margin-top: 3%;
          .unactive {
            cursor: pointer;
            width: 6.46rem;
            height: .92rem;
            background: #0D1D3C;
            line-height: .92rem;
            text-indent: .8rem;
            font-size: .28rem;
            font-family: HYQiHei-EES, HYQiHei;
            color: #00F9FA;
          }
          .activeClass {
            width: 320px;
            height: 46px;
            border-left: 3px solid #00F9FC;
            background: rgba(22, 121, 212, 0.3);
            line-height: .92rem;
            text-indent: .75rem;
            font-size: .28rem;
            font-family: HYQiHei-EES, HYQiHei;
            color: #00F9FA;
          }
          .activeClass:before {
            position: absolute;
            width: .4rem;
            height: .4rem;
            content: '';
            background-image: url("../../assets/imgs/houseIcon.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            left: .2rem;
            top: .22rem;
          }
          .unactive:before {
            position: absolute;
            width: .4rem;
            height: .4rem;
            content: '';
            background-image: url("../../assets/imgs/houseIcon.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            left: .26rem;
            top: .22rem;
          }
        }
        .imgClass {
          width: 80%;
          height: 50%;
          margin-left: 10%;
          margin-top: .4rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .points {
          text-align: left;
          margin-left: .8rem;
          padding-top: .32rem;
          span {
            position: relative;
            margin-right: .5rem;
            font-size: .28rem;
            font-family: HYQiHei-EES, HYQiHei;
            color: #C9E7FF;
          }
          span:before{
            content: '';
            width: .16rem;
            height: .16rem;
            border-radius: 50%;
            position: absolute;
            left: -.24rem;
            top: .1rem;
          }
          span:nth-child(1):before{
            background: #1679D4;
          }
          span:nth-child(2):before{
            background: #D5CAFF;
          }
          span:nth-child(3):before{
            background: #FFD78A;
          }
        }
      }
    }
    .right {
      width: 24.6rem;
      .right_content {
        background: #06142c;
        height: 100%;
        padding-top: .46rem;
        .legend {
          display: flex;
          flex-wrap: wrap;
          margin-left: .86rem;
          .legend_item {
            width: 4rem;
            color: #C9E7FF;
            display: flex;
            align-items: center;
            margin-bottom: 0.2rem;
            .legend_title {
              font-family: "HY55";
              font-size: 0.28rem;
              margin-left: 0.05rem;
              margin-right: 0.12rem;
            }
            .legend_num {
              font-family: "DINBOLD";
              font-size: 0.48rem;
              font-weight: bold;
              margin-left: .56rem;
            }
            .legend_logo1 {
              display: inline-block;
              width: 0.28rem;
              height: 0.28rem;
              background: url("../../assets/imgs/realhouse/all_people.png");
              background-size: 100% 100%;
            }
            .legend_logo2 {
              display: inline-block;
              width: 0.28rem;
              height: 0.28rem;
              background: url("../../assets/imgs/realhouse/china_party.png");
              background-size: 100% 100%;
            }
            .legend_logo3 {
              display: inline-block;
              width: 0.28rem;
              height: 0.28rem;
              background: url("../../assets/imgs/realhouse/i_people.png");
              background-size: 100% 100%;
            }
            .legend_logo4 {
              display: inline-block;
              width: 0.28rem;
              height: 0.28rem;
              background: url("../../assets/imgs/realhouse/care.png");
              background-size: 100% 100%;
            }
            .legend_logo5 {
              display: inline-block;
              width: 0.28rem;
              height: 0.28rem;
              background: url("../../assets/imgs/realhouse/all_house.png");
              background-size: 100% 100%;
            }
            .legend_logo6 {
              display: inline-block;
              width: 0.28rem;
              height: 0.28rem;
              background: url("../../assets/imgs/realhouse/rent_house.png");
              background-size: 100% 100%;
            }
            .legend_logo7 {
              display: inline-block;
              width: 0.28rem;
              height: 0.28rem;
              background: url("../../assets/imgs/realhouse/empty_house.png");
              background-size: 100% 100%;
            }
          }
          .legend_item2 {
            padding-left: 1rem;
            box-sizing:border-box;
            //  justify-content: center;
          }
          .legend_item3 {
            justify-content: flex-end;
          }

        }
        .peopleList {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .prewarnItem_{
            display: flex;
            box-sizing: border-box;
            width: 7.4rem;
            height: 2.46rem;
            background: #0D1D3C;
            margin-left: .68rem;
            margin-top: .3rem;
            &pic{
              width: 1.72rem;
              height: 2.3rem;
              margin: .08rem 0.38rem 0 .08rem;
              border: 1px solid rgba(201, 231, 255, 0.2);
              /*.camera {*/
                /*width: 0.9rem;*/
                /*height: 0.9rem;*/
                /*display: inline-block;*/
                /*margin-right: 0.22rem;*/
                /*margin-top: 0.48rem;*/
                /*background: url("../../assets/imgs/common/camera.png");*/
                /*background-size: 100% 100%;*/
              /*}*/
            }
            &info{
              text-align: left;
              padding-top: .3rem;
              .prewarnItem_info_name{
                // margin: 0.24rem  0.54rem 0.24rem 0;
                margin-right: 0.54rem;
                font-size: 0.28rem;
                display: inline-block;
                font-family: "HY65";
                color: #C9E7FF;
              }
              .prewarnItem_info_belong{
                color: #C9E7FF;
                font-size: 0.28rem;
                font-family: "HY65";
              }
              .prewarnItem_info_tel {
                font-family: "HY55";
                font-size: 0.28rem;
                color: #C9E7FF;
                opacity:0.7;
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
                .logoFace {
                  width: 0.32rem;
                  height: 0.32rem;
                  display: inline-block;
                  background: url("../../assets/imgs/realpeople/face.png");
                  background-size: 100% 100%;
                  margin-right: 0.02rem;
                }
                .logoCard {
                  width: 0.32rem;
                  height: 0.32rem;
                  display: inline-block;
                  background: url("../../assets/imgs/realpeople/card.png");
                  background-size: 100% 100%;
                  margin-right: 0.02rem;
                }
                .logoNfc {
                  width: 0.32rem;
                  height: 0.32rem;
                  display: inline-block;
                  background: url("../../assets/imgs/realpeople/nfc.png");
                  background-size: 100% 100%;
                  margin-right: 0.02rem;
                }
              }
              .prewarnItem_info_time{
                font-family: "HY55";
                font-size: 0.28rem;
                color: #C9E7FF;
              }
            }
          }
        }
      }
    }
  }
}
</style>
