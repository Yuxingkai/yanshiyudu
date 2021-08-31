<template>
  <div class='accessLog'>
      <div class="select">
          <div class="laberType">
            <div class="left">通行小区</div>
            <div class="right">
              <el-select v-model="value" placeholder="请选择" popper-class='selcet-panel' :popper-append-to-body='false'>
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>   
          <div class="laberType">
            <div class="left">通行方式</div>
            <div class="right">
              <el-select v-model="accessType" placeholder="请选择" :popper-append-to-body='false'>
                <el-option
                    v-for="item in accessTypeOptions"
                    :key="item.typeName"
                    :label="item.typeName"
                    :value="item.name">
                </el-option>
              </el-select>
            </div>
          </div>   
          <div class="laberType special">
            <div class="left">通行时间</div>
            <div class="right">
              <el-date-picker
                v-model="time"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择日期时间">
              </el-date-picker>
            </div>
          </div>   
           <div class="btn_box">           
              <span class="btn" @click="reset" style="margin-right:0.2rem">重置</span>
              <span class="btn" @click="getFilterAccsss">检索</span>
              <span class="jump" @click="getJump">轨迹检索</span>
           </div>       
      </div>
      <div class="detail_table">
         <template>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="villageName"
                  width="220"
                  label="通行小区">
                </el-table-column>
                <el-table-column
                  prop="address"
                  width="220"
                  label="通行位置">
                </el-table-column>
                <el-table-column
                  width="220"
                  prop="openTime"
                  label="通行时间">
                </el-table-column>
                <el-table-column
                  prop="inOutType"
                  width="220"
                  label="进出类型">
                   <template slot-scope="scope">
                    <span>{{scope.row.inOutType==1 ? '进' : '出' }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="openType"
                  label="通行方式">
                   <template slot-scope="scope">
                    <span >{{typeCode[scope.row.openType] }}</span>
                  </template>
                </el-table-column>
              </el-table>
        </template>
        <div class="paginationBox">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="8"
            background
            layout="total, prev, pager, next"
            :total="total">
          </el-pagination>
        </div>     
      </div>
  </div>
</template>

<script>
import { apiNames } from '../Utils/config'

export default {
  name: "accessLog",
  props: {
    credentialNo: {
      default: '',//'130104197801102413'
      type: String
    },
  },
  data () {
    return {
      options: JSON.parse(window.localStorage.getItem('villageOptions')) || [],
      time: '',
      accessTypeOptions: [],
      accessType: '',
      value: '',
      tableData: [], 
      currentPage: 1,
      total: 0,  
      typeCode: JSON.parse(window.localStorage.getItem('opendoorType')) || {},//码表
    }
  },
  created () {
    this.getAccsssType()
    // this.getFilterAccsss()//默认不查询
  },
  methods: {
    reset() {
      this.value = ''
      this.accessType = ''
      this.time = ''
      this.currentPage = 1
    },
    getFilterAccsss() {
         let that = this
       this.$post(apiNames['一人一档通行记录'],{
         credentialNo: this.credentialNo,
         pageNum: this.currentPage,
         pageSize: '8',
         openType: this.accessType,
         accessTimeEnd: this.time,
         }).then(res=> { 
           if (res.responseStatus.resultCode === 0) { 
               console.log(res)
              //  let datas = res.data.data
               this.tableData = res.data.data
               this.total =  res.data.totalNum
    
             } else {
              this.$newthost({
                  content: res.data.name
                })    
             }
       })  
    },
    getJump() {
      this.$emit('getJump')
    },
    getAccsssType() {
      let that = this
     this.$post(apiNames['一人一档开门方式']).then(res=> {
        if (res.responseStatus.resultCode === 0) {  
              // let datas = res.data
              console.log(res)
            var array = [{
              name:'',
              typeName:'全部',
            }];
              that.accessTypeOptions = array.concat(res.data)

            } else {
              this.$newthost({
                  content: res.data.name
                })     
            }
      })
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val
        this.getFilterAccsss()
      }
  }
  
};
</script>

<style scoped lang="scss">
.accessLog{
  display: flex;
  width: 100%;
  height: 100%;
  // padding-top: 0.38rem;
  box-sizing: border-box;
  text-align: center;
  flex-direction: column;
      .select {

        display: flex;
        flex-direction: row;
        padding: 0.6rem 0 0.8rem 0;  
        .laberType {
            // width: 5rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-right: 1rem;
            text-align: left;
            .left {
              font-size: 0.28rem;
              font-family: "HY65";
              color: #BAD2E5;
              margin-right: 0.4rem;          
            }
            .right {
              flex: 1;
            }
        }
        .btn_box {
           flex: 1;
           text-align: right;
           position: relative;
          .btn {
            display: inline-block;
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
            .jump {
              position: absolute;
              right: 0;
              bottom: -0.64rem;
              color: #00F9FC;
              text-decoration: underline;
              font-size: 0.28rem;
              font-family: "HY55";
            }   
        }
      }
      .detail_table {
        height: 14.44rem;
        // margin-left: 0.7rem;
        // margin-right: 0.7rem;
        padding: 0 0.7rem 0 0.7rem;
        box-sizing: border-box;
        border: 1px solid rgba(201, 231, 255, 0.2);
        position: relative;
        .paginationBox {
          position: absolute;
          bottom: 0.3rem;
          right: 0.3rem;
          display: flex;
          justify-content: flex-end;
        }
      }
}
</style>
<style lang="scss">

.accessLog {
    // padding-top: 2rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    // background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
    // box-shadow: unset;
    // border: 1px solid;
    // border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
  
  .detail_table{

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
        background-color: transparent!important;
        height: 0.56rem;
        box-sizing: border-box;
        padding: 0;
        font-family: "HY65";
        font-size: 0.28rem;
        color: #C9E7FF;
        height: 1.4rem;
      }
    }
    tbody {
      tr {
        height: 1.4rem;
        td {
        padding: 0.22rem 0 0 0;
        font-family: "HY55";
        font-size: 0.28rem;
        color: #C9E7FF;
        }
        :nth-child(4){
        // font-family: "DINBOLD";
        font-size: 0.28rem;
        }
      }
    .el-table__row {
      border-top: 1px solid #2C3A4F !important;
     }
    }
    .el-table td, .el-table th.is-leaf {
      border-bottom: none;
    }
    .el-table--enable-row-hover .el-table__body tr:hover>td{
      background-color:rgb(0, 12, 46) !important;
      }
  }
  .el-input__inner {
    width: 3.4rem!important;
    height: 0.64rem!important; 
    background: #101824;
    border: 1px solid rgba(186, 210, 229, 0.3)!important;
  }
  .special {
      .el-input__inner {
        width: 4.4rem!important;
        height: 0.64rem!important; 
        background: #101824;
        border: 1px solid rgba(186, 210, 229, 0.3);
      }
  }
  .el-input__icon {
    line-height: 0.64rem!important;
  }
  .el-select-dropdown {  
       background: #101824!important;
       border-radius: 3px!important;
       border: 1px solid rgba(186, 210, 229, 0.3)!important;
       color: #C9E7FF!important;
       padding: 0.2rem!important;
    }
  .el-select-dropdown__item.selected {
    color: #00F9FC!important;
  }
  .el-select-dropdown__item.hover {
        color: #00F9FC!important;
        background: rgba(78, 101, 131, 0.65)!important;
    }
  .popper__arrow {
    display: none!important;
  }
.paginationBox .el-pagination.is-background .btn-next,
.paginationBox .el-pagination.is-background .btn-prev,
.paginationBox .el-pagination.is-background .el-pager li {
  background-color: transparent!important;
  // border: 1px solid rgba(45, 97, 156, 0.8)!important;
  color: #C9E7FF!important;
  font-size: 0.24rem;

}
.el-pagination.is-background .el-pager li:not(.disabled).active {
   background: rgba(45, 97, 156, 0.8)!important;
}
.paginationBox  .el-pagination {
  padding: 0!important;
}
.el-pagination__total {
  color: #C9E7FF!important;;
}
}
</style>