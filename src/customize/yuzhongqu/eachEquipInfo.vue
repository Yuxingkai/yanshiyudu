<template>
 <el-dialog :visible.sync="dialogVisible" v-if='dialogVisible' width="34.84rem"  append-to-body class="eachEquipInfo">
  <div class="eachEquipInfo_box">
    <div class="eachEquipInfo_title">
      <span class="text">一机一档</span>
    </div>
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
            <span>设备厂家：</span>
            <span>{{infos.prducetBrand}}</span>
          </div>
          <div class="basicInfo_detail_item">
            <span>设备功能类型：</span>
            <span>{{infos.extend && infos.extend.useType}}</span>
          </div>
          <div class="basicInfo_detail_item">
            <span>网络接入类型：</span>
            <span></span>
          </div>
          <div class="basicInfo_detail_item">
            <span>安装时间：</span>
            <span></span>
          </div>
          <div class="basicInfo_detail_item">
            <span>是否启用：</span>
            <span>{{infos.isDisable}}</span>
          </div>
        </div>
      </div>
      <div class="basicInfo">
        <div class="basicInfo_title">安装位置</div>
        <div class="basicInfo_detail">
          <div class="basicInfo_detail_item">
            <span>行政区划：</span>
            <span>{{infos.name}}</span>
          </div>
          <div class="basicInfo_detail_item">
            <span>所属小区：</span>
            <span>{{xiaoqu}}</span>
          </div>
          <div class="basicInfo_detail_item">
            <span>安装地址：</span>
            <span>{{infos.installAddr}}</span>
          </div>
          <div class="basicInfo_detail_item">
            <span>设备位置类型：</span>
            <span>{{infos.prducetBrand}}</span>
          </div>
          <div class="basicInfo_detail_item">
            <span>建设应用类别：</span>
            <span></span>
          </div>
          <div class="basicInfo_detail_item">
            <span>管理单位：</span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="basicInfo">
        <div class="basicInfo_title">特有属性</div>
        <div class="basicInfo_detail">
          <div class="basicInfo_detail_item">
            <span>设备IP：</span>
            <span>{{infos.extend && infos.extend.ip}}</span>
          </div>
          <div class="basicInfo_detail_item">
            <span>MAC地址：</span>
            <span>{{infos.extend && infos.extend.mac}}</span>
          </div>
          <div class="basicInfo_detail_item">
            <span>归属部门：</span>
            <span>{{infos.productModel}}</span>
          </div>
          <div class="basicInfo_detail_item">
            <span>安装高度：</span>
            <span>{{infos.extend && infos.extend.altitude}}</span>
          </div>
        </div>
      </div>
      <div class="tab_choose">
        <div class="type_item"><span :class="{'activeS':tabIndex==0}" @click="doTab(0)">设备运维记录<div :class="{'active':tabIndex==0}"></div></span></div>
        <div class="type_item"><span :class="{'activeS':tabIndex==1}" @click="doTab(1)">设备感知报警<div :class="{'active':tabIndex==1}"></div></span></div>
      </div>
      <div class="tab_info" >
        <div class="content" id='equipTalbe'>
          <template>
              <el-table
                :data="tableData"
                 v-if="tabIndex==0"
                style="width: 100%">
                <el-table-column
                  prop="name"
                  width="220"
                  label="设备名称">
                  <!-- <template slot-scope="scope">
                    <span style='overflow: hidden;text-overflow: ellipsis;white-space: nowrap;'>{{infos.name}}</span>
                  </template>                  -->
                </el-table-column>
                <el-table-column
                  prop="opsTypeName"
                  width="220"
                  label="运维类型">
                </el-table-column>
                <el-table-column
                  width="220"
                  prop="opsTime"
                  label="开始时间">
                </el-table-column>
                <el-table-column
                  prop="processedTime"
                  width="220"
                  label="完成时间">
                </el-table-column>
                <!-- <el-table-column
                  prop="buildName"
                  width="220"
                  label="设备位置">
                </el-table-column> -->
                <el-table-column
                  prop="opsHistoryContent"
                  width="220"
                  label="责任人">
                   <template slot-scope="scope">
                    <span>{{ getdata(true,scope.row&&scope.row.opsHistoryContent,true)}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="opsHistoryContent"
                  label="手机号码">
                   <template slot-scope="scope">
                    <span>{{ getdata(true,scope.row&&scope.row.opsHistoryContent) }}</span>
                  </template>
                </el-table-column>
              </el-table>
          </template>  
          <template>
              <el-table
                :data="tableData"
                 v-if="tabIndex==1"
                style="width: 100%">
                <el-table-column
                  prop="name"
                  width="180"
                  label="设备名称">
                  <!-- <template slot-scope="scope">
                    <span style='overflow: hidden;text-overflow: ellipsis;white-space: nowrap;'>{{infos.name}}</span>
                  </template>                  -->
                </el-table-column>
                <el-table-column
                  prop="alarmTypeName"
                  width="220"
                  label="报警类型">
                </el-table-column>
                <el-table-column
                  prop="sceneName"
                  width="200"
                  label="报警名称">
                </el-table-column>
                <el-table-column
                  width="230"
                  prop="alarmTime"
                  label="报警时间">
                </el-table-column>
                <el-table-column
                  width="230"
                  prop="processedTime"
                  label="解除时间">
                 <template slot-scope="scope">
                    <span>{{ scope.row&&scope.row.processedTime }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="alarmCurrentContent"
                  width="220"
                  label="责任人">
                   <template slot-scope="scope">
                    <span>{{getdata(false,scope.row&&scope.row.alarmCurrentContent,true)}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="alarmCurrentContent"
                  label="手机号码">
                   <template slot-scope="scope">
                    <span>{{getdata(false,scope.row&&scope.row.alarmCurrentContent,false)}}</span>
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
// import peopleInfoItem from './peopleInfoItem'
import { apiNames } from '../../Utils/config'
export default {
  name: 'eachEquipInfo',//实有设备一机一档
  components: {
    // peopleInfoItem
  },
  data () {
    return {
     dialogVisible: false,
     tabIndex: 0,
     code: '',
     pagenum: 1,
     isCanGo: true,
     tableData: [],
        infos: {
        }, 
        xiaoqu: ''
    }
  },
  mounted () {
    
    this.$bus.on('eachEquipInfo', (e) => {
      this.dialogVisible = true
      // console.log(e)
      this.xiaoqu = e.xiaoqu
      this.code = e.code
      this.tabIndex = 0
      this.tableData = []
      let that= this
      setTimeout(()=>{ 
      that.scroll()
           },500)
      this.init()
    })
  },
  computed: {
    // realWidth: function () {
    //   return this.click ? '34.84rem' : '34.44rem'
    // }
  },
  methods: {
    init() {
      this.getEquipDetail()
    },
    doTab(i) {
      this.tabIndex = i
      this.tableData = []
      if(this.tabIndex == 0) {
        this.getRunRecord()
      }
      if(this.tabIndex == 1) {
        this.getEquipAlarm()
      }
    },
        //无限滚动
    scroll() {
      let that = this
       var scrolldiv=document.getElementById("equipTalbe");
      //监听滚动事件，当滚动条的位置距离小于某个值的时候，就加载数据
       scrolldiv.addEventListener('scroll',function(){
          console.log(scrolldiv.scrollHeight,scrolldiv.scrollTop)
         if(scrolldiv.scrollHeight-scrolldiv.scrollTop < 240){
         if(that.isCanGo){           
                that.loadData();
              }
            }
        })
    },
    //加载数据函数
    loadData() {
      this.pagenum++
      this.tabIndex == 0 ? this.getRunRecord() : this.getEquipAlarm()
      this.isCanGo = false
    },  
    getEquipDetail(){
        //获取设备类型
        this.$get(apiNames['获取设备详情']+this.code).then(res=> {
        if (res.responseStatus.resultCode === 0) {  
   
            console.log(res)
            this.infos = res.data
            this.getRunRecord()
              
            } else {
                this.$newthost({
                  content: res.data.name
                })     
            }
      })  
    },
    getRunRecord(){
      //获取运维记录
        this.$get(apiNames['设备运维记录']+this.code,{
          page: this.pagenum,
          size: 4,
        }
        ).then(res=> {
        if (res.responseStatus.resultCode === 0) {  
            this.isCanGo = true
            console.log(res)

            const UpdateData = (array) => {
                array.forEach(item => {
                  item.name = this.infos.name
                })
                return array
            }
        this.tableData = this.tableData.concat(UpdateData(res.data.result))
            } else {
                this.$newthost({
                  content: res.data.name
                })     
            }
      })  
    },
    getEquipAlarm(){
       this.$get(apiNames['设备报警记录']+this.code,{
          page: this.pagenum,
          size: 4,
        }
        ).then(res=> {
        if (res.responseStatus.resultCode === 0) {  
            const UpdateData = (array) => {
                array.forEach(item => {
                  item.name = this.infos.name
                })
                return array
            }
            let temp = UpdateData(res.data.result)
        this.tableData = this.tableData.concat(temp)
        
            } else {
                this.$newthost({
                  content: res.data.name
                })     
            }
      })  
    }, 
    handleClick(event) {
        console.log(event);
        if(event.name == 'third'){
          this.showRight = true
        }else {
          this.showRight = false
        }
      },
    clickRelation(e) {
        // e就是子组件传过来的值
        this.click = e
      },
      //处理责任人与电话号码
      getdata(type,item,tip) {
        if(type){
          if(item){
            let opsHistoryContent = item[item.length-1]
            if(opsHistoryContent.processUserInfo){
              let processUserInfo = opsHistoryContent.processUserInfo[opsHistoryContent.processUserInfo.length-1]
             return tip ? processUserInfo.userName : processUserInfo.phoneNo
            }else{
              return '-'
            }
          }
        }else {
            if(item){
              if(item.processUserInfo){
              let processUserInfo = item.processUserInfo[item.processUserInfo.length-1]
             return tip ? processUserInfo.userName : processUserInfo.phoneNo
            }else{
              return '-'
            }
          }        
        }
      },
  }
}
</script>
<style lang="scss">
.eachEquipInfo {
  .el-dialog {
    margin-top: 1.6rem!important;
    margin: 1.0rem auto!important;
    // height: 19.42rem;
    background: linear-gradient(320deg, #080C18 0%, #011F41 100%);
    box-shadow: 0px 0px 6px 6px rgba(74, 144, 226, 0.35);
    border: 1px solid;
    border-image: linear-gradient(139deg, rgba(83, 140, 206, 1), rgba(5, 77, 125, 1)) 1 1;
    .el-dialog__headerbtn {
      font-size: 0.5rem;
    }
    .el-dialog__body {
      padding: 0.5rem 0.6rem 0.4rem;
    }
  }
  .tab_info {
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
        // :nth-child(3){
        // font-family: "DINBOLD";
        // font-size: 0.28rem;
        // }
        // :nth-child(4){
        // font-family: "DINBOLD";
        // font-size: 0.28rem;
        // }
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
}


</style>
<style lang="scss" scoped>
.eachEquipInfo_box {
    position: relative;
  .eachEquipInfo_title {
    position: absolute;
    top: -0.4rem;
    left: 0;
    .text {     
      font-size: 0.36rem;
      font-family: "HY65";
      color: #FFFFFF;
      margin-right: 0.6rem;
    }
  }

  .eachEquipInfo_content {
    display: flex;
    flex-direction: column;
    
    .basicInfo {
    padding-top: 0.6rem;
      .basicInfo_title {
        color: #00F9FC;
        padding-left: 0.4rem;
        font-size: 0.32rem;
        font-family: "HY65";
        border-left: 3px solid #00F9FC;
      }
      .basicInfo_detail {
        display: flex;
        flex-wrap: wrap;    
        background: rgba(0, 249, 252, 0.04);
        border-radius: 8px;
        margin-top: 0.44rem;
        padding: 0.38rem 0.38rem 0.04rem 0.38rem ;
        .basicInfo_detail_item {
          width: 6.5rem;
          padding-bottom: 0.34rem;
          text-align: left;
          span {
            font-family: "HY55";
            font-size: 0.32rem;
            color: #C9E7FF;
          }
          // &:nth-child(1) {
          //   text-align: left;
          // }
          // &:nth-child(5) {
          //   text-align: right;
          // }
          // &:nth-child(6) {
          //   text-align: left;
          // }
        }
      }
    }
    .tab_choose {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 0.92rem;
        line-height: 0.92rem;
        background: rgba(44, 76, 113, 0.65);
        margin: 0.6rem 0 0.6rem 0;
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
              width: 50%;
              height: 0.04rem;
              bottom: 0.1rem;
              left: 0.5rem;
              background: linear-gradient(to left, rgba(136, 243, 226, 0) -4%, #6cebd2 50%, rgba(96, 231, 203, 0.57) 80%, rgba(80, 227, 194, 0) 104%);
            }
          }
          .activeS {
             color: #6cebd2;
          } 
        }
    }
    .tab_info {  
      border: 1px solid rgba(201, 231, 255, 0.2);
      height: 7.2rem;
      padding: 0 0.7rem 0 0.7rem;
      box-sizing: border-box;
       overflow-y: scroll;
      .content {
        height: 7.2rem;
        overflow-y: scroll;
      }
    }
  }
}
</style>