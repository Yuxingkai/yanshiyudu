<template>
  <div class="projeftNum">
    <div class="closeButton" @click="closePop">
        X
    </div>
    <div class="module1">
        <div :class="nowIndex == 1 ? 'activeClass' : ''" @click="choose(1)">项目汇总</div>
        <div style="width: .84rem;">|</div>
        <div :class="nowIndex == 2 ? 'activeClass' : ''" @click="choose(2)">项目详情</div>
    </div>
    <div v-if="nowIndex == 1">
        <div class="searchItems">
            <div>
                筛选条件:
            </div>
            <div style="margin-left: .5rem;">
                项目名称:
                <a-input v-model="xmmc" style="width: 1.8rem;" placeholder="" />
            </div>
            <div style="margin-left: .8rem;">
                项目状态:
                <a-select
                    allowClear
                    style="width: 1.8rem;"
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
            <div class="buttons">
                <div @click="getXmlist">查询</div>
                <!-- <div>导出</div> -->
                <div @click="addProject">新增</div>
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
            :loading="loading">
             <span slot="xmcategory" slot-scope="text, record">
                {{ checkxmcategory(record.xmcategory) }}
            </span>
            <span slot="proStatus" slot-scope="text, record">
                {{ record.proStatus == '0' ? '未开始' : (record.proStatus == '1' ? '进行中' : '已完成') }}
            </span>
            <span slot="action" slot-scope="text, record">
                <a style="margin-right: .3rem;" @click="editAction(record)" >编辑</a>
                <a-locale-provider :locale="zhCN">
                    <a-popconfirm
                        title="确认删除?"
                        @confirm="deleteXm(record)"
                        @cancel="cancelDelete"
                    >
                        <a href="javascript:;">删除</a>
                    </a-popconfirm>
                </a-locale-provider>
            </span>
        </a-table>
        </div>
        <div style="margin-top: .5rem;">
            <a-locale-provider :locale="zhCN">
            <a-pagination @change="pageChange" :defaultPageSize="defaultPageSize" size="small" :total="totalNum" :show-total="total => `共${total}条`" show-quick-jumper >
            </a-pagination>
            </a-locale-provider>
        </div>
    </div>
    <div v-else>
        <div class="contain">
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">*项目名称:</div>
                <div style="margin-left: .36rem;">
                    <a-input style="width: 3.48rem;" v-model="addParams.xmmc" placeholder="" />
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">*项目类别:</div>
                <div style="margin-left: .36rem;">
                    <a-select
                    style="width: 3.48rem;"
                    placeholder="请选择"
                    :showArrow="showArrow"
                     v-model="addParams.xmcategory"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in proJectArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select>
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">*项目金额:</div>
                <div style="margin-left: .36rem;">
                    <a-input style="width: 3.48rem;" v-model="addParams.money" placeholder="" />
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">*项目范围:</div>
                <div style="margin-left: .36rem;">
                    <a-cascader
                        :defaultValue="defaultValue"
                        style="width: 3.48rem;color: white;"
                        :options="xmfw"
                        :load-data="loadData"
                        :placeholder="placeholder"
                        change-on-select
                        @change="onChange"
                    />
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">*施工单位:</div>
                <div style="margin-left: .36rem;">
                    <a-input v-model="addParams.sgdw" style="width: 3.48rem;" placeholder="" />
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">监理单位:</div>
                <div style="margin-left: .36rem;">
                    <a-input v-model="addParams.jldw" style="width: 3.48rem;" placeholder="" />
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">*项目状态:</div>
                <div style="margin-left: .36rem;">
                    <a-select
                        style="width: 3.48rem;"
                        placeholder="请选择"
                        v-model="addParams.proStatus"
                        :showArrow="showArrow"
                        optionFilterProp = "children"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in proJectStatus" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                        </a-select-option>
                    </a-select>
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">负责人:</div>
                <div style="margin-left: .36rem;">
                    <a-input v-model="addParams.xmfzr" style="width: 3.48rem;" placeholder="" />
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">审核人:</div>
                <div style="margin-left: .36rem;">
                    <a-input v-model="addParams.shren" style="width: 3.48rem;" placeholder="" />
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">批准人:</div>
                <div style="margin-left: .36rem;">
                    <a-input v-model="addParams.pzren" style="width: 3.48rem;" placeholder="" />
                </div>
            </div>
            <div class="actions">
                <div @click="submit">保存</div>
                <div @click="cancel">取消</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { apiNames } from '../../../Utils/config'
