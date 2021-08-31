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
            <div style="margin-left: .8rem;flex-shrink: 1">
                道路名称:
                <a-input v-model="searchForm.name" style="width: 1.8rem;" placeholder="" />
            </div>
            <div style="margin-left: .5rem;flex-shrink: 1">
                编码:
                <a-input v-model="searchForm.code" style="width: 1.8rem;" placeholder="" />
            </div>
            <div style="margin-left: .8rem;flex-shrink: 1">
                所属工程:
                <a-select
                    allowClear
                    style="width: 2.8rem;"
                    placeholder="请选择"
                    v-model="proStatus"
                    :showArrow="showArrow"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in proJectStatus" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
            </div>
            <div style="margin-left: .8rem;flex-shrink: 1">
                所属项目:
                <a-select
                    allowClear
                    style="width: 2.8rem;"
                    placeholder="请选择"
                    v-model="proStatus"
                    :showArrow="showArrow"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in proJectStatus" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
            </div>
            <div style="margin-left: .8rem;flex-shrink: 1">
                类型:
                <a-select
                    allowClear
                    style="width: 2.8rem;"
                    placeholder="请选择"
                    :showArrow="showArrow"
                    v-model="searchForm.type"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in addTypeArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
            </div>
            <div style="margin-left: .8rem;flex-shrink: 1">
                区域:
                <a-cascader
                    :defaultValue="defaultValue"
                    style="width: 2.76rem;margin-right: .3rem;color: white;"
                    :options="areaArr"
                    :load-data="loadData"
                    :placeholder="placeholder"
                    change-on-select
                    @change="onChangeArea1"
                />
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
          <div style="display: flex;width: 100%;">
            <div style="width: 40%;">
              <a-form-item label="区域" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-cascader
                    :defaultValue="defaultValue"
                    style="width: 2.76rem;margin-right: .3rem;color: white;"
                    :options="areaArr"
                    :load-data="loadData"
                    :placeholder="placeholder"
                    change-on-select
                    @change="onChangeArea"
                />
              </a-form-item>
              <a-form-item label="道路名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-model="addForm.roadName"/>
              </a-form-item>

              <a-form-item label="编码" :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input :disabled="codedisabled" v-model="addForm.locationcode" />
              </a-form-item>
              <a-form-item label="所属工程" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select
                    allowClear
                    style="width: 2.8rem;"
                    placeholder="请选择"
                    v-model="proStatus"
                    :showArrow="showArrow"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in proJectStatus" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="所属项目" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select
                        style="width: 3.48rem;"
                        placeholder="请选择"
                        :showArrow="showArrow"
                        optionFilterProp = "children"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in proArr" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                        </a-select-option>
                    </a-select>
              </a-form-item>
              <a-form-item label="地区类别(K值):" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select
                    allowClear
                    style="width: 4rem;"
                    placeholder="请选择"
                    :showArrow="showArrow"
                    v-model="addForm.regionK"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in regionKArr" :key="roleindex.toString()" :title="role.title" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="排水系统" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input />
              </a-form-item>
            </div>
            <div>
              <a-form-item label="新增类别" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select
                    allowClear
                    style="width: 2.8rem;"
                    placeholder="请选择"
                    :showArrow="showArrow"
                    v-model="addForm.type"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in addTypeArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="小区名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-model="addForm.villageName"/>
              </a-form-item>
              <a-form-item label="管段编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select
                    allowClear
                    style="width: 2.8rem;"
                    placeholder="请选择"
                    :showArrow="showArrow"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in proJectStatus" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="坐标序列" :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-textarea style="width: 4.8rem;" placeholder="请输入坐标序列" :rows="4" />
              </a-form-item>
              <a-form-item label="土质参数(T值):" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select
                    allowClear
                    style="width: 4rem;"
                    placeholder="请选择"
                    :showArrow="showArrow"
                    v-model="addForm.soilT"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in soilTArr" :key="roleindex.toString()" :title="role.title" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
              </a-form-item>
            </div>
          </div>
        </a-form>
      </a-modal>
    </a-locale-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { apiNames } from '../../../Utils/config'
