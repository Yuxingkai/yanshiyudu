
  let realevent = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "alarmCategory": {
            "totalCount": 323, // 总数
            "deviceCount": 323, // 设备预警总数
            "fireCount": 10, // 消防报警总数
            "peopleCount": 10, // 人口预警总数
            "vehicleCount": 10, // 车辆预警总数
            "otherCount": 10 // 其他
        },
        "dod": "348.89%", // 日环比
        "wow": "795.00%" // 周环比
    }
}
let pfsj = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "totalCount": 10, // 总数
        "topAlarms": [
            {
                "_id": "", // 类型（英文）
                "alarmTypeName": "一甲", // 类型（中文）
                "percentage": "10%", // 类型（中文）
                "count": 8 // 总数
            },
            {
                "_id": "other", // 类型（英文）
                "alarmTypeName": "其他", // 类型（中文）
                "percentage": "100%", // 类型（中文）
                "count": 2 // 总数
            },
        ]
,
    }
}
// let sjfl = {
//     "responseStatus": {
//         "resultCode": 0,
//         "successMessage": true
//     },
//     "data": [
//         {
//             "spaceCode": "31010419010006", // 空间编码
//             "totalCount": 321, // 总数
//             "processed": 10, // 已处理
//             "other": 321, // 未处理
//             "name": "丁香园" // 小区名称
//         },
//         {
//             "spaceCode": "31010419010006", // 空间编码
//             "totalCount": 321, // 总数
//             "processed": 10, // 已处理
//             "other": 321, // 未处理
//             "name": "富甲" // 小区名称
//         },
//         {
//             "spaceCode": "31010419010006", // 空间编码
//             "totalCount": 21, // 总数
//             "processed": 10, // 已处理
//             "other": 321, // 未处理
//             "name": "一方" // 小区名称
//         },
//         {
//             "spaceCode": "31010419010006", // 空间编码
//             "totalCount": 321, // 总数
//             "processed": 110, // 已处理
//             "other": 321, // 未处理
//             "name": "一甲" // 小区名称
//         }
//     ]
// }
let sjfl = {"responseStatus":{"resultCode":0,"successMessage":true},"data":[{"spaceCode":"500103008010000","totalCount":30,"processed":0,"other":30,"name":"凉亭子社区"},{"spaceCode":"500103014010000","totalCount":14,"processed":0,"other":14,"name":"新影村社区"},{"spaceCode":"500103012020000","totalCount":5,"processed":0,"other":5,"name":"天灯堡社区"},{"spaceCode":"500103005013000","totalCount":10,"processed":0,"other":10,"name":"上清寺路社区"},{"spaceCode":"500103007011000","totalCount":7,"processed":0,"other":7,"name":"石板坡社区"},{"spaceCode":"500103014005000","totalCount":25,"processed":0,"other":25,"name":"金银湾社区"},{"spaceCode":"500103001013000","totalCount":1,"processed":0,"other":1,"name":"兴隆街社区"},{"spaceCode":"500103008009000","totalCount":24,"processed":0,"other":24,"name":"解放西路社区"},{"spaceCode":"500103012011000","totalCount":12,"processed":0,"other":12,"name":"马家堡社区"},{"spaceCode":"500103012019000","totalCount":18,"processed":0,"other":18,"name":"大坪正街社区"},{"spaceCode":"500103011019000","totalCount":20,"processed":0,"other":20,"name":"双钢路社区"},{"spaceCode":"500103013008003","totalCount":11,"processed":0,"other":11,"name":"江山华庭小区"},{"spaceCode":"500103011018000","totalCount":5,"processed":0,"other":5,"name":"张家花园社区"},{"spaceCode":"500103010006000","totalCount":4,"processed":0,"other":4,"name":"陕西路社区"},{"spaceCode":"500103003021000","totalCount":12,"processed":0,"other":12,"name":"较场口社区"},{"spaceCode":"500103003020000","totalCount":7,"processed":0,"other":7,"name":"临江门社区"},{"spaceCode":"500103010008000","totalCount":2,"processed":0,"other":2,"name":"棉花街社区"},{"spaceCode":"500103001006000","totalCount":26,"processed":0,"other":26,"name":"临华路社区"},{"spaceCode":"500103010010000","totalCount":2,"processed":0,"other":2,"name":"二府衙社区"},{"spaceCode":"500103004003000","totalCount":16,"processed":0,"other":16,"name":"枇杷山正街社区"},{"spaceCode":"500103011020000","totalCount":5,"processed":0,"other":5,"name":"胜利路社区"},{"spaceCode":"500103008012000","totalCount":10,"processed":0,"other":10,"name":"凯旋路社区"},{"spaceCode":"500103010007000","totalCount":4,"processed":0,"other":4,"name":"朝千路社区"},{"spaceCode":"500103004010000","totalCount":1,"processed":0,"other":1,"name":"重庆村社区"},{"spaceCode":"500103005009000","totalCount":15,"processed":0,"other":15,"name":"春森路社区"},{"spaceCode":"500103014011000","totalCount":30,"processed":0,"other":30,"name":"彭家花园社区"},{"spaceCode":"500103004012000","totalCount":5,"processed":0,"other":5,"name":"铁路坡社区"},{"spaceCode":"500103005010000","totalCount":8,"processed":0,"other":8,"name":"新都巷社区"},{"spaceCode":"500103003017000","totalCount":1,"processed":0,"other":1,"name":"公园路社区"},{"spaceCode":"500103012012000","totalCount":16,"processed":0,"other":16,"name":"浮图关社区"},{"spaceCode":"500103012018000","totalCount":8,"processed":0,"other":8,"name":"七牌坊社区"},{"spaceCode":"500103005014000","totalCount":15,"processed":0,"other":15,"name":"曾家岩社区"},{"spaceCode":"500103003019000","totalCount":10,"processed":0,"other":10,"name":"大井巷社区"},{"spaceCode":"500103003024000","totalCount":4,"processed":0,"other":4,"name":"罗汉寺社区"},{"spaceCode":"500103013008002","totalCount":3,"processed":0,"other":3,"name":"建设新村小区"},{"spaceCode":"500103013008005","totalCount":21,"processed":0,"other":21,"name":"长帆江岸公馆"},{"spaceCode":"500103003022000","totalCount":1,"processed":0,"other":1,"name":"邹容路社区"},{"spaceCode":"500103014006000","totalCount":4,"processed":0,"other":4,"name":"民乐村社区"},{"spaceCode":"500103012017000","totalCount":4,"processed":0,"other":4,"name":"袁家岗社区"},{"spaceCode":"500103003016000","totalCount":12,"processed":0,"other":12,"name":"莲花池社区"},{"spaceCode":"500103001017000","totalCount":25,"processed":0,"other":25,"name":"捍卫路社区"},{"spaceCode":"500103001003000","totalCount":25,"processed":0,"other":25,"name":"华一坡社区"},{"spaceCode":"500103004002000","totalCount":27,"processed":0,"other":27,"name":"中山二路社区"},{"spaceCode":"500103008011000","totalCount":11,"processed":0,"other":11,"name":"厚慈街社区"},{"spaceCode":"500103004013000","totalCount":7,"processed":0,"other":7,"name":"国际村社区"},{"spaceCode":"500103013008004","totalCount":2,"processed":0,"other":2,"name":"畔江楼小区"},{"spaceCode":"500103005011000","totalCount":9,"processed":0,"other":9,"name":"学田湾社区"},{"spaceCode":"500103001016000","totalCount":10,"processed":0,"other":10,"name":"抗建堂社区"},{"spaceCode":"500103014001000","totalCount":33,"processed":0,"other":33,"name":"煤建新村社区"},{"spaceCode":"500103013008000","totalCount":18,"processed":0,"other":18,"name":"临江佳园小区"},{"spaceCode":"500103004014000","totalCount":7,"processed":0,"other":7,"name":"王家坡社区"},{"spaceCode":"500103005008000","totalCount":24,"processed":0,"other":24,"name":"桂花园社区"},{"spaceCode":"500103001011000","totalCount":17,"processed":0,"other":17,"name":"领事巷社区"},{"spaceCode":"500103005012000","totalCount":10,"processed":0,"other":10,"name":"上大田塆社区"},{"spaceCode":"500103012013000","totalCount":11,"processed":0,"other":11,"name":"肖家湾社区"},{"spaceCode":"500103010012000","totalCount":13,"processed":0,"other":13,"name":"巴县衙门社区"},{"spaceCode":"500103003023000","totalCount":9,"processed":0,"other":9,"name":"沧白路社区"},{"spaceCode":"500103007001000","totalCount":3,"processed":0,"other":3,"name":"渝铁村社区"},{"spaceCode":"500103004011000","totalCount":16,"processed":0,"other":16,"name":"桂花园新村社区"},{"spaceCode":"500103008013000","totalCount":28,"processed":0,"other":28,"name":"邮政局巷社区"},{"spaceCode":"500103001014000","totalCount":11,"processed":0,"other":11,"name":"归元寺社区"},{"spaceCode":"500103003018000","totalCount":17,"processed":0,"other":17,"name":"自力巷社区"},{"spaceCode":"500103011013000","totalCount":12,"processed":0,"other":12,"name":"建设路社区"},{"spaceCode":"500103012016000","totalCount":19,"processed":0,"other":19,"name":"大黄路社区"},{"spaceCode":"500103001015000","totalCount":8,"processed":0,"other":8,"name":"金汤街社区"}]}
let sjrchl = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "x": [ // 只返回到当前日期
            "11-16",
            "11-17",
            "11-18",
            "11-19",
            "11-20",
            "11-21",
            "11-22"
        ],
        "y": [
            0,
            10,
            0,
            10,
            0,
            10,
            0
        ]
    }
}
//实时预警
let ssyj = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "totalCount": 963,
        "result": [
            {
                "_id": "5fb4efa677ed34603e2368bc",
                "title": "门未关", // 标题
                "tags": "一甲", // 标签
                "address": "凌四小区", // 地址
                "description": "丁香园", // 描述信息
                "alarmTime": "2020-11-19 01:51:29", // 报警信息
                "state": "已超时", // 状态
                "images": [], // 图片
                "type": "people"
            },
            {
                "_id": "5fb4ee5777ed34603e23633e",
                "title": "门未关",
                "tags": "",
                "address": "凌四小区",
                "description": "丁香园",
                "alarmTime": "2020-11-19 01:47:48",
                "state": "已超时",
                "images": [],
                "type": "device"
            },
            {
                "_id": "5fb4ee4877ed34603e236306",
                "title": "门未关",
                "tags": "",
                "address": "凌四小区",
                "description": "丁香园",
                "alarmTime": "2020-11-19 01:47:32",
                "state": "已超时",
                "images": [],
                "type": "device"
            }
        ]
    }
}
let sjcz = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "unprocessedBeforeToday": 2, // 昨日遗留
        "unproccessed": 2, // 未处理（所有）
        "overtimeUnprocessed": 1, // 超时（所有）
        "processedToday": 10, // 已处理（今日）
        "countToday": 10 // 今日新增
    }
}
//首页事件统计
let sjtj = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "totalCount": 963,
        "category": [
            {
                "processedToday":10, // 今日已处理
                "countToday": 10, // 今日新增
                "unproccessed": 953, // 未处理
                "overtimeUnprocessed": 100, // 已超时
                "processed": 10, // 已处理
                "dod": "-100.01%", // 日环比
                "wow": "245.01%", // 周环比
                "name": "设备预警", // 大类名称
                "totalCount": 963, // 总数
                "avgProcessTime": "2小时10分" // 平均处理时间
            },
            {
                "processedToday": 10,
                "countToday": 10,
                "unproccessed": 100,
                "overtimeUnprocessed": 10,
                "processed": 10,
                "dod": "89%",
                "wow": "111%",
                "name": "人口预警",
                "totalCount": 110,
                "avgProcessTime": "0小时0分" // 前一天无数据显示 
            }
        ]
    }
}
// let bjxq ={
//     "responseStatus": {
//         "resultCode": 0,
//         "successMessage": true
//     },
//     "data": {
//         "alarmTypeName": "门未关",
//         "state": "已超时",
//         "alarmTime": "2020-11-18 17:58:51",
//         "images": [
//             ""
//         ],
//         "address": "",
//         "alarmHistoryContent": [
//             {
//                 "processID": "0",
//                 "processName": "触发报警,通知责任人",
//                 "processContent": "触发报警,",
//                 processTime: '2020-11-18 17:58:51',
//                 "processUserInfo": [
//                     {
//                         "credentialType": 0,
//                         "credentialNo": "",
//                         "phoneNo": "18717855439",
//                         "userName": "居委干部"
//                     },
//                     {
//                         "credentialType": 0,
//                         "credentialNo": "",
//                         "phoneNo": "18717834389",
//                         "userName": "东门保安"
//                     },
//                     {
//                         "credentialType": 0,
//                         "credentialNo": "",
//                         "phoneNo": "18717835349",
//                         "userName": "物业经理"
//                     },
//                     {
//                         "credentialType": 0,
//                         "credentialNo": "",
//                         "phoneNo": "18717745219",
//                         "userName": "街道值班"
//                     }
//                 ]
//             }
//         ],
//         "deviceInfo": {// 设备信息
//             "name": "11号楼",
//             "productBrand": "特斯联",
//             "installAddr": null
//         },
//         "peopleInfo": {
//             name: '牛亚明', // 姓名
//             nation: '汉', // 民族
//             educationCode: 'xx', // 教育程度
//             credentialNo: 'xxx', // 证件号码
//             domiclle: 'xx', // 户籍地
//             gender: '男', // 性别
//             poitical: '团员', // 政治面貌
//             maritalStatus: '已婚', // 婚姻状况
//             birthDate: '1995-03-08', // 出生日期
//             phoneNo: '13122223333', // 联系方式
//             headPic: 'http://xxxx.jpeg', // 头像
//             domiclleDetailAddress: '户籍详细地址', // 户籍详细地址
//             tags: ['老人'], // 标签,
//             lastAccessTime: "2020-11-18 17:58:51"
//         }, // 人员信息
//     }
// }
//获取报警详情
// let bjxq ={"responseStatus":{"resultCode":0,"successMessage":true},"data":{"alarmTypeName":"开门触发布控规则预警","state":"未处理","alarmTime":"2021-01-22 01:59:58","images":[""],"address":"新民街108号","alarmHistoryContent":[{"processID":"5039767","processName":"触发告警","processContent":"开门触发布控规则预警","processUserInfo":null,"processTime":""}]}}
  //获取报警详情--人口
  let bjxq ={"responseStatus":{"resultCode":0,"successMessage":true},"data":{"alarmTypeName":"开门触发布控规则预警","state":"未处理","alarmTime":"2021-01-22 02:02:33","images":[""],"address":"李子坝正街156号2单元","alarmHistoryContent":[{"processID":"5039773","processName":"触发告警","processContent":"开门触发布控规则预警","processUserInfo":null,"processTime":""}],"peopleInfo":{"credentialNo":"1d0ab60547d0249830e6be04d2006a7449d9af7fa99917eb21b47508808f8d58","name":"雷*琴","nation":"汉族","educationCode":"未知","credentialNoDes":"352***********26","domiclle":"","gender":"男","poitical":"其他","maritalStatus":"未知","birthDate":"1980-07-15","phoneNo":"1336****1679","headPic":"/smartcity/IdFace-352224198007152526-2020-03-13-15-42-45.jpg","domiclleDetailAddress":{},"tags":[],"lastAccessTime":{"_id":"6016ead9686936376446205e","openTime":"2021-01-31 22:48:51"}}}}
  export default {
    'post|http://172.31.1.62:5003/api/v1/senseAlarm/getAlarmStatisticsDetail':  option => {
        console.log(option)
        return sjtj
    },
    'post|http://172.31.1.62:5003/api/v1/senseAlarm/getAlarmStatistics':  option => {
        console.log(option)
        return realevent
    },
    'post|http://172.31.1.62:5003/api/v1/senseAlarm/getTopXFrequentAlarms':  option => {
        console.log(option)
        return pfsj
    },
    'post|http://172.31.1.62:5003/api/v1/senseAlarm/getCommunityAlarmCount':  option => {
        console.log(option)
        return sjfl
    },
    'post|http://172.31.1.62:5003/api/v1/senseAlarm/getProcessedAlarmCount':  option => {
        console.log(option)
        return sjrchl
    },
    'post|http://172.31.1.62:5003/api/v1/senseAlarm/newAlarm':  option => {
        console.log(option)
        return ssyj
    },
    'post|http://172.31.1.62:5003/api/v1/senseAlarm/processStatistics':  option => {
        console.log(option)
        return sjcz
    },
    //报警详情
    'get|http://172.31.1.62:5003/api/v1/senseAlarm/':  option => {
        console.log(option)
        return bjxq
    },
    }