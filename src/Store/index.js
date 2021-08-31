import Vue from 'vue'
import Vuex from 'vuex'
import createPresistedState from 'vuex-persistedstate'//持久化store
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isFresh: true, // 默认为true，如果路由跳转后改成false，如果强制刷新后又回到true。true代表隐藏左右两边，false代表显示左右两边
    isShowChildrenMenu: false,
    chooseAddress: [], // 频繁出入预警中选中的位置
    chooseVillageInfo: '',// 地图中选中的地区
    homeFresh: false, // 首页是否重置
    mapLevelArr: [], // 地图点击事件的等级列表
    showPage: 0, // 当前展示页，默认为空，不展示
    btnIndex: 0,//智慧检索展示页
    virtualSpaceCodes:[],// 当前选中的虚拟空间Code
    currentVirtualSpaceCode:'',//当前选中的虚拟空间Code
  },
  getters: {
    showPageNum(state) {
      return state.showPage
    },
    btnIndexNum(state) {
      return state.btnIndex
    }
  },
  mutations: {
    showPageNum(state,num) {
      state.showPage = num
    },
    btnIndexNum(state,num) {
      state.btnIndex = num
    },
    updateVirtualSpaceCodes(state,data){
      state.virtualSpaceCodes=data
    },
    updateCurrentVirtualSpaceCode(state,data){
      console.log('updateCurrentVirtualSpaceCode成功')
      state.currentVirtualSpaceCode=data
    }
  },
  plugins: [createPresistedState({

  })]
})


export default store
