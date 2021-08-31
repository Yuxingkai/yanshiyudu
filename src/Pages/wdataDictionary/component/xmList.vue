<template>
  <div class="xmList">
    <div class="searchCriteria">
        <div class="searchCriteria_l">
          <img style="width: .34rem;height: .34rem;margin-right: .2rem;" src="../../../assets/imgs/zhihuipaishui/usermanage/search.png" alt="">
          <span>筛选搜索</span>
        </div>
        <div class="buttons">
          <div @click="reset" class="reset">重置</div>
          <div @click="listSearch" class="search">查询搜索</div>
        </div>
        <div class="searchInput">
            <div style="margin-left: .5rem;">
                项目名称:
                <a-input v-model="searchForm.xmmc" style="width: 1.8rem;" placeholder="" />
            </div>
            <div style="margin-left: .8rem;">
                项目状态:
                <a-select
                    allowClear
                    style="width: 2.8rem;"
                    placeholder="请选择"
                    v-model="searchForm.proStatus"
                    :showArrow="showArrow"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in proJectStatus" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
            </div>
            <div style="margin-left: .8rem;">
                所属公司:
                <a-select
                    allowClear
                    style="width: 2.8rem;"
                    placeholder="请选择"
                    v-model="searchForm.branch"
                    :showArrow="showArrow"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in branchArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
            </div>
        </div>
    </div>
    <div class="addUser">
        <div style="margin-left: .94rem;">
          <img style="width: .34rem;height: .34rem;margin-right: .2rem;" src="../../../assets/imgs/zhihuipaishui/usermanage/bianji.png" alt="">
          <span>数据列表添加</span>
        </div>
        <div class="addButton">
          <div @click="handleAdd" class="reset">添加</div>
        </div>
    </div>
    <div class="table">
      <a-table
        ref="table"
        bordered
        size="middle"
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :scroll="{y: scrollY }">
        <span slot="proStatus" slot-scope="text, record">
          {{ record.proStatus == 1 ? '进行中' : '已完成' }}
        </span>
        <span slot="xmcategory" slot-scope="text, record">
          {{ changeXmcateName(record.xmcategory) }}
        </span>
        <span slot="report" slot-scope="text, record">
          <a  @click="yulanClick(record.report)">预览</a>
          <a-divider type="vertical"/>
          <a >下载</a>
        </span>
        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)" >编辑</a>
          <a-divider type="vertical"/>
          <a-popconfirm
            title="确定要删除?"
            ok-text="删除"
            cancel-text="取消"
            @confirm="() => handleDelete(record)"
            @cancel="cancel"
          >
            <a href="#" >删除</a>
          </a-popconfirm>

        </span>
      </a-table>
    </div>
    <div style="position: absolute;right: 1.44rem;bottom: -0.7rem;">
      <a-locale-provider :locale="zhCN">
        <a-pagination v-model="currentPage" @showSizeChange="showSizeChange" @change="pageChange" :pageSizeOptions="pageSizeOptions" :defaultPageSize="defaultPageSize" size="small" :total="totalNum" :show-total="total => `共${total}条`" show-size-changer show-quick-jumper >
        <template slot="buildOptionText" slot-scope="props">
            <span>{{ props.value }}条/页</span>
          </template>
        </a-pagination>
      </a-locale-provider>
    </div>
    <a-locale-provider :locale="zhCN">
      <a-modal v-drag-modal :width="760" v-model="visible" :title="diologtitle" @ok="sureAction">
        <a-form :form="form">
          <div style="display: flex;">
            <div>
              <a-form-item label="项目名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-model="addForm.xmmc" placeholder="请输入项目名称" />
              </a-form-item>
              <a-form-item v-if="visible" label="项目地点" :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-cascader
                    style="width: 3.76rem;margin-right: .3rem;color: white;"
                    :options="areaArr"
                    :defaultValue="defaultValue"
                    :placeholder="placeholder"
                    :load-data="loadData"
                    change-on-select
                    @change="onChangeArea"
                />
              </a-form-item>
              <a-form-item label="项目开始时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-locale-provider :locale="zhCN">
                  <a-date-picker format="YYYY-MM-DD" style="width: 2.7rem;" @change="stDate" />
                </a-locale-provider>
              </a-form-item>
              <a-form-item label="项目结束时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-locale-provider :locale="zhCN">
                  <a-date-picker format="YYYY-MM-DD" style="width: 2.7rem;" @change="seDate" />
                </a-locale-provider>
              </a-form-item>
              <a-form-item label="审核人员" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-model="addForm.shren" placeholder="请输入审核人员" />
              </a-form-item>
              <a-form-item label="项目经理" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-model="addForm.xmfzr" placeholder="请输入项目经理" />
              </a-form-item>
              <a-form-item label="所属分公司" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select
                    allowClear
                    style="width: 2.8rem;"
                    placeholder="请选择"
                    v-model="addForm.branch"
                    :showArrow="showArrow"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in branchArr" :key="roleindex.toString()" :value="role.value">
                      {{ role.title }}
                    </a-select-option>
                </a-select>
              </a-form-item>
            </div>
            <div>
              <a-form-item label="项目类型" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select
                    style="width: 3.48rem;"
                    placeholder="请选择"
                    mode="multiple"
                    :showArrow="showArrow"
                     v-model="addForm.xmcategory"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in proJectArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="工程名称" :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-select
                    style="width: 3.88rem;"
                    placeholder="请选择"
                    mode="multiple"
                    :showArrow="showArrow"
                    v-model="gcidsArr"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in gcNameArr" :key="roleindex.toString()" :value="role.id">
                    {{ role.gcName }}
                    </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="委托单位" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-model="addForm.wtdw" placeholder="请输入委托单位" />
              </a-form-item>
              <a-form-item label="施工单位" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-model="addForm.sgdw" placeholder="请输入施工单位" />
              </a-form-item>
              <a-form-item label="监理单位" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-model="addForm.jldw" placeholder="请输入监理单位" />
              </a-form-item>
              <a-form-item label="项目状态" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select
                    allowClear
                    style="width: 1.8rem;"
                    placeholder="请选择"
                    v-model="addForm.proStatus"
                    :showArrow="showArrow"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in proJectStatus" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="项目金额" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-model="addForm.money" placeholder="请输入项目金额" />
              </a-form-item>
            </div>
          </div>
          <div style="display: flex;margin-left: 1rem;">
            <span style="color: white;">
              成果报告：
            </span>
            <span style="position: relative;display: inline-block;width: 2.24rem;height: .6rem;background: #329CD7;">
              <input ref="xmreport" style="position: absolute;left: -9999px;" id="xmreport" multiple @change="xmupload" type="file">
              <label style="position: absolute;top: .1rem;left: .5rem;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: white;" for="xmreport">
                上传报告
              </label>
            </span>
            <span>
              <!-- <a href="http://www.xdocin.com/xdoc?_func=to&_format=html&_cache=1&_xdoc=http://www.xdocin.com/demo/demo.docx" target="_blank" rel="nofollow">XDOC</a> -->
              <img v-if="addForm.report" @click="yulanClick(addForm.report)" style="width: .6rem;height: .6rem;margin-left: .3rem;" src="../../../assets/imgs/zhihuipaishui/word.png" alt="">
            </span>
            <span style="position: relative;display: inline-block;width: 2.24rem;height: .6rem;background: #329CD7;margin-left:1rem;">
              <input ref="picinputsqian" style="position: absolute;left: -9999px;" id="idqianP" multiple @change="changePicqianshabi" type="file">
              <label style="position: absolute;top: .1rem;left: .5rem;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: white;" for="idqianP">
                平台报告
              </label>
            </span>
            <span>.</span>
          </div>
        </a-form>
      </a-modal>
    </a-locale-provider>
    <a-locale-provider :locale="zhCN">
      <a-modal :width="800" :footer="footerShow" v-model="videoShow2" title="预览">
        <div v-html="vHtml" style="width: 100%;"/>
      </a-modal>
    </a-locale-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { apiNames } from '../../../Utils/config';
