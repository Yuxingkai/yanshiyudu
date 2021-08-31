/**
 * 公共方法
 */

import $ from 'jquery'
// 读取cookie
export let getCookie = function (name) {
  let arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
  if (arr != null) {
    return unescape(arr[2])
  } else {
    return null
  }
}
/*
生成guid
*/
export const guid = function () {
  let guid = ''
  for (let i = 1; i <= 29; i++) {
    let n = Math.floor(Math.random() * 16.0).toString(16)
    guid += n
  }
  return guid
}
// 设置cookie
export const setCookie = function (name, value, time) {
  let strsec = getsec(time)
  let exp = new Date()
  exp.setTime(exp.getTime() + strsec * 1)
  document.cookie =
    name + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';path=/'
}
function getsec (str) {
  let str1 = str.substring(1, str.length) * 1
  let str2 = str.substring(0, 1)
  if (str2 === 's') {
    return str1 * 1000
  } else if (str2 === 'h') {
    return str1 * 60 * 60 * 1000
  } else if (str2 === 'd') {
    return str1 * 24 * 60 * 60 * 1000
  }
}
// 删除指定名称的cookie，将其过期时间设定为一个过去的时间
export let delCookie = function (name) {
  let date = new Date()
  date.setTime(date.getTime() - 10000)
  document.cookie = name + '=a; expires=' + date.toGMTString()
}
// 获取当前月份的天数
export const getCountDays = function () {
  let curDate = new Date()
  let curMonth = curDate.getMonth()
  curDate.setMonth(curMonth + 1)
  curDate.setDate(0)
  return curDate.getDate()
}
// 获取根据分辨率返回字体
export const getFontSize = function () {
  let wid = $(window).width()
  if (wid > 6000) {
    return 30
  } else if (wid < 6000 && wid > 3000) {
    return 20
  } else if (wid < 3000 && wid > 1920) {
    return 18
  } else {
    return 14
  }
}
// 适配分辨率的echarts
export const getAdapterFont = (e) => {
  e = e || 0
  let wid = $(window).width()
  if (wid < 3000) {
    return document.body.clientWidth / 1000 * e
  } else {
    return 1920 / 1000 * e * 1.5
  }
}

// 适配分辨率的echarts
export const getEchartleft = (e) => {
  e = e || 0
  let wid = $(window).width()
  if (wid < 3000) {
    return e + '%'
  } else {
    return (e / 1.4) + '%'
  }
}

// 适配分辨率的echarts
export const getEchartpadding = (e) => {
  e = e || 0
  let wid = $(window).width()
  if (wid < 3000) {
    return e
  } else {
    return (e * 1.7)
  }
}

// 适配分辨率的echarts左右对称
export const getEchartedge = (e) => {
  e = e || 0
  let wid = $(window).width()
  if (wid < 3000) {
    return (40 * e) + 'px'
  } else {
    return (55 * e) + 'px'
  }
}

// 适配分辨率的echarts
export const getRemFont = (e) => {
  e = e || 0
  return document.body.clientWidth / 1920 * e
}
export const getEchartNumberColor = 'rgba(255,255,255, .6)'
// 整体修改echart图表XY颜色
export const echartXYColor = 'rgba(41,72,127,.6)'
// 适配分辨率的echarts
export const getAdapterHeight = (e) => {
  e = e || 0
  return document.body.clientHeight / 1000 * e
}

// 获取根据分辨率返回字体
export const getMarginNum = function () {
  let wid = $(window).width()
  if (wid > 6000) {
    return 120
  } else if (wid < 6000 && wid > 3000) {
    return 90
  } else if (wid < 3000 && wid > 1920) {
    return 48
  } else {
    return 40
  }
}