import {notification, message, Switch} from 'ant-design-vue'
export default {
    data() {
        return {
            zhCN,
            defaultPageSize: 6,
            totalNum: 10,
            showArrow: false,
            statusArr: [
                {
                    value: '1',
                    title: '已完成'
                },
                {
                    value: '0',
                    title: '未完成'
                }
            ],
            columns: [
                {
                    title: '序号',
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
                    width: 180,
                    dataIndex: 'xmmc',
                },
                {
                    title: '项目类型',
                    align: "center",
                    width: 100,
                    dataIndex: 'xmcategory',
                    scopedSlots: {customRender: 'xmcategory'},
                },
                {
                    title: '项目金额',
                    align: "center",
                    width: 100,
                    dataIndex: 'money'
                },
                {
                    title: '项目范围',
                    align: "center",
                    width: 100,
                    dataIndex: 'districtName',
                    ellipsis: true
                },
                {
                    title: '施工单位',
                    align: "center",
                    width: 100,
                    dataIndex: 'sgdw'
                },
                {
                    title: '监理单位',
                    align: "center",
                    width: 100,
                    dataIndex: 'jldw'
                },
                {
                    title: '项目状态',
                    align: "center",
                    width: 100,
                    scopedSlots: {customRender: 'proStatus'},
                    dataIndex: 'proStatus'
                },
                {
                    title: '工程数量',
                    align: "center",
                    width: 100,
                    dataIndex: 'gcCount'
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
            loading: false,
            nowIndex: 1,
            xmmc: '',
            proStatus: '',
            addParams: {
                xmmc: '',
                xmcategory: '',
                money: '',
                districtId: '',
                districtName: '',
                sgdw: '',
                jldw: '',
                proStatus: '',
                xmfzr: '',
                shren: '',
                pzren: ''
            },
            proJectArr: [
            ],
            proJectStatus: [],
            xmfw: [
            ],
            defaultValue: [],
            placeholder: '',
            editBoolen: false,
            pageNo: 1
        }
    },
    methods: {
        cancelDelete () {},
        deleteXm (item) {
            this.$delete(apiNames['删除项目'], {id: item.id}).then(res => {
                if (res.code == 200) {
                    notification.success({ message: '删除提示', description: '项目删除成功'})
                    this.pageNo = 1
                    this.getXmlist()
                } else {
                    notification.error({ message: '删除提示', description: res.message})
                }
            })
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
        pageChange (pageNum) {
            this.pageNo = pageNum
            this.getXmlist()
        },
        cancel () {
            this.choose(1)
            this.addParams = {
                xmmc: '',
                xmcategory: '',
                money: '',
                districtId: '',
                districtName: '',
                sgdw: '',
                jldw: '',
                proStatus: '',
                xmfzr: '',
                shren: '',
                pzren: ''
            }
        },
        choose (index) {
            this.nowIndex = index
            if (this.nowIndex == 1) {
                this.getXmlist()
                this.editBoolen = false
            } else {
            }
            this.addParams = {
                xmmc: '',
                xmcategory: '',
                money: '',
                districtId: '',
                districtName: '',
                sgdw: '',
                jldw: '',
                proStatus: '',
                xmfzr: '',
                shren: '',
                pzren: ''
            }
        },
        closePop () {
            this.$emit('close')
        },
        getXmlist () {
            let params = {
                xmmc: this.xmmc,
                proStatus: this.proStatus,
                pageNo: this.pageNo,
                pageSize: 6
            }
            this.$post(apiNames['查询项目汇总'], params).then(res => {
                if (res.code == 0) {
                    this.dataSource = res.result.records
                    this.totalNum = res.result.total
                } else {
                    this.dataSource = []
                }
            })
        },
        addProject () {
            this.nowIndex = 2
        },
        onChange(value, selectedOptions) {
            this.addParams.districtName = ''
            this.addParams.districtId = value.join(',')
            this.placeholder = ''
            for (let i = 0; i < selectedOptions.length; i++) {
               this.addParams.districtName += selectedOptions[i].label + '/'
            }
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
                    this.xmfw.push(o)
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
                this.xmfw = [...this.xmfw];
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
                this.xmfw = [...this.xmfw];
            })
        },
        submit () {
            if (!this.editBoolen) {
                this.addNew()
            } else {
                this.editItem()
            }
            this.choose(1)
        },
        addNew () {
            this.$post(apiNames['添加项目'], this.addParams).then(res => {
                if (res.code == 500) {
                    notification.success({ message: '系统提示', description: res.message})
                } else {
                    notification.success({ message: '系统提示', description: '新增项目成功'})
                }
            })
        },
        editItem () {
            this.$put(apiNames['编辑项目'], this.addParams).then(res => {
                if (res.code == 500) {
                    notification.success({ message: '系统提示', description: res.message})
                } else {
                    notification.success({ message: '系统提示', description: '编辑项目成功'})
                }
            })
        },
        editAction (item) {
            this.nowIndex = 2
            this.addParams = {
                xmmc: item.xmmc,
                xmcategory: item.xmcategory,
                money: item.money,
                districtId: item.districtId,
                districtName: item.districtName,
                sgdw: item.sgdw,
                jldw: item.jldw,
                proStatus: item.proStatus.toString(),
                xmfzr: item.xmfzr,
                shren: item.shren,
                pzren: item.pzren,
                id: item.id
            }
            this.editBoolen = true
            this.placeholder = item.districtName
        }
    },
    mounted () {
        let allDictItems = JSON.parse(window.localStorage.getItem('allDictItems'))
        // 管段材质
        this.proJectArr = allDictItems.pipe_survey
        this.proJectStatus = allDictItems.eoa_plan_status
        this.getXmlist()
        this.getProvinceInfo()
    },
}
</script>

<style lang='scss'>
    .projeftNum .ant-input, .projeftNum .ant-select-selection--single {
        background: #205187!important;
        color: white;
        border: .02rem solid #03ace3;
        height: .5rem;
    }
    .projeftNum .ant-select-selection__rendered {
        margin: 0;
        line-height: .52rem;
    }
    .projeftNum .ant-select-dropdown-menu-item, .projeftNum .ant-input {
        padding: 0;
    }
    .projeftNum .ant-calendar-picker-clear {
        background: none;
        color: #03ace3
    }
    .projeftNum input::-webkit-input-placeholder {
        color: white!important
    }
    .anticon{
        color: #1890ff!important
    }
    .ant-cascader-picker-clear {
        background: none;
    }
    .ant-cascader-picker-label {
        text-align: left;
    }
    // .ant-cascader-picker-clear{
    //     color: white;
    // }
</style>
<style lang='scss'>
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
</style>
<style scoped lang='scss'>
    .projeftNum {
        position: relative;
        width: 300%;
        height: 12.02rem;
        background-image: url('../../../assets/imgs/zhihuipaishui/ppline/squareBac.png');
        background-size: 100% 100%;
        z-index: 10;
        .closeButton {
          position: absolute;
          right: .5rem;
          top: .3rem;
          width: .5rem;
          height: .5rem;
          border-radius: .25rem;
          z-index: 10;
        }
        .closeButton:hover {
          background: gray;
        }
        .module1 {
            display: flex;
            vertical-align: middle;
            position: relative;
            margin: .4rem 0 0 .6rem;
            div {
                vertical-align: middle;
                text-align: center;
                width: 84px;
                height: 28px;
                line-height: 28px;
                cursor: pointer;
            }
            .activeClass {
                width: 84px;
                height: 28px;
                background-image: url('../../../assets/imgs/zhihuipaishui/ppline/selected.png');
                background-size: 100% 100%;
            }
        }
        .module1:after {
            content: '';
            width: 4.9rem;
            height: .18rem;
            position: absolute;
            bottom: -.3rem;
            left: -.6rem;
            display:block;
            background-image: url('../../../assets/imgs/zhihuipaishui/pjmanage/longSplit.png');
            background-size: 100% 100%;
        }
        .searchItems {
            display: flex;
            margin: .46rem 0 0 .6rem;
            .buttons {
                display: flex;
                margin-left: .2rem;
                div {
                    width: .94rem;
                    height: .42rem;
                    background: #2781b4;
                    border-radius: .1rem;
                    margin-left: .24rem;
                    font-size: .28rem;
                    line-height: .42rem;
                }
            }
        }
        .table {
            width: 98%;
            margin: .3rem 0 0 0;
        }
        .contain {
            margin: .8rem 0 0 3rem;
            .label {
                width: 2.14rem;
                height: .54rem;
                line-height: .54rem;
                background-image: url('../../../assets/imgs/zhihuipaishui/ppline/selected.png');
                background-size: 100% 100%;
            }
            .actions {
                display: flex;
                margin: .3rem 2rem;
                div {
                    width: .94rem;
                    height: .42rem;
                    border-radius: .1rem;
                    background: #6c6c6c;
                    margin-right: .3rem;
                }
                div:hover {
                    background: #205187;
                }
            }
        }
    }
</style>