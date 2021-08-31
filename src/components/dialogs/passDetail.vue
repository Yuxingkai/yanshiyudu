<template>
 <el-dialog  :visible.sync="dialogVisible" :width="realWidth" append-to-body>
   <div class="passDetailDialog">
     <div class="passDetailDialog_title">
        通行详情
     </div>   
    <div class="passDetailDialog_content">
      <div class="passDetailDialog_content_info">
        <div class="passInfo">
            <div class="passInfo_record"> <span class="jus_name">姓名</span>: 张三 <span class="passLabel">吸毒人员</span><span class="passBtn" @click="showPass">通行记录</span></div>
            <div class="peopleInfo_detail"><span class="jus_name">手机号码</span>: <span class="numStyle">131****2586</span></div>
            <div class="peopleInfo_detail"><span class="jus_name">人员类型</span>: 居民/租客</div>
            <div class="peopleInfo_detail"><span class="jus_name">居住地址</span>: 特斯联小区西大门出入口</div>
            <div class="peopleInfo_detail"><span class="jus_name">通行位置</span>: 特斯联小区西大门出入口</div>
            <div class="peopleInfo_detail"><span class="jus_name">通行时间</span>: <span class="numStyle">2019.01.28 13：20：20</span></div>
        </div>
        <div class="picInfos">
          <div class="picInfo">
            <div class="picInfo_img"></div>
            <div class="picInfo_text">登记照片</div>
          </div>
          <div class="center">98%</div>
          <div class="picInfo">
            <div class="picInfo_img"></div>
            <div class="picInfo_text">刷脸照片</div>
          </div>
        </div>
      </div>
      <div class="passDetailDialog_record" v-if="!click">
        <div class="passDetailDialog_record_arrow"></div>
        <div class="passDetailDialog_record_table">
            <template>
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
            </template>
        </div>
      </div>
    </div>
   </div>
 </el-dialog>
</template>
<script>

export default {
  name: 'passDetail',
  data () {
    return {
     dialogVisible: true,
     click: false,
     tableData: [{
            date: '人脸开门',
            name: '进',
            address: '西大门出入口',
            time: '09.23 14:23:33'
          },
          {
            date: '人脸开门',
            name: '进',
            address: '西大门出入口',
            time: '09.23 14:23:33'
          }]
    }
  },
  mounted () {

  },
  computed: {
    realWidth: function () {
      return this.click ? '10rem' : '19.4rem'
    }
  },
  methods: {
    handleClick() {
        // console.log(tab, event);
      },
    showPass() {
      this.click = !this.click
    }
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
  .passDetailDialog {
    position: relative;
    .passDetailDialog_title {
      position: absolute;
      top: -0.6rem;
      left: 0;
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
              color: #FFFFFF;
              background: #4EA7FE;
              border: 1px solid #51CFFF;
              border-radius: 0.1rem;
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
           .picInfo_img {
            width: 3.36rem;
            height: 4.33rem;
            background: #040613;
            border: 2px solid rgba(201, 231, 255, 0.2);
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
          margin-left: 0.5rem;
        }
      }
    }
  }
</style>