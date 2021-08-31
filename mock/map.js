//map##地图中央-通行出入口显示数据
let A = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            "code": "1110001-出入口1-设备1",
        //设备code
            "name": "1110001-出入口1-设备1",
    //设备名称
            "thingID": "1",
                                    //设备id
            "accessArray": [
                    //该设备下的通行数据
                {
                    "_id": "5fbccd3b6701f9ed6f89a8c2",
                    "thirdLogID": "9007d6402e3111ebb4c8674aec5bc551",
                    "thingCode": "1110001-出入口1-设备1",
        //设备code
                    "spaceCode": "3101040110130010001",
                    "peopleName": "刘新伟",
    //名字
                    "peopleType": 2,
                    "cardNo": "284FB3B4022302E0",
                    "credentialType": 99,
                    "credentialNo": "370785199010051810",
                    "credentialSymbol": "99_370785199010051810",
                    "phoneNo": "17621370650",
                    "openType": 0,
                    "openTime": "2020-11-24 16:46:36",
        //通行时间
                    "openResult": 0,
                    "faceUrl": "http://10.1.247.6:9000/blueplus/people/1587778106370217337.jpeg",
                    "bkgUrl": "http://10.1.247.6:9000/blueplus/people/1587778106370241027.jpeg",
                    "inOutType": 0,
                    "headFeature": 0,
                    "age": 30,
                    "address": "田林十二村东边门进",
            //通行地址
                    "rowTime": "2020-11-24 17:07:07",
                    "virtualSpaceCode": "310104011013001"
,
                     "labelName": "关爱人员-下属1"        //标签
                }
            ],
            "faceArray": [
                //该设备下的抓拍数据
                {
                    "_id": "5fbcca596701f9ed6f89062c",
                    "thirdLogID": "042ef1c02e3211eb87ef4962c6380cf9",
                    "thingCode": "1110001-出入口1-设备1",
                    "spaceCode": "",
                    "peopleName": "",
                    "credentialType": 0,
                    "credentialNo": "",
                    "credentialSymbol": "",
                    "phoneNo": "",
                    "faceCaptureTime": "2020-11-24 16:49:49",
                    "faceUrl": "http://31.0.223.16:9000/blueplus/facecapture/access/2020/11/24/039040c12e3211eb87ef4962c6380cf9-1606207790.jpeg",
                    "bkgUrl": "",
                    "faceSimilarity": 0,
                    "snapUUid": "",
                    "faceRect": "",
                    "inOutType": 0,
                    "headFeature": 0,
                    "age": 0,
                    "address": "",
                    "rowTime": "2020-11-24 16:54:49",
                    "virtualSpaceCode": ""
                }
            ],
        
            "alarmArray": [            //人口预警列表
                {
                    "_id": "5fbce970d9bfb66bb1445e16",
                    "thirdLogID": "64ca82702e4011eba1977b503307d447",
                    "alarmTypeName": "门未关",
                    "alarmType": "doorOpen",
                    "thingCode": "1110001-出入口1-设备1",
                    "thingType": "",
                    "spaceCode": "",
                    "sceneName": "",
                    "sceneType": "",
                    "alarmLevel": 1,
                    "alarmLevelName": "一级报警",
                    "alarmCount": 1,
                    "alarmHistoryContent": [
                        {
                            "processID": "0",
                            "processName": "发现",
                            "processContent": "案件类型：%!V(string=门禁感知模型) /n发现时间：%!V(string=2020-11-24 18:37:08)/n发现地点：%!V(string=)",
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
                            ],
                            "processTime": "2020-11-24 18:37:08"
                        }
                    ],
                    "alarmCurrentContent": {
                        "processID": "0",
                        "processName": "发现",
                        "processContent": "案件类型：%!V(string=门禁感知模型) /n发现时间：%!V(string=2020-11-24 18:37:08)/n发现地点：%!V(string=)",
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
                        ],
                        "processTime": "2020-11-24 18:37:08"
                    },
                    "alarmState": 0,
                    "isDeal": 0,
                    "address": "",
                    "processedTime": "2020-11-24 08:23:21",
                    "processDeadline": null,
                    "longitude": 0,
                    "latitude": 0,
                    "alarmTime": "2020-11-24 08:23:21",
                    "eventPics": [
                        ""
                    ],
                    "eventPicsSource": [
                        ""
                    ],
                    "eventSource": 1,
                    "insertTime": "2020-11-24 19:07:28",
                    "updateTime": "2020-11-24 19:07:28",
                    "virtualSpaceCode": "",
                    "peopleInfo": {
                        "userName": "",
                        "credentialType": 0,
                        "credentialNo": ""
                    },
                "labelName": "关爱人员-下属1"
                }
            ]
        }
    ]
}
//##地图中央-通行出入口显示数据-实时通行分页
let B = {     "responseStatus": {
    "resultCode": 0,
    "successMessage": true
},
"data": {
    "totalCount": 122,
    "result": [
        {
            "_id": "5fbe47cba182379660eefd52",
            "thirdLogID": "064a4a102f1611eb87ef4962c6380cf9",
            "thingCode": "1110001-出入口1-设备1",
            "spaceCode": "3101040110130010009",
            "peopleName": "严如宏",
    //人名
            "peopleType": 1,
            "cardNo": "636A1513972102E0",
            "credentialType": 99,
            "credentialNo": "310110197311128822",
            "credentialSymbol": "99_310110197311128822",
            "phoneNo": "13916418734",
            "openType": 100101,
//开门方式：100101-刷门禁卡开门100201-人脸识别开门100301-手机蓝牙开门100302-手机远程开门100303-电话按键开门100401-出门按钮开门100402-键盘密码开门100501-身份证开门100601-访客呼叫开门100701-二维码开门
            "openTime": "2020-11-25 20:02:01",
    //开门时间
            "openResult": 0,
            "faceUrl": "http://31.0.178.231:10020/blueplus/people/Import_310110197311128822.jpg",
                //照片
            "bkgUrl": "",
            "inOutType": 0,
            "headFeature": 0,
            "age": 47,
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
        //地址
            "rowTime": "2020-11-25 20:02:19",
            "virtualSpaceCode": "310104011013001"
,
         "labelName": "关爱人员-下属1"        //标签名
        },        
        {
            "_id": "5fbe47cba182379660eefd52",
            "thirdLogID": "064a4a102f1611eb87ef4962c6380cf9",
            "thingCode": "1110001-出入口1-设备1",
            "spaceCode": "3101040110130010009",
            "peopleName": "严如宏",
    //人名
            "peopleType": 1,
            "cardNo": "636A1513972102E0",
            "credentialType": 99,
            "credentialNo": "310110197311128822",
            "credentialSymbol": "99_310110197311128822",
            "phoneNo": "13916418734",
            "openType": 100101,
//开门方式：100101-刷门禁卡开门100201-人脸识别开门100301-手机蓝牙开门100302-手机远程开门100303-电话按键开门100401-出门按钮开门100402-键盘密码开门100501-身份证开门100601-访客呼叫开门100701-二维码开门
            "openTime": "2020-11-25 20:02:01",
    //开门时间
            "openResult": 0,
            "faceUrl": "http://31.0.178.231:10020/blueplus/people/Import_310110197311128822.jpg",
                //照片
            "bkgUrl": "",
            "inOutType": 0,
            "headFeature": 0,
            "age": 47,
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
        //地址
            "rowTime": "2020-11-25 20:02:19",
            "virtualSpaceCode": "310104011013001"
,
         "labelName": "关爱人员-下属1"        //标签名
        },
        {
            "_id": "5fbe47cba182379660eefd52",
            "thirdLogID": "064a4a102f1611eb87ef4962c6380cf9",
            "thingCode": "1110001-出入口1-设备1",
            "spaceCode": "3101040110130010009",
            "peopleName": "严如宏",
    //人名
            "peopleType": 1,
            "cardNo": "636A1513972102E0",
            "credentialType": 99,
            "credentialNo": "310110197311128822",
            "credentialSymbol": "99_310110197311128822",
            "phoneNo": "13916418734",
            "openType": 100101,
//开门方式：100101-刷门禁卡开门100201-人脸识别开门100301-手机蓝牙开门100302-手机远程开门100303-电话按键开门100401-出门按钮开门100402-键盘密码开门100501-身份证开门100601-访客呼叫开门100701-二维码开门
            "openTime": "2020-11-25 20:02:01",
    //开门时间
            "openResult": 0,
            "faceUrl": "http://31.0.178.231:10020/blueplus/people/Import_310110197311128822.jpg",
                //照片
            "bkgUrl": "",
            "inOutType": 0,
            "headFeature": 0,
            "age": 47,
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
        //地址
            "rowTime": "2020-11-25 20:02:19",
            "virtualSpaceCode": "310104011013001"
,
         "labelName": "关爱人员-下属1"        //标签名
        },
        {
            "_id": "5fbe47cba182379660eefd52",
            "thirdLogID": "064a4a102f1611eb87ef4962c6380cf9",
            "thingCode": "1110001-出入口1-设备1",
            "spaceCode": "3101040110130010009",
            "peopleName": "严如宏",
    //人名
            "peopleType": 1,
            "cardNo": "636A1513972102E0",
            "credentialType": 99,
            "credentialNo": "310110197311128822",
            "credentialSymbol": "99_310110197311128822",
            "phoneNo": "13916418734",
            "openType": 100101,
//开门方式：100101-刷门禁卡开门100201-人脸识别开门100301-手机蓝牙开门100302-手机远程开门100303-电话按键开门100401-出门按钮开门100402-键盘密码开门100501-身份证开门100601-访客呼叫开门100701-二维码开门
            "openTime": "2020-11-25 20:02:01",
    //开门时间
            "openResult": 0,
            "faceUrl": "http://31.0.178.231:10020/blueplus/people/Import_310110197311128822.jpg",
                //照片
            "bkgUrl": "",
            "inOutType": 0,
            "headFeature": 0,
            "age": 47,
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
        //地址
            "rowTime": "2020-11-25 20:02:19",
            "virtualSpaceCode": "310104011013001"
,
         "labelName": "关爱人员-下属1"        //标签名
        },
        {
            "_id": "5fbe47cba182379660eefd52",
            "thirdLogID": "064a4a102f1611eb87ef4962c6380cf9",
            "thingCode": "1110001-出入口1-设备1",
            "spaceCode": "3101040110130010009",
            "peopleName": "严如宏",
    //人名
            "peopleType": 1,
            "cardNo": "636A1513972102E0",
            "credentialType": 99,
            "credentialNo": "310110197311128822",
            "credentialSymbol": "99_310110197311128822",
            "phoneNo": "13916418734",
            "openType": 100101,
//开门方式：100101-刷门禁卡开门100201-人脸识别开门100301-手机蓝牙开门100302-手机远程开门100303-电话按键开门100401-出门按钮开门100402-键盘密码开门100501-身份证开门100601-访客呼叫开门100701-二维码开门
            "openTime": "2020-11-25 20:02:01",
    //开门时间
            "openResult": 0,
            "faceUrl": "http://31.0.178.231:10020/blueplus/people/Import_310110197311128822.jpg",
                //照片
            "bkgUrl": "",
            "inOutType": 0,
            "headFeature": 0,
            "age": 47,
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
        //地址
            "rowTime": "2020-11-25 20:02:19",
            "virtualSpaceCode": "310104011013001"
,
         "labelName": "关爱人员-下属1"        //标签名
        },
        {
            "_id": "5fbe47cba182379660eefd52",
            "thirdLogID": "064a4a102f1611eb87ef4962c6380cf9",
            "thingCode": "1110001-出入口1-设备1",
            "spaceCode": "3101040110130010009",
            "peopleName": "严如宏",
    //人名
            "peopleType": 1,
            "cardNo": "636A1513972102E0",
            "credentialType": 99,
            "credentialNo": "310110197311128822",
            "credentialSymbol": "99_310110197311128822",
            "phoneNo": "13916418734",
            "openType": 100101,
//开门方式：100101-刷门禁卡开门100201-人脸识别开门100301-手机蓝牙开门100302-手机远程开门100303-电话按键开门100401-出门按钮开门100402-键盘密码开门100501-身份证开门100601-访客呼叫开门100701-二维码开门
            "openTime": "2020-11-25 20:02:01",
    //开门时间
            "openResult": 0,
            "faceUrl": "http://31.0.178.231:10020/blueplus/people/Import_310110197311128822.jpg",
                //照片
            "bkgUrl": "",
            "inOutType": 0,
            "headFeature": 0,
            "age": 47,
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
        //地址
            "rowTime": "2020-11-25 20:02:19",
            "virtualSpaceCode": "310104011013001"
,
         "labelName": "关爱人员-下属1"        //标签名
        },
        {
            "_id": "5fbe47cba182379660eefd52",
            "thirdLogID": "064a4a102f1611eb87ef4962c6380cf9",
            "thingCode": "1110001-出入口1-设备1",
            "spaceCode": "3101040110130010009",
            "peopleName": "严如宏",
    //人名
            "peopleType": 1,
            "cardNo": "636A1513972102E0",
            "credentialType": 99,
            "credentialNo": "310110197311128822",
            "credentialSymbol": "99_310110197311128822",
            "phoneNo": "13916418734",
            "openType": 100101,
//开门方式：100101-刷门禁卡开门100201-人脸识别开门100301-手机蓝牙开门100302-手机远程开门100303-电话按键开门100401-出门按钮开门100402-键盘密码开门100501-身份证开门100601-访客呼叫开门100701-二维码开门
            "openTime": "2020-11-25 20:02:01",
    //开门时间
            "openResult": 0,
            "faceUrl": "http://31.0.178.231:10020/blueplus/people/Import_310110197311128822.jpg",
                //照片
            "bkgUrl": "",
            "inOutType": 0,
            "headFeature": 0,
            "age": 47,
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
        //地址
            "rowTime": "2020-11-25 20:02:19",
            "virtualSpaceCode": "310104011013001"
,
         "labelName": "关爱人员-下属1"        //标签名
        }
    ]
}
}
//##地图中央-通行出入口显示数据-人口预警分页
let C = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "totalCount": 1,
        "result": [
            {
                "_id": "5fbf0b69a182379660f1987b",
                "thirdLogID": "7b4756f02f8911eba019733ed042083b",
                "alarmTypeName": "老人紧急报警",
    //预警类型
                "alarmType": "agedSos",
                "thingCode": "1110001-出入口1-设备1",
        //预警设备code
                "thingType": "",
                "spaceCode": "31010401303701",
                "sceneName": "",
                "sceneType": "",
                "alarmLevel": 1,
                "alarmLevelName": "一级报警",
                "alarmCount": 2,
                "alarmHistoryContent": [
                    {
                        "processID": "0",
                        "processName": "发现",
                        "processContent": "案件类型：门禁感知模型/n发现时间：2020-11-26 09:56:55/n发现地点：长丰坊",
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
                        ],
                        "processTime": "2020-11-26 09:56:55"
                    }
                ],
                "alarmCurrentContent": {
                    "processID": "0",
                    "processName": "发现",
                    "processContent": "案件类型：门禁感知模型/n发现时间：2020-11-26 09:56:55/n发现地点：长丰坊",
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
                    ],
                    "processTime": "2020-11-26 09:56:55"
                },
                "alarmState": 0,
    //处理状态  0-未处理，1-误报，2-确认，3-解除， 4-已接单，5-人为
                "isDeal": 0,
                "address": "",
            //预警地址
                "processedTime": "2020-11-26 09:48:21",
                "processDeadline": null,
                "longitude": 0,
                "latitude": 0,
                "alarmTime": "2020-11-26 09:48:21",
        //预警时间
                "eventPics": [
                    //照片
                    ""
                ],
                "eventPicsSource": [
                    ""
                ],
                "eventSource": 1,
                "insertTime": "2020-11-26 09:56:57",
                "updateTime": "2020-11-26 09:56:57",
                "virtualSpaceCode": "31010401303701",
                "peopleInfo": {
                    "userName": "",
                    //人名
                    "credentialType": 0,
                    "credentialNo": "1"
                },
                "labelName": "关爱人员-下属1"
            //标签
            }
        ]
    }
}
//##地图中央-通行出入口显示数据-实时抓拍分页
let D = {   "responseStatus": {
    "resultCode": 0,
    "successMessage": true
},
"data": [
    {
        "_id": "5fbf0d9ca182379660f1a084",
        "thirdLogID": "ef06ec202f8b11eb82a2b3820ed48b4d",
        "thingCode": "1110001-出入口1-设备1",
        "spaceCode": "3101040110130010066",
        "peopleName": "",
    //名字
        "credentialType": 0,
        "credentialNo": "",
    //证件号
        "credentialSymbol": "",
        "phoneNo": "",
        "faceCaptureTime": "2020-11-26 10:05:57",
    //抓拍时间
        "faceUrl": "/blueplus/facecapture/access/2020/11/26/eeb7bab02f8b11eb82a2b3820ed48b4d-1606356361.jpeg",
        //照片
        "bkgUrl": "",
        "faceSimilarity": 0,
        "snapUUid": "",
        "faceRect": "",
        "inOutType": 1,
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
        "address": "66号楼门外",
            //抓拍地址
        "rowTime": "2020-11-26 10:06:20",
        "virtualSpaceCode": "31010416010028"
    }
]
}
let buildD = {"responseStatus":{"resultCode":0,"successMessage":true},"data":{"name":"寿比33号","picUrl":"","totalHouseCount":0,"totalPeopleCount":0,"zhongdianCount":0,"guanaiCount":0,"dangyuanCount":0,"rentCount":0,"freeCount":0,"selfCount":0,"workCount":0,"houses":[]}}
  export default {
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/getFaceLog':  option => {
        console.log(option)
        return A
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/accessPointInfoAccess':  option => {
        console.log(option)
        return B
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/accessPointInfoAlarm':  option => {
        console.log(option)
        return C
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/accessPointInfoFace':  option => {
        console.log(option)
        return D
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/buildingInfo':  option => {
        console.log(option)
        return E
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/buildUnitList':  option => {
        console.log(option)
        return F
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/buildUnitInfoList':  option => {
        console.log(option)
        return G
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/buildUnitInfoListInfo':  option => {
        console.log(option)
        return H
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/carInoutInfoDetail':  option => {
        console.log(option)
        return II
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/carInoutInfo':  option => {
        console.log(option)
        return I
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/parkingCurrentInfo':  option => {
        console.log(option)
        return J
    },
    'post|http://172.31.1.62:5003/api/v1/virtualSpace/getChildVirtualSpaces':  option => {
        console.log(option)
        return K
    },
    'post|http://172.31.1.62:5003/api/v1/virtualSpace/villageMapConfig':  option => {
        console.log(option)
        return M
    },
    'post|http://172.31.1.62:5003/api/v1/virtualSpace/searchVirtualSpaces':  option => {
      console.log(option)
      return N
    },
    'post|http://172.31.1.62:5003/api/v1/virtualSpace/getAllVirtualSpaces':  option => {
        console.log(option)
        return O
    },
    'post|http://172.31.1.62:5003/api/v1/houses/getHousesByBuildingCode':  option => {
        console.log(option)
        return buildD
    },
    }

    // --------------------------------------------------------
    // ##地图 楼栋撒点
    let E = {"responseStatus":{"resultCode":0,"successMessage":true},"data":[{"relationID":"76610b599915bca41e07d663fefcfedc","parentCode":"500103014008000","parentType":0,"usingType":1,"name":"红岩村185号","longitude":106.48914,"latitude":29.5521,"picUrl":"","fence":null,"code":"201106231108597136225593141108","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2021-01-24 23:19:48","updateTime":"2021-01-24 23:19:48","superVirtualCode":"500103014008000"},{"relationID":"529163c659e0a0c833a43bd01ef87d10","parentCode":"500103014008000","parentType":0,"usingType":1,"name":"红岩村181号","longitude":106.48935,"latitude":29.55193,"picUrl":"","fence":null,"code":"201106231110084431204592266954","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2021-01-24 23:19:48","updateTime":"2021-01-24 23:19:48","superVirtualCode":"500103014008000"},{"relationID":"2fcc335e166b826175d9c34081a4624d","parentCode":"500103014008000","parentType":0,"usingType":1,"name":"红岩村183号","longitude":106.48951,"latitude":29.55206,"picUrl":"","fence":null,"code":"201106231110111342792124913621","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2021-01-24 23:19:48","updateTime":"2021-01-24 23:19:48","superVirtualCode":"500103014008000"},{"relationID":"b2250cfb93787960ab9f25751e217884","parentCode":"500103014008000","parentType":0,"usingType":1,"name":"红岩村178号","longitude":106.4891,"latitude":29.55176,"picUrl":"","fence":null,"code":"201106231111287749946839325593","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2021-01-24 23:19:48","updateTime":"2021-01-24 23:19:48","superVirtualCode":"500103014008000"},{"relationID":"4b03cb441856f60d612534153cfd9799","parentCode":"500103014008000","parentType":0,"usingType":1,"name":"红岩村184号","longitude":106.48902,"latitude":29.55197,"picUrl":"","fence":null,"code":"201106231118080357173501158750","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2021-01-24 23:19:48","updateTime":"2021-01-24 23:19:48","superVirtualCode":"500103014008000"},{"relationID":"cda2d015d82a61431935c5993f392d6e","parentCode":"500103014008000","parentType":0,"usingType":1,"name":"红岩村182号","longitude":106.48942,"latitude":29.55201,"picUrl":"","fence":null,"code":"201106231119341527696148623560","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2021-01-24 23:19:48","updateTime":"2021-01-24 23:19:48","superVirtualCode":"500103014008000"},{"relationID":"10d5a6603ac5c2275d8def36754b98d2","parentCode":"500103014008000","parentType":0,"usingType":1,"name":"红岩村180号","longitude":106.48925,"latitude":29.55188,"picUrl":"","fence":null,"code":"201106231126570922591500089295","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2021-01-24 23:19:48","updateTime":"2021-01-24 23:19:48","superVirtualCode":"500103014008000"},{"relationID":"52a1a93743c7a0444f9e7efa8c6c5d9f","parentCode":"500103014008000","parentType":0,"usingType":1,"name":"红岩村179号","longitude":106.48918,"latitude":29.55181,"picUrl":"","fence":null,"code":"201106231127354815332351783071","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2021-01-24 23:19:48","updateTime":"2021-01-24 23:19:48","superVirtualCode":"500103014008000"},{"relationID":"888bba835048c309605139ff6717e651","parentCode":"500103014008000","parentType":0,"usingType":1,"name":"红岩村177号","longitude":106.48947,"latitude":29.55176,"picUrl":"","fence":null,"code":"201106231134377831453337735339","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2021-01-24 23:19:48","updateTime":"2021-01-24 23:19:48","superVirtualCode":"500103014008000"},{"relationID":"a5ce0f47fba13f261c114066becc52db","parentCode":"500103014008000","parentType":0,"usingType":1,"name":"红岩村174号","longitude":106.4892,"latitude":29.55158,"picUrl":"","fence":null,"code":"500103080007592012020815353095","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2021-01-24 23:19:48","updateTime":"2021-01-24 23:19:48","superVirtualCode":"500103014008000"},{"relationID":"2cd6c0ee4744a1ca26dbbafeca7b848b","parentCode":"500103014008000","parentType":0,"usingType":1,"name":"红岩村175号","longitude":106.4893,"latitude":29.55165,"picUrl":"","fence":null,"code":"500103080007592012020815361017","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2021-01-24 23:19:48","updateTime":"2021-01-24 23:19:48","superVirtualCode":"500103014008000"},{"relationID":"7e96552eaf5e745556d182ce16d245fd","parentCode":"500103014008000","parentType":0,"usingType":1,"name":"红岩村176号","longitude":106.48936,"latitude":29.55171,"picUrl":"","fence":null,"code":"500103080007592012020815363993","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2021-01-24 23:19:48","updateTime":"2021-01-24 23:19:48","superVirtualCode":"500103014008000"}]}
   E = {"responseStatus":{"resultCode":0,"successMessage":true},"data":[{"relationID":"5bb5c5abc36649d2b6e1a8d013603b54","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东77、75号","longitude":116.4001538679,"latitude":39.9385059781,"picUrl":"","fence":null,"code":"11010100300801001","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"38360087f0774fd5ae8cee2db5fde943","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东79号","longitude":116.4001218391,"latitude":39.9386579666,"picUrl":"","fence":null,"code":"11010100300801002","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"df61efe1fe8f48a7b1a0625070b24f68","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东81号","longitude":116.40012682,"latitude":39.938818961,"picUrl":"","fence":null,"code":"11010100300801003","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"3715687c3ca74d89afb294e48b92a45a","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东83号","longitude":116.4001217981,"latitude":39.9389789538,"picUrl":"","fence":null,"code":"11010100300801004","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"43dfa31c5984475086beb7113cab544f","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东84号","longitude":116.4001057723,"latitude":39.9391439445,"picUrl":"","fence":null,"code":"11010100300801005","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"2ef1b728d38b46deb8fe26712268a15a","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东85号","longitude":116.3998267472,"latitude":39.9387199164,"picUrl":"","fence":null,"code":"11010100300801006","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"4151da1ef7e54cb7b28a9eac8235a68a","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东86、88号","longitude":116.3998317317,"latitude":39.9388519119,"picUrl":"","fence":null,"code":"11010100300801007","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"9d92092f126a4ea3a36beb98b36fc40e","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东87号","longitude":116.3998367201,"latitude":39.9389539086,"picUrl":"","fence":null,"code":"11010100300801008","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"73d3607124564f39bf02bcca59830aa8","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东89号","longitude":116.3998317055,"latitude":39.9390569037,"picUrl":"","fence":null,"code":"11010100300801009","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"695845363a7647b086f4fa7364506d9a","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东91、93号","longitude":116.3998206784,"latitude":39.9392458945,"picUrl":"","fence":null,"code":"11010100300801010","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"f7acf506767946248024b052859db483","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东92号","longitude":116.3994506452,"latitude":39.9387358605,"picUrl":"","fence":null,"code":"11010100300801011","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"bde98287895d49d68f81ce9564c71ccc","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东94号","longitude":116.3995576528,"latitude":39.9388928694,"picUrl":"","fence":null,"code":"11010100300801012","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"fd0ccdbfabb44acba3ff551ef416ae86","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东96号","longitude":116.399155554,"latitude":39.9388798159,"picUrl":"","fence":null,"code":"11010100300801013","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"00613bd0f529442689e69610786e5674","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东97号","longitude":116.3995256256,"latitude":39.9390408589,"picUrl":"","fence":null,"code":"11010100300801014","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"6f35727f2fd94a3ba2bd21df27d6bc3b","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东98号","longitude":116.3991665382,"latitude":39.9390238115,"picUrl":"","fence":null,"code":"11010100300801015","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"563ea252d53b424e84c303ceebdd93f6","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东99号","longitude":116.3995366127,"latitude":39.9391638556,"picUrl":"","fence":null,"code":"11010100300801016","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"50dd2082a57e4b778ed0ed53ecb4b292","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东105号","longitude":116.399171522,"latitude":39.9391598067,"picUrl":"","fence":null,"code":"11010100300801017","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"1a0a19fca135402b915c0b39f8ef0d7c","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东109号","longitude":116.3995315935,"latitude":39.9393038493,"picUrl":"","fence":null,"code":"11010100300801018","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"5a25ba89c12540eca0e6923e2f3863f3","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东70号","longitude":116.3991314949,"latitude":39.9392977962,"picUrl":"","fence":null,"code":"11010100300801019","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"781c3190a48946409a0689b726979c67","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东100号","longitude":116.400119778,"latitude":39.9391319474,"picUrl":"","fence":null,"code":"11010100300801020","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"17797adf01934aa8a7450ee5a441cde5","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东3号","longitude":116.4007530113,"latitude":39.9388440743,"picUrl":"","fence":null,"code":"11010100300801021","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"c1020f032b8842ef81421d6615ca4425","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东11号","longitude":116.4008280424,"latitude":39.9387950911,"picUrl":"","fence":null,"code":"11010100300801022","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"2f6529c1199347a7aeae657fe9b4d471","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东13号","longitude":116.4012041588,"latitude":39.9388941654,"picUrl":"","fence":null,"code":"11010100300801023","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"39b56981fc784ad7896e89860d6dfb2b","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东21号","longitude":116.4017403502,"latitude":39.9389432859,"picUrl":"","fence":null,"code":"11010100300801024","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"b0dfbf55f5554faa8c00ec6dcbeff396","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东25号","longitude":116.4009360943,"latitude":39.9386721178,"picUrl":"","fence":null,"code":"11010100300801025","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"1e88697a3cf542dea03ad520db5abdc5","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东27号","longitude":116.4010861311,"latitude":39.9387871444,"picUrl":"","fence":null,"code":"11010100300801026","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"3aba7a5218d04bd4a753e60bac2f8865","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东35号","longitude":116.4011181474,"latitude":39.9387461528,"picUrl":"","fence":null,"code":"11010100300801027","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"01e5a7c357be4c7fa91f5cc4fd4590c5","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东37号","longitude":116.4008610502,"latitude":39.9388200967,"picUrl":"","fence":null,"code":"11010100300801028","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"99493f8cfa4243a380709b036d928b2b","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东45号","longitude":116.4016333157,"latitude":39.9388942624,"picUrl":"","fence":null,"code":"11010100300801029","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"8ed1166569904b90ab4a73fbd022a4e8","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东49号","longitude":116.4016553409,"latitude":39.9387622728,"picUrl":"","fence":null,"code":"11010100300801030","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"2d58290b514d43798531afb6fa781507","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东51号","longitude":116.401601289,"latitude":39.9390092503,"picUrl":"","fence":null,"code":"11010100300801031","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"a9ee4ea34c614f1eb95b6496459cc21e","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东53号","longitude":116.4002278445,"latitude":39.9388609766,"picUrl":"","fence":null,"code":"11010100300801032","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"2224c90111974d75bf7503cc7122235b","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东57号","longitude":116.4006249644,"latitude":39.9388860478,"picUrl":"","fence":null,"code":"11010100300801033","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"a923e85e33b34720b1174e2788e2f617","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东63号","longitude":116.4006889736,"latitude":39.9389760565,"picUrl":"","fence":null,"code":"11010100300801034","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"3fa8382c306d445c95fb6d54151c341c","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东61号","longitude":116.4005709377,"latitude":39.9389600346,"picUrl":"","fence":null,"code":"11010100300801035","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"2188c4c4546b41e28644788516e143c9","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东55号","longitude":116.3999807388,"latitude":39.9391239247,"picUrl":"","fence":null,"code":"11010100300801036","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"36677150996e4c49816372b20568a480","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东59号","longitude":116.4001628195,"latitude":39.9389059636,"picUrl":"","fence":null,"code":"11010100300801037","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"fc3e003b8da44e8f8af19cb7200ee0e3","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东65号","longitude":116.4010320903,"latitude":39.9389601262,"picUrl":"","fence":null,"code":"11010100300801038","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"f0e3f77d348741b59847bf033ed4850d","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东67号","longitude":116.4007430121,"latitude":39.9388120736,"picUrl":"","fence":null,"code":"11010100300801039","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"c2759ad2619f45388efe2bc3f6a659ed","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东69号","longitude":116.4013761984,"latitude":39.9390671964,"picUrl":"","fence":null,"code":"11010100300801040","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"251e6032bae047f7befff7bf3c65656f","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东73号","longitude":116.4001627989,"latitude":39.9390669572,"picUrl":"","fence":null,"code":"11010100300801041","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"2ec7c268613e4d00a1f5aa887250e5fc","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东71号","longitude":116.4010861552,"latitude":39.9385981519,"picUrl":"","fence":null,"code":"11010100300801042","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"698f50247d2b493083441cbb9933f49c","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东15号","longitude":116.4011071237,"latitude":39.9389021443,"picUrl":"","fence":null,"code":"11010100300801043","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"9fd3ef103427459ca410e8e78dcb3cd1","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东17号","longitude":116.4000237879,"latitude":39.9388359432,"picUrl":"","fence":null,"code":"11010100300801044","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"8bbfb9c1332e407eaf65dfa0994f32da","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东19号","longitude":116.400861088,"latitude":39.9385241085,"picUrl":"","fence":null,"code":"11010100300801045","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"6a589b5795b44eaa9a3d28c2a406ccae","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东39号","longitude":116.4011661695,"latitude":39.9387051647,"picUrl":"","fence":null,"code":"11010100300801047","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"8b4f8b49e7664beea0c7484e6fee3cbe","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东41号","longitude":116.3999377308,"latitude":39.9390909191,"picUrl":"","fence":null,"code":"11010100300801048","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"98b7a14fd834407fa2cbcdfcd61b45dd","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东57号","longitude":116.4006349467,"latitude":39.9390500432,"picUrl":"","fence":null,"code":"11010100300801050","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"d25171fea752451dafee4905e1ba2a77","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东59号","longitude":116.4005389317,"latitude":39.9389270299,"picUrl":"","fence":null,"code":"11010100300801051","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"108627bb1de549cd941f67785fc5821f","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东61号","longitude":116.4001738253,"latitude":39.9388859663,"picUrl":"","fence":null,"code":"11010100300801052","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"7598f5cd9fb545a29d1e9e9b1a6059cd","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东63号","longitude":116.4000017533,"latitude":39.9390579308,"picUrl":"","fence":null,"code":"11010100300801053","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"a330cd6310f94b4d91fc83f438252232","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东65号","longitude":116.3993155806,"latitude":39.9389758327,"picUrl":"","fence":null,"code":"11010100300801054","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"cfaacc537177488396b1df4c6e178768","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东43号","longitude":116.3997877153,"latitude":39.9388859038,"picUrl":"","fence":null,"code":"11010100300801055","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"d5727c69d7254758b1f05d79363707de","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东29号","longitude":116.4000878221,"latitude":39.9387129587,"picUrl":"","fence":null,"code":"11010100300801056","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"35b38945024441cab12a8e85d001f769","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东31号","longitude":116.4002698487,"latitude":39.9389269813,"picUrl":"","fence":null,"code":"11010100300801057","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"344d1264d96841b99bf3988cf74559b3","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东33号","longitude":116.3999157214,"latitude":39.9391159146,"picUrl":"","fence":null,"code":"11010100300801058","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"1384b0d8597b495f8f37d8df853677cc","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东23号","longitude":116.3994976003,"latitude":39.9391818493,"picUrl":"","fence":null,"code":"11010100300801059","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"782d8bec02cb4ccb9b22f1eb0e1d1f8c","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东2号","longitude":116.3994115679,"latitude":39.9392638341,"picUrl":"","fence":null,"code":"11010100300801060","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"88435fa1c7564a64b996de6d06651cf5","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东3号","longitude":116.3997656684,"latitude":39.9392058876,"picUrl":"","fence":null,"code":"11010100300801061","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"0535461ed7ac4d0085f8bef91ef44d6f","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东4号","longitude":116.3997226776,"latitude":39.9390418877,"picUrl":"","fence":null,"code":"11010100300801062","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"1583077ae371454e84082381f86385c7","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东6号","longitude":116.3996046188,"latitude":39.9392558617,"picUrl":"","fence":null,"code":"11010100300801063","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"0ae82d6ff1d44dbc9a74fc58225fddb5","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东8号","longitude":116.3994225727,"latitude":39.9392478363,"picUrl":"","fence":null,"code":"11010100300801064","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"9e263d742cac43059f43e1326aafb617","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东10号","longitude":116.3999697199,"latitude":39.939247918,"picUrl":"","fence":null,"code":"11010100300801065","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"4db2415387ce4aeea46c5298f146f003","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东14号","longitude":116.3998086938,"latitude":39.9390988985,"picUrl":"","fence":null,"code":"11010100300801066","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"fda90f2a1ea348ef8e5a4263fe0dbc79","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东16号","longitude":116.3999587127,"latitude":39.939279915,"picUrl":"","fence":null,"code":"11010100300801067","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"fd3ce77fe76640bea27713f3b2d4451f","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东18号","longitude":116.4000017617,"latitude":39.9389919334,"picUrl":"","fence":null,"code":"11010100300801068","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"210c701e82d8497987b4aa71d774cd00","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东20号","longitude":116.4004308812,"latitude":39.9390580048,"picUrl":"","fence":null,"code":"11010100300801069","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"5837699d45e14c51b14bbfbc82300073","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东22号","longitude":116.3998837125,"latitude":39.9391159095,"picUrl":"","fence":null,"code":"11010100300801070","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"bd940cd1b299475abf996b93d6385572","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东24号","longitude":116.3999156983,"latitude":39.9392969074,"picUrl":"","fence":null,"code":"11010100300801071","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"776270fe53ca42baafaaacc6e2ec7cfb","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东26号","longitude":116.3999807367,"latitude":39.9391409241,"picUrl":"","fence":null,"code":"11010100300801072","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"38b6aa698e554bab84f6303765e03d49","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东28号","longitude":116.4002918784,"latitude":39.9387459923,"picUrl":"","fence":null,"code":"11010100300801073","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"8e4530d8804544758c1274dc9e4418d1","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东30号","longitude":116.4003668635,"latitude":39.9390419939,"picUrl":"","fence":null,"code":"11010100300801074","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"aa5ac75900304f788b3c73a01d7177c7","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东32号","longitude":116.4002698424,"latitude":39.9389759793,"picUrl":"","fence":null,"code":"11010100300801075","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"3f0743fed2fe480f951d67ff76fb2168","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东34号","longitude":116.4001518093,"latitude":39.9389599596,"picUrl":"","fence":null,"code":"11010100300801076","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"8bfd360dccd641c5ae6af0a6e59191b6","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东38号 ","longitude":116.3997126896,"latitude":39.9389268907,"picUrl":"","fence":null,"code":"11010100300801077","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"d9fbbb4d15bd41ddb04d422c77dd86af","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东40号 ","longitude":116.3998837104,"latitude":39.9391319089,"picUrl":"","fence":null,"code":"11010100300801078","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"e771e018621d478cabd05dc6f00e5455","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东42号","longitude":116.3999807399,"latitude":39.939115925,"picUrl":"","fence":null,"code":"11010100300801079","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"4f90e1d3eb0746a193ea58b93c95df17","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东44号","longitude":116.4000237522,"latitude":39.9391159321,"picUrl":"","fence":null,"code":"11010100300801080","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"3b03b36b86024fd1bf1eec5341344d41","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东46号","longitude":116.399636664,"latitude":39.9389678778,"picUrl":"","fence":null,"code":"11010100300801081","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"bd6361598adc4d1a816ab2ca9f7a95b6","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东50号","longitude":116.4000237301,"latitude":39.9392889252,"picUrl":"","fence":null,"code":"11010100300801082","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"ec7ff24757b343fd926cdc6fc58c98fe","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东52号","longitude":116.3992075258,"latitude":39.9391978098,"picUrl":"","fence":null,"code":"11010100300801083","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"1b8b96583a4046f1afa9a2b66a08ef1c","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东54号","longitude":116.4006569516,"latitude":39.9390670467,"picUrl":"","fence":null,"code":"11010100300801084","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"9b153f6db3314d429339496da7d0def7","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东56号","longitude":116.4000557593,"latitude":39.9391319367,"picUrl":"","fence":null,"code":"11010100300801085","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"885abca2e0264afaaf1fea485aa42f7e","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东58号","longitude":116.4003238431,"latitude":39.9390989839,"picUrl":"","fence":null,"code":"11010100300801086","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"35c64a039bfe4ca483cd7ddd9c54b869","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东60号","longitude":116.4001847887,"latitude":39.9391979558,"picUrl":"","fence":null,"code":"11010100300801087","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"0a986d9d74f142a3991834d3c5cf596c","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东62号","longitude":116.3996586341,"latitude":39.9392478699,"picUrl":"","fence":null,"code":"11010100300801088","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"41b747715b83479c860454b07c1e7c7b","parentCode":"11010100300801","parentType":0,"usingType":1,"name":"鼓东64号","longitude":116.3993685528,"latitude":39.939296827,"picUrl":"","fence":null,"code":"11010100300801089","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300801"},{"relationID":"1ef8b0b9a75d42fbb0fe5934a9fcd6d0","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"17号","longitude":116.3985976313,"latitude":39.9372988159,"picUrl":"","fence":null,"code":"11010100300802001","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"4e2edd3f712641f582a9f53f17fef2de","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"19号","longitude":116.3986626144,"latitude":39.937537813,"picUrl":"","fence":null,"code":"11010100300802002","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"2568433af34a4063be123c3fc23c511d","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"21号","longitude":116.3981045222,"latitude":39.9374057674,"picUrl":"","fence":null,"code":"11010100300802003","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"5047a5b43fa04a79a8913543d8779b13","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"25号","longitude":116.3985226117,"latitude":39.9373318072,"picUrl":"","fence":null,"code":"11010100300802004","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"a7e3ce91d6b5457a8ba4953dc6d07c78","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"85号","longitude":116.3993707968,"latitude":39.9373899033,"picUrl":"","fence":null,"code":"11010100300802005","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"f405c372a4a449feac5e91f48acbf50e","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"41号","longitude":116.4010552756,"latitude":39.9375711864,"picUrl":"","fence":null,"code":"11010100300802006","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"818ac7ae262a4750bd0c4a0dbceac63b","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"后圆恩寺1号","longitude":116.4011123467,"latitude":39.9371692145,"picUrl":"","fence":null,"code":"11010100300802007","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"6afc16eb2eff4c1aa755556eaf30375f","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"后圆恩寺4号","longitude":116.4011873605,"latitude":39.9372672266,"picUrl":"","fence":null,"code":"11010100300802008","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"3b086871b72d41da8b67d67766ac5622","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"后圆恩寺3号","longitude":116.4007581639,"latitude":39.9376621224,"picUrl":"","fence":null,"code":"11010100300802009","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"7d3664418586486eb942b742fe993d5d","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"后圆恩寺6号","longitude":116.4009302633,"latitude":39.93733317,"picUrl":"","fence":null,"code":"11010100300802010","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"1724d95647f14e22ba6d96c11d253299","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"后圆恩寺18号","longitude":116.4009732284,"latitude":39.9377201634,"picUrl":"","fence":null,"code":"11010100300802011","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"7d4fda148adc42dd8bca2bf726dbd5c9","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"后圆恩寺15号","longitude":116.4009302265,"latitude":39.9376211585,"picUrl":"","fence":null,"code":"11010100300802012","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"f3a6a43068364542b233953e24f06007","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿5号1号楼","longitude":116.4020054394,"latitude":39.9390573467,"picUrl":"","fence":null,"code":"11010100300802025","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"ae6e174e3b2b4738a0ce48b2262d0229","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿5号2号楼","longitude":116.4016613187,"latitude":39.9389542666,"picUrl":"","fence":null,"code":"11010100300802026","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"bb25d667d8484bb591753419f7ef587f","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿3号","longitude":116.3994488406,"latitude":39.9372019215,"picUrl":"","fence":null,"code":"11010100300802027","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"9ad63c1e2f7d4f52924f665353917d1d","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿4号","longitude":116.3993418136,"latitude":39.9372019069,"picUrl":"","fence":null,"code":"11010100300802028","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"d85c14ee25e648a9b0965171ab1c3890","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿甲5号","longitude":116.3991057091,"latitude":39.9375718619,"picUrl":"","fence":null,"code":"11010100300802029","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"8ac50ec35c5c4e02a9296f16bbab4dcb","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿8号","longitude":116.3987836382,"latitude":39.9375548252,"picUrl":"","fence":null,"code":"11010100300802030","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"1bdfd4aa5c53413f803b711133398b3d","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿10号","longitude":116.3986976406,"latitude":39.9373908225,"picUrl":"","fence":null,"code":"11010100300802031","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"b8388a342acb463fa10146df31437d19","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿12号","longitude":116.3979784757,"latitude":39.9375957502,"picUrl":"","fence":null,"code":"11010100300802032","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"1582ca3e9f92474894c74db4f9a90d55","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿14号","longitude":116.3980965489,"latitude":39.9371847756,"picUrl":"","fence":null,"code":"11010100300802033","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"951b9732666f4c4b821388247a6725f7","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿16号","longitude":116.3978924715,"latitude":39.9375137473,"picUrl":"","fence":null,"code":"11010100300802034","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"9b9170ddda1e4d0b9941e1b1f944b1a0","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿18号","longitude":116.3980965395,"latitude":39.9372587726,"picUrl":"","fence":null,"code":"11010100300802035","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"72ad5b8d70f444efa3855f03ec5b24d6","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿20号","longitude":116.3999959812,"latitude":39.9372590016,"picUrl":"","fence":null,"code":"11010100300802036","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"3fd9260e9d9e4ddface598dada5f16f2","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿22号","longitude":116.4016815499,"latitude":39.9372023413,"picUrl":"","fence":null,"code":"11010100300802037","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"ca525a0b3e4b4d8284c3a4e2bf402128","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿51号","longitude":116.4017565756,"latitude":39.9372263583,"picUrl":"","fence":null,"code":"11010100300802038","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"15dea4d2d6d74a35938dd8d11574a789","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿101号","longitude":116.4011123173,"latitude":39.9373992053,"picUrl":"","fence":null,"code":"11010100300802039","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"f58c8824f7174c85a66f8753a25ef6a7","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿103号","longitude":116.4017995512,"latitude":39.9375473559,"picUrl":"","fence":null,"code":"11010100300802040","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"3e55a138918e4d15a9d9646c299949ac","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿105号","longitude":116.4016385053,"latitude":39.9374243222,"picUrl":"","fence":null,"code":"11010100300802041","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"ccaedcd2b0184e8b997ae0f8f4e69a71","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿107号","longitude":116.3997169037,"latitude":39.9372589579,"picUrl":"","fence":null,"code":"11010100300802042","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"ca02488a6edf417d927b6a1d76334a87","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿53号","longitude":116.3998348918,"latitude":39.9376049621,"picUrl":"","fence":null,"code":"11010100300802043","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"552ee1e4838647fa97e3e2ed2ee1c8b3","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿55号","longitude":116.4010152533,"latitude":39.9376381754,"picUrl":"","fence":null,"code":"11010100300802044","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"89defdb7f42c4887aa5e8ed900a3a141","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿57号","longitude":116.3994488092,"latitude":39.9374479117,"picUrl":"","fence":null,"code":"11010100300802045","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"c4cf5efa0e384ffaa4665bb014c0c0cc","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿59号","longitude":116.3993848139,"latitude":39.9372839095,"picUrl":"","fence":null,"code":"11010100300802046","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"6f184634c1a2457b8ae766cc05926f7f","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿61号","longitude":116.4004440835,"latitude":39.9375050691,"picUrl":"","fence":null,"code":"11010100300802047","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"d99f075bb2db4454938c8554109d18e8","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿63号","longitude":116.3990696977,"latitude":39.9375948565,"picUrl":"","fence":null,"code":"11010100300802048","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"d6199dfba78f49a89c4ce97b8a62ced0","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿69号","longitude":116.3996708589,"latitude":39.9375129409,"picUrl":"","fence":null,"code":"11010100300802049","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"570a8287dcbc4e1ba85cc355cbd1a8a2","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿75号","longitude":116.3994668023,"latitude":39.9375379106,"picUrl":"","fence":null,"code":"11010100300802050","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"b4cdd432f88449deadc9fa8fb8603fa2","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿79号","longitude":116.3989836893,"latitude":39.9375048498,"picUrl":"","fence":null,"code":"11010100300802051","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"c58d9f1fdadf4c7f9b4fe2306327b65b","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿83号","longitude":116.3987056404,"latitude":39.9374058228,"picUrl":"","fence":null,"code":"11010100300802052","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"c615355fcbac4014b2448282dc2184e7","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿65号","longitude":116.3986946423,"latitude":39.9373728229,"picUrl":"","fence":null,"code":"11010100300802053","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"7ef2045752c646fba5dbd51d5d158fd9","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿67号","longitude":116.3984265577,"latitude":39.9376037872,"picUrl":"","fence":null,"code":"11010100300802054","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"1677714834204313a980574cc3274d4a","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿73号","longitude":116.3991987441,"latitude":39.9374718775,"picUrl":"","fence":null,"code":"11010100300802055","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"16ffe4dbd7d84268994540a492a5ac58","parentCode":"11010100300802","parentType":0,"usingType":1,"name":"菊儿甲77号","longitude":116.3983725503,"latitude":39.9375787832,"picUrl":"","fence":null,"code":"11010100300802056","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300802"},{"relationID":"102cc1c454674ec5a4a1f5284987b89d","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"交南7号","longitude":116.3993827103,"latitude":39.938090877,"picUrl":"","fence":null,"code":"11010100300803001","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"c43a60d5b90a4b428d89720f590567f3","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"交南9号","longitude":116.4016043721,"latitude":39.9383672766,"picUrl":"","fence":null,"code":"11010100300803002","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"c122f40fa63d4e23b7d9824a311e5267","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"交南11号","longitude":116.4009011289,"latitude":39.9383091251,"picUrl":"","fence":null,"code":"11010100300803003","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"b8bd980125d742e5b1b269beae12dd1f","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"交南13号","longitude":116.401668401,"latitude":39.9383302932,"picUrl":"","fence":null,"code":"11010100300803004","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"2d92e82e39a049e2a0628d8810f6da06","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比4号","longitude":116.3993076701,"latitude":39.9382598602,"picUrl":"","fence":null,"code":"11010100300803005","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"5b0717bee1274fedabb41f76e7f8c3eb","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比5号","longitude":116.398470489,"latitude":39.9382107671,"picUrl":"","fence":null,"code":"11010100300803006","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"5f7670026e56487ca80b72987e1bdd0c","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比6号","longitude":116.398341386,"latitude":39.9388187309,"picUrl":"","fence":null,"code":"11010100300803007","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"36635f8e122940f6b773a2dab4606dd2","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比7号","longitude":116.397311145,"latitude":39.93937864,"picUrl":"","fence":null,"code":"11010100300803008","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"420fe9ada0c141ed89e8fe71a1b91b28","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比9号","longitude":116.3982133049,"latitude":39.9392637021,"picUrl":"","fence":null,"code":"11010100300803009","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"a38fd008a5934cada22fa6486f410a2f","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比11号","longitude":116.4005950221,"latitude":39.9383590631,"picUrl":"","fence":null,"code":"11010100300803010","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"0a9cc713df8c4bf5b624bdc64bc2c7e1","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比13号","longitude":116.3996297673,"latitude":39.9381449096,"picUrl":"","fence":null,"code":"11010100300803011","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"a8d97a44b2294f949068a64ebbee0dc1","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比17号","longitude":116.3975263962,"latitude":39.9376507194,"picUrl":"","fence":null,"code":"11010100300803012","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"562d8ab0f24c4b7385a4902c18d0fbbb","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比19号","longitude":116.3995657568,"latitude":39.9380949023,"picUrl":"","fence":null,"code":"11010100300803013","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"e37a48fa1cb44cf6ae7416ebeeef5649","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比21号","longitude":116.3974193638,"latitude":39.9377827087,"picUrl":"","fence":null,"code":"11010100300803014","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"e29990e279a14dda808f68343f121bbd","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比23号","longitude":116.3991576547,"latitude":39.9380948474,"picUrl":"","fence":null,"code":"11010100300803015","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"397f0d27d0a542eba4ea38f9cecbbf39","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比25号","longitude":116.3988355533,"latitude":39.9383088008,"picUrl":"","fence":null,"code":"11010100300803016","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"70f2082a143e4098b7b3e97aaed82221","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比27号","longitude":116.3974623511,"latitude":39.9379307049,"picUrl":"","fence":null,"code":"11010100300803017","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"38b98d2a9d214dab9355b1c2bbe30acb","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比31号","longitude":116.3984064574,"latitude":39.9383587552,"picUrl":"","fence":null,"code":"11010100300803018","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"c2b8072b13c346bfbd61f4696b05ad92","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比33号","longitude":116.3972902389,"latitude":39.9386216693,"picUrl":"","fence":null,"code":"11010100300803019","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"3352a6d58b084e468818b4623320e3b9","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比35号","longitude":116.3977193311,"latitude":39.9383917009,"picUrl":"","fence":null,"code":"11010100300803020","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"bdd4e9a2f3db46f2bb16050a1b631ad8","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比42号","longitude":116.397719266,"latitude":39.9389016806,"picUrl":"","fence":null,"code":"11010100300803021","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"2236fb7ca178487e810f6b9c31404315","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比44号","longitude":116.3973332384,"latitude":39.9386706692,"picUrl":"","fence":null,"code":"11010100300803022","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"ccb3e88c0fbe4e75921d992014319970","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比46号","longitude":116.3976122788,"latitude":39.9386706834,"picUrl":"","fence":null,"code":"11010100300803023","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"d13382f661be48d9bb74b26c03b61c7c","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"寿比48号","longitude":116.4001079129,"latitude":39.9380479886,"picUrl":"","fence":null,"code":"11010100300803024","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"e7aaaf7214bd460b9d53100b6bdbc292","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"交南29号","longitude":116.4014823294,"latitude":39.9383452492,"picUrl":"","fence":null,"code":"11010100300803025","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"408586a808c342a2a887de4dca8054fb","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"南锣鼓巷8号","longitude":116.3980262877,"latitude":39.9391336924,"picUrl":"","fence":null,"code":"11010100300803026","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"57492eb625a6471bb7008880b561ebee","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"南锣鼓巷9号","longitude":116.3984773914,"latitude":39.9389857368,"picUrl":"","fence":null,"code":"11010100300803027","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"e091eb2a08aa45cb9e43e3ccf8020586","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"南锣鼓巷12号","longitude":116.3998718013,"latitude":39.9383939364,"picUrl":"","fence":null,"code":"11010100300803028","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"f6287a83944d497d94fd713cbbad2b7a","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"南锣鼓巷10号","longitude":116.3989705392,"latitude":39.9386568023,"picUrl":"","fence":null,"code":"11010100300803029","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"2f7ca5c8ea1049e6a1ef4dd3edd73028","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"南锣鼓巷13号","longitude":116.3986054743,"latitude":39.9385417671,"picUrl":"","fence":null,"code":"11010100300803030","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"8b10e77249fd4042aadab2e7721656ba","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"南锣鼓巷15号楼房 ","longitude":116.3982193961,"latitude":39.9385577308,"picUrl":"","fence":null,"code":"11010100300803031","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"00eafe11f13b4d9babaf7182b7707204","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"南锣鼓巷15号平房","longitude":116.3981123954,"latitude":39.9384097279,"picUrl":"","fence":null,"code":"11010100300803032","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"0937cc0362444f7a8d8aa36728dfdd67","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"南锣鼓巷17号","longitude":116.3975753464,"latitude":39.9380977042,"picUrl":"","fence":null,"code":"11010100300803033","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"ab965e8974134748a6209a95ca7d5ee5","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"南锣鼓巷24号","longitude":116.3973392662,"latitude":39.9384596779,"picUrl":"","fence":null,"code":"11010100300803034","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"3163417a5314481c853e7a3b679e5e8a","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"南锣鼓巷27号","longitude":116.3973391655,"latitude":39.9392486464,"picUrl":"","fence":null,"code":"11010100300803035","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"},{"relationID":"50e1599d2ce74c68b46409c343d5a6f7","parentCode":"11010100300803","parentType":0,"usingType":1,"name":"南锣鼓巷41号","longitude":116.3977683051,"latitude":39.9386566934,"picUrl":"","fence":null,"code":"11010100300803036","gisType":1,"description":null,"extend":null,"creatorID":"c4754460401911ebaa4d00163e1c2899","updaterID":"c4754460401911ebaa4d00163e1c2899","insertTime":"2020-12-30 17:48:56","updateTime":"2020-12-30 17:48:56","superVirtualCode":"11010100300803"}]}
    // let E = {
    //     "responseStatus": {
    //         "resultCode": 0,
    //         "successMessage": true
    //     },
    //     "data": [
    //         {
    //             "relationID": "1",
    //             "parentCode": "1110001",
    //             "parentType": 0,
    //             "usingType": 1,
    //             "name": "1110001-楼栋01",
    //             longitude: "116.401855",
    //             latitude: "39.938439",
    //             "picUrl": "",
    //             "fence": null,
    //             "code": "1110001-楼栋01",
    //             "gisType": 1,
    //             "description": null,
    //             "extend": null,
    //             "creatorID": "1",
    //             "updaterID": "1",
    //             "insertTime": "2020-10-31 00:17:30",
    //             "updateTime": "2020-10-31 00:17:30"
    //         },
    //         {
    //             "relationID": "11",
    //             //标识
    //             "name": "1110002-楼栋01",
    //     //名称
    //     longitude: "116.400648",
    //     latitude: "39.937608",
    //         //纬度
    //             "picUrl": "",
    //         //图片地址
    //             "fence": null,
    //         //围栏
    //             "code": "1110002-楼栋01",
    //     //编码
    //             "gisType": 1,
    //         //坐标系 1-地球坐标系——WGS84、2-火星坐标系——GCJ-02、3-百度坐标系——BD-09
    //             "description": null,
    //     //简介
    //             "extend": null,
    //     //扩展内容
    //         },
    //         {
    //             "relationID": "2",
    //             "parentCode": "1110001",
    //             "parentType": 0,
    //             "usingType": 1,
    //             "name": "1110001-楼栋02",
    //             longitude: "116.400148",
    //             latitude: "39.937708",
    //             "picUrl": "",
    //             "fence": null,
    //             "code": "1110001-楼栋02",
    //             "gisType": 1,
    //             "description": null,
    //             "extend": null,
    //             "creatorID": "1",
    //             "updaterID": "1",
    //             "insertTime": "2020-10-31 00:18:13",
    //             "updateTime": "2020-10-31 00:18:13"
    //         },
    //         {
    //             "relationID": "3",
    //             "parentCode": "1110001",
    //             "parentType": 0,
    //             "usingType": 1,
    //             "name": "1110001-楼栋03",
    //             longitude: "116.400688",
    //             latitude: "39.937628",
    //             "picUrl": "",
    //             "fence": null,
    //             "code": "1110001-楼栋03",
    //             "gisType": 1,
    //             "description": null,
    //             "extend": null,
    //             "creatorID": "1",
    //             "updaterID": "1",
    //             "insertTime": "2020-10-31 00:18:40",
    //             "updateTime": "2020-10-31 00:18:40"
    //         }
    //     ]
    // }
    // ##地图-点击小区后二级页面-楼栋单元名称列表
    let F = {
        "responseStatus": {
            "resultCode": 0,
            "successMessage": true
        },
        "data": [
            {
                "name": "test0021110001-楼栋011110001-楼栋01-单元01",
            //名称
                "code": "1110001-楼栋01-单元01"
                //code
            },
            {
                "name": "test0021110001-楼栋011110001-楼栋01-单元02",
                "code": "1110001-楼栋01-单元02"
            },
            {
                "name": "test0021110001-楼栋021110001-楼栋02-单元01",
                "code": "1110001-楼栋02-单元01"
            },
            {
                "name": "test0021110001-楼栋021110001-楼栋02-单元02",
                "code": "1110001-楼栋02-单元02"
            }
        ]
    }
    //##地图-点击小区后二级页面-楼栋单元列表获取楼栋单元内信息(列表顶部统计)
    let G = {
        "responseStatus": {
            "resultCode": 0,
            "successMessage": true
        },
        "data": {
            "totalPeopleholds": 4,
            //总人数
            "dangyuanNum": 0,
        //党员数
            "zhongdianNum": 0,
        //重点人员数
            "guanaiNum": 0,
        //关爱人员数
            "rentInfo": 2,
            //出租数
            "freeInfo": 1,
        //闲置数，
            "totalHouseholds": 4    //总户数
        }
    }
    //##地图-点击小区后二级页面-楼栋单元列表获取楼栋单元内信息(列表详情)
    let H = {
        "responseStatus": {
            "resultCode": 0,
            "successMessage": true
        },
        "data": [
            {
                "houseID": "2",
            //房屋id
                "houseNo": "2",
        //房屋号
                "code": "1110001-楼栋01-单元01-房间01",    //房屋编码
                "spaceUsingType": 2,
        //房屋用途 //1- 自住 2- 出租 3- 办公    闲置
                "peopleNum": 3,
           //人数
                "guanai": 1,
            //关爱人数
                "zhongdian": 0,
        //重点人数
                "dangyuan": 0
        //党员人数
            }
        ]
    }
// -------------------
let I = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            "ioID": "1",
                                //出入口id
            "code": "1110001-出入口1",
    //出入口编码
            "name": "1110001-出入口1",
   //出入口名称
            "usingType": 1,
                        //出入口类型(1、围墙机出入口 2、普通出入口)
            "extend": null,
                            //扩展字段
            longitude: "116.401855",
            latitude: "39.938439",
        }
    ]
}

