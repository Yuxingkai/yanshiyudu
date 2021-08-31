<template>
  <div
    class="listContainer"
  >
    <div class="addUser">
        <div style="margin-left: .94rem;">
          <img style="width: .34rem;height: .34rem;margin-right: .2rem;" src="../../../assets/imgs/zhihuipaishui/usermanage/bianji.png" alt="">
          <span>数据列表添加</span>
        </div>
        <div class="addButton">
          <div @click="handleAdd" class="reset">添加</div>
        </div>
    </div>
    <a-table
        ref="table"
        size="middle"
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :loading="loading"
        :pagination="ipagination"
        :expandedRowKeys="expandedRowKeys"
        :scroll="{y: scrollY }"
        @expand="handleExpand"
        >
        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>
          <a-divider type="vertical" />
          <a-locale-provider :locale="zhCN">
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record)">
            <a>删除</a>
          </a-popconfirm>
          </a-locale-provider>
          <a-divider type="vertical" />
          <a @click="handleAddSub(record)">添加下级</a>
        </span>

    </a-table>
    <div style="position: absolute;right: 1rem;margin-top: .2rem;">
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
            <a-form-item
                label="父级节点"
                :labelCol="labelCol"
                :wrapperCol="wrapperCol"
                >
                <!-- <span slot="help">{{ validateStatus=='error'?'请选择父级节点':'&nbsp;&nbsp;' }}</span> -->
                <k-tree-select
                    @change="getValue" 
                    ref="treeSelect"
                    placeholder="请选择父级节点"
                    v-decorator="['pid', validatorRules.pid]"
                    dict="sys_category,name,id"
                    pidField="pid"
                    pidValue="0">
                </k-tree-select>
            </a-form-item>
            <a-form-item label="分类名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input placeholder="请输入分类名称" v-decorator.trim="[ 'name', validatorRules.name]" />
            </a-form-item>
            <a-form-item label="描述" :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-textarea v-model="desc" placeholder="" :rows="4" />
            </a-form-item>
        </a-form>
        </a-modal>
    </a-locale-provider>
  </div>
