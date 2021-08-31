<template>
  <div class="gcList">
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
                工程名称:
                <a-input v-model="searchForm.gcName" style="width: 1.8rem;" placeholder="" />
            </div>
            <div style="margin-left: .5rem;">
                所属项目:
                <a-input v-model="searchForm.xmmc" style="width: 2.8rem;" placeholder="" />
                <!-- <a-select
                    allowClear
                    style="width: 2.8rem;"
                    placeholder="请选择"
                    v-model="searchForm.proId"
                    :showArrow="showArrow"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in proArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select> -->
            </div>
            <div style="margin-left: .8rem;">
                工程状态:
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
        <span slot="gcStatus" slot-scope="text, record">
          {{ record.gcStatus == 1 ? '进行中' : '已完成' }}
        </span>
        <span slot="proStatus" slot-scope="">
          <a >预览</a>
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
              <a-form-item label="工程名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-model="addForm.gcName" placeholder="请输入工程名称" />
              </a-form-item>
              <a-form-item label="所属项目" :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-select
                    allowClear
                    style="width: 2.8rem;"
                    placeholder="请选择"
                    v-model="addForm.proId"
                    :showArrow="showArrow"
                    @change="onChangeXm"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in proArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="工程开始时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-locale-provider :locale="zhCN">
                  <a-date-picker v-model="addForm.detectionStart" format="YYYY-MM-DD" style="width: 2.7rem;" @change="stDate" />
                </a-locale-provider>
              </a-form-item>
              <a-form-item label="工程结束时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-locale-provider :locale="zhCN">
                  <a-date-picker v-model="addForm.detectionEnd" format="YYYY-MM-DD" style="width: 2.7rem;" @change="seDate" />
                </a-locale-provider>
              </a-form-item>
              <a-form-item label="报告编制人" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-model="addForm.bzren" placeholder="请输入报告编制人" />
              </a-form-item>
              <a-form-item label="检测人员" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-model="addForm.jianceren" placeholder="请输入检测人员" />
              </a-form-item>
              <a-form-item label="报告目的与依据" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-textarea v-model="addForm.reportgoal" placeholder="请输入报告目的与依据" :rows="4" />
              </a-form-item>
            </div>
            <div>
              <a-form-item label="仪器设备" :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-select
                    style="width: 3.88rem;height: 1.5rem;overflow: auto;"
                    placeholder="请选择"
                    mode="multiple"
                    :showArrow="showArrow"
                     v-model="addForm.apparatus"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in apparatusArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="道路/小区名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select
                    style="width: 3.48rem;height: 1.5rem;overflow: auto;"
                    placeholder="请选择"
                    mode="multiple"
                    :showArrow="showArrow"
                     v-model="locationcodesArr"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in roadidArr" :key="roleindex.toString()" :value="role.value">
                      {{ role.title }}
                    </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="工程草图" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <span style="position: relative;display: inline-block;width: 2.24rem;height: .6rem;background: #329CD7;">
                  <input ref="picsketch" style="position: absolute;left: -9999px;" id="idsketch" @change="changesketchPic" type="file">
                  <label style="position: absolute;top: 0;left: .5rem;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: white;line-height: .6rem;" for="idsketch">
                    上传草图
                  </label>
                </span>
                <span style="cursor: pointer;" v-if="addForm.sketchPic">
                  <img @click="showLargePic(addForm.sketchPic)" style="width: .8rem;height: .8rem;position: absolute;right: -1.3rem;" :src="addForm.sketchPic" alt="">
                  <img @click="deletesketch" style="position: absolute;right: -1.8rem;width: .33rem;height: .33rem;top: .1rem;" :src="deletePic" alt="">
                </span>
              </a-form-item>
              <a-form-item label="作业流程示意图" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <span style="position: relative;display: inline-block;width: 2.24rem;height: .6rem;background: #329CD7;">
                  <input ref="picwork" style="position: absolute;left: -9999px;" id="idwork" @change="changeworkprocessPic" type="file">
                  <label style="position: absolute;top: 0;left: .5rem;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: white;line-height: .6rem;" for="idwork">
                    上传示意图
                  </label>
                </span>
                <span style="cursor: pointer;" v-if="addForm.workprocessPic">
                  <img @click="showLargePic(addForm.workprocessPic)" style="width: .8rem;height: .8rem;position: absolute;right: -1.3rem;" :src="addForm.workprocessPic" alt="">
                  <img @click="deleteworkprocessPic" style="position: absolute;right: -1.8rem;width: .33rem;height: .33rem;top: .1rem;" :src="deletePic" alt="">
                </span>
              </a-form-item>
              <a-form-item label="管道位置示意图" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <span style="position: relative;display: inline-block;width: 2.24rem;height: .6rem;background: #329CD7;">
                  <input ref="picpipe" style="position: absolute;left: -9999px;" id="idpipe" @change="changepipelocationPic" type="file">
                  <label style="position: absolute;top: 0;left: .5rem;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: white;line-height: .6rem;" for="idpipe">
                    上传示意图
                  </label>
                </span>
                <span style="cursor: pointer;" v-if="addForm.pipelocationPic">
                  <img @click="showLargePic(addForm.pipelocationPic)" style="width: .8rem;height: .8rem;position: absolute;right: -1.3rem;" :src="addForm.pipelocationPic" alt="">
                  <img @click="deletelocationPic" style="position: absolute;right: -1.8rem;width: .33rem;height: .33rem;top: .1rem;" :src="deletePic" alt="">
                </span>
              </a-form-item>
              <a-form-item style="margin-top: -.3rem;" label="工程状态" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select
                    allowClear
                    style="width: 1.8rem;"
                    placeholder="请选择"
                    v-model="addForm.gcStatus"
                    :showArrow="showArrow"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in proJectStatus" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="备注" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-textarea v-model="addForm.remark" placeholder="请输入备注" :rows="4" />
              </a-form-item>
            </div>
          </div>
          <div style="display: flex;margin-left: 1rem;margin-bottom: .5rem;">
            <span style="color: white;">
              Word成果报告：
            </span>
            <span style="position: relative;display: inline-block;width: 2.24rem;height: .6rem;background: #329CD7;">
              <input ref="picinputsqian" style="position: absolute;left: -9999px;" id="idqianP" multiple @change="changePicqianshabi" type="file">
              <label style="position: absolute;top: .1rem;left: .5rem;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: white;" for="idqianP">
                上传报告
              </label>
            </span>
            <span>.</span>
            <span style="position: relative;display: inline-block;width: 2.24rem;height: .6rem;background: #329CD7;margin-left:1rem;">
              <input ref="picinputsqian" style="position: absolute;left: -9999px;" id="idqianP" multiple @change="changePicqianshabi" type="file">
              <label style="position: absolute;top: .1rem;left: .5rem;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: white;" for="idqianP">
                平台报告
              </label>
            </span>
            <span>.</span>
          </div>
          <div style="display: flex;margin-left: 1rem;">
            <span style="color: white;">
              Excel成果数据：
            </span>
            <span style="position: relative;display: inline-block;width: 2.24rem;height: .6rem;background: #329CD7;">
              <input ref="picinputsqian" style="position: absolute;left: -9999px;" id="idqianP" multiple @change="changePicqianshabi" type="file">
              <label style="position: absolute;top: .1rem;left: .5rem;right: 0;bottom: 0;z-index: 10;cursor:pointer;color: white;" for="idqianP">
                上传报告
              </label>
            </span>
            <span>.</span>
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
      <a-modal v-drag-modal :width="980" :footer="footerShow" v-model="videoShow3" title="照片">
        <img style="width: 100%;height: 750px;" :src="largePic" alt="">
      </a-modal>
    </a-locale-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { apiNames } from '../../../Utils/config';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
