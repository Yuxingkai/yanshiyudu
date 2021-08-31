<template>
      <div class="right suyuan">
        <div class="right_2">
            <img class="lightClass" src="../../../assets/imgs/zhihuipaishui/pjmanage/light.png" alt="">
            <div style="display: flex;">
                <div class="titleName">
                溯源分析
                </div>
            </div>
            <div class="chooseModule">
                <div class="activeClass titleNameC">
                溯源
                </div>
                <div class="splitline"/>
                <div class="titleNameC">
                统计
                </div>
            </div>
            <div class="centerBack">
                <div style="text-align: left;width: 100%;">追溯内容</div>
                <div style="display: flex;">
                    <div>
                        追溯对象:
                    </div>
                    <div style="margin-left: 10px;">
                        <a-input v-model="suyuanObj" style="width: 119px;" placeholder="例6Y1469-6Y1463" />
                    </div>
                    <div class="button" style="margin-left: 15px;">
                        查询
                    </div>
                    <div @click="mapSet" class="button" style="margin-left: 15px;">
                        地图拾取
                    </div>
                </div>
                <div style="display: flex;align-items: flex-end;margin-top: 10px;">
                    <div>
                        追溯模式:
                    </div>
                    <div style="margin-left: 10px;">
                        <a-radio-group default-value="a" v-model="chooseValue" button-style="solid">
                            <a-radio-button value="a">
                                向上
                            </a-radio-button>
                            <a-radio-button value="b">
                                向下
                            </a-radio-button>
                            <a-radio-button value="c">
                                上下
                            </a-radio-button>
                        </a-radio-group>
                    </div>
                </div>
                <div style="display: flex;font-size: 15px;margin-top: 10px;">
                    <div>
                        追溯问题类型:
                    </div>
                    <div style="margin-left: 5px;">
                        <a-checkbox-group
                            v-model="value"
                            name="checkboxgroup"
                            :options="plainOptions"
                            @change="onChange"
                        />
                    </div>
                </div>
                <div>
                    <div style="display: flex;justify-content: space-around;margin-bottom: .2rem;margin-top: .2rem;">
                        <span @click="searchList" style="width: 2.08rem;background: #1660B1;height: .48rem;border: .02rem solid #19367D;display: inline-block;text-align: center;">查看列表</span>
                        <span @click="resultExport" style="width: 2.08rem;background: #1660B1;height: .48rem;border: .02rem solid #19367D;display: inline-block;text-align: center;">结果导出</span>
                        <span @click="search" style="width: 2.08rem;background: #1660B1;height: .48rem;border: .02rem solid #19367D;display: inline-block;text-align: center;">执行分析</span>
                    </div>
                </div>
                <a-divider style="background: #1890ff;margin-top: 0;margin-bottom: 0;"/>
                <div style="text-align: left;">
                    追溯结果
                </div>
                <div style="width: 100%;">
                    <div class="line">
                        <div>追溯管线总长度: 29米</div>
                    </div>
                    <div class="questionType">
                        <div class="questionType_line">
                            <div style="margin-left: .3rem;width: 40%;">问题类型</div>
                            <div style="margin-left: .3rem;width: 30%;">是否可见</div>
                            <div style="margin-right: .8rem;width: 30%;">数量</div>
                        </div>
                        <div class="questionType_line">
                            <div style="display: flex;align-items: flex-end;margin-left: .3rem;width: 40%;">
                                <img style="width: 36px;height: 36px;" :src="largeToSmall" alt="">
                                <span>大管接小管:</span>
                            </div>
                            <div style="width: 30%;">
                                <a-checkbox v-model="ltsmall">
                                </a-checkbox>
                            </div>
                            <div style="margin-right: .8rem;">1个</div>
                        </div>
                        <div class="questionType_line">
                            <div style="display: flex;align-items: flex-end;margin-left: .3rem;width: 40%;">
                                <img style="width: 36px;height: 36px;" :src="nipo" alt="">
                                <span>逆坡:</span>
                            </div>
                            <div style="width: 30%;">
                                <a-checkbox v-model="npXian">
                                </a-checkbox>
                            </div>
                            <div style="margin-right: .8rem;">10个</div>
                        </div>
                        <div class="questionType_line">
                            <div style="display: flex;align-items: flex-end;margin-left: .3rem;width: 40%;">
                                <img style="width: 36px;height: 36px;" :src="hunjie" alt="">
                                <span>雨污混接:</span>
                            </div>
                            <div style="width: 30%;">
                                <a-checkbox v-model="ywhun">
                                </a-checkbox>
                            </div>
                            <div style="margin-right: .8rem;">100个</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="questionArr">
              <div class="header">
                <div>
                    问题类型
                </div>
                <div>
                    编号
                </div>
                <div style="flex-grow: 1;">
                    设  施
                </div>
                <div style="flex-grow: 1;">
                    地  址
                </div>
                <div style="flex-grow: 1;">
                    状  态
                </div>
              </div>
              <div class="questionArr_content">
                <div class="questionArr_content_item" v-for="(item, index) in 10" :key="index">
                    <div class="hideTextAndEllipsis" style="width: 142px;">
                        -
                    </div>
                    <div class="hideTextAndEllipsis" style="width: 116px;">
                       -
                    </div>
                    <div class="hideTextAndEllipsis" style="width: 75px;">
                        -
                    </div>
                    <div style="width: 75px;">
                       -
                    </div>
                    <div style="width: 75px;">
                        -
                    </div>
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
import { apiNames, dictCodebyName } from '../../../Utils/config'
import { notification, message } from 'ant-design-vue';
import { startAnimation, trajRun, setCenterAndZoom, clearGraphicsLayer } from '../../../Maps/mapApi'
const plainOptions = [
  { label: '大管接小管', value: 0 },
  { label: '逆坡', value: 1 },
  { label: '雨污混合', value: 2 },
  { label: '逆流', value: 3 }
];
export default {
  name: 'right',
  data() {
    return {
      largeToSmall: require('../../../assets/imgs/zhihuipaishui/map/largeTosmall.png'),
      nipo: require('../../../assets/imgs/zhihuipaishui/map/nipo.png'),
      hunjie: require('../../../assets/imgs/zhihuipaishui/map/hunjie.png'),
      startOrStop: false,
      plainOptions,
      value: [],
      distance: 50,
      chooseValue: 'a',
      // 于都演示数据
      posList: [
      ],
      posListshang: [
        {
            lng: 641995.3861,
            lat: 2873102.117,
            name: 'name'
        },
        {
            lng: 641989.389,
            lat: 2873099.299,
            name: 'name1'
        },
        {
            lng: 642010.258,
            lat: 2873073.013,
            name: 'name2'
        },
        {
            lng: 642063.125,
            lat: 2873068.943,
            name: 'name3'
        },
        {
            lng: 642063.125,
            lat: 2873068.943,
            name: 'name4'
        },
        {
            lng: 642112.274,
            lat: 2873049.332,
            name: 'name5'
        }
      ],
      posListxia: [
        {
            lng: 642063.125,
            lat: 2873068.943,
            name: 'name4'
        },
        {
            lng: 642112.274,
            lat: 2873049.332,
            name: 'name5'
        },
        {
            lng: 642109.318,
            lat: 2873043.774,
            name: 'name5'
        },
        {
            lng: 642135.491,
            lat: 2873001.216,
            name: 'name6'
        },
        {
            lng: 642102.079,
            lat: 2872986.686,
            name: 'name7'
        },
        {
            lng: 642041.409,
            lat: 2872960.388,
            name: 'name8'
        },
        {
            lng: 641986.766,
            lat: 2872933.86,
            name: 'name9'
        }
      ],
      suyuanObj: '',
      nextList: [],
      preList: [],
      ltsmall: false,
      npXian: true,
      ywhun: false,
    }

  },
  mounted() {
    //   startAnimation(this.posList)
    this.$bus.off('suyuanclick')
    this.$bus.on('suyuanclick', (e) => {
        this.suyuanObj = JSON.parse(e).pipename
        notification.success({ message: '系统提示', description: '已选择，请执行分析'})
        // this.search()
        // startAnimation(this.posList)
    })
    window.localStorage.setItem('zhuisuStart', this.startOrStop)
  },
  components: {
  },
  watch: {
      chooseValue (newval, oldVal) {
          clearGraphicsLayer()
          if (newval == 'a') {
              if (this.preList.length == 0) {
                  notification.success({ message: '系统提示', description: '无向上追溯信息'})
              } else {
                  startAnimation(this.preList)
              }
          } else if (newval == 'b') {
              if (this.preList.length == 0) {
                  notification.success({ message: '系统提示', description: '无向下追溯信息'})
              } else {
                  startAnimation(this.nextList)
              }
          } else if (newval == 'c') {
              let allArr = this.preList.concat(this.nextList)
              if (allArr.length == 0) {
                  notification.success({ message: '系统提示', description: '无追溯信息'})
              } else {
                  startAnimation(allArr)
              }
          }
      }
  },
  created() {
  },
  methods: {
    onChange(checkedValues) {
      console.log('checked = ', checkedValues);
      console.log('value = ', this.value);
    },
    mapSet() {
      this.startOrStop = true
      notification.success({ message: '系统提示', description: '请在地图上选择追溯对象'})
      window.localStorage.setItem('zhuisuStart', this.startOrStop)
    },
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
    infiniteHandler($state) {
    },
    searchList () {},
    resultExport () {},
    analysys () {},
    search() {
        this.nextList = []
        this.preList = []
        clearGraphicsLayer()
        if (this.suyuanObj.indexOf('-') !== -1) {
            let vals = this.suyuanObj.split('-')
            let param = {
                inJuncid: vals[0],
                outJuncid: vals[1]
            }
            this.$get(`${apiNames['溯源']}`, param).then(res => {
                if (res.result.next.length == 0) {

                } else {
                    if (res.result.next.length == 1) {
                        this.nextList = [
                            {
                                lng: res.result.next[0].startx,
                                lat: res.result.next[0].starty,
                                name: elem.pipename1
                            },
                            {
                                lng: res.result.next[0].endx,
                                lat: res.result.next[0].endy,
                                name: elem.pipename1
                            }
                        ]
                    } else {
                        res.result.next.forEach(elem => {
                            this.nextList.push({
                                lng: elem.startx,
                                lat: elem.starty,
                                name: elem.pipename1
                            })
                        });
                    }
                }
                if (res.result.pre.length == 0) {
                    notification.success({ message: '系统提示', description: '无向上追溯信息'})
                } else {
                    if (res.result.pre.length == 1) {
                        this.preList = [
                            {
                                lng: res.result.pre[0].startx,
                                lat: res.result.pre[0].starty,
                                name: elem.pipename1
                            },
                            {
                                lng: res.result.pre[0].endx,
                                lat: res.result.pre[0].endy,
                                name: elem.pipename1
                            }
                        ]
                    } else {
                        res.result.pre.forEach(elem => {
                            this.preList.unshift({
                                lng: elem.startx,
                                lat: elem.starty,
                                name: elem.pipename1
                            })
                        });
                    }
                    setCenterAndZoom(res.result.pre[0].startx, res.result.pre[0].starty, 1)
                    startAnimation(this.preList)
                }
            })
        } else {
            notification.success({ message: '系统提示', description: '请输入正确的格式'})
        }
    }
  },
  beforeDestroy() {
      window.localStorage.setItem('zhuisuStart', false)
  }
}
</script>
 
