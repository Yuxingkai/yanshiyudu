<template>
  <div class="roleList">
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
              <a-form-item label="角色名称">
                <a-input placeholder="请输入角色名称" v-model="searchRealname"></a-input>
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

        <!-- <template slot="avatarslot" slot-scope="text, record, index">
          <div class="anty-img-wrap">
            <a-avatar shape="square" :src="getAvatarView(record.avatar)" icon="user"/>
          </div>
        </template> -->
        <span slot="status" slot-scope="text, record">
          <a-switch v-model="record.status" @change="switchChange(record.status,record.id)" />
        </span>
        <span slot="action" slot-scope="text, record">
          <a @click="dispatchRole(record)" >分配菜单</a>
          <a-divider type="vertical"/>
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
          <a-pagination @showSizeChange="showSizeChange" @change="pageChange" :pageSizeOptions="pageSizeOptions" :defaultPageSize="defaultPageSize" size="small" :total="totalNum" :show-total="total => `共${total}条`" show-size-changer show-quick-jumper >
          <template slot="buildOptionText" slot-scope="props">
              <span>{{ props.value }}条/页</span>
            </template>
          </a-pagination>
        </a-locale-provider>
      </div>
    <a-locale-provider :locale="zhCN">
      <a-modal v-model="visible" :title="diologtitle" @ok="sureAction">
        <a-form :form="form">

          <a-form-item label="角色名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input placeholder="请输入角色名称" v-decorator.trim="[ 'roleName', validatorRules.roleName]" />
          </a-form-item>

          <a-form-item label="角色编码" :labelCol="labelCol" :wrapperCol="wrapperCol" >
            <a-input :disabled="codedisabled" placeholder="请输入角色编码" v-decorator.trim="[ 'roleCode', validatorRules.roleCode]" />
          </a-form-item>

          <a-form-item label="描述" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-textarea v-model="desc" placeholder="" :rows="4" />
          </a-form-item>
        </a-form>
      </a-modal>
    </a-locale-provider>
    <a-locale-provider :locale="zhCN">
      <a-modal v-model="roleModel" title="分配权限" @ok="sureSave">
        <div class="roleList">
            <a-form>
              <a-tree
                checkable
                @check="onCheck"
                :checkedKeys="checkedKeys"
                :treeData="treeData"
                @expand="onExpand"
                @select="onTreeNodeSelect"
                :selectedKeys="selectedKeys"
                :checkStrictly="checkStrictly"
                :expandedKeys="expandedKeysss">
                <span slot="hasDatarule" slot-scope="{slotTitle,ruleFlag}">
                  {{ slotTitle }}<a-icon v-if="ruleFlag" type="align-left" style="margin-left:5px;color: red;"></a-icon>
                </span>
              </a-tree>
            <!-- </a-form-item> -->
          </a-form>
        </div>
        </a-modal>
      </a-locale-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { apiNames } from '../../../Utils/config'
import { setTimeout } from 'timers';
const treeData = [
            {
                "key":"9502685863ab87f0ad1134142788a385",
                "title":"首页",
                "slotTitle":"首页",
                "isLeaf":false,
                "icon":"home",
                "ruleFlag":null,
                "scopedSlots":{},
                "children":[
                    {
                        "key":"1372505358218285057",
                        "title":"哈哈",
                        "slotTitle":"哈哈",
                        "isLeaf":true,
                        "icon":null,
                        "ruleFlag":null,
                        "scopedSlots":{},
                        "children":null,
                        "parentId":"9502685863ab87f0ad1134142788a385",
                        "label":"哈哈",
                        "value":"1372505358218285057"
                    }
                ],
                "parentId":"",
                "label":"首页",
                "value":"9502685863ab87f0ad1134142788a385"
            }
        ];