</template>
<script>
// const dataSource = [
//     {
//         desc: "B02",
//         createBy: "admin",
//         createTime: "2019-10-14 18:37:59",
//         description: null,
//         hasChild: "1",
//         id: "1183693424827564034",
//         name: "物料树",
//         pid: "0",
//         sysOrgCode: "A01",
//         updateBy: "admin",
//         updateTime: "2019-10-14 18:38:15",
//     }
// ]
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { apiNames } from '../../../Utils/config'
import KTreeSelect from './ktree'
export default {
  name: 'list',
  components: {
      KTreeSelect
  },
  data () {
      return {
        scrollY: 400,
        windowHeight: document.documentElement.clientHeight,
          selectId: '',
          model: {},
          validateStatus:"",
          validatorRules:{
          name:{rules: [{ required: true, message: '请输入名称!' }]},
          phone:{rules: [{ required: true, message: '请输入电话号码!' }]},
        },
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
          diologtitle: '新增',
          visible: false,
        zhCN,
        description: '分类字典管理页面',
        // 表头
        columns: [
          {
            title:'分类名称',
            align:"left",
            dataIndex: 'name'
          },
          {
            title:'描述',
            align:"left",
            dataIndex: 'description'
          },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
        ],
        url: {
          list: "/sys/category/rootList",
          childList: "/sys/category/childList",
          getChildListBatch: "/sys/category/getChildListBatch",
          delete: "/sys/category/delete",
          deleteBatch: "/sys/category/deleteBatch",
          exportXlsUrl: "/sys/category/exportXls",
          importExcelUrl: "sys/category/importExcel",
        },
        expandedRowKeys:[],
        hasChildrenField:"hasChild",
        pidField:"pid",
        dictOptions:{
        },
        subExpandedKeys:[],
        dataSource: [],
        loading: false,
        pageNo: 1,
        pageSize: 10,
        pageSizeOptions: ['8', '16'],
        defaultPageSize: 8,
        totalNum: 0,
        ipagination: false,
        disableSubmit:false,
        desc: '',
        treeData: [],
        form:this.$form.createForm(this),
        currdatetime: '',
        parentId: 0,
        editId: ''
      }
    },
  mounted() {
    window.onresize = () => {
        return (() => {
        window.fullHeight = document.documentElement.clientHeight;

        this.windowHeight = window.fullHeight;

        })()

    };
      this.loadListData()
  },

  watch: {
    windowHeight (val) {
      this.scrollY = val - 500
      console.log("实时屏幕高度：",val, this.windowHeight, this.scrollY );
    },
    selectId(value) {
      console.log(value);
    },
  },
  created() {
  },
  computed: {
    //   importExcelUrl(){
    //     return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    //   },
    //   tableProps() {
    //     let _this = this
    //     return {
    //       // 列表项是否可选择
    //       rowSelection: {
    //         selectedRowKeys: _this.selectedRowKeys,
    //         onChange: (selectedRowKeys) => _this.selectedRowKeys = selectedRowKeys
    //       }
    //     }
    //   }
    },
    methods: {
        getValue (data, label) {
            console.log(data, label)
            this.parentId = data
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
                    description: this.desc,
                    pid: this.parentId
                }
                let params = Object.assign(obj, values);
                this.$post(`${apiNames['分类字典添加']}`,params).then((res) => {
                if (res.code == 200) {
                    this.$newthost({
                        content: '添加成功'
                    })
                    this.dataSource = []
                    this.pageNo = 1
                    this.loadListData()
                }
                })
            })
        },
        sureEdit () {
            this.form.validateFields((err, values) => {
                let obj = {
                    description: this.desc,
                    pid: this.parentId,
                    id: this.editId
                }
                let params = Object.assign(obj, values);
                this.$put(`${apiNames['分类字典编辑']}`,params).then((res) => {
                if (res.code == 200) {
                    this.$newthost({
                        content: '修改成功'
                    })
                    this.dataSource = []
                    this.pageNo = 1
                    this.loadListData()
                }
                })
            })
        },
        loadParentData () {
            this.currdatetime = new Date().getTime();
            let params = {
                _t: this.currdatetime,
                pid: 0,
                tableName: 'sys_category',
                text: 'name',
                code: 'id',
                pidField: 'pid',
                hasChildField: 1,
                condition: ''
            }
            this.$get(`${apiNames['分类字典树查询']}`,params).then(res => {
                if (res.code == 0) {
                    this.treeData = []
                    res.result.forEach((ele) => {
                        this.treeData.push(
                            {
                                id: ele.code,
                                pId: ele.parentId,
                                value: ele.key,
                                title: ele.title,
                                isLeaf: ele.leaf
                            }
                        )
                    })
                    // this.treeData = res.result
                }
            })
        },
        genTreeNode(parentId) {
            this.currdatetime = new Date().getTime();
            let params = {
                _t: this.currdatetime,
                pid: parentId,
                tableName: 'sys_category',
                text: 'name',
                code: 'id',
                pidField: 'pid',
                hasChildField: '',
                condition: ''
            }
            this.$get(`${apiNames['分类字典树查询']}`,params).then(res => {
                if (res.code == 0) {
                    return {
                                id: ele.code,
                                pId: ele.parentId,
                                value: ele.key,
                                title: ele.title,
                                isLeaf: ele.leaf
                            }
                    // this.treeData = res.result
                }
            })
            // const random = Math.random()
            //     .toString(36)
            //     .substring(2, 6);
            // return {
            //     id: random,
            //     pId: parentId,
            //     value: random,
            //     title: isLeaf ? 'Tree Node' : 'Expand to load',
            //     isLeaf,
            // };
        },
        onLoadData(treeNode) {
            return new Promise(resolve => {
                const { value } = treeNode.dataRef;
                setTimeout(() => {
                    this.treeData = this.treeData.concat([
                        this.genTreeNode(value)
                    ]);
                    resolve();
                }, 300);
            });
        },
        handleParentIdChange(value){
            if(!value){
                this.validateStatus="error"
            }else{
                this.validateStatus="success"
            }
            },
            handleEdit (record) {
                this.visible = true
                this.diologtitle = '编辑'
                console.log(record)
                this.editId = record.id
                this.desc = record.description
                setTimeout(() => {
                    this.form.setFieldsValue({
                    name: record.name,
                    pid: 0
                    });
                }, 100)
            },
      pageChange (pageNum, pageSize) {
        console.log(pageNum, pageSize)
        this.dataSource = []
        this.pageNo = pageNum
      },
      showSizeChange (current, size) {
        console.log(current, size)
        this.dataSource = []
        this.pageSize = size
        this.pageNo = 1
        this.loadListData()
      },
      loadListData () {
          let params = {
            pageSize: this.pageSize,
            pageNo: this.pageNo
            }
            this.$get(`${apiNames['分类字典顶级查询']}`,params).then(res => {
            if (res.code == 0) {
                this.totalNum = res.result.total
                this.dataSource = this.getDataByResult(res.result.records)
            }
        })
      },
      loadData(arg){
        if(arg==1){
          this.ipagination.current=1
        }
        this.loading = true
        let params = this.getQueryParams()
        return new Promise((resolve) => {
          getAction(this.url.list,params).then(res=>{
            if(res.success){
              let result = res.result
              if(Number(result.total)>0){
                this.ipagination.total = Number(result.total)
                this.dataSource = this.getDataByResult(res.result.records)
                //update--begin--autor:lvdandan-----date:20201204------for：JT-31 删除成功后默认展开已展开信息
                return this.loadDataByExpandedRows(this.dataSource)
                //update--end--autor:lvdandan-----date:20201204------for：JT-31 删除成功后默认展开已展开信息
              }else{
                this.ipagination.total=0
                this.dataSource=[]
              }
            }else{
              this.$message.warning(res.message)
            }
          }).finally(()=>{
            this.loading = false
          })
        })
      },
      getDataByResult(result){
        return result.map(item=>{
          //判断是否标记了带有子节点
          if(item[this.hasChildrenField]=='1'){
            let loadChild = { id: item.id+'_loadChild', name: 'loading...', isLoading: true }
            item.children = [loadChild]
          }
          return item
        })
      },
      handleExpand(expanded, record){
        // 判断是否是展开状态
        if (expanded) {
          this.expandedRowKeys.push(record.id)
          if (record.children.length>0 && record.children[0].isLoading === true) {
            let params = {
                pageSize: 100,
                pageNo: 1
            };//查询条件
            params[this.pidField] = record.id
            this.$get(`${apiNames['分类字典下级查询']}`,params).then(res => {
                if (res.result && res.result.length>0) {
                    record.children = this.getDataByResult(res.result)
                    this.dataSource = [...this.dataSource]
                } else {
                    record.children=''
                    record.hasChildrenField='0'
                }
            })
          }
        }else{
          let keyIndex = this.expandedRowKeys.indexOf(record.id)
          if(keyIndex>=0){
            this.expandedRowKeys.splice(keyIndex, 1);
          }
        }
      },
      expandTreeNode(nodeId){
        return new Promise((resolve,reject)=>{
          this.getFormDataById(nodeId,this.dataSource)
          let row = this.parentFormData
          this.expandedRowKeys.push(nodeId)
          let params = this.getQueryParams();//查询条件
          params[this.pidField] = nodeId
          getAction(this.url.childList,params).then((res)=>{
            console.log("11111",res)
            if(res.success){
              if(res.result && res.result.length>0){
                row.children = this.getDataByResult(res.result)
                this.dataSource = [...this.dataSource]
                resolve()
              }else{
                row.children=''
                row.hasChildrenField='0'
                reject()
              }
            }else{
              reject()
            }
          })
        })
      },
      getFormDataById(id,arr){
        if(arr && arr.length>0){
          for(let i=0;i<arr.length;i++){
            if(arr[i].id==id){
              this.parentFormData = arr[i]
            }else{
              this.getFormDataById(id,arr[i].children)
            }
          }
        }
      },
      handleAdd () {
          this.visible = true
      },
      handleAddSub(record){
          this.visible = true
          this.diologtitle = '添加下级'
            console.log(record)
            this.editId = record.id
            this.desc = ''
            setTimeout(() => {
                this.form.setFieldsValue({
                pid: record.id,
                name: ''
                });
            }, 100)
      },
      handleDelete: function (record) {
            this.dataSource = []
            let params = {
                id: record.id
            }
            this.$delete(`${apiNames['分类字典删除']}`,params).then(res => {
                this.$newthost({
                content: '删除成功'
                })
                this.expandedRowKeys = []
                this.loadListData()
            })
      },
      // 添加子分类时获取所有父级id
      getExpandKeysByPid(pid,arr,all){
        if(pid && arr && arr.length>0){
          for(let i=0;i<arr.length;i++){
            if(arr[i].id==pid){
              this.subExpandedKeys.push(arr[i].id)
              this.getExpandKeysByPid(arr[i]['pid'],all,all)
            }else{
              this.getExpandKeysByPid(pid,arr[i].children,all)
            }
          }
        }
      },
      // 根据已展开的行查询数据（用于保存后刷新时异步加载子级的数据）
      loadDataByExpandedRows(dataList) {
        if (this.expandedRowKeys.length > 0) {
          return getAction(this.url.getChildListBatch,{ parentIds: this.expandedRowKeys.join(',') }).then(res=>{
            if (res.success && res.result.records.length>0) {
              //已展开的数据批量子节点
              let records = res.result.records
              const listMap = new Map();
              for (let item of records) {
                let pid = item[this.pidField];
                if (this.expandedRowKeys.join(',').includes(pid)) {
                  let mapList = listMap.get(pid);
                  if (mapList == null) {
                    mapList = [];
                  }
                  mapList.push(item);
                  listMap.set(pid, mapList);
                }
              }
              let childrenMap = listMap;
              let fn = (list) => {
                if(list) {
                  list.forEach(data => {
                    if (this.expandedRowKeys.includes(data.id)) {
                      data.children = this.getDataByResult(childrenMap.get(data.id))
                      fn(data.children)
                    }
                  })
                }
              }
              fn(dataList)
            }
          })
        } else {
          return Promise.resolve()
        }
      },
      
       
    },
  beforeDestroy() {
  }
}
</script>
<style scoped lang='scss'>
.listContainer{
    position: relative;
    padding: 0 .6rem 0 .35rem;
    margin-top: .5rem;
}
.addUser {
    width: 100%;
    height: 1.24rem;
    padding-top: .44rem;
    line-height: .8rem;
    margin-bottom: .3rem;
    // margin: .48rem 0 0 0;
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
</style>
<style lang='scss'>
.ant-table-thead > tr > th {
    background: #043b7a;
    color: white;
    border: .01rem solid #0092c7;
  }
  .ant-table-tbody > tr > td {
      background: #043b7a;
      border: .01rem solid #0092c7;
  } 
  .ant-table-content {
      color: white
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
//    .ant-modal-body {
//        max-height: 10rem;
//        overflow: auto;
//    }
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
</style>
