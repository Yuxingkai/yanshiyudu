//实有设备
let realequip = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "accessDevice": { // 通行设备
            "count": 10,
            "states": [
                {
                    "state": "离线",
                    "count": 34
                },
                {
                    "state": "在线",
                    "count": 259
                }
            ],
            "devices": [
                {
                    "states": [
                        {
                            "state": "离线",
                            "count": 34
                        },
                        {
                            "state": "在线",
                            "count": 259
                        }
                    ],
                    "count": 293,
                    "typeName": "门禁"
                }
            ]
        },
        "monitorDevice": { // 监控设备
            "count": 20,
            "states": [
                {
                    "state": "离线",
                    "count": 34
                },
                {
                    "state": "在线",
                    "count": 259
                }
            ],
            "devices": [
                {
                    "states": [
                        {
                            "state": "离线",
                            "count": 34
                        },
                        {
                            "state": "在线",
                            "count": 259
                        }
                    ],
                    "count": 293,
                    "typeName": "门禁"
                }
            ]
        },
        "iotDevice": { // 物联设备
            "count": 30,
            "states": [
                {
                    "state": "离线",
                    "count": 34
                },
                {
                    "state": "在线",
                    "count": 259
                }
            ],
            "devices": [
                {
                    "states": [
                        {
                            "state": "离线",
                            "count": 34
                        },
                        {
                            "state": "在线",
                            "count": 259
                        }
                    ],
                    "count": 293,
                    "typeName": "门禁"
                },
                {
                    "states": [
                        {
                            "state": "离线",
                            "count": 4
                        },
                        {
                            "state": "在线",
                            "count": 25
                        }
                    ],
                    "count": 29,
                    "typeName": "摄像机"
                },
                {
                    "states": [
                        {
                            "state": "离线",
                            "count": 18
                        },
                        {
                            "state": "在线",
                            "count": 2
                        }
                    ],
                    "count": 23,
                    "typeName": "一甲"
                },
                
            ]
        },
        "totalCount": 120 // 总数
    }
}
//设备分布统计
// let fbtj = {
//     "responseStatus": {
//         "resultCode": 0,
//         "successMessage": true
//     },
//     "data": [
//         {
//             "name": "test001",      // 小区名称
//             "count": 22,    //设备总数
//             "states": [
//                 {
//                     "state": "离线",    //状态
//                     "count": 12   // 该状态下设备数量
//                 },
//                 {
//                     "state": "在线",
//                     "count": 10
//                 }
//             ]
//         },
//         {
//             "name": "test002",      // 小区名称
//             "count": 22,    //设备总数
//             "states": [
//                 {
//                     "state": "离线",    //状态
//                     "count": 12   // 该状态下设备数量
//                 },
//                 {
//                     "state": "在线",
//                     "count": 10
//                 }
//             ]
//         },
//         {
//             "name": "test003",      // 小区名称
//             "count": 220,    //设备总数
//             "states": [
//                 {
//                     "state": "离线",    //状态
//                     "count": 120   // 该状态下设备数量
//                 },
//                 {
//                     "state": "在线",
//                     "count": 100
//                 }
//             ]
//         },
//     ]
// }
let fbtj = {"responseStatus":{"resultCode":0,"successMessage":true},"data":[{"name":"华一坡社区","count":43,"states":[{"state":"在线","count":43},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"临华路社区","count":66,"states":[{"state":"在线","count":66},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"领事巷社区","count":62,"states":[{"state":"在线","count":62},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"兴隆街社区","count":11,"states":[{"state":"在线","count":11},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"归元寺社区","count":28,"states":[{"state":"在线","count":28},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"金汤街社区","count":40,"states":[{"state":"在线","count":40},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"抗建堂社区","count":60,"states":[{"state":"在线","count":60},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"捍卫路社区","count":65,"states":[{"state":"在线","count":65},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"民生路社区","count":9,"states":[{"state":"在线","count":9},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"莲花池社区","count":45,"states":[{"state":"在线","count":45},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"公园路社区","count":4,"states":[{"state":"在线","count":4},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"自力巷社区","count":33,"states":[{"state":"在线","count":33},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"大井巷社区","count":73,"states":[{"state":"在线","count":73},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"临江门社区","count":6,"states":[{"state":"在线","count":6},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"较场口社区","count":38,"states":[{"state":"在线","count":38},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"邹容路社区","count":18,"states":[{"state":"在线","count":18},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"沧白路社区","count":19,"states":[{"state":"在线","count":19},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"罗汉寺社区","count":11,"states":[{"state":"在线","count":11},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"中山二路社区","count":86,"states":[{"state":"在线","count":86},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"枇杷山正街社区","count":78,"states":[{"state":"在线","count":78},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"重庆村社区","count":23,"states":[{"state":"在线","count":23},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"桂花园新村社区","count":80,"states":[{"state":"在线","count":80},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"铁路坡社区","count":36,"states":[{"state":"在线","count":36},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"国际村社区","count":65,"states":[{"state":"在线","count":65},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"王家坡社区","count":30,"states":[{"state":"在线","count":30},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"桂花园社区","count":95,"states":[{"state":"在线","count":95},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"春森路社区","count":69,"states":[{"state":"在线","count":69},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"新都巷社区","count":50,"states":[{"state":"在线","count":50},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"学田湾社区","count":77,"states":[{"state":"在线","count":77},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"上大田塆社区","count":80,"states":[{"state":"在线","count":80},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"上清寺路社区","count":49,"states":[{"state":"在线","count":49},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"曾家岩社区","count":89,"states":[{"state":"在线","count":89},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"渝铁村社区","count":10,"states":[{"state":"在线","count":10},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"珊瑚湾社区","count":24,"states":[{"state":"在线","count":24},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"竹木街社区","count":9,"states":[{"state":"在线","count":9},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"石板坡社区","count":23,"states":[{"state":"在线","count":23},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"十八梯社区","count":11,"states":[{"state":"在线","count":11},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"解放西路社区","count":40,"states":[{"state":"在线","count":40},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"凉亭子社区","count":95,"states":[{"state":"在线","count":95},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"厚慈街社区","count":19,"states":[{"state":"在线","count":19},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"凯旋路社区","count":27,"states":[{"state":"在线","count":27},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"邮政局巷社区","count":22,"states":[{"state":"在线","count":22},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"陕西路社区","count":26,"states":[{"state":"在线","count":26},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"朝千路社区","count":23,"states":[{"state":"在线","count":23},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"棉花街社区","count":52,"states":[{"state":"在线","count":52},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"白象街社区","count":13,"states":[{"state":"在线","count":13},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"二府衙社区","count":4,"states":[{"state":"在线","count":4},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"巴县衙门社区","count":12,"states":[{"state":"在线","count":12},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"建设路社区","count":13,"states":[{"state":"在线","count":13},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"人和街社区","count":1,"states":[{"state":"在线","count":1},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"张家花园社区","count":29,"states":[{"state":"在线","count":29},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"双钢路社区","count":68,"states":[{"state":"在线","count":68},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"胜利路社区","count":9,"states":[{"state":"在线","count":9},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"马家堡社区","count":49,"states":[{"state":"在线","count":49},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"浮图关社区","count":130,"states":[{"state":"在线","count":130},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"肖家湾社区","count":14,"states":[{"state":"在线","count":14},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"大黄路社区","count":51,"states":[{"state":"在线","count":51},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"袁家岗社区","count":19,"states":[{"state":"在线","count":19},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"七牌坊社区","count":37,"states":[{"state":"在线","count":37},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"大坪正街社区","count":48,"states":[{"state":"在线","count":48},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"天灯堡社区","count":27,"states":[{"state":"在线","count":27},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"临江佳园小区","count":66,"states":[{"state":"在线","count":66},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"煤建新村社区","count":195,"states":[{"state":"在线","count":195},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"金银湾社区","count":142,"states":[{"state":"在线","count":142},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"民乐村社区","count":97,"states":[{"state":"在线","count":97},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"虎头岩社区","count":14,"states":[{"state":"在线","count":14},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"石油路社区","count":16,"states":[{"state":"在线","count":16},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"新影村社区","count":57,"states":[{"state":"在线","count":57},{"state":"故障","count":0},{"state":"离线","count":0}]},{"name":"彭家花园社区","count":105,"states":[{"state":"在线","count":105},{"state":"故障","count":0},{"state":"离线","count":0}]}]}
//设备异常高发
let ycgf = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            "_id": "5fa241a45c5bea11d1f0f9fb",
            "thingCode": "004", // 设备编码
            "opsCount": 4, // 异常次数
            "name": "门禁",  // 名称
            "state": "离线", // 状态
            "installAddr": "1单元门口", // 安装位置,
            "deviceTypeName": "门禁" // 设备类型名称
        },
        {
            "_id": "5fa23f0b51f8b397dcc84a49",
            "thingCode": "002",
            "opsCount": 3,
            "name": "烟感",
            "state": "离线",
            "installAddr": "2单元大厅",
            "deviceTypeName": "门禁" // 设备类型名称
        },
        {
            "_id": "5fa23f0b51f8b397dcc84a49",
            "thingCode": "002",
            "opsCount": 3,
            "name": "烟感",
            "state": "离线",
            "installAddr": "2单元大厅",
            "deviceTypeName": "一甲" // 设备类型名称
        },
        {
            "_id": "5fa23f0b51f8b397dcc84a49",
            "thingCode": "002",
            "opsCount": 3,
            "name": "烟感",
            "state": "离线",
            "installAddr": "2单元大厅",
            "deviceTypeName": "门禁" // 设备类型名称
        },
        {
            "_id": "5fa23f0b51f8b397dcc84a49",
            "thingCode": "002",
            "opsCount": 3,
            "name": "烟感",
            "state": "离线",
            "installAddr": "2单元大厅",
            "deviceTypeName": "门禁" // 设备类型名称
        },
        {
            "_id": "5fa23f0b51f8b397dcc84a49",
            "thingCode": "002",
            "opsCount": 3,
            "name": "烟感",
            "state": "离线",
            "installAddr": "2单元大厅",
            "deviceTypeName": "门禁" // 设备类型名称
        },
        {
            "_id": "5fa23f0b51f8b397dcc84a49",
            "thingCode": "002",
            "opsCount": 3,
            "name": "烟感",
            "state": "离线",
            "installAddr": "2单元大厅",
            "deviceTypeName": "门禁" // 设备类型名称
        },
    ]
}
//异常处置状态统计
let yccz = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "unprocessedBeforeToday": 12, // 昨日遗留
        "unproccessed": 12, // 未处理（所有）
        "overtimeUnprocessed": 10, // 超时（所有）
        "processedToday": 10, // 已处理（今日）
        "countToday": 10 // 今日新增
    }
}
//设备类型及数量
let lxsl = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            "category": "通行设备",
            "count": 298,
            "deviceType": [
                {
                    "typeName": "门禁",
                    "name": "access"
                }
            ]
        },
        {
            "category": "监控设备",
            "count": 0,
            "deviceType": []
        },
        {
            "category": "物联设备",
            "count": 0,
            "deviceType": []
        }
    ]
}
//设备列表
let sblb = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "totalCount": 1, // 总记录数
        "result": [ // 分页结果
            {
                "code": "310104013027010113460077",
                "name": "门禁",
                "typeName": "门禁",
                "installTime": "2020-10-30 13:48:09",
                "xiaoqu": "test001",
                "state": 0, // 0:离线，1:在线 2:故障 3: 维保
                "installAddr": null, // 安装地址
                "extend": { // 拓展字段
                    "ip": null, // ip地址
                    "mac": "DC2C26004947", // mac地址
                    "port": null // 端口
                }
            }
        ]
    }
}
//设备类型
let sblx = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            "dictionaryID": "162b64316f7511e8af2e7cd30adae832",
            "name": "camera",
            "typeName": "摄像机",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "162bc9bd6f7511e8af2e7cd30adae832",
            "name": "access",
            "typeName": "门禁",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "162bf3726f7511e8af2e7cd30adae832",
            "name": "manholeCover",
            "typeName": "井盖",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "162c35636f7511e8af2e7cd30adae832",
            "name": "fireCock",
            "typeName": "消防栓",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "162c35ce6f7511e8af2e7cd30adae832",
            "name": "electricArc",
            "typeName": "电弧",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "162c37496f7511e8af2e7cd30adae832",
            "name": "smokeDetector",
            "typeName": "烟感",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "162c7ffb6f7511e8af2e7cd30adae832",
            "name": "elecMeter",
            "typeName": "电表",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "21cd2bddc6bb4fdeae945302fad0b53d",
            "name": "fence",
            "typeName": "电子围栏",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "223e09b2077f42beadb65a1e469e780d",
            "name": "waterPressureSensor",
            "typeName": "水压传感器",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "247a8310f44511e8b7a67cd30ac4749c",
            "name": "agedAlarm",
            "typeName": "老人报警设备",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "362bc9bd6f7511e8af2e7cd30adae89",
            "name": "elevator",
            "typeName": "电梯",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "4e6414a0a78911e89c7e3dbfca3e6688",
            "name": "garbage",
            "typeName": "垃圾箱",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "511c039804f911e992440242ac120002",
            "name": "faceGateWay",
            "typeName": "人脸网关",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "72ef5688711e477e85fbfef1f47ee2e2",
            "name": "combustibleGas",
            "typeName": "可燃气体",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "9344c8e2336a4ce691ed044b95c21c7d",
            "name": "wifiSniff",
            "typeName": "wifi嗅探",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "96cbba02ec0511ea98a40242ac120006",
            "name": "bracelet",
            "typeName": "手环",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "a8fb521fdc884cd6a850961933b50d97",
            "name": "charger",
            "typeName": "充电桩",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "ba2861d67d4411eaa7070242ac120003",
            "name": "meteorology",
            "typeName": "环境监测设备",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "bdeb54e0970411e8a404038ed0b39e5a",
            "name": "electronicPatrol",
            "typeName": "电子巡更",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "cd5b82ebeb2f495ba021d2fb9c6baec3",
            "name": "tempSensor",
            "typeName": "温度传感器",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "ceb0cdb0f6e411e8b8bb9907e8e7d5e1",
            "name": "waterQualitySensor",
            "typeName": "水质传感器",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "ef06da812be94c90a76da12fc79ec715",
            "name": "healthMachine",
            "typeName": "健康一体机",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "ef06da812be94c90a76da12fc79ec7e0",
            "name": "groundLock",
            "typeName": "地锁",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "ef06da812be94c90a76da12fc79ec7e5",
            "name": "geomagnetic",
            "typeName": "地磁",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "ef06da812be94c90a76da12fc79ec7e8",
            "name": "plug",
            "typeName": "插头",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "ef06da812be94c90a76da12fc79ec7e9",
            "name": "bucket",
            "typeName": "桶",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "ef06da812be94c90a76da12fc79ec7f5",
            "name": "acoustics",
            "typeName": "音响",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "ef06da812be94c90a76da12fc79ec7f6",
            "name": "intercom",
            "typeName": "对讲机",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "ef06da812be94c90a76da12fc79ec7f7",
            "name": "advertisingScreen",
            "typeName": "广告屏",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "ef06da812be94c90a76da12fc79ec7f8",
            "name": "lamp",
            "typeName": "灯",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "ef06da812be94c90a76da12tc79ec7e1",
            "name": "letterBox",
            "typeName": "信报箱",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "ef06da812be94c90a76da12tc79ec7e2",
            "name": "smartlamp",
            "typeName": "智慧灯杆",
            "groupName": "e_device"
        },
        {
            "dictionaryID": "ef06da812be94c90a76da12tc79ec7e3",
            "name": "smartSeat",
            "typeName": "智慧座椅",
            "groupName": "e_device"
        }
    ]
}
//
let sbxq = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
            "thingID": "008b1be8981911eaa2af0242ac160002", // 设备ID
            "name": "门禁", // 设备名称
            "typeName": "门禁", // 设备类型
            "productModel": "G9", // 型号
            "prducetBrand": "海康威视", // 设备厂家
            "installAddr": "田林三村", // 安装位置
            "isDisable": "禁用", // 是否禁用，直接返回“禁用”，“启用”字段
            "manufactorName": "特斯联", // 维护单位
            "installTime":'2020-12-24 12:00:00', // 安装时间
            "extend": { // 拓展字段
                "ip": '127.0.0.1', // ip地址
                "mac": "DC2C26004947", // mac地址
                "port": '8820', // 端口
                "altitude": "0.2", // 安装高度
                "useType": "监控摄像机" // 设备功能类型 1 -监控摄像机 2-人脸卡口摄像机 3-车辆卡口摄像机 4-门禁人脸摄像机 5-单元门禁机 6-围墙机 7-闸机 8-车库门 9-垃圾箱门
            },
            "runTime": "12天5小时10分", // 运行时间
            "state": "故障", // 状态
        }
}
//设备运维记录
let ywjl = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "totalCount": 3, // 总数
        "result": [
            {
                "_id": "5fc84c5ee9b367409994ce5d", // 唯一id
                "opsTypeName": "离线", // 事件名称
                "opsType": "offline", // 事件英文名称
                "thingCode": "31010416011608500008", // 设备编码
                "opsHistoryContent": [ // 处置流程
                    {
                        "processID": "0001",
                        "processname": "发现", // 流程名
                        "processcontent": "DAHKHALKH", // 流程内容
                        "processUserInfo": null // 处置人
                    }
                ],
                "processedTime": "2020-07-05 18:43:53", // 处置时间
                "processDeadline": null, // 截至时间
                "opsTime": "2020-07-05 18:43:53", // 事件发生时间
                "processTimeCost": "" // 处置时长
            },
            {
                "_id": "5fc84c5ee9b367409994ce5d", // 唯一id
                "opsTypeName": "离线", // 事件名称
                "opsType": "offline", // 事件英文名称
                "thingCode": "31010416011608500008", // 设备编码
                "opsHistoryContent": [ // 处置流程
                    {
                        "processID": "0002",
                        "processname": "发现", // 流程名
                        "processcontent": "123", // 流程内容
                        "processUserInfo": [
                            {
                                "credentialType": 0,
                                "credentialNo": "",
                                "phoneNo": "18717855439",
                                "userName": "居委干部"
                            },
                        ] // 处置人
                    }
                ],
                "processedTime": '2020-07-05 18:43:53', // 处置时间
                "processDeadline": null, // 截至时间
                "opsTime": "2020-07-05 18:43:53", // 事件发生时间
                "processTimeCost": "" // 处置时长
            },
            {
                "_id": "5fc84c5ee9b367409994ce5d", // 唯一id
                "opsTypeName": "离线", // 事件名称
                "opsType": "offline", // 事件英文名称
                "thingCode": "31010416011608500008", // 设备编码
                "opsHistoryContent": [ // 处置流程
                    {
                        "processID": "222",
                        "processname": "3577", // 流程名
                        "processcontent": "3131313", // 流程内容
                        "processUserInfo": null // 处置人
                    }
                ],
                "processedTime": "2020-07-05 18:44:53", // 处置时间
                "processDeadline": null, // 截至时间
                "opsTime": "2020-07-05 18:43:53", // 事件发生时间
                "processTimeCost": "" // 处置时长
            }
        ]
    }
}
//设备报警记录
let sbbj= {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "totalCount": 321,
        "result": [
            {
                "_id": "5fa4c37bd7eb02f765b3ca33",
                "alarmTypeName": "门未关", // 报警类型
                "thingCode": "310104013027010113460008", // thingCode
                "sceneName": "感知1", // 感知名称
                "alarmCurrentContent": { // 报警当前内容
                    "processID": "0",
                    "processName": "触发报警,通知责任人",
                    "processContent": "",
                    "processUserInfo": [
                        {
                            "credentialType": 0,
                            "credentialNo": "",
                            "phoneNo": "18717855439",
                            "userName": "居委干部"
                        },
                        {
                            "credentialType": 0,
                            "credentialNo": "",
                            "phoneNo": "18717834389",
                            "userName": "东门保安"
                        },
                        {
                            "credentialType": 0,
                            "credentialNo": "",
                            "phoneNo": "18717835349",
                            "userName": "物业经理"
                        },
                        {
                            "credentialType": 0,
                            "credentialNo": "",
                            "phoneNo": "18717745219",
                            "userName": "街道值班"
                        }
                    ]
                },
                processedTime: "2020-11-05 23:35:06", // 处置时间
                "alarmTime": "2020-11-05 23:35:06", // 报警产生时间
                "name": "8号楼", // 设备名称
                "installAddr": null // 安装地址
            },
            {
                "_id": "5fa4c37bd7eb02f765b3ca33",
                "alarmTypeName": "门未关", // 报警类型
                "thingCode": "310104013027010113460008", // thingCode
                "sceneName": "感知2", // 感知名称
                "alarmCurrentContent": { // 报警当前内容
                    "processID": "0",
                    "processName": "触发报警,通知责任人",
                    "processContent": "",
                    "processUserInfo": [
                        {
                            "credentialType": 0,
                            "credentialNo": "",
                            "phoneNo": "18717855439",
                            "userName": "居委干部"
                        },
                        {
                            "credentialType": 0,
                            "credentialNo": "",
                            "phoneNo": "18717834389",
                            "userName": "东门保安"
                        },
                        {
                            "credentialType": 0,
                            "credentialNo": "",
                            "phoneNo": "18717835349",
                            "userName": "物业经理"
                        },
                        {
                            "credentialType": 0,
                            "credentialNo": "",
                            "phoneNo": "18717745219",
                            "userName": "街道值班"
                        }
                    ]
                },
                processedTime: "2020-11-05 23:35:06", // 处置时间
                "alarmTime": "2020-11-05 23:35:06", // 报警产生时间
                "name": "8号楼", // 设备名称
                "installAddr": '凌四小区' // 安装地址
            },
        ]
    }
}
//获取运维报警类型 
let bjlx = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            "dictionaryID": "09040437ed6f11e8b7a67cd30ac4741c",
            "name": "networkAlert",
            "typeName": "通信故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "09040437ed6f11e8b7a67cd30ac4749c",
            "name": "temperatureAlert",
            "typeName": "温感故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "11c4af99ed6c11e8b7a67cd30ac4749c",
            "name": "physicalDismantling",
            "typeName": "物理拆除",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "2c781709ed6f11e8b7a67cd30ac47491",
            "name": "A1Alert",
            "typeName": "A1级故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "2c781709ed6f11e8b7a67cd30ac47492",
            "name": "A2Alert",
            "typeName": "A2级故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "2c781709ed6f11e8b7a67cd30ac4749c",
            "name": "hallSensorAlert",
            "typeName": "霍尔传感器故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "345de9b2ed6f11e8b7a67cd30ac4749c",
            "name": "dumping",
            "typeName": "倾倒",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "4933d95ced6f11e8b7a67cd30ac4749c",
            "name": "waterLevelSensorAlert",
            "typeName": "水位传感器故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "5bb738f0ed6f11e8b7a67cd30ac4749c",
            "name": "waterPressureSensorAlert",
            "typeName": "水压传感器故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "5be88a60ed6e11e8b7a67cd30ac4749c",
            "name": "smokeAlert",
            "typeName": "烟感故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "6fa27629ed6f11e8b7a67cd30ac4749c",
            "name": "magneticInterference",
            "typeName": "强磁干扰",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "738f0e947a364de4a41f9ff59063a91c",
            "name": "brokeDown",
            "typeName": "故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "9f8a9d57ed6f11e8b7a67cd30ac4749c",
            "name": "lowVoltage",
            "typeName": "低电压",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "a03a99584a884a78a832f41e68c0a818",
            "name": "offline",
            "typeName": "离线",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "b8a952aaed6f11e8b7a67cd30ac4749c",
            "name": "magneticSensorAlert",
            "typeName": "磁传感器检测失效",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "c9a7a5a7ed6e11e8b7a67cd30ac4749c",
            "name": "smokeMotherboardsAlert",
            "typeName": "烟感主板故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "caa7899eed6f11e8b7a67cd30ac47419",
            "name": "DS18B20Alter",
            "typeName": "DS18B20故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "caa7899eed6f11e8b7a67cd30ac47491",
            "name": "containerAlter",
            "typeName": "容器系统故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "caa7899eed6f11e8b7a67cd30ac47492",
            "name": "weighingAlter",
            "typeName": "称重系统故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "caa7899eed6f11e8b7a67cd30ac47493",
            "name": "upperLimitAlter",
            "typeName": "上限位故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "caa7899eed6f11e8b7a67cd30ac47494",
            "name": "downLimitAlter",
            "typeName": "下限位故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "caa7899eed6f11e8b7a67cd30ac47495",
            "name": "fuseAlter",
            "typeName": "保险丝故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "caa7899eed6f11e8b7a67cd30ac47496",
            "name": "flashStorageAlter",
            "typeName": "Flash存储器故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "caa7899eed6f11e8b7a67cd30ac47497",
            "name": "EEPROMStorageAlter",
            "typeName": "EEPROM存储器故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "caa7899eed6f11e8b7a67cd30ac47498",
            "name": "cardChipAlter",
            "typeName": "刷卡芯片故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "caa7899eed6f11e8b7a67cd30ac47499",
            "name": "DS1302Alter",
            "typeName": "DS1302故障",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        },
        {
            "dictionaryID": "caa7899eed6f11e8b7a67cd30ac4749c",
            "name": "magneticSensorDamage",
            "typeName": "磁传感器硬件损坏",
            "groupName": "e_device_ops_log",
            "path": "db/e_device_ops_log/opsType"
        }
    ]
}

let newops = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "totalCount": 1,
        "result": [
            {
                "_id": "5fa241a45c5bea11d1f0f9fb",
                "opsTypeName": "离线",// 报警类型名称
                "thingCode": "004",// 设备code
                "isDeal": 0,// 处置状态（数字）0-未处理 1-已处理
                "processDeadline": "2020-06-18 06:10:37",// 处置截止时间
                "opsTime": "2020-06-18 06:10:37",// 报警产生时间
                "virtualSpaceCode": "1110002",//虚拟空间code、可以是小区code或者园区code
                "name": "门禁",// 设备名称
                "virtualSpaceName": "田林十三村",// 小区或园区名称
                "state": "已超时",// 处置状态（中文），未处理/已超时/已处理
                "deviceTypeName": "门禁", // 设备类型
                "deviceType": "access", // 设备类型英文名
            },
            {
                "_id": "5fa241a45c5bea11d1f0f9fb",
                "opsTypeName": "未关",// 报警类型名称
                "thingCode": "004",// 设备code
                "isDeal": 0,// 处置状态（数字）0-未处理 1-已处理
                "processDeadline": "2020-06-18 06:10:37",// 处置截止时间
                "opsTime": "2020-06-18 06:10:37",// 报警产生时间
                "virtualSpaceCode": "1110002",//虚拟空间code、可以是小区code或者园区code
                "name": "门禁",// 设备名称
                "virtualSpaceName": "田林十三村",// 小区或园区名称
                "state": "已超时",// 处置状态（中文），未处理/已超时/已处理
                "deviceTypeName": "摄像机", // 设备类型
                "deviceType": "camera", // 设备类型英文名
            },
            {
                "_id": "5fa241a45c5bea11d1f0f9fb",
                "opsTypeName": "未关",// 报警类型名称
                "thingCode": "004",// 设备code
                "isDeal": 0,// 处置状态（数字）0-未处理 1-已处理
                "processDeadline": "2020-06-18 06:10:37",// 处置截止时间
                "opsTime": "2020-06-18 06:10:37",// 报警产生时间
                "virtualSpaceCode": "1110002",//虚拟空间code、可以是小区code或者园区code
                "name": "门禁",// 设备名称
                "virtualSpaceName": "田林十三村",// 小区或园区名称
                "state": "已超时",// 处置状态（中文），未处理/已超时/已处理
                "deviceTypeName": "摄像机", // 设备类型
                "deviceType": "", // 设备类型英文名
            }
        ]
    }
}
let AAA = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": []
    }
let AAAA = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            name: "10号楼2单元", // 设备名称
            code: "04468377628782220101", // 设备code
        },
        {
            name: "3号楼1单元",
            code: "06378269142948710103"
        },
    ]
}
export default {
    'post|http://172.31.1.62:5003/api/v1/device/getDeviceCountData':  option => {
        console.log(option)
        return realequip
    },
    'post|http://172.31.1.62:5003/api/v1/device/getDeviceLocationData':  option => {
        console.log(option)
        return fbtj
    },
    'post|http://172.31.1.62:5003/api/v1/thingOps/exception/top':  option => {
        console.log(option)
        return ycgf
    },
    'post|http://172.31.1.62:5003/api/v1/thingOps/statistics':  option => {
        console.log(option)
        return yccz
    },
    'post|http://172.31.1.62:5003/api/v1/device/categories':  option => {
        console.log(option)
        return lxsl
    },
    'get|http://172.31.1.62:5003/api/v1/device/installAddrsss/bySpaceCode':  option => {
        console.log(option)
        return AAAA
    },
    'post|http://172.31.1.62:5003/api/v1/device/installAddrsss':  option => {
        console.log(option)
        return AAA
    },
    'post|http://172.31.1.62:5003/api/v1/device':  option => {
        console.log(option)
        return sblb
    },
    'get|http://172.31.1.62:5003/api/v1/dictionary/device/type':  option => {
        console.log(option)
        return sblx
    },
    'get|http://172.31.1.62:5003/api/v1/device/':  option => {
        console.log(option)
        return sbxq
    },
    'get|http://172.31.1.62:5003/api/v1/thingOps/thing/':  option => {
        console.log(option)
        return ywjl
    },
    'get|http://172.31.1.62:5003/api/v1/senseAlarm/thing/':  option => {
        console.log(option)
        return sbbj
    },
    'get|http://172.31.1.62:5003/api/v1/dictionary/device/opsType':  option => {
        console.log(option)
        return bjlx
    },
    'post|http://172.31.1.62:5003/api/v1/thingOps/newOps':  option => {
        console.log(option)
        return newops
    },
    }