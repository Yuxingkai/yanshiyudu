
  let peopleAlarm = {//实时预警详情
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "alarmTypeName": "吸毒人员连续3天未出门报警",
        "state": "已处理",
        "alarmTime": "2020-11-18 17:58:51",
        "images": [
            ""
        ],
        "address": "",
        "alarmHistoryContent": [
            {
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
            }
        ],
        "deviceInfo": {// 设备信息
            "name": "11号楼",
            "productBrand": "特斯联",
            "installAddr": null
        },
        "peopleInfo": {
            name: '牛亚明', // 姓名
            nation: '汉', // 民族
            educationCode: '硕士', // 教育程度
            credentialNo: 'xxx', // 证件号码
            domiclle: 'xx', // 户籍地
            gender: '男', // 性别
            poitical: '团员', // 政治面貌
            maritalStatus: 'wei婚', // 婚姻状况
            birthDate: '1995-03-08', // 出生日期
            phoneNo: '13122223333', // 联系方式
            headPic: 'http://31.0.178.231:10020/blueplus/people/130104197801102413-2019-03-16-14-02-51.jpg', // 头像
            domiclleDetailAddress: '浦东新区凌四小区', // 户籍详细地址
            tags: ['老人'], // 标签,
            lastAccessTime: "2020-11-18 17:58:51"
        }, // 人员信息
    }
}
let pAlarm ={
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "totalCount": 963,
        "result": [
            {
                "_id": "5fb4efa677ed34603e2368bc",
                "title": "一甲", // 标题
                "tags": "关爱人员", // 标签
                "address": "凌四小区", // 地址
                "description": "吸毒人员管控", // 描述信息
                "alarmTime": "2020-11-19 01:51:29", // 报警信息
                "state": "已超时", // 状态
                "images": ['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3135215632,750931275&amp;fm=26&amp;gp=0.jpg'], // 图片
                "type": "device"
            },
            {
                "_id": "5fb4ee5777ed34603e23633e",
                "title": "门未关",
                "tags": "",
                "address": "",
                "description": "丁香园",
                "alarmTime": "2020-11-19 01:47:48",
                "state": "已超时",
                "images": []
,
                "type": "device"
            },
            {
                "_id": "5fb4ee4877ed34603e236306",
                "title": "门未关",
                "tags": "",
                "address": "",
                "description": "丁香园",
                "alarmTime": "2020-11-19 01:47:32",
                "state": "已超时",
                "images": []
,
                "type": "device"
            }
        ]
    }
}
let carAlarm ={
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    data: {
        "totalCount": 963,
        result: [
            {
                "_id": "5fb4efa677ed34603e2368bc",
                "title": "门未关", // 标题
                "tags": "", // 标签
                "address": "", // 地址
                "description": "丁香园", // 描述信息
                "alarmTime": "2020-11-19 01:51:29", // 报警信息
                "state": "已超时", // 状态
                "images": [], // 图片
                "type": "device"
            },
            {
                "_id": "5fb4ee5777ed34603e23633e",
                "title": "门未关",
                "tags": "",
                "address": "",
                "description": "丁香园",
                "alarmTime": "2020-11-19 01:47:48",
                "state": "已超时",
                "images": []
,
                "type": "device"
            },
            {
                "_id": "5fb4ee4877ed34603e236306",
                "title": "门未关",
                "tags": "",
                "address": "",
                "description": "丁香园",
                "alarmTime": "2020-11-19 01:47:32",
                "state": "已超时",
                "images": []
,
                "type": "device"
            }
        ]
    }
}
let house  = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
   
 "data":{
    "list":[
        {
            "_id": "5fb60b4d77ed34603e278b8e",
            "thirdLogID": "41867d802a2d11ebb4c8674aec5bc551",
            "alarmTypeName": "门未关",
                //报警类型名称
            "alarmType": "doorOpen",
                    // //报警类型
            "thingCode": "",
            "thingType": "",
            "spaceCode": "310104011013001",
          //houseCode          
            "sceneName": "",
            "sceneType": "",
            "alarmLevel": 1,
            "alarmLevelName": "一级报警",
            "alarmCount": 3,
            "alarmHistoryContent": [
                {
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
                }
            ],
            "alarmCurrentContent": {
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
            "alarmState": 0,
              //处理状态 0-未处理，1-误报，2-确认，3-解除， 4-已接单，5-人为
            "isDeal": 0,
            "address": "",
            //报警地址--房屋地址
            "processedTime": "2020-11-19 14:05:40",
    //处理时间
            "processDeadline": null,
            "longitude": 0,
            "latitude": 0,
            "alarmTime": "2020-11-19 14:05:40",
    //报警时间
            "eventPics": [
            //报警图片
                ""
            ],
            "eventPicsSource": [
                ""
            ],
            "eventSource": 1,
            "insertTime": "2020-11-19 14:06:05",
            "updateTime": "2020-11-19 14:49:02",
            "virtualSpaceCode": "310104011013001",
            "virtualSpaceName": "田林十二村"
            //小区名称
        },
        {
            "_id": "5fb60b4d77ed34603e278b8e",
            "thirdLogID": "41867d802a2d11ebb4c8674aec5bc551",
            "alarmTypeName": "疑似群租-同张卡连续3天每天通行超过10次",
                //报警类型名称
            "alarmType": "ysqz_lxtx",
                    // //报警类型
            "thingCode": "",
            "thingType": "",
            "spaceCode": "310104011013001",
          //houseCode          
            "sceneName": "",
            "sceneType": "",
            "alarmLevel": 1,
            "alarmLevelName": "一级报警",
            "alarmCount": 3,
            "alarmHistoryContent": [
                {
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
                }
            ],
            "alarmCurrentContent": {
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
            "alarmState": 0,
              //处理状态 0-未处理，1-误报，2-确认，3-解除， 4-已接单，5-人为
            "isDeal": 0,
            "address": "",
            //报警地址--房屋地址
            "processedTime": "2020-11-19 14:05:40",
    //处理时间
            "processDeadline": null,
            "longitude": 0,
            "latitude": 0,
            "alarmTime": "2020-11-19 14:05:40",
    //报警时间
            "eventPics": [
            //报警图片
                ""
            ],
            "eventPicsSource": [
                ""
            ],
            "eventSource": 1,
            "insertTime": "2020-11-19 14:06:05",
            "updateTime": "2020-11-19 14:49:02",
            "virtualSpaceCode": "310104011013001",
            "virtualSpaceName": "田林十二村"
            //小区名称
        },
        {
            "_id": "5fb60b4d77ed34603e278b8e",
            "thirdLogID": "41867d802a2d11ebb4c8674aec5bc551",
            "alarmTypeName": "	疑似空置",
                //报警类型名称
            "alarmType": "yskz_lxtx",
                    // //报警类型
            "thingCode": "",
            "thingType": "",
            "spaceCode": "310104011013001",
          //houseCode          
            "sceneName": "",
            "sceneType": "",
            "alarmLevel": 1,
            "alarmLevelName": "一级报警",
            "alarmCount": 3,
            "alarmHistoryContent": [
                {
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
                }
            ],
            "alarmCurrentContent": {
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
            "alarmState": 0,
              //处理状态 0-未处理，1-误报，2-确认，3-解除， 4-已接单，5-人为
            "isDeal": 0,
            "address": "",
            //报警地址--房屋地址
            "processedTime": "2020-11-19 14:05:40",
    //处理时间
            "processDeadline": null,
            "longitude": 0,
            "latitude": 0,
            "alarmTime": "2020-11-19 14:05:40",
    //报警时间
            "eventPics": [
            //报警图片
                ""
            ],
            "eventPicsSource": [
                ""
            ],
            "eventSource": 1,
            "insertTime": "2020-11-19 14:06:05",
            "updateTime": "2020-11-19 14:49:02",
            "virtualSpaceCode": "310104011013001",
            "virtualSpaceName": "田林十二村"
            //小区名称
        }
    ]
    ,
    "alarmNum": 14        //报警总数
    }
}
let houseAccess = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            "_id": "5fb6215f77ed34603e27e216",
            "thirdLogID": "6c5854902a3a11eb87ef4962c6380cf9",
            "thingCode": "310104011013010113460044",
            "spaceCode": "3101040110130010044",
            "peopleName": "阙嘉怡",
            //姓名
            "peopleType": 1,
                
            "cardNo": "67FC9835042302E0",
            "credentialType": 99,
            "credentialNo": "310112201105227821",        //证件号
            "credentialSymbol": "99_310112201105227821",
            "phoneNo": "13816896796",
    //手机号
            "openType": 0,
        //开门方式 100101-刷门禁卡开门100201-人脸识别开门100301-手机蓝牙开门100302-手机远程开门100303-电话按键开门100401-出门按钮开门100402-键盘密码开门100501-身份证开门100601-访客呼叫开门100701-二维码开门
            "openTime": "2020-11-19 15:39:59",
    //开门时间
            "openResult": 0,
            "faceUrl": "",
            "bkgUrl": "",
            "inOutType": 0,
            "headFeature": 0,
            "age": 0,
            "topTextures": 0,
            "bottomStyle": 0,
            "bag": 0,
            "topColor": 0,
            "bottomColor": 0,
            "carryonItem": 0,
            "hairStyle": 0,
            "topStyle": 0,
            "shoeStyle": 0,
            "shoeColor": 0,
            "address": "",
                    //通行位置
            "rowTime": "2020-11-19 15:40:15",
            "virtualSpaceCode": "310104011013001"
        }
    ]
}
let carAccess = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            "_id": "5fc0b13d5b2751e3eac8597a",
            "thirdLogID": "fa22f270308511ebb03e7511b03ae3bf",
            "thingCode": "",
            "spaceCode": "310104011013001101",
            "plateNo": "沪AFP9031",
        //车牌号
            "peopleName": "一甲",
            //驾驶人   没有则为陌生人
            "credentialType": 0,
            "credentialNo": "",
            "credentialSymbol": "",
            "phoneNo": "12345",
            "captureTime": "2020-11-27 07:56:22",
            //抓拍时间
            "platePic": "Car/20201127/082f9397-3b1b-4e09-920a-b57c7afce9d7.jpg",
        //抓拍大图
            "minPlatePic": "Car/20201127/7cad4456-a19a-48e1-9f2e-9bb9f70e7c67.jpg",    //抓拍小图
            "inOutType": 2,
            "carAttitude": 0,
            "size": 0,
            "bodyColor": 0,
            "specialVehicles": 0,
            "marker": 0,
            "plateType": 0,
            "plateColor": 0,
            "address": "田林",
            //抓拍地址
            "rowTime": "2020-11-27 15:56:45",
            "virtualSpaceCode": "310104011013001",
            "ioCode": "",
            "ioName": "田林12村停车场"
