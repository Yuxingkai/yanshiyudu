<template >
 <div v-if='dialogVisible' class="wcFace_dia">
   <div class="wcFace">
     <div class="wcFace_title">
        抓拍人脸详情
      <div class="quit" @click="close">x</div> 
     </div> 
    <div class="wcFace_content">
      <div class="left">
        <div class="picInfos">
          <div class="picInfo">
            <div class="picInfo_img" v-if='accessInfo.bkgUrl'>
                <img
                  class="people-pic"
                  :src="accessInfo.bkgUrl"
                >
            </div>
            <div class="picInfo_img tip" v-else>
                <img
                  class="noimg"
                  src="../../assets/imgs/common/noimg.png"
                >
            </div>
            <div class="picInfo_text">登记照片</div>
          </div>
          <div class="center">{{accessInfo.faceSimilarity}}</div>
          <div class="picInfo">
            <div class="picInfo_img" v-if='accessInfo.faceUrl'>
                <img
                  class="people-pic"
                  :src="accessInfo.faceUrl"
                >
            </div>
            <div class="picInfo_img tip" v-else>
                <img
                  class="noimg"
                  src="../../assets/imgs/common/noimg.png"
                >
            </div>
            <div class="picInfo_text">刷脸照片</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="left_info">
          <div class="info_row">
            <div class="title">姓名</div> :
            <div class="value">{{peopleInfo.peopleName}}</div>
          </div>
          <div class="info_row">
            <div class="title">名族</div> :
            <div class="value">{{nationCode[peopleInfo.nationCode]}}</div>
          </div>
          <div class="info_row">
            <div class="title">联系方式</div> :
            <div class="value">{{peopleInfo.phoneNo}}</div>
          </div>
          <div class="info_row">
            <div class="title">身份证号</div> :
            <div class="value">{{peopleInfo.credentialNo}}</div>
          </div>
          <div class="info_row">
            <div class="title">户籍地址</div> : 
            <div class="value">{{peopleInfo.domiclleDetailAddress}}</div>
          </div>
          <div class="info_row">
            <div class="title">居住地址</div> : 
            <div class="value">{{peopleInfo.houseAddress}}</div>
          </div>
        </div>
        <div class="center_info">
          <div class="info_row">
            <div class="title">标签</div> :
            <div class="value label">{{peopleInfo.nameEng}}</div>
          </div>
          <div class="info_row">
            <div class="title">性别</div> :
            <div class="value">{{peopleInfo.genderCode==1?'女':(peopleInfo.genderCode==2?'男':'未知')}}</div>
          </div>
          <div class="info_row">
            <div class="title">出生日期</div> :
            <div class="value">{{peopleInfo.birthDate}}</div>
          </div>
          <div class="info_row">
            <div class="title">人口来源</div> :
            <div class="value">{{peopleInfo.source ==1 ? '本地人员':'外来人员'}}</div>
          </div>
          <div class="info_row">
            <div class="title">居委街道</div> : 
            <div class="value">{{peopleInfo.domiclleRoadName}}</div>
          </div>
        </div>
        <div class="right_btn">
          <div class="btn_v" @click="seeV">查看视频</div>
        </div>
      </div>
    </div>
   </div>
    <el-dialog  :visible.sync="visibleBox" width="20rem"  append-to-body v-if="visibleBox">
      <div class="content_wcF">
        <div class="content_wcF_title">
            通行详情
        </div>   
        <div class="info">
          <div class="info_item"><span class="info_name">小区名称</span>: {{accessInfo.spaceName}}</div>
          <div class="info_item1"><span class="info_name">通行时间</span>: <span class="info_time">{{accessInfo.faceCaptureTime}}</span> </div>
          <div class="info_item1"><span class="info_name">通行位置</span>: {{accessInfo.address}}</div>
          <!-- <div class="info_item"><span class="info_name">开门方式</span>：{{accessInfo.address}}</div> -->
        </div>
        <div class="nav">
          <span class="img_" :class="{active:isActive}" @click="isActiveTab">抓拍照片</span>
          <span class="video_" :class="{active:!isActive}" @click="isActiveTab">30s视频</span>
        </div>
        <div class="content-box" v-if='isActive'>
            <!-- <div class="camera">
                    <player
                        :src="tvSrc"
                    />
            </div> -->
          <div class="info_img" v-if='accessInfo.img'>
            <img
                  class="people-pic"
                  src=""
                >
          </div>
          <div class="info_noimg" v-else>
            <img
                  class="people-pic"
                  src="../../assets/imgs/common/noimg.png"
                >
          </div>
        </div>
        <div class="content-box" v-if='!isActive'>
           <player
              :src="tvSrc"
              style="transform: scale(1);transform-origin: 0 0;" />
        </div>
      </div>
    </el-dialog>
 </div>
</template>
<script>
import { apiNames } from '../../Utils/config'

