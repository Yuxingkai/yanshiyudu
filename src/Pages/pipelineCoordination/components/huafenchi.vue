<template>
      <div>
        <div class="right_2">
          <div class="chooseModule">
            <div :class="chooseNum === 1 ? 'activeClass' : ''" class="titleName" @click=choose(1)>
              属性列表
            </div>
            <div class="splitline"/>
            <div :class="chooseNum === 2 ? 'activeClass' : ''" class="titleName marginleft" @click=choose(2)>
              编辑
            </div>
          </div>
          <div id="searchList" v-if="chooseNum === 1" style="background: #00143C;border: .02rem solid #205187;font-size: .36rem;text-align: left;padding-left: .4rem;margin-bottom: .28rem;">
            <div style="margin-top: .34rem;">
                <span>所属项目: </span>
                <a-select
                  style="width: 2.3rem;margin-right: .3rem;"
                  allowClear
                  show-search
                  :filter-option="filterOption"
                  @change="handleChangeXM"
                  placeholder="项目名称"
                  v-model="searchForm.proId"
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
                  v-model="searchForm.gcId"
                  :getPopupContainer= "(target) => target.parentNode">
                  <a-select-option v-for="(role,roleindex) in gcNameArr" :key="roleindex.toString()" :value="role.gcid">
                    {{ role.gcName }}
                  </a-select-option>
                </a-select>
            </div>
            <div style="margin-top: .34rem;">
              <span style="margin-right: .3rem;">区域:</span>
              <a-cascader
                  :defaultValue="defaultValue"
                  style="width: 2.76rem;margin-right: .3rem;color: white;"
                  :options="areaArr"
                  :load-data="loadData"
                  :placeholder="placeholder"
                  change-on-select
                  @change="onChangeArea"
              />
            </div>
            <div style="margin-top: .34rem;">
              <span style="margin-right: .3rem;">主管单位:</span>
              <a-select
                style="width: 2.76rem"
                allowClear
                placeholder="主管单位"
                optionFilterProp = "children"
                v-model="searchForm.manager"
                :getPopupContainer= "(target) => target.parentNode">
                <a-select-option v-for="(role,roleindex) in roadArr" :key="roleindex.toString()" :value="role.value">
                  {{ role.title }}
                </a-select-option>
              </a-select>
            </div>
            <div style="margin-top: .34rem;">
              <span style="margin-right: .3rem;">化粪池编码:</span>
              <a-input v-model="searchForm.septictacode" style="width: 1.5rem" placeholder="" />
              <span style="margin-right: .3rem;margin-left: .1rem;">接入检查井编码:</span>
              <a-input v-model="searchForm.manholecode" style="width: 1.5rem" placeholder="" />
            </div>
            <div v-if="moreSearch">
              <div style="margin-top: .34rem;">
                <span style="margin-right: .3rem;">化粪池名称:</span>
                <a-input v-model="searchForm.name" style="width: 3rem" placeholder="" />
              </div>
              <div style="margin-top: .34rem;">
                <span style="margin-right: .3rem;">排水系统:</span>
                <a-input v-model="searchForm.systemCode" style="width: 3rem" placeholder="" />
              </div>
            </div>
            <div style="margin: .34rem 0;">
              <a-checkbox style="font-size: .34rem;">
                空间分布
              </a-checkbox>
              <span v-if="!moreSearch" @click="showMore" style="font-size: .34rem;color: #00B7EE;margin-left: .5rem;">更多</span>
              <span v-if="!moreSearch" @click="showMore" style="color: #00B7EE;">... ...</span>
              <a-icon v-if="moreSearch" @click="showLess" style="margin-left: 1.5rem;" type="double-right" :rotate="-90" />
              <span @click="searchBySome" style="display: inline-block;width: 1.14rem;height: .5rem;background: #3F83B8;border-radius: .1rem;text-align: center;margin-left: 3rem;font-size: .34rem;">查询</span>
            </div>
          </div>
          <div v-if="chooseNum === 1" class="questionArr">
              <div class="header">
                <div>
                    化粪池编码
                </div>
                <div>
                    尺  寸
                </div>
                <div>
                    接入井编码
                </div>
                <div>
                    主管单位
                </div>
                <div>
                    化粪池地址
                </div>
              </div>
              <div class="questionArr_content">
                <div class="questionArr_content_item" v-for="(item, index) in pipeArrList" :key="index" @click.stop="showDetial(item)">
                    <div :title="item.septictacode" class="hideTextAndEllipsis">
                        {{ item.septictacode }}
                    </div>
                    <div class="hideTextAndEllipsis">
                        -
                    </div>
                    <div :title="item.manholecode" class="hideTextAndEllipsis">
                        {{ item.manholecode }}
                    </div>
                    <div>
                        {{ item.manager || '-' }}
                    </div>
                    <div>
                        -
                    </div>
                </div>
                <infinite-loading v-if="infiniteShow" :distance="distance" @infinite="infiniteHandler">
                    <div slot="spinner">加载中...</div>
                    <div slot="no-more">已加载完毕!</div>
                    <div slot="no-results">暂无数据</div>
                </infinite-loading>
              </div>
          </div>
          <div id="addNewPipe" v-if="chooseNum === 2" style="position: relative;overflow: hidden;height: 90%;">
            <div style="position: absolute;overflow: auto;height: 100%;width: 105%;">
                <div class="pipeInfo">
                   <div class="titleBac">编辑</div>
                   <div class="conTain">
                      <div class="line">
                        <div>
                          <span>化粪池编码: </span>
                          <a-input style="width: 2.6rem;" placeholder="" v-model="huafenchiObj.septictacode" />
                        </div>
                        <div>
                          <span>接入检查井编码: </span>
                          <a-input style="width: 2.6rem;" placeholder="" v-model="huafenchiObj.manholecode" />
                        </div>
                      </div>
                      <div class="line">
                        <div>
                          <span>所在区域: </span>
                          <a-cascader
                              :defaultValue="defaultValue"
                              style="width: 2.76rem;margin-right: .3rem;color: white;"
                              :options="areaArr"
                              :load-data="loadData"
                              :placeholder="placeholder"
                              change-on-select
                              @change="onChangeArea"
                          />
                        </div>
                      </div>
                      <div class="line">
                        <div>
                          <span>所属项目: </span>
                          <a-select
                            style="width: 2.3rem;margin-right: .3rem;"
                            allowClear
                            show-search
                            :filter-option="filterOption"
                            @change="handleChangeXM"
                            placeholder="项目名称"
                            v-model="huafenchiObj.proId"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in xmNameArr" :key="roleindex.toString()" :value="role.id">
                              {{ role.xmmc }}
                            </a-select-option>
                          </a-select>
                        </div>
                        <div>
                          <span>所属工程: </span>
                          <a-select
                            style="width: 2.3rem"
                            allowClear
                            show-search
                            :filter-option="filterOptiongc"
                            placeholder="工程名称"
                            optionFilterProp = "children"
                            v-model="huafenchiObj.gcId"
                            :getPopupContainer= "(target) => target.parentNode">
                            <a-select-option v-for="(role,roleindex) in gcNameArr" :key="roleindex.toString()" :value="role.gcid">
                              {{ role.gcName }}
                            </a-select-option>
                          </a-select>
                        </div>
                      </div>
                      <div class="line">
                        <div>
                          <span>主管单位: </span>
                          <a-select
                              style="width: 2.6rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="huafenchiObj.manager"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in roadArr" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                        </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>化粪池名称: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="huafenchiObj.name" />
                          </div>
                          <div>
                            <span>尺寸: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="huafenchiObj.septictank_size" />
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>化粪池地址: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="huafenchiObj.addr" />
                        </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>起点X: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="huafenchiObj.x_coor" />
                          </div>
                          <div>
                            <span>起点Y: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="huafenchiObj.y_coor" />
                          </div>
                          <div @click="getPoint">
                            坐标拾取
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>数据来源: </span>
                            <a-select
                              style="width: 2.8rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="huafenchiObj.datasource"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in yesOrNo" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                          <div>
                            <span>排水系统: </span>
                            <a-select
                              style="width: 2.8rem;"
                              placeholder="请选择"
                              :showArrow="showArrow"
                              optionFilterProp = "children"
                              v-model="huafenchiObj.systemid"
                              :getPopupContainer= "(target) => target.parentNode">
                              <a-select-option v-for="(role,roleindex) in yesOrNo" :key="roleindex.toString()" :value="role.value">
                                {{ role.title }}
                              </a-select-option>
                            </a-select>
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>组织机构代码: </span>
                            <a-input style="width: 2.6rem;" placeholder="" v-model="huafenchiObj.codeid" />
                          </div>
                      </div>
                      <div class="line">
                          <div>
                            <span>数据获取日期: </span>
                            <a-locale-provider :locale="zhCN">
                              <a-date-picker format="YYYY-MM-DD" style="width: 2.5rem;" @change="reportDateChoose" />
                            </a-locale-provider>
                          </div>
                          <div>
                            <span>填报日期: </span>
                            <a-locale-provider :locale="zhCN">
                              <a-date-picker format="YYYY-MM-DD" style="width: 2.5rem;" @change="dateChoose" />
                            </a-locale-provider>
                          </div>
                      </div>
                      <div class="line">
                        <div style="width: 100%;">
                            <span>备注: </span>
                            <a-input style="width: 70%;" v-model="huafenchiObj.remark" placeholder="" />
                          </div>
                      </div>
                      <div class="actionsButtton">
                          <div @click="addNewHuafcMeth">新增</div>
                          <div @click="editHuafenchi">修改</div>
                          <div>
                            <a-locale-provider :locale="zhCN">
                              <a-popconfirm
                                title="确认删除?"
                                @confirm="confirmDelete"
                                @cancel="cancelDelete"
                              >
                                <a href="javascript:;" style="color: white;">删除</a>
                              </a-popconfirm>
                             </a-locale-provider>
                          </div>
                          <div @click="clearData">清空</div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
        <a-locale-provider :locale="zhCN">
          <a-modal :width="680" :footer="footerShow" v-model="videoShow3" title="照片">
            <img style="width: 630px;height: 450px;" :src="largePic" alt="">
          </a-modal>
        </a-locale-provider>
        <a-locale-provider :locale="zhCN">
          <a-modal :width="600" :footer="footerShow" v-model="videoShow1" title="视频">
            <!-- <video style="width: 500px;height: 450px;" autoplay="autoplay" muted controls="controls" src="../../../assets/JWGGW30_JWGGW29.mp4"></video> -->
          </a-modal>
        </a-locale-provider>

        <a-locale-provider :locale="zhCN">
          <a-modal :width="600" :footer="footerShow" v-model="videoShow2" title="视频">
            <!-- <video style="width: 500px;height: 450px;" autoplay="autoplay" muted controls="controls" src="../../../assets/JWGGW30_JWGGW29修复后.mp4"></video> -->
          </a-modal>
        </a-locale-provider>
      </div>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import InfiniteLoading from 'vue-infinite-loading';
