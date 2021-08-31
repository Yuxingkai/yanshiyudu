<template>
  <div class="userList">
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
            <a-col :md="6" :sm="8">
              <a-form-item label="账号">
                <a-input placeholder="请输入账号" v-model="searchRealname"></a-input>
              </a-form-item>
            </a-col>
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
        :scroll="{y: 400 }"
        @change="handleTableChange">
        <span slot="status" slot-scope="text, record">
          <a-switch :checked="record.status === 1" @change="switchChange(record.status,record.id)" />
        </span>
        <span slot="action" slot-scope="text, record">
          <!-- <a @click="dispatchRole(record)" >分配角色</a>
          <a-divider type="vertical"/> -->
          <a @click="handleEdit(record)" >编辑</a>
          <a-divider type="vertical"/>
          <a-popconfirm
            title="确定要删除?"
            ok-text="删除"
            cancel-text="取消"
            @confirm="() => handleDelete(record.id)"
            @cancel="cancel"
          >
            <!-- <a href="#">删除</a> -->
            <a href="#" >删除</a>
          </a-popconfirm>
          <!-- <a-divider type="vertical"/> -->

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
    <a-modal v-model="visible" :title="diologtitle" @ok="sureAction">
      <a-form :form="form">

        <a-form-item label="用户账号" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input placeholder="请输入用户账号" v-decorator.trim="[ 'username', validatorRules.username]" />
        </a-form-item>

        <a-form-item label="用户姓名" :labelCol="labelCol" :wrapperCol="wrapperCol" >
          <a-input placeholder="请输入用户姓名" v-decorator.trim="[ 'realname', validatorRules.name]" />
        </a-form-item>

        <template v-if="!model.id">
          <a-form-item label="登录密码" :labelCol="labelCol" :wrapperCol="wrapperCol" >
            <a-input type="password" placeholder="请输入登录密码" v-decorator="[ 'password',validatorRules.password]" />
          </a-form-item>

          <a-form-item label="确认密码" :labelCol="labelCol" :wrapperCol="wrapperCol" >
            <a-input type="password" @blur="handleConfirmBlur" placeholder="请重新输入登录密码" v-decorator="[ 'confirmpassword', validatorRules.confirmpassword]"/>
          </a-form-item>
        </template>
        <a-form-item label="手机号" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input placeholder="请输入手机号" v-decorator.trim="[ 'phone', validatorRules.phone]" />
        </a-form-item>

        <a-form-item label="性别" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select v-model="selectedSex" placeholder="请选择性别" :getPopupContainer= "(target) => target.parentNode">
            <a-select-option :value="1">男</a-select-option>
            <a-select-option :value="2">女</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="角色分配" :labelCol="labelCol" :wrapperCol="wrapperCol" >
          <a-select
            mode="multiple"
            style="width: 100%"
            placeholder="请选择用户角色"
            optionFilterProp = "children"
            v-model="selectedRole"
            :getPopupContainer= "(target) => target.parentNode">
            <a-select-option v-for="(role,roleindex) in roleList" :key="roleindex.toString()" :value="role.id">
              {{ role.roleName }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
    </a-locale-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { apiNames } from '../../../Utils/config'
export default {
  name: 'userList',
  components: {
  },
  data() {
    return {
      roleList:[],
      searchRealname: '',
      editId: '',
      loading: false,
      form:this.$form.createForm(this),
      selectedSex: '',
      totalNum: 0,
      selectedRole:[],
      diologtitle: '新增',
      currentPage: 1,
      validatorRules:{
          username:{
            rules: [{
              required: true, message: '请输入用户账号!'
            },{
              validator: this.validateUsername,
            }]
          },
          name:{rules: [{ required: true, message: '请输入用户名称!' }]},
          phone:{rules: [{ required: true, message: '请输入手机号!' }]},
          password:{
            rules: [{
              required: true,
              pattern:/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{8,}$/,
              message: '密码由8位数字、大小写字母和特殊符号组成!'
            }, {
              validator: this.validateToNextPassword,
            }],
          },
          confirmpassword:{
            rules: [{
              required: true, message: '请重新输入登录密码!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          },
        },
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
        visible: false,
        zhCN: zhCN,
        description: '这是用户管理页面',
        queryParam: {},
        ipagination: false,
        recycleBinVisible: false,
        defaultPageSize: 8,
        pageSizeOptions: ['8', '16'],
        dataSource: [
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
            title: '账号',
            align: "center",
            dataIndex: 'username',
            width: 120
          },
          {
            title: '姓名',
            align: "center",
            width: 100,
            dataIndex: 'realname',
          },
          {
            title: '性别',
            align: "center",
            width: 100,
            dataIndex: 'sex',
            customRender: function(text) {
              if (text == 1) {
                return '男'
              } else if (text == 2) {
                return '女'
              } else {
                return '未知'
              }
            }
          },
          {
            title: '手机号码',
            align: "center",
            width: 100,
            dataIndex: 'phone'
          },
          {
            title: '添加时间',
            align: "center",
            width: 180,
            dataIndex: 'createTime'
          },
          {
            title: '修改时间',
            align: "center",
            width: 180,
            dataIndex: 'updateTime'
          },
          {
            title: '是否启用',
            align: "center",
            width: 80,
            dataIndex: 'status',
            scopedSlots: {customRender: 'status'},
          },
          {
            title: '操作',
            dataIndex: 'action',
            scopedSlots: {customRender: 'action'},
            align: "center",
            width: 170
          }

        ],
        superQueryFieldList: [
          { type: 'input', value: 'username', text: '用户账号', },
          { type: 'input', value: 'realname', text: '用户姓名', },
          { type: 'select', value: 'sex', text: '性别', dictCode: 'sex' },
        ],
        url: {
          syncUser: "/act/process/extActProcess/doSyncUser",
          list: "/sys/user/list",
          delete: "/sys/user/delete",
          deleteBatch: "/sys/user/deleteBatch",
          exportXlsUrl: "/sys/user/exportXls",
          importExcelUrl: "sys/user/importExcel",
        },
        menus: [
          {
            name: '用户列表'
          },
          {
            name: '角色列表'
          },
          {
            name: '菜单列表'
          }
        ],
        defaultChecked: false,
        pageSize: 8,
        pageNo: 1,
        confirmDirty: false,
        model: {},
      }
  },
  mounted() { 
    this.getList()
    this.getRoles()
  },

  watch: {
    visible (value) {
      if (!value) {
        this.form.resetFields();
        this.model = {}
      } else {
        this.getRoleArr()
      }
    }
  },
  created() {
  },
  methods: {
    cancel() {},
    onChange () {},
    dispatchRole () {},
    reset () {
      this.searchRealname = ''
    },
    handleConfirmBlur  (e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value
    },
    validateToNextPassword  (rule, value, callback) {
      const form = this.form;
      const confirmpassword=form.getFieldValue('confirmpassword');

      if (value && confirmpassword && value !== confirmpassword) {
        callback('两次输入的密码不一样！');
      }
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback();
    },
    compareToFirstPassword  (rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('两次输入的密码不一样！');
      } else {
        callback()
      }
    },
    getRoleArr () {
      // let userid = JSON.parse(window.localStorage.getItem('userInfo')).id
      // let params = {
      //     userid
      //   }
      this.currdatetime = new Date().getTime();
      this.$get(`${apiNames['获取用户所有角色']}`,this.currdatetime).then(res => {
        this.roleList = res.result
      })
    },
    switchChange (status,id) {
      console.log(status,id)
      let params = {
        ids: id,
        status: status == true ? 1 : 2
      }
      this.$put(`${apiNames['是否启用']}`,params).then((res) => {
        if (res.code == 200) {
            this.$newthost({
              content: '成功'
            })
        }
      })
    },
    listSearch () {
      this.pageNo = 1
      this.dataSource = []
      this.getList()
    },
    pageChange (pageNum, pageSize) {
      console.log(pageNum, pageSize)
      this.dataSource = []
      this.pageNo = pageNum
      this.getList()
    },
    showSizeChange (current, size) {
      console.log(current, size)
      this.dataSource = []
      this.pageSize = size
      this.pageNo = 1
      this.getList()
    },
    getRoles () {
      // this.$get(`${apiNames['部门角色']}`).then(res => {
      //   if (res) {
           
      //   } else {
          
      //   }
      // })
    },
    sureAction () {
      if (this.diologtitle == '编辑') {
        this.sureEdit()
      } else {
        this.sureAdd()
      }
    },
    sureAdd () {
      this.form.validateFields((err, values) => {
        let obj = {
            selectedroles: this.selectedRole.join(','),
            sex: this.selectedSex
        }
        let params = Object.assign(obj, values);
        this.$post(`${apiNames['新增用户']}`,params).then((res) => {
          if (res.code == 200) {
              this.$newthost({
                content: '添加成功'
              })
              this.dataSource = []
              this.pageNo = 1
              this.currentPage = 1
              this.getList()
          }
        })
      })
    },
    sureEdit () {
      this.form.validateFields((err, values) => {
        let obj = {
            selectedroles: this.selectedRole.join(','),
            sex: this.selectedSex
        }
        let params = Object.assign(obj, values);
        params.id = this.editId
        this.$put(`${apiNames['编辑用户']}`,params).then((res) => {
          if (res.code == 200) {
              this.$newthost({
                content: '修改成功'
              })
              this.dataSource = []
              this.pageNo = 1
              this.currentPage = 1
              this.getList()
          }
        })
      })
    },
    handleDelete (id) {
      let params = {
        id
      }
      this.$delete(`${apiNames['删除用户']}`,params).then(res => {
        this.$newthost({
          content: '删除成功'
        })
        this.dataSource = []
        this.pageNo = 1
        this.getList()
      })
    },
    handleEdit (record) {
      this.visible = true;
      this.diologtitle = '编辑'
      this.editId = record.id
      this.selectedSex = record.sex
      console.log(record)
      this.getUserRoleById()
      this.model = Object.assign({}, record);
      setTimeout(() => {
        this.form.setFieldsValue({
          username: record.username,
          realname: record.realname,
          phone: record.phone
        });
      }, 100)
    },
    getUserRoleById () {
      let currdatetime = new Date().getTime();
      let params = {
          userid: this.editId,
          _t: currdatetime
        }
        this.$get(`${apiNames['根据用户获取用户角色']}`,params).then(res => {
        if (res.code == 0) {
           this.selectedRole = res.result
        } else {
          this.selectedRole = []
        }
      })
    },
    handleAdd() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    handleTableChange () {},
    getList () {
        let params = {
          pageSize: this.pageSize,
          pageNo: this.pageNo,
          username: this.searchRealname
        }
        this.$get(`${apiNames['获取用户列表']}`,params).then(res => {
        if (res.code == 0 && res.result.records.length !== 0) {
            this.totalNum = res.result.total
            this.dataSource = res.result.records
        } else {
          this.dataSource = []
        }
      })
    },
      handleChangePassword(username) {
        this.$refs.passwordmodal.show(username);
      },
      passwordModalOk() {
        //TODO 密码修改完成 不需要刷新页面，可以把datasource中的数据更新一下
      }
  },
  beforeDestroy() {
  }
}
</script>
<style scoped lang='scss'>
.userList {
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
      .ant-form-item{
        display: flex;
        margin-left: 2.06rem;
        margin-top: .2rem;
        margin-bottom: 0;
      }
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
.userList .ant-table-wrapper {
  width: 100.55%;
}
.ant-modal-header, .ant-modal-body, .ant-modal-footer {
     background: #043b7a;
     border-top: .02rem solid #043b7a;
     border-bottom: .02rem solid #043b7a;
     .ant-modal-title {
        color: white
     }
   }
   .ant-modal-close, .ant-form-item-label > label {
     color: white;
   }
// .userList {
  .ant-form-item-label > label {
    color: #FFFFFF!important
  }
  .ant-table-thead > tr > th {
    background: #043b7a;
  }
  .ant-table-bordered .ant-table-thead > tr > th, .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: .01rem solid #0092c7;
    border-bottom: .01rem solid #0092c7;
    color: white;
  }
  .ant-table-bordered .ant-table-body > table {
    border-left: .01rem solid #0092c7;
    border-top: .01rem solid #0092c7;
  }
  .ant-pagination.mini .ant-pagination-total-text {
    color: white
  }
  .ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link {
    border: .02rem solid #008ec1!important;
    background: #033166!important;
  }
  .anticon {
    color: white;
  }
  .ant-select-selection__choice__remove .anticon {
    color: black;
  }
  .ant-table-tbody{
   	  > tr:hover:not(.ant-table-expanded-row) > td,.ant-table-row-hover,.ant-table-row-hover>td{
        background: #043b7a!important;
      }
   }
   .ant-table-row-cell-break-word a {
     color: #008ec3;
   }
   .ant-pagination-item-active {
     background: #0096ca;
   }
   .ant-pagination-item-active a {
      color: white;
   }
   .ant-pagination.mini .ant-pagination-item:not(.ant-pagination-item-active) {
     background: #d9deef;
     color: white
   }
   .ant-select {
     color: white
   }
   .ant-pagination.mini .ant-pagination-options-quick-jumper input {
     height: 20px;
     background: #033166;
     border: .02rem solid #008ec1!important;
     color: white
   }
   .ant-pagination-options-quick-jumper {
     color: white
   }
   .ant-switch {
     background: rgb(24 76 121 / 78%);
   }
   .ant-switch-checked {
     background: #1890ff
   }
   .ant-table-bordered.ant-table-empty .ant-table-placeholder {
     border: .02rem solid #008ec1;
   }
   .ant-table-placeholder {
      background: #043b7a;
      border: .02rem solid #008ec1;
   }
   .ant-empty-description {
     color: white;
   }
   .ant-table-bordered .ant-table-thead > tr > th, .ant-table-bordered .ant-table-tbody > tr > td {
     background: #043b7a;
   }
   .ant-table-bordered .ant-table-header > table {
     border: .02rem solid #008ec1;
   }
   .ant-table-header {
     background: none;
   }
// }
</style>
