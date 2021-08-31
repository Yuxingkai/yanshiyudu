<template>
  <div>
    <!-- input输入框 -->
    <a-col :span='24' v-if='options.type === "inputLeft"' class="checkedLine">
      <a-row :gutter='15'>
        <a-col :span='6'>
          <div style="text-align: right;font-size: .32rem">
            {{options.name}}
          </div>
        </a-col>
        <a-col :span='18' style="margin-top:-5px;">
          <a-input placeholder="" style="width:90%;" @change="changeInput" v-model="inputValue" />
          <p class="titletip">提示：位置字符可用“?”或“*”代替，如“京A37??09”或“京45”；“-”代表车牌模糊</p>
        </a-col>
      </a-row>
    </a-col>
    <!-- 左侧带颜色多选框 -->
    <a-col :span='24' v-if='options.type === "colorLeft"' class="checkedLine">
      <a-row :gutter='15'>
        <a-col :span='6'>
          <div style="text-align: right;line-height: 36px;font-size: .3rem">
            {{options.name}}
          </div>
        </a-col>
        <a-col :span='18' style="margin-top:-10px;">
          <a-checkbox @change="onCheckAllChange" :checked="checkAll" :indeterminate="indeterminate">全选</a-checkbox>
          <div v-for="spanItem in options.data" :key="spanItem.lebel" @click="spanItemClick(spanItem)" :class="spanItem.isSelect ? 'active' : '' " class="spanItemLeft"> <span :style="{ backgroundColor: spanItem.color}"></span><span style="font-size: .28rem">{{spanItem.label}}</span></div>
        </a-col>
      </a-row>
    </a-col>
    <!-- 左侧选择框 -->
    <a-col :span='24' v-if='options.type === "left"' class="checkedLine">
      <a-row :gutter='15'>
        <a-col :span='6'>
          <div style="text-align: right;font-size: .32rem">
            {{options.name}}
          </div>
        </a-col>
        <a-col :span='18'>
          <a-row>
            <a-col :span='1' style="width:70px !important;">
              <a-checkbox @change="onCheckAllChange" :checked="checkAll" :indeterminate="indeterminate">全部</a-checkbox>
            </a-col>
            <a-col :span='22' style="width:calc(100% - 80px);">
              <a-checkbox-group :options="options.data" v-model="checkedList" @change="onChange" />
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-col>
    <!-- 常规多选框 -->
    <a-col :span='24' v-if='options.type === "default"' class="checkedLine">
      <a-row :gutter='15'>
        <a-col :span='2'>
          <div style="text-align: right;">
            {{options.name}}
          </div>
        </a-col>
        <a-col :span='22'>
          <a-row>
            <a-col :span='1' style="width:70px !important;">
              <a-checkbox @change="onCheckAllChange" :checked="checkAll" :indeterminate="indeterminate">全部</a-checkbox>
            </a-col>
            <a-col :span='22' style="width:calc(100% - 80px);">
              <a-checkbox-group :options="options.data" v-model="checkedList" @change="onChange" />
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-col>
    <!-- 带颜色多选框 -->
    <a-col :span='24' v-if='options.type === "color"' class="checkedLine">
      <a-row :gutter='15'>
        <a-col :span='2'>
          <div style="text-align: right;line-height: 36px;">
            {{options.name}}
          </div>
        </a-col>
        <a-col :span='22' style="margin-top:-10px;">
          <a-checkbox @change="onCheckAllChange" :checked="checkAll" :indeterminate="indeterminate">全选</a-checkbox>
          <div v-for="spanItem in options.data" :key="spanItem.lebel" @click="spanItemClick(spanItem)" :class="spanItem.isSelect ? 'active' : '' " class="spanItem"> <span :style="{ backgroundColor: spanItem.color}"></span><span>{{spanItem.label}}</span></div>
        </a-col>
      </a-row>
    </a-col>
    <!-- 车辆品牌 级联选择框 -->
    <!-- <a-col :span='24' v-if='options.type === "cascader"' class="checkedLine">
      <a-row :gutter='15'>
        <a-col :span='2'>
          <div style="text-align: right;">
            {{options.name}}
          </div>
        </a-col>
        <a-col :span='22'>
          <a-row :gutter='20'>
            <a-col :span='6'>
              <a-tree-select style="width: 380px;margin-top:-10px;" :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }" :treeData="treeData" placeholder='请选择车辆品牌,可多选' allowClear multiple v-model="inputValue" @change="onChangeCar">
              </a-tree-select>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-col> -->
    <!-- 车辆品牌 级联选择框 -->
    <a-col :span='24' v-if='options.type === "cascader"' class="checkedLine">
      <a-row :gutter='15'>
        <a-col :span='2'>
          <div style="text-align: right;">
            {{options.name}}
          </div>
        </a-col>
        <a-col :span='22'>
          <a-row :gutter='20'>
            <a-col :span='6'>
              <a-tree-select style="width: 380px;margin-top:-10px;" :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }" :treeData="treeDataSelect" placeholder='请选择车辆品牌,可多选' allowClear v-model="inputValue1" @change="onChangeCar" :loadData="onLoadData" @search="onSearch" showSearch @select="onSelect" multiple>
              </a-tree-select>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-col>
    <!-- input输入框 -->
    <a-col :span='24' v-if='options.type === "input"' class="checkedLine">
      <a-row :gutter='15'>
        <a-col :span='2'>
          <div style="text-align: right;">
            {{options.name}}
          </div>
        </a-col>
        <a-col :span='22' style="margin-top:-5px;">
          <a-input placeholder="" style="width:30%;" @change="changeInput" v-model="inputValue" />
          <p class="titletip">提示：位置字符可用"?”或"*”代替，如"京A37??09”或"京45”；"-”代表车牌模糊</p>
        </a-col>
      </a-row>
    </a-col>
  </div>
