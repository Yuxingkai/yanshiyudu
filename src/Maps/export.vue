<template>
  <div class="charts">
      <div class="chengguo">
          成果生成
      </div>
      <div class="closeButton" @click="closePopShow">
        X
      </div>
      <div style="margin-top: .8rem;">
          <div style="margin-left: 1.14rem;">
              成果范围
              <div style="width: 962px;height: 1px;background: #00B7EE;margin-top: .2rem;"></div>
          </div>
          <div style="display: flex;margin-top: .5rem;margin-left: 3rem;">
              <div>
                <span style="margin-right: .3rem;">区域范围:</span>
                <a-cascader
                    :defaultValue="defaultValue"
                    style="width: 4rem;color: white;"
                    :options="xmfw"
                    :load-data="loadData"
                    :placeholder="placeholder"
                    change-on-select
                    @change="onChange"
                />
              </div>
              <div>
                <span style="margin-right: .3rem;margin-left: .3rem;">道路名称:</span>
                <a-select
                    style="width: 6.76rem;margin-right: .3rem;"
                    allowClear
                    placeholder="区域"
                    optionFilterProp = "children"
                    v-model="selectedroadName"
                    :getPopupContainer= "(target) => target.parentNode">
                    <a-select-option v-for="(role,roleindex) in roadArr" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                    </a-select-option>
                </a-select>
              </div>
          </div>
          <div style="display: flex;margin-top: .5rem;margin-left: 3rem;">
               <div>
                    <span>项目名称: </span>
                    <!-- <a-input style="width: 2.75rem;margin-left: .2rem;" placeholder="" /> -->
                    <a-select
                        style="width: 4rem;margin-left: .2rem;"
                        allowClear
                        show-search
                        :filter-option="filterOption"
                        @change="handleChangeXM"
                        placeholder="区域"
                        optionFilterProp = "children"
                        v-model="selectedXm"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in xmNameArr" :key="roleindex.toString()" :value="role.id">
                        {{ role.xmmc }}
                        </a-select-option>
                    </a-select>
                </div>
                <div style="margin-left: .35rem;">
                    <span>工程名称: </span>
                    <!-- <a-input style="width: 6.7rem;margin-left: .2rem;" placeholder="" /> -->
                    <a-select
                        style="width: 6.7rem;margin-left: .2rem;"
                        allowClear
                        show-search
                        :filter-option="filterOptiongc"
                        placeholder="区域"
                        optionFilterProp = "children"
                        v-model="selectedGc"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in gcNameArr" :key="roleindex.toString()" :value="role.gcid">
                        {{ role.gcName }}
                        </a-select-option>
                    </a-select>
                </div>
          </div>
      </div>
      <div style="margin-top: .8rem;">
          <div style="margin-left: 1.14rem;">
              <span>成果要素</span><span><a-checkbox :checked="checked1" style="margin-left: .5rem;" @change="onChange1">全部</a-checkbox></span>
              <div style="width: 962px;height: 1px;background: #00B7EE;margin-top: .2rem;"></div>
          </div>
          <div style="display: flex;width: 80%;margin-top: .5rem;margin-left: 1.5rem;">
              <div @click="choose(item,index)" v-for="(item, index) in chengguoArr" :style="item.selected ? 'background: #2781B4;' : 'background: #6B7378;'" :key="index" style="cursor: pointer;margin-left: 1.5rem;width: 109px;height: 31px;background: #6B7378;border-radius: 5px;text-align: center;line-height: 31px;font-size: 18px;">
                  {{ item.name }}
              </div>
          </div>
      </div>
      <div style="margin-top: .8rem;">
          <div style="margin-left: 1.14rem;">
              <span>导出形式</span><span><a-checkbox :checked="checked2" style="margin-left: .5rem;" @change="onChange2">全部</a-checkbox></span>
              <div style="width: 962px;height: 1px;background: #00B7EE;margin-top: .2rem;"></div>
          </div>
          <div style="margin-left: 2.44rem;">
              <div style="display: flex;margin-top: .5rem;">
                  <div><a-checkbox style="margin-left: .5rem;" :checked="checked2_1" @change="onChange2_1"></a-checkbox></div>
                  <div style="cursor: pointer;margin-left: .5rem;width: 109px;height: 31px;background: #2781B4;border-radius: 5px;text-align: center;line-height: 31px;font-size: 18px;">
                    导出word
                  </div>
                  <div style="margin-left: .7rem;width: 141px;height: 31px;background: #205187;border: 1px solid #00B7EE;border-radius: 5px;text-align: center;font-size: 18px;line-height: 31px;">
                      报告类型
                  </div>
                  <div>
                      <a-select
                        style="width: 3.7rem;margin-left: .2rem;"
                        allowClear
                        placeholder="请选择类型"
                        optionFilterProp = "children"
                        v-model="category"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in categoryArr" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                        </a-select-option>
                    </a-select>
                  </div>
              </div>
              <!-- <div style="display: flex;margin-top: .5rem;">
                  <div><a-checkbox style="margin-left: .5rem;" :checked="checked2_2" @change="onChange2_2"></a-checkbox></div>
                  <div style="cursor: pointer;margin-left: .5rem;width: 109px;height: 31px;background: #2781B4;border-radius: 5px;text-align: center;line-height: 31px;font-size: 18px;">
                    导出dwg
                  </div>
                  <div style="margin-left: .5rem;">
                      <a-input v-model="dwgName" style="width: 141px;margin-left: .2rem;height: 31px;" placeholder="填写文件名称" />
                  </div>
              </div> -->
              <!-- <div style="display: flex;margin-top: .5rem;">
                  <div><a-checkbox style="margin-left: .5rem;" :checked="checked2_3" @change="onChange2_3"></a-checkbox></div>
                  <div style="cursor: pointer;margin-left: .5rem;width: 109px;height: 31px;background: #2781B4;border-radius: 5px;text-align: center;line-height: 31px;font-size: 18px;">
                    导出mdb
                  </div>
                  <div style="margin-left: .5rem;">
                       <a-input v-model="mdbName" style="width: 141px;margin-left: .2rem;height: 31px;" placeholder="填写文件名称" />
                  </div>
              </div> -->
              <div style="display: flex;margin-top: .5rem;">
                  <div><a-checkbox style="margin-left: .5rem;" :checked="checked2_4" @change="onChange2_4"></a-checkbox></div>
                  <div style="cursor: pointer;margin-left: .5rem;width: 109px;height: 31px;background: #2781B4;border-radius: 5px;text-align: center;line-height: 31px;font-size: 18px;">
                    导出excel
                  </div>
                  <div style="margin-left: .7rem;width: 141px;height: 31px;background: #205187;border: 1px solid #00B7EE;border-radius: 5px;text-align: center;font-size: 18px;line-height: 31px;">
                      报告类型
                  </div>
                  <div>
                      <a-select
                        style="width: 3.7rem;margin-left: .2rem;"
                        allowClear
                        placeholder="请选择类型"
                        optionFilterProp = "children"
                        v-model="excelType"
                        :getPopupContainer= "(target) => target.parentNode">
                        <a-select-option v-for="(role,roleindex) in excelTypeArr" :key="roleindex.toString()" :value="role.value">
                        {{ role.title }}
                        </a-select-option>
                    </a-select>
                  </div>
              </div>
          </div>
      </div>
      <div>
          <div @click="exportCad" style="cursor: pointer;width: 79px;height: 31px;background: #2781B4;border-radius: 5px;text-align: center;line-height: 31px;margin-left: 50%;">
              导出
          </div>
      </div>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import { apiNames } from '../Utils/config'
