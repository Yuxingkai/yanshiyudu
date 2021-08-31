<template>
 <el-dialog  :visible.sync="dialogVisible" width="38.4rem" :show-close="false" append-to-body class="realpeopleDetailD">
   <div class="realpeopleDetail"> 
    <div class="realpeopleDetail_content">
      <div class="realpeopleDetail_content_title">
        <span>返回</span>
        <span>实有人口</span>
      </div>
      <div class="type">
        <div class="type_item"><span :class="{'activeS':tabIndex==0}" @click="doTab(0)">全部<div :class="{'active':tabIndex==0}"></div></span></div><span class="line_"></span>
        <div class="type_item"><span :class="{'activeS':tabIndex==1}" @click="doTab(1)">户籍人口<div :class="{'active':tabIndex==1}"></div></span></div><span class="line_"></span>
        <div class="type_item"><span :class="{'activeS':tabIndex==2}" @click="doTab(2)">流动人口<div :class="{'active':tabIndex==2}"></div></span></div><span class="line_"></span>
        <div class="type_item"><span :class="{'activeS':tabIndex==3}" @click="doTab(3)">出租人口<div :class="{'active':tabIndex==3}"></div></span></div><span class="line_"></span>
        <div class="type_item"><span :class="{'activeS':tabIndex==4}" @click="doTab(4)">关爱人员<div :class="{'active':tabIndex==4}"></div></span></div><span class="line_"></span>
        <div class="type_item"><span :class="{'activeS':tabIndex==5}" @click="doTab(5)">当前驻留<div :class="{'active':tabIndex==5}"></div></span></div><span class="line_"></span>
        <div class="type_item"><span :class="{'activeS':tabIndex==6}" @click="doTab(6)">居民驻留<div :class="{'active':tabIndex==6}"></div></span></div><span class="line_"></span>
        <div class="type_item"><span :class="{'activeS':tabIndex==7}" @click="doTab(7)">临时人员<div :class="{'active':tabIndex==7}"></div></span></div>
      </div>
      <div class="select">
          <div class="laberType">
            <div class="left">小区名称</div>
            <div class="right">
              <el-select v-model="value" placeholder="请选择">
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
            <div class="left">楼栋号</div>
            <div class="right">
              <el-input
                placeholder="请输入楼栋号"
                v-model="inputBuilding"
                clearable>
              </el-input>
            </div>
          </div>    
          <div class="laberType">
            <div class="left">房间号</div>
            <div class="right">
              <el-input
                placeholder="请输入房间号"
                v-model="inputRoom"
                clearable>
              </el-input>
            </div>
          </div>    
          <div class="laberType">
            <div class="left">姓名</div>
            <div class="right">
              <el-input
                placeholder="请输入姓名"
                v-model="inputName"
                clearable>
              </el-input>
            </div>
          </div>   
          <div class="laberType">
            <div class="left">手机号码</div>
            <div class="right">
              <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable>
              </el-input>
            </div>
          </div>      
          <div class="laberType">
            <div class="left">人口标签</div>
            <div class="right">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="btn">
              检索
           </div>
      </div>
      <div class="realpeopleDetail_table">
         <template>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="name"
                  width="220"
                  label="姓名">
                </el-table-column>
                <el-table-column
                  prop="sex"
                  width="220"
                  label="性别">
                </el-table-column>
                <el-table-column
                  width="220"
                  prop="age"
                  label="年龄">
                </el-table-column>
                <el-table-column
                  prop="tel"
                  width="220"
                  label="手机号码">
                </el-table-column>
                <el-table-column
                  prop="buildName"
                  width="220"
                  label="小区名称">
                </el-table-column>
                <el-table-column
                  width="260"
                  prop="address"
                  label="居住地址">
                </el-table-column>
                <el-table-column
                  prop="laber"
                  width="240"
                  label="人口标签">
                  <template slot-scope="scope">
                    <span style="color:#50E3C2;text-decoration: underline;">{{scope.row.laber}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="oneDetail"
                  label="一人一档">
                  <template slot-scope="scope">
                    <span style="color:#50E3C2;text-decoration: underline;">{{scope.row.oneDetail}}</span>
                  </template>
                </el-table-column>
              </el-table>
          </template>       
      </div>
    </div>
   </div>
 </el-dialog>
</template>
<script>

//掉接口
import { apiNames } from '../../Utils/config'
import { Post } from '../../Utils/Http'

export default {
  name: 'realpeopleDetail',
  data () {
    return {
     dialogVisible: false,
     click: false,
     options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      value: '',
      tabIndex: 0,
      input: '',
      inputBuilding: '',
      inputRoom: '',
      inputName: '',
      inputTel: '',
      tableData: [{
            name: '一甲',
            sex: '男',
            age: '18岁',
            tel: '13121222599',
            buildName: '西大门出入口',
            address: '西大门出入口',
            oneDetail: '人口详情',
            laber: '吸毒人员',
            time: '09.23 14:23:33'
          },{
            name: '一甲',
            sex: '男',
            age: '18岁',
            tel: '13121222599',
            buildName: '西大门出入口',
            address: '西大门出入口',
            oneDetail: '人口详情',
            laber: '吸毒人员,关爱人员',
            time: '09.23 14:23:33'
          },
          
        ],      
    }
  },
  mounted () {
    // this.$bus.on('realpeopleDetail', (item) => {
    //   this.dialogVisible = true
    //   console.log(item,111111111111)
    // })
  },
  created () {
    this.init()
  },
  computed: {
    // realWidth: function () {
    //   return this.click ? '10rem' : '19.4rem'
    // }
  },
  methods: {
    init () {
      let that = this
      // 获取小区名称
      //人口标签
      
      //实有人口筛选
      this.getFilterRealP()

    }, 
    doTab(i) {
      this.tabIndex = i
    },
    //实有人口筛选
    getFilterRealP(){
      let that = this
    },
    handleClick() {
        // console.log(tab, event);
      },
    showPass() {
      this.click = !this.click
    }
  },
  beforeDestroy () {
    this.$bus.off('realpeopleDetail')//移出监听
  }
}
</script>
<style lang="scss">
.realpeopleDetailD {
  .el-dialog {
    background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
    box-shadow: unset;
    border: 1px solid;
    border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
    .el-dialog__headerbtn {
      font-size: 0.5rem;
    }
  }
  .el-dialog__header{
    // padding-top: 0.2rem!important;
  }
  .el-dialog__body {
  //  background-color: rgba(0, 0, 0, 0.1) !important;
    padding: 0.5rem 0.62rem;
  }
  .realpeopleDetail_table{

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
        font-family: "DINBOLD";
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
    background: #101824!important;;
    border: 1px solid rgba(186, 210, 229, 0.3);
  }
  .el-input__icon {
    line-height: 0.64rem!important;
  }
}
</style>
<style lang="scss" scoped>
  .realpeopleDetail {

    .realpeopleDetail_content {
      display: flex;
      flex-direction: column;
      // padding-top: 0.3rem;
      position: relative;
      .realpeopleDetail_content_title {
        position: absolute;
        top: -0.6rem;
        left: -0.2rem;
        font-size: 0.36rem;
        font-family: "HY75";
        color: #FFFFFF;
        margin-right: 0.6rem;
      }
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
          font-family: "HY65";
          font-size: 0.32rem;
          color: #FFFFFF;
          span {
          position: relative;
          display: inline-block;
          padding: 0 0.1rem;
            .active {
              position: absolute;
              width: 100%;
              height: 0.04rem;
              bottom: 0.1rem;
              left: 0;
              background: linear-gradient(to left, rgba(136, 243, 226, 0) -4%, #6cebd2 50%, rgba(96, 231, 203, 0.57) 80%, rgba(80, 227, 194, 0) 104%);
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
          background-color: #C9E7FF;
        }
      }
      .select {
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 0.7rem 0 0.7rem 0;  
        .laberType {
            flex: 1;
            // width: 5rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            // margin-right: 1rem;
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
      .realpeopleDetail_table {
        width: 100%;
        height: 15rem;
        padding: 0 0.7rem 0 0.7rem;
        box-sizing: border-box;
        border: 1px solid rgba(201, 231, 255, 0.2);
      }
    }
  }
</style>