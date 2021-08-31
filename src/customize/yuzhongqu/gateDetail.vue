<template>
  <div class="gateDetailDialog">
    <div class="header">
      <div>{{param.e.name}}</div>
      <div><img
          @click="close"
          :src="closeImg"
          alt=""
        /></div>
    </div>
    <div class="gateDetailDialog_content">
      <div class="eachEquipInfo_content">
        <div class="basicInfo">
          <div class="basicInfo_title">基本信息</div>
          <div class="basicInfo_detail">
            <div class="basicInfo_detail_item">
              <span>设备名称：</span>
              <span>{{infos.name}}</span>
            </div>
            <div class="basicInfo_detail_item">
              <span>设备类型：</span>
              <span>{{infos.typeName}}</span>
            </div>
            <div class="basicInfo_detail_item">
              <span>设备型号：</span>
              <span>{{infos.productModel}}</span>
            </div>

            <div class="basicInfo_detail_item">
              <span>安装位置：</span>
              <span>{{infos.installAddr}}</span>
            </div>
          </div>
        </div>
        <div class="basicInfo_title">实时通行</div>
        <div class="detail_content">
          <div class="detail_table">
            <template>
              <el-table
                :data="tableData"
                style="width: 100%"
              >
                <el-table-column
                  prop="openType"
                  width="180"
                  label="通行方式"
                  :show-overflow-tooltip="true"
                >
                  <template slot-scope="scope">
                    <span class="typeIcon">
                       <img :src='require("../../assets/imgs/smartSearch/"+scope.row.openType+ ".png")' alt="">
                      </span> 
                      <span>{{typeCode[scope.row.openType]}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="peopleName"
                  width="140"
                  label="姓名"
                >
                </el-table-column>
                <el-table-column
                  width="100"
                  prop="phoneNo"
                  label="手机号码"
                >
                </el-table-column>
                <el-table-column
                  prop="labelName"
                  width="180"
                  :show-overflow-tooltip="true"
                  label="人口标签"
                >
                 <template slot-scope="scope">
                  <span>{{scope.row.labelName}}</span>
                </template>
                </el-table-column>
                <el-table-column
                  prop="openTime"
                  label="通行时间"
                >
                </el-table-column>

              </el-table>
            </template>
            <div class="paginationBox">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="20"
                background
                layout="total, prev, pager, next"
                :total="total"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { apiNames, videoStream } from '../../Utils/config'
import { log } from 'util';
export default {
  name: 'gateDetail',
  data() {
    return {
      closeImg: require('../../assets/imgs/close.png'),
      currentPage: 1,
      total: 0,
      deviceInfo: {},
      tableData: [],
      infos: {},//设备详情
      typeCode: JSON.parse(window.localStorage.getItem('opendoorType')) || {},//码表
    }
  },
  props: {
    param: {
      type: Object,
      default: () => {
        return {
          e: {
            name: '',
            code: ''
          }
        }
      },
    },
  },
  components: {

  },
  mounted() {
    //掉设备详情接口
    this.getDeviceInfo()
    //掉实时通行分页接口
    this.currentPage = 1
    this.getAccessLog()
  },
  created() {

  },
  methods: {
    close() {
      window.pop.close(this.param.level)
    },
    handleSizeChange() {

    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val
      this.getAccessLog()
    },
    getDeviceInfo() {
      this.$get(apiNames['获取设备详情'] + this.param.e.code).then(res => {
        if (res.responseStatus.resultCode === 0) {

          this.infos = res.data
        } else {
          this.$newthost({
            content: res.data.name
          })
        }
      })
    },
    //获取实时通行
    getAccessLog() {
      let that = this
      this.$post(apiNames['地图实时通行'], {
        thingCode: that.param.e.code,
        pageNum: that.currentPage,
        pageSize: 10,
      }).then(res => {
        if (res.responseStatus.resultCode === 0) {
          that.total = res.data.totalCount
          that.tableData = res.data.result
        } else {
          that.$newthost({
            content: res.data.name
          })
        }
      })
    }
  }
}
</script>
<style lang="scss">
.gateDetailDialog {
  .paginationBox .el-pagination.is-background .btn-next,
  .paginationBox .el-pagination.is-background .btn-prev,
  .paginationBox .el-pagination.is-background .el-pager li {
    background-color: transparent !important;
    // border: 1px solid rgba(45, 97, 156, 0.8)!important;
    color: #c9e7ff !important;
    font-size: 0.24rem;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background: #1679d4 !important;
  }
  .paginationBox .el-pagination {
    padding: 0 !important;
  }
  .el-pagination__total {
    color: #c9e7ff !important;
  }
  table {
    border-collapse: collapse !important;
  }
  .el-table,
  .el-table__expanded-cell {
    background-color: transparent !important;
  }
  .el-table tr {
    // border: 0!important;
    background-color: transparent !important;
  }
  thead {
    background: linear-gradient(
      to left,
      rgba(120, 147, 236, 0.16) -4%,
      rgba(78, 101, 131, 0.65) 104%
    );
    height: 0.64rem;
    th {
      background-color: transparent !important;
      height: 0.64rem;
      box-sizing: border-box;
      padding: 0;
      font-family: 'HY65';
      font-size: 0.28rem;
      color: #c9e7ff;
      // height: 1.4rem;
    }
  }
  tbody {
    tr {
      height: 1.2rem;
      border-bottom: 1px solid rgba(78, 101, 131, 0.65);
      td {
        padding: 0.22rem 0 0 0;
        font-family: 'HY55';
        font-size: 0.28rem;
        color: #c9e7ff;
      }
      // :nth-child(4){
      // // font-family: "DINBOLD";
      // font-size: 0.28rem;
      // }
    }
    .el-table__row {
      border-top: 1px solid #2c3a4f !important;
    }
  }
  .el-table td,
  .el-table th.is-leaf {
    border-bottom: none;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: rgb(0, 12, 46) !important;
  }
  .el-table__body-wrapper {
    height: 6rem;
    overflow: scroll;
  }

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
</style>
<style lang="scss" scoped>
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
  padding-top: 0.2rem !important;
}
.el-dialog__body {
  padding: 0.5rem 0.6rem 0;
}
.gateDetailDialog {
  width: 20.4rem;
  height: 14.3rem;
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
    .eachEquipInfo_content {
      width: 100%;
    }
  }
}
.basicInfo {
  padding-top: 0.6rem;
}
.basicInfo_detail {
  display: flex;
  flex-wrap: wrap;
  background: rgba(0, 249, 252, 0.04);
  border-radius: 8px;
  margin-top: 0.44rem;
  margin-bottom: 0.6rem;
  padding: 0.38rem 0.38rem 0.04rem 0.38rem;
  .basicInfo_detail_item {
    width: 6.5rem;
    padding-bottom: 0.34rem;
    text-align: left;
    span {
      font-family: 'HY55';
      font-size: 0.32rem;
      color: #c9e7ff;
    }
  }
}
.basicInfo_title {
  text-align: left;
  color: #00f9fc;
  padding-left: 0.4rem;
  font-size: 0.32rem;
  font-family: 'HY65';
  border-left: 3px solid #00f9fc;
}
.detail_content {
  display: flex;
  flex-direction: column;
  // padding-top: 0.3rem;
  // padding: 0.4rem 0.74rem 0 0.74rem;
  box-sizing: border-box;
  position: relative;
  .type {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 0.92rem;
    line-height: 0.92rem;
    background: rgba(44, 76, 113, 0.65);
    .type_item {
      padding: 0.1rem 0.54rem 0.1rem 0.54rem;
      font-family: 'HY65';
      font-size: 0.32rem;
      color: #ffffff;
      span {
        position: relative;
        display: inline-block;
        padding: 0 0.1rem;
        .active {
          position: absolute;
          width: 1rem;
          height: 0.04rem;
          bottom: 0.1rem;
          left: 50%;
          transform: translate(-50%);
          -ms-transform: translate(-50%);
          -webkit-transform: translate(-50%);
          background: linear-gradient(
            to left,
            rgba(136, 243, 226, 0) -4%,
            #6cebd2 50%,
            rgba(96, 231, 203, 0.57) 80%,
            rgba(80, 227, 194, 0) 104%
          );
        }
      }
      .activeS {
        color: #6cebd2;
      }
    }
    .line_ {
      display: inline-block;
      width: 0.02rem;
      height: 0.4rem;
      background-color: #c9e7ff;
    }
  }
  .name_T {
    display: flex;
    align-items: center;
    font-size: 0.32rem;
    font-family: 'HY65';
    color: #00f9fc;
    margin-right: 0.4rem;
    .lineBar {
      display: inline-block;
      width: 0.06rem;
      height: 0.28rem;
      margin-right: 0.2rem;
      background: #00f9fc;
    }
  }
  .select {
    display: flex;
    flex-direction: row;
    padding: 0.3rem 0rem 0.3rem 0rem;

    .laberType_ {
      // flex: 1;
      // width: 5rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-right: 1rem;
      text-align: left;
      .left {
        font-size: 0.28rem;
        font-family: 'HY65';
        color: #bad2e5;
        margin-right: 0.4rem;
        width: 1.2rem;
      }
      .right {
        flex: 1;
      }
    }
    .btn_BOX {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      .btn {
        width: 1.68rem;
        height: 0.56rem;
        border-radius: 0.15rem;
        line-height: 0.56rem;
        text-align: center;
        background: rgba(40, 191, 255, 0.3);
        border: 1px solid #51cfff;
        font-size: 0.24rem;
        font-family: 'HY65';
        color: #ffffff;
        cursor: pointer;
      }
      .btn_reset {
        cursor: pointer;
        width: 1.68rem;
        height: 0.56rem;
        border-radius: 0.15rem;
        line-height: 0.56rem;
        text-align: center;
        border: 1px solid #51cfff;
        font-size: 0.24rem;
        font-family: 'HY65';
        color: #ffffff;
      }
      .btn_output {
        cursor: pointer;
        width: 1.68rem;
        height: 0.56rem;
        border-radius: 0.15rem;
        line-height: 0.56rem;
        text-align: center;
        border: 1px solid #51cfff;
        font-size: 0.24rem;
        font-family: 'HY65';
        color: #ffffff;
      }
    }
  }
  .detail_table {
    margin-top: 0.4rem;
    height: 8rem;
    padding-bottom: 1rem;
    // padding: 1.4rem 0.7rem 0 0.7rem;
    box-sizing: border-box;
    // border: 1px solid rgba(201, 231, 255, 0.2);
    position: relative;
    .paginationBox {
      position: absolute;
      bottom: 0.3rem;
      right: 0.3rem;
      display: flex;
      justify-content: flex-end;
    }
    .output {
      position: absolute;
      left: 0;
      bottom: 0.48rem;
      width: 1.4rem;
      height: 0.56rem;
      line-height: 0.66rem;
      text-align: center;
      // background: rgba(40, 191, 255, 0.3);
      border: 1px solid #51cfff;
      font-size: 0.24rem;
      font-family: 'HY65';
      color: #ffffff;
      cursor: pointer;
    }
  }
}
.detail_table {
  table {
    border-collapse: collapse !important;
  }
  .el-table,
  .el-table__expanded-cell {
    background-color: transparent !important;
  }
  .el-table tr {
    // border: 0!important;
    background-color: transparent !important;
  }
  thead {
    background: linear-gradient(
      to left,
      rgba(120, 147, 236, 0.16) -4%,
      rgba(78, 101, 131, 0.65) 104%
    );
    height: 0.96rem;
    th {
      background-color: transparent !important;
      height: 0.56rem;
      box-sizing: border-box;
      padding: 0;
      font-family: 'HY65';
      font-size: 0.28rem;
      color: #c9e7ff;
    }
  }
  tbody {
    tr {
      height: 1.2rem;
      border-bottom: 1px solid rgba(78, 101, 131, 0.65);
      td {
        padding: 0.22rem 0 0 0;
        font-family: 'HY55';
        font-size: 0.28rem;
        color: #c9e7ff;
      }
      :nth-child(4) {
        // font-family: "DINBOLD";
        font-size: 0.28rem;
      }
    }
    .el-table__row {
      border-top: 1px solid #2c3a4f !important;
    }
  }
  .el-table td,
  .el-table th.is-leaf {
    border-bottom: none;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: rgb(0, 12, 46) !important;
  }
}
</style>