export default {
  name: 'wcFaceDetail',
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
     isActive: true,
    }
  },
  mounted () {
    this.$bus.on('wcFaceDetailDialog', (item) => {
      this.dialogVisible = true
      console.log(item)
      this.accessInfo = item
      this.getWcFaceDetail(item)
  
    })
  },
  created () {

  },
  methods: {
    isActiveTab(){
      this.isActive = !this.isActive
    },
    //微卡人脸抓拍详情
    getWcFaceDetail(item){
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
    this.$bus.off('wcFaceDetailDialog')//移出监听
  }
}
</script>
<style lang="scss" scoped>
.wcFace_dia{
    margin: 0!important ;
    position: fixed;
    left: 0;
    bottom: 0.1rem;
    height: 6.5rem!important;
    background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
    box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
    border: 1px solid;
    border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
    z-index: 666;
    width: 29.5rem;
  .wcFace {
    position: relative;
    padding: 0.4rem;
    .wcFace_title {
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
    .wcFace_content {
      display: flex;
      flex-direction: row;
      padding-top: 0.3rem;
      .left {
        .picInfos {
          // margin-top: 0.6rem;
          display: flex;
          flex-direction: row;
            .center {
              font-family: "DINBOLD";
              font-weight: bold;
              color: #00F9FC;
              font-size: 0.8rem;
              padding: 1.76rem 0.46rem;
            }          
          .picInfo {
            display: flex;
            flex-direction: column;
              .tip {
                width:  100%;
                height:  100%;
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
            .picInfo_img {
              width: 3rem;
              height: 4rem;
              background: #040613;
              border: 2px solid rgba(201, 231, 255, 0.2);
              .noimg {
                width: 0.88rem;
                height: 0.88rem;
              }
  
            .people-pic{
                width:  100%;
                height:  100%;
              }
            }
            .picInfo_text {
              padding-top: 0.22rem;
              font-size: 0.24rem;
              font-family: "HY65"; 
              color: #C9E7FF;      
              text-align: center;   
            }
          }         
          }
        }
      .right {
        margin-left: 1rem;
        padding: 0.2rem;
        width: 17.2rem;
        display: flex;
        flex-direction: row;
        background: url("../../assets/imgs/smartSearch/info_bg.png");
        background-size: 100% 100%;  
        // background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
        // box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
        // border: 1px solid;
        // border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
        .left_info,.center_info {
          flex:1;
          .info_row {
            width: 100%;
            max-width: 5.44rem;
            display: flex;
            flex-direction: row;
            padding: 0.2rem 0 0.2rem 0.6rem;
            font-family: "HY65";
            font-size: 0.28rem;
            .title {
              width: 1.25rem;
              text-align: justify;
              text-align-last: justify;
            }
            .value {
              margin-left: 5px;
              text-align: left;
              flex: 1;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
            }
            .label {
              text-decoration: underline;
              color: #50E3C2;
              }
            
          }
        }
        .right_btn{
          width: 3.4rem;
          .btn_v {
            width: 1.66rem;
            height: 0.56rem;
            margin: 0.4rem auto;
            line-height: 0.6rem;
            font-family: "HY55";
            font-size: 0.24rem;
            text-align: center;
            background: rgba(22, 121, 212, 0.3);
            border: 1px solid #51CFFF;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
    .el-dialog {
      width: 15.3rem;
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
      background-color: rgba(0, 0, 0, 0.1) !important;
    }
  .content_wcF{
    display: flex;
    flex-direction: column;
    position: relative;
    .content_wcF_title{
      position: absolute;
      top: -0.6rem;
      left: 0;
      font-size: 0.36rem;
      font-family: "HY75";
      color: #FFFFFF;
      margin-right: 0.6rem;
    }
    .info{
      display: flex;
      flex-direction: row;
      .info_item1 {
        flex: 1;
        text-align: left;
        padding: 0.3rem 0;
        font-size: 0.32rem;
        font-family: 'HY55';
        color: #c9e7ff;
        .info_name {
          display: inline-block;
          width: 1.4rem;
          text-align: justify;
          text-align-last: justify;
        }
      }
     .info_item {
        width: 4rem;
        text-align: left;
        padding: 0.3rem 0;
        font-size: 0.32rem;
        font-family: 'HY55';
        color: #c9e7ff;
        .info_name {
          display: inline-block;
          width: 1.4rem;
          text-align: justify;
          text-align-last: justify;
        }
      }
    }
    .nav{
      display: flex;
      justify-content: flex-end;
      .video_{
         color: #C9E7FF;
        font-size: 0.28rem;
        font-family: 'HY55';
        text-decoration: underline;
        cursor: pointer;

      }
      .img_{
        color: #C9E7FF;
        font-size: 0.28rem;
        font-family: 'HY55';
        margin-right: 0.6rem;
        text-decoration: underline;
        cursor: pointer;
      }
      .active{
        color: #50E3C2;
      }
    }
    .content-box {
      margin-top: 0.116rem;
      width: 100%;
      height: 10.32rem;
      background: #040613;
      border: 1px solid rgba(201, 231, 255, 0.2);
      padding: 0.2rem;
      .info_img {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .info_noimg {
        width: 100%;
        height: 100%;
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
</style>