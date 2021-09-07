import { log } from 'util';
//去掉正式环境的console.log
if(process.env.NODE_ENV == 'production') {

  if(window){
  
  window.console.log =function(){};
  
    }
  
  }
//定制化部署环境build

const DEPLOYENV = {
  Default: 'Default'
}
const EX = {//照片前缀
  'Default': 'Default'
}
const Name = {
}
const mapCenterPoints = {
}
//当前的部署环境
const deployEnv = DEPLOYENV.JiaoDaoKou

export const faceUrl = EX[deployEnv] //
export const mapCenterPoint = mapCenterPoints[deployEnv]//一人一档中轨迹的中心点位
// -----------------------------------------------------
export const HtmlConfig = {
  mapIconParams: {
    styles: 'color',
    width: 32,
    height: 32,
    maxWidth: 38,
    maxHeight: 38,
    extension: '.png'
  },
  // 每个模式下默认显示图层
  // 外网、田林、虹仙
  modelDevice: {
    'fire': [
      // 'combustibleGas',
      // 'smokeDetector',
      // 'fireCock',
      // 'garbage',
      // 'electricArc'
    ],
    'face': [
      // 'camera_face',
      // 'garbage'
    ],
    'pass': [
      // 'access',
      // 'garbage'
    ],
    'car': [
      // 'parking',
      // 'garbage'
    ],
    'video': [
      'access',
      'camera',
      'camera_face'
    ],
    'analy': [
      'access',
      'camera',
      'camera_face'
    ],
    'allState': [],
    'warning': [
      // 'all',
      // 'access',
      // 'camera',
      // 'camera_face',
      // 'fireCock',
      // 'garbage',
      // 'parking',
      // 'manholeCover',
      // 'electricArc'
    ],
    'all': [
      'all'
    ],
    'other': [
      'electricArc',
      'manholeCover',
      'fireCock',
      'elecMeter',
      'charger',
      'combustibleGas'
    ],
    'operation': [
      'all'
    ],
    'rcservice': [
      'all'
    ]
  }
}
export const ChineseName = Name[deployEnv]


export const serverUrlApi = function () {
  let hostname = window.location.hostname
  // let origin =  hostname + '/yufan'
  let origin = '/yufan'
  // let url = hostname === 'localhost' ? 'https://www.yu-fan.cn:8087/yufan' : origin
  let url = hostname === 'localhost' ? 'https://www.yu-fan.cn:8085/yufan' : origin  // 于都演示
  // let url = hostname === 'localhost' ? 'https://www.yu-fan.cn:9999' : origin
  // let url = hostname === 'localhost' ? 'http://192.168.3.170:8081/yufan' : origin
  // let url = hostname === 'localhost' ? 'http://192.168.3.170:8082/yufan' : origin  // 演示s
  return url
  // return 'http://192.168.3.117:8080/'
}
export const serverUrl = serverUrlApi()