// 获取最近天数的日期
export const getDays = function (day) {
  let today = new Date()
  let targetdaymilliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day
  today.setTime(targetdaymilliseconds) // 注意，这行是关键代码
  // var tYear = today.getFullYear()
  let tMonth = today.getMonth()
  let tDate = today.getDate()
  tMonth = doHandleMonth(tMonth + 1)
  tDate = doHandleMonth(tDate)
  // return tYear + '-' + tMonth + '-' + tDate
  return tMonth + '/' + tDate
}
export const doHandleMonth = function (month) {
  let m = month
  if (month.toString().length === 1) {
    m = '0' + month
  }
  return m
}
/*
  弹出框选项 调用-- msgLayer(obj)
  var obj = {
    title:'弹出框标题',
    content:'<html>弹出框内容</html>',
    btn:['取消',‘保存’,'重置'] 支持1-3个
    callback1: function(){} 按钮1回调
    callback2: function(){} 按钮2回调
    callback3: function(){} 按钮3回调
  }
*/
export const msgLayer = function (obj) {
  $('.msg-layer-bg,.msg-layer').remove()
  $('body').append(
    '<div class="msg-layer-bg" style="z-index:99998;"></div><div class="msg-layer showAlert" style="z-index: 99999;"><h5></h5><div class="msg-con"></div><div class="layer-close">&times;</div><div class="layer-btn"><input type="button" class="layer-cancel msg-btn"/><input type="button" class="layer-commit msg-btn"/><input type="button" class="layer-reset msg-btn"/></div></div>'
  )
  let _layerBg = $('.msg-layer-bg')
  let _layer = $('.msg-layer')
  let _close = $('.layer-close')
  let _cansel = $('.layer-cancel')
  let _commit = $('.layer-commit')
  let _reset = $('.layer-reset')
  _layer.attr('data-animation', obj.type)
  let winH = $(window).height()
  let winW = $(window).width()
  if (obj.title) {
    _layer.find('h5').html(obj.title)
  } else {
    _layer.find('h5').css('display', 'none')
  }
  if (obj.content) {
    _layer.find($('.msg-con')).html(obj.content)
  } else if (obj.url) {
    $.get(obj.url, function (data) {
      _layer.find($('.msg-con')).html(data)
    })
  }
  _layer.css({
    display: 'block'
  })
  _layerBg.css({
    display: 'block'
  })
  if (!obj.close || obj.close === 'true') {
    _close.css('display', 'block')
    _close.on('click', function () {
      event.stopPropagation()
      msgClose()
    })
  } else {
    _close.css('display', 'none')
  }
  if (obj.btn) {
    if (obj.btn[0] !== '') {
      _cansel.css('display', 'inline-block')
      _cansel.val(obj.btn[0])
      _cansel.on('click', function () {
        if (obj.callBack1) {
          obj.callBack1()
          msgClose()
        } else {
          msgClose()
        }
      })
    } else {
      $('.msg-btn').css('display', 'none')
    }
    if (obj.btn[1] !== '') {
      _commit.css('display', 'inline-block')
      _commit.val(obj.btn[1])
      _commit.on('click', function () {
        if (obj.callBack2) {
          obj.callBack2()
        }
      })
    } else {
      _commit.css('display', 'none')
      _reset.css('display', 'none')
    }

    if (obj.btn[2] !== '') {
      _reset.css('display', 'inline-block')
      _reset.val(obj.btn[2])
      _reset.on('click', function () {
        if (obj.callBack3) {
          obj.callBack3()
          msgClose()
        }
      })
    } else {
      _reset.css('display', 'none')
    }
    if (obj.btn.length === 1) {
      // alert(1)
      _commit.css('display', 'none')
      _reset.css('display', 'none')
    } else if (obj.btn.length === 2) {
      _reset.css('display', 'none')
    } else {
      $('.msg-btn').css('display', 'inline-block')
    }
  }
  console.log(_layer.width())
  if (obj.area) {
    if (obj.area[0] !== 'auto' && obj.area[1] !== 'auto') {
      _layer.css({
        width: obj.area[0],
        height: obj.area[1],
        left: winW / 2 - parseFloat(obj.area[0]) / 2,
        top: winH / 2 - parseFloat(obj.area[1]) / 2
      })
    } else if (obj.area[0] !== 'auto' && obj.area[1] === 'auto') {
      _layer.css({
        width: obj.area[0],
        height: obj.area[1],
        left: winW / 2 - parseFloat(obj.area[0]) / 2,
        top: winH / 2 - (_layer.height() + 20) / 2
      })
    } else if (obj.area[0] === 'auto' && obj.area[1] !== 'auto') {
      _layer.css({
        width: _layer.width() + 20,
        height: obj.area[1],
        left: winW / 2 - (_layer.width() + 20) / 2,
        top: winH / 2 - parseFloat(obj.area[1]) / 2
      })
    }
  } else {
    _layer.css({
      width: _layer.width() + 20 + 'px',
      margin: '-' +
        (_layer.height() + 10) / 2 +
        'px 0 0 -' +
        (_layer.width() + 20) / 2 +
        'px'
    })
  }
}
/**
 * 关闭  直接调用 msgClose()
 */
export const msgClose = function () {
  let timer = null
  $('.msg-layer')
    .removeClass('showAlert')
    .addClass('hideAlert')
  timer = setTimeout(function () {
    clearTimeout(timer)
    $('.msg-layer-bg').remove()
    $('.msg-layer').remove()
  }, 400)
}

/**
 * time 开始时间 - 结束时间
 **/
export const getNowFormatDate = function (num) {
  let date = new Date(new Date().getTime() - 60 * 60 * 1000 * num)
  let seperator1 = '-'
  let seperator2 = ':'
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds()
  return currentdate
}

export const getFormatDate = function (dates) {
  let date = new Date(dates)
  let seperator1 = '-'
  let seperator2 = ':'
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  // + ' ' + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds()
  let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
  return currentdate
}