</template>
<script>
// import jsonData from '../../assets/user_brand_attribute.json'
import jjjj from '../../assets/brandJson.json'
// let jjjj = require('../../assets/brandJson.json')
const uuidv1 = require('uuid/v1')
var _ = require('lodash')
export default {
  name: 'checkItem',
  data () {
    return {
      queryBrand: [],
      queryYear: [],
      inputValue: null,
      inputValue1: null,
      checkAll: false,
      value: '',
      checkedList: [],
      allData: [],
      treeData: [],
      indeterminate: false,
      compaereData: [],
      treeDataSelect: [],
      cascader: [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [{
            value: 'xihu',
            label: 'West Lake'
          }]
        }]
      }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
          value: 'nanjing',
          label: 'Nanjing',
          children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }]
        }]
      }]
      // indeterminate: true,
    }
  },
  props: {
    options: {
      type: [Object, Array, Number, String],
      default: ''
    }
  },
  mounted () {
    if (this.options.type === 'cascader') {
      this.treeData = jjjj.data
      this.getTreeSelect()
      // 进行对数据处理
      /** -- - - - - - - - - - - - - - - - - - - - */

      /** -- - - - - - - - - - - - - - - - - - - - */
      // console.log(jjjj.data)
      // let nowData = jsonData.brand
      // var arrs = []
      // for (let d in nowData) {
      //   arrs.push(nowData[d])
      // }
      // for (let i = 0; i < arrs.length; i++) {
      //   arrs[i].title = arrs[i].name.chs
      //   arrs[i].value = arrs[i].name.chs + '&&' + uuidv1()
      //   arrs[i].key = uuidv1()
      //   arrs[i].children = arrs[i].subbrand
      // }
      // arrs.map(item => {
      //   return {
      //     title: item.name.chs,
      //     value: item.name.chs + '&&' + uuidv1(),
      //     d: item.subbrand
      //   }
      // })

      // for (let i = 0; i < arrs.length; i++) {
      //   arrs[i].children = []
      //   for (let j in arrs[i].subbrand) {
      //     arrs[i].children.push(arrs[i].subbrand[j])
      //   }
      // }
      // // console.log(arrs)
      // var KK = []
      // arrs.map(item => {
      //   KK.push({
      //     title: item.title,
      //     value: item.value,
      //     key: uuidv1(),
      //     children: item.children
      //   })
      // })
      // for (let i = 0; i < KK.length; i++) {
      //   KK[i].children.map(item => {
      //     item.title = item.name.chs
      //     item.value = KK[i].title + '&&' + item.name.chs + '&&' + uuidv1()
      //     item.key = uuidv1()
      //     item.children = []
      //     for (let j in item.year) {
      //       item.children.push({
      //         title: item.year[j].name.chs,
      //         value: KK[i].title + '&&' + item.name.chs + '&&' + item.year[j].name.chs + '&&' + uuidv1(),
      //         key: uuidv1()
      //       })
      //     }
      //   })
      // }
      // // uuidv1()
      // console.log(JSON.stringify(KK))
    }
    /** */
    if (this.options.data) {
      this.allData = this.options.data.map(item => {
        return item.value
      })
    }
    this.$bus.on('clearChecked', e => {
      this.checkedList = []
      this.checkAll = false
      this.indeterminate = false
      this.inputValue1 = null
      this.inputValue = null
      console.log(this.options, 'qingkongddshihou')
      if (this.options.type === 'color' || this.options.type === 'colorLeft') {
        this.options.data.map(item => {
          item.isSelect = false
        })
      }
    })
    // 当点击清空搜索时候 清空数据
    // this.$bus.emit('conditionsChange', { type: this.options.ziduan, name: this.options.name, checkedList: [] })
  },
  methods: {

    onSearch () {
      console.log(...arguments)
    },
    onSelect () {
      console.log('a', ...arguments)
    },
    // searchValue (val) {
    //   console.log(val)
    // },
    // 树形动态加载选择
    onLoadData (treeNode) {
      // console.log(treeNode)
      // console.log('当前第几个', treeNode.eventKey)
      return new Promise(async (resolve) => {
        if (treeNode.dataRef.children) {
          resolve()
          // return
        }
        if (treeNode.dataRef.leave === 1) {
          let params = {
            valueFactory: treeNode.dataRef.valueFactory
          }
          const data = await this.$api.user.queryBrand(params)
          this.queryBrand = data.data
          treeNode.dataRef.children = this.queryBrand.map(item => {
            return {
              title: item.nameChs,
              value: treeNode.dataRef.value.split('&&')[0] + '_' + item.value + '&&' + uuidv1(),
              type: item.type,
              valueFactory: item.valueFactory,
              leave: 2,
              labelName: treeNode.dataRef.title + '_' + item.nameChs,
              key: uuidv1(),
              valueBrand: item.valueBrand,
              children: []
            }
          })
          this.treeData = [...this.treeData]
          resolve()
        }
        if (treeNode.dataRef.leave === 2) {
          let params = {
            valueFactory: treeNode.dataRef.valueFactory,
            valueBrand: treeNode.dataRef.valueBrand
          }
          const data = await this.$api.user.queryYear(params)
          this.queryYear = data.data
          treeNode.dataRef.children = this.queryYear.map(item => {
            return {
              title: item.nameChs,
              value: treeNode.dataRef.value.split('&&')[0] + '_' + item.value + '&&' + uuidv1(),
              type: item.type,
              valueFactory: item.valueFactory,
              labelName: treeNode.dataRef.title + '_' + item.nameChs,
              leave: 3,
              key: uuidv1(),
              valueBrand: item.valueBrand
              // children: []
            }
          })
          // console.log('二级数据', treeNode.dataRef.children)
          this.treeData = [...this.treeData]
          resolve()
        }
        if (treeNode.dataRef.leave === 3) {
          treeNode.dataRef.children = []
          this.treeData = [...this.treeData]
          resolve()
        }
        this.compaereData = _.cloneDeep(this.treeDataSelect)
      })
    },
    // 获取车辆品牌
    async queryBrands (params) {
      const data = await this.$api.user.queryBrand(params)
      this.queryBrand = data.data
      // console.log(this.queryBrand)
    },
    // treeSelect初始值
    async getTreeSelect () {
      const data = await this.$api.user.queryFactory()
      // console.log('第一层数据', data)
      // this.treeDataSelect = data.data
      this.treeDataSelect = data.data.map(item => {
        return {
          title: item.nameChs,
          value: item.value + '&&' + uuidv1(),
          type: item.type,
          valueFactory: item.valueFactory,
          leave: 1,
          key: uuidv1(),
          valueBrand: item.valueBrand,
          children: []
        }
      })
      // console.log(this.treeDataSelect)
    },
    onChangeCar (value, label, extra) {
      console.log('车辆内容', value)
      this.checkedList = []
      for (let i = 0; i < value.length; i++) {
        this.checkedList.push({
          label: label[i],
          value: value[i].split('&&')[0].split('_').length === 3 ? value[i].split('&&')[0] : (value[i].split('&&')[0] + '_')
        })
      }
    },
    // 输入框
    changeInput () {
      if (this.inputValue && this.inputValue !== null && this.inputValue !== '') {
        this.checkedList = [{
          label: this.inputValue,
          value: this.inputValue
        }]
      } else {
        this.checkedList = []
      }
    },
    onChangeCascader (val) {
      // console.log(val)
    },
    displayRender ({ labels }) {
    },
    // 普通多选选择框改变
    onChange (checkedList) {
      this.indeterminate = !!checkedList.length && (checkedList.length < this.allData.length)
      checkedList.length === this.allData.length ? this.checkAll = true : this.checkAll = false
      this.checkedList = checkedList
    },
    spanItemClick (item) {
      item.isSelect = !item.isSelect
      this.checkedList = []
      this.options.data.map(item => {
        if (item.isSelect) {
          this.checkedList.push(item.value)
        }
      })
      this.indeterminate = !!this.checkedList.length && (this.checkedList.length < this.allData.length)
      this.checkedList.length === this.allData.length ? this.checkAll = true : this.checkAll = false
    },
    onCheckAllChange (e) {
      Object.assign(this, {
        checkedList: e.target.checked ? this.allData : [],
        indeterminate: false,
        checkAll: e.target.checked
      })
      if (this.options.type !== 'default') {
        // 全选状态
        if (e.target.checked) {
          this.options.data.map(item => {
            item.isSelect = true
          })
        } else {
          // 取消全选
          this.options.data.map(item => {
            item.isSelect = false
          })
        }
      }
    }
  },
  watch: {
    checkedList (newName, oldName) {
      if (this.options.data && newName) {
        let checkedArr = []
        let key = this.options.field;
        let value = [];
        let labels = [];
        for (let i = 0; i < newName.length; i++) {
          this.options.data.map(item => {
            if (item.value === newName[i]) {
              value.push(item.value);
              labels.push(item.label);
            }
          })
        }
        if (value.length) {
          checkedArr.push({key, value, labels})
        }
        this.$bus.emit('conditionsChange', { type: this.options.field, name: this.options.name, checkedList: checkedArr })
      } else if (newName) {
        console.log('kankan', newName)
        this.$bus.emit('conditionsChange', { type: this.options.field, name: this.options.name, checkedList: newName })
      }
    }
  }
}
</script>
<style>
  .ant-row{
    text-align: left!important;
  }
  .ant-checkbox-wrapper {
    color: white!important;
  }
  .ant-checkbox-inner {
    background: #324A94!important;
    border: none!important;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background: #48FF95!important;
  }
  .ant-checkbox-checked .ant-checkbox-inner::after {
    border: 2px solid black!important;
    border-top: 0!important;
    border-left: 0!important;
  }
  .ant-select-selection {
    background: none!important;
    border:1px solid rgba(81,168,255,1)!important;
  }
  /* .ant-input {
    background-color: rgb(27, 46, 91)!important;
    border:1px solid rgba(81,168,255,1)!important;
    color: white!important;
  } */