export default {
  name: 'roleList',
  components: {
  },
  data() {
    return {
      desc: '',
      editId: '',
      roleId:"",
      treeData: [],
      defaultCheckedKeys:[],
      checkedKeys:[],
      expandedKeysss:[],
      allTreeKeys:[],
      checkStrictly: true,
      autoExpandParent: true,
      codedisabled: false,
      expandedKeys: ['0-2'],
      selectedKeys: [],
      roleModel: false,
      roleList:[{
        id: '11',
        roleName: '超级'
      }],
      searchRealname: '',
      loading: false,
      form:this.$form.createForm(this),
      selectedSex: '',
      totalNum: 0,
      selectedRole:[],
      diologtitle: '新增',
      validatorRules:{
          roleName:{
            rules: [{
              required: true, message: '请输入角色名称!'
            },{
              validator: this.validateUsername,
            }]
          },
          roleCode:{rules: [{ required: true, message: '请输入角色编码!' }]},
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
            title: '角色编码',
            align: "center",
            dataIndex: 'roleCode',
            width: 120
          },
          {
            title: '角色名称',
            align: "center",
            width: 100,
            dataIndex: 'roleName',
          },
          {
            title: '创建时间',
            align: "center",
            width: 180,
            dataIndex: 'createTime'
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
    sureSave () {
      console.log(this.checkedKeys)
      let params = {
        lastpermissionIds: "",
        permissionIds: this.checkedKeys.join(','),
        roleId: this.roleId
      }
      this.$post(apiNames['保存角色分配菜单'], params).then(res => {
        if (res.code == 200) {
          this.$newthost({
              content: '保存成功'
            })
            this.roleModel = false
        } else {
        }
      })
    },
    loadTreeData () {
      this.currdatetime = new Date().getTime();
      this.$get(apiNames['获取菜单树'], this.currdatetime).then(res => {
        if (res.code == 0) {
          let mockData = res.result.treeList
          this.treeData = res.result.treeList
          this.allTreeKeys = res.result.ids
        } else {
          this.treeData = []
        }
      })
    },
    queryRolePermission () {
      let currdatetime = new Date().getTime();
      let params = {
        _t: currdatetime,
        roleId: this.roleId
      }
      this.$get(apiNames['获取角色权限'], params).then(res => {
        if (res.code == 0) {
              this.checkedKeys = [...res.result];
              this.defaultCheckedKeys = [...res.result];
              this.expandedKeysss = this.allTreeKeys;
        } else {
          this.treeData = []
        }
      })
    },
    // loadData(){
    //     queryTreeListForRole().then((res) => {
    //       this.treeData = res.result.treeList
    //       this.allTreeKeys = res.result.ids
    //       queryRolePermission({roleId:this.roleId}).then((res)=>{
    //           this.checkedKeys = [...res.result];
    //           this.defaultCheckedKeys = [...res.result];
    //           this.expandedKeysss = this.allTreeKeys;
    //           console.log(this.defaultCheckedKeys)
    //       })
    //     })
    //   }
    // onExpand(expandedKeys) {
    //   console.log('onExpand', expandedKeys);
    //   // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    //   // or, you can remove all expanded children keys.
    //   this.expandedKeys = expandedKeys;
    //   this.autoExpandParent = false;
    // },
    // onCheck(checkedKeys) {
    //   console.log('onCheck', checkedKeys);
    //   this.checkedKeys = checkedKeys;
    // },
    // onSelect(selectedKeys, info) {
    //   console.log('onSelect', info);
    //   this.selectedKeys = selectedKeys;
    // },
    onTreeNodeSelect(id){
      console.log(id, 'onTreeNodeSelect')
      if(id && id.length>0){
        this.selectedKeys = id
      }
    },
    onExpand(expandedKeys){
      this.expandedKeysss = expandedKeys;
      this.autoExpandParent = false
    },
    onCheck (o) {
      console.log(o, 'onCheckonCheck')
      this.checkedKeys = o.checked
      // if(this.checkStrictly){
      //   this.checkedKeys = o.checked;
      // }else{
      //   this.checkedKeys = o
      // }
    },
    cancel() {},
    onChange () {},
    dispatchRole (record) {
      this.roleModel = true
      this.roleId = record.id
      console.log(record)
      this.queryRolePermission()
      this.loadTreeData()
    },
    reset () {
      this.searchRealname = ''
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
        let params = values;
        params.description = this.desc
        this.$post(`${apiNames['新增角色']}`,params).then((res) => {
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
        let params = values;
        params.description = this.desc
        params.id = this.editId
        this.$put(`${apiNames['编辑角色']}`,params).then((res) => {
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
      this.dataSource = this.dataSource.filter((item) => {
          return item.id !== id
      })

      let params = {
        id
      }
      this.$delete(`${apiNames['删除角色']}`,params).then(res => {
        this.$newthost({
          content: '删除成功'
        })
      })
    },
    handleEdit (record) {
      this.visible = true
      this.codedisabled = true;
      this.diologtitle = '编辑'
      this.editId = record.id
      // this.roleId = 
      setTimeout(() => {
        this.form.setFieldsValue({
          roleName: record.roleName,
          roleCode: record.roleCode,
          desc: record.description,
        });
      }, 100)
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
          roleName: this.searchRealname
        }
        this.$get(`${apiNames['获取角色列表']}`,params).then(res => {
        if (res.code == 0) {
            this.totalNum = res.result.total
            this.dataSource = res.result.records
            // dataSource.forEach(item => {
            //   this.dataSource.push({
            //     id: item.id,
            //     username: item.username,
            //     name: item.realname,
            //     sex: item.sex_dictText,
            //     phone: item.phone,
            //     addtime: item.createTime,
            //     lastlogin: '2021-3-17 10:49:00',
            //     status: item.status == 1 ? true : false,
            //   })
            // });
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
.roleList {
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
 .roleList .ant-table-wrapper {
  width: 100.55%;
}
 .ant-modal-body .roleList {
    max-height: 10rem;
    overflow: auto
  }
// .ant-modal-header, .ant-modal-body, .ant-modal-footer {
//      background: #043b7a;
//      border-top: .02rem solid #043b7a;
//      border-bottom: .02rem solid #043b7a;
//      .ant-modal-title {
//         color: white
//      }
//    }
//    .ant-modal-close, .ant-form-item-label > label {
//      color: white;
//    }
// // .userList {
//   .ant-form-item-label > label {
//     color: #FFFFFF!important
//   }
//   .ant-table-thead > tr > th {
//     background: #043b7a;
//   }
//   .ant-table-bordered .ant-table-thead > tr > th, .ant-table-bordered .ant-table-tbody > tr > td {
//     border-right: .01rem solid #0092c7;
//     border-bottom: .01rem solid #0092c7;
//     color: white;
//   }
//   .ant-table-bordered .ant-table-body > table {
//     border-left: .01rem solid #0092c7;
//     border-top: .01rem solid #0092c7;
//   }
//   .ant-pagination.mini .ant-pagination-total-text {
//     color: white
//   }
//   .ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link {
//     border: .02rem solid #008ec1!important;
//     background: #033166!important;
//   }
//   .anticon {
//     color: white;
//   }
//   .ant-table-tbody{
//    	  > tr:hover:not(.ant-table-expanded-row) > td,.ant-table-row-hover,.ant-table-row-hover>td{
//         background: #043b7a!important;
//       }
//    }
//    .ant-table-row-cell-break-word a {
//      color: #008ec3;
//    }
//    .ant-pagination-item-active {
//      background: #0096ca;
//    }
//    .ant-pagination-item-active a {
//       color: white;
//    }
//    .ant-pagination.mini .ant-pagination-item:not(.ant-pagination-item-active) {
//      background: #d9deef;
//      color: white
//    }
//    .ant-select {
//      color: white
//    }
//    .ant-pagination.mini .ant-pagination-options-quick-jumper input {
//      height: 20px;
//      background: #033166;
//      border: .02rem solid #008ec1!important;
//      color: white
//    }
//    .ant-pagination-options-quick-jumper {
//      color: white
//    }
//    .ant-switch {
//      background: rgb(24 76 121 / 78%);
//    }
//    .ant-switch-checked {
//      background: #1890ff
//    }
//    .ant-modal-body {
//      max-height: 8rem;
//      overflow: auto;
//    }
// // }
</style>