import {notification} from 'ant-design-vue'
import moment from 'moment';
import 'moment/locale/zh-cn'
moment.locale('zh-cn');
import { apiNames } from '../../../Utils/config'
import { getFormatDate, guid } from '../../../Utils/Com'
import { enableCreatePoly, editPolyline, deletePolyline, editPolylineNext, showInmap, getPointAddress2, addFeatureByPoint, searchGraphicByObjectId, editFeatureByPoint, deleteFeatureByPoint } from '../../../Maps/mapApi.js'
export default {
  name: 'huafenchi',
  data() {
    return {
      huafenchiObj: {
          septictacode: null,
          manholecode: null,
          district_id: null,
          manager: null,
          name: null,
          septictank_size: null,
          addr: null,
          x_coor: null,
          y_coor: null,
          datasource: null,
          systemid: null,
          codeid: null,
          record__date: null,
          report_date: null,
          remark: null,
          proId: '',
          gcId: ''
      },
      defaultValue: [],
      placeholder: '',
      infiniteShow: true,
      videoShow1: false,
      videoShow2: false,
      videoShow3: false,
      footerShow: false,
      zhCN,
      dataSource: [
      ],
      chooseNum: 1,
      distance: 100,
      popShow: false,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      dataUrl: '',
      addJianchaFormField: {
        manholecode: '检查井号不能为空',
        manhole_category: '类别不能为空',
        locationcode: '所在道路不能为空'
      },
      addJianchaForm: {
        manholecode: null,
        locationcode: null,
        district_id: null,
        district_name: null,
        manhole_category: null,
        manhole_type: null,
        manhole_style: null,
        cov_material: null,
        depth: null,
        surface_el: null,
        y_coor: null,
        x_coor: null,
        hybjunctio: null,
        connected: null,
        status: null,
        is_complete: null,
        datasource: null,
        report_unit: null,
        report_date: null,
        construction_age: null,
        antifallin: null,
        bottom_style: null,
        junc_class: null,
        remark: ''
      },
      checkType: [],
      showArrow: false,
      pipeCateg: [],
      pipeMaterial: [],
      flowdirectArr: [],
      checkMethodArr: [],
      isCompleteArr: [],
      isDisposeArr: [],
      selectedDeal: [],
      selectedRoad: [],
      selectedMaterial: [],
      selectedCheckType: [],
      pipeArrList: [],
      stateEle: null,
      pageNo: 1,
      objData: {},
      septictankid: '',
      addType: 'polyLine',
      chooseobjectid: '',
      moreSearch: false,
      allRoadids: [],
      roadArr: [],
      manholeTypeArr: [],
      manholeStyleArr: [],
      yesOrNo: [
        {
          value: 0,
          title: '否'
        },
        {
          value: 1,
          title: '是'
        }
      ],
      manholeDefectsArr: [],
      areaArr: [
        {
          value: 360731,
          title: '于都县'
        }
      ],
      selectedArea: 360731,
      searchForm: {
        districtId: '',
        manager: '',
        pageNo: 1,
        pageSize: 18,
        septictacode: '',
        proId: '',
        gcId: '',
        manholecode: '',
        name: '',
        systemCode: ''
      },
      largePic: '',
      xmNameArr: [],
      gcNameArr: []
    }

  },
  mounted() {
    this.getXMname()
    this.getProvinceInfo()
    this.$bus.off('writePipeForm')
    this.$bus.on('writePipeForm', (e) => {
      this.choose(2)
      this.addType = e
    })
    this.$bus.off('getPointXY')
    this.$bus.on('getPointXY', (e) => {
      this.huafenchiObj.x_coor = e.x
      this.huafenchiObj.y_coor = e.y
    })
    this.$bus.off('removesearchMapData')
    this.$bus.on('removesearchMapData', () => {
      this.pipeArrList = []
      this.infiniteShow = true
    })
    this.$bus.off('searchMapData')
    this.$bus.on('searchMapData', () => {
      this.pipeArrList = []
      this.infiniteShow = false
      let searchMapData = JSON.parse(window.localStorage.getItem('searchMapData')).filter((item) => {
        return item.layerId == 2
      })
      searchMapData.forEach((ele) => {
        // ele.feature.attributes
        ele.feature.attributes.surfaceEl = ele.feature.attributes.surface_el
        ele.feature.attributes.manholeCategory_dictText = this.getmanholeCategoryDictText(ele.feature.attributes.manhole_category)
        this.pipeArrList.push(ele.feature.attributes)
      })
    })
    if (window.localStorage.getItem('searchMapData')) {
      this.pipeArrList = []
      this.infiniteShow = false
      let searchMapData = JSON.parse(window.localStorage.getItem('searchMapData')).filter((item) => {
        return item.layerId == 2
      })
      searchMapData.forEach((ele) => {
        // ele.feature.attributes
        ele.feature.attributes.surfaceEl = ele.feature.attributes.surface_el
        ele.feature.attributes.manholeCategory_dictText = this.getmanholeCategoryDictText(ele.feature.attributes.manhole_category)
        this.pipeArrList.push(ele.feature.attributes)
      })
    }
    console.log(new Date())
          this.$bus.off('septictankForm')
          this.$bus.on('septictankForm',(atrObj1) => {
              let obj = JSON.parse(atrObj1)
              let atrObj = {
                septictacode: obj.septictacode,
                manholecode: obj.manholecode,
                district_id: obj.districtId,
                manager: obj.manager,
                name: obj.name,
                septictank_size: obj.septictankSize,
                addr: obj.addr,
                x_coor: obj.xcoor,
                y_coor: obj.ycoor,
                datasource: obj.datasource,
                systemid: obj.systemid,
                codeid: obj.codeid,
                record__date: obj.recordDate,
                report_date: obj.reportDate,
                remark: obj.remark,
                objectid: obj.objectid
              }
              this.actionDo(atrObj)
          })
          this.$bus.off('chooseSecond')
          this.$bus.on('chooseSecond', () => {
            this.choose(2)
          })
  },
  watch: {
    chooseNum (newVal, oldVal) {
      this.nowPipeid = ''
      console.log(newVal, 'newValnewValchooseNumchooseNum')
      if (newVal == 1) {
        this.clearData()
      }
      this.clearAlladd()
    },
  },
  created() {
    let allDictItems = JSON.parse(window.localStorage.getItem('allDictItems'))
    this.checkType = allDictItems.check_type
    // 管道类型
    this.pipeCateg = allDictItems.pipe_categ
    // 管段材质
    this.pipeMaterial = allDictItems.material
    // 检测方向
    this.flowdirectArr = allDictItems.flowdirect
    // 检测方法
    this.checkMethodArr = allDictItems.check_method
    // 完成状态
    this.isCompleteArr = allDictItems.is_complete
    // 设施状态
    this.pipeStatusArr = allDictItems.pipe_status
    // 处理状态
    this.isDisposeArr = allDictItems.is_dispose
    // 检查井类型
    this.manholeTypeArr = allDictItems.manhole_type
    // 检查井形式
    this.manholeStyleArr = allDictItems.manhole_style
    // 检查井缺陷
    this.manholeDefectsArr = allDictItems.manholeDefects
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
      this.searchForm.proId = one.id
      this.searchForm.districtId = one.district_id
      this.searchForm.districtName = one.district_name
      this.huafenchiObj.district_id = one.district_id
      this.huafenchiObj.district_name = one.district_name

      this.placeholder = one.district_name
      this.queryBydistrictId(one.district_id)
      this.getGcByProid(one.id)
    },
    getXMname () {
      this.$get(apiNames['获取项目名称']).then(res => {
          if (res.code == 200 && res.result.length !== 0) {
            this.xmNameArr = res.result
            this.searchForm.proId = res.result[0].id
            this.searchForm.districtId = res.result[0].district_id
            this.searchForm.districtName = res.result[0].district_name
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
    onChangeArea(value, selectedOptions) {
        this.searchForm.districtId = value.join(',')
        this.placeholder = ''
        // for (let i = 0; i < selectedOptions.length; i++) {
        //     this.searchForm.districtName += selectedOptions[i].label + '/'
        //     this.addJianchaForm.district_name += selectedOptions[i].label + '/'
        // }
        this.queryBydistrictId(this.searchForm.districtId)
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
    getmanholeCategoryDictText (manholeCate) {
      if (manholeCate == 1) {
        return '雨水井'
      } else if (manholeCate == 2) {
        return '污水井'
      } else if (manholeCate == 3) {
        return '合流井'
      } else {
        return '其他'
      }
    },
    queryBydistrictId (disId) {
        this.allRoadids = []
        this.roadArr = []
        this.$get(apiNames['获取所属道路表'], {districtId: disId}).then(res => {
          if (res.code == 200) {
              res.result.forEach(element => {
                  this.roadArr.push({
                      title: element.locationname,
                      value: element.locationcode
                  })
                  this.allRoadids.push(element.locationcode)
              });
          } else {
          this.roadArr = []
          }
        })
    },
    getPoint () {
      notification.success({ message: '系统提示', description: '请在地图上选点'})
      getPointAddress2((e) => {
          this.$set(this.huafenchiObj, 'x_coor', e.geometry.x)
          this.$set(this.huafenchiObj, 'y_coor', e.geometry.y)
      })
    },
    showMore () {
      this.moreSearch = true
    },
    showLess () {
      this.moreSearch = false
    },
    moment,
    onChange (date) {
      this.editPipeForm.recordDat = moment(date).format('YYYY-MM-DD')
    },
    searchBySome () {
      if (this.infiniteShow) {
        this.searchForm.pageNo = 1
        this.pipeArrList = []
        this.infiniteHandler(this.stateEle)
      } else {
      }
    },
    queryPipeList ($state) {
      this.stateEle = $state
      setTimeout(() => {
        this.$post(apiNames['化粪池列表'], this.searchForm).then(res => {
          console.log(res)
          if (this.pipeArrList.length > res.result.total) {
              $state.complete();
              return;
          }
          if (res.code == 0 && res.result.records.length !== 0) {
              this.pipeArrList = this.pipeArrList.concat(res.result.records)
              this.searchForm.pageNo++
              $state.loaded(); 
          } else {
            if (this.searchForm.pageNo == 1) {
              this.pipeArrList = []
            }
            $state.complete();
            return;
          }
        })
      }, 1000)
      
    },
    checkIsEmty () {
      let boolean = false
      for (const key in this.addJianchaForm) {
        if (Object.hasOwnProperty.call(this.addJianchaFormField, key)) {
          const element = this.addJianchaForm[key];
          if (element === '' || element === null ) {
            notification.error({ message: '添加提示', description: this.addJianchaFormField[key]})
            return false
          } else {
            boolean = true
            continue
          }
        }
      }
      return boolean
    },
    async addNewHuafcMeth () {
        let septictankid = 'A06' + guid()
        this.huafenchiObj.septictankid = septictankid
        this.huafenchiObj.del_flag = 0
        addFeatureByPoint(this.huafenchiObj, 'point', 'huafenchi')
    //   let checkStatus = this.checkIsEmty()
    //   if (checkStatus) {
    //     let filtArr = await this.groupByjuncid(this.addJianchaForm)
    //     if (filtArr[1].length !== 0) {
    //       notification.error({ message: '添加提示', description: '此检查井已存在，请勿重复添加'})
    //     } else {
    //       let septictankid = 'A03' + guid()
    //       this.addJianchaForm.septictankid = septictankid
    //       this.addJianchaForm.del_flag = 0
    //       if (this.addJianchaForm.x_coor && this.addJianchaForm.y_coor) {
    //         addFeatureByPoint(this.addJianchaForm, 'point', 'jianchajing')
    //       } else {
    //         enableCreatePoly(this.addJianchaForm, 'point', false, 'jianchajing')
    //       }
    //     }
    //   }
    },
    groupByjuncid (data) {
      let params = {
        params: [data],
        type: 'manhole'
      }
      return new Promise((resolve, reject)=>{
          this.$post(`${apiNames['导出数据分组']}`, params).then(res => {
              let getData = res
              resolve(getData)
          })
      })
    },
    editHuafenchi () {
        this.huafenchiObj.septictankid = this.septictankid
        this.huafenchiObj.objectid = this.chooseobjectid
        this.huafenchiObj.del_flag = 0
        editFeatureByPoint(this.huafenchiObj, 'point', 'huafenchi')
    //   let checkStatus = this.checkIsEmty()
    //   if (checkStatus) {
    //     this.addJianchaForm.septictankid = this.septictankid
    //     this.addJianchaForm.objectid = this.chooseobjectid
    //     this.addJianchaForm.del_flag = 0
    //     if (this.addJianchaForm.x_coor && this.addJianchaForm.y_coor) {
    //       editFeatureByPoint(this.addJianchaForm, 'point', 'jianchajing')
    //     }
    //   }
    },
    confirmDelete(e) {
    //   console.log(this.addJianchaForm)
    //   this.addJianchaForm.objectid = this.chooseobjectid
      deleteFeatureByPoint(this.huafenchiObj, 'point', 'huafenchi')
    },
    cancelDelete(e) {
      console.log(e);
      // this.$message.error('Click on No');
    },
    editPipe () {
      // editPolylineNext(this.editPipeForm)
      this.editPipeForm.septictankid = this.septictankid
      this.editPipeForm.objectid = this.chooseobjectid
      if (this.editPipeForm.x_coor && this.editPipeForm.y_coor) {
        addFeatureByPoint(this.addJianchaForm, 'point', 'jianchajing')
      } else {
        enableCreatePoly(this.addJianchaForm, 'point', false, 'jianchajing')
      }
    },
    dateChoose (date) {
      this.huafenchiObj.report_date = moment(date).format('YYYY-MM-DD')
    },
    reportDateChoose (date) {
      this.huafenchiObj.record__date = moment(date).format('YYYY-MM-DD')
    },
    clearData () {
      this.addJianchaForm = {
        manholecode: '',
        locationcode: '',
        manhole_category: '',
        manhole_type: null,
        manhole_style: null,
        cov_material: null,
        depth: null,
        surface_el: null,
        y_coor: null,
        x_coor: null,
        hybjunctio: null,
        connected: null,
        status: null,
        is_complete: null,
        datasource: null,
        report_unit: null,
        report_date: null,
        construction_age: null,
        antifallin: null,
        bottom_style: null,
        junc_class: null,
        remark: ''
      }
    },
    clearAlladd () {
      this.addDefetsForm = {
        file_relation: '',
        file_relatafter: '',
        defect_name: '',
        defect_code: '',
        remark: '',
        check_rectify: ''
      },
      this.$forceUpdate()
      this.dataUrlqian = ''
      this.dataUrlhou = ''
    },
    actionDo (item) {
      this.objData = item
      let parseArr = item
      this.queryBydistrictId(item.districtId)
      this.placeholder = item.districtName
      this.huafenchiObj = {
          septictacode: item.septictacode,
          manholecode: item.manholecode,
          district_id: item.districtId,
          manager: item.manager,
          name: item.name,
          septictank_size: item.septictankSize,
          addr: item.addr,
          x_coor: item.xcoor,
          y_coor: item.ycoor,
          datasource: item.datasource,
          systemid: item.systemid,
          codeid: item.codeid,
          record__date: item.recordDate,
          report_date: item.reportDate,
          remark: item.remark,
          proId: '',
          gcId: ''
      },
      // this.hunjieObj.manjing = item.manholecode
      // this.hunjieObj.y_coor = item.ycoor
      // this.hunjieObj.x_coor = item.xcoor
      this.septictankid = parseArr.septictankid
      this.chooseobjectid = parseArr.objectid
      this.choose(2)
      
      this.getProid(item.locationcode)
      searchGraphicByObjectId(item.objectid, 'ps_septictank')
      // this.popShow = true
      this.queryPipeQxList()
    },
    showDetial (item) {
      showInmap(item, 'ps_septictank')
      this.actionDo(item)
    },
    getProid (locationcode) {
      this.$get(apiNames['获取工程和项目信息'], {locationcode}).then(res => {
        this.huafenchiObj.proId = res.result[0].proId
        this.huafenchiObj.gcId = res.result[0].id
      })
    },
    choose (num) {
      this.chooseNum = num
      console.log(new Date())
      if (num == 1) {
        this.placeholder = ''
      }
    },
    infiniteHandler($state) {
       this.queryPipeList($state)
    },
  },
  beforeDestroy() {
  },
}
</script>
<style lang='scss'>
#addNewPipe input::-webkit-input-placeholder {
        color: white!important
    }
 .right_1 .ant-select {
  color: white;
}
#pppopInfos .ant-input, #pppopInfos .ant-select-selection--single {
  background: #205187!important;
  color: white;
  border: .02rem solid #03ace3;
  height: .5rem;
}
#pppopInfos .ant-select-selection__rendered {
  margin: 0;
  line-height: .52rem;
}
#pppopInfos .ant-select-dropdown-menu-item, #pppopInfos .ant-input {
  padding: 0;
}
#pppopInfos .ant-calendar-picker-clear {
  background: none;
  color: #03ace3
}
#addNewPipe {
  text-align: left;
}
#addNewPipe .ant-input, #addNewPipe .ant-select-selection--single {
  background: #205187!important;
  color: white;
  border: .02rem solid #03ace3;
  height: .5rem;
}
#addNewPipe .ant-select-selection__rendered {
  margin: 0;
  line-height: .52rem;
}
#addNewPipe .ant-select-dropdown-menu-item, #addNewPipe .ant-input {
  padding: 0;
}
#addNewPipe .ant-calendar-picker-clear {
  background: none;
  color: #03ace3
}
#searchList .ant-select-selection--single {
  color: white;
}
#searchList .ant-select-selection__clear {
  background: none;
  color: #03ace3
}
input::-webkit-input-placeholder {
    color: white!important
}
</style>

