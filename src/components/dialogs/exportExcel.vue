<template>
  <pop title="导出" :level="param.level" footer="display:none" css="width:14.4rem;" over-flow="false">
    <el-progress :stroke-width="strokeWidth" color="rgba(2,191,254,1)" class="progressClass" type="circle" :percentage="percentage"/>
    <div class="checkBox">
      <div>
        <input id="all" class="btn-checkbox" type="checkbox" value="all" v-model="all" @change="allCheck">
        <label for="all"><span style="margin-top: -.03rem;color: #02BFFE">全部</span></label>
      </div>
      <div>
        <input id="front" class="btn-checkbox" type="checkbox" value="front" v-model="front" @change="frontCheck">
        <label for="front"><span style="margin-top: -.03rem;color: #02BFFE">导出前100页</span></label>
      </div>
      <div>
        <input id="self" class="btn-checkbox" type="checkbox" value="self" v-model="self" @change="selfCheck">
        <label for="self"><span style="margin-top: -.03rem;color: #02BFFE">自定义选择</span></label>
      </div>
    </div>
    <div class="choosePage" v-if="pageShow">
      <span>第</span>
      <span><input type="text" onkeyup="(this.v=function(){this.value=this.value.replace(/[^\d]/g,'');}).call(this)" onblur="this.v();" v-model="firstPage"></span>
      <span>页到</span>
      <span><input type="text" v-model="lastPage" onkeyup="(this.v=function(){this.value=this.value.replace(/[^\d]/g,'');}).call(this)" onblur="this.v();"></span>
      <span>页</span>
    </div><div class="footPage" v-if="pageShow">共{{ this.lastPage - this.firstPage + 1 }}页{{ (this.lastPage - this.firstPage + 1) * this.pageSize }}条记录
    </div>
    <div :class="reexport ? 'newexport' : 'export'">
      <Box6>
        <div v-if="show" class="exportClass" @click.stop="exportExcel">导出</div>
        <div v-if="showcancel" class="exportClassCancel" @click.stop="cancelExcel">取消</div>
        <div v-if="reexport" class="exportClass" @click.stop="reexportExcel">导出失败，重新导出</div>
      </Box6>
    </div>
  </pop>
</template>

<script>
import pop from '../popupContainer'
import user from '../../Utils/user'
import {apiNames} from '../../Utils/config'
import {Post} from '../../Utils/Http'