export default {
  name: 'roadList',
  components: {
  },
  data() {
    return {
        scrollY: 400,
        windowHeight: document.documentElement.clientHeight,
        zhCN: zhCN,
        xmmc: '',
        proStatus: '',
        showArrow: false,
        loading: false,
        proJectStatus: [],
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
            title: '名称',
            align: "center",
            dataIndex: 'locationname',
            width: 120
          },
          {
            title: '编号',
            align: "center",
            width: 180,
            dataIndex: 'locationcode',
          },
          {
            title: '所属工程',
            align: "center",
            width: 100,
            dataIndex: '',
          },
          {
            title: '所属项目',
            align: "center",
            width: 100,
            dataIndex: ''
          },
          {
            title: '所属区域',
            align: "center",
            width: 180,
            dataIndex: 'districtName'
          },
          {
            title: '管段总长度',
            align: "center",
            width: 80,
            dataIndex: ''
          },
          {
            title: '排水系统',
            align: "center",
            width: 80,
            dataIndex: 'status'
          },
          {
            title: '操作',
            dataIndex: 'action',
            scopedSlots: {customRender: 'action'},
            align: "center",
            width: 170
          }
        ],
        dataSource: [],
        ipagination: false,
        currentPage: 1,
        defaultPageSize: 8,
        pageSizeOptions: ['8', '16'],
        totalNum: 0,
        visible: false,
        diologtitle: '新增',
        validatorRules:{
          // username:{
          //   rules: [{
          //     required: true, message: '请输入用户账号!'
          //   },{
          //     validator: this.validateUsername,
          //   }]
          // },
          // name:{rules: [{ required: true, message: '请输入用户名称!' }]},
          // phone:{rules: [{ required: true, message: '请输入手机号!' }]},
        },
        form:this.$form.createForm(this),
        labelCol: {
          xs: { span: 24 },
          sm: { span: 12 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 12 },
        },
        defaultValue: [],
        placeholder: '',
        areaArr: [],
        addForm: {
          districtId: "",
          districtName: "",
          locationcode: "",
          roadName: "",
          villageName: '',
          type: '',
          soilT: '',
          regionK: ''
        },
        searchForm: {
          districtId: "",
          districtName: "",
          locationcode: "",
          name: "",
          code: '',
          type: '',
          pageNo: 1,
          pageSize: 8
        },
        proArr: [],
        codedisabled: false,
        editId: '',
        addTypeArr: [
          {
            title: '道路',
            value: 1
          },
          {
            title: '小区',
            value: 2
          }
        ],
        addType: '',
        soilTArr: [],
        regionKArr: []
      }
  },
  mounted() {
    window.onresize = () => {
        return (() => {
        window.fullHeight = document.documentElement.clientHeight;

        this.windowHeight = window.fullHeight;

        })()

    };
    let allDictItems = JSON.parse(window.localStorage.getItem('allDictItems'))
    this.soilTArr = allDictItems.soilT
    this.regionKArr = allDictItems.regionalImport
    this.getProvinceInfo()
    this.getAllProjectName()
    this.getList()
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
    cancel () {},
    listSearch () {
      this.searchForm.pageNo = 1
      this.getList()
    },
    handleAdd() {
      this.visible = true;
      this.codedisabled = false
      this.diologtitle = '新增'
      this.addForm = {
        districtId: "",
        districtName: "",
        locationcode: "",
        roadName: "",
        villageName: '',
        type: ''
      }
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
    stDate () {},
    seDate () {},
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
    sureAdd () {
      if (this.addForm.type == '') {
        this.$newthost({
          content: '请选择添加类别'
        })
      } else {
        let apiName = ''
        if (this.addForm.type == 1) {
          apiName = apiNames['道路表添加']
          if (this.addForm.roadName == '') {
            this.$newthost({
              content: '请填写道路名称'
            })
            return
          }
        } else {
          apiName = apiNames['小区表添加']
          if (this.addForm.villageName == '') {
            this.$newthost({
              content: '请填写小区名称'
            })
            return
          }
        }
        let param = JSON.parse(JSON.stringify(this.addForm))

        param.regionK = Number(this.addForm.regionK)
        param.soilT = Number(this.addForm.soilT)
        this.$post(apiName,param).then((res) => {
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
      }
    },
    sureEdit () {
      this.addForm.objectid = this.editId
      if (this.addForm.type == '') {
        this.$newthost({
          content: '请选择添加类别'
        })
      } else {
        let apiName = ''
        if (this.addForm.type == 1) {
          apiName = apiNames['道路表编辑']
          if (this.addForm.roadName == '') {
            this.$newthost({
              content: '请填写道路名称'
            })
            return
          }
        } else {
          apiName = apiNames['小区表编辑']
          if (this.addForm.villageName == '') {
            this.$newthost({
              content: '请填写小区名称'
            })
            return
          }
        }
        let param = JSON.parse(JSON.stringify(this.addForm))

        param.regionK = Number(this.addForm.regionK)
        param.soilT = Number(this.addForm.soilT)
        this.$put(apiName,param).then((res) => {
          if (res.code == 200) {
              this.$newthost({
                content: '修改成功'
              })
              this.dataSource = []
              this.pageNo = 1
              this.getList()
          }
        })
      }
    },
    handleDelete (record) {
      this.dataSource = this.dataSource.filter((item) => {
          return item.objectid !== record.objectid
      })
      let apiName = ''
      if (record.type == 1) {
        apiName = apiNames['道路表删除']
      } else {
        apiName = apiNames['小区表删除']
      }
      this.$delete(apiName,{objectid: record.objectid}).then(res => {
        this.$newthost({
          content: '删除成功'
        })
      })
    },
    handleEdit (record) {
      this.visible = true
      this.diologtitle = '编辑'
      this.codedisabled = true
      this.editId = record.objectid
      this.placeholder = record.districtName
      this.addForm = {
          districtId: record.districtId,
          districtName: record.districtName,
          locationcode: record.locationcode,
          roadName: record.locationname,
          villageName: record.locationname,
          type: record.type,
          regionK: '' + record.regionK,
          soilT: '' + record.soilT,
      }
    },
    getList () {
      this.$post(`${apiNames['道路小区列表查询']}`,this.searchForm).then((res) => {
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
        // this.addPipeForm.district_name = ''
        // this.addPipeForm.district_id = value.join(',')
        this.placeholder = ''
        for (let i = 0; i < selectedOptions.length; i++) {
            this.addForm.districtName += selectedOptions[i].label + '/'
            // this.addPipeForm.district_name += selectedOptions[i].label + '/'
        }
    },
    onChangeArea1(value, selectedOptions) {
        this.searchForm.districtName = ''
        this.searchForm.districtId = value.join(',')
        this.placeholder = ''
        for (let i = 0; i < selectedOptions.length; i++) {
            this.searchForm.districtName += selectedOptions[i].label + '/'
            // this.addPipeForm.district_name += selectedOptions[i].label + '/'
        }
    },
  },
  beforeDestroy() {
  }
}
</script>
<style lang='scss'>
.ant-modal {
  margin: 0 auto;
}
.ant-cascader-picker {
  background:none
}
.ant-select-selection__clear {
  background:none
}
.ant-input[disabled] {
  background:none
}
</style>
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
      margin-left: .8rem;
      flex-wrap: wrap;
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