export default {
  name: 'gcList',
  components: {
  },
  data() {
    return {
        scrollY: 400,
        windowHeight: document.documentElement.clientHeight,
        zhCN: zhCN,
        xmmc: '',
        footerShow: false,
        videoShow3: false,
        loading: false,
        largePic: '',
        proStatus: '',
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
            title: '工程名称',
            align: "center",
            dataIndex: 'gcName',
            width: 120
          },
          {
            title: '道路小区名称',
            align: "center",
            width: 100,
            dataIndex: '',
          },
          {
            title: '所属项目',
            align: "center",
            width: 100,
            dataIndex: 'xmmc',
          },
          {
            title: '项目周期',
            align: "center",
            width: 100,
            dataIndex: ''
          },
          {
            title: '管段总数',
            align: "center",
            width: 80,
            dataIndex: ''
          },
          {
            title: '管段总长度',
            align: "center",
            width: 80,
            dataIndex: ''
          },
          {
            title: '仪器设备',
            align: "center",
            width: 80,
            dataIndex: '',
          },
          {
            title: '成果报告',
            align: "center",
            width: 180,
            dataIndex: 'proStatus',
            scopedSlots: {customRender: 'proStatus'},
          },
          {
            title: '状态',
            align: "center",
            width: 80,
            dataIndex: 'gcStatus',
            scopedSlots: {customRender: 'gcStatus'},
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
          gcName: '',
          xmmc: '',
          gcStatus: '',
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
        diologtitle: '新增工程',
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
        labelCol2: {
          xs: { span: 24 },
          sm: { span: 10 },
        },
        wrapperCol2: {
          xs: { span: 24 },
          sm: { span: 14 },
        },
        defaultValue: [],
        placeholder: '',
        areaArr: [],
        branchArr: [],
        proJectArr: [],
        addForm: {
          gcName: '',
          proId: '',
          detectionStart: '',
          detectionEnd: '',
          bzren: '',
          jianceren: '',
          reportgoal: '',
          gcStatus: '',
          apparatus: [],
          locationcodes: [],
          sketchPic: '',
          workprocessPic: '',
          pipelocationPic: '',
          remark: ''
        },
        gcNameArr: [],
        proArr: [],
        roadidArr: [],
        apparatusArr: [],
        deletePic: require('../../../assets/imgs/zhihuipaishui/ppline/delete.png'),
        locationcodesArr: []
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
    this.getAllProjectName()
    let allDictItems = JSON.parse(window.localStorage.getItem('allDictItems'))
    // 管段材质
    this.proJectArr = allDictItems.pipe_survey
    this.branchArr = JSON.parse(window.localStorage.getItem('allDictItems')).branch
    this.apparatusArr = allDictItems.equipment
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
    reset () {
      this.searchRealname = ''
    },
    listSearch () {
      this.searchForm.pageNo = 1
      this.getList()
    },
    cancel () {},
    handleAdd() {
      this.visible = true;
      this.diologtitle = '新增工程'
      this.addForm = {
        gcName: '',
        proId: '',
        detectionStart: '',
        detectionEnd: '',
        bzren: '',
        jianceren: '',
        reportgoal: '',
        proStatus: '',
        apparatus: [],
        locationcodes: [],
        sketchPic: '',
        workprocessPic: '',
        pipelocationPic: '',
        remark: ''
      }
      this.gcNameArr = []
    },
    changeProName (id) {
      let one = this.proArr.filter((item) => {
        return item.value = id
      })[0]
      return one.title
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
        this.dataSource = this.dataSource.filter((ele) => {
            return ele.gcId !== item.gcId
        })
        this.$delete(apiNames['删除工程'], {id: item.gcId}).then(res => {
            if (res.code == 200) {
                this.$newthost({
                  content: '工程删除成功'
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
    getFormateDate () {
      let date = new Date()
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? '0' + m : m;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      return y + '-' + m + '-' + d;
    },
    changesketchPic (e) {
      let inputDOM = this.$refs.picsketch
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        // this.uploadPicQian(inputDOM.files[0])
        let file = inputDOM.files[0]
        // this.addForm.sketchPic = URL.createObjectURL(file)
        let formData = new FormData();
        let selfName = file.name
        formData.append('file', file, selfName);
        formData.append('biz', `gc/${this.getFormateDate()}`);
        this.$post(apiNames['上传图片'], formData).then(res => {
          this.addForm.sketchPic = res.message
        })
        e.target.value = ''
      }
    },
    changeworkprocessPic (e) {
      let inputDOM = this.$refs.picwork
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        // this.uploadPicQian(inputDOM.files[0])
        let file = inputDOM.files[0]
        let formData = new FormData();
        let selfName = file.name
        formData.append('file', file, selfName);
        formData.append('biz', `gc/${this.getFormateDate()}`);
        this.$post(apiNames['上传图片'], formData).then(res => {
          this.addForm.workprocessPic = res.message
        })
        e.target.value = ''
      }
    },
    changepipelocationPic (e) {
      let inputDOM = this.$refs.picpipe
      if (e.target.value !== '') {
        if (!inputDOM['value'].match(/.jpg|.gif|.png|.bmp/i)) {
          return this.$message('上传的图片格式不正确，请重新选择')
        }
        // 通过DOM取文件数据
        // this.uploadPicQian(inputDOM.files[0])
        let file = inputDOM.files[0]
        let formData = new FormData();
        let selfName = file.name
        formData.append('file', file, selfName);
        formData.append('biz', `gc/${this.getFormateDate()}`);
        this.$post(apiNames['上传图片'], formData).then(res => {
          this.addForm.pipelocationPic = res.message
        })
        e.target.value = ''
      }
    },
    showLargePic (url) {
      this.videoShow3 = true
      this.largePic = url
    },
    deletesketch () {
      this.addForm.sketchPic = ''
    },
    deleteworkprocessPic () {
      this.addForm.workprocessPic = ''
    },
    deletelocationPic () {
      this.addForm.pipelocationPic = ''
    },
    moment,
    stDate (date) {
       this.addForm.detectionStart = moment(date).format('YYYY-MM-DD HH:mm:ss')
    },
    seDate (date) {
      this.addForm.detectionEnd = moment(date).format('YYYY-MM-DD HH:mm:ss')
    },
    changePicqianshabi () {},
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
    handleEdit (record) {
      this.visible = true
      this.diologtitle = '编辑'
      this.editId = record.objectid
      this.placeholder = record.districtName
      this.addForm = record
      this.locationcodesArr = []
      record.roadList.forEach((item) => {
        this.locationcodesArr.push(item.locationcode)
      })
      this.getAllRoad(record.districtId)
      this.addForm.apparatus = record.apparatus.split(',')
    },
    onChangeXm(value, selectedOptions) {
        let ele = this.proArr.filter((item) => {
            return item.value == value
        })[0]
        this.locationcodesArr = []
        this.getAllRoad(ele.districtId)
    },
    getAllRoad (disId) {
        this.roadidArr = []
        this.$get(apiNames['获取所属道路表'], {districtId: disId}).then(res => {
            if (res.code == 200) {
                res.result.forEach(element => {
                    this.roadidArr.push({
                        title: element.locationname,
                        value: element.locationcode
                    })
                });
            } else {
                this.roadidArr = []
            }
        })
    },
    getAllProjectName () {
        this.$get(apiNames['获取项目名称']).then(res => {
            if (res.code == 200) {
                this.proArr = []
                res.result.forEach(ele => {
                    this.proArr.push({
                        value: ele.id,
                        title: ele.xmmc,
                        districtId: ele.district_id
                    })
                });
            }
        })
    },
    getList () {
      this.$get(`${apiNames['获取工程列表页']}`,this.searchForm).then((res) => {
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
        param.locationcodes = this.locationcodesArr
        param.apparatus = this.addForm.apparatus.join(',')
        this.$post(`${apiNames['工程新增']}`,param).then((res) => {
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
      let param = JSON.parse(JSON.stringify(this.addForm))
      param.locationcodes = this.locationcodesArr
      param.id = this.addForm.gcId
      param.apparatus = this.addForm.apparatus.join(',')
      this.$put(apiNames['工程编辑'], param).then(res => {
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
.gcList {
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
.gcList .ant-table-wrapper {
  width: 100.55%;
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

