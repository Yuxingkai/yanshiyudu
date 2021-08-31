
  let realhouse = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "spaceNum": 12,
        //小区数量
        "buildingNum": 2,
    //楼栋数量
        "houseNum": 21,
        //房屋数量
        "selfNum": 1,
            //自住
        "rentNum": 10,
            //出租
        "freeNum": 1
            //闲置
    }
}
// let zb = {
//     "responseStatus": {
//         "resultCode": 0,
//         "successMessage": true
//     },
//     "data": [
//         {
//             "superVirtualCode": "1110001",    //空间code
//             "num": 2,                //数量
//             "name": "test002"    //空间名称
//         },
//         {
//             "num": 10,
//             "name": "test001"
//         }
//     ]
// }
let zb = {"responseStatus":{"resultCode":0,"successMessage":true},"data":[{"superVirtualCode":"500103014001000","num":5572,"name":"煤建新村社区"},{"superVirtualCode":"500103005011000","num":4481,"name":"学田湾社区"},{"superVirtualCode":"500103008010000","num":4379,"name":"凉亭子社区"},{"superVirtualCode":"500103014005000","num":4239,"name":"金银湾社区"},{"superVirtualCode":"500103005008000","num":4232,"name":"桂花园社区"},{"num":114148,"name":"其他"}]}
let rzl = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            "name": "test001",
    //空间名
            "totalNum": 10,
        //总房间数
            "checkIn": 10
            //入住房间数
        },
        {
            "name": "test002",
            "totalNum": 12,
            "checkIn": 1
        },
        {
            "name": "test003",
            "totalNum": 12,
            "checkIn": 11
        },
        {
            "name": "test004",
            "totalNum": 2,
            "checkIn": 1
        }
    ]
}
let fwtj = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "rentNum": 220,
            //租房人数
        "selfNum": 6879
    //自住人数 
    }
}
// let fwfx = {
//     "responseStatus": {
//         "resultCode": 0,
//         "successMessage": true
//     },
//     "data": [
//         {
//             "name": "test001",
//     //空间名称
//             "totalNum": 100,
//             //总房屋数量
//             "selfNum": 20,
//             //自住
//             "rentNum": 10,
//             //出租
//             "workNum": 10
//             //办公
//         },
//         {
//             "name": "test002",
//             "totalNum": 22,
//             "selfNum": 11,
//             "rentNum": 10,
//             "workNum": 10
//         }
//     ]
// }
//渝中区房屋分析
let fwfx = {"responseStatus":{"resultCode":0,"successMessage":true},"data":[{"name":"凯旋路社区","totalNum":1040,"selfNum":791,"rentNum":0,"workNum":0},{"name":"胜利路社区","totalNum":179,"selfNum":126,"rentNum":0,"workNum":0},{"name":"珊瑚湾社区","totalNum":1119,"selfNum":719,"rentNum":0,"workNum":0},{"name":"袁家岗社区","totalNum":1319,"selfNum":565,"rentNum":0,"workNum":0},{"name":"棉花街社区","totalNum":1353,"selfNum":1222,"rentNum":0,"workNum":0},{"name":"公园路社区","totalNum":195,"selfNum":148,"rentNum":0,"workNum":0},{"name":"民乐村社区","totalNum":2002,"selfNum":1057,"rentNum":0,"workNum":0},{"name":"江山华庭小区","totalNum":339,"selfNum":266,"rentNum":0,"workNum":0},{"name":"兴隆街社区","totalNum":355,"selfNum":321,"rentNum":0,"workNum":0},{"name":"巴县衙门社区","totalNum":2903,"selfNum":2283,"rentNum":0,"workNum":0},{"name":"十八梯社区","totalNum":1819,"selfNum":1649,"rentNum":0,"workNum":0},{"name":"双钢路社区","totalNum":1719,"selfNum":1488,"rentNum":0,"workNum":0},{"name":"较场口社区","totalNum":2058,"selfNum":960,"rentNum":0,"workNum":0},{"name":"石油路社区","totalNum":890,"selfNum":188,"rentNum":0,"workNum":0},{"name":"华一坡社区","totalNum":1521,"selfNum":1439,"rentNum":0,"workNum":0},{"name":"沧白路社区","totalNum":1257,"selfNum":943,"rentNum":0,"workNum":0},{"name":"浮图关社区","totalNum":2669,"selfNum":2244,"rentNum":0,"workNum":0},{"name":"枇杷山正街社区","totalNum":2265,"selfNum":1896,"rentNum":0,"workNum":0},{"name":"邮政局巷社区","totalNum":1971,"selfNum":1630,"rentNum":0,"workNum":0},{"name":"大坪正街社区","totalNum":1343,"selfNum":1255,"rentNum":0,"workNum":0},{"name":"铁路坡社区","totalNum":1133,"selfNum":830,"rentNum":0,"workNum":0},{"name":"金汤街社区","totalNum":1268,"selfNum":1027,"rentNum":0,"workNum":0},{"name":"桂花园新村社区","totalNum":2496,"selfNum":2036,"rentNum":0,"workNum":0},{"name":"重庆村社区","totalNum":491,"selfNum":445,"rentNum":0,"workNum":0},{"name":"白象街社区","totalNum":325,"selfNum":197,"rentNum":0,"workNum":0},{"name":"新都巷社区","totalNum":2178,"selfNum":1452,"rentNum":0,"workNum":0},{"name":"曾家岩社区","totalNum":2730,"selfNum":2103,"rentNum":0,"workNum":0},{"name":"石板坡社区","totalNum":643,"selfNum":562,"rentNum":0,"workNum":0},{"name":"凉亭子社区","totalNum":4379,"selfNum":3736,"rentNum":0,"workNum":0},{"name":"金银湾社区","totalNum":4239,"selfNum":3269,"rentNum":0,"workNum":0},{"name":"民生路社区","totalNum":1824,"selfNum":1451,"rentNum":0,"workNum":0},{"name":"嘉韵山水小区","totalNum":1878,"selfNum":1511,"rentNum":0,"workNum":0},{"name":"彭家花园社区","totalNum":2972,"selfNum":2484,"rentNum":0,"workNum":0},{"name":"中山二路社区","totalNum":3121,"selfNum":2835,"rentNum":0,"workNum":0},{"name":"二府衙社区","totalNum":198,"selfNum":194,"rentNum":0,"workNum":0},{"name":"肖家湾社区","totalNum":2104,"selfNum":1214,"rentNum":0,"workNum":0},{"name":"长帆江岸公馆","totalNum":864,"selfNum":770,"rentNum":0,"workNum":0},{"name":"张家花园社区","totalNum":1411,"selfNum":1012,"rentNum":0,"workNum":0},{"name":"七牌坊社区","totalNum":939,"selfNum":805,"rentNum":0,"workNum":0},{"name":"上大田塆社区","totalNum":3660,"selfNum":2870,"rentNum":0,"workNum":0},{"name":"新影村社区","totalNum":3448,"selfNum":2994,"rentNum":0,"workNum":0},{"name":"大井巷社区","totalNum":2401,"selfNum":1915,"rentNum":0,"workNum":0},{"name":"天灯堡社区","totalNum":3456,"selfNum":2444,"rentNum":0,"workNum":0},{"name":"领事巷社区","totalNum":2239,"selfNum":1762,"rentNum":0,"workNum":0},{"name":"临江门社区","totalNum":489,"selfNum":428,"rentNum":0,"workNum":0},{"name":"厚慈街社区","totalNum":731,"selfNum":586,"rentNum":0,"workNum":0},{"name":"上清寺路社区","totalNum":2751,"selfNum":1556,"rentNum":0,"workNum":0},{"name":"国际村社区","totalNum":1094,"selfNum":1027,"rentNum":0,"workNum":0},{"name":"邹容路社区","totalNum":857,"selfNum":542,"rentNum":0,"workNum":0},{"name":"桂花园社区","totalNum":4232,"selfNum":3472,"rentNum":0,"workNum":0},{"name":"莲花池社区","totalNum":1516,"selfNum":900,"rentNum":0,"workNum":0},{"name":"朝千路社区","totalNum":1691,"selfNum":1197,"rentNum":0,"workNum":0},{"name":"学田湾社区","totalNum":4481,"selfNum":2194,"rentNum":0,"workNum":0},{"name":"罗汉寺社区","totalNum":831,"selfNum":510,"rentNum":0,"workNum":0},{"name":"陕西路社区","totalNum":1103,"selfNum":698,"rentNum":0,"workNum":0},{"name":"春森路社区","totalNum":4041,"selfNum":2464,"rentNum":0,"workNum":0},{"name":"解放西路社区","totalNum":2073,"selfNum":1726,"rentNum":0,"workNum":0},{"name":"畔江楼小区","totalNum":191,"selfNum":161,"rentNum":0,"workNum":0},{"name":"虎头岩社区","totalNum":192,"selfNum":181,"rentNum":0,"workNum":0},{"name":"自力巷社区","totalNum":2098,"selfNum":1413,"rentNum":0,"workNum":0},{"name":"马家堡社区","totalNum":3091,"selfNum":1053,"rentNum":0,"workNum":0},{"name":"抗建堂社区","totalNum":2550,"selfNum":2134,"rentNum":0,"workNum":0},{"name":"竹木街社区","totalNum":352,"selfNum":181,"rentNum":0,"workNum":0},{"name":"归元寺社区","totalNum":1581,"selfNum":1447,"rentNum":0,"workNum":0},{"name":"煤建新村社区","totalNum":5572,"selfNum":4350,"rentNum":0,"workNum":0},{"name":"大黄路社区","totalNum":4107,"selfNum":3684,"rentNum":0,"workNum":0},{"name":"王家坡社区","totalNum":3818,"selfNum":2966,"rentNum":0,"workNum":0},{"name":"人和街社区","totalNum":46,"selfNum":44,"rentNum":0,"workNum":0},{"name":"渝铁村社区","totalNum":364,"selfNum":228,"rentNum":0,"workNum":0},{"name":"临江佳园小区","totalNum":1656,"selfNum":1562,"rentNum":0,"workNum":0},{"name":"建设路社区","totalNum":1340,"selfNum":1046,"rentNum":0,"workNum":0},{"name":"捍卫路社区","totalNum":2345,"selfNum":2033,"rentNum":0,"workNum":0},{"name":"建设新村小区","totalNum":216,"selfNum":172,"rentNum":0,"workNum":0},{"name":"临华路社区","totalNum":2929,"selfNum":2511,"rentNum":0,"workNum":0}]}
let fwyj = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
   

 "data":{
    "list": [
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
        }
    ],
    "alarmNum": 14        //报警总数
    }
}
let drtxjl = {
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
            "openType": 100101,
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
            "address": "景阳胡同",
                    //通行位置
            "rowTime": "2020-11-19 15:40:15",
            "virtualSpaceCode": "310104011013001"
        }
    ]
}
// let ghbc = {
//   "responseStatus": {
//     "resultCode": 0,
//     "successMessage": true
//   },
//   "data": {
//     "name": "xxxx", // 楼栋名称
//     "picUrl": "https://xxx.jpg", //平面图
//     "totalHouseCount": 1, // 总房屋数量
//     "totalPeopleCount": 2, // 人员数量
//     "zhongdianCount": 3, // 重点人员数量
//     "guanaiCount": 4, // 关爱人员数量
//     "dangyuanCount": 5, // 党员数量
//     "rentCount": 6, // 出租房数量
//     "freeCount": 7, // 空置房数量
//     "selfCount": 8, // 自主房数量
//     "workCount": 9, // 办公房数量
//     "houses": [
//       {
//         "name": "101", // 房屋名称
//         "code": "1101121233545", // code
//         "spaceUsingType": 1 // 1： 自主 2：出租 3：办公
//       }
//     ]
//   }
// }
let ghp = {
  "responseStatus": {
    "resultCode": 0,
    "successMessage": true
  },
  "data": {
    "totalCount": 10, // 总人员数量
    "guanaiCount": 20, // 关爱人员数量
    "zhongdianCount": 30, // 重点人员数量
    "dangyuanCount": 40, // 党员数量
    "peoples": [ // 人员列表
      {
        "name": "xxx",
        "age": 32,
        "phoneNo": "131****3344",
        "gender": "男",
        "labelName": "关爱人员",
        "spaceOwnerRelation": "户主",
        "maxOpenTime": "2020-12-20 12:32:45", // 最后通行时间
        "idPic": "http://31.0.178.231:10020/blueplus/people/Import_310104195801043219.jpg" // 证件照
      }
    ]
  }
}
  export default {
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/physicalHouse':  option => {
        console.log(option)
        return realhouse
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/percentageHousing':  option => {
        console.log(option)
        return zb
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/occupancyStatistics':  option => {
        console.log(option)
        return rzl
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/houseStatistics':  option => {
        console.log(option)
        return fwtj
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/houseAnalysis':  option => {
        console.log(option)
        return fwfx
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/houseAlarmList':  option => {
        console.log(option)
        return fwyj
    },
    'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/houseAlarmAccess':  option => {
        console.log(option)
        return drtxjl
    },
    // 'post|http://172.31.1.62:5003/api/v1/houses/getHousesByBuildingCode':  option => {
    //   console.log(option)
    //   return ghbc
    // },
    'post|http://172.31.1.62:5003/api/v1/houses/getHousePeoples':  option => {
      console.log(option)
      return ghp
    },
    }