const DefaultApi =  {
  '获取验证码': serverUrl + '/sys/randomImage/',
  '用户登陆': serverUrl + '/sys/login',
  '登陆后获取用户菜单权限': serverUrl + '/sys/permission/getUserPermissionByToken',
  '获取用户列表': serverUrl + '/sys/user/list',
  '获取用户所有角色': serverUrl + '/sys/role/queryall',
  '根据用户获取用户角色': serverUrl + '/sys/user/queryUserRole',
  '新增用户': serverUrl + '/sys/user/add',
  '编辑用户': serverUrl + '/sys/user/edit',
  '删除用户': serverUrl + '/sys/user/delete',
  '是否启用': serverUrl + '/sys/user/frozenBatch',
  '获取角色列表': serverUrl + '/sys/role/list',
  '获取角色权限': serverUrl + '/sys/permission/queryRolePermission',
  '保存角色分配菜单': serverUrl + '/sys/permission/saveRolePermission',
  '新增角色': serverUrl + '/sys/role/add',
  '编辑角色': serverUrl + '/sys/role/edit',
  '删除角色': serverUrl + '/sys/role/delete',
  '获取菜单列表': serverUrl + '/sys/permission/list',
  '新增菜单': serverUrl + '/sys/permission/add',
  '编辑菜单': serverUrl + '/sys/permission/edit',
  '删除菜单': serverUrl + '/sys/permission/delete',
  '获取菜单权限菜单树': serverUrl + '/sys/permission/queryTreeList',
  '获取菜单树': serverUrl + '/sys/role/queryTreeList',
  '分类字典顶级查询': serverUrl + '/sys/category/rootList',
  '分类字典下级查询': serverUrl + '/sys/category/childList',
  '分类字典添加': serverUrl + '/sys/category/add',
  '分类字典编辑': serverUrl + '/sys/category/edit',
  '分类字典删除': serverUrl + '/sys/category/delete',
  '分类字典树查询': serverUrl + '/sys/dict/loadTreeData',
  '分类字典树项': serverUrl + '/sys/dict/loadDictItem/',
  '获取排水设施': serverUrl + '/gc/pipe/queryFacilities',
  '获取缺陷统计': serverUrl + '/gc/pipe/defectsStatistics',
  '缺陷问题统计列表': serverUrl + '/gc/pipe/listByParam',
  '获取字典': serverUrl + '/sys/dict/getDictItems',
  '获取全部字典': serverUrl + '/sys/dict/queryAllDictItems',
  '上传图片': serverUrl + '/sys/common/upload',
  '新增管道': serverUrl + '/gc/pipe/add',
  '新增管道缺陷': serverUrl + '/gc/pipeqx/addPipeQx',
  '编辑管道': serverUrl + '/gc/pipe/edit',
  '编辑管道缺陷': serverUrl + '/gc/pipeqx/editPipeQx',
  '查询管道缺陷列表': serverUrl + '/gc/pipe/queryPipeQx',
  '属性列表查询': serverUrl + '/gc/pipe/getPsPipeAndQxList2',
  '获取管道标志': serverUrl + '/gc/pipe/getpipeid',
  '下载文件': serverUrl + '/gc/pipe/download',
  '混接表添加': serverUrl + '/gc/psHunjie/add',
  '混接表删除': serverUrl + '/gc/psHunjie/delete',
  '混接表编辑': serverUrl + '/gc/psHunjie/edit',
  '混接表列表查询': serverUrl + '/gc/psHunjie/list',
  '获取所属道路表': serverUrl + '/gc/roadscom/queryBydistrictId',
  '查询的统计分析': serverUrl + '/gc/pipe/pipeAnalysis',
  '查询管道分析': serverUrl + '/gc/pipe/pagePipeAnalysis',
  '查询项目汇总': serverUrl + '/pro/project/xmlist',
  '添加项目': serverUrl + '/pro/project/add',
  '编辑项目': serverUrl + '/pro/project/xmedit',
  '删除项目': serverUrl + '/pro/project/delete',
  '删除工程': serverUrl + '/pro/project/gcDel',
  '获取项目名称': serverUrl + '/pro/project/getAllProject',
  '根据项目ID获取工程': serverUrl + '/pro/project/getGcByProid',
  '获取工程列表页': serverUrl + '/pro/project/queryGcPageByName',
  '工程新增': serverUrl + '/pro/project/gcadd',
  '工程编辑': serverUrl + '/pro/project/gcedit',
  '获取省信息': serverUrl + '/gc/psRoad/getProvinceInfo',
  '获取市信息': serverUrl + '/gc/psRoad/getCityInfo',
  '获取区信息': serverUrl + '/gc/psRoad/getDistrictInfo',
  '获取排水口': serverUrl + '/gc/psoutfall/querypage',
  '获取排水管': serverUrl + '/gc/pipe/querypagenew',
  '获取雨水口': serverUrl + '/gc/pscomb/querypage',
  '删除文件': serverUrl + '/sys/common/deletefileMin',
  '新增检查井缺陷': serverUrl + '/gc/manholeqx/addqx',
  '编辑检查井缺陷': serverUrl + '/gc/manholeqx/editManholeQx',
  '检查井缺陷查寻': serverUrl + '/gc/manhole/querypage',
  '检查井缺陷列表查询': serverUrl + '/gc/manholeqx/queryManholeQx',
  '地图管道查询列表': serverUrl + '/gc/pipe/querypipegisnew',
  '缺陷图表查询': serverUrl + '/gc/pipe/pipeqxAnalysis',
  '成果查询': serverUrl + '/gc/pipeqx/querywordInfo',
  '导出文件': serverUrl + '/gc/pipeqx/downloadwdg',
  '删除缺陷': serverUrl + '/gc/pipeqx/deletePipeQx',
  '成果报告导出word': serverUrl + '/gc/pipeqx/exportwordByRoad',
  '厦门报告导出word': serverUrl + '/gc/word/xiamenword',
  '成果报告导出excel': serverUrl + '/gc/pipe/excelreport',
  '厦门报告导出excel': serverUrl + '/gc/word/xiamenqxexcel',
  '厦门管道状况导出excel': serverUrl + '/gc/word/xmqxzkexcel',
  // '成果报告下载word': serverUrl + '/gc/pipeqx/downloadword',
  '成果报告下载word': serverUrl + '/gc/pipeqx/downloadword',
  '导出数据分组': serverUrl + '/gc/pipe/groupByjuncid',
  '切换数据': serverUrl + '/gc/pipeqx/switchPipeQxByid',
  '查询逆流交换': serverUrl + '/gc/pipe/refluxPipeInfo',
  '查询问题管道': serverUrl + '/gc/pipe/repeatPipeInfo',
  '校核查看列表': serverUrl + '/gc/pipe/checkPipeInfo',
  '校核数据导出': serverUrl + '/ps/facilcheck/exportXls',
  '校核数据执行分析': serverUrl + '/gc/pipe/facilitycheck',
  '导出mdb': serverUrl + '/arcgis/exportmdb',
  '检测缺陷列表': serverUrl + '/gc/pipeqx/getPagePipeQx',
  '混接列表': serverUrl + '/gc/psHunjie/getPageHunjie',
  '混接点编码查询': serverUrl + '/gc/psHunjie/queryByCode',
  '新增混接唯一性': serverUrl + '/gc/psHunjie/onlycheckByCode',
  '立管列表': serverUrl + '/gc/riser/getPagePsRiser',
  '化粪池列表': serverUrl + '/gc/septictank/getPageSeptictank',
  '视频转换': serverUrl + '/gc/util/conventvideo',
  '道路表添加': serverUrl + '/gc/psRoad/roadAdd',
  '道路表获取列表': serverUrl + '/gc/psRoad/list',
  '道路表编辑': serverUrl + '/gc/psRoad/roadEdit',
  '道路表删除': serverUrl + '/gc/psRoad/delete',
  '小区表添加': serverUrl + '/gc/village/add',
  '小区表编辑': serverUrl + '/gc/village/edit',
  '小区表删除': serverUrl + '/gc/village/delete',
  '道路小区列表查询': serverUrl + '/gc/psRoad/pagelist',
  '项目工程统计': serverUrl + '/gc/pipe/proStatistical',
  '溯源': serverUrl + '/gc/pipe/traceSource',
  '后端批量导入检查井': serverUrl + '/gc/manhole/importExcel?type=pc',
  '后端批量导出检查井': serverUrl + '/gc/manhole/importExcel',
  '后端批量导入雨水口': serverUrl + '/gc/pscomb/importExcel?type=pc',
  '后端批量导出雨水口': serverUrl + '/gc/pscomb/exportXls',
  '后端批量导入管线': serverUrl + '/gc/pipe/importExcel?type=pc',
  '后端批量导出管线': serverUrl + '/gc/pipe/exportXls',
  '后端批量导入排水口': serverUrl + '/gc/psoutfall/importExcel?type=pc',
  '后端批量导出排水口': serverUrl + '/gc/psoutfall/exportXls',
  '后端批量导入立管': serverUrl + '/gc/riser/importExcel?type=pc',
  '后端批量导出立管': serverUrl + '/gc/riser/exportXls',
  '后端批量导入化粪池': serverUrl + '/gc/septictank/importExcel?type=pc',
  '后端批量导出化粪池': serverUrl + '/gc/septictank/exportXls',
  '获取工程和项目信息': serverUrl + '/gc/gcroad/queryGcBylocatecode'
}

