<template>
      <div class="left">
        <div class="left_1">
          <img class="lightClass" src="../../../assets/imgs/zhihuipaishui/pjmanage/light.png" alt="">
          <div>
            <span class="title" alt="">于都县</span>
            <span class="timeSelect">
              <!-- 2021-01-01—2021-03-01 -->
              <a-locale-provider :locale="zhCN">
                <a-range-picker>
                  <template slot="renderExtraFooter">
                  </template>
                </a-range-picker>
              </a-locale-provider>
            </span>
          </div>
          <div style="display: flex;">
            <div class="titleName" style="padding-top: 0;">
              实有工程
            </div>
            <div class="smallTitle">（共计）</div>
          </div>
          <div class="realPj">
            <div class="backPic" v-for="(item, index) in realPj" :key="index">
              <div style="margin-top: .2rem;">
                <span style="font-size: .38rem;font-family: Swiss721BT-RomanCondensed;">
                  <!-- <span style="color: rgba(137, 212, 235, 1);">{{ item.num1 }}</span>
                  <span style="color: rgba(39, 129, 180, 1);">/</span> -->
                  <span style="color: rgba(39, 129, 180, 1);">{{ item.num2 }}</span>
                </span>
                <span style="font-size: .2rem;transform: scale(.8);">{{ index === 4 ? '米' : '个' }}</span>
              </div>
              <div style="font-size: .2rem;font-family: SimHei;transform: scale(.8);">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <div class="left_2">
          <img class="lightClass" src="../../../assets/imgs/zhihuipaishui/pjmanage/light.png" alt="">
          <div style="display: flex;">
            <div class="titleName">
              排水设施
            </div>
          </div>
          <echart ref="pipeDevice" config="排水设施饼图" width="100%"></echart>
        </div>
        <div class="left_3">
          <img class="lightClass" src="../../../assets/imgs/zhihuipaishui/pjmanage/light.png" alt="">
          <div style="display: flex;">
            <div class="titleName">
              管网调查
            </div>
            <div class="smallTitle">（管网长度）</div>
          </div>
           <echart ref="guanwangdiaocha" config="管网调查" width="100%"></echart>
        </div>
        <div class="left_4">
          <img class="lightClass" src="../../../assets/imgs/zhihuipaishui/pjmanage/light.png" alt="">
          <div style="display: flex;">
            <div class="titleName">
              缺陷统计
            </div>
          </div>
          <echart ref="defects" config="缺陷统计" width="100%" height="90%"></echart>
          <div class="actionButton">
            <div v-for="(item, index) in defects" :key="index" @click="choose(index)">
              <span :style="item.check ? item.background : ''"/>
              {{ item.name }}
              <font style="margin-left: .3rem;">{{ item.count }}</font>
            </div>
          </div>
        </div>
        <projectNum v-if="projectNumShow" @close="closePop" style="position: absolute;bottom: 0;left:7.5rem;z-index: 100;"/>
        <gongchen v-if="gongchenShow" @closeg="closeGonPop" style="position: absolute;bottom: 0;left:7.5rem;z-index: 100;"/>
      </div>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { apiNames } from '../../../Utils/config'
