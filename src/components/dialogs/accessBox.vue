<template>
 <el-dialog  :visible.sync="dialogVisible" v-if='dialogVisible' :width="realWidth" append-to-body>
   <div class="doorAccess">
     <div class="doorAccess_title">
        门禁通行详情
     </div>   
    <div class="doorAccess_content">
      <div class="eachProfile_left">
          <div class="title_left">
            <span class="lineBar"></span>
            设备报警记录</div>
          <div class="left_up">
            <div class="left_up_pic fixMr">
              <div class="image" v-if="peopleInfo.idPic">
                <img
                  class="people-pic"
                  :src="faceUrlEx+peopleInfo.idPic"
                >
              </div>
              <div class="image_no" v-else>
                <img
                  src="../../assets/imgs/common/noimg.png"
                >
              </div>
              <div class="title">证件照片</div>
            </div>
            <div class="left_up_pic fixMr" >
              <div class="image" v-if="peopleInfo.headPic">
                <img
                  class="people-pic"
                  :src="faceUrlEx+peopleInfo.headPic"
                >
              </div>
              <div class="image_no" v-else>
                <img                
                  src="../../assets/imgs/common/noimg.png"
                >
              </div>
              <div class="title">采集照片</div>
            </div>
          </div>
          <div class="left_info">
            <div class="profileInfo">
                <div class="profileInfo_detail"><span class="jus_name">姓名: </span><span>{{peopleInfo.peopleName}}</span></div>
                <div class="profileInfo_detail"><span class="jus_name">名族: </span><span>{{nationCode[peopleInfo.nationCode]}}</span></div>
                <div class="profileInfo_detail"><span class="jus_name">性别: </span>{{peopleInfo.genderCode==1?'女':(peopleInfo.genderCode==2?'男':'')}}</div>
                <div class="profileInfo_detail"><span class="jus_name">出生日期: </span ><span>{{peopleInfo.birthDate}}</span></div>
                <div class="profileInfo_detail"><span class="jus_name">人口来源: </span>{{peopleInfo.source==0?'外来人员':'本地人员'}}</div>
                <div class="profileInfo_detail"><span class="jus_name">联系方式: </span>{{peopleInfo.phoneNo}}</div>
                <div class="profileInfo_detail"><span class="jus_name">身份证号: </span>{{peopleInfo.credentialNoDes?peopleInfo.credentialNoDes:peopleInfo.credentialNo}}</div>
                <div class="profileInfo_detail"><span class="jus_name">户籍地址: </span>{{peopleInfo.domiclleDetailAddress}}</div>
                <div class="profileInfo_detail"><span class="jus_name">居住地址: </span>{{peopleInfo.houseAddress}}</div>
            </div>
          </div>
      </div>
      <div class="right">
          <div class="title_left" v-if='false'>
            <span class="lineBar"></span>
            人脸结构化信息
          </div>
          <div class="info_part" v-if='false'>
            <div class="part_item" v-for="(v,i) in faceInfos" :key="i">{{v}}</div>
          </div>
          <div class="title_left">
            <span class="lineBar"></span>
            通行信息
          </div>
          <div class="accessInfo">
                <div class="accessInfo_detail"><span class="jus_name">小区名称: </span><span>{{accessInfo.spaceName}}</span></div>
                <div class="accessInfo_detail"><span class="jus_name">通行时间: </span><span>{{accessInfo.openTime}}</span></div>
                <div class="accessInfo_detail"><span class="jus_name">通行位置: </span>{{accessInfo.address}}</div>
                <div class="accessInfo_detail"><span class="jus_name">开门方式: </span ><span class="typeIcon">
                  <img :src='require("../../assets/imgs/smartSearch/"+accessInfo.openType+ ".png")' alt="">
                  </span>
                </div>
          </div>
          <div class="video_box">
           <player
              :src="tvSrc"
              style="transform: scale(1);transform-origin: 0 0;" />
          </div>
      </div>
    </div>
   </div>
 </el-dialog>
