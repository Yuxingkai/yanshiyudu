//实有车辆
  let realcar = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "totalNum": 41,
        //总数
        "selfNum": 20,
        //自有车辆
        "rentNum": 20,
        //出租车辆
        "otherNum": 2
 ,   //其他
     "totalZhuliu": 11,    //总驻留
        "registerCar": 10,    //住户驻留
        "tempCar": 1    //临时驻留
    }
}
//本外地车比例
let bwdbl = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "totalNum": 44,
                //总车数量
        "locationCar": 32,
            //本地车辆数
        "otherNum": 12
                //外地车辆数
    }
}
//车辆保有量统计
let byl = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "totalNum": 96,
                //总车辆数
        "data": [
            {
                "name": "test002",
             //空间名称
                "num": 69,
                            //数量
                "spaceCode": "1110001"
        //空间编码
            },
            {
                "name": "武康路6弄、8号",
                "num": 10,
                "spaceCode": "310104004010001"
            },
            {
                "name": "田林十三村",
                "num": 0,
                "spaceCode": "310104011028001"
            },
            {
                "name": "华鼎广场",
                "num": 10,
                "spaceCode": "310104011039001"
            },
            {
                "name": "公安住宅小区",
                "num": 0,
                "spaceCode": "31010401104501"
            },
            {
                "name": "泰东小区",
                "num": 0,
                "spaceCode": "31010401402701"
            },
            {
                "name": "汇东小区",
                "num": 0,
                "spaceCode": "31010401402703"
            },
            {
                "name": "梅陇五村",
                "num": 0,
                "spaceCode": "310104015037001"
            },
            {
                "name": "宛南六村",
                "num": 0,
                "spaceCode": "31010414010033"
            },
            {
                "name": "龙漕路66弄小区",
                "num": 0,
                "spaceCode": "31010417010030"
            },
            {
                "name": "丁香园",
                "num": 0,
                "spaceCode": "31010419010006"
            },
            {
                "name": "龙南七村 ",
                "num": 27,
                "spaceCode": "31010420010012"
            },
            {
                "name": "体育花苑",
                "num": 0,
                "spaceCode": "31010421010018"
            }
        ]
    }
}
//车牌统计
let cpdt =  {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "totalNum": 93,
            //总数
        "result": [
            {
                "plate": "湘",
         //车牌第一位
                "num": 1,
            //数量
                "name": "湖南"
    //车辆所属省份
            },
            {
                "plate": "沪",
                "num": 67,
                "name": "上海"
            },
            {
                "plate": "浙",
                "num": 4,
                "name": "浙江"
            },
            {
                "plate": "皖",
                "num": 1,
                "name": "安徽"
            },
            {
                "plate": "粤",
                "num": 3,
                "name": "广东"
            },
            {
                "plate": "鄂",
                "num": 1,
                "name": "湖北"
            },
            {
                "plate": "蒙",
                "num": 1,
                "name": "未知"
            },
            {
                "plate": "鲁",
                "num": 1,
                "name": "山东"
            },
            {
                "plate": "苏",
                "num": 10,
                "name": "江苏"
            },
            {
                "plate": "豫",
                "num": 2,
                "name": "河南"
            },
            {
                "plate": "赣",
                "num": 1,
                "name": "江西"
            },
            {
                "plate": "辽",
                "num": 1,
                "name": "辽宁"
            }
        ]
    }
}
//车位统计
let cwtj = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "totalNum": 100,
        //总车位数
        "zhuliuNum": 2,
        //已停
        "freeNum": 10,
            //空余
        "registerNum": 10,
       //登记驻留
        "tempNum": 2,
            //临时驻留
        "hourNums": [
           //每小时驻留数
            1,
            1,
            1,
            2,
            2,
           12,
            2,
            2,
            2,
            12,
            2,
            12,
            2,
            2,
            12,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ]
    }
}
let clcrk =  { "responseStatus": {
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
//车辆抓拍列表
let clzp = {
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
            "peopleName": "一甲陌生人",
            //驾驶人   没有则为陌生人
            "credentialType": 0,
            "credentialNo": "",
            "credentialSymbol": "",
            "phoneNo": "110",
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
            "plateColor": 1,//  车牌颜色 1-蓝色 2-黄色 3-白色 4-黑色 5-绿色 6-黄绿色 99-其他
            "address": "凌四小区",
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
//一车一档
let ycyd = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "carInfo": {            //车辆信息
            "plateNo": "沪B875S5",
    //车牌号
            "plateColor": '红色',
        //颜色
            "plateType": '1',
            "vehiclesBrand": '宝马',
        //品牌
            "vehiclesColor": '白色',
            "vehiclesPic": "",
            //图片
            "vehiclesModel": 'suv',
            "vehiclesType": 1,        //'车牌类型 1-机动车 2-非机动车
        },
        "accessNum": 4,
        //通行数量(抓拍数量)
        "accessSpaceCodeNum": 1,
        //通行车场
        "thingcodesNum": 2
        //通行道闸
    }
}
let txcc = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            "relationID": "44f0c8738a8f4bcb8b2e80c911000000",
            "name": "田林十二村",
        //停车场名称
            "longitude": null,
            "latitude": null,
            "picUrl": null,
            //照片
            "fence": null,
            "code": "310104011013001101",
        //编码
            "gisType": 1,
            "description": null,
            "extend": null,
            "superVirtualCode": "310104011013001",
            "superVirtualName": "test001"
        },
        {
            "relationID": "44f0c8738a8f4bcb8b2e80c911000000",
            "name": "田林十村",
        //停车场名称
            "longitude": null,
            "latitude": null,
            "picUrl": null,
            //照片
            "fence": null,
            "code": "310104011013001101",
        //编码
            "gisType": 1,
            "description": null,
            "extend": null,
            "superVirtualCode": "310104011013001",
            "superVirtualName": "test002"
        },
        {
            "relationID": "44f0c8738a8f4bcb8b2e80c911000000",
            "name": "田林十三村",
        //停车场名称
            "longitude": null,
            "latitude": null,
            "picUrl": null,
            //照片
            "fence": null,
            "code": "310104011013001101",
        //编码
            "gisType": 1,
            "description": null,
            "extend": null,
            "superVirtualCode": "310104011013001",
            "superVirtualName": "test003"
        }
    ]
}
let clsx = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "data": [
            {
                "plateNo": "沪A111111",
          //车牌号
                "peopleName": "住户1",
         //住户名
                "plateType": 1,
                     //车辆类型 1-机动车 2-非机动车
                "spaceCode": "310104011013001101",
            
                "villageName": "test002",
           //小区
                "labelName": "",
                         //标签名
                "inParkingTime": "2020-11-27 02:27:36"  //驻留车辆的  进入时间
            },
            {
                "plateNo": "沪A111111",
          //车牌号
                "peopleName": "住户1",
         //住户名
                "plateType": 1,
                     //车辆类型 1-机动车 2-非机动车
                "spaceCode": "310104011013001101",
            
                "villageName": "test002",
           //小区
                "labelName": "",
                         //标签名
                "inParkingTime": "2020-11-27 02:27:36"  //驻留车辆的  进入时间
            },
        ],
        "totalNum": 87
            //总数
    }
}
let clgg = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": [
        {
            "thingCode": "",
            "spaceCode": "310104011013001101",
            "plateNo": "沪B875S5",
            "peopleName": "",
            "credentialType": 0,
            "credentialNo": "",
            "credentialSymbol": "",
            "phoneNo": "",
            "captureTime": "2020-11-26 06:44:27",
            "platePic": "Car/20201126/48f64a08-b189-44e5-8ad7-8a2533daf139.jpg",
            "minPlatePic": "Car/20201126/edad5b6d-574d-4d56-99cb-6ff4d5a4be9a.jpg",
            "inOutType": 1,
            "address": "",
            "virtualSpaceCode": "310104011013001",
            "fence": {
                     //轨迹围栏坐标
                "fence": "123"
            }
        },
        {
            "_id": "5fbf4ed5a182379660f2a5ec",
            "thirdLogID": "bcb70fd02fb211ebb651d91491906adf",
            "thingCode": "1110001-车辆出入口1",
            "spaceCode": "310104011013001102",
            "plateNo": "沪B875S5",
            "peopleName": "",
            "credentialType": 0,
            "credentialNo": "",
            "credentialSymbol": "",
            "phoneNo": "",
            "captureTime": "2020-11-26 06:44:14",
            "platePic": "Car/20201126/4b93515b-c06e-4730-8584-701d69ac4d9b.jpg",
            "minPlatePic": "Car/20201126/2d738e60-49b0-4219-9837-e844bc2a9f8f.jpg",
            "inOutType": 1,
            "carAttitude": 0,
            "size": 0,
            "bodyColor": 0,
            "specialVehicles": 0,
            "marker": 0,
            "plateType": 0,
            "plateColor": 0,
            "address": "",
            "rowTime": "2020-11-26 14:44:37",
            "virtualSpaceCode": "310104011013001",
            "fence": {
                     //轨迹围栏坐标
                "fence": "456"
            }
        },
        {
            "_id": "5fbf4e73a182379660f2a497",
            "thirdLogID": "825d9f702fb211ebb651d91491906adf",
            "thingCode": "",
            "spaceCode": "310104011013001101",
            "plateNo": "沪B875S5",
            "peopleName": "",
            "credentialType": 0,
            "credentialNo": "",
            "credentialSymbol": "",
            "phoneNo": "",
            "captureTime": "2020-11-26 06:42:16",
            "platePic": "Car/20201126/da0a6469-b820-46f1-99f0-4182801302df.jpg",
            "minPlatePic": "Car/20201126/2d1a08c3-d525-449c-b083-cda9e9ae7914.jpg",
            "inOutType": 1,
            "carAttitude": 0,
            "size": 0,
            "bodyColor": 0,
            "specialVehicles": 0,
            "marker": 0,
            "plateType": 0,
            "plateColor": 0,
            "address": "",
            "rowTime": "2020-11-26 14:42:59",
            "virtualSpaceCode": "310104011013001",
            "fence": {
                 //轨迹围栏坐标
                "fence": "123"
            }
        },
        {
            "_id": "5fbf04aba182379660f18047",
            "thirdLogID": "883798002f8611ebb651d91491906adf",
            "thingCode": "",
            "spaceCode": "310104011013001101",
            "plateNo": "沪B875S5",
            "peopleName": "",
            "credentialType": 0,
            "credentialNo": "",
            "credentialSymbol": "",
            "phoneNo": "",
            "captureTime": "2020-11-26 01:27:52",
            "platePic": "Car/20201126/e3b1d758-fa12-43bb-8ecb-8d478b72bfc9.jpg",
    //抓拍大图
            "minPlatePic": "Car/20201126/f937d6d5-d322-4b2d-ae94-72574bb69de5.jpg",
            "inOutType": 2,
            "carAttitude": 0,
            "size": 0,
            "bodyColor": 0,
            "specialVehicles": 0,
            "marker": 0,
            "plateType": 0,
            "plateColor": 0,
            "address": "",
            "rowTime": "2020-11-26 09:28:11",
            "virtualSpaceCode": "310104011013001",
            "fence": {
                    //轨迹围栏坐标
                "fence": "123"
            }
        }
    ]
}
let cltxjl = {
    "responseStatus": {
        "resultCode": 0,
        "successMessage": true
    },
    "data": {
        "list": [
            {
                "_id": "5fd1c688e344494d011b6685",
                "thirdLogID": "a6db0d303ab411eb9bd20f58c4156a58",
                "thingCode": "",
                "spaceCode": "310104011013001101",
                "plateNo": "沪B875S5",
                "peopleName": "一甲",
                "credentialType": 0,
                "credentialNo": "",
                "credentialSymbol": "",
                "phoneNo": "111111111",
                "captureTime": "2020-12-10 06:55:49",
          //通行时间
                "platePic": "Car/20201210/0c1c7af3-b71b-415e-baef-6ba8f4458c56.jpg",
                "minPlatePic": "Car/20201210/676c0c15-d8d1-41b6-9840-a126f08565f5.jpg",
                "inOutType": 1,
         //进出方向 1-进 2-出 3-空旷地带
                "carAttitude": 0,
                "size": 0,
                "bodyColor": 0,
                "specialVehicles": 0,
                "marker": 0,
                "plateType": 0,
                "plateColor": 1, //  车牌颜色 1-蓝色 2-黄色 3-白色 4-黑色 5-绿色 6-黄绿色 99-其他
                "address": "凌四小区",
         //通行位置
                "rowTime": "2020-12-10 14:56:08",
                "virtualSpaceCode": "310104011013001",
                "villageName": "田林十二村",
         //小区
                "ioCode": "",
                "ioName": "田林12村停车场"
            },
            {
                "_id": "5fd1c688e344494d011b6685",
                "thirdLogID": "a6db0d303ab411eb9bd20f58c4156a58",
                "thingCode": "",
                "spaceCode": "310104011013001101",
                "plateNo": "沪B875S5",
                "peopleName": "一甲",
                "credentialType": 0,
                "credentialNo": "",
                "credentialSymbol": "",
                "phoneNo": "111111111",
                "captureTime": "2020-12-10 06:55:49",
          //通行时间
                "platePic": "Car/20201210/0c1c7af3-b71b-415e-baef-6ba8f4458c56.jpg",
                "minPlatePic": "Car/20201210/676c0c15-d8d1-41b6-9840-a126f08565f5.jpg",
                "inOutType": 2,
         //进出方向 1-进 2-出 3-空旷地带
                "carAttitude": 0,
                "size": 0,
                "bodyColor": 0,
                "specialVehicles": 0,
                "marker": 0,
                "plateType": 0,
                "plateColor": 1, //  车牌颜色 1-蓝色 2-黄色 3-白色 4-黑色 5-绿色 6-黄绿色 99-其他
                "address": "凌er小区",
         //通行位置
                "rowTime": "2020-12-10 14:56:08",
                "virtualSpaceCode": "310104011013001",
                "villageName": "田林十二村",
         //小区
                "ioCode": "",
                "ioName": "田林12村停车场"
            }
        ],
        "totalNum": 4
    }
}
  export default {
    'post|http://10.1.1.91:5003/api/v1/situationalAnalysis/carCount':  option => {
        console.log(option)
        return realcar
    },
    'post|http://10.1.1.91:5003/api/v1/situationalAnalysis/locationCarProportions':  option => {
        console.log(option)
        return bwdbl
    },
    'post|http://10.1.1.91:5003/api/v1/situationalAnalysis/carHoldingStatistics':  option => {
        console.log(option)
        return byl
    },
    'post|http://10.1.1.91:5003/api/v1/situationalAnalysis/licensePlateStatistics':  option => {
        console.log(option)
        return cpdt
    },
    'post|http://10.1.1.91:5003/api/v1/situationalAnalysis/parkingStatistics':  option => {
        console.log(option)
        return cwtj
    },
    'post|http://10.1.1.91:5003/api/v1/situationalAnalysis/carInoutInfo':  option => {
        console.log(option)
        return clcrk
    },
    'post|http://10.1.1.91:5003/api/v1/situationalAnalysis/parkingLog':  option => {
        console.log(option)
        return clzp
    },
    'post|http://10.1.1.91:5003/api/v1/situationalAnalysis/carInfo':  option => {
        console.log(option)
        return ycyd
    },
    'post|http://10.1.1.91:5003/api/v1/situationalAnalysis/accessParking':  option => {
        console.log(option)
        return txcc
    },
    'post|http://10.1.1.91:5003/api/v1/situationalAnalysis/parkingList':  option => {
        console.log(option)
        return clsx
    },
    'post|http://10.1.1.91:5003/api/v1/situationalAnalysis/vehicleTrajectory':  option => {
        console.log(option)
        return clgg
    },
    'post|http://10.1.1.91:5003/api/v1/situationalAnalysis/parkingaccessInfo':  option => {
        console.log(option)
        return cltxjl
    },
    }