import moment from 'moment';
import { message} from 'ant-design-vue';
import mammoth from 'mammoth';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
export default {
  name: 'xmList',
  components: {
  },
  data() {
    return {
      scrollY: 400,
      windowHeight: document.documentElement.clientHeight,
      footerShow: false,
      videoShow2: false,
      vHtml: '',
      testArr: [],
        zhCN: zhCN,
        xmmc: '',
        proStatus: '',
        loading: false,
        defaultValue: [],
        proJectStatus: [
          {
            title: '进行中',
            value: '1'
          },
          {
            title: '已完成',
            value: '2'
          }
        ],
        columns: [
          {
            title: '编号',
            dataIndex: '',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
          },
          {
            title: '项目名称',
            align: "center",
            dataIndex: 'xmmc',
            width: 120
          },
          {
            title: '项目类型',
            align: "center",
            width: 100,
            dataIndex: 'xmcategory',
            scopedSlots: {customRender: 'xmcategory'},
          },
          {
            title: '施工地点',
            align: "center",
            width: 100,
            dataIndex: 'districtName',
          },
          {
            title: '委托单位',
            align: "center",
            width: 100,
            dataIndex: 'wtdw'
          },
          {
            title: '工程数量',
            align: "center",
            width: 80,
            dataIndex: 'gcCount'
          },
          {
            title: '成果报告',
            align: "center",
            width: 180,
            dataIndex: 'report',
            scopedSlots: {customRender: 'report'},
          },
          {
            title: '状态',
            align: "center",
            width: 80,
            dataIndex: 'proStatus',
            scopedSlots: {customRender: 'proStatus'},
          },
          {
            title: '操作',
            dataIndex: 'action',
            scopedSlots: {customRender: 'action'},
            align: "center",
            width: 170
          }
        ],
        searchForm: {
          xmmc: '',
          proStatus: '',
          branch: '',
          pageNo: 1,
          pageSize: 8
        },
        dataSource: [],
        ipagination: false,
        currentPage: 1,
        defaultPageSize: 8,
        pageSizeOptions: ['8', '16'],
        totalNum: 0,
        visible: false,
        showArrow: false,
        diologtitle: '新增项目',
        // validatorRules:{
        //   username:{
        //     rules: [{
        //       required: true, message: '请输入用户账号!'
        //     },{
        //       validator: this.validateUsername,
        //     }]
        //   },
        //   name:{rules: [{ required: true, message: '请输入用户名称!' }]},
        //   phone:{rules: [{ required: true, message: '请输入手机号!' }]},
        // },
        form:this.$form.createForm(this),
        labelCol: {
          xs: { span: 24 },
          sm: { span: 12 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 12 },
        },
        wrapperCol1: {
          xs: { span: 24 },
          sm: { span: 24 },
        },
        branch: '',
        placeholder: '',
        areaArr: [],
        branchArr: [],
        proJectArr: [],
        addForm: {
          xmcategory: [],
          proStatus: '',
          districtId: "",
          districtName: "",
          endTime: "",
          startTime: '',
          jldw: "",
          psGcList: [],
          sgdw: "",
          shren: "",
          wtdw: "",
          xmmc: "",
          xmfzr: '',
          branch: '',
          money: '',
          report: ''
        },
        gcNameArr: [],
        gcidsArr: [],
      }
  },
  mounted() {
    window.onresize = () => {
        return (() => {
        window.fullHeight = document.documentElement.clientHeight;

        this.windowHeight = window.fullHeight;

        })()

    };
    this.getProvinceInfo()
    this.getList()
    let allDictItems = JSON.parse(window.localStorage.getItem('allDictItems'))
    // 管段材质
    this.proJectArr = allDictItems.pipe_survey
    this.branchArr = JSON.parse(window.localStorage.getItem('allDictItems')).branch
  },

  watch: {
    windowHeight (val) {
      this.scrollY = val - 500
      console.log("实时屏幕高度：",val, this.windowHeight, this.scrollY );
    },
  },
  created() {
  },
  methods: {
    changeXmcateName (xmca) {
      let ids = xmca.split(',')
      let str = []
      ids.forEach((oneItem) => {
        this.proJectArr.forEach((item) => {
          if (item.value == oneItem) {
              str.push(item.title)
          }
        })
      })
      return str.join(',')
    },
    reset () {
      this.searchRealname = ''
    },
    cancel () {},
    listSearch () {
      this.searchForm.pageNo = 1
      this.getList()
    },
    handleAdd() {
      this.visible = true;
      this.diologtitle = '新增项目'
      this.addForm = {
        xmcategory: [],
        proStatus: '',
        districtId: "",
        districtName: "",
        endTime: "",
        startTime: '',
        jldw: "",
        psGcList: [],
        sgdw: "",
        shren: "",
        wtdw: "",
        xmmc: "",
        xmfzr: '',
        branch: '',
        report: ''
      }
      this.gcNameArr = []
      this.areaArr = []
      this.getProvinceInfo()
    },
    showSizeChange (current, size) {
      this.dataSource = []
      this.searchForm.pageSize = size
      this.searchForm.pageNo = 1
      this.getList()
    },
    pageChange (pageNum) {
      this.searchForm.pageNo = pageNum
      this.getList()
    },
    sureAction () {
      if (this.diologtitle == '编辑') {
        this.sureEdit()
      } else {
        this.sureAdd()
      }
    },
    handleDelete (item) {
        // this.dataSource = this.dataSource.filter((ele) => {
        //     return ele.id !== item.id
        // })
        this.$delete(apiNames['删除项目'], {id: item.id}).then(res => {
            if (res.code == 200) {
                this.$newthost({
                  content: '项目删除成功'
                })
                this.pageNo = 1
                this.getList()
            } else {
                this.$newthost({
                  content: res.message
                })
            }
        })
    },
    moment,
    stDate (date) {
       this.addForm.startTime = moment(date).format('YYYY-MM-DD HH:mm:ss')
    },
    seDate (date) {
      this.addForm.endTime = moment(date).format('YYYY-MM-DD HH:mm:ss')
    },
    getFormateDate () {
      let date = new Date()
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? '0' + m : m;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      return y + '-' + m + '-' + d;
    },
    yulanClick (src) {
      if (src) {
        let officeUrl = 'http://view.xdocin.com/xdoc?_xdoc=' + src
        window.open(officeUrl,'_target')
      } else {
        this.$message('无报告预览')
      }
    },
    xmupload (e) {
      const hide = message.loading({ content: '正在上传报告...', duration: 0 });
      const file = e.target.files[0] || e.dataTransfer.files[0]
      let formData = new FormData();
      formData.append('file', file);
      formData.append('biz', `xm/${this.getFormateDate()}`);
      this.$post(apiNames['上传图片'], formData).then(res => {
        console.log(res)
        hide()
        message.success({ content: '上传报告成功!', duration: 2 })
        // this.popvideoUrlQian = res.message
        this.addForm.report = res.message
      })
    },
    changePicqianshabi () {
      let inputDOM = this.$refs.picinputsqian
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        for (let i = 0; i < inputDOM.files.length; i++) {
          this.newPicShowbefore.push(URL.createObjectURL(inputDOM.files[i]))
          this.newfileShowbefore.push(inputDOM.files[i])
          // this.uploadPicQian(inputDOM.files[i])
        }
        e.target.value = ''
      }
    },
    checkxmcategory (value) {
        switch (value) {
            case '1':
                return '检测'
            case '2':
                return '养护'
            case '3':
                return '修复'
            case '4':
                return '专项调查'
            case '5':
                return '其他'
            default:
                return '未知'
        }
    },
    handleEdit (recordItem) {
      this.visible = true
      this.diologtitle = '编辑'
      let record = JSON.parse(JSON.stringify(recordItem))
      this.editId = record.objectid
      this.placeholder = record.districtName
      this.gcNameArr = record.psGcList
      this.addForm = record
      this.gcidsArr = record.psGcList.map((item) => {
          return item.id
      })
      this.defaultValue = []
      this.areaArr = []
      this.getProvinceInfo()
      console.log(record, record.xmcategory)
      this.addForm.xmcategory = record.xmcategory && record.xmcategory.split(',')
    },
    getList () {
      this.$post(`${apiNames['查询项目汇总']}`,this.searchForm).then((res) => {
        if (res.code == 0) {
           this.dataSource = res.result.records
           this.totalNum = res.result.total
        } else {
            this.$newthost({
              content: '获取失败'
            })
        }
      })
    },
    sureAdd () {
        let param = JSON.parse(JSON.stringify(this.addForm))
        param.xmcategory = this.addForm.xmcategory.join(',')
        this.$post(`${apiNames['添加项目']}`,param).then((res) => {
          if (res.code == 200) {
              this.$newthost({
                content: '添加成功'
              })
              this.dataSource = []
              this.pageNo = 1
              this.currentPage = 1
              this.getList()
          } else {
            this.$newthost({
              content: res.message
            })
          }
        })
    },
    sureEdit () {
      let gcArr = []
      console.log(this.gcNameArr, this.gcidsArr)
      this.gcNameArr.forEach((item) => {
        this.gcidsArr.forEach((ele) => {
          if (ele == item.id) {
            gcArr.push(item)
          }
        })
      })
      this.addForm.psGcList = gcArr
      let param = JSON.parse(JSON.stringify(this.addForm))
      param.xmcategory = this.addForm.xmcategory.join(',')
      this.$put(apiNames['编辑项目'], param).then(res => {
            if (res.code == 500) {
              this.$newthost({
                content: res.message
              })
            } else {
              this.pageNo = 1
              this.getList()
              this.$newthost({
                content: res.message
              })
            }
        })
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
    onChangeArea(value, selectedOptions) {
        this.addForm.districtName = ''
        this.addForm.districtId = value.join(',')
        this.placeholder = ''
        for (let i = 0; i < selectedOptions.length; i++) {
            this.addForm.districtName += selectedOptions[i].label + '/'
        }
    },
  },
  beforeDestroy() {
  }
}
</script>
<style scoped lang='scss'>
.xmList {
  position: relative;
  .searchCriteria {
    width: 27.60rem;
    height: 1.74rem;
    padding-top: .44rem;
    margin: .48rem 0 0 1.32rem;
    background: #043870;
    text-align: left;
    position: relative;
    .buttons {
      display: flex;
      position: absolute;
      right: .88rem;
      top: .34rem;
      .reset, .search {
        padding: .1rem .2rem;
        font-size: 16px;
        font-family: SimHei;
        color: #FFFFFF;
        line-height: .5rem;
        background: #012a55;
        min-width: .62rem;
        border: .02rem solid #0097cc;
        cursor: pointer;
      }
       .search {
         margin-left: .54rem;
       }
      div:hover {
        background: #0097cc
      }
    }
    .searchCriteria_l {
      margin: 0 0 0 .92rem;
    }
    .searchInput {
      display: flex;
      margin-top: .3rem;
      margin-left: 1.6rem;
    }
  }
  .addUser {
    width: 27.60rem;
    height: 1.24rem;
    padding-top: .44rem;
    line-height: .8rem;
    margin: .48rem 0 0 1.32rem;
    background: #043870;
    text-align: left;
    position: relative;
    .addButton {
      position: absolute;
      right: .88rem;
      top: .34rem;
      div {
        padding: .1rem .2rem;
        font-size: 16px;
        font-family: SimHei;
        color: #FFFFFF;
        line-height: .5rem;
        background: #012a55;
        min-width: .62rem;
        border: .02rem solid #0097cc;
        cursor: pointer;
      }
      div:hover {
        background: #0097cc
      }
    }
  }
  .table {
    width: 27.60rem;
    margin: .48rem 0 0 1.32rem;
    position: relative;
    overflow: hidden;
  }
}
</style>
<style lang='scss'>
.xmList .ant-table-wrapper {
  width: 100.55%;
}
.ant-cascader-picker input::-webkit-input-placeholder {
    color: white!important
}
.anticon {
    color: #409eff!important;
}
  .ant-form-item label {
    color: white;
  }
  .ant-radio-inner {
    width: .28rem;
    height: .28rem;
  }
  .ant-input-number {
    background: none;
    border: none;
  }
  .ant-input-number-input-wrap{
    background-color: rgb(27, 46, 91)!important;
    border: 1px solid rgba(81,168,255,1)!important;
    border-radius: 4px;
    color: white!important;
  }
  .ant-input-number-handler {
    background: #1890ff;
  }
  .ant-table-row-expand-icon {
    background: none;
  }
  .ant-table-row-expand-icon {
    width: 14px;
    height: 15px;
  }
  .ant-select-dropdown {
    background: #1890ff;
  }
  .ant-select-tree li .ant-select-tree-node-content-wrapper:hover {
    background: rgb(27, 46, 91);
    color: white;
  }
  .ant-input{
    background: none;
    border: 1px solid rgba(81,168,255,1);
    color: white!important
  }
</style>