</template>
<script>
import { apiNames,faceUrl } from '../../Utils/config'
import { Post, PostCopy } from '../../Utils/Http'
import user from '../../Utils/user'
export default {
  name: 'doorAccess',
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
    faceUrlEx: faceUrl,//拼接地址
     dialogVisible: false,
    //  idPicSrc: '',//证件照地址
    //  headPic: '',//采集照地址
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
    this.$bus.on('doorAccessDialog', (item) => {
      this.dialogVisible = true
      console.log(item)
      this.accessInfo = item
      this.getAccessDetail(item)//渝中区没有摄像机没有视频
            //获取通行30s视频
      this.startTime = Date.parse(new Date(this.accessInfo.openTime))-1000*30
      this.endTime = Date.parse(new Date(this.accessInfo.openTime))
      this.tvSrc = this.getstremsm(this.startTime, this.endTime,this.accessInfo.thingCode)
   
    })
  },
  computed: {
    realWidth: function () {
      return '29.5rem'
    }
  },
  created () {

  },
  methods: {
    //门禁通行详情
    getAccessDetail(item){
      this.$post(
        apiNames['门禁通行详情'],
        {
          credentialNo: item.credentialNoDes,//传递用的
          thingCode: item.thingCode,
        }
      ).then(res=> {
        if (res.responseStatus.resultCode === 0) {  
              console.log(1111111111,res)
              this.peopleInfo = res.data.peopleInfo?res.data.peopleInfo:{}//兼容不返回
            } else {
                this.$newthost({
                  content: res.data.name
                })    
            }
      })      
    },
        // 获取小视频
    getstremsm (startTime, endTime, id) {
      let reqParam = user.getRequestHeader()
      let tvSrc = ''
      if (id) {
        reqParam.ID = id
      } else {
        this.$newthost({
          content: '请选择播放地址'
        })
        return
      }
      reqParam.Start = startTime / 1000
      reqParam.End = endTime / 1000
      PostCopy({
        async: true,
        url: apiNames['获取小视频'],
        data: reqParam,
        dataType: 'json',
        success: (data) => {
          if (data.Code === 0) {
            tvSrc = 'rtmp://' + videoStream + data.Data.RTMP
          }
        },
        error: (err) => {
          console.log(JSON.stringify(err) + 'popup-accessDevice 获取门禁信息')
        }
      })
      return tvSrc
    },
  },
  beforeDestroy () {
    this.$bus.off('doorAccessDialog')//移出监听
  }
}
</script>
<style lang="scss">
.el-dialog {
  margin-top: 1.5rem!important;
  background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
  box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
  border: 1px solid;
  border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
  .el-dialog__headerbtn {
    font-size: 0.5rem;
  }
}
.el-dialog__header{
  padding-top: 0.2rem!important;
}
.el-dialog__body {
//  background-color: rgba(0, 0, 0, 0.1) !important;
 padding: 0.5rem 0.62rem;
}
</style>
<style lang="scss" scoped>
  .doorAccess {
    position: relative;
    .doorAccess_title {
      position: absolute;
      top: -0.6rem;
      left: -0.2rem;
      font-size: 0.36rem;
      font-family: "HY75";
      color: #FFFFFF;
      margin-right: 0.6rem;
    }
    .doorAccess_content {
      display: flex;
      flex-direction: row;
      padding-top: 0.3rem;
      .eachProfile_left {
          width: 9.26rem;
          padding: 0 0.74rem 0 0;
          box-sizing:border-box;
          height: 14rem;
          .title_left {
              display: flex;
              align-items: center;
              font-size: 0.32rem;
              font-family: "HY65";
              color: #00F9FC;
              margin-right: 0.4rem;  
              margin-bottom: 0.46rem;
              .lineBar {
                display: inline-block;
                width: 0.06rem;
                height: 0.28rem;
                margin-right: 0.2rem;
                background: #00F9FC;
              }
          }
        .left_up {
          display: flex;
          flex-direction: row;       
          .fixMr {
            margin-right: 0.8rem;
          }
          .left_up_pic{
            display: flex;
            flex-direction: column;           
            .image {
              width: 3.36rem;
              height: 4.33rem;
              // background-color: pink;
              padding:0.26rem;
              box-sizing:border-box;
              background: #040613;
              border: 1px solid rgba(201, 231, 255, 0.2);
              .people-pic{
                width: 100%;
                height: 100%;
              }

            }
            .image_no {
              width: 3.36rem;
              height: 4.33rem;
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
              margin-top: 0.5rem;
              color: #C9E7FF;
              font-family: "HY55";
              font-size: 0.32rem;           
              .jus_name {
                font-family: "HY55";
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
      }
      .right {
        width: 19.5rem;
        display: flex;
        flex-direction: column;
        .title_left {
              display: flex;
              align-items: center;
              font-size: 0.32rem;
              font-family: "HY65";
              color: #00F9FC;
              margin-right: 0.4rem;  
              margin-bottom: 0.46rem;
              .lineBar {
                display: inline-block;
                width: 0.06rem;
                height: 0.28rem;
                margin-right: 0.2rem;
                background: #00F9FC;
              }
        }
        .info_part {
          height: 1rem;
          display: flex;
           flex-direction: row;
           .part_item {
              width: 1.8rem;
              height: 0.6rem;
              background: rgba(22, 121, 212, 0.5);
              border-radius: 0.06rem;
              line-height: 0.65rem;
              text-align: center;
              margin-right: 0.4rem;
              font-size: 0.28rem;
              font-family: "HY55";
              color: #00F9FC;
           }
        }
        .accessInfo {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.44rem;
          align-items: center;
            .typeIcon{
              display: inline-block;
              width: 0.32rem;
              height: 0.32rem; 
              img{
                height: 100%;
                width: 100%;
              }
            }
        }
        .video_box {
          width: 100%;
          height: 12.6rem;
          background: #040613;
          border: 1px solid rgba(201, 231, 255, 0.2);
        }
      }
    }
  }
</style>