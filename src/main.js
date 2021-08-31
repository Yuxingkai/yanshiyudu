import Vue from "vue";
import App from "./App.vue";
import VueBus from 'vue-bus'

import router from './router'
import './Utils/layout'
import './assets/css/modify.css'
import 'element-ui/lib/theme-chalk/index.css';
import InfiniteLoading from 'vue-infinite-loading'
import uiKit from './components/uikits/Index'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/css/public.scss'

import ElementUI from 'element-ui';
import VueCookies from 'vue-cookie'
import EventBus from './Utils/EventBus'
import store from './Store/index.js'
import thostication from './components/uikits/thost'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入swiper样式
import './assets/css/swiper.min.css'
import { HappyScroll } from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'

// video player
import VueVideoPlayer from 'vue-video-player'
import 'videojs-contrib-hls'
import 'video.js/dist/video-js.css'

import animate from 'animate.css'

// import 'ol/ol.css';

import moment from 'moment';
import 'moment/locale/zh-cn'
moment.locale('zh-cn');

Vue.use(animate)
Vue.use(HappyScroll)
// import moment from 'moment'
//导出excel
// import  excelExport from './exportTable/index'
import newexport from './export'
Vue.use(InfiniteLoading, { /* 配置 */ })
// import mock from "../mock/index";
// Vue.use(mock)
Vue.use(VueCookies)
// 通用组件
Vue.use(Antd)
Vue.use(uiKit.checkList)
Vue.use(newexport.newexport)//excel导出
Vue.use(uiKit.echartComp)
Vue.use(uiKit.uBox2)
Vue.use(uiKit.uBox3)
Vue.use(uiKit.uBox4)
Vue.use(uiKit.uBox5)
Vue.use(uiKit.uBox6)
Vue.use(uiKit.uTab)
Vue.use(uiKit.uTabItem)
Vue.use(uiKit.playerComp)
Vue.use(uiKit.loadingComp)
Vue.use(uiKit.uElmentDialog)
Vue.use(thostication.thost)
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper /* { default global options } */)
require('videojs-flash/dist/videojs-flash.js')

Vue.use(
  VueVideoPlayer
  /* {
  options: global default options,
  events: global videojs events
} */
)

if (window) {
  window.$eventBus = EventBus
}

Vue.use(VueBus)

Vue.config.productionTip = false;
// 挂载封装的post到原型上
import {post,get,put,Delete, getWenjian, getTeshu} from './Utils/https'

// Vue.prototype.$excelExport = excelExport

Vue.prototype.$post=post
Vue.prototype.$get=get
Vue.prototype.$put=put
Vue.prototype.$delete=Delete
Vue.prototype.$getWenjian = getWenjian
Vue.prototype.$getTeshu = getTeshu
// Vue.prototype.$momnent = moment


// 年+月+日  + ' ' + h + ':' + m + ':' + s
Vue.prototype.formatDates = function (inputTime) {
  if (!inputTime && typeof inputTime !== 'number') {
    return ''
  }
  let localTime = ''
  inputTime = new Date(inputTime).getTime()
  let offset = (new Date()).getTimezoneOffset()
  localTime = (new Date(inputTime - offset * 60000)).toISOString()
  localTime = localTime.substr(0, localTime.lastIndexOf('.'))
  localTime = localTime.replace('T', ' ')
  return localTime
}
//时间处理
Vue.prototype.formatDates = function (inputTime) {
  if (!inputTime && typeof inputTime !== 'number') {
    return ''
  }
  let localTime = ''
  inputTime = new Date(inputTime).getTime()
  let offset = (new Date()).getTimezoneOffset()
  localTime = (new Date(inputTime - offset * 60000)).toISOString()
  localTime = localTime.substr(0, localTime.lastIndexOf('.'))
  localTime = localTime.replace('T', ' ')
  return localTime
}