export default {
  props: {
    param: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  name: 'ExportExcel',
  components: {
    pop
  },
  data () {
    return {
      percentage: 0, // 百分比显示
      firstPage: 1,
      lastPage: 1,
      all: true,
      front: false,
      self: false,
      pageShow: false,
      type: '',
      total: '',
      serchCondition: {},
      exportpage: 1,
      exportData: [],
      openType: [],
      carTypes: [],
      labels: [],
      optionsItemType: [],
      pageSize: 0,
      show: true,
      showcancel: false,
      iscancel: false,
      reexport: false,
      exportType: '',
      circleStatus: '',
      strokeWidth: 8,
      info: {}, // spaceIDs、spaceType
      // typeMap: {},
      // levelMap: {},
      statusMap: {},
      typeCode: JSON.parse(window.localStorage.getItem('opendoorType')) || {},//码表
    }
  },
  watch: {
    firstPage (newval, oldval) {
      if (newval < 0 || newval === '0') {
        this.firstPage = 1
      }
      if (newval > this.lastPage) {
        this.$message('前一页页数不能大于后一页页数')
      }
    },
    lastPage (newval, oldval) {
      if (newval < 0 || newval === '0') {
        this.lastPage = 1
      }
      if (newval < this.firstPage) {
        this.$message('前一页页数不能大于后一页页数')
      }
    }
  },
  mounted () {
    this.info.spaceIDs = JSON.parse(window.localStorage.getItem('spaceIDs'))
    this.info.spaceType = JSON.parse(window.localStorage.getItem('level'))
    this.type = this.param.e.type
    this.exportType = this.param.e.type
    this.serchCondition = this.param.e.serchCondition
    this.total = this.param.e.total
    this.pageSize = this.param.e.pageSize
    this.carTypes = JSON.parse(localStorage.getItem('parkingCar'))
    if(this.type == 'event'){
      // this.typeMap = this.param.e.typeMap
      // this.levelMap = this.param.e.levelMap
      this.statusMap = this.param.e.statusMap
    }
    // this.getLabels()
    // this.getOpenType()
    // this.getItemTypes()
  },
  destroyed () {
    this.cancelExcel()
  },
  methods: {
    allCheck () {
      if (!this.all) {
        this.all = true
      }
      this.front = false
      this.self = false
      this.pageShow = false
      this.exportpage = 1
    },
    frontCheck () {
      if (!this.front) {
        this.front = true
      }
      this.self = false
      this.all = false
      this.pageShow = false
      this.exportpage = 1
    },
    selfCheck () {
      if (!this.self) {
        this.self = true
      }
      this.all = false
      this.front = false
      this.pageShow = true
      this.exportpage = this.firstPage
    },
    reexportExcel () {
      this.percentage = 0
      this.showcancel = true
      this.show = false
      this.reexport = false
      this.exportExcel()
    },
    exportExcel () {
      if (this.firstPage > this.lastPage) {
        this.$message('前一页页数不能大于后一页页数')
        this.firstPage = 1
        return
      }
      if (this.firstPage === '') {
        this.$message('请输入开始页')
        return
      }
      if (this.lastPage === '') {
        this.$message('请输入结束页')
        return
      }
      this.show = this.iscancel
      this.showcancel = !this.iscancel
      let reqParam = user.getRequestHeader()
      let urlCode = ''
      // let reqParam_ = {}
      // reqParam.spaceIDs = this.info.spaceIDs
      // reqParam.spaceType = this.info.spaceType
      // reqParam.searchCode = 'tongxing'
      // reqParam.condition = {}
      reqParam.orders = '-1',//1是正序，-1是倒序
      reqParam.condition = this.serchCondition
      switch (this.type) {
        case 'event':
          // reqParam.searchCode = 'event'
          //接口名
          urlCode = '事件报警检索'
          break
        case 'doorAccess':
          // reqParam.searchCode = 'event'
          //接口名
          urlCode = '门禁通行查询'
          break
        case 'wkCar':
          // reqParam.searchCode = 'event'
          //接口名
          urlCode = '车辆微卡查询'
          break
        case 'pass':
          reqParam.searchCode = 'tongxing'
          break
        case 'alarm':
          reqParam.searchCode = 'yujin'
          break
        case 'device':
          reqParam.searchCode = 'shebei'
          break
        case 'microCardFace':
          reqParam.searchCode = 'wkface'
          break
        case 'microCardCar':
          reqParam.searchCode = 'wkcar'
          break
      }
      reqParam.pageNum = this.exportpage
      reqParam.pageSize = this.pageSize
          if (this.all) {
           reqParam.pageSize = 5000//导出全部 一页按5000条请求
            this.counts = Math.ceil(this.total / 5000)
          } else if (this.front) { // 前一百页 || this.self自定义的---看不懂系列
            this.counts = this.front ? 100 : this.lastPage - this.firstPage + 1
          }else if (this.self) { //  this.self自定义的
            this.counts =  this.lastPage - this.firstPage + 1
          }

      this.$post(
        apiNames[urlCode],
        reqParam
      ).then( res=>{
         if (res.responseStatus.resultCode === 0) {  

          if(this.type == 'event'){
                this.exportData = this.exportData.concat(res.data.alarmInfo)
              }
          if(this.type == 'doorAccess'){
                this.exportData = this.exportData.concat(res.data.accessInfo)
              }                       
          if(this.type == 'wkCar'){
                this.exportData = this.exportData.concat(res.data.carInfo)
              }   
            this.exportpage++
            if (this.exportpage - 1 === this.counts) {
              this.percentage = 100
              //处理数据 类型转换
               if(this.type == 'event'){
                  this.exportData.forEach((item)=>{
                    // item.bjlx = this.typeMap.get(''+item.alarmType)
                    // item.bjdj = this.levelMap.get(''+item.alarmLevel)
                    item.content = item.alarmCurrentContent && item.alarmCurrentContent.processContent
                    item.clzt = this.statusMap.get(''+item.alarmState)
                  })
               }
               else if(this.type == 'doorAccess') {
                 this.exportData.forEach((item)=>{
                    item.kmfs = this.typeCode[item.openType]//开门方式
                    item.sex = item.genderCode == 1 ? '女': (item.genderCode == 2 ? '男': '未知')//性别
                  })
               }
              else if(this.type == 'wkCar') {
                 this.exportData.forEach((item)=>{
                    item.cllx = item.labelInfo=='1'?'自有':(item.labelInfo=='2'?'租借 ':'分配')
                    item.jclx = item.inOutType == 1 ? '进': (item.inOutType == 2 ? '出': '空旷地带')//性别
                  })
               }
              // for (let i = 0; i < this.exportData.length; i++) {
              //   console.log(this.exportData);
                
              //   if (this.exportData[i].birthdate) {
              //     this.exportData[i].birthdate = this.computAge(this.exportData[i].birthdate)
              //   }
              
              // }
              this.inexcel(this.exportData)
            } else {
              if (this.percentage < 100) {
                if (this.counts >= this.exportpage) {
                  // this.percentage += parseFloat((100 / this.counts).toFixed(2)) // 百分比显示
                  this.percentage = +(this.percentage*1 + parseFloat(100 / this.counts)).toFixed(2)// 百分比显示
                  this.show ? this.percentage = 0 : this.exportExcel()
                }
              } else {
                this.percentage = 99
              }
            }
      
            } else {
               this.$message(res.data.name)
                // this.$newthost({
                //   content: res.data.name
                // })    
            }       
      })
    },
    inexcel (data) {
      if (this.exportType === 'doorAccess') {
        this.columns = [
          {label: '开门方式', prop: 'kmfs'},
          {label: '姓名', prop: 'peopleName'},
          {label: '性别', prop: 'sex'},
          {label: '手机号码', prop: 'phoneNo'},
          {label: '人员标签', prop: 'labelInfo'},
          {label: '所属小区', prop: 'spaceName'},
          {label: '通行楼栋', prop: 'address'},
          {label: '通行时间', prop: 'openTime'}
          ]
      }else if (this.exportType === 'event'){//导出事件报警
        this.columns = [
          {label: '所属小区', prop: 'spaceName'},
          {label: '报警类型', prop: 'alarmTypeName'},
          {label: '报警时间', prop: 'alarmTime'},
          {label: '报警等级', prop: 'alarmLevelName'},
          {label: '处理状态', prop: 'clzt'},
          {label: '报警地址', prop: 'address'},
          {label: '报警内容', prop: 'content'},
          ]
      }else if (this.exportType === 'wkCar'){//导出微卡车辆
        this.columns = [
          {label: '车牌号', prop: 'plateNo'},
          {label: '所属小区', prop: 'spaceName'},
          {label: '车辆类型', prop: 'cllx'},
          {label: '车主', prop: 'peopleName'},
          {label: '手机号', prop: 'phoneNo'},
          {label: '通行位置', prop: 'address'},
          {label: '进出类型', prop: 'jclx'},
          {label: '通行时间', prop: 'captureTime'}
          ]
      }
      this.$export.csv({
        columns: this.columns,
        data: data
      })
        .then(() => {
          this.percentage = 0
          this.exportData = []
          this.show = true
          window.pop.close(this.param.level)
          this.$message('导出表格成功')
        })
    },
    cancelExcel () {
      this.show = true
      this.exportData = []
      this.iscancel = true
      this.showcancel = false
    },
    changeVillageName (id) {
      let villageId = JSON.parse(window.localStorage.getItem('webGlobalConfig')).spaceIDsInfos
      let name = ''
      for (let i = 0; i < villageId.length; i++) {
        if (villageId[i].villageID === id) {
          name = villageId[i].villageName
        }
      }
      return name
    },
    changeName (name) {
      let newname = ''
      for (let i = 0; i < this.carTypes.length; i++) {
        if (this.carTypes[i].name === name) {
          newname = this.carTypes[i].typeName
        }
      }
      return newname
    },
    getLabels () {
      let reqParam = user.getRequestHeader()
      reqParam.path = ['db/p_people_tag/label']
      Post({
        async: true,
        url: apiNames['智能检索数据字典'],
        data: reqParam,
        dataType: 'json',
        success: (data) => {
          this.labels = data.datas
        },
        error: (err) => {
          console.log(err)
        }
      })
    },
    changeLabel (str) {
      if (str) {
        let label = str.split(',')
        let newstr = []
        console.log(label, 'label')
        if (label.length > 0) {
          for (let i = 0; i < label.length; i++) {
            for (let j = 0; j < this.labels.length; j++) {
              if (this.labels[j].name === label[i].replace(/\s/g, '')) {
                newstr.push(this.labels[j].typeName)
              }
            }
          }
        }
        newstr = newstr.join(',')
        return newstr
      } else {
        return ''
      }
    },
    changeOpenType (id) {
      let name = ''
      for (let i = 0; i < this.openType.length; i++) {
        if (this.openType[i].name === id) {
          name = this.openType[i].typeName
        }
      }
      return name
    },
    getOpenType () {
      let reqParam = user.getRequestHeader()
      reqParam.path = ['db/e_access_log/openType']
      Post({
        async: true,
        url: apiNames['智能检索数据字典'],
        data: reqParam,
        dataType: 'json',
        success: (data) => {
          this.openType = data.datas
        },
        error: (err) => {
          console.log(err)
        }
      })
    },
    getItemTypes () {
      let reqParam = user.getRequestHeader()
      reqParam.path = ['db/e_device/type']
      Post({
        async: true,
        url: apiNames['智能检索数据字典'],
        data: reqParam,
        dataType: 'json',
        success: (data) => {
          this.optionsItemType = data.datas
        },
        error: (err) => {
          console.log(err)
        }
      })
    },
    changeTypes (val) {
      let info = JSON.parse(window.sessionStorage.getItem('search-deviceTypeList'))
      val ? val = val.toString() : val
      let present = info ? info.filter(x => x.name === val) : ''
      return present ? present.map(x => x.typeName).toString() : ''
    },
    // 转化报警等级 中文名
    getAlarmLevelName (val) {
      let info = JSON.parse(window.sessionStorage.getItem('search-alarmLevelList'))
      val ? val = val.toString() : val
      let present = info ? info.filter(x => x.name === val) : ''
      return present ? present.map(x => x.typeName).toString() : ''
    },
  }
}
</script>
<style>
  .el-progress-circle__track {
    background: red;
  }
</style>
<style scoped>
.progressClass {
  margin: .5rem auto;
  margin-left: 50%;
  transform: translate(-50%,0);
}
.checkBox {
  overflow: hidden;
  height: .6rem;
  text-align: center;
  width: 55%;
  margin-left: 50%;
  transform: translate(-50%,0);
}
.checkBox div {
  float: left;
}
.choosePage, .footPage{
  text-align: center;
  margin-top: .3rem;
  color: #02BFFE;
}
.choosePage input {
  width: 60px;
  height: 25px;
  background: none;
  border:1px solid #02BFFE;
  color: #02BFFE;
  text-align: center;
}
.export {
  width: 2rem;
  height: .8rem;
  margin-left: 50%;
  transform: translate(-50%,0);
  margin-top: .3rem;
  margin-bottom: .3rem;
}
.newexport {
  width: 4rem;
  height: .8rem;
  margin-left: 50%;
  transform: translate(-50%,0);
  margin-top: .3rem;
  margin-bottom: .3rem;
}
.exportClass {
  background: none;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: .7rem;
  cursor: pointer;
  color: #02BFFE;
}
.exportClassCancel {
  background: none;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: .7rem;
  cursor: pointer;
  color: #02BFFE;
}
.exportClassCancel:hover {
  background: rgba(142,22,22,0.55);
  color: #FF0000;
}
.exportClass:hover {
  background: rgba(16,57,108,1);
}
.btn-checkbox{position:absolute;display:none}
.btn-checkbox+label{position:relative;top:.1rem;padding-left: .8rem;display:flex;}
.btn-checkbox+label:after{position:absolute;top:.1rem;left:.45rem;display:none;width:.25rem;height:.1rem;content:'';border-bottom:.02rem solid #fff;border-left:.02rem solid #fff;box-sizing:border-box;transform:rotate(-46deg)}
.btn-checkbox+label:before{position:absolute;display:block;width:.3rem;height:.3rem;content:'';border:1px solid silver;top:.03rem;left: .4rem;border-radius:.03rem;background:#3e97eb;border:1px solid rgba(45, 245, 243, 0.5)}
.btn-checkbox:checked+label:after{display:block}
</style>
