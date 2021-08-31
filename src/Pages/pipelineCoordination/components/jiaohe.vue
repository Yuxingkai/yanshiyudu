<template>
      <div class="right">
        <div class="right_2">
          <img class="lightClass" src="../../../assets/imgs/zhihuipaishui/pjmanage/light.png" alt="">
          <div style="display: flex;">
            <div class="titleName">
              数据校核
            </div>
          </div>
          <div style="text-align: left;margin-top: .2rem;margin-left: .2rem;">
              <span style="width: 1.08rem;height: .48rem;background: #1660B1;border: .02rem solid #19367D;display: inline-block;text-align: center;">校核</span>
              <span style="margin: 0 .3rem;">|</span>
              <span style="width: 1.08rem;height: .48rem;border: .02rem solid #19367D;display: inline-block;text-align: center;">统计</span>
          </div>
          <div style="width: 100%;">
            <div style="margin-top: .34rem;">
                <span>所属项目: </span>
                <a-select
                  style="width: 2.3rem;margin-right: .3rem;"
                  allowClear
                  show-search
                  :filter-option="filterOption"
                  @change="handleChangeXM"
                  placeholder="项目名称"
                  v-model="xmmc"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in xmNameArr" :key="roleindex.toString()" :value="role.id">
                    {{ role.xmmc }}
                  </a-select-option>
                </a-select>
                  <!-- <a-input style="width: 2.3rem;margin-right: .3rem;" placeholder="" /> -->
                <span>所属工程: </span>
                <a-select
                  style="width: 2.3rem"
                  allowClear
                  show-search
                  :filter-option="filterOptiongc"
                  placeholder="工程名称"
                  optionFilterProp = "children"
                  v-model="gcid"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in gcNameArr" :key="roleindex.toString()" :value="role.gcid">
                    {{ role.gcName }}
                  </a-select-option>
                </a-select>
            </div>
            <div style="display: flex;margin-left: 3%;margin-bottom: .2rem;margin-top: .3rem;">
              <span style="margin-left: .2rem;margin-top: .1rem;">区域名称:</span>
                <div style="width: 35%">
                    <a-cascader
                        :defaultValue="defaultValue"
                        style="width: 2.3rem;margin-left: .2rem;margin-right: .3rem;color: white;"
                        :options="areaArr"
                        :load-data="loadData"
                        :placeholder="placeholder"
                        change-on-select
                        @change="onChangeArea"
                    />
                </div>
                 <span style="margin-top: .1rem;">道路名称:</span>
                <div style="width: 30%">
                    <a-select
                        allowClear
                        style="width: 75%"
                        placeholder="道路名称"
                        optionFilterProp = "children"
                        v-model="locationcode"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in roadArr" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                        </a-select-option>
                    </a-select>
                </div>
            </div>
            <!-- <div style="display: flex;">
                    <span style="margin-left: .5rem;margin-top: .1rem;">项目名称: </span>
                    <a-select
                        style="width: 2.3rem;margin-left: .3rem;"
                        allowClear
                        placeholder="项目名称"
                        optionFilterProp = "children"
                        v-model="xmmc"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in xmArr" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                        </a-select-option>
                    </a-select>
                    <span style="margin-left: .4rem;margin-top: .1rem;">工程名称: </span>
                    <a-select
                        style="width: 2rem;margin-left: .3rem;"
                        allowClear
                        placeholder="工程名称"
                        optionFilterProp = "children"
                        v-model="gcid"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in gcArr" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                        </a-select-option>
                    </a-select>
            </div> -->
            <div style="display: flex;margin-left: 4%;margin-top: 2%;">
                <div style="margin-top: .1rem;margin-left: 2%;margin-right: .3rem;">更新日期:</div>
                <div>
                    <a-locale-provider :locale="zhCN">
                        <a-date-picker v-model="check_date" format="YYYY-MM-DD" style="width: 2.3rem;" @change="dateChoose" />
                    </a-locale-provider>
                </div>
                <div style="margin-top: .1rem;margin-left: .4rem;">处理状态:</div>
                <div style="width: 30%;">
                    <a-select
                        allowClear
                        style="width: 70%"
                        placeholder="处理状态"
                        optionFilterProp = "children"
                        v-model="checkDisposeStatus"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in dealStatus" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                        </a-select-option>
                    </a-select>
                </div>
            </div>
            <div style="display: flex;margin-top: .2rem;">
                <div style="width: 2rem;margin-left: .2rem;">校核内容:</div>
                <div style="flex: 1;">
                    <div style="borderBottom: .02rem solid #E9E9E9; text-align: left;">
                        <a-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange">
                            全选
                        </a-checkbox>
                    </div>
                    <a-checkbox-group style="text-align: left;" v-model="checkedList" :options="plainOptions" @change="onChange" />
                </div>
            </div>
            <div style="display: flex;justify-content: space-around;margin-bottom: .2rem;margin-top: .2rem;">
                <span @click="searchList" style="width: 2.08rem;background: #1660B1;height: .48rem;border: .02rem solid #19367D;display: inline-block;text-align: center;">查看列表</span>
                <span @click="resultExport" style="width: 2.08rem;background: #1660B1;height: .48rem;border: .02rem solid #19367D;display: inline-block;text-align: center;">结果导出</span>
                <span @click="analysys" style="width: 2.08rem;background: #1660B1;height: .48rem;border: .02rem solid #19367D;display: inline-block;text-align: center;">执行分析</span>
            </div>
          </div>
          <div class="questionArr">
              <div class="header">
                <!-- <div>
                    类型图片
                </div> -->
                <div>
                    问题类型
                </div>
                <div>
                    编号
                </div>
                <div>
                    设  施
                </div>
                <div>
                    地  址
                </div>
                <div>
                    状  态
                </div>
                <!-- <div>
                    更新日期
                </div> -->
              </div>
              <div class="questionArr_content">
                <div class="questionArr_content_item" v-for="(item, index) in pipedefectsArr" @click="searchAndto(item)" :key="index">
                    <!-- <div :title="11" class="hideTextAndEllipsis">
                        {{ item.problemType }}
                    </div> -->
                    <div :title="filtr[item.problemType]" class="hideTextAndEllipsis">
                        {{ filtr[item.problemType] }}
                    </div>
                    <div :title="item.objectcode" class="hideTextAndEllipsis">
                        {{ item.objectcode }}
                    </div>
                    <div>
                        {{ filtr1[item.facilityType] }}
                    </div>
                    <div>
                        {{ item.roadName }}
                    </div>
                    <div>
                        {{ item.isDispose == 0 ? '未处理' : '已处理' }}
                    </div>
                    <!-- <div>
                        {{ item.updateTime }}
                    </div> -->
                </div>
                <infinite-loading :distance="distance" @infinite="infiniteHandler">
                    <div slot="spinner">加载中...</div>
                    <div slot="no-more">已加载完毕!</div>
                    <div slot="no-results">暂无数据</div>
                </infinite-loading>
              </div>
          </div>
        </div>
      </div>