import { setTimeout } from 'timers';
import projectNum from './projectNum'
import gongchen from './gongchen'
export default {
  name: 'left',
  data() {
    return {
      projectNumShow: false,
      gongchenShow: false,
      zhCN,
      realPj: [
        {
          name: '项目总数',
          num1: 1,
          num2: 2
        },
        {
          name: '工程总数',
          num1: 1,
          num2: 2
        },
        {
          name: '防涝设备',
          num1: 56,
          num2: 56
        },
        {
          name: '施工路段',
          num1: 12,
          num2: 50
        },
        {
          name: '管段总长',
          num1: 20,
          num2: 40
        },
        {
          name: '管段数量',
          num1: 78,
          num2: 100
        }
      ],
      facilities: [],
      defects: [
        {
          name: '功能性缺陷',
          id: 1,
          check: true,
          background: 'background: #2781b4;',
          count: 0
        },
        {
          name: '结构性缺陷',
          id: 2,
          check: true,
          background: 'background: #2781b4;',
          count: 0
        },
        {
          name: '其他缺陷',
          id: 3,
          check: true,
          background: 'background: #2781b4;',
          count: 0
        }
      ],
      data1Arr: [],
      data2Arr: [],
      data3Arr: [],
    }

  },
  components: {
    projectNum,
    gongchen
  },
  mounted() { 
    this.getFacilities()
    this.getdefectsStatistics()
    this.getproStatistical()
  },

  watch: {
  },
  created() {
  },
  methods: {
    getproStatistical () {
      this.$get(apiNames['项目工程统计']).then(res => {
        if (res.code == 0) {
          this.realPj = [
            {
              name: '项目总数',
              num1: res.result.com_proCount || 0,
              num2: res.result.proCount || 0
            },
            {
              name: '工程总数',
              num1: res.result.com_gcCount || 0,
              num2: res.result.gcCount || 0
            },
            {
              name: '防涝设备',
              num1: 56,
              num2: 56
            },
            {
              name: '施工路段',
              num1: res.result.com_roadCount || 0,
              num2: res.result.roadCount || 0
            },
            {
              name: '管段总长',
              num1: res.result.com_pipeLength || 0,
              num2: res.result.pipeLength || 0
            },
            {
              name: '管段数量',
              num1: res.result.com_pipeCount || 0,
              num2: res.result.pipeCount || 0
            }
          ]
          let guanwangdiaocha = this.$refs.guanwangdiaocha
          guanwangdiaocha.option.series[0].data = [res.result.pipeLength, res.result.pipeLength]
          guanwangdiaocha.option.series[1].data = [res.result.pipeLength, res.result.pipeLength]
          guanwangdiaocha.refresh()
        }
      })
    },
    getFacilities () {
      this.$get(apiNames['获取排水设施']).then(res => {
        if (res.code == 0 && res.result.length !== 0) {
          this.facilities = res.result
          let seriesData = []
          this.facilities.forEach(element => {
            if (element.key !== '排水渠') {
              if (element.count == 0) {
                seriesData.push({
                  name: `${element.key}      ${element.count}`,
                  value: element.count
                })
              } else {
                seriesData.unshift({
                  name: `${element.key}      ${element.count}`,
                  value: element.count
                })
              }
            }
            
          });
          setTimeout(()=>{
            let pipeDevice = this.$refs.pipeDevice
            pipeDevice.option.series[0].data = seriesData
            pipeDevice.refresh()
          },500)
        }
      })
    },
    getdefectsStatistics () {
      this.$get(apiNames['获取缺陷统计']).then(res => {
        if (res.code == 0 && res.result.length !== 0) {
          if (res.result[0]['功能性缺陷']) {
              let data1 = res.result[0]['功能性缺陷'].code
              if (data1) {
                Object.keys(data1).map((key)=>{
                  this.data1Arr.push({
                    name: `${key}: ${data1[key]}`,
                    value: data1[key]
                  })
                });
                let data1Count = res.result[0]['功能性缺陷'].count
                this.defects[0].count = data1Count
              }
          }
          
          if (res.result[0]['结构性缺陷']) {
              let data2 = res.result[0]['结构性缺陷'].code
              if (data2) {
                Object.keys(data2).map((key)=>{
                    this.data2Arr.push({
                      name: `${key}: ${data2[key]}`,
                      value: data2[key]
                    })
                });
                let data2Count = res.result[0]['结构性缺陷'].count
                this.defects[1].count = data2Count
              }
          }
          
          if (res.result[0]['无问题']) {
              let data3 = res.result[0]['无问题'].code
              if (data3) {
                Object.keys(data3).map((key)=>{
                    this.data3Arr.push({
                      name: `${key}: ${data3[key]}`,
                      value: data3[key]
                    })
                });
                let data3Count = res.result[0]['无问题'].count
                this.defects[2].count = data3Count
              }
          }
          
          setTimeout(() => {
            let defects = this.$refs.defects
            defects.option.series[0].data = this.data1Arr || []
            defects.option.series[1].data = this.data2Arr || []
            defects.option.series[2].data = this.data3Arr || []
            defects.refresh()
          }, 500)
        }
      })
    },
    choose (index) {
      this.defects[index].check = !this.defects[index].check
      let defects = this.$refs.defects
      if (this.defects[index].check) {
        if (index == 0) {
          defects.option.series[index].data = this.data1Arr
        } else if (index == 1) {
          defects.option.series[index].data = this.data2Arr
        } else {
          defects.option.series[index].data = this.data3Arr
        }
        
      } else {
        defects.option.series[index].data = []
      }
      defects.refresh()
    },
    closePop () {
      this.projectNumShow = false
    },
    closeGonPop () {
      this.gongchenShow = false
    },
    showPop (index) {
      if (index == 0) {
        this.projectNumShow = true
        this.gongchenShow = false
      } else if (index == 1) {
        this.gongchenShow = true
        this.projectNumShow = false
      }
    },
  },
  beforeDestroy() {
  }
}
</script>
<style lang='scss'>
.pjmanage .ant-calendar-picker-clear {
  // background: ;
  right: .1rem!important
}
.timeSelect .ant-input {
  border: none;
  background: none;
  color: white;
}
</style>