Vue.directive('drag-modal', (el, bindings, vnode) => {
  Vue.nextTick(() => {
    let { visible, destroyOnClose } = vnode.componentInstance
    // 防止未定义 destroyOnClose 关闭弹窗时dom未被销毁，指令被重复调用
    if (!visible) return
    let modal = el.getElementsByClassName('ant-modal')[0]
    let header = el.getElementsByClassName('ant-modal-header')[0]
    let left = 0
    let top = 0

    // 未定义 destroyOnClose 时，dom未被销毁，关闭弹窗再次打开，弹窗会停留在上一次拖动的位置
    if (!destroyOnClose) {  
      left = modal.left || 0
      top = modal.top || 0
    }
    // top 初始值为 offsetTop
    top = top || modal.offsetTop
    header.onmousedown = e => {
      let startX = e.clientX;
      let startY = e.clientY;
      header.left = header.offsetLeft;
      header.top = header.offsetTop;
      el.onmousemove = event => {
        let endX = event.clientX;
        let endY = event.clientY;
        modal.left = header.left + (endX - startX) + left;
        modal.top = header.top + (endY - startY) + top;
        modal.style.left = modal.left + 'px'
        modal.style.top = modal.top + 'px'
      }
      el.onmouseup = event => {
        left = modal.left
        top = modal.top
        el.onmousemove = null;
        el.onmouseup = null; 
        header.releaseCapture && header.releaseCapture();
      }
      header.setCapture && header.setCapture();
    }  
  })
})

//一甲时间处理
Vue.prototype.formatDate = function (date,fmt) {
    date = new Date(date);
    if (typeof (fmt) === "undefined") {
    fmt = "yyyy-MM-dd HH:mm:ss";
    }
    if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
    'Y': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
    }
    for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length));
    }
    }
    return fmt
}
// 掩码身份证号码
Vue.prototype.maskCredentialNo = function (credentialNo) {
  return credentialNo.substr(0, 3) + '***********' + credentialNo.substr(14, 4)
}
// 掩码手机号吗
Vue.prototype.maskPhoneNo = function (phoneNo) {
  return phoneNo.substr(0, 3) + '****' + phoneNo.substr(7, 4)
}
// 掩码人名
Vue.prototype.maskPeopleName = function (peopleName) {
  return (
    peopleName.substr(0, 1) + '*' + peopleName.substr(2, peopleName.length - 2)
  )
}
// 判断是否输入4位数字
Vue.prototype.computNum = function (val) {
  let num4 = /^\d{4,}$/
  return !(!num4.test(val) && val !== '')
}
// 输入中文
Vue.prototype.chinese = function (val) {
  let num4 = /^[\u4e00-\u9fa5]{0,}$/
  return !(!num4.test(val) && val !== '')
}
// 输入手机号
Vue.prototype.checkPhone = function (val) {
  let num = /^1(3|4|5|6|7|8|9)\d{9}$/
  return !(!num.test(val) && val !== '')
}
// 输入证件号码
Vue.prototype.idNum = function (val) {
  let num = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return !(!num.test(val) && val !== '')
}
// 验证身份证
// Vue.prototype.cridient = function (val) {
//   let num4 = /^*\d + \d|X|x + $/
//   if (!num4.test(val)) {
//     return false
//   } else {
//     if (val.length > 0 && val.length < 4) {
//       return false
//     } else {
//       return true
//     }
//   }
// }
// 计算年龄
Vue.prototype.computAge = function (birthday) {
  try {
    return parseInt(
      (new Date() - new Date(birthday)) / (1000 * 60 * 60 * 24 * 365)
    )
  } catch (error) {
    return 0
  }
}
Vue.prototype.computdifTime = function (intime, outtime) {
  var startTime // 开始时间
  var endTime // 结束时间
  if (intime === 0 || intime === null) {
    startTime = new Date()
  } else {
    startTime = new Date(intime)
  }
  if (outtime === 0 || outtime === null) {
    endTime = new Date()
  } else {
    endTime = new Date(outtime)
  }
  // let endTime = new Date(outtime) || new Date()
  let usedTime = endTime - startTime // 相差的毫秒数
  let days = Math.floor(usedTime / (24 * 3600 * 1000)) // 计算出天数
  let leavel = usedTime % (24 * 3600 * 1000) // 计算天数后剩余的时间
  let hours = Math.floor(leavel / (3600 * 1000)) // 计算剩余的小时数
  let leavel2 = leavel % (3600 * 1000) // 计算剩余小时后剩余的毫秒数
  let minutes = Math.floor(leavel2 / (60 * 1000)) // 计算剩余的分钟数
  return days + '天' + hours + '时' + minutes + '分'
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