</template>
<script>
const plainOptions = [{ label: '大管接小管', value: 1 },
  { label: '逆坡', value: 2 },
  { label: '管道反向', value: 3 },{ label: '孤立管点', value: 4 },
  { label: '孤立管线', value: 5 },{ label: '重合点', value: 6 },{ label: '飞点', value: 7 },{ label: '重合线', value: 8 }];
const defaultCheckedList = [1,2,3,4,5,6,7,8];
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { toPositionByobjectid } from '../../../Maps/mapApi.js'
import moment from 'moment';
import 'moment/locale/zh-cn'
moment.locale('zh-cn');
import InfiniteLoading from 'vue-infinite-loading';
import { apiNames, dictCodebyName } from '../../../Utils/config'
import { notification, message } from 'ant-design-vue';
export default {
  name: 'right',
  data() {
    return {
      filtr: ['','大管接小管','逆坡','管道反向','孤立管点','孤立管线','重合点','飞点','重合线'],
      filtr1: ['', '管道', '检查井', '雨水口', '排放口'],
      distance: 100,
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: true,
      plainOptions,
      check_date: '',
      zhCN,
      shapeName: ['', '直径', '底部宽度', '顶面宽度', '最大宽度', '宽度', '深度'],
      realPj: [
      ],
      dayList: [
        {
          id: 1,
          name: '周'
        },
        {
          id: 2,
          name: '月'
        }
      ],
      questionList: [
        {
          id: 1,
          name: '未处理'
        },
        {
          id: 2,
          name: '所属道路'
        },
        {
          id: 3,
          name: '塑料'
        },
        {
          id: 4,
          name: '功能缺陷'
        }
      ],
      dealStatus: [
        {
          value: 0,
          title: '未处理'
        },
        {
          value: 1,
          title: '已处理'
        }
      ],
      roadList: [
      ],
      materialList: [],
      checktypeList: [],
      selectedRole: 1,
      selectedDeal: [],
      selectedRoad: [],
      selectedMaterial: [],
      selectedCheckType: [],
      guandaoPic: require('../../../assets/imgs/zhihuipaishui/pjmanage/guandao.png'),
      liucheng: '功能缺陷<<障碍物<<须养护',
      position: require('../../../assets/imgs/zhihuipaishui/pjmanage/position.png'),
      distance: 100,
      pageNo: 1,
      pipedefectsArr: [],
      leftArow: '<<',
      stateEle: null,
      defaultValue: [],
      areaArr: [],
      placeholder: '区域名称',
      xmArr: [],
      gcArr: [],
      roadArr: [],
      roadname: '',
      locationcode: '',
      xmmc: '',
      gcid: '',
      problemType: '1,2,3,4,5,6,7,8',
      checkDisposeStatus: 0,
      allArr: {},
      xmNameArr: [],
      gcNameArr: []
    }

  },
  mounted() {
    this.getXMname()
    // let allDictItems = JSON.parse(window.localStorage.getItem('allDictItems'))
    // let disid = allDictItems.DomainSwitching.filter((item) => {return item.text == 'district_id'})[0].description
    // this.placeholder = allDictItems.DomainSwitching.filter((item) => {return item.text == 'district_name'})[0].description
    // this.queryBydistrictId(disid)
    // this.querywordInfo(disid)
    this.getDictItems()
    this.getProvinceInfo()
  },
  components: {
    InfiniteLoading
  },
  watch: {
    xmmc (newVal, oldVal) {
        let arr = this.allArr[newVal]
        arr.forEach((item) => {
            this.gcArr.push({
                title: item.gcname,
                value: item.gcid,
            })
        })
    }
  },
  created() {
  },
  methods: {
    filterOption (input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
    filterOptiongc (input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
    handleChangeXM (e) {
      this.getGcByProid(e)
      let one = this.xmNameArr.filter((item) => {
        return item.id == e
      })[0]
      this.xmmc = one.id
      // this.searchForm.districtId = one.district_id
      // this.searchForm.districtName = one.district_name
      this.placeholder = one.district_name
      this.queryBydistrictId(one.district_id)
      this.getGcByProid(one.id)
    },
    getXMname () {
      this.$get(apiNames['获取项目名称']).then(res => {
          if (res.code == 200 && res.result.length !== 0) {
            this.xmNameArr = res.result
            this.xmmc = res.result[0].id
            // this.searchForm.districtId = res.result[0].district_id
            // this.searchForm.districtName = res.result[0].district_name
            this.placeholder = res.result[0].district_name
            this.queryBydistrictId(res.result[0].district_id)
            this.getGcByProid(res.result[0].id)
          }
      })
    },
    getGcByProid (id) {
      this.$get(`${apiNames['根据项目ID获取工程']}/${id}`, ).then(res => {
          if (res.code == 0 && res.result.length !== 0) {
            this.gcNameArr = res.result
          }
      })
    },
    handleChangeJg (info) {
      let description = this.checkTypeArr.filter((item) => {
        return item.value == info
      })[0].description
      this.checkTypeChild1 = JSON.parse(window.localStorage.getItem('allDictItems'))[description]
    },
    searchAndto (item) {
      toPositionByobjectid(item.objectid, item.facilityType)
    },
    onChange(checkedList) {
        console.log(checkedList)
        this.problemType = checkedList.join(',')
      this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
      this.checkAll = checkedList.length === plainOptions.length;
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? [1,2,3,4,5,6,7,8] : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    },
    searchList () {
      this.getpipedefectsAll()
    },
    dateChoose (date) {
      this.check_date = moment(date).format('YYYY-MM-DD')
    },
    loadData(selectedOptions) {
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;
        if (targetOption.level == 1) {
            this.getCityInfo(targetOption.value, targetOption)
        } else if (targetOption.level == 2) {
            this.getDistrictInfo(targetOption.value, targetOption)
        }
    },
    getProvinceInfo () {
        this.$get(apiNames['获取省信息']).then(res => {
            for (let i in res) {
                let o = {
                    value: '',
                    label: '',
                    isLeaf: false,
                    level: 1
                };
                o.value = i;
                o.label = res[i];
                this.areaArr.push(o)
            }
        })
    },
    getCityInfo (parentNo, targetOption) {
        targetOption.loading = false;
        this.$get(apiNames['获取市信息'], {parentNo: parentNo}).then(res => {
            targetOption.children = []
            for (let i in res) {
                let o = {
                    value: '',
                    label: '',
                    isLeaf: false,
                    level: 2
                };
                o.value = i;
                o.label = res[i];
                targetOption.children.push(o)
            }
            this.areaArr = [...this.areaArr];
        })
    },
    getDistrictInfo (parentNo, targetOption) {
        targetOption.loading = false;
        this.$get(apiNames['获取区信息'], {parentNo: parentNo}).then(res => {
            targetOption.children = []
            for (let i in res) {
                let o = {
                    value: '',
                    label: '',
                    isLeaf: true,
                    level: 3
                };
                o.value = i;
                o.label = res[i];
                targetOption.children.push(o)
            }
            this.areaArr = [...this.areaArr];
        })
    },
    analysys () {
      if (this.gcid == '') {
        notification.success({ message: '系统提示', description: '请选择工程'})
      } else {
        const hide = message.loading({ content: '正在分析...', duration: 0 });
        this.$post(apiNames['校核数据执行分析'], {gcId: this.gcid}).then(res => {
            hide()
            if (res.code == 200) {
              notification.success({ message: '系统提示', description: '分析成功'})
            } else {
              notification.success({ message: '系统提示', description: '分析失败'})
            }
        })
      }
    },
    addUrl (url) {
      if (url) {
        let addUrl = `http://192.168.3.132:8082/yufan/sys/common/static/${url}`
        return addUrl
      } else {
        return ''
      }
    },
    getpipedefectsAll () {
      // if (this.gcid == '') {
      //   notification.success({ message: '系统提示', description: '请选择工程名称和道路名称'})
      //   return false
      // }
      let params = {
        gcid: this.gcid,
        locationcode: this.locationcode,
        problemType: this.problemType,
        checkDisposeStatus: this.checkDisposeStatus
      }
      this.$post(apiNames['校核查看列表'], params).then(res => {
        if (res.code == 0 && res.result.length !== 0) {
          this.pipedefectsArr = res.result
        } else {
          this.pipedefectsArr = []
        }
      })
    },
    // getpipedefectsAll ($state) {
    //   this.stateEle = $state
    //   let params = {
    //     // pageNo: this.pageNo,
    //     // pageSize: 8,
    //     gcid: '',
    //     locationcode : ''
    //   }
    //   this.$get(apiNames['校核查看列表'], params).then(res => {
    //     if (this.pipedefectsArr.length > res.result.total) {
    //         $state.complete();
    //         return;
    //     }
    //     if (res.code == 0 && res.result.records.length !== 0) {
    //         this.pipedefectsArr = this.pipedefectsArr.concat(res.result.records)
    //         this.pageNo++
    //         $state.loaded(); 
    //     } else {
    //       if (this.pageNo == 1) {
    //         this.pipedefectsArr = []
    //       }
    //       $state.complete();
    //       return;
    //     }
    //   })
    // },
    onChangeRoad(value, selectedOptions) {
      console.log(value, selectedOptions)
    //   let oneObj = this.roadArr.filter((item) => {
    //       return item.value == value
    //   })[0]
    //   this.addPipeForm.road_name = oneObj.title
    },
    // querywordInfo (districtidStr) {
    //     this.$get(apiNames['成果查询'], {districtid: districtidStr}).then(res => {
    //         console.log(res)
    //         this.xmArr = []
    //         let obj = res.result
    //         this.allArr = obj
    //         if (obj) {
    //             for (const key in obj) {
    //                 console.log(key)
    //                 this.xmArr.push({
    //                     title: obj[key][0].pxmmc,
    //                     value: key
    //                 })
    //             }
    //             console.log(this.xmArr)
    //         }
    //     })
    // },
    queryBydistrictId (disId) {
        this.roadArr = []
        this.$get(apiNames['获取所属道路表'], {districtId: disId}).then(res => {
            if (res.code == 200) {
                res.result.forEach(element => {
                    this.roadArr.push({
                        title: element.locationname,
                        value: element.locationcode
                    })
                });
            } else {
                this.roadArr = []
            }
        })
    },
    resultExport () {
      const hide = message.loading({ content: '正在导出...', duration: 0 });
      this.$getWenjian(apiNames['校核数据导出']).then(res => {
          hide()
  
          let blob = new Blob([res]);
      　　let a = document.createElement('a');
      　　a.href = URL.createObjectURL(blob);
      　　a.target = '_blank';
      　　a.download = (`校核数据` + `.xlsx`);
      　　document.body.appendChild(a);
      　　a.click();
      　　document.body.removeChild(a);
      })
    },
    onChangeArea(value, selectedOptions) {
        let districtIdStr = value.join(',')
        // this.querywordInfo(districtIdStr)
        this.queryBydistrictId(districtIdStr)
    },
    infiniteHandler($state) {
      $state.complete();
    },
    getDictItems() {
      let Items = JSON.parse(window.localStorage.getItem('allDictItems'))
      this.materialList = Items.material
      this.checktypeList = Items.check_type
    }
  },
  beforeDestroy() {
  }
}
</script>
<style>
 .right_1 .ant-select, .right_2 .ant-select {
  color: white;
  }
 .right_2 .ant-select-selection--single {
   color: white!important
 }
 .right_2 .ant-select-selection--single .ant-select-selection__clear {
   background: none!important;
   color: #1890ff!important;
 }
 .ant-cascader-picker {
    background: none!important;
 }
 .ant-input {
     border: .02rem solid #1890ff;
     background: none!important;
 }
 .ant-calendar-picker-clear {
    background: none;
    color: #03ace3
    }
    .ant-cascader-picker-label {
      padding: 0;
    }
    
input::-webkit-input-placeholder {
    color: white!important
}
.ant-checkbox-group-item {
  margin-top: .3rem;
}
</style>

<style scoped lang='scss'>
    .titleNameC {
      width: 2.4rem;
      font-size: .36rem;
      padding-top: .1rem;
      position: relative;
    }
    .titleNameC:after {
      content: '';
      width: 2.7rem;
      height: .18rem;
      position: absolute;
      bottom: -.1rem;
      display:block;
      background-image: url('../../../assets/imgs/zhihuipaishui/pjmanage/split.png');
      background-size: 100% 100%;
    }
    .titleName {
          width: 2.2rem;
          font-size: .36rem;
          padding-top: .1rem;
          position: relative;
    }
    .titleName:after {
      content: '';
      width: 2.2rem;
      height: .18rem;
      position: absolute;
      bottom: -.1rem;
      display:block;
      background-image: url('../../../assets/imgs/zhihuipaishui/pjmanage/split.png');
      background-size: 100% 100%;
    }
    .smallTitle {
      font-size: .24rem;
      font-family: SimHei;
      color: #07E6ED;
      padding-top: .1rem;
    }
    .right {
      cursor: pointer;
      width: 450px;
      height: 98%;
      position: absolute;
      z-index: 10;
      right: 1.4rem;
      top: 0;
      display: flex;
      flex-direction: column;
      .right_1 {
        width: 450px;
        margin-top: .2rem;
        height: 5.44rem;
        background-image: url('../../../assets/imgs/zhihuipaishui/pjmanage/squareBac.png');
        background-size: 100% 100%;
        position: relative;
        .lightClass {
          width: 100%;
          height: .4rem;
          position: absolute;
          left: 0;
          top: -.2rem;
        }
      }
      .right_2 {
        flex: 1;
        margin-top: .2rem;
        width: 450px;
        background-image: url('../../../assets/imgs/zhihuipaishui/pjmanage/squareBac.png');
        background-size: 100% 100%;
        position: relative;
        .lightClass {
          width: 100%;
          height: .4rem;
          position: absolute;
          left: 0;
          top: -.2rem;
        }
        .questionArr {
          width: 100%;
          flex: 1;
          overflow: hidden;
          position: relative;
          font-size: .28rem;
          height: calc(100% - 7.88rem);
          // margin: 0 4%;
          .header {
            display: flex;
            div {
              flex: 1;
              height: .68rem;
              background: rgb(0,0,0,0.35);
              text-align: center;
              line-height: .68rem;
              border: .02rem solid #205187;
              border-right: none;
              border-bottom: none;
            }
            div:last-child {
              border-right: .02rem solid #205187;
            }
          }
          .questionArr_content {
            position: absolute;
            overflow: auto;
            width: 101.8%;
            height: calc(100% - .88rem);
            .questionArr_content_item{
              display: flex;
              div {
                flex: 1;
                height: .68rem;
                background: rgb(0,0,0,0.35);
                text-align: center;
                line-height: .68rem;
                border: .02rem solid #205187;
                border-right: none;
              }
              div:last-child {
                border-right: .04rem solid #205187;
              }
            }
            .questionArr_content_item:hover {
              background: #11568b;
            }
          }
        }
      }
    }
</style>