<style scoped lang='scss'>
    .titleNameC {
      width: 2.4rem;
      font-size: .36rem;
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
          padding-top: .05rem;
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
    .left {
      cursor: pointer;
      width: 7.42rem;
      height: 98%;
      position: absolute;
      z-index: 10;
      left: .4rem;
      top: 0;
      display: flex;
      flex-direction: column;
      .left_1 {
        height: 4.4rem;
        margin-top: .2rem;
        width: 100%;
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
        .realPj {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin-top: .14rem;
          .backPic {
            width: 2.4rem;
            height: 1.42rem;
            background-image: url('../../../assets/imgs/zhihuipaishui/pjmanage/rotateSquare.png');
            background-size: 100% 100%;
          }
        }
        .title {
          width: 2.06rem;
          height: .6rem;
          display: inline-block;
          background-image: url('../../../assets/imgs/zhihuipaishui/pjmanage/radiusSquare.png');
          background-size: 100% 100%;
          font-size: .26rem;
          line-height: .6rem;
        }
        .timeSelect {
          width: 4.7rem;
          height: .6rem;
          display: inline-block;
          background-image: url('../../../assets/imgs/zhihuipaishui/pjmanage/radiusSquare.png');
          background-size: 100% 100%;
          font-size: .26rem;
          line-height: .6rem;
        }
      }
      .left_2 {
        height: 3.6rem;
        margin-top: .2rem;
        width: 100%;
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
      .left_3 {
        width: 100%;
        margin-top: .2rem;
        flex: 1;
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
      .left_4 {
        background-image: url('../../../assets/imgs/zhihuipaishui/pjmanage/squareBac.png');
        background-size: 100% 100%;
        width: 100%;
        margin-top: .2rem;
        flex: 1;
        position: relative;
        .lightClass {
          width: 100%;
          height: .4rem;
          position: absolute;
          left: 0;
          top: -.2rem;
        }
        .actionButton {
          position: absolute;
          right: 1rem;
          top: 1.3rem;
          text-align: left;
          font-size: .28rem;
          div {
            vertical-align: middle;
          }
          span {
            width: .3rem;
            height: .3rem;
            display: inline-block;
            border-radius: .15rem;
            background: gray;
            vertical-align: middle;
            margin-right: .1rem;
          }
        }
      }
    }
</style>