<style>
    .ant-switch {
        background: rgb(24 76 121 / 78%);
    }
    .ant-switch-checked {
        background: #1890ff
    }
    .ant-input {
        background: #205187!important;
        color: white;
        border: .02rem solid #03ace3;
        height: .5rem;
    }
    .suyuan .ant-radio-button-wrapper {
        height: 25px;
        line-height: 25px;
    }
    .suyuan .ant-checkbox-group-item {
        margin-right: 0; 
    }
</style>
<style scoped lang='scss'>
    .titleName {
        width: 191px;
        height: 26px;
        line-height: 26px;
        text-indent: 10px;
        background: #205187;
        border: 1px solid #00B7EE;
        border-radius: 2px;
        text-align: left;
        margin: 20px 0 0 26px;
    }
    .chooseModule {
        display: flex;
        padding: 0 0 0 26px;
        margin-top: 10px;
        .activeClass {
            background-image: url('../../../assets/imgs/zhihuipaishui/ppline/selected.png');
            background-size: 100% 100%;
            color: rgba(0, 183, 238, 1);
        }
        .titleNameC {
            width: 46px;
            // position: relative;
            height: 26px;
            font-size: .36rem;
            line-height: .56rem;
            font-family: SimHei;
        }
        .splitline {
            width: .04rem;
            height: .36rem;
            background: #9599a6;
            margin: .1rem .2rem;
        }
    }
    .centerBack {
        margin: 0 26px;
        margin-top: 8px;
        width: 411px;
        height: 380px;
        background: rgba(12, 30, 66, 0.9);
        padding: 10px 17px;
        .button {
            width: 69px;
            height: 21px;
            background: #329CD7;
            border: 1px solid #00B7EE;
            border-radius: 5px;
        }
    }
    .right {
      cursor: pointer;
      width: 489px;
      height: 98%;
      position: absolute;
      z-index: 10;
      right: 1.4rem;
      top: 0;
      display: flex;
      flex-direction: column;
      .right_1 {
        width: 489px;
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
        width: 489px;
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
        .line {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding: 0 20px;
            width: 369px;
            height: 26px;
            background: rgba(3, 40, 116, 0.7);
        }
        .questionType {
            width: 100%;
            background: #043b7a;
            .questionType_line {
                display: flex;
                width: 100%;
                height: .8rem;
                line-height: .8rem;
                // justify-content: space-between;
            }
            .questionType2 {
                display: flex;
                width: 100%;
                height: .8rem;
                line-height: .8rem;
                div {
                    width: 33.3%;
                }
            }
        }
        .questionArr {
          width: 100%;
          height: calc(100% - 500px);
          overflow: hidden;
          position: relative;
          font-size: .28rem;
          // margin: 0 4%;
          .header {
            display: flex;
            div {
              // flex: 1;
              height: .68rem;
              background: rgb(0,0,0,0.35);
              text-align: center;
              line-height: .68rem;
              border: .02rem solid #205187;
              border-right: none;
              border-bottom: none;
              flex-grow: 2;
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
                // width: 240px;
                height: .68rem;
                background: rgb(0,0,0,0.35);
                text-align: center;
                line-height: .68rem;
                border: .02rem solid #205187;
                border-right: none;
                // flex-grow: 2;
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