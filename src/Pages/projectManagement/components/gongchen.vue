<template>
  <div class="projeftNum">
    <div class="closeButton" @click="closePop">
        X
    </div>
    <div class="module1">
        <div :class="nowIndex == 1 ? 'activeClass' : ''" @click="choose(1)">工程汇总</div>
        <div style="width: .84rem;">|</div>
        <div :class="nowIndex == 2 ? 'activeClass' : ''" @click="choose(2)">工程详情</div>
    </div>
    <div v-if="nowIndex == 1">
        <div class="searchItems">
            <div>
                筛选条件:
            </div>
            <div style="margin-left: .5rem;">
                工程名称:
                <a-input style="width: 1.8rem;" v-model="gcName" placeholder="" />
            </div>
            <div style="margin-left: .8rem;">
                所属项目:
                <a-input style="width: 1.8rem;" v-model="xmmc" placeholder="" />
                <!-- <a-select
                    style="width: 1.8rem;"
                    placeholder="请选择"
                    :showArrow="showArrow"
                    optionFilterProp = "children"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in proArr" :key="roleindex.toString()" :value="role.value">
                    {{ role.title }}
                    </a-select-option>
                </a-select> -->
            </div>
            <div class="buttons">
                <div @click="getAllProject">查询</div>
                <!-- <div>导出</div> -->
                <div @click="adddNew">新增</div>
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
            <span slot="gcStatus" slot-scope="text, record">
                {{ record.gcStatus == 1 ? '进行中' : '已完成'}}
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
                <div class="label">*工程名称:</div>
                <div style="margin-left: .36rem;">
                    <a-input style="width: 3.48rem;" v-model="formObj.gcName" placeholder="" />
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">*工程类别:</div>
                <div style="margin-left: .36rem;">
                    <!-- <a-input style="width: 3.48rem;" v-model="formObj.gcCategory" placeholder="" /> -->
                    <a-select
                        style="width: 3.48rem;"
                        placeholder="请选择"
                        :showArrow="showArrow"
                        v-model="formObj.gcCategory"
                        optionFilterProp = "children"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in gcCategoryArr" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                        </a-select-option>
                    </a-select>
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">*所属项目:</div>
                <div style="margin-left: .36rem;">
                    <a-select
                        style="width: 3.48rem;"
                        placeholder="请选择"
                        :showArrow="showArrow"
                        optionFilterProp = "children"
                        v-model="formObj.proId"
                        @change="onChangeXm"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in proArr" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                        </a-select-option>
                    </a-select>
                </div>
            </div>
            <div v-if="false" style="display: flex;margin-top: .24rem;">
                <div class="label">*所属区域:</div>
                <div style="margin-left: .36rem;">
                    <!-- <a-select
                        style="width: 3.48rem;"
                        placeholder=""
                        allowClear
                        :showArrow="showArrow"
                        optionFilterProp = "children"
                        v-model="formObj.locationcodes"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in roadidArr" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                        </a-select-option>
                    </a-select> -->
                    <a-cascader
                        :defaultValue="defaultValue"
                        style="width: 3.48rem;"
                        :options="areaArr"
                        :load-data="loadData"
                        :placeholder="placeholder"
                        change-on-select
                        @change="onChangeArea"
                    />
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">*所属道路:</div>
                <div style="margin-left: .36rem;">
                    <a-select
                        style="width: 3.48rem;"
                        placeholder=""
                        allowClear
                        :showArrow="showArrow"
                        optionFilterProp = "children"
                        v-model="formObj.locationcodes"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in roadidArr" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                        </a-select-option>
                    </a-select>
                </div>
            </div>
            <!-- <div style="display: flex;margin-top: .24rem;">
                <div class="label">*工程范围:</div>
                <div style="margin-left: .36rem;">
                    <a-input style="width: 3.48rem;" placeholder="" />
                </div>
            </div> -->
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">*施工单位:</div>
                <div style="margin-left: .36rem;">
                    <a-input style="width: 3.48rem;" v-model="formObj.gcSgdw" placeholder="" />
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">监理单位:</div>
                <div style="margin-left: .36rem;">
                    <a-input style="width: 3.48rem;" v-model="formObj.gcJldw" placeholder="" />
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">*工程状态:</div>
                <div style="margin-left: .36rem;">
                    <!-- <a-input style="width: 3.48rem;" v-model="formObj.gcStatus" placeholder="" /> -->
                    <a-select
                        style="width: 3.48rem;"
                        placeholder="请选择"
                        :showArrow="showArrow"
                        v-model="formObj.gcStatus"
                        optionFilterProp = "children"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in gcStatusArr" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                        </a-select-option>
                    </a-select>
                </div>
            </div>
            <!-- <div style="display: flex;margin-top: .24rem;">
                <div class="label">负责人:</div>
                <div style="margin-left: .36rem;">
                    <a-input style="width: 3.48rem;" v-model="formObj.xmfzr" placeholder="" />
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">审核人:</div>
                <div style="margin-left: .36rem;">
                    <a-input style="width: 3.48rem;" v-model="formObj.shren" placeholder="" />
                </div>
            </div>
            <div style="display: flex;margin-top: .24rem;">
                <div class="label">批准人:</div>
                <div style="margin-left: .36rem;">
                    <a-input style="width: 3.48rem;" v-model="formObj.pzren" placeholder="" />
                </div>
            </div> -->
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
            totalNum: 0,
            showArrow: false,
            defaultValue: [],
            placeholder: '',
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
                    title: '工程名称',
                    align: "center",
                    width: 180,
                    dataIndex: 'gcName',
                    ellipsis: true
                },
                {
                    title: '项目名称',
                    align: "center",
                    width: 100,
                    dataIndex: 'xmmc',
                    ellipsis: true
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
                    dataIndex: 'gcSgdw'
                },
                {
                    title: '监理单位',
                    align: "center",
                    width: 100,
                    dataIndex: 'gcJldw'
                },
                {
                    title: '项目状态',
                    align: "center",
                    width: 100,
                    dataIndex: 'gcStatus',
                    scopedSlots: {customRender: 'gcStatus'},
                },
                {
                    title: '工程地点',
                    align: "center",
                    width: 100,
                    dataIndex: 'gcAddress'
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
            pageNo: 1,
            pageSize: 6,
            formObj: {
                gcName: '',
                gcCategory: null,
                gcSgdw: '',
                gcJldw: '',
                gcStatus: '',
                xmfzr: '',
                shren: '',
                pzren: '',
                proId: '',
                locationcodes: [],
                districtId: '',
                districtName: '',
            },
            gcCategoryArr: [
                {
                    value: 1,
                    title: '检测'
                },
                {
                    value: 2,
                    title: '养护'
                },
                {
                    value: 3,
                    title: '修复'
                },
                {
                    value: 4,
                    title: '专项调查'
                },
                {
                    value: 5,
                    title: '其他'
                }
            ],
            gcStatusArr: [
                {
                    value: 1,
                    title: '进行中'
                },
                {
                    value: 2,
                    title: '已完成'
                }
            ],
            gcName: '',
            xmmc: '',
            proArr: [],
            roadidArr: [],
            areaArr: [],
            editBoolen: false
        }
    },
    methods: {
        onChangeXm(value, selectedOptions) {
            let ele = this.proArr.filter((item) => {
                return item.value == value
            })[0]
            this.getAllRoad(ele.districtId)
        },
        onChangeArea(value, selectedOptions) {
            this.formObj.districtName = ''
            this.formObj.districtId = value.join(',')
            this.placeholder = ''
            for (let i = 0; i < selectedOptions.length; i++) {
                this.formObj.districtName += selectedOptions[i].label + '/'
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
        cancelDelete () {},
        deleteXm (item) {
            this.$delete(apiNames['删除工程'], {id: item.gcId}).then(res => {
                if (res.code == 200) {
                    notification.success({ message: '删除提示', description: '工程删除成功'})
                    this.pageNo = 1
                    this.getAllProject()
                } else {
                    notification.error({ message: '删除提示', description: res.message})
                }
            })
        },
        pageChange (pageNum) {
            this.pageNo = pageNum
            this.getAllProject()
        },
        choose (index) {
            this.nowIndex = index
            if (this.nowIndex == 1) {
                this.getAllProject()
                this.editBoolen = false
            }
        },
        closePop () {
            this.$emit('closeg')
        },
        adddNew () {
            this.nowIndex = 2
        },
        getAllProject () {
            let param = {
                gcName: this.gcName,
                pageNo: this.pageNo,
                pageSize: this.pageSize,
                xmmc: this.xmmc
            }
            this.$get(apiNames['获取工程列表页'], param).then(res => {
                if (res.code == 0) {
                    this.dataSource = res.result.records
                    this.totalNum = res.result.total
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
        submit () {
            if (!this.editBoolen) {
                this.save()
            } else {
                this.editItem()
            }
            this.choose(1)
            this.formObj = {
                gcName: '',
                gcCategory: null,
                gcSgdw: '',
                gcJldw: '',
                gcStatus: null,
                xmfzr: '',
                shren: '',
                pzren: '',
                proId: '',
                locationcodes: [],
                districtId: '',
                districtName: '',
            }
        },
        editItem () {
            this.formObj.locationcodes = [this.formObj.locationcodes]
            this.$put(apiNames['工程编辑'], this.formObj).then(res => {
                if (res.code == 500) {
                    notification.success({ message: '系统提示', description: res.message})
                } else {
                    notification.success({ message: '系统提示', description: '修改工程成功'})
                }
            })
        },
        save () {
            this.formObj.locationcodes = [this.formObj.locationcodes]
            this.$post(apiNames['工程新增'], this.formObj).then(res => {
                if (res.code == 500) {
                    notification.success({ message: '系统提示', description: res.message})
                } else {
                    notification.success({ message: '系统提示', description: '添加工程成功'})
                }
            })
        },
        cancel () {
            this.choose(1)
            this.formObj = {
                gcName: '',
                gcCategory: null,
                gcSgdw: '',
                gcJldw: '',
                gcStatus: null,
                xmfzr: '',
                shren: '',
                pzren: '',
                proId: '',
                locationcodes: [],
                districtId: '',
                districtName: '',
            }
        },
        editAction (item) {
            this.nowIndex = 2
            this.formObj = {
                gcName: item.gcName,
                gcCategory: Number(item.gcCategory),
                gcSgdw: item.gcSgdw,
                gcJldw: item.gcJldw,
                gcStatus: Number(item.gcStatus),
                xmfzr: item.xmfzr,
                shren: item.shren,
                pzren: item.pzren,
                proId: item.proId,
                locationcodes: item.roadList.length !== 0 ? item.roadList[0].objectid : '',
                id: item.gcId,
                districtId: item.districtId,
                districtName: item.districtName,
            }
            this.placeholder = item.districtName
            this.editBoolen = true
            this.getAllRoad(item.districtId)
        }
    }, 
    mounted () {
        this.getProvinceInfo()
        this.getAllProject()
        this.getAllProjectName()
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
    .projeftNum .ant-cascader-picker {
        color: white;
    }
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
        height: 11.02rem;
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