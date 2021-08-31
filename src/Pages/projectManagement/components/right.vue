<template>
      <div class="right">
        <div class="right_1">
          <img class="lightClass" src="../../../assets/imgs/zhihuipaishui/pjmanage/light.png" alt="">
          <div style="display: flex;width:100%">
            <div class="titleNameC">
              问题处理统计
            </div>
            <div style="width: 1.5rem;height: .6rem;margin-left: 3rem;">
              <!-- mode="multiple" -->
                <a-select
                  style="width: 100%"
                  placeholder="请选择"
                  optionFilterProp = "children"
                  v-model="selectedRole"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in dayList" :key="roleindex.toString()" :value="role.id">
                    {{ role.name }}
                  </a-select-option>
                </a-select>
            </div>
          </div>
          <echart config="问题处理统计" width="100%"></echart>
        </div>
        <div class="right_2">
          <img class="lightClass" src="../../../assets/imgs/zhihuipaishui/pjmanage/light.png" alt="">
          <div style="display: flex;">
            <div class="titleName">
              缺陷问题
            </div>
          </div>
          <div style="width: 80%;margin-left: 10%;margin-top: .3rem;display: flex;flex-wrap: wrap;">
            <div style="width: 46%;margin: 0 2% 2% 0;">
                <a-select
                allowClear
                style="width: 100%"
                placeholder="处理状态"
                optionFilterProp = "children"
                v-model="selectedDeal"
                :getPopupContainer= "(target) => target.parentNode">
                <a-select-option v-for="(role,roleindex) in dealList" :key="roleindex.toString()" :value="role.id">
                  {{ role.name }}
                </a-select-option>
              </a-select>
            </div>
            <div style="width: 50%">
                <a-select
                allowClear
                style="width: 100%"
                placeholder="所属道路"
                optionFilterProp = "children"
                v-model="selectedRoad"
                :getPopupContainer= "(target) => target.parentNode">
                <a-select-option v-for="(role,roleindex) in roadList" :key="roleindex.toString()" :value="role.id">
                  {{ role.name }}
                </a-select-option>
              </a-select>
            </div>
            <div style="width: 46%;margin: 0 2% 2% 0;">
                <a-select
                allowClear
                style="width: 100%"
                placeholder="材料"
                optionFilterProp = "children"
                v-model="selectedMaterial"
                :getPopupContainer= "(target) => target.parentNode">
                <a-select-option v-for="(role,roleindex) in materialList" :key="roleindex.toString()" :value="role.value">
                  {{ role.title }}
                </a-select-option>
              </a-select>
            </div>
            <div style="width: 50%">
                <a-select
                allowClear
                style="width: 100%"
                placeholder="缺陷类型"
                optionFilterProp = "children"
                v-model="selectedCheckType"
                :getPopupContainer= "(target) => target.parentNode">
                <a-select-option v-for="(role,roleindex) in checktypeList" :key="roleindex.toString()" :value="role.value">
                  {{ role.title }}
                </a-select-option>
              </a-select>
            </div>  
          </div>
          <div class="questionArr"> 
              <div class="questionArr_content">
                  <div class="questionArr_content_item" v-for="(item, index) in pipedefectsArr" :key="index">
                      <div class="imgClass">
                        <img style="width: 100%; height: 100%;" :src="item.fileRelat" alt="">
                      </div>
                      <div class="center">
                        <div><span :title="`${item.inJuncid}-${item.outJuncid}`" class="hideTextAndEllipsis" style="width: 2rem;display: inline-block;vertical-align: middle;">{{ item.inJuncid }}-{{ item.outJuncid }}</span><span style="margin-left: .3rem;vertical-align: middle;">{{ item.recordDat }}</span></div>
                        <div><span :title="`${item.material_dictText}`" class="hideTextAndEllipsis" style="width: 2rem;display: inline-block;vertical-align: middle;">材质：{{ item.material_dictText }}</span><span style="margin-left: .3rem;vertical-align: middle;">{{ shapeName[Number(item.shapetype)] }}：{{ Number(item.shapeData).toFixed(0) }}米</span></div>
                        <div :title="`${item.checkType_dictText}${leftArow}${item.defectNam}${leftArow}${item.checkRect}`" class="hideTextAndEllipsis" style="width: 4rem;">{{ item.checkType_dictText }}{{ leftArow }}{{ item.defectNam }}{{ leftArow }}{{ item.checkRect }}</div>
                      </div>
                      <div style="line-height: .6rem;margin-top: .3rem;">
                        <img style="width: .46rem;height: .6rem;" :src="position" alt="">
                        <div style="font-size: .24rem;" :style="item.is_dispose == 0 ? 'color: #FF000B;' : 'color: #00FF00;'">{{ item.isDispose_dictText }}</div>
                      </div>
                  </div>
                  <infinite-loading  :distance="distance" @infinite="infiniteHandler">
                      <div slot="spinner">加载中...</div>
                      <div slot="no-more">已加载完毕!</div>
                      <div slot="no-results">暂无数据:(</div>
                  </infinite-loading>
              </div>
          </div>
        </div>
      </div>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import InfiniteLoading from 'vue-infinite-loading';
import { apiNames, dictCodebyName } from '../../../Utils/config'
export default {
  name: 'right',
  data() {
    return {
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
      dealList: [
        {
          id: 0,
          name: '未处理'
        },
        {
          id: 1,
          name: '已处理'
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
      stateEle: null
    }

  },
  mounted() { 
    this.getDictItems()
  },
  components: {
    InfiniteLoading
  },
  watch: {
    selectedDeal () {
      this.pageNo = 1
      this.pipedefectsArr = []
      this.getpipedefectsAll (this.stateEle)
    },
    selectedRoad () {
      this.pageNo = 1
      this.pipedefectsArr = []
      this.getpipedefectsAll (this.stateEle)
    },
    selectedMaterial () {
      this.pageNo = 1
      this.pipedefectsArr = []
      this.getpipedefectsAll (this.stateEle)
    },
    selectedCheckType () {
      this.pageNo = 1
      this.pipedefectsArr = []
      this.getpipedefectsAll (this.stateEle)
    }
  },
  created() {
  },
  methods: {
    addUrl (url) {
      if (url) {
        let addUrl = `http://192.168.3.132:8082/yufan/sys/common/static/${url}`
        return addUrl
      } else {
        return ''
      }
    },
    getpipedefectsAll ($state) {
      this.stateEle = $state
      let params = {
        pageNo: this.pageNo,
        pageSize: 8,
        isDispose: this.selectedDeal,
        material: this.selectedMaterial,
        checkType: this.selectedCheckType
      }
      this.$get(apiNames['缺陷问题统计列表'], params).then(res => {
        if (this.pipedefectsArr.length > res.result.total) {
            $state.complete();
            return;
        }
        if (res.code == 0 && res.result.records.length !== 0) {
            this.pipedefectsArr = this.pipedefectsArr.concat(res.result.records)
            this.pageNo++
            $state.loaded(); 
        } else {
          if (this.pageNo == 1) {
            this.pipedefectsArr = []
          }
          $state.complete();
          return;
        }
      })
    },
    infiniteHandler($state) {
      this.getpipedefectsAll($state)
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
      width: 7.72rem;
      height: 98%;
      position: absolute;
      z-index: 10;
      right: .4rem;
      top: 0;
      display: flex;
      flex-direction: column;
      .right_1 {
        width: 7.72rem;
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
        width: 7.72rem;
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
          height: calc(100% - 2.7rem);
          overflow: hidden;
          position: relative; 
          .questionArr_content {
            position: absolute;
            overflow: auto;
            width: 105%;
            height: 100%;
            .questionArr_content_item {
              display: flex;
              margin: .3rem 0 0 .6rem;
              .imgClass {
                width: 1.84rem;
                height: 1.84rem;
              }
              .center {
                text-align: left;
                font-size: .28rem;
                line-height: .5rem;
                margin: .1rem .2rem 0 .2rem;
              }
            }
          }
        }
      }
    }
</style>