</style>
<style scoped>
.titletip {
  width: 518px;
  height: 25px;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  padding-top: 5px;
  color: white;
  line-height: 20px;
}
.checkedLine {
  margin-top: 20px;
  color: white;
}
.spanItem {
  width: 100px;
  /* padding:0 40px; */
  height: 36px;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 3px;
  margin-right: 10px;
  cursor: pointer;
  background: rgba(78,167,254,0.1);
  border: 1px solid rgba(81,168,255,1);
  padding: 0;
  margin-top: 10px;
  line-height: 36px;
  text-align: center;
}
.spanItem span {
  display: inline-block;
}
.spanItem span:first-child {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  /* border: 1px solid red; */
}
.spanItem span:last-child {
  margin-left: 4px;
}


.spanItemLeft {
  width: 64px;
  /* padding:0 40px; */
  height: 24.8px;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 3px;
  margin-right: 10px;
  cursor: pointer;
  background: rgba(78,167,254,0.1);
  border: 1px solid rgba(81,168,255,1);
  padding: 0;
  margin-top: 10px;
  line-height: 24.8px;
  text-align: center;
}
.spanItemLeft span {
  display: inline-block;
}
.spanItemLeft span:first-child {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  /* border: 1px solid red; */
}
.spanItemLeft span:last-child {
  margin-left: 4px;
}
.active {
  border: 1px solid rgb(13, 95, 255);
}
</style>
