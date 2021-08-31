//通行设备统计
    // let accessequip = {
    //     "responseStatus": {
    //         "resultCode": 0,
    //         "successMessage": true
    //     },
    //     "data": {
    //         "totalCount": 463, // 设备总数
    //         "states": [
    //             {
    //                 "state": "在线", // 状态
    //                 "count": 423 // 设备总数
    //             },
    //             {
    //                 "state": "故障",
    //                 "count": 10
    //             },
    //             {
    //                 "state": "离线",
    //                 "count": 1
    //             },
    //             {
    //                 "state": "维保",
    //                 "count": 0
    //             }
    //         ],
    //         "items": [ // 分设备型号统计
    //             {
    //                 "productModel": "A9", // 型号//只有一个
    //                 "states": [
    //                     {
    //                         "state": "在线", //状态
    //                         "count": 423 // 设备数量
    //                     },
    //                     {
    //                         "state": "故障",
    //                         "count": 20
    //                     },
    //                     {
    //                         "state": "离线",
    //                         "count": 20
    //                     },
    //                     {
    //                         "state": "维保",
    //                         "count": 20
    //                     }
    //                 ]
    //             }

    //         ]
    //     }
    // }
    let accessequip = {"responseStatus":{"resultCode":0,"successMessage":true},"data":{"totalCount":3135,"states":[{"state":"在线","count":3135},{"state":"故障","count":0},{"state":"离线","count":0},{"state":"维保","count":0}],"items":[{"productModel":"","states":[{"state":"在线","count":2},{"state":"故障","count":0},{"state":"离线","count":0},{"state":"维保","count":0}]},{"productModel":"M-GM61-12","states":[{"state":"在线","count":42},{"state":"故障","count":0},{"state":"离线","count":0},{"state":"维保","count":0}]},{"productModel":"M-GP00-36","states":[{"state":"在线","count":6},{"state":"故障","count":0},{"state":"离线","count":0},{"state":"维保","count":0}]},{"productModel":"M-GP11-36","states":[{"state":"在线","count":6},{"state":"故障","count":0},{"state":"离线","count":0},{"state":"维保","count":0}]},{"productModel":"MZR-21","states":[{"state":"在线","count":2},{"state":"故障","count":0},{"state":"离线","count":0},{"state":"维保","count":0}]},{"productModel":"TICS-S-0120/0220/0221SV","states":[{"state":"在线","count":3075},{"state":"故障","count":0},{"state":"离线","count":0},{"state":"维保","count":0}]},{"productModel":"无","states":[{"state":"在线","count":2},{"state":"故障","count":0},{"state":"离线","count":0},{"state":"维保","count":0}]}]}}
    let accesstoday = {
        "responseStatus": {
            "resultCode": 0,
            "successMessage": true
        },
        "data": {
            "accessInfo": { // 出入数据
                "totalCount": 47918, // 总数
                "dod": "10%", // 日环比
                "wow": "-100.00%", // 周环比
                "residentsCount": 24508, // 居民
                "tempCount": 19350 // 临时
            },
            "parkingInfo": { // 停车数据
                "tempCount": 10, //临时
                "residentsCount": 90, // 居民
                "totalCount": 100, // 总数
                "dod": "10%", // 日环比
                "wow": "-90%" // 周环比
            }
        }
    }
    let accesshourly = {
        "responseStatus": {
            "resultCode": 0,
            "successMessage": true
        },
        "data": {
            "x": [ // 小时
                "01:00",
                "02:00",
                "03:00",
                "04:00",
                "05:00",
                "06:00",
                "07:00",
                "08:00",
                "09:00",
                "10:00",
                "11:00"
            ],
            "accessByHour": [ // 人次
                0,
                0,
                0,
                10,
                0,
                0,
                0,
                10,
                0,
                10,
                0
            ],
            "parkingByHour": [ // 车次
                0,
                0,
                0,
                0,
                10,
                0,
                0,
                10,
                0,
                0,
                0
            ]
        }
    }
  export default {
    'post|http://172.31.1.62:5003/api/v1/device/category/access':  option => {
        console.log(option)
        return accessequip
    },
    //今日通行
    'post|http://172.31.1.62:5003/api/v1/passSense/passStatistics/today':  option => {
        console.log(option)
        return accesstoday
    },
       //今日通行-小时
       'post|http://172.31.1.62:5003/api/v1/passSense/passStatistics/hourly':  option => {
        console.log(option)
        return accesshourly
    },
    }