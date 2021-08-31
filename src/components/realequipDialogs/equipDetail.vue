<template>
 <el-dialog  :visible.sync="dialogVisible" :width="realWidth" append-to-body>
   <div class="equipDetailDialog">
     <div class="equipDetailDialog_title">
        {{equipInfo.name}}
        <span class='status'><span style="width: 0.16rem;height: 0.16rem;background: #50E3C2;display: inline-block;border-radius: 0.16rem; margin-right: 0.16rem;"></span>{{equipInfo.state}}</span>
     </div>
    <div class="equipDetailDialog_content">
      <div class="equipDetailDialog_content_info">
        <div class="info_data">
          <div class="info_data_up">
            <div class="left">
              <span>设备名称：</span>
              <span>{{equipInfo.name}}</span>
            </div>
            <div class="center">
              <span>安装位置：</span>
              <span>{{equipInfo.installAddr}}</span>
            </div>
            <div class="right">
              <span>安装时间：</span>
              <span>{{equipInfo.installTime}}</span>
            </div>
          </div>
          <div class="info_data_down">
            <div class="left">
              <span>设备类型：</span>
              <span>{{equipInfo.typeName}}</span>
            </div>
            <div class="right">
              <span>运行时间：</span>
              <span>{{equipInfo.runTime}}</span>
            </div>
          </div>
        </div>
        <div class="equbtn"><span @click="showDetail" :class="{'showC': click}">设备报警记录</span></div>
        <div class="camera_box">
            <player
              :src="tvSrc"
                />
        </div>
      </div>
      <div class="equipDetailDialog_record" v-if="click">
        <div class="equipDetailDialog_record_arrow"></div>
        <div class="equipDetailDialog_record_title">{{equipInfo.name}}报警记录</div>
        <div class="equipDetailDialog_record_search">
            <div class="time">
              <div class="left">报警时间</div>
              <div class="right">
                <el-date-picker
                  v-model="valueT"
                  type="datetimerange"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间">
                </el-date-picker>
              </div>
            </div>
            <div class="type">
              <div class="left">报警类型</div>
              <div class="right">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.name"
                    :label="item.typeName"
                    :value="item.name">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="btn" @click='doFilter'>
              检索
            </div>
        </div>
        <div class="equipDetailDialog_record_table">
            <template>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  width="100"
                   :show-overflow-tooltip="true"
                  label="设备名称">
                <template>
                  <span>{{equipInfo.name}}</span>
                </template>
                </el-table-column>
                <el-table-column
                  prop="opsTime"
                  width="170"
                  label="报警时间">
                </el-table-column>
                <el-table-column
                  width="120"
                  prop="opsTypeName"
                  label="报警类型">
                </el-table-column>
                <el-table-column
                  width="120"
                  prop="processTimeCost"
                  label="处理时长">
                </el-table-column>
                <el-table-column
                  prop="opsHistoryContent"
                  label="处理人">
                  <template slot-scope="scope">
                    <span>{{scope.row.opsHistoryContent?(scope.row.opsHistoryContent[scope.row.opsHistoryContent.length-1].processuserinfo&&scope.row.opsHistoryContent[scope.row.opsHistoryContent.length-1].processuserinfo.userName):''}}</span>
                  </template>
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
import { apiNames } from '../../Utils/config'
export default {
  name: 'equipDetail',
  data () {
    return {
     dialogVisible: false,
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
          }],
     value1: '',
     options: [],
     value: '',
     valueT: [],
     equipInfo: {},
     tvSrc: '',//id视频流
     thingCode: ''
    }
  },
  mounted () {
    this.$bus.on('equipDetail', (item) => {
      this.dialogVisible = true
      console.log(item,111111111111)
      this.thingCode = item.thingCode
      this.$get(apiNames['获取运维报警类型']).then(res=> {
        if (res.responseStatus.resultCode === 0) {
           console.log(res)
           let arr = [{
             name:'',
             typeName: '全部'
           }]
          this.options = arr.concat(res.data)
         }
      })
      // this.$get(apiNames['设备报警记录']+item.thingCode).then(res=> {
      //   console.log(res)
      //   if (res.responseStatus.resultCode === 0) {  
      //   console.log(res.data.result)
      //    this.tableData = res.data.result
      //       } else {
      //         this.$newthost({
      //             content: res.data.name
      //           })      
      //       }
      //   })  
      this.$get(apiNames['获取设备详情']+item.thingCode).then(res=> {
        console.log(res)
        if (res.responseStatus.resultCode === 0) {  
         this.equipInfo = res.data
            } else {
              this.$newthost({
                  content: res.data.name
                })      
            }
        })  
        //设备运维记录
        this.doFilter()
    })
  },
  computed: {
    realWidth: function () {
      return this.click ? '33.9rem' : '19.3rem' 
    }
  },
  methods: {

    handleClick() {
        // console.log(tab, event);
      },
    showDetail() {
      this.click = !this.click
    },
    doFilter(){
        this.$get(apiNames['设备运维记录']+this.thingCode,{
          page: 1,
          size: 10,
          typeFilter: this.value,
          startTime: this.valueT[0],
          endTime: this.valueT[1],
        }).then(res=> {
        console.log(res)
        if (res.responseStatus.resultCode === 0) {  
        console.log(res.data.result)
         this.tableData = res.data.result
            } else {
              this.$newthost({
                  content: res.data.name
                })      
            }
        })  
    }
  },
  beforeDestroy () {
    this.$bus.off('equipDetail')//移出监听
  },
  showDetail() {
    this.click = !this.click
  }
}
</script>
<style lang="scss">
.el-dialog {
  // height: 14.6rem;
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
.equipDetailDialog_record_table{
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
      border-bottom: 1px solid #2C3A4F !important;
    }
  }
  .el-table td, .el-table th.is-leaf {
    border-bottom: none;
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color:rgb(0, 12, 46) !important;
    }
}
.equipDetailDialog_record_search {
  .el-date-editor {
    width: 3.4rem!important;
  }
  .el-input__inner {
    width: 3.4rem!important;
    height: 0.64rem!important; 
    background: #101824!important;;
    border: 1px solid rgba(186, 210, 229, 0.3)!important;;
  }
  .time {
    .el-input__inner {
    width: 4.8rem!important;
    }
    .el-range-editor .el-range-input {
      background: #101824 !important;
     }
  }
  .el-input__icon {
    line-height: 0.64rem!important;
  }
}
</style>
<style lang="scss" scoped>
  .equipDetailDialog {
    position: relative;
    .equipDetailDialog_title {
      position: absolute;
      top: -0.6rem;
      left: -0.2rem;
      font-size: 0.36rem;
      font-family: "HY75";
      color: #FFFFFF;
      margin-right: 0.6rem;
      .status {
        display: inline-block;
        width: 1.2rem;
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
        background: rgba(22, 121, 212, 0.5);
        border-radius: 0.06rem;
        font-size: 0.28rem;
        font-family: "HY55";
        color: #00F9FC;
        margin-left: 0.2rem;
      }
    }
    .equipDetailDialog_content {
      display: flex;
      flex-direction: row;
      .equipDetailDialog_content_info{
        width: 18rem;
        display: flex;
        flex-direction: column;
        .info_data {
          padding-top: 0.4rem;
          .info_data_up {
             width: 18rem;
             display: flex; 
             margin-bottom: 0.56rem;
             font-family: "HY55";
             color: #C9E7FF;
             font-size: 0.32rem;
             .left{
               flex: 1;
             }
            .center{
               flex: 1;
             }
            .right{
               flex: 1;
               text-align: right;
             }
          }
          .info_data_down {
             margin-bottom: 0.4rem;
             width: 18rem;
             display: flex; 
             font-family: "HY55";
             color: #C9E7FF;
             font-size: 0.32rem;
             .left{
               flex: 1;
             }
            .right{
               flex: 2;
             }
          }
        }
        .equbtn {
          width: 18rem;
          text-align: right;
          margin-bottom: 0.1rem;
          span {
            color: #ffffff;
            font-family: "HY55";
            font-size: 0.28rem;
            text-decoration:underline;
          }
          .showC {
            color: #00F9FC;
          }
        }
        .camera_box {
          height: 10.32rem;
        }

      }
      .equipDetailDialog_record {
        width: 14.2rem;
        margin-left: 0.3rem;
        position: relative;
        .equipDetailDialog_record_arrow {
          position: absolute;
          left: 0;
          top: 2.2rem;
          width: 0.26rem;
          height: 0.34rem;
          background: url("../../assets/imgs/common/rightArrow.png");
          background-size: 100% 100%;    
        }
        .equipDetailDialog_record_title {
          position: absolute;
          left: 0.5rem;
          top: -0.52rem;
          font-size: 0.32rem;
          font-family: "HY75";
          color: #FFFFFF;
        }
        
        .equipDetailDialog_record_search {
          display: flex;
          margin: 0.3rem 0 0.4rem 0.5rem;
          .time {
            // flex: 3;
            display: flex;
            align-items: center;
            margin-right: 0.3rem;
            .left {
              font-size: 0.28rem;
              font-family: "HY65";
              color: #FFFFFF;
              margin-right: 0.2rem;          
            }
            .right {
              flex: 1;
            }
          }
          .type {
            flex: 2;
            display: flex;
            margin-right: 0.3rem;
            align-items: center;
            .left {
              font-size: 0.28rem;
              font-family: "HY65";
              color: #FFFFFF;
              margin-right: 0.2rem;          
            }
            .right {
              flex: 1;
            }
          }
          .btn {
            width: 1.68rem;
            height: 0.56rem;
            line-height: 0.56rem;
            text-align: center;
            background: rgba(40, 191, 255, 0.3);
            border: 1px solid #51CFFF;
            font-size: 0.24rem;
            font-family: "HY65";
            color: #FFFFFF;
          }

        }
        .equipDetailDialog_record_table{
          // width: 14.2rem;
          margin-left: 0.5rem;
        }
      }
    }
  }
</style>