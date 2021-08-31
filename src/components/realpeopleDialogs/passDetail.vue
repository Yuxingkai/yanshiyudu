<template>
 <el-dialog  :visible.sync="dialogVisible" v-if='dialogVisible' :width="realWidth" append-to-body>
   <div class="passDetailDialog_p">
     <div class="passDetailDialog_title">
        通行详情
     </div>   
    <div class="passDetailDialog_content">
      <div class="passDetailDialog_content_info">
        <div class="passInfo">
            <div class="passInfo_record"> <span class="jus_name">姓名</span>: {{info.peopleName}} <span class="passLabel"></span><span class="passBtn" :class="{isClickBtn: click}" @click="showPass">通行记录</span></div>
            <div class="peopleInfo_detail"><span class="jus_name">手机号码</span>: <span class="numStyle">{{info.phoneNo}}</span></div>
            <div class="peopleInfo_detail"><span class="jus_name">人员类型</span>: {{info.peopleType == 1 ? '用户开门' : '访客开门'}}</div>
            <div class="peopleInfo_detail"><span class="jus_name">居住地址</span>: {{info.houseAddress}}</div>
            <div class="peopleInfo_detail"><span class="jus_name">通行位置</span>: {{info.address}}</div>
            <div class="peopleInfo_detail" v-if="type == 1"><span class="jus_name">通行时间</span>: <span class="numStyle">{{info.openTime}}</span></div>
            <div class="peopleInfo_detail" v-if="type == 2"><span class="jus_name">通行时间</span>: <span class="numStyle">{{info.faceCaptureTime}}</span></div>
        </div>
        <div class="picInfos">
          <div class="picInfo">
            <div class="picInfo_img" v-if='info.bkgUrl'>
                <img
                  class="people-pic"
                  :src="faceUrlEx + info.bkgUrl"
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
          <div class="center">?</div>
          <div class="picInfo">
            <div class="picInfo_img" v-if='info.faceUrl'>
                <img
                  class="people-pic"
                  :src="faceUrlEx + info.faceUrl"
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
      <div class="passDetailDialog_record" v-show="click">
        <div class="passDetailDialog_record_arrow"></div>
        <div class="passDetailDialog_record_table">
          <div class="content" id='accessTalbe'>
            <template>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="openType"
                  width="120"
                  label="通行方式">
                 <template slot-scope="scope">
                    <span>{{typeCode[scope.row.openType]}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="inOutType"
                  width="70"
                  label="进/出">
                 <template slot-scope="scope">
                    <span>{{scope.row.inOutType == 1? '进' : '出'}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  width="120"
                  prop="address"
                  label="通行位置">
                 <template slot-scope="scope">
                    <span style='overflow: hidden;text-overflow: ellipsis;white-space: nowrap;'>{{scope.row.address}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="openTime"
                  label="通行时间">
                </el-table-column>
              </el-table>
            </template>
          </div>
        </div>
      </div>
    </div>
   </div>
 </el-dialog>
</template>
<script>
import { apiNames,faceUrl } from '../../Utils/config'
export default {
  name: 'passDetail',
    props: {
    type: {
      default: 1,//
      type: [String, Number]
    },
  },
  data () {
    return {
     dialogVisible: false,
     click: false,
     credentialNo: '',
     tableData: [],
      isCanGo: true,
      pagenum: '1',
      info: {},
      typeCode: JSON.parse(window.localStorage.getItem('opendoorType')) || {},//码表
      faceUrlEx: faceUrl,//拼接地址
    }
  },
  mounted () {
    this.$bus.on('passDetail', (item) => {
      this.dialogVisible = true
      this.info = item
      this.credentialNo = item.credentialNo
      this.tableData = []
      this.click = false
      //查询详情
      this.init()
      console.log(item,111111111111)
    })
  },
  computed: {
    realWidth: function () {
      return this.click ? '19.4rem' : '10rem'
    }
  },
  methods: {
    init(){
      this.getAccessLog()
    },
    getAccessLog(){
       //获取通行记录
      this.$post(apiNames['一人一档通行记录'],{
        credentialNo: this.credentialNo,
        pageNum: this.pagenum,
        pageSize: 15,
      }).then(res=> {
        if (res.responseStatus.resultCode === 0) {  
   
            console.log(res)
            this.tableData = this.tableData.concat(res.data.data)
              
              
            } else {
                this.$newthost({
                  content: res.data.name
                })     
            }
      })  
    },
     //无限滚动
    scroll() {
      let that = this
      console.log(22222222222222)
       var scrolldiv=document.getElementById("accessTalbe");
      //监听滚动事件，当滚动条的位置距离小于某个值的时候，就加载数据
       scrolldiv.addEventListener('scroll',function(){
        //  console.log(scrolldiv.scrollHeight,scrolldiv.scrollTop)
         if(scrolldiv.scrollHeight-scrolldiv.scrollTop < 1000){
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
      this.getAccessLog()
      this.isCanGo = false
    }, 
    handleClick() {
        // console.log(tab, event);
      },
    showPass() {
      this.click = !this.click
      this.scroll()
    }
  },
  beforeDestroy () {
    this.$bus.off('passDetail')//移出监听
  }
}
</script>
<style lang="scss">
.el-dialog {
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
.passDetailDialog_record_table{
  .el-table, .el-table__expanded-cell {
        background-color: transparent!important;
    }
  .el-table tr {
    border: 0!important;
    background-color: transparent!important;
    }
  thead {
   
    th {
      background-color: #1F3561!important;
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
  }
  .el-table td, .el-table th.is-leaf {
    border-bottom: none;
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color:rgb(0, 12, 46) !important;
    }
}
</style>
<style lang="scss" scoped>
  .passDetailDialog_p {
    position: relative;
    .passDetailDialog_title {
      position: absolute;
      top: -0.6rem;
      left: -0.2rem;
      font-size: 0.36rem;
      font-family: "HY75";
      color: #FFFFFF;
      margin-right: 0.6rem;
    }
    .passDetailDialog_content {
      display: flex;
      flex-direction: row;
      padding-top: 0.3rem;

      .passDetailDialog_content_info{
        width: 10rem;
        display: flex;
        flex-direction: column;
        .passInfo {
          text-align: left;
          .jus_name {
            display: inline-block;
            width: 1.4rem;
            text-align:justify;
            text-align-last:justify;
          }
          .peopleInfo_detail{
            padding-top: 0.6rem;
            font-size: 0.32rem;
            font-family: "HY55";
            color: #C9E7FF;
            .numStyle {
              font-family: "DINBOLD";
            }
          }
          .passInfo_record {
            font-size: 0.32rem;
            font-family: "HY55";
            color: #C9E7FF;
            position: relative;
            padding-top: 0.15rem;
            .passLabel {
              padding-left: 0.6rem;
              color: #F8E71C;
              font-family: "HY65";
              font-size: 0.24rem;
            }
            .passBtn{
              position: absolute;
              right: 0;
              top: 0;
              width: 1.65rem;
              height: 0.56rem;
              line-height: 0.56rem;
              text-align: center;
              font-size: 0.24rem;
              display: inline-block;
              border-radius: 0.1rem;            
              background: rgba(22, 121, 212, 0.3);
              border: 1px solid #51CFFF;
            }
            .isClickBtn {
              background: #1679D4;
            }
          }
        }
        .picInfos {
         margin-top: 0.6rem;
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
            width: 3.36rem;
            height: 4.33rem;
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
           }
         }         
        }
      }
      .passDetailDialog_record {
        width: 9.2rem;

        margin-left: 0.3rem;
        position: relative;
        .passDetailDialog_record_arrow {
          position: absolute;
          left: 0;
          top: 0.1rem;
          width: 0.26rem;
          height: 0.34rem;
          background: url("../../assets/imgs/common/rightArrow.png");
          background-size: 100% 100%;    
        }
        .passDetailDialog_record_table{
          width: 8.54rem;
          // height: 10rem;
          // overflow-y: scroll;
          margin-left: 0.5rem;
          .content{
            height: 10rem;
            overflow-y: scroll;
          }
        }
      }
    }
  }
</style>