import { stGPMdbserver, stGPCadserver } from './mapApi.js'
import {notification, message} from 'ant-design-vue'
export default {
    data() {
        return {
            zhCN,
            chengguoArr: [
                {
                    name: '排水管',
                    id: 'ps_pipe',
                    selected: false
                },
                {
                    name: '检查井',
                    id: 'ps_manhole',
                    selected: false
                },
                 {
                    name: '雨水口',
                    id: 'ps_comb',
                    selected: false
                },
                 {
                    name: '排水口',
                    id: 'ps_outfall',
                    selected: false
                }
            ],
            checked1: false,
            checked2: false,
            checked2_1: false,
            checked2_2: false,
            checked2_3: false,
            checked2_4: false,
            placeholder: '',
            xmfw: [],
            defaultValue: [],
            roadArr: [],
            allRoadids: [],
            selectedroadName: '',
            dwgName: '',
            mdbName: '',
            selectedXm: '',
            xmArr: [],
            selectedGc: '',
            gcArr: [],
            allArr: {},
            categoryArr: [
                {
                    title: '雨水',
                    value: 1
                },
                {
                    title: '污水',
                    value: 2
                },
                {
                    title: '合流',
                    value: 3
                }
            ],
            category: 1,
            excelTypeArr: [
                {
                    title: '缺陷信息表',
                    value: 1
                },
                {
                    title: '管段状况表',
                    value: 2
                },
                {
                    title: '管段信息表',
                    value: 3
                }
            ],
            excelType: 1,
            xmNameArr: [],
            gcNameArr: []
        }
    },
    watch: {
        checked2 (newVal, oldVal) {
            if (newVal == true) {
                this.checked2_1 = true
                this.checked2_2 = true
                this.checked2_3 = true
                this.checked2_4 = true
            } else {
                this.checked2_1 = false
                this.checked2_2 = false
                this.checked2_3 = false
                this.checked2_4 = false
            }
        },
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
            this.selectedXm = one.id
            // this.searchForm.districtId = one.district_id
            // this.searchForm.districtName = one.district_name
            this.placeholder = one.district_name
            this.queryBydistrictId(one.district_id)
            this.getGcByProid(one.id)
        },
        getXMname () {
            this.$get(apiNames['获取项目名称']).then(res => {
                if (res.code == 200 && res.result.length !== 0) {
                    this.xmNameArr = res.result
                    this.selectedXm = res.result[0].id
                    // this.searchForm.districtId = res.result[0].district_id
                    // this.searchForm.districtName = res.result[0].district_name
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
        closePopShow () {
            this.$emit('close')
        },
        exportCad () {
            // this.xiazaiFile('exportmdb0512', 'mdb')
            if (!this.checked2_1 && !this.checked2_2 && !this.checked2_3 && !this.checked2_4) {
                notification.success({ message: '系统提示', description: '请选择导出类型'})
            }
            // if (this.selectedroadName == '') {
            //     notification.success({ message: '系统提示', description: '请选择道路'})
            // } else {
                let idArr = []
                this.chengguoArr.forEach((item) => {
                    if (item.selected) {
                        idArr.push(item.id)
                    }
                })
                if (this.checked2_1) {
                    // this.exportWord()
                    this.exportWordXiamen()
                }
                if (this.checked2_4) {
                    // this.exportExcel()
                    this.exportExcelXiamen()
                }
                if (this.checked2_2) {
                    stGPCadserver(this.selectedroadName, idArr, this.dwgName, () => {
                        this.xiazaiFile(this.dwgName, 'dwg', 'DWG')
                    })
                }
                if (this.checked2_3) {
                    this.exportMDB()
                    // stGPMdbserver(this.selectedroadName, idArr, this.mdbName, () => {
                    //     this.xiazaiFile(this.mdbName, 'mdb', 'mdb')
                    // })
                }
            // }
        },
        exportMDB () {
            if (this.selectedroadName == '') {
                notification.success({ message: '系统提示', description: '请选择道路'})
            } else {
                let param = {
                    locationcode : this.selectedroadName
                }
                const hide = message.loading({ content: '正在导出...', duration: 0 });
                this.$getWenjian(apiNames['导出mdb'], param).then(res => {
                    hide()
                    let blob = new Blob([res]);
                　　let a = document.createElement('a');
                　　a.href = URL.createObjectURL(blob);
                　　a.target = '_blank';
                　　a.download = (this.mdbName + `.mdb`);
                　　document.body.appendChild(a);
                　　a.click();
                　　document.body.removeChild(a);
                })
            }
        },
        exportExcel () {
            if (this.selectedGc == '' || this.selectedroadName == '' || this.selectedXm == '') {
                notification.success({ message: '系统提示', description: '暂无报告可以导出'})
            } else {
                let fileName1 = this.gcNameArr.filter((item) => {
                    return item.value == this.selectedGc
                })[0].gcName
                // let fileName2 = this.roadArr.filter((item) => {
                //     return item.value == this.selectedroadName
                // })[0].title
                let param = {
                    gcid: this.selectedGc,
                    fileName: fileName1
                }
                const hide = message.loading({ content: '正在导出...', duration: 0 });
                this.$getWenjian(apiNames['成果报告导出excel'], param).then(res => {
                    hide()
                    let blob = new Blob([res]);
                　　let a = document.createElement('a');
                　　a.href = URL.createObjectURL(blob);
                　　a.target = '_blank';
                　　a.download = (`${fileName1}` + `.xlsx`);
                　　document.body.appendChild(a);
                　　a.click();
                　　document.body.removeChild(a);
                })
            }
        },
        exportExcelXiamen () {
            if (this.selectedGc == '' || this.selectedroadName == '' || this.selectedXm == '') {
                notification.success({ message: '系统提示', description: '暂无报告可以导出'})
            } else {
                let fileName1 = this.gcNameArr.filter((item) => {
                    return item.gcid == this.selectedGc
                })[0].gcName
                // let fileName2 = this.roadArr.filter((item) => {
                //     return item.value == this.selectedroadName
                // })[0].title
                let param = {
                    gcid: this.selectedGc,
                    fileName: fileName1,
                    locationcode: this.selectedroadName
                }
                let apiName = null
                if (this.excelType == 1) {
                    apiName = apiNames['厦门报告导出excel']
                } else if (this.excelType == 2) {
                    apiName = apiNames['厦门管道状况导出excel']
                } else {
                    apiName = apiNames['成果报告导出excel']
                }
                console.log(this.selectedroadName)
                const hide = message.loading({ content: '正在导出...', duration: 0 });
                this.$getWenjian(apiName, param).then(res => {
                    hide()
                    let blob = new Blob([res]);
                　　let a = document.createElement('a');
                　　a.href = URL.createObjectURL(blob);
                　　a.target = '_blank';
                　　a.download = (`${fileName1}` + `.xlsx`);
                　　document.body.appendChild(a);
                　　a.click();
                　　document.body.removeChild(a);
                })
            }
        },
        exportWord () {
            if (this.selectedGc == '' || this.selectedroadName == '' || this.selectedXm == '') {
                notification.success({ message: '系统提示', description: '暂无报告可以导出'})
            } else {
                let fileName1 = this.xmNameArr.filter((item) => {
                    return item.id == this.selectedXm
                })[0].title
                let fileName2 = this.roadArr.filter((item) => {
                    return item.value == this.selectedroadName
                })[0].title
                let param = {
                    gcid: this.selectedGc,
                    fileName: `${fileName1}-${fileName2}`,
                    locationcode: this.selectedroadName
                }
                const hide = message.loading({ content: '正在导出...', duration: 0 });
                this.$get(apiNames['成果报告导出word'], param).then(res => {
                    let param = {
                        filePathName: res.result
                    }
                    console.log(param)
                    if (res.code == 500) {
                        hide()
                        notification.success({ message: '系统提示', description: res.message})
                    } else {
                        this.$getWenjian(apiNames['成果报告下载word'], param).then(res => {
                            hide()
                            let blob = new Blob([res]);
                        　　let a = document.createElement('a');
                        　　a.href = URL.createObjectURL(blob);
                        　　a.target = '_blank';
                        　　a.download = (`${param.filePathName}` + `.doc`);
                        　　document.body.appendChild(a);
                        　　a.click();
                        　　document.body.removeChild(a);
                        })
                    }
                })
            }
        },
        exportWordXiamen () {
            if (this.selectedGc == '' || this.selectedroadName == '' || this.selectedXm == '') {
                notification.success({ message: '系统提示', description: '暂无报告可以导出'})
            } else {
                let fileName1 = this.xmNameArr.filter((item) => {
                    return item.id == this.selectedXm
                })[0].xmmc
                let fileName2 = this.roadArr.filter((item) => {
                    return item.value == this.selectedroadName
                })[0].title
                let param = {
                    gcid: this.selectedGc,
                    fileName: `${fileName1}-${fileName2}`,
                    locationcode: this.selectedroadName,
                    category: this.category
                }
                const hide = message.loading({ content: '正在导出...', duration: 0 });
                this.$get(apiNames['厦门报告导出word'], param).then(res => {
                    let param = {
                        filePathName: res.result
                    }
                    console.log(param)
                    if (res.code == 500) {
                        hide()
                        notification.success({ message: '系统提示', description: res.message})
                    } else {
                        this.$getWenjian(apiNames['成果报告下载word'], param).then(res => {
                            hide()
                            let blob = new Blob([res]);
                        　　let a = document.createElement('a');
                        　　a.href = URL.createObjectURL(blob);
                        　　a.target = '_blank';
                        　　a.download = (`${param.filePathName}` + `.doc`);
                        　　document.body.appendChild(a);
                        　　a.click();
                        　　document.body.removeChild(a);
                        })
                    }
                })
            }
        },
        // xiazaiWord (filePathNameStr) {
        //     let param = {
        //         filePathName: filePathNameStr
        //     }
        //     this.$getWenjian(apiNames['成果报告下载word'], param).then(res => {
        //         let blob = new Blob([res]);
        //     　　let a = document.createElement('a');
        //     　　a.href = URL.createObjectURL(blob);
        //     　　a.target = '_blank';
        //     　　a.download = (`${filePathNameStr}` + `.doc`);
        //     　　document.body.appendChild(a);
        //     　　a.click();
        //     　　document.body.removeChild(a);
        //     })
        // },
        xiazaiFile (fileName, fileType, UpCase) {
            if (fileName == '') {
                notification.success({ message: '系统提示', description: '请输入文件名称'})
            } else {
                // setTimeout(() => {
                    let formData = new FormData();
                    formData.fileName = `${fileName}.${UpCase}`
                    formData.fileType = fileType
                    this.$getWenjian(apiNames['导出文件'], formData).then(res => {
                        let blob = new Blob([res]);
                    
                    　　let a = document.createElement('a');
                    　　a.href = URL.createObjectURL(blob);
                    　　a.target = '_blank';
                    　　a.download = (fileName + `.${fileType}`);
                    　　document.body.appendChild(a);
                    　　a.click();
                    　　document.body.removeChild(a);
                    })
                // }, 20000)
            }
            
        },
        onChange1 (e) {
            console.log(`checked = ${e.target.checked}`);
            this.checked1 = e.target.checked
            if (e.target.checked) {
                this.chengguoArr.map((item) => {item.selected = true})
            } else {
                this.chengguoArr.map((item) => {item.selected = false})
            }
        },
        onChange2 (e) {
            console.log(`checked = ${e.target.checked}`);
            this.checked2 = e.target.checked
        },
        onChange2_1 (e) {
            console.log(`checked = ${e.target.checked}`);
            this.checked2_1 = e.target.checked
        },
        onChange2_2 (e) {
            console.log(`checked = ${e.target.checked}`);
            this.checked2_2 = e.target.checked
        },
        onChange2_3 (e) {
            console.log(`checked = ${e.target.checked}`);
            this.checked2_3 = e.target.checked
        },
        onChange2_4 (e) {
            console.log(`checked = ${e.target.checked}`);
            this.checked2_4 = e.target.checked
        },
        choose (item,index) {
            item.selected = !item.selected
            let bol = this.chengguoArr.every((item) => { return item.selected == true})
            if (bol) {
                this.checked1 = true
            } else {
                this.checked1 = false
            }
        },
        // querywordInfo (districtidStr) {
        //     this.$get(apiNames['成果查询'], {districtid: districtidStr}).then(res => {
        //         console.log(res)
        //         this.xmNameArr = []
        //         let obj = res.result
        //         this.allArr = obj
        //         if (obj) {
        //             for (const key in obj) {
        //                 console.log(key)
        //                 this.xmNameArr.push({
        //                     title: obj[key][0].pxmmc,
        //                     value: key
        //                 })
        //             }
        //             console.log(this.xmArr)
        //         }
        //     })
        // },
        async onChange(value, selectedOptions) {
            let districtIdStr = value.join(',')
            // this.querywordInfo(districtIdStr)
            this.queryBydistrictId(districtIdStr)
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
        queryBydistrictId (disId) {
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
    },
    mounted () {
        this.getXMname()
        // let allDictItems = JSON.parse(window.localStorage.getItem('allDictItems'))
        // let disid = allDictItems.DomainSwitching.filter((item) => {return item.text == 'district_id'})[0].description
        // this.placeholder = allDictItems.DomainSwitching.filter((item) => {return item.text == 'district_name'})[0].description
        // this.queryBydistrictId(disid)
        // this.querywordInfo(disid)
        this.getProvinceInfo()
    },
}
</script>
<style scoped lang='scss'>
.charts {
    width: 1082px;
    height: 15rem;
    background: rgba(0, 20, 60, .8);
    border: 1px solid #043870;
    border-radius: 5px;
    .chengguo {
        width: 2.8rem;
        height: 1rem;
        background-image: url('../assets/imgs/zhihuipaishui/map/buguizei.png');
        background-size: 100% 100%;
        line-height: 1rem;
        text-indent: .3rem;
        font-size: .44rem;
        margin-top: .74rem;
    }
    .closeButton {
        position: absolute;
        right: .5rem;
        top: .3rem;
        width: .5rem;
        height: .5rem;
        text-align: center;
        border-radius: .25rem;
        cursor: pointer;
    }
    .closeButton:hover {
        background: gray;
    }
}
</style>