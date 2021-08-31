
import echart from './echart'
import Box2 from './Box-2.vue'
import Box3 from './Box-3.vue'
import Box4 from './Box-4.vue'
import Box5 from './Box-5'
import Box6 from './Box-6'
import Tab from './Tab'
import TabItem from './TabItem'
import loading from './Loading'

import player from './player'
import checkLists from '../dialogs/checkList'

import Map from './MapContainer'
import elmentDialog from './elDialog.vue'
const echartComp = {
  install: function (Vue) {
    Vue.component('echart', echart)
  }
}
// 复选列表
const checkList = {
  install: function (Vue) {
    Vue.component('checkList', checkLists)
  }
}
const uBox2 = {
  install: function (Vue) {
    Vue.component('Box2', Box2)
  }
}
const uBox3 = {
  install: function (Vue) {
    Vue.component('Box3', Box3)
  }
}
const uBox4 = {
  install: function (Vue) {
    Vue.component('Box4', Box4)
  }
}
const uMap = {
  install: function (Vue) {
    Vue.component('Map', Map)
  }
}

const playerComp = {
  install: function (Vue) {
    Vue.component('player', player)
  }
}

const uBox5 = {
  install: function (Vue) {
    Vue.component('Box5', Box5)
  }
}
const uBox6 = {
  install: function (Vue) {
    Vue.component('Box6', Box6)
  }
}

const uTab = {
  install: function (Vue) {
    Vue.component('Tab', Tab)
  }
}

const uTabItem = {
  install: function (Vue) {
    Vue.component('TabItem', TabItem)
  }
}
const loadingComp = {
  install: function (Vue) {
    Vue.component('loading', loading)
  }
}
const uElmentDialog = {
  install: function (Vue) {
    Vue.component('elmentDialog', elmentDialog)
  }
}
export default {
  echartComp, 
  uBox2,
  uBox3,
  uBox4,
  uBox5,
  uBox6,
  uMap,
  playerComp,
  uTab,
  uTabItem,
  loadingComp,
  uElmentDialog,
  checkList
}
