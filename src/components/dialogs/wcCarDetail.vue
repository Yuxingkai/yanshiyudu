<template >
 <div v-if='dialogVisible' class="wcCar_dia">
   <div class="wcCar">
     <div class="wcCar_title">
        通行详情
      <div class="quit" @click="close">x</div> 
     </div> 
    <div class="wcCar_content">
         <div class="name_T"><span class="lineBar"></span> 车辆详情</div>
         <div class="info">
           <div class="info_img"  v-if="accessInfo.minPlatePic">
            <img
                  class="people-pic"
                  :src="accessInfo.minPlatePic"
                >
           </div>
          <div class="info_noimg" v-else>
            <img
                  class="people-pic"
                  src="../../assets/imgs/common/noimg.png"
                >
           </div>
           <div class="info_details">
             <div class="info_detail"><span class="jus_name">车主姓名: </span><span>{{accessInfo.peopleName}}</span></div>
             <div class="info_detail"><span class="jus_name">手机号码： </span><span>{{accessInfo.phoneNo}}</span></div>
             <div class="info_detail"><span class="jus_name">车辆类型: </span><span>{{accessInfo.labelInfo=='1'?'自有':(accessInfo.labelInfo=='2'?'租借 ':'分配')}}</span></div>
             <div class="info_detail"><span class="jus_name">通行位置: </span><span>{{accessInfo.address}}</span></div>
             <div class="info_detail"><span class="jus_name">通行时间: </span><span>{{accessInfo.captureTime}}</span></div>
           </div>
         </div>
         <div class="name_T" style="margin-top: 0.6rem;"><span class="lineBar"></span> 通行照片</div>
         <div class="image" v-if="accessInfo.platePic">
                <img
                  class="people-pic"
                  :src="accessInfo.platePic"
                >
      </div>
      <div class="image_no" v-else>
                <img                
                  src="../../assets/imgs/common/noimg.png"
                >
      </div>
    </div>
   </div>
 </div>
</template>
<script>
import { apiNames } from '../../Utils/config'

export default {
  name: 'wcCarDetail',
    props: {
    type: {
      default: 1,//
      type: [String, Number]
    },
  },
  data () {
    return {
      nationCode: {
        1: '汉族',
        2: '蒙古族',
        3: '回族',
        4: '藏族',
        5: '维吾尔族',
        6: '苗族',
        7: '彝族',
        8: '壮族',
        9: '布依族',
        10: '朝鲜族',
        11: '满族',
        12: '侗族',
        13: '瑶族',
        14: '白族',
        15: '土家族',
        16: '哈尼族',
        17: '哈萨克族',
        18: '傣族',
        19: '黎族',
        20: '傈僳族',
        21: '佤族',
        22: '畲族',
        23: '高山族',
        24: '拉祜族',
        25: '水族',
        26: '东乡族',
        27: '纳西族',
        28: '景颇族',
        29: '柯尔克孜族',
        30: '土族',
        31: '达斡尔族',
        32: '仫佬族',
        33: '羌族',
        34: '布朗族',
        35: '撒拉族',
        36: '毛南族',
        37: '仡佬族',
        38: '锡伯族',
        39: '阿昌族',
        40: '普米族',
        41: '塔吉克族',
        42: '怒族',
        43: '乌孜别克族',
        44: '俄罗斯族',
        45: '鄂温克族',
        46: '德昂族',
        47: '保安族',
        48: '裕固族',
        49: '京族',
        50: '塔塔尔族',
        51: '独龙族',
        52: '鄂伦春族',
        53: '赫哲族',
        54: '门巴族',
        55: '珞巴族',
        56: '基诺族',
        99: '其他',
      },
     dialogVisible: false,
     idPicSrc: '',//证件照地址
     headPic: '',//采集照地址
     info: {},
     visibleBox: false,
     accessInfo: {},
     peopleInfo: {},
     faceInfos: [
       '红色上衣',
       '未戴口罩',
       '戴帽子',
       '男性',
       '50岁',
       '戴眼镜',
       '汉族',
     ],
     tvSrc: '',
    }
  },
  mounted () {
    this.$bus.on('wcCarDetailDialog', (item) => {
      this.dialogVisible = true
      console.log(item)
      this.accessInfo = item
      this.getWcCarDetail(item)
  
    })
  },
  created () {

  },
  methods: {
    //微卡人脸抓拍详情
    getWcCarDetail(item){
      this.$post(
        apiNames['门禁通行详情'],
        {
          credentialNo: item.credentialNo,
          thingCode: item.thingCode,
        }
      ).then(res=> {
        if (res.responseStatus.resultCode === 0) {  
              console.log(1111111111,res)
              this.peopleInfo = res.data.peopleInfo
            } else {
                that.$newthost({
                  content: res.data.name
                })    
            }
      })      
    },
    seeV() {
      this.visibleBox = true
    },
    close() {
      this.dialogVisible = false
    },
  },
  beforeDestroy () {
    this.$bus.off('wcCarDetailDialog')//移出监听
  }
}
</script>
<style lang="scss" scoped>
.wcCar_dia{
    margin: auto;
    // height: 6.5rem!important;
    background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
    box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
    border: 1px solid;
    border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
    z-index: 666;
    width: 16.8rem;
  .wcCar {
    position: relative;
    padding: 0.4rem;
    .wcCar_title {
      text-align: left;
      font-size: 0.32rem;
      font-family: "HY75";
      color: #FFFFFF;
      margin-right: 0.6rem;
      position: relative;
      .quit {
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 0.48rem;
      }
    }
    .wcCar_content {
      display: flex;
      flex-direction: column;
      padding-top: 0.3rem;
        .name_T {
            display: flex;
            align-items: center;
            font-size: 0.32rem;
            font-family: "HY65";
            color: #00F9FC;
            margin-right: 0.4rem;
            margin-bottom: 0.4rem;
            .lineBar {
              display: inline-block;
              width: 0.06rem;
              height: 0.28rem;
              margin-right: 0.2rem;
              background: #00F9FC;
            }
        }
        .info{
          display: flex;
          flex-direction: row;
          .info_img {
            width: 8.52rem;
            height: 4.34rem;
            background: #040613;
            border: 1px solid rgba(201, 231, 255, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              width: 8.16rem;
              height: 3.96rem;
                }
          }
          .info_noimg {
            width: 8.52rem;
            height: 4.34rem;
            background: #040613;
            border: 1px solid rgba(201, 231, 255, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 2rem;
                height: 2rem;
                }
          }

          .info_details {
            display: flex;
            flex-direction: column;
            margin-left: 0.7rem;
            .info_detail {
              margin: 0.2rem 0 0.2rem;
              text-align: left;
              color: #C9E7FF;
              font-family: "HY55";
              font-size: 0.32rem;           
              .jus_name {
                font-family: "HY55";
                font-size: 0.32rem;  
              }
            }
          }
        }
        .image{
          width: 15.34rem;
          height: 7.8rem;
          background: #040613;
          border: 2px solid rgba(201, 231, 255, 0.2);
          display: flex;
          justify-content: center;
          align-items: center;
          img{
              width: 14.92rem;
              height: 7.4rem;
              }
        }
        .image_no {
              width: 15.34rem;
              height: 7.8rem;
              // background-color: pink;
              padding:0.26rem;
              box-sizing:border-box;
              background: #040613;
              border: 1px solid rgba(201, 231, 255, 0.2);
              display: flex;
              justify-content: center;
              align-items: center;
              img{
                width: 2rem;
                height: 2rem;
              }

            }
    }
  }
}
</style>