export const dictCodebyName = {
  '管道材质': 'material',
  '管道类别': 'pipe_categ',
  '缺陷代码': 'defect_code',
  '缺陷类型': 'check_type',
  '结构缺陷': 'structureDefects',
  '功能缺陷': 'functionalDefects',
  '流程类型': 'bpm_process_type',
}


//根据环境更新接口
// Object.assign(DefaultApi,Interface[deployEnv])
export const apiNames = DefaultApi

// 控制地图点位点击后弹出具体的组件
export const getMapPointComponent = function (path) {
  switch (path.replace(/\s+/g, '')) {
    case '/home/sensor/warning/access': {
      return () =>
        import('../components/dialogs/mapCar.vue')
    }
    case '/position': {
      return () =>
        import('../components/dialogs/mapSiheyuan.vue')
    }
    case '/camera': {
      return () =>
        import('../components/realequipDialogs/equipDetailMap.vue')
    }
    case '/access': {
      if (deployEnv === DEPLOYENV.YuZhongQu) {
        return () => import('../customize/yuzhongqu/gateDetail.vue')
      }
    }
    case '/face': {
      if (deployEnv === DEPLOYENV.YuZhongQu) {
        return () => import('../customize/yuzhongqu/gateDetail.vue')
      }
      return () => import('../components/realpeopleDialogs/gateDetail.vue')

    }
    case '/car':
    case '/camera_car': {
      if (deployEnv === DEPLOYENV.YuZhongQu) {
        return () => import('../customize/yuzhongqu/gateDetail.vue')
      }
      return () => import('../components/realpeopleDialogs/gateDetail.vue')

    }
    case '/alarm/face': {
      return () =>
        import('../components/dialogs/mapPepple.vue')
    }
    case '/alarm/car': {
      return () =>
        import('../components/dialogs/mapCar.vue')
    }
    default: {
      return () =>
        import('../components/dialogs/mapPepple.vue')
    }
  }
}