let carFlow = {}
// ##车辆出入口--地图点击出入口

let II = {   "responseStatus": {
    "resultCode": 0,
    "successMessage": true
},
"data": [
    {
        "code": "1110001-车辆出入口1-设备1",
        "name": "1110001-车辆出入口1-设备1",
        "thingID": "2",
        "parkingArray": [
            {
                "_id": "5fc0c7db5b2751e3eac8a4e4",
                "thirdLogID": "75596250309311ebb03e7511b03ae3bf",
                "thingCode": "1110001-车辆出入口1-设备1",
                "spaceCode": "310104011013001101",
                "plateNo": "沪BVB591",
                "peopleName": "",
                "credentialType": 0,
                "credentialNo": "",
                "credentialSymbol": "",
                "phoneNo": "",
                "captureTime": "2020-11-27 09:32:51",
                "platePic": "Car/20201127/85b1778c-8db7-49ee-99b8-057bf0768fe8.jpg",
                "minPlatePic": "Car/20201127/236727a5-7a29-44d0-8d03-a0821d1b29d7.jpg",
                "inOutType": 1,
                "carAttitude": 0,
                "size": 0,
                "bodyColor": 0,
                "specialVehicles": 0,
                "marker": 0,
                "plateType": 0,
                "plateColor": 0,
                "address": "",
                "virtualSpaceCode": "310104011013001",
                "ioCode": "",
                "ioName": "田林12村停车场"
            }
        ],
        "alarmArray": [],
        "labelName": "name1,name2",        //标签名
        "totalNum": 2
        //总抓拍数
    }
]
}
//##实时流量（地图中出现冒泡信息，点击冒泡弹出对应信息)
let J = {   "responseStatus": {
    "resultCode": 0,
    "successMessage": true
},
"data": [
    {
        "thingCode": "310104013027010113460077",
        "spaceCode": "310104011013001101",
        "plateNo": "沪ENE776",
        //车牌号
        "peopleName": "一甲",
                //人名
        "credentialType": 0,
        "credentialNo": "421381111111111",
        "credentialSymbol": "",
        "phoneNo": "",
        "captureTime": "2020-11-30 02:59:43",    //抓拍时间
        "platePic": "Car/20201130/81f85b34-998a-47b5-824a-4afb792bf7cd.jpg",
//抓拍照片
        "minPlatePic": "Car/20201130/38573ae5-7828-447b-884f-7dd3a51f1efd.jpg",
//抓拍小图
        "inOutType": 2,
        "carAttitude": 0,
        "size": 0,
        "bodyColor": 0,
        "specialVehicles": 0,
        "marker": 0,
        "plateType": 0,
        "plateColor": 1,
        "address": "凌四小区",
    //抓拍地址
        "rowTime": "2020-11-30 11:00:48",
        "expireAt": "2020-11-30 23:59:59",
        "virtualSpaceCode": "310104011013001",
        "ioCode": "",
         "deviceType": 'car',
        "ioName": "田林12村停车场",
        "device": [
            {
                "thingID": "01591f6dc93c11e99d920242ac160005",
//设备id
                "name": "84号楼",
                "code": "310104013027010113460077",
                "type": "access",
                "prducetBrand": "特斯联",
                "productModel": "A9",
                "productKey": null,
                "productSN": null,
                "manufactorName": null,
                "deviceImage": null,
                "sceneImage": null,
                "isInit": 0,
                "isDisable": 1,
                "isDelete": 0,
                "state": 1,
                "stateTime": "2020-08-04 19:50:48",
                "lastOnlineTime": null,
                "installAddr": null,
                "installTime": null,
                "expireTime": null,
                "level": 1,
                "extend": {
                    "ip": null,
                    "mac": "DC2C26004947",
                    "port": null
                },
            }
        ]
    }
]
}
//地图撒点（子级空间）
let K = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            "relationID": "fb7eae237e594dc6a4e431897a8f9c4d",
            "parentCode": "11010100300802033",
 
            "parentType": 1,
            "usingType": 1,
            "name": "1单元", // 名称
            longitude: "116.401255",
            latitude: "39.938439",
            "picUrl": "",
            "fence": null,
            "code": "1101010030080203304", //当前虚拟空间code, 如果传入usingType=6，则该值为设备code
            "gisType": 1,
            "description": null,
            "extend": null,
            "creatorID": "c4754460401911ebaa4d00163e1c2899",
            "updaterID": "c4754460401911ebaa4d00163e1c2899",
            "insertTime": "2020-12-30 18:06:00",
            "updateTime": "2020-12-30 18:06:00",
            "superVirtualCode": "11010100300802",
            "deviceType": 'position', // 设备类型，如 'access', 'camera',
            "thingID":"2879425b64f9466aa9696c0f0a780e78",
            "inOutType":null // 进出类型，1:进  2:出  3:空旷地带
        },        
        {
            "relationID": "fb7eae237e594dc6a4e431897a8f9c4d",
            "parentCode": "11010100300802033",
 
            "parentType": 1,
            "usingType": 6,
            "name": "1单元", // 名称
            longitude: "116.401155",
            latitude: "39.938439",
            "picUrl": "",
            "fence": null,
            "code": "1101010030080203303", //当前虚拟空间code, 如果传入usingType=6，则该值为设备code
            "gisType": 1,
            "description": null,
            "extend": null,
            "creatorID": "c4754460401911ebaa4d00163e1c2899",
            "updaterID": "c4754460401911ebaa4d00163e1c2899",
            "insertTime": "2020-12-30 18:06:00",
            "updateTime": "2020-12-30 18:06:00",
            "superVirtualCode": "11010100300802",
            "deviceType": 'camera', // 设备类型，如 'access', 'camera',
            "thingID":"2879425b64f9466aa9696c0f0a780e78",
            "inOutType":null // 进出类型，1:进  2:出  3:空旷地带
        },
        {
            "relationID": "fb7eae237e594dc6a4e431897a8f9c4d",
            "parentCode": "11010100300802033",
 
            "parentType": 1,
            "usingType": 6,
            "name": "1单元", // 名称
            longitude: "116.401155",
            latitude: "39.937639",
            "picUrl": "",
            "fence": null,
            "code": "1101010030080203301", //当前虚拟空间code, 如果传入usingType=6，则该值为设备code
            "gisType": 1,
            "description": null,
            "extend": null,
            "creatorID": "c4754460401911ebaa4d00163e1c2899",
            "updaterID": "c4754460401911ebaa4d00163e1c2899",
            "insertTime": "2020-12-30 18:06:00",
            "updateTime": "2020-12-30 18:06:00",
            "superVirtualCode": "11010100300802",
            "deviceType": 'camera', // 设备类型，如 'access', 'camera',
            "thingID":"2879425b64f9466aa9696c0f0a780e78",
            "inOutType":null // 进出类型，1:进  2:出  3:空旷地带
        },    
        {
            "relationID": "fb7eae237e594dc6a4e431897a8f9c4d",
            "parentCode": "11010100300802033",
 
            "parentType": 1,
            "usingType": 6,
            "name": "1单元", // 名称
            longitude: "116.401255",
            latitude: "39.939439",
            "picUrl": "",
            "fence": null,
            "code": "110101045080203301", //当前虚拟空间code, 如果传入usingType=6，则该值为设备code
            "gisType": 1,
            "description": null,
            "extend": null,
            "creatorID": "c4754460401911ebaa4d00163e1c2899",
            "updaterID": "c4754460401911ebaa4d00163e1c2899",
            "insertTime": "2020-12-30 18:06:00",
            "updateTime": "2020-12-30 18:06:00",
            "superVirtualCode": "11010100300802",
            "deviceType": 'access', // 设备类型，如 'access', 'camera',
            "thingID":"2879425b64f9466aa9696c0f0a780e78",
            "inOutType":null // 进出类型，1:进  2:出  3:空旷地带
        },         
        {
            "relationID": "fb7eae237e594dc6a4e431897a8f9c4d",
            "parentCode": "11010100300802033",
 
            "parentType": 1,
            "usingType": 12,
            "name": "1单元", // 名称
            longitude: "116.401855",
            latitude: "39.938839",
            "picUrl": "",
            "fence": null,
            "code": "11010100320080203302", //当前虚拟空间code, 如果传入usingType=6，则该值为设备code
            "gisType": 1,
            "description": null,
            "extend": null,
            "creatorID": "c4754460401911ebaa4d00163e1c2899",
            "updaterID": "c4754460401911ebaa4d00163e1c2899",
            "insertTime": "2020-12-30 18:06:00",
            "updateTime": "2020-12-30 18:06:00",
            "superVirtualCode": "11010100300802",
            "deviceType": 'car', // 设备类型，如 'access', 'camera',
            "thingID":"2879425b64f9466aa9696c0f0a780e78",
            "inOutType":null // 进出类型，1:进  2:出  3:空旷地带
        },
        {
            "relationID": "fb7eae237e594dc6a4e431897a8f9c4d",
            "parentCode": "11010100300802033",

            "parentType": 1,
            "usingType": 11,
            "name": "1单元", // 名称
            longitude: "116.401855",
            latitude: "39.938139",
            "picUrl": "",
            "fence": null,
            "code": "1101010030080203308", //当前虚拟空间code, 如果传入usingType=6，则该值为设备code
            "gisType": 1,
            "description": null,
            "extend": null,
            "creatorID": "c4754460401911ebaa4d00163e1c2899",
            "updaterID": "c4754460401911ebaa4d00163e1c2899",
            "insertTime": "2020-12-30 18:06:00",
            "updateTime": "2020-12-30 18:06:00",
            "superVirtualCode": "11010100300802",
            "deviceType": 'face', // 设备类型，如 'access', 'camera',
            "thingID":"2879425b64f9466aa9696c0f0a780e78",
            "inOutType":null // 进出类型，1:进  2:出  3:空旷地带
        }
    ]
}
let M = {"responseStatus":{"resultCode":0,"successMessage":true},"data":{"mapExtent":{"maxLongitude":106.5749789886162,"minLongitude":106.48736460859448,"maxLatitude":29.569316590817916,"minLatitude":29.531336340103906},"villageInfos":[{"spaceNo":"500103003016000","spaceName":"莲花池社区","fence":[[106.56397990972778,29.55819497361749],[106.56524736272912,29.558336778088847],[106.56588107080708,29.558216723100628],[106.56655776294436,29.558805457708505],[106.56674094917317,29.558917670095553],[106.56736363254944,29.558227763215676],[106.5680182617981,29.558667479061832],[106.56713834309195,29.55923509964443],[106.5669341173068,29.559486732187864],[106.56674086864358,29.560289182685636],[106.56574181285028,29.560016885629253],[106.56499000342944,29.559511988335014],[106.56431326166036,29.558877224752543],[106.56402293980145,29.558549911055053],[106.56396989622816,29.558222948705847],[106.56397990972778,29.55819497361749]],"mapExtent":{"maxLongitude":106.5680182617981,"minLongitude":106.56396989622816,"maxLatitude":29.560289182685636,"minLatitude":29.55819497361749}},{"spaceNo":"500103003019000","spaceName":"大井巷社区","fence":[[106.5679390607026,29.560764629622067],[106.568454519607,29.561512041462688],[106.56901301914802,29.562025579892364],[106.57029116706858,29.562111145665288],[106.57005494381674,29.562390757612665],[106.5690350211083,29.562342496367997],[106.56883079061906,29.563005002123266],[106.56792889581722,29.563404686226324],[106.56756354492278,29.563171281903415],[106.56731631855035,29.562760094056404],[106.56648950473924,29.561975240158244],[106.56692998560462,29.561658957346346],[106.56712319242152,29.5615382629894],[106.56678987572836,29.561042983117037],[106.56704818352976,29.560371573635255],[106.56796108133638,29.560783652002527],[106.5679390607026,29.560764629622067]],"mapExtent":{"maxLongitude":106.57029116706858,"minLongitude":106.56648950473924,"maxLatitude":29.563404686226324,"minLatitude":29.560371573635255}},{"spaceNo":"500103003020000","spaceName":"临江门社区","fence":[[106.56839231871572,29.56391511588138],[106.56917605912338,29.56393011862505],[106.56904690410302,29.564526745751184],[106.56827417205292,29.564464769444413],[106.56838631238828,29.563924104908203],[106.56839231871572,29.56391511588138]],"mapExtent":{"maxLongitude":106.56917605912338,"minLongitude":106.56827417205292,"maxLatitude":29.564526745751184,"minLatitude":29.56391511588138}},{"spaceNo":"500103003021000","spaceName":"较场口社区","fence":[[106.572306136485,29.55664646036359],[106.57153246878522,29.5576532100161],[106.5708669738337,29.55674774825357],[106.57120027025152,29.556421261617917],[106.57140346439412,29.555945671734815],[106.57137147661813,29.55529286936128],[106.57267048192536,29.55546229613651],[106.5739593621475,29.556172443456536],[106.5749789886162,29.55689224286851],[106.57347592092292,29.557972280694543],[106.57227310948772,29.55667441289063],[106.572306136485,29.55664646036359]],"mapExtent":{"maxLongitude":106.5749789886162,"minLongitude":106.5708669738337,"maxLatitude":29.557972280694543,"minLatitude":29.55529286936128}},{"spaceNo":"500103003022000","spaceName":"邹容路社区","fence":[[106.57165526719004,29.5627755368196],[106.57137602750468,29.56301812559521],[106.57134398115905,29.563362966961495],[106.5713980191493,29.56346599427017],[106.5713439598093,29.56372683941596],[106.57169822603976,29.56406313522854],[106.57163416273708,29.56426898887107],[106.57166616813858,29.564613905552193],[106.57397485056524,29.56508230533302],[106.57440416611988,29.564607921562303],[106.57495151481584,29.564682458369234],[106.57495152794732,29.564458536575355],[106.57457529843164,29.564262219735692],[106.57393190158632,29.563711738680915],[106.57286917027172,29.563299730316544],[106.57162324042172,29.56279449294023],[106.57165526719004,29.5627755368196]],"mapExtent":{"maxLongitude":106.57495152794732,"minLongitude":106.5713439598093,"maxLatitude":29.56508230533302,"minLatitude":29.5627755368196}},{"spaceNo":"500103004002000","spaceName":"中山二路社区","fence":[[106.55171791563626,29.557086067103057],[106.55431828262869,29.557706853149952],[106.55525271833392,29.558958143861528],[106.55387243524004,29.55963732444118],[106.55350682690688,29.5596366297264],[106.55265734572906,29.560399724849862],[106.55236787822794,29.559904337499237],[106.55033640421058,29.557978984844752],[106.55013205285375,29.55765168728845],[106.55171791563626,29.557086067103057]],"mapExtent":{"maxLongitude":106.55525271833392,"minLongitude":106.55013205285375,"maxLatitude":29.560399724849862,"minLatitude":29.557086067103057}},{"spaceNo":"500103004003000","spaceName":"枇杷山正街社区","fence":[[106.5577295966652,29.55778300443357],[106.55789092603024,29.55623384072317],[106.55525899677764,29.554391794264426],[106.55008909966128,29.555529361858117],[106.54921847970604,29.55586345717396],[106.54925050399048,29.55646030870983],[106.55163178839422,29.556684041089177],[106.55330773680951,29.555493731476105],[106.5577295966652,29.55778300443357]],"mapExtent":{"maxLongitude":106.55789092603024,"minLongitude":106.54921847970604,"maxLatitude":29.55778300443357,"minLatitude":29.554391794264426}},{"spaceNo":"500103004010000","spaceName":"重庆村社区","fence":[[106.54581071002464,29.55934097213156],[106.54418742164636,29.55929939822529],[106.54342385543744,29.559008783428492],[106.5420590037593,29.558436868981804],[106.54368259639293,29.555585593676746],[106.54524079039362,29.555542081973652],[106.5457137187333,29.555906988565425],[106.54616547201766,29.55838008689083],[106.54581071002464,29.55934097213156]],"mapExtent":{"maxLongitude":106.54616547201766,"minLongitude":106.5420590037593,"maxLatitude":29.55934097213156,"minLatitude":29.555542081973652}},{"spaceNo":"500103004011000","spaceName":"桂花园新村社区","fence":[[106.54039853497837,29.55615081457583],[106.53953852904075,29.55784616742663],[106.53767833431895,29.55756178212281],[106.53694665237865,29.557439033441987],[106.53662392147592,29.55710235846638],[106.53628015881412,29.556410755954424],[106.5354301629891,29.55627868590853],[106.5350753318341,29.556071870400064],[106.53610783619584,29.555029825492575],[106.5374309052034,29.555192028955812],[106.53921595626116,29.555326301297516],[106.54039853497837,29.55615081457583]],"mapExtent":{"maxLongitude":106.54039853497837,"minLongitude":106.5350753318341,"maxLatitude":29.55784616742663,"minLatitude":29.555029825492575}},{"spaceNo":"500103004012000","spaceName":"铁路坡社区","fence":[[106.5387429759392,29.553897681912066],[106.54207628608371,29.554279402483843],[106.5437106600049,29.55549568931761],[106.54469981339044,29.5535016231575],[106.53764675859097,29.54915575617101],[106.53624841430648,29.55083170041199],[106.53822683275108,29.55343060434344],[106.5387429759392,29.553897681912066]],"mapExtent":{"maxLongitude":106.54469981339044,"minLongitude":106.53624841430648,"maxLatitude":29.55549568931761,"minLatitude":29.54915575617101}},{"spaceNo":"500103004013000","spaceName":"国际村社区","fence":[[106.5354633542522,29.554375455142747],[106.53696883624023,29.555199892559767],[106.54043062706208,29.555787021114984],[106.54103296945677,29.55537758290599],[106.54150606816115,29.55414713033044],[106.53871090896747,29.553804638387295],[106.537915142285,29.55307497668246],[106.53664632234126,29.551205548313305],[106.5323871914056,29.549683342101677],[106.52991393542436,29.550796467743965],[106.53266680688684,29.55091561160271],[106.53501145883892,29.551351421129535],[106.53586144074106,29.55191334328712],[106.53440888208848,29.55361707628416],[106.5354633542522,29.554375455142747]],"mapExtent":{"maxLongitude":106.54150606816115,"minLongitude":106.52991393542436,"maxLatitude":29.555787021114984,"minLatitude":29.549683342101677}},{"spaceNo":"500103004014000","spaceName":"王家坡社区","fence":[[106.53093555462254,29.550109408699836],[106.53246237673903,29.549683536207624],[106.53448424478294,29.550547385941485],[106.53633461736828,29.55081292098596],[106.53691505112418,29.54945285350535],[106.534161631879,29.547784585849033],[106.53272112812309,29.547743918496884],[106.53166654066013,29.547414310696716],[106.52962335480169,29.54812767980683],[106.53093555462254,29.550109408699836]],"mapExtent":{"maxLongitude":106.53691505112418,"minLongitude":106.52962335480169,"maxLatitude":29.55081292098596,"minLatitude":29.547414310696716}},{"spaceNo":"500103005008000","spaceName":"桂花园社区","fence":[[106.5285151692233,29.553971589632148],[106.53348349091732,29.55620478870207],[106.5361728107317,29.558039906096468],[106.53644144934566,29.55788162848525],[106.5371400572372,29.558173246311853],[106.5368072719436,29.55839634814011],[106.5374086097042,29.559321495419283],[106.53817237427327,29.55908943862866],[106.53835580439666,29.55887595896444],[106.53831272358318,29.55858595803447],[106.53920475385792,29.558327198096297],[106.53919376173953,29.557776368516937],[106.53827970909217,29.557560244424096],[106.53715112090072,29.557529503556815],[106.53663494131678,29.557201350212797],[106.53626913374784,29.55639773329573],[106.53654880273824,29.55614651595255],[106.53651677762048,29.555306739132035],[106.53717229179728,29.55546729603086],[106.53749505485398,29.555160197326668],[106.53673128877467,29.55512133576614],[106.53629129047032,29.554625426798864],[106.53521577172516,29.554286866884677],[106.53398985742812,29.553863924022295],[106.5325593638335,29.5539352351603],[106.53141857990865,29.553204541385288],[106.52935438978548,29.552835240491543],[106.52946161921714,29.55358225406488],[106.5284931346084,29.553597666159884],[106.52836378211325,29.55391520453913],[106.5285151692233,29.553971589632148]],"mapExtent":{"maxLongitude":106.53920475385792,"minLongitude":106.52836378211325,"maxLatitude":29.559321495419283,"minLatitude":29.552835240491543}},{"spaceNo":"500103005009000","spaceName":"春森路社区","fence":[[106.54666927056516,29.561680005922028],[106.5463847219846,29.561492457709008],[106.5463897464478,29.56124555576224],[106.5450891792726,29.56071090188624],[106.54548702063838,29.560044013880475],[106.54594393482044,29.56003101764879],[106.5465942060368,29.560275340776833],[106.54705110437526,29.56018735385022],[106.5472764824353,29.56119547873207],[106.54721234384292,29.56143825609007],[106.54666927056516,29.561680005922028]],"mapExtent":{"maxLongitude":106.5472764824353,"minLongitude":106.5450891792726,"maxLatitude":29.561680005922028,"minLatitude":29.56003101764879}},{"spaceNo":"500103005010000","spaceName":"新都巷社区","fence":[[106.53621791998415,29.557982038715775],[106.53652959688024,29.558869494079342],[106.53735743115958,29.56034500681319],[106.53770221849564,29.56044881260204],[106.53873456972244,29.560451313782742],[106.53934693583096,29.560639716348053],[106.53971276161106,29.560481644697177],[106.53992826066802,29.560137278741788],[106.5409065173658,29.55836621510538],[106.53919676694602,29.557802366419413],[106.53919673764736,29.558297189609508],[106.53831472660254,29.55861195361615],[106.53829364663466,29.559153709631875],[106.53768024801067,29.55909623924889],[106.53762710940816,29.559376010064742],[106.53730436601552,29.559375221051507],[106.53739058872088,29.558973575110834],[106.53733649371864,29.55846962223986],[106.5370889439809,29.55808715153673],[106.5364013590256,29.557823550005725],[106.53621791998415,29.557982038715775]],"mapExtent":{"maxLongitude":106.5409065173658,"minLongitude":106.53621791998415,"maxLatitude":29.560639716348053,"minLatitude":29.557802366419413}},{"spaceNo":"500103005011000","spaceName":"学田湾社区","fence":[[106.54774633248628,29.56213414615846],[106.54827336360296,29.561687414485963],[106.54854690200152,29.561324115430377],[106.5490207707481,29.56165598420834],[106.54923012970616,29.562174234606463],[106.54925114396951,29.562594130245586],[106.54908479306772,29.563302537649136],[106.54833235167646,29.56378680045638],[106.54766006798978,29.563813373786157],[106.54801468252404,29.564900743435004],[106.54864884684716,29.565517857978385],[106.54921388771406,29.565770942585647],[106.54970278191456,29.56591589763283],[106.55030487754794,29.565955110450716],[106.55098711426466,29.56576455051244],[106.551486998923,29.565775542530172],[106.55118042161314,29.566380722685157],[106.55077767396958,29.56688874046112],[106.55041199821608,29.56719589709928],[106.54959551931364,29.56702629266023],[106.54860567335034,29.567084224331392],[106.5477460507916,29.566905479301848],[106.54781120448985,29.566415786883493],[106.54825708131276,29.565954886341757],[106.54857369695952,29.56566165113909],[106.5476930436536,29.56530092425869],[106.54732136288088,29.56469834438647],[106.54762298465756,29.56401822345396],[106.54696671960964,29.56392785544992],[106.54609098639868,29.564112899939285],[106.54553686765313,29.564335612211128],[106.54392961390757,29.56397217183235],[106.54356989665764,29.56347253669617],[106.54446778083428,29.56297072690769],[106.5444677824886,29.562942736739867],[106.544699278662,29.56255138925268],[106.5447684578264,29.56190377079256],[106.54537071698856,29.5612283391792],[106.54577951942184,29.561518132740712],[106.54642378007524,29.56181342898351],[106.54668729028027,29.56194495132893],[106.54774633248628,29.56213414615846]],"mapExtent":{"maxLongitude":106.551486998923,"minLongitude":106.54356989665764,"maxLatitude":29.56719589709928,"minLatitude":29.5612283391792}},{"spaceNo":"500103005012000","spaceName":"上大田塆社区","fence":[[106.5407952021735,29.559586519671797],[106.54045041929308,29.56004254706926],[106.54063379819954,29.560443836468583],[106.54064478923164,29.56100366419256],[106.54149361764506,29.561323535330732],[106.54219209076652,29.561781989338332],[106.54237545294365,29.56226724000432],[106.54260090031916,29.562799569717395],[106.5427622318416,29.56296787950922],[106.54358997030496,29.56293277138435],[106.54413813161472,29.562495157624447],[106.5449338405084,29.561116415113364],[106.54535374164,29.56023065492098],[106.54557922429876,29.55972732847379],[106.54598808834436,29.55891650995915],[106.5461594636493,29.558320095249073],[106.54607433774048,29.55759217034685],[106.5455252502451,29.557451021701137],[106.54534291119566,29.556984788250652],[106.5452357370009,29.556274807187545],[106.5446876124024,29.55648851792891],[106.54412846161586,29.55656224430282],[106.54402028524584,29.555768287265867],[106.54366555625838,29.55566552646916],[106.54348316053382,29.55593501765014],[106.54305324431022,29.556204945638008],[106.54246200088666,29.556100632621735],[106.54189179664044,29.555875400610272],[106.54120331717886,29.55576184241869],[106.54074130190708,29.555900711062797],[106.540063765915,29.556664838744823],[106.53983823075885,29.55726109002197],[106.53953652610689,29.55782017194267],[106.54031122696436,29.55811090623803],[106.54154790560744,29.558431687864612],[106.5415258431054,29.558683546813064],[106.5407952021735,29.559586519671797]],"mapExtent":{"maxLongitude":106.5461594636493,"minLongitude":106.53953652610689,"maxLatitude":29.56296787950922,"minLatitude":29.55566552646916}},{"spaceNo":"500103005013000","spaceName":"上清寺路社区","fence":[[106.53835960678931,29.56236573275576],[106.53843477315218,29.56243988845134],[106.53919839175845,29.56421410354979],[106.5400903969978,29.563908334546287],[106.542412464765,29.563400926725652],[106.54268205815872,29.56303767178242],[106.54230531487852,29.56207614614414],[106.54201473003928,29.56146869103323],[106.5409825159986,29.561196388208277],[106.54035915649732,29.56109196029186],[106.53972474569824,29.561202418242377],[106.53895096845682,29.561965299407145],[106.53835960678931,29.56236573275576]],"mapExtent":{"maxLongitude":106.54268205815872,"minLongitude":106.53835960678931,"maxLatitude":29.56421410354979,"minLatitude":29.56109196029186}},{"spaceNo":"500103005014000","spaceName":"曾家岩社区","fence":[[106.53967445512178,29.5642262359047],[106.5399930694212,29.565806441907228],[106.5426596972209,29.568350772894025],[106.54526202809606,29.569196324242903],[106.5491525649088,29.569316590817916],[106.55061525484676,29.569057665450437],[106.55016351207222,29.56780718225319],[106.55029276083036,29.567564528278684],[106.55115229638884,29.56766022367856],[106.55123849645608,29.566857673103833],[106.55029285436194,29.56597907776063],[106.54769104417484,29.565226945789227],[106.54760498327006,29.56345438271077],[106.5463586022196,29.56264999345066],[106.54334843390512,29.563482032521268],[106.5411116525697,29.56364482880813],[106.53967445512178,29.5642262359047]],"mapExtent":{"maxLongitude":106.55123849645608,"minLongitude":106.53967445512178,"maxLatitude":29.569316590817916,"minLatitude":29.56264999345066}},{"spaceNo":"500103007003000","spaceName":"珊瑚湾社区","fence":[[106.54764162490896,29.5537589169191],[106.54932979053416,29.554089327254975],[106.54964136103604,29.554163940703894],[106.54993093884995,29.55336282322664],[106.5514787042244,29.553542871297953],[106.55351020552104,29.553294913810365],[106.55466011057808,29.55309215598211],[106.55469220205224,29.55242046009617],[106.55231724362858,29.55221000599501],[106.54852347305176,29.550877822925],[106.54765264720278,29.55373994716831],[106.54764162490896,29.5537589169191]],"mapExtent":{"maxLongitude":106.55469220205224,"minLongitude":106.54764162490896,"maxLatitude":29.554163940703894,"minLatitude":29.550877822925}},{"spaceNo":"500103007008000","spaceName":"竹木街社区","fence":[[106.52746417398322,29.541698302127077],[106.52500186286412,29.538668736875582],[106.52505503344182,29.538183068435828],[106.5255283208537,29.537699553022897],[106.52687280514148,29.53872982700496],[106.52794851873573,29.540244157557837],[106.52775499674811,29.540579509528992],[106.52791636015512,29.541512591089248],[106.52752934200572,29.5417264674366],[106.52746417398322,29.541698302127077]],"mapExtent":{"maxLongitude":106.52794851873573,"minLongitude":106.52500186286412,"maxLatitude":29.5417264674366,"minLatitude":29.537699553022897}},{"spaceNo":"500103007011000","spaceName":"石板坡社区","fence":[[106.55948026051598,29.555363866166207],[106.55776172844938,29.55634957423353],[106.55722395842166,29.555798829107896],[106.55605323166344,29.554677141083705],[106.55540835640952,29.552314822731834],[106.55813752557876,29.552189731872726],[106.55871724648746,29.55421499163543],[106.5594912775744,29.555335894699297],[106.55948026051598,29.555363866166207]],"mapExtent":{"maxLongitude":106.5594912775744,"minLongitude":106.55540835640952,"maxLatitude":29.55634957423353,"minLatitude":29.552189731872726}},{"spaceNo":"500103012011000","spaceName":"马家堡社区","fence":[[106.51625043931556,29.543077294833495],[106.5142929060265,29.542007996796077],[106.51182908268254,29.536990665369608],[106.51164556467712,29.53672822428712],[106.51234560808882,29.536562352434657],[106.51239878622872,29.536161662911592],[106.51265753833836,29.53612443890944],[106.51275380593616,29.53631165020079],[106.51356116003308,29.535959156848737],[106.51385197032,29.536426829523037],[106.51360422572348,29.536939906665676],[106.51389498339456,29.538284244616637],[106.51447554029498,29.540170225516903],[106.51505624452804,29.539510170857724],[106.5153260312341,29.539259052276744],[106.51592772819622,29.539596673440595],[106.51618643577083,29.54008223986834],[106.51618642125304,29.54032514771415],[106.51683223491676,29.540662890005027],[106.51644398659391,29.543124837904703],[106.51625043931556,29.543077294833495]],"mapExtent":{"maxLongitude":106.51683223491676,"minLongitude":106.51164556467712,"maxLatitude":29.543124837904703,"minLatitude":29.535959156848737}},{"spaceNo":"500103012012000","spaceName":"浮图关社区","fence":[[106.51769118969808,29.54860839910769],[106.52270502610853,29.54961126726041],[106.52261882319604,29.5490792218521],[106.52333980398195,29.548671384792843],[106.52285553722382,29.54789532053389],[106.52098341115833,29.54793704296782],[106.52076882646264,29.547814481204973],[106.52153293831223,29.54767669029017],[106.5218658726597,29.54731376178439],[106.52149991256658,29.546585001843905],[106.52028456709738,29.546469606785653],[106.51943415610904,29.547269889680106],[106.51869210711038,29.546856921523737],[106.51831607521169,29.54647398549268],[106.51747679274288,29.54511807623613],[106.51567965873438,29.54567266695512],[106.51555030960697,29.545336416135665],[106.51496963357174,29.545596628052895],[106.51513107850856,29.54588599091098],[106.51518522507828,29.54602609654121],[106.51328070838962,29.546720268466473],[106.51350634080804,29.547037812776896],[106.51373199424314,29.546992491172595],[106.51391548889713,29.547561817828495],[106.51372092056712,29.547692199571703],[106.5133337563286,29.548483771609476],[106.51335581219604,29.548614788014216],[106.5149804933153,29.548469594567948],[106.51769118969808,29.54860839910769]],"mapExtent":{"maxLongitude":106.52333980398195,"minLongitude":106.51328070838962,"maxLatitude":29.54961126726041,"minLatitude":29.54511807623613}},{"spaceNo":"500103012013000","spaceName":"肖家湾社区","fence":[[106.52059656819712,29.544156354328475],[106.52040300279435,29.54465961726436],[106.5205644037528,29.54542578899809],[106.52133854689052,29.54527903281628],[106.52192006146774,29.546633166516308],[106.52338303294924,29.546786202490047],[106.5245552021573,29.546537544894356],[106.52428653462113,29.545651131994756],[106.52372705118164,29.54528571728233],[106.52188808545132,29.544757775048545],[106.52059656819712,29.544156354328475]],"mapExtent":{"maxLongitude":106.5245552021573,"minLongitude":106.52040300279435,"maxLatitude":29.546786202490047,"minLatitude":29.544156354328475}},{"spaceNo":"500103012016000","spaceName":"大黄路社区","fence":[[106.51914279120538,29.539742881333336],[106.52469365714472,29.545114456770257],[106.52179992708083,29.543361050113916],[106.51914279120538,29.539742881333336]],"mapExtent":{"maxLongitude":106.52469365714472,"minLongitude":106.51914279120538,"maxLatitude":29.545114456770257,"minLatitude":29.539742881333336}},{"spaceNo":"500103012017000","spaceName":"袁家岗社区","fence":[[106.51050455485164,29.531418902900004],[106.51295843348804,29.53571847987233],[106.51575071593656,29.531336340103906],[106.51050455485164,29.531418902900004]],"mapExtent":{"maxLongitude":106.51575071593656,"minLongitude":106.51050455485164,"maxLatitude":29.53571847987233,"minLatitude":29.531336340103906}},{"spaceNo":"500103012018000","spaceName":"七牌坊社区","fence":[[106.51180665251698,29.543102280465384],[106.51090302792284,29.542977656785688],[106.5111608153786,29.54238164359042],[106.51126916343512,29.541841167609387],[106.5110756082341,29.54169065204007],[106.5111939906575,29.541066238013133],[106.5113875691205,29.540823901892665],[106.51092427720694,29.539842903679773],[106.51237753802108,29.539287405445982],[106.51358187570406,29.541726021061415],[106.51168841011282,29.54140357130147],[106.511505824815,29.542307691128503],[106.51199022335246,29.542477057099333],[106.51180665251698,29.543102280465384]],"mapExtent":{"maxLongitude":106.51358187570406,"minLongitude":106.51090302792284,"maxLatitude":29.543102280465384,"minLatitude":29.539287405445982}},{"spaceNo":"500103012019000","spaceName":"大坪正街社区","fence":[[106.51051587118783,29.54341534596566],[106.5097084563725,29.54428062663217],[106.50938549087677,29.544587552305966],[106.50984882248224,29.54503676085438],[106.50963317264802,29.545335009227372],[106.50990192052464,29.54599856008799],[106.5095257813115,29.546613214630582],[106.51061193943754,29.546970304501254],[106.51070920619948,29.547260485022623],[106.51130092770713,29.54733620762828],[106.5121724806772,29.54703089328766],[106.51620716914258,29.54554524605323],[106.5164229203772,29.543231736733254],[106.51303317282544,29.543707665143504],[106.5105800634671,29.543336565711364],[106.51051587118783,29.54341534596566]],"mapExtent":{"maxLongitude":106.5164229203772,"minLongitude":106.50938549087677,"maxLatitude":29.54733620762828,"minLatitude":29.543231736733254}},{"spaceNo":"500103012020000","spaceName":"天灯堡社区","fence":[[106.5199492302066,29.53649741960079],[106.51641521473714,29.537924724399677],[106.51817902116292,29.540915675722207],[106.51997114929888,29.53888057080226],[106.5199492302066,29.53649741960079]],"mapExtent":{"maxLongitude":106.51997114929888,"minLongitude":106.51641521473714,"maxLatitude":29.540915675722207,"minLatitude":29.53649741960079}},{"spaceNo":"500103013008000","spaceName":"临江佳园小区","fence":[[106.517259741547,29.552468740983223],[106.51749035603578,29.553090180061147],[106.51799076290165,29.553151598223003],[106.51882512149112,29.552870094024396],[106.51894849749954,29.552352635333538],[106.51872792019554,29.55168024915852],[106.5185343875952,29.55151575468441],[106.51767397362138,29.551420317372987],[106.51694188685872,29.551717097066163],[106.517259741547,29.552468740983223]],"mapExtent":{"maxLongitude":106.51894849749954,"minLongitude":106.51694188685872,"maxLatitude":29.553151598223003,"minLatitude":29.551420317372987}},{"spaceNo":"500103013008002","spaceName":"建设新村小区","fence":[[106.52813226352666,29.552571071418154],[106.52784147489652,29.553163074298865],[106.52771313975433,29.553194717131305],[106.526093913935,29.55292942123479],[106.52514741298836,29.55277788320761],[106.52458793059756,29.55258441220074],[106.52443755193292,29.552178144781873],[106.5247704697378,29.551727228174077],[106.52603983897686,29.55178668974906],[106.5269702775918,29.551924171478134],[106.52813226352666,29.552571071418154]],"mapExtent":{"maxLongitude":106.52813226352666,"minLongitude":106.52443755193292,"maxLatitude":29.553194717131305,"minLatitude":29.551727228174077}},{"spaceNo":"500103013008003","spaceName":"江山华庭小区","fence":[[106.52801094131782,29.552707695719285],[106.52778532493627,29.553233897382512],[106.52842496672427,29.553464531883076],[106.5287638292743,29.553633377149477],[106.5289041880996,29.55366174157697],[106.52903354112168,29.553303216578172],[106.52917291606948,29.55299969803869],[106.5285653739788,29.552700185492217],[106.52819943940044,29.55253526480757],[106.52801094131782,29.552707695719285]],"mapExtent":{"maxLongitude":106.52917291606948,"minLongitude":106.52778532493627,"maxLatitude":29.55366174157697,"minLatitude":29.55253526480757}},{"spaceNo":"500103013008004","spaceName":"畔江楼小区","fence":[[106.52258450745828,29.5528187574512],[106.52430514434889,29.553061457289065],[106.5244936819649,29.552521174942907],[106.5234127841686,29.552326248557396],[106.5225674838734,29.552435849121142],[106.52258450745828,29.5528187574512]],"mapExtent":{"maxLongitude":106.5244936819649,"minLongitude":106.5225674838734,"maxLatitude":29.553061457289065,"minLatitude":29.552326248557396}},{"spaceNo":"500103013008005","spaceName":"长帆江岸公馆","fence":[[106.52132707082626,29.552752248000083],[106.52140229566687,29.552448570684856],[106.52151060284326,29.552285935235417],[106.52154272849435,29.551656255375555],[106.52248429515268,29.551798848368517],[106.5232583804276,29.552089904676315],[106.5233656682728,29.55213218809656],[106.52323129151148,29.552351733793486],[106.52266173970176,29.5524481084153],[106.52260257345816,29.55253591090741],[106.52258049892257,29.552778760775823],[106.5217742902773,29.55288845847116],[106.50727476165622,29.53648333212851]],"mapExtent":{"maxLongitude":106.5233656682728,"minLongitude":106.50727476165622,"maxLatitude":29.55288845847116,"minLatitude":29.53648333212851}},{"spaceNo":"500103014001000","spaceName":"煤建新村社区","fence":[[106.51333023951577,29.54021785329382],[106.51142567704342,29.54087499516261],[106.51093130026442,29.53979994077496],[106.51039271677446,29.539975279105978],[106.5092523901372,29.53973898340794],[106.5096074546112,29.53935718374263],[106.50920933013133,29.538628277946167],[106.5093277065601,29.53814381470672],[106.50999466538168,29.5380808197192],[106.5104680735824,29.53769037275521],[106.51064062458994,29.536906184148368],[106.51085626189086,29.536776872207664],[106.51172778405277,29.53705934009641],[106.51333023951577,29.54021785329382]],"mapExtent":{"maxLongitude":106.51333023951577,"minLongitude":106.50920933013133,"maxLatitude":29.54087499516261,"minLatitude":29.536776872207664}},{"spaceNo":"500103014005000","spaceName":"金银湾社区","fence":[[106.49628753068306,29.54503709266389],[106.49852520392524,29.54515577544258],[106.50125851047204,29.542737905425863],[106.49839604927536,29.541310830416876],[106.49919249837768,29.540137670704535],[106.49734200755384,29.53955332648875],[106.49721260330097,29.5398518241078],[106.4961363851998,29.539960549213287],[106.49503913558632,29.539602392214935],[106.4947161285234,29.54034814074272],[106.49288671514834,29.539894836893588],[106.49196188969547,29.54125456097653],[106.4937260755059,29.542117506538347],[106.4951031871361,29.541916708375627],[106.496093032476,29.543674018382088],[106.49533976409396,29.54404461851685],[106.49536177464286,29.54495934258128],[106.49628753068306,29.54503709266389]],"mapExtent":{"maxLongitude":106.50125851047204,"minLongitude":106.49196188969547,"maxLatitude":29.54515577544258,"minLatitude":29.53955332648875}},{"spaceNo":"500103014006000","spaceName":"民乐村社区","fence":[[106.50727476165622,29.53648333212851],[106.507263671429,29.537443930891836],[106.50684441199697,29.537788546227368],[106.5035837358316,29.537815762258848],[106.50300297780528,29.538298832845214],[106.50204513181414,29.538156007609775],[106.50109830642404,29.53817215327723],[106.50042025526344,29.538626939592916],[106.4997853658533,29.53852306868109],[106.4999569858425,29.536732269879376],[106.5000753634042,29.536330780168772],[106.50111947823478,29.536361909980982],[106.50115160823636,29.53579322519395],[106.5024645308606,29.53567521955233],[106.50272342702183,29.53359580072744],[106.50433725863398,29.53311483491683],[106.50722080440994,29.533105474457063]],"mapExtent":{"maxLongitude":106.50727476165622,"minLongitude":106.4997853658533,"maxLatitude":29.538626939592916,"minLatitude":29.533105474457063}},{"spaceNo":"500103014008000","spaceName":"虎头岩社区","fence":[[106.48819306806332,29.552970033519617],[106.49050685466116,29.55335974542415],[106.49043153427505,29.55498293418485],[106.4873755735308,29.554638019700032],[106.48736460859448,29.55352738947635],[106.48743984603996,29.55323871568273],[106.48819306806332,29.552970033519617]],"mapExtent":{"maxLongitude":106.49050685466116,"minLongitude":106.48736460859448,"maxLatitude":29.55498293418485,"minLatitude":29.552970033519617}},{"spaceNo":"500103014009000","spaceName":"石油路社区","fence":[[106.50674564619118,29.545703264846846],[106.5059281458308,29.547044320358943],[106.50503552582074,29.54658481607173],[106.5046373775188,29.546014833716654],[106.5048520447801,29.54552066163861],[106.50529334518154,29.545680925118926],[106.50674564619118,29.545703264846846]],"mapExtent":{"maxLongitude":106.50674564619118,"minLongitude":106.5046373775188,"maxLatitude":29.547044320358943,"minLatitude":29.54552066163861}},{"spaceNo":"500103014010000","spaceName":"新影村社区","fence":[[106.5005771394984,29.548355762262908],[106.5004427767979,29.547715594488935],[106.49996935878563,29.54778914268995],[106.49983502659003,29.546641163786703],[106.5008139495022,29.546639110248645],[106.50086809093524,29.546975148481312],[106.50126025846582,29.547023310541583],[106.50130936635276,29.54766721981435],[106.50170755204871,29.547705403519736],[106.5024066172088,29.548029386099223],[106.50221804944512,29.548122784584574],[106.5005771394984,29.548355762262908]],"mapExtent":{"maxLongitude":106.5024066172088,"minLongitude":106.49983502659003,"maxLatitude":29.548355762262908,"minLatitude":29.546639110248645}},{"spaceNo":"500103014011000","spaceName":"彭家花园社区","fence":[[106.5083726061662,29.54304411616469],[106.5055319352944,29.547644911124337],[106.503723558492,29.547714460149308],[106.50331545123254,29.545921899249233],[106.50232554581456,29.545191196023357],[106.50131353882912,29.54500122303768],[106.50088325026756,29.545074900941668],[106.50084006201126,29.54606340273608],[106.49797752434722,29.545886855649577],[106.49842992695896,29.545029535927167],[106.50129261192198,29.54274300610227],[106.50344416897232,29.540342381416263],[106.5083726061662,29.54304411616469]],"mapExtent":{"maxLongitude":106.5083726061662,"minLongitude":106.49797752434722,"maxLatitude":29.547714460149308,"minLatitude":29.540342381416263}}],"mapParams":{"mapType":"GD","url":"http://webapi.amap.com/maps?v=1.4.7&key=c0dd08f714daa79c862a8cee1dddbb39","viewMode":"3D","pitch":30,"expandZoomRange":true,"zooms":[10,20],"zoom":17.78,"mapstyle":"amap://styles/a0bdd61825a6b35495f33926b7206839","isRecordExtent":false,"isShowTextAtMaxZoom":true,"isShowLayerControl":true}}}
 M = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "mapExtent": {
            "maxLongitude": 116.4022515951768,
            "minLongitude": 116.39679507903406,
            "maxLatitude": 39.93945576990904,
            "minLatitude": 39.93701677252545
        },
        "villageInfos": [
            {
                "spaceNo": "11010100300801",
                "spaceName": "菊儿1小区",
                "fence": [
                    [
                        116.3991625664896,
                        39.938794820151685
                    ],
                    [
                        116.39922260264368,
                        39.93862483455199
                    ],
                    [
                        116.3998837779738,
                        39.93860292998557
                    ],
                    [
                        116.3999278158639,
                        39.938402944945175
                    ],
                    [
                        116.4011331950778,
                        39.938414169259126
                    ],
                    [
                        116.40132324607978,
                        39.93854320546015
                    ],
                    [
                        116.40172538967064,
                        39.938589296417966
                    ],
                    [
                        116.40219257091836,
                        39.93861941208512
                    ],
                    [
                        116.40220353725184,
                        39.93891840303478
                    ],
                    [
                        116.40223548797113,
                        39.939407391930395
                    ],
                    [
                        116.3994645571125,
                        39.93945383388221
                    ],
                    [
                        116.39899044319328,
                        39.93944477328539
                    ],
                    [
                        116.39895847060932,
                        39.93917278036466
                    ],
                    [
                        116.39896849497887,
                        39.938999788427154
                    ],
                    [
                        116.3989695161476,
                        39.9388357950808
                    ],
                    [
                        116.3991625664896,
                        39.938794820151685
                    ]
                ],
                "mapExtent": {
                    "maxLongitude": 116.40223548797113,
                    "minLongitude": 116.39895847060932,
                    "maxLatitude": 39.93945383388221,
                    "minLatitude": 39.938402944945175
                }
            },
            {
                "spaceNo": "11010100300802",
                "spaceName": "菊儿2小区",
                "fence": [
                    [
                        116.3977524162935,
                        39.93776572797447
                    ],
                    [
                        116.40219567581548,
                        39.93780744526592
                    ],
                    [
                        116.40221677481834,
                        39.93709947903373
                    ],
                    [
                        116.39796754768956,
                        39.93701677252545
                    ],
                    [
                        116.3978385217084,
                        39.93704976218191
                    ],
                    [
                        116.39779549895424,
                        39.93717275442178
                    ],
                    [
                        116.3977524162935,
                        39.93776572797447
                    ]
                ],
                "mapExtent": {
                    "maxLongitude": 116.40221677481834,
                    "minLongitude": 116.3977524162935,
                    "maxLatitude": 39.93780744526592,
                    "minLatitude": 39.93701677252545
                }
            },
            {
                "spaceNo": "11010100300803",
                "spaceName": "菊儿3小区",
                "fence": [
                    [
                        116.39679507903406,
                        39.939404622221794
                    ],
                    [
                        116.39798824194403,
                        39.939439677397
                    ],
                    [
                        116.39842832266903,
                        39.93944771380029
                    ],
                    [
                        116.39896543606892,
                        39.93945576990904
                    ],
                    [
                        116.39897251810964,
                        39.93882579583107
                    ],
                    [
                        116.39921658459092,
                        39.93875482859947
                    ],
                    [
                        116.3991995996352,
                        39.93860483240857
                    ],
                    [
                        116.3998737774795,
                        39.93858492912821
                    ],
                    [
                        116.39993381615248,
                        39.93841394546538
                    ],
                    [
                        116.4011081818826,
                        39.938449162542774
                    ],
                    [
                        116.40130423834728,
                        39.93855020097388
                    ],
                    [
                        116.4022515951768,
                        39.938619427543365
                    ],
                    [
                        116.40223962393227,
                        39.93835543491607
                    ],
                    [
                        116.40222368513771,
                        39.93782445190771
                    ],
                    [
                        116.39774141644816,
                        39.93775072787953
                    ],
                    [
                        116.396913299043,
                        39.937783689657515
                    ],
                    [
                        116.396913299043,
                        39.937783689657515
                    ],
                    [
                        116.39690330518673,
                        39.9377266916719
                    ],
                    [
                        116.39679507903406,
                        39.939404622221794
                    ],
                    [
                        116.39679507903406,
                        39.939404622221794
                    ],
                    [
                        116.39679507903406,
                        39.939404622221794
                    ]
                ],
                "mapExtent": {
                    "maxLongitude": 116.4022515951768,
                    "minLongitude": 116.39679507903406,
                    "maxLatitude": 39.93945576990904,
                    "minLatitude": 39.9377266916719
                }
            }
        ],
        "mapParams": {
            "mapType": "GD",
            "url": "http://webapi.amap.com/maps?v=1.4.7&key=c0dd08f714daa79c862a8cee1dddbb39",
            "viewMode": "3D",
            "pitch": 30,
            "expandZoomRange": true,
            "zooms": [
                10,
                20
            ],
            "zoom": 17.78,
            "mapstyle": "amap://styles/a0bdd61825a6b35495f33926b7206839",
            "isRecordExtent": false,
            "isShowTextAtMaxZoom": true,
            "isShowLayerControl": true
        }
    }
}
let N = {
  "responseStatus": {
    "resultCode": 0,
    "successMessage": true
  },
  "data": [
    {
      "code": "11010100300801", // 编码
      "name": "菊儿1小区", // 名称
      "usingType": 1, // 使用类型
      "longitude": 116.3992944059, // 经度
      "latitude": 39.9373186569, // 维度
      "fence": [[116.3991625664896,39.938794820151685],[116.39922260264368,39.93862483455199],[116.3998837779738,39.93860292998557],[116.3999278158639,39.938402944945175],[116.4011331950778,39.938414169259126],[116.40132324607978,39.93854320546015],[116.40172538967064,39.938589296417966],[116.40219257091836,39.93861941208512],[116.40220353725184,39.93891840303478],[116.40223548797113,39.939407391930395],[116.3994645571125,39.93945383388221],[116.39899044319328,39.93944477328539],[116.39895847060932,39.93917278036466],[116.39896849497887,39.938999788427154],[116.3989695161476,39.9388357950808],[116.3991625664896,39.938794820151685] // 围栏
      ],
      "description": "菊儿社区居委会", // 社区名称/安装地址/小区名称
      "insertTime": "2020-12-24 18:06:05", //  数据添加事件
      "source": "vs" // 数据类型
    },
    {
      "code": "11010100300802033",
      "name": "菊儿14号",
      "usingType": 1,
      "longitude": 116.3980965489,
      "latitude": 39.9371847756,
      "fence": null,
      "description": "菊儿2小区",
      "insertTime": "2020-12-30 17:48:56",
      "source": "vsr"
    },
    {
      "code": "11010100300802039",
      "name": "菊儿101号",
      "usingType": 1,
      "longitude": 116.4011123173,
      "latitude": 39.9373992053,
      "fence": null,
      "description": "菊儿2小区",
      "insertTime": "2020-12-30 17:48:56",
      "source": "vsr"
    },
    {
      "code": "11010100300802031",
      "name": "菊儿10号",
      "usingType": 1,
      "longitude": 116.3986976406,
      "latitude": 39.9373908225,
      "fence": null,
      "description": "菊儿2小区",
      "insertTime": "2020-12-30 17:48:56",
      "source": "vsr"
    },
    {
      "code": "11010100300802041",
      "name": "菊儿105号",
      "usingType": 1,
      "longitude": 116.4016385053,
      "latitude": 39.9374243222,
      "fence": null,
      "description": "菊儿2小区",
      "insertTime": "2020-12-30 17:48:56",
      "source": "vsr"
    },
    {
      "code": "11010100300802034",
      "name": "菊儿16号",
      "usingType": 1,
      "longitude": 116.3978924715,
      "latitude": 39.9375137473,
      "fence": null,
      "description": "菊儿2小区",
      "insertTime": "2020-12-30 17:48:56",
      "source": "vsr"
    },
    {
      "code": "11010100300802035",
      "name": "菊儿18号",
      "usingType": 1,
      "longitude": 116.3980965395,
      "latitude": 39.9372587726,
      "fence": null,
      "description": "菊儿2小区",
      "insertTime": "2020-12-30 17:48:56",
      "source": "vsr"
    },
    {
      "code": "11010100300802032",
      "name": "菊儿12号",
      "usingType": 1,
      "longitude": 116.3979784757,
      "latitude": 39.9375957502,
      "fence": null,
      "description": "菊儿2小区",
      "insertTime": "2020-12-30 17:48:56",
      "source": "vsr"
    },
    {
      "code": "11010100300802042",
      "name": "菊儿107号",
      "usingType": 1,
      "longitude": 116.3997169037,
      "latitude": 39.9372589579,
      "fence": null,
      "description": "菊儿2小区",
      "insertTime": "2020-12-30 17:48:56",
      "source": "vsr"
    },
    {
      "code": "11010100300802040",
      "name": "菊儿103号",
      "usingType": 1,
      "longitude": 116.4017995512,
      "latitude": 39.9375473559,
      "fence": null,
      "description": "菊儿2小区",
      "insertTime": "2020-12-30 17:48:56",
      "source": "vsr"
    }
  ]
}
//地图所有撒点
let O = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            "relationID": "fb7eae237e594dc6a4e431897a8f9c4d",
            "parentCode": "11010100300802033",
 
            "parentType": 1,
            "usingType": 6,
            "name": "1单元", // 名称
            "longitude": 116.3980965489,
 // 经纬度
            "latitude": 39.9371847756,
            "picUrl": "",
            "fence": null,
            "code": "1101010030080203301", //当前虚拟空间code, 如果传入usingType=6，则该值为设备code
            "gisType": 1,
            "description": null,
            "extend": null,
            "creatorID": "c4754460401911ebaa4d00163e1c2899",
            "updaterID": "c4754460401911ebaa4d00163e1c2899",
            "insertTime": "2020-12-30 18:06:00",
            "updateTime": "2020-12-30 18:06:00",
            "superVirtualCode": "11010100300802",
            "deviceType": 'access', // 设备类型，如 'access', 'camera',
            "thingID":"2879425b64f9466aa9696c0f0a780e78",
            "inOutType":null // 进出类型，1:进  2:出  3:空旷地带
        }
    ]
}