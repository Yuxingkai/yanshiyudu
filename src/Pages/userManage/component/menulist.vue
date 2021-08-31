<template>
  <div class="menuList">
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
              <a-form-item label="菜单名称">
                <a-input placeholder="请输入菜单名称" v-model="searchRealname"></a-input>
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
        :row-selection="rowSelection"
        @change="handleTableChange">

        <!-- <template slot="avatarslot" slot-scope="text, record, index">
          <div class="anty-img-wrap">
            <a-avatar shape="square" :src="getAvatarView(record.avatar)" icon="user"/>
          </div>
        </template> -->
        <span slot="status" slot-scope="text, record">
          <a-switch v-model="record.status" @change="switchChange(record.status,record.id)" />
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
      <!-- <div style="position: absolute;right: 0;margin-top: .2rem;">
        <a-locale-provider :locale="zhCN">
          <a-pagination @showSizeChange="showSizeChange" @change="pageChange" :pageSizeOptions="pageSizeOptions" :defaultPageSize="defaultPageSize" size="small" :total="totalNum" :show-total="total => `共${total}条`" show-size-changer show-quick-jumper >
          <template slot="buildOptionText" slot-scope="props">
              <span>{{ props.value }}条/页</span>
            </template>
          </a-pagination>
        </a-locale-provider>
      </div> -->
    </div>
    <a-locale-provider :locale="zhCN">
    <a-modal v-model="visible" :title="diologtitle" @ok="sureAction">
      <a-form :form="form">

        <a-form-item label="菜单类型" :labelCol="labelCol" :wrapperCol="wrapperCol" >
          <a-radio-group @change="onChangeMenuType" v-decorator="['menuType',{'initialValue':localMenuType}]">
            <a-radio :value="0">一级菜单</a-radio>
            <a-radio :value="1">子菜单</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :label="menuLabel"
          hasFeedback >
          <a-input placeholder="请输入菜单名称" v-decorator="[ 'name', validatorRules.name]" :readOnly="disableSubmit"/>
        </a-form-item>


        <a-form-item
          v-show="localMenuType!=0"
          label="上级菜单"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          :validate-status="validateStatus"
          :hasFeedback="true"
          :required="true">
          <span slot="help">{{ validateStatus=='error'?'请选择上级菜单':'&nbsp;&nbsp;' }}</span>
          <a-tree-select
            style="width:100%"
            :dropdownStyle="{ maxHeight: '200px', overflow: 'auto' }"
            :treeData="treeData"
            v-model="model.parentId"
            placeholder="请选择父级菜单"
            :disabled="disableSubmit"
            @change="handleParentIdChange">
          </a-tree-select>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="菜单路径">
          <a-input placeholder="请输入菜单路径" v-decorator="[ 'url',validatorRules.url]" :readOnly="disableSubmit"/>
        </a-form-item>

        <a-form-item
          v-show="show"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="前端组件">
          <a-input placeholder="请输入前端组件" v-decorator="[ 'component',validatorRules.component]" :readOnly="disableSubmit"/>
        </a-form-item>

      </a-form>
    </a-modal>
    </a-locale-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { apiNames } from '../../../Utils/config'
// const treeData = [{
//   parentId: '1'
// }]
export default {
  name: 'menuList',
  components: {
  },
  data() {
    return {
      roleList:[{
        id: '11',
        roleName: '超级'
      }],
      treeData: [],
      show: true,
      searchRealname: '',
      localMenuType:0,
      menuLabel:'菜单名称',
      model: {},
      validateStatus:"",
      disableSubmit:false,
      loading: false,
      form:this.$form.createForm(this),
      selectedSex: '',
      totalNum: 0,
      selectedRole:[],
      diologtitle: '新增',
      validatorRules:{
          username:{
            rules: [{
              required: true, message: '请输入用户账号!'
            },{
              validator: this.validateUsername,
            }]
          },
          name:{rules: [{ required: true, message: '请输入用户名称!' }]},
          url:{rules: [{ required: true, message: '请输入菜单路径!' }]},
          component:{rules: [{ required: true, message: '请输入菜单组件!' }]},
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
            title: '菜单名称',
            align: "left",
            dataIndex: 'name',
            width: 100
          },
          {
            title: '菜单类型',
            align: "center",
            width: 100,
            dataIndex: 'menuType',
            customRender: function(text) {
              if (text == 0) {
                return '一级菜单'
              } else if (text == 1) {
                return '二级菜单'
              } else {
                return text
              }
            }
          },
          {
            title: '组件',
            align: "center",
            width: 100,
            dataIndex: 'component',
          },
          {
            title: '路径',
            align: "center",
            width: 100,
            dataIndex: 'url'
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
        editId: '',
        defaultChecked: false,
        pageSize: 8,
        pageNo: 1
      }
  },
  mounted() { 
    this.getList()
  },

  watch: {
  },
  created() {
  },
  methods: {
    loadTreeData () {
      this.currdatetime = new Date().getTime();
      this.$get(apiNames['获取菜单权限菜单树'], this.currdatetime).then(res => {
        if (res.code == 0) {
          this.treeData = res.result.treeList
        } else {
          this.treeData = []
        }
      })
    },
    cancel() {},
    onChange () {},
    dispatchRole () {},
    reset () {
      this.searchRealname = ''
    },
    handleParentIdChange(value){
      if(!value){
        this.validateStatus="error"
      }else{
        this.validateStatus="success"
      }
    },
    onChangeMenuType(e) {
      //console.log('localMenuType checked', e.target.value)
      this.localMenuType=e.target.value
      if(e.target.value == 2){
        this.show = false;
        this.menuLabel = '按钮/权限';
      }else{
        this.show = true;
        this.menuLabel = '菜单名称';
      }
      this.$nextTick(() => {
        this.form.validateFields(['url','component'], { force: true });
      });
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
      this.getList()
    },
    pageChange (pageNum) {
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
            parentId: this.model.parentId
        }
        let params = Object.assign(obj, values);
        this.$post(`${apiNames['新增菜单']}`,params).then((res) => {
          if (res.code == 200) {
              this.$newthost({
                content: '添加成功'
              })
              this.dataSource = []
              this.pageNo = 1
              this.getList()
          }
        })
      })
    },
    sureEdit () {
      this.form.validateFields((err, values) => {
        let obj = {
            id: this.editId
        }
        let params = Object.assign(obj, values);
        this.$post(`${apiNames['编辑菜单']}`,params).then((res) => {
          if (res.code == 200) {
              this.$newthost({
                content: '修改成功'
              })
              this.dataSource = []
              this.pageNo = 1
              this.getList()
          }
        })
      })
    },
    handleDelete (id) {
      // this.dataSource = this.dataSource.filter((item) => {
      //   if (item.children.length !== 0) {
      //     item.children.filter((citem) => {
      //     return citem.id !== id
      //     })
      //   }
      //   return item.id !== id
      // })

      let params = {
        id
      }
      this.$delete(`${apiNames['删除菜单']}`,params).then(res => {
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
      this.loadTreeData()
      this.diologtitle = '编辑'
      this.editId = record.id
      this.model.parentId = record.parentId
      setTimeout(() => {
        this.form.setFieldsValue({
          menuType: record.menuType,
          name: record.name,
          component: record.component,
          url: record.url,
        });
      }, 100)
    },
    handleAdd() {
      this.visible = true;
      this.loadTreeData()
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
        this.$get(`${apiNames['获取菜单列表']}`,params).then(res => {
        if (res.code == 0) {
            // this.totalNum = res.result.total
            this.dataSource = res.result
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
.menuList {
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
.menuList .ant-table-wrapper {
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