,
            "type": "临时车辆"
        }
    ]
}
let newOps = {
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
                "state": "已超时",// 处置状态（中文）未处理/已超时/已处理
                "deviceTypeName": "门禁", // 设备类型
                "deviceType": "access", // 设备类型英文名
            }
        ]
    }
}
let equipAlarm = {
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
                "sceneName": "", // 感知名称
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
                "processedTime": "2020-11-05 23:35:06", // 处置时间
                "alarmTime": "2020-11-05 23:35:06", // 报警产生时间
                "name": "8号楼", // 设备名称
                "installAddr": null // 安装地址
            },
        ]
    }
}
let peopleAccess = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            "_id": 3,
            "peopleName": "住户1",        //人名
            "credentialNo": "1",
    //证件号
            "openType": 100102,
    //开门方式：100101-刷门禁卡开门100201-人脸识别开门100301-手机蓝牙开门100302-手机远程开门100303-电话按键开门100401-出门按钮开门100402-键盘密码开门100501-身份证开门100601-访客呼叫开门100701-二维码开门
            "phoneNo": "phone1",
            "inOutType": 1,
            "openResult": 1,
            "openTime": "2020-11-06 05:33:26",
    //开门时间
            "labelNames": "标签1,标签2,关爱人员-下属1",      //标签名
             "houseAddress": "住户地址1110001-楼栋01-房屋1",
    //居住地址
            "faceUrl":""    //图片
        }
    ]
}
let realEvent = {
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
                "tags": "", // 标签
                "address": "", // 地址
                "description": "丁香园", // 描述信息
                "alarmTime": "2020-11-19 01:51:29", // 报警信息
                "state": "已超时", // 状态
                "images": [], // 图片
                "type": "people"
            },
            {
                "_id": "5fb4ee5777ed34603e23633e",
                "title": "摄像机离线",
                "tags": "",
                "address": "",
                "description": "丁香园",
                "alarmTime": "2020-11-19 01:47:48",
                "state": "已超时",
                "images": []
,
                "type": "device"
            },
            {
                "_id": "5fb4ee4877ed34603e236306",
                "title": "设备",
                "tags": "",
                "address": "",
                "description": "丁香园",
                "alarmTime": "2020-11-19 01:47:32",
                "state": "已超时",
                "images": []
,
                "type": "device"
            }
        ]
    }
}
let eachPeople = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        
        "houseDetail": [
        //房屋信息
            {
                "spaceUsingType": 2,
    //1- 自住 2- 出租 3- 办公
                "villageName": "test002",
    //小区名
                "houseName": "1110001-楼栋01-单元01-房间01"
    //房间名
            }
        ],
        "plateNo": "沪A96N05,沪KE0372",
    //车牌号
        "houseNum": 2,
            //房间数量
        "peopleInfo": [
            //人员信息
            {
                "peopleID": "f370e8a3d978df2c16e9831b9b3d8c7f",
                "peopleName": "牛亚明",
                "credentialType": 1,    //证件种类：1-身份证 2-护照
                "genderCode": 1,
 //性别：1:女性 2:男性 3:未知'    
                "birthDate": "1978-01-10",
    //生日
                "nationCode":"nationCode" ,      //民族代码
                "domiclleDetailAddress": null,
    //户籍地详细地址
                "phoneNo": "15900636979",
    //手机号
                "idPic": "http://31.0.178.231:10020/blueplus/people/130104197801102413-2019-03-16-14-02-51.jpg",
    //证件照
                "headPic": null,
    //头像照
                "livePic": null    //生活照
            }
        ],
        "accessNum": 2,
    //通行记录数量
        "countAccessThingNum": 1,
    //通行门禁数量
        "faceNum": 0,
        //抓拍记录
        "relationshipInfo": [
        //同户关系
            {
                "credentialNo": "130104197801102413",
    //证件号
                "peopleName": "牛亚明",
        //住户名
                "spaceOwnerRelation": 1,
                "headPic": '' //图片
    //同户主关系: 1-主人，2-配偶，3-儿子，4-儿媳，5-女儿，6-女婿，7-孙子／外孙，8-孙女／外孙女，9-孙媳妇／外孙媳妇，10-孙女婿／外孙女婿，11-父母，12-公婆，13-岳父母，14-祖父母／外祖父母，15-兄弟姐妹，16-其他亲属，17-员工，21-租客，99-其他'
                
            },
            {
                "credentialNo": "130104197801102413",
    //证件号
                "peopleName": "牛er明",
        //住户名
                "spaceOwnerRelation": 2,
                "headPic": '' //图片
    //同户主关系: 1-主人，2-配偶，3-儿子，4-儿媳，5-女儿，6-女婿，7-孙子／外孙，8-孙女／外孙女，9-孙媳妇／外孙媳妇，10-孙女婿／外孙女婿，11-父母，12-公婆，13-岳父母，14-祖父母／外祖父母，15-兄弟姐妹，16-其他亲属，17-员工，21-租客，99-其他'
                
            },
            {
                "credentialNo": "130104197801102413",
    //证件号
                "peopleName": "牛xiao明",
        //住户名
                "spaceOwnerRelation": 3,
                "headPic": '' //图片
    //同户主关系: 1-主人，2-配偶，3-儿子，4-儿媳，5-女儿，6-女婿，7-孙子／外孙，8-孙女／外孙女，9-孙媳妇／外孙媳妇，10-孙女婿／外孙女婿，11-父母，12-公婆，13-岳父母，14-祖父母／外祖父母，15-兄弟姐妹，16-其他亲属，17-员工，21-租客，99-其他'
                
            }
        ]
    }
}
let equipdetail = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
            "thingID": "008b1be8981911eaa2af0242ac160002", // 设备ID
            "name": "门禁", // 设备名称
            "typeName": "门禁", // 设备类型
            "productModel": "", // 型号
            "prducetBrand": "", // 设备厂家
            "installAddr": "田林三村", // 安装位置
            "isDisable": "禁用", // 是否禁用，直接返回“禁用”，“启用”字段
            "manufactorName": "特斯联", // 维护单位
            "installTime":'2019.01.28 13:20:00', // 安装时间
            "extend": { // 拓展字段
                "ip": null, // ip地址
                "mac": "DC2C26004947", // mac地址
                "port": null, // 端口
                "altitude": "0.2", // 安装高度
                "useType": "监控摄像机" // 设备功能类型 1 -监控摄像机 2-人脸卡口摄像机 3-车辆卡口摄像机 4-门禁人脸摄像机 5-单元门禁机 6-围墙机 7-闸机 8-车库门 9-垃圾箱门
            },
            "runTime": "12天5小时10分", // 运行时间
            "state": "故障", // 状态
        }
}
  export default {
    'post|/api/b':  option => {
        console.log(option)
        return pAlarm
    },
     'post|/api/a':  option => {
         console.log(option)
         if(option.body == "people") {
     
            return peopleAlarm
         }
         if(option.body == "device") {
     
            return carAlarm
         }
         if(option.body == "vehicle") {
     
            return carAlarm
         }
         return peopleAlarm
     },
     'post|/api/v1/situationalAnalysis/houseAlarmList':  option => {
        console.log(option)
        return house
        },

    'post|/api/v1/situationalAnalysis/houseAlarmAccess':  option => {
            console.log(option)
            return houseAccess
        },
        //车辆通行记录
    //  'post|/api/v1/situationalAnalysis/parkingLog':  option => {
    //         console.log('车辆通行假数据')
    //         return carAccess
    //     },
                //设备列表
     'post|/api/v1/thingOps/newOps':  option => {
        console.log('设备列表假数据')
        return newOps
    },
    //设备报警记录
    'get|/api/v1/senseAlarm/thing':  option => {
        console.log('设备报警记录')
        return equipAlarm
    },
    //当前通行人次
    'post|/api/v1/peopleAccess':  option => {
            console.log('当前通行人次')
            return peopleAccess
        },
    //实有事件
    'post|/api/v1/realEvent':  option => {
        console.log('实有事件')
        return realEvent
        },
            //一人一档
    'post|/api/v1/eachPeople':  option => {
        console.log('一人一档')
        return eachPeople
        },
    'get|/api/v1/equipdetail':  option => {
            console.log('一人一档')
            return equipdetail
            },
    }