// // 控制右侧面板点击后弹出具体的组件
export const getRealTimePointComponent = function (path) {
  console.log(path + '页面右侧过滤')
}

// 图表颜色
export const colorList = ['#04b5f2', '#40E0D0', '#9370DB', '#19b359', '#19b3a6', '#a619b3', '#D9AFD9', '#4158D0', '#1973b3']
// 折线图颜色
export const lineColor = [{
  'from': '#21D4FD',
  'to': '#B721FF'
}, {
  'from': '#08AEEA',
  'to': '#F76B1C'
}, {
  'from': '#8EC5FC',
  'to': '#40E0D0'
}, {
  'from': '#74EBD5',
  'to': '#4158D0'
}, {
  'from': '#74EBD5',
  'to': '#85FF8A'
}]
// 柱状图
export const barColor = [{
  'from': '#85FF8A',
  'to': '#36c684'
}, {
  'from': '#8EC5FC',
  'to': '#4158D0'
}, {
  'from': '#8EC5FC',
  'to': '#08AEEA'
}, {
  'from': '#E0C3FC',
  'to': '#784BA0'
}]
// const Weather = {
//   'Default': '上海',
//   'YuZhongQu': '重庆',//渝中区
//   'JiaoDaoKou': '北京' ,// 照片前缀
//   'XuHui': '上海' ,
// }
// export const weatherInfo={
//   weatherReqUrl:'https://free-api.heweather.net/s6/weather/now',
//   weatherReqKey:'771be78aebcf4605aa69654f5ade696c',
//   location: Weather[deployEnv]
// }




export {
  DEPLOYENV,
  deployEnv
}