export const getFormatymdhmsDate = function (dates) {
  let date = new Date(dates)
  let seperator1 = '-'
  let seperator2 = ':'
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds()
  return currentdate
}

export const getMonthDay = function (dates) {
  let date = new Date(dates)
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  let currentdate = month + '-' + strDate
  return currentdate
}

export const removeEmptyArrayEle = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
      arr.splice(i, 1)
      i = i - 1 // i - 1 ,因为空元素在数组下标 2 位置，删除空之后，后面的元素要向前补位，
      // 这样才能真正去掉空元素,觉得这句可以删掉的连续为空试试，然后思考其中逻辑
    }
  }
  return arr
}
/**
 * 判断是否允许flash运行
 **/
export const getFlash = function (msg) {
  let flag1 = false
  if (window.ActiveXObject) {
    try {
      /* eslint-disable */
      let swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
      if (swf) {
        flag1 = true
      }
    } catch (e) {
    }
  } else {
    try {
      let swf = navigator.plugins['Shockwave Flash']
      if (swf) {
        flag1 = true
      }
    } catch (e) {
    }
  }
  if (flag1) {
    console.log('已允许flash运行')
  } else {
    msg.$message.error('请允许flash运行')
  }
}
// 整体修改echart图表XY轴标签颜色
export const getEchartColor = 'rgba(255,255,255,.8)'

export const getEchartColorNumber = 'rgba(255,255,255,.6)' // 数字的话淡一点

// 整体修改echart图表XY轴轴线颜色
export const getEchartXcolor = 'rgba(52,88,158,.5)'

// 整体修改echart图表十字准星颜色
export const getEchartStarsColor = ['#fff', '#fff']

// 整体修改echart图表XY轴颜色
export const getUnit = function (msg) {
  if (msg === 1) {
    return '次'
  } else if (msg === 2) {
    return '辆'
  } else if (msg === 3) {
    return '人'
  } else {
    return ''
  }
}

// 整体配置echart饼图和表格对象的颜色样式
export const getColor = ['#EE5F68', '#294CA3', '#CD3FEA', '#8BDC2D', '#FFCC02', '#669EFF', '#C9366E', '#9678C1', '#7E4CAB', '#5C8E59', '#ED8305', '#57AD8E', '#A49DBA', '#EEA0CF', '#AB54A1', '#1FB75F', '#CB3A00', '#1BB5BB']

// 整体配置echart饼图颜色样式
export const getPieColor = ['#00F1FE', '#0052A5', '#6287FF', '#FFBC6D', '#ACE4FF', '#996ABA']

// 整体配置echart饼图颜色样式2
export const getPieColor2 = ['#00F1FE', '#0052A5', '#6287FF', '#996ABA', '#FFBC6D']

// 整体配置echart柱状图渐变色
export const getBarColor = ['#00E9F7', '#0052A5', '#7A86FF', '#5564FF']

// 整体配置echart柱状图渐变色(双柱形)
export const getBarColor2 = ['rgba(0,193,255,1', 'rgba(0,193,255,0.13', 'rgba(23,101,255,1)', 'rgba(23,101,255,0.1)']

// 整体配置echart折线图渐变色
export const getLineColor = ['rgba(0,241,254,1)', 'rgba(0,241,254,.2)', 'rgba(0,241,254,0)', 'rgba(78,118,255,1)', 'rgba(78,118,255,.2)', 'rgba(78,118,255,0)']

// 配置echart提示框背景颜色
export const echartsTooltipBG = 'rgba(24,41,75,1)'

// 配置echart提示框背景样式
export const echartsTooltipSt = 'box-shadow: 5px 5px 10px 0 #000000;border-radius: 1px;font-size: 16px;'

export const getWeekday = (item) => {
  let weekDay = ''
  switch (item) {
    case 0:
      weekDay = '星期日'
      break
    case 1:
      weekDay = '星期一'
      break
    case 2:
      weekDay = '星期二'
      break
    case 3:
      weekDay = '星期三'
      break
    case 4:
      weekDay = '星期四'
      break
    case 5:
      weekDay = '星期五'
      break
    case 6:
      weekDay = '星期六'
      break
    default:
      weekDay = '星期'
  }
  return weekDay
}

// 万位取整
export const getWnum = (num, index) => {
  let res
  if (index === 2) {
    res = num / 10000
  } else {
    res = num / 1000
  }
  return res
}

// echarts中根据单位计算值
export const getUnitNum = function (data) {
  let unitType = 1
  if (data) {
    if (data.indexOf('万') !== -1) {
      unitType = 10000
    } else if (data.indexOf('千') !== -1) {
      unitType = 1000
    } else {
      unitType = 1
    }
    return unitType
  } else {
    return 1
  }

}

export  const  formatDate = function(date, fmt){
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