<style scoped lang='scss'>
    .titleName {
          width: 1.68rem;
          // position: relative;
          height: .56rem;
          font-size: .36rem;
          line-height: .56rem;
          font-family: SimHei;
    }
    .activeClass {
      background-image: url('../../../assets/imgs/zhihuipaishui/ppline/selected.png');
      background-size: 100% 100%;
      color: rgba(0, 183, 238, 1);
    }
    .splitline {
      width: .04rem;
      height: .36rem;
      background: #9599a6;
      margin: .1rem .2rem;
    }
    .smallTitle {
      font-size: .24rem;
      font-family: SimHei;
      color: #07E6ED;
      padding-top: .1rem;
    }
    // .right {
      // cursor: pointer;
      // width: 8.92rem;
      // height: 98%;
      // position: absolute;
      // z-index: 10;
      // right: .4rem;
      // top: 0;
      // display: flex;
      // flex-direction: column;
      .right_2 {
        flex: 1;
        width: 446px;
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        .chooseModule {
          display: flex;
          padding: 0 0 0 .4rem;
          border-top: .02rem solid #205187;
          border-bottom: .02rem solid #205187;
        }
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
        .pipeInfo {
              width: 99%;
            //   min-height: 7.26rem;
              border: .02rem solid #0f4c7f;
              display: inline-block;
              position: relative;
              margin-bottom: .84rem;
              .titleBac {
                width: 94%;
                height: .84rem;
                background-image: url('../../../assets/imgs/zhihuipaishui/ppline/titleBac.png');
                background-size: 100% 100%;
                line-height: .84rem;
                padding-left: 6%;
              }
              .conTain {
                // position: absolute;
                height: 100%;
                width: 100%;
                .line {
                  width: 100%;
                  height: .82rem;
                  border-bottom: .02rem solid #04346a;
                  display: flex;
                  line-height: .82rem;
                  justify-content: flex-start;
                  font-size: .28rem;
                }
                .line >div {
                  margin-left: .15rem;
                };
                .actionsButtton {
                  width: 60%;
                  display: flex;
                  margin-left: 20%;
                  margin-top: .3rem;
                  justify-content: space-around;
                  div {
                    width: .94rem;
                    height: .42rem;
                    font-size: .28rem;
                    background: rgba(84, 83, 83, 1);
                    border-radius: .1rem;
                    text-align: center;
                  }
                  div:hover{
                    background: #2781b4
                  }
                }
              }
            };
      }
      .info {
        position: absolute;
        width: 280%;
        height: 10.8rem;
        background-image: url('../../../assets/imgs/zhihuipaishui/ppline/squareBac.png');
        background-size: 100% 100%;
        bottom: 0;
        right: 8rem;
        z-index: 10;
        .closeButton {
          position: absolute;
          right: .5rem;
          top: .3rem;
          width: .5rem;
          height: .5rem;
          border-radius: .25rem;
        }
        .closeButton:hover {
          // width: .5rem;
          // height: .5rem;
          // border-radius: .25rem;
          background: gray;
        }
        .text {
          text-align: left;
          position: relative;
          padding: .3rem 0 .1rem 0;
          text-indent: .4rem;
          font-size: .36rem;
        }
        .text:after {
          content: '';
          width: 2.2rem;
          height: .18rem;
          position: absolute;
          bottom: -.1rem;
          display:block;
          background-image: url('../../../assets/imgs/zhihuipaishui/pjmanage/split.png');
          background-size: 100% 100%;
        }
        .pipeName {
          display: flex;
          font-size: .36rem;
          margin: .42rem 0 0 .68rem;
          .back {
            width: .94rem;
            height: .42rem;
            background: #2781b4;
            font-size: .28rem;
            line-height: .42rem;
            border-radius: .1rem;
            margin: 0 .24rem 0 1.22rem;
          }
          .add {
            width: 1.54rem;
            height: .42rem;
            background: #2781b4;
            font-size: .28rem;
            line-height: .42rem;
            border-radius: .1rem;
            margin-left: .3rem;
          }
        }
        .scrollContent {
          width: 90%;
          margin:.1rem 0 0 .68rem;
          .content {
            width: 100%;
            white-space: nowrap;
            overflow-x: auto;
            text-align: left;
            .pipeInfo {
              width: 6.54rem;
              height: 9.66rem;
              border: .02rem solid #0f4c7f;
              margin-right: .46rem;
              display: inline-block;
              position: relative;
              .titleBac {
                width: 94%;
                height: .84rem;
                background-image: url('../../../assets/imgs/zhihuipaishui/ppline/titleBac.png');
                background-size: 100% 100%;
                line-height: .84rem;
                padding-left: 6%;
              }
              .conTain {
                position: absolute;
                left: 0;
                top: .84rem;
                width: 100%;
                .line {
                  width: 100%;
                  height: .72rem;
                  border-bottom: .02rem solid #04346a;
                  display: flex;
                  line-height: .72rem;
                  justify-content: flex-start;
                  font-size: .28rem;
                }
                .line >div {
                  margin-left: .15rem;
                };
                .actionsButtton {
                  width: 60%;
                  display: flex;
                  margin-left: 20%;
                  margin-top: .3rem;
                  justify-content: space-around;
                  div {
                    width: .94rem;
                    height: .42rem;
                    font-size: .28rem;
                    background: rgba(84, 83, 83, 1);
                    border-radius: .1rem;
                    text-align: center;
                  }
                  div:hover{
                    background: #2781b4
                  }
                }
              }
            };
          }
        }
      }
    // }
</style>