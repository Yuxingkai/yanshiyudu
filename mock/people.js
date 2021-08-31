
    let realpeople = {
        "responseStatus": {
            "resultCode": 0,
            "successMessage": true
        },
        "data": {
            "locationPeopleNumInfo": 10,    //户籍人口
            "allPeopleNumInfo": 111,            //所有人口
            "spaceUsingTypeInfo": 10,        //租客人口
            "guanaiNum": 10,                       //关爱人口
            "guanzhuNum": 10                    //关注人口
        }
        }
        let rybl = {
            "responseStatus": {
                "resultCode": 0,
                "successMessage": true
            },
            "data": {
                "childrenNum": 1,        //0--20
                "youngNum": 10,            //20--40
                "middleAgedNum": 101,       //40--60
                "oldNum": 10                    //>60
            }
        }
        let  dj = {
            "responseStatus": {
                "resultCode": 0,
                "successMessage": true
            },
            "data": {
                "totalNum": 291,
                //总数
                "data": [
                    {
                        "name": "test001",
                //空间名称
                        "spaceCode": "1110001",
                //所属空间code
                        "peopleNum": 10
                    //人数
                    },
                    {
                        "name": "test002",
                //空间名称
                        "spaceCode": "1110041",
                //所属空间code
                        "peopleNum": 30
                    //人数
                    },
                    {
                        "name": "test003",
                //空间名称
                        "spaceCode": "1110021",
                //所属空间code
                        "peopleNum": 50
                    //人数
                    }
                ]
            }
        }
        let hj = {
            "responseStatus": {
                "resultCode": 0,
                "successMessage": true
            },
            "data": [
                {
                    "peopleNum": 1,
                    "domiclle": "上海"
                },
                {
                    "peopleNum": 12,
                    "domiclle": "北京"
                },
                {
                    "peopleNum": 123,
                    "domiclle": "广州"
                },
                {
                    "peopleNum": 1111,
                    "domiclle": "湖北"
                },
                {
                    "peopleNum": 11,
                    "domiclle": "湖南"
                },
                {
                    "peopleNum": 11,
                    "domiclle": "日本"
                },
                {
                    "peopleNum": 15,
                    "domiclle": "墨尔本"
                },
                {
                    "peopleNum": 19,
                    "domiclle": "蒙古"
                },
                {
                    "peopleNum": 1,
                    "domiclle": "一甲"
                },
            ]
        }
        let drtxrc = {
        "responseStatus": {
            "resultCode": 0,
            "successMessage": true
        },
        "data": {
            "inTypeNum": 10,        //进 人次
            "outTypeNum": 10,    //出 人次
            "peopleTypeNum": 10,    // 居民人次
            "visitorTypeNum": 10,    //访客人次
            "strangerNum": 10,    //陌生人次
            "guanaiNum": 10,    //关爱人次
            "guanzhuNum": 10,    //关注人次
            "hourNums": [        //从0点到24点每小时的通行数量
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    8,
                    33,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                ]
            }
        }
        let ssly = {
            "responseStatus": {
                "resultCode": 0,
                "successMessage": true
            },
            "data": {
                "accessNum": 41,
                //实时通行
                "faceNum": 10,
                        //实时抓拍
                "hourNums": [
                    //从0点到24点每小时的抓拍数。
                    0,
                    0,
                    0,
                    0,
                    0,
                    10,
                    0,
                    0,
                    0,
                    10,
                    0,
                    0,
                    0,
                    20,
                    0,
                    0,
                    0,
                    40,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        }
        //当日通行人列表
        let drtxlist = {
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
                    "phoneNo": "13121222599",
                    "inOutType": 1,
                    "openResult": 1,
                    "openTime": "2020-11-06 05:33:26.000",
            //开门时间
                    "labelNames": "标签1,标签2,关爱人员-下属1",        //标签名
                     "houseAddress": "住户地址1110001-楼栋01-房屋1",
            //居住地址
                    "faceUrl":"",    //图片
                    "address": "菊儿胡同",  // 通行地址
                }
            ]
        }
        //实时流量列表
        let realFlow = {
            "responseStatus": {
                "resultCode": 0,
                "successMessage": true
            },
            "data": [
                {
                    "_id": "5fae1fd05ee673239ca8f87c",
                    "peopleName": "姓名",
            //无姓名则属于陌生人
                    "credentialNo": "1",
                    "phoneNo": "13121223566",
                //手机号
                    "faceCaptureTime": "2020-11-13 10:04:35",
            //抓拍时间
                    "faceUrl": "http://31.0.223.16:9000/blueplus/facecapture/access/2020/11/13/963e7bd1255411ebb4c8674aec5bc551-1605233079.jpeg",
                //抓拍图片
                    "bkgUrl": "",
                    "address": "烟袋斜街",
                //抓拍地址
                    "houseAddress": "31010413010011",
                //住户居住地址
                    "labelNames": "标签1,标签2,关爱人员-下属1",
                    code:"1110001-出入口2",
                  deviceType: 'face',
                  longitude: "116.401555",
                  latitude: "39.938139"
            //住户标签
                },
                {
                    "_id": "5fae1fd05ee673239ca8f87c",
                    "peopleName": "一甲",
            //无姓名则属于陌生人
                    "credentialNo": "1",
                    "phoneNo": "13121223566",
                //手机号
                    "faceCaptureTime": "2020-11-13 10:04:35",
            //抓拍时间
                    "faceUrl": "http://31.0.223.16:9000/blueplus/facecapture/access/2020/11/13/963e7bd1255411ebb4c8674aec5bc551-1605233079.jpeg",
                //抓拍图片
                    "bkgUrl": "",
                    "address": "烟袋斜街",
                //抓拍地址
                    "houseAddress": "31010413010011",
                //住户居住地址
                    "labelNames": "标签1,标签2,关爱人员-下属1",
                    code:"1110001-出入口1",
              deviceType: 'face'
            //住户标签
                }
            ]
        }
        // 人口预警
        let rkyj = {
            "responseStatus": {
                "resultCode": 0,
                "successMessage": true
            },
            "data": {
                "totalCount": 3,
                "result": [
                    {
                        'credentialNo': '1111',
                        "_id": "5fb4efa677ed34603e2368bc",
                        "peopleName": "一甲", // 标题
                        "title": "人口预警", // 标题
                        "tags": "人渣", // 标签
                        "address": "凌二小区", // 地址
                        "description": "丁香园", // 描述信息
                        "alarmTime": "2020-11-19 01:51:29", // 报警信息
                        "state": "已超时", // 状态
                        "images": [], // 图片
                        "type": "pepple",
                        "deviceType": 'face',
                        "code": "1101010030080203301",
                      longitude: "116.401855",
                      latitude: "39.938139",
                    },
                    {
                        'credentialNo': '1111',
                        "_id": "5fb4efa677ed34603e2368bc",
                        "title": "人口预警", // 标题
                        "tags": "人渣", // 标签
                      "peopleName": "一甲",
                        "address": "凌三小区", // 地址
                        "description": "丁香园", // 描述信息
                        "alarmTime": "2020-11-19 01:51:29", // 报警信息
                        "state": "已超时", // 状态
                        "images": [], // 图片
                        "type": "pepple",
                        "deviceType": 'car',
                      longitude: "116.401855",
                      latitude: "39.938839",
                    },
                    {
                        'credentialNo': '1111',
                        "_id": "5fb4efa677ed34603e2368bc",
                        "title": "人口预警", // 标题
                        "tags": "人渣", // 标签
                        "address": "凌四小区", // 地址
                        "description": "丁香园", // 描述信息
                        "alarmTime": "2020-11-19 01:51:29", // 报警信息
                        "state": "已超时", // 状态
                        "images": [], // 图片
                        "type": "pepple",
                        "deviceType": 'camera',
                          longitude: "116.401155",
                          latitude: "39.938439",
                    },
                ]
            }
        }
        //实有人口详情
        let syrksx = {
            "responseStatus": {
                "resultCode": 0,
                "successMessage": true
            },
            "data": {
                "totalNum": 6055,
                "list": [
                    {
                        "credentialNo": "110102198305161914",
                        "peopleName": "王铁犁",
                        "genderCode": 1,
                        "age": 37,
                        "phoneNo": "18521736795",
                        "domiclleCode": "110" ,
                      "houseAddress": "体育花苑1号楼501"        //居住地址
                    },
                    {
                        "credentialNo": "110102199601031510",
                        "peopleName": "魏星",
                        "genderCode": 1,
                        "age": 24,
                        "phoneNo": "18515063451",
                        "domiclleCode": "110",
                        "houseAddress": "体育花苑1号楼501"        //居住地址
                    },
                    {
                        "credentialNo": "110105197612075412",
                        "peopleName": "李卫锋",
                        "genderCode": 1,
                        "age": 44,
                        "phoneNo": "13916682317",
                        "domiclleCode": "110",
                        "houseAddress": "体育花苑1号楼501"        //居住地址
                    }
                ]
            }
        }
        //筛选
        let peopleList = {
            "responseStatus": {
                "resultCode": 0,
                "successMessage": true
            },
            "data": {
                "totalCount": 11,
                "result": [
                    {
                        "peopleID": "41d42d20498e11ebaa1f1771881a5686",
                        "credentialType": 1,
                        "credentialNo": "110101192611193021", // 证件号
                        "credentialValidity": "2099-12-31",
                        "peopleName": "韩忠厚", // 姓名
                        "genderCode": 1,
                        "nationCode": "1",
                        "birthDate": "1926-11-19",
                        "originCode": "1101",
                        "domiclle": "北京市",
                        "domiclleCode": "1101",
                        "domiclleRoadName": "",
                        "domiclleRoadCode": "",
                        "domiclleDetailAddress": "",
                        "domiclleAddress": "",
                        "educationCode": 0,
                        "laber": 'djasoidjsad,jasdjadapo,屌丝男士',
                        "politicalCode": 99,
                        "maritalStatusCode": 0,
                        "nationalityCode": 86,
                        "surnameEng": "",
                        "nameEng": "",
                        "phoneNo": "13552333802", // 手机号码
                        "idPic": "",
                        "headPic": "",
                        "livePic": "",
                        "extend": null,
                        "creatorID": "c4754460401911ebaa4d00163e1c2899",
                        "updaterID": "c4754460401911ebaa4d00163e1c2899",
                        "insertTime": "2020-12-29 21:35:07",
                        "updateTime": "2020-12-30 18:51:55",
                        "labelNames": "",
         // 标签
                        "age": 94, // 人员
                        "houseAddress": "" // 居住地址
                    }
                ]
            }
        }
        //一人一档
        let ecahProfile = {
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
                        "nationCode":"2" ,      //民族代码
                        "domiclleDetailAddress": '湖北广水',
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
        //当日通行
        let ecahtxjl = {
            "responseStatus": {
                "resultCode": 0,
                "successMessage": true
            },
            "data": {
                "totalNum": 2,
                "data": [
                    {
                        "_id": "5fb702df77ed34603e2b0122",
                        "thirdLogID": "d47692402ac011eb87ef4962c6380cf9",
                        "thingCode": "",
                        "spaceCode": "3101040110130010006",
                        "peopleName": "牛亚明",
                //开门人员姓名
                        "peopleType": 2,
                //开门人员类型 1-用户开门 2- 访客开门
                        "cardNo": "5C398E1A952102E0",
                    //卡号
                        "credentialType": 99,
                        "credentialNo": "130104197801102413",
                //证件号码
                        "credentialSymbol": "99_130104197801102413",
                        "phoneNo": "15900636979",
                //电话（手机）号码
                        "openType": 100101,
            //开门方式：100101-刷门禁卡开门100201-人脸识别开门100301-手机蓝牙开门100302-手机远程开门100303-电话按键开门100401-出门按钮开门100402-键盘密码开门100501-身份证开门100601-访客呼叫开门100701-二维码开门
                        "openTime": "2020-11-20 07:42:06",
                //开门时间
                        "openResult": 0,
                        "faceUrl": "",
                //人脸图 URL
                        "bkgUrl": "",
                //背景图图 URL
                        "inOutType": 0,
                //进出方向 1-进 2-出 3-空旷地带
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
                        "address": "田林十二村东边门出",
                //通行地址
                        "rowTime": "2020-11-20 07:42:23",
                        "virtualSpaceCode": "310104011013001",
                        "villageName": "田林十二村"
                    },
                    {
                        "_id": "5fb63edc77ed34603e285355",
                        "thirdLogID": "000105002a4c11ebb4c8674aec5bc551",
                        "thingCode": "310104011013010113460046",
                        "spaceCode": "3101040110130010046",
                        "peopleName": "牛亚明",
                        "peopleType": 2,
                        "cardNo": "5C398E1A952102E0",
                        "credentialType": 99,
                        "credentialNo": "130104197801102413",
                        "credentialSymbol": "99_130104197801102413",
                        "phoneNo": "15900636979",
                        "openType": 100401,
                        "openTime": "2020-11-19 17:45:46",
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
                        "rowTime": "2020-11-19 17:46:04",
                        "virtualSpaceCode": "310104011013001",
                        "villageName": "田林十二村"
                    }
                ]
            }
        }
        ecahtxjl = {"responseStatus":{"resultCode":0,"successMessage":true},"data":{"totalNum":4,"data":[{"_id":"601496da68693637643f8edd","thirdLogID":"6149bdc41627492aa7f92f4a7be398ba","thingCode":"163301","spaceCode":"201106171056512503909795419129","peopleName":"35bfe306e8db5bb10df9e305077c9caa","peopleType":1,"cardNo":"4290C4CC","credentialType":1,"credentialNo":"41c5507813174f5d91c4d9df970766972f3e16865765dc580cfa1f0be876c51b","credentialSymbol":"1_41c5507813174f5d91c4d9df970766972f3e16865765dc580cfa1f0be876c51b","phoneNo":"c4f21c6061c54e8f573e878d2c7850e2","openType":100102,"openTime":"2021-01-25 16:48:29","openResult":0,"faceUrl":"","bkgUrl":"","inOutType":1,"headFeature":0,"age":0,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"大井巷7号6单元","rowTime":"2021-01-30 07:14:34","virtualSpaceCode":"500103003019000","villageName":"大井巷社区"},{"_id":"6014fb696869363764410344","thirdLogID":"738ca2e0d27c45df9b6a87e0b48afd04","thingCode":"163301","spaceCode":"201106171056512503909795419129","peopleName":"35bfe306e8db5bb10df9e305077c9caa","peopleType":1,"cardNo":"4290C4CC","credentialType":1,"credentialNo":"41c5507813174f5d91c4d9df970766972f3e16865765dc580cfa1f0be876c51b","credentialSymbol":"1_41c5507813174f5d91c4d9df970766972f3e16865765dc580cfa1f0be876c51b","phoneNo":"c4f21c6061c54e8f573e878d2c7850e2","openType":100102,"openTime":"2021-01-01 19:12:31","openResult":0,"faceUrl":"","bkgUrl":"","inOutType":1,"headFeature":0,"age":0,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"大井巷7号6单元","rowTime":"2021-01-30 14:23:37","virtualSpaceCode":"500103003019000","villageName":"大井巷社区"},{"_id":"601a7fa468693637644d7194","thirdLogID":"f74b0ea6005a4f269472f0171ca338f3","thingCode":"163301","spaceCode":"201106171056512503909795419129","peopleName":"35bfe306e8db5bb10df9e305077c9caa","peopleType":1,"cardNo":"4290C4CC","credentialType":1,"credentialNo":"41c5507813174f5d91c4d9df970766972f3e16865765dc580cfa1f0be876c51b","credentialSymbol":"1_41c5507813174f5d91c4d9df970766972f3e16865765dc580cfa1f0be876c51b","phoneNo":"c4f21c6061c54e8f573e878d2c7850e2","openType":100102,"openTime":"2021-01-01 19:12:23","openResult":0,"faceUrl":"","bkgUrl":"","inOutType":1,"headFeature":0,"age":0,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"大井巷7号6单元","rowTime":"2021-02-03 18:49:08","virtualSpaceCode":"500103003019000","villageName":"大井巷社区"},{"_id":"6016768b6869363764451860","thirdLogID":"1a20abd316c04afdb9e7f3f32be48e00","thingCode":"163301","spaceCode":"201106171056512503909795419129","peopleName":"35bfe306e8db5bb10df9e305077c9caa","peopleType":1,"cardNo":"4290C4CC","credentialType":1,"credentialNo":"41c5507813174f5d91c4d9df970766972f3e16865765dc580cfa1f0be876c51b","credentialSymbol":"1_41c5507813174f5d91c4d9df970766972f3e16865765dc580cfa1f0be876c51b","phoneNo":"c4f21c6061c54e8f573e878d2c7850e2","openType":100102,"openTime":"2021-01-01 08:23:30","openResult":0,"faceUrl":"","bkgUrl":"","inOutType":1,"headFeature":0,"age":0,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"大井巷7号6单元","rowTime":"2021-01-31 17:21:15","virtualSpaceCode":"500103003019000","villageName":"大井巷社区"}]}}
        let ecahkmfs = {
            "responseStatus": {
                "resultCode": 0,
                "successMessage": true
            },
            "data": [
                {
                    "dictionaryID": "dc0d2f3abcfa11e9a2990235d2b38928",
                    "name": "100601",
                //开门方式名称
                    "typeName": "访客呼叫开门",
            //开门方式
                    "groupName": "e_access_log"
                },
                {
                    "dictionaryID": "dc0d2f3bbcfa11e9a2990235d2b38928",
                    "name": "100501",
                    "typeName": "身份证开门",
                    "groupName": "e_access_log"
                },
                {
                    "dictionaryID": "dc0d2f3cbcfa11e9a2990235d2b38928",
                    "name": "100402",
                    "typeName": "键盘密码开门",
                    "groupName": "e_access_log"
                },
                {
                    "dictionaryID": "dc0d2f3dbcfa11e9a2990235d2b38928",
                    "name": "100401",
                    "typeName": "出门按钮开门",
                    "groupName": "e_access_log"
                },
                {
                    "dictionaryID": "dc0d2f3ebcfa11e9a2990235d2b38928",
                    "name": "100303",
                    "typeName": "电话按键开门",
                    "groupName": "e_access_log"
                },
                {
                    "dictionaryID": "dc0d2f3fbcfa11e9a2990235d2b38928",
                    "name": "100302",
                    "typeName": "手机远程开门",
                    "groupName": "e_access_log"
                },
                {
                    "dictionaryID": "dc0d2f40bcfa11e9a2990235d2b38928",
                    "name": "100301",
                    "typeName": "手机蓝牙开门",
                    "groupName": "e_access_log"
                },
                {
                    "dictionaryID": "dc0d2f41bcfa11e9a2990235d2b38928",
                    "name": "100201",
                    "typeName": "人脸识别开门",
                    "groupName": "e_access_log"
                },
                {
                    "dictionaryID": "dc0d2f42bcfa11e9a2990235d2b38928",
                    "name": "100101",
                    "typeName": "刷门禁卡开门",
                    "groupName": "e_access_log"
                }
            ]
        }
        let ecahtxmj = {
            "responseStatus": {
                "resultCode": 0,
                "successMessage": true
            },
            "data": [
                {
                    "village": "长春小区",
                    //小区名称
                    "accessInfo": [
                        {
                            "code": "11",
                             //设备编码
                            "name": "11号楼",
                     //设备名称
                            "deviceImage": null,
                //设备图片
                            "installAddr": null,
                    //安装地址
                            "villageName": "长春小区",
                            "type": "camera",
                    //设备类型
                            "typeName": "摄像机"
               //设备类型
                        }
                    ]
                },
                {
                    "village": "田林十二村",
                    "accessInfo": [
                        {
                            "code": "310104011013010113460046",
                            "name": "46号楼",
                            "deviceImage": null,
                            "installAddr": null,
                            "villageName": "田林十二村",
                            "type": "access",
                            "typeName": "门禁"
                        }
                    ]
                }
            ]
        }
        let ecahzpjl = {    
                        "responseStatus": {
                            "resultCode": 0,
                            "successMessage": true
                        },
                        "data": [
                            {
                                "date": "2020-12-04",
                                "list": [
                                    {
    
                                        "thingCode": "",
                                        "peopleName": "",
                                        "credentialType": 0,
                                        "credentialNo": "130104197801102413",
                                        "credentialSymbol": "",
                                        "phoneNo": "",
                                        "faceCaptureTime": "2020-12-04 16:39:19",
                        //抓拍时间
                                        "faceUrl": "http://31.0.223.16:9000/blueplus/facecapture/access/2020/12/4/5b63d050362511ebae52ab2d9f144f25-1607081963.jpeg",
                            //图片
                                        "bkgUrl": "",
                                        "faceSimilarity": 0,
                                        "snapUUid": "",
                        
                                        "inOutType": 2,
                                        "address": "东边门出",
                            //抓拍地址
                                    }
                                ]
                            },
                            {
                                "date": "2020-12-03",
                                "list": []
                            }
                        ]
         }
         ecahzpjl ={"responseStatus":{"resultCode":0,"successMessage":true},"data":[{"date":"2021-02-05","list":[{"_id":"601ce18671e3f79333f17830","thirdLogID":"f5f39591677811ebaeb27d57a116d500","thingCode":"1101010030080213270008","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:11:15","faceUrl":"/blueplus/g9LogImage/f5f39590677811ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/f5f2f950677811ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":516,\"y\":247,\"width\":26,\"height\":25}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:11:18","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601ce14171e3f79333f17822","thirdLogID":"ccf29b00677811ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:10:07","faceUrl":"/blueplus/g9LogImage/ccf273f0677811ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/ccf1d7b0677811ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":224,\"y\":222,\"width\":27,\"height\":24}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:10:09","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601ce08271e3f79333f177ef","thirdLogID":"5aabd840677811ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:06:56","faceUrl":"/blueplus/g9LogImage/5aabb130677811ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/5aab14f0677811ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":245,\"y\":205,\"width\":23,\"height\":20}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:06:58","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601ce07271e3f79333f177ee","thirdLogID":"5138b761677811ebaeb27d57a116d500","thingCode":"1101010030080213270008","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:06:35","faceUrl":"/blueplus/g9LogImage/5138b760677811ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/51381b20677811ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":437,\"y\":187,\"width\":23,\"height\":24}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:06:42","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601ce06571e3f79333f177e9","thirdLogID":"4979fd41677811ebaeb27d57a116d500","thingCode":"1101010030080213270008","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:06:27","faceUrl":"/blueplus/g9LogImage/4979fd40677811ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/497939f0677811ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":398,\"y\":212,\"width\":24,\"height\":23}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:06:29","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601ce06471e3f79333f177e6","thirdLogID":"48d817f1677811ebaeb27d57a116d500","thingCode":"1101010030080213270008","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:06:26","faceUrl":"/blueplus/g9LogImage/48d817f0677811ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/48d7a2c0677811ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":348,\"y\":432,\"width\":39,\"height\":38}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:06:28","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601ce06471e3f79333f177e7","thirdLogID":"48de8091677811ebaeb27d57a116d500","thingCode":"1101010030080213270008","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:06:23","faceUrl":"/blueplus/g9LogImage/48de8090677811ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/48dde450677811ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":484,\"y\":197,\"width\":22,\"height\":20}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:06:28","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601ce05e71e3f79333f177e2","thirdLogID":"4576eb90677811ebaeb27d57a116d500","thingCode":"1101010030080213270008","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:06:15","faceUrl":"/blueplus/g9LogImage/4576c480677811ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/45764f50677811ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":393,\"y\":194,\"width\":26,\"height\":25}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:06:22","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601ce04771e3f79333f177d9","thirdLogID":"37b38360677811ebaeb27d57a116d500","thingCode":"1101010030080213270008","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:05:29","faceUrl":"/blueplus/g9LogImage/37b35c50677811ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/37b2c010677811ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":457,\"y\":172,\"width\":23,\"height\":23}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:05:59","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601ce02871e3f79333f177d2","thirdLogID":"2570fbb1677811ebaeb27d57a116d500","thingCode":"1101010030080213270008","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:05:23","faceUrl":"/blueplus/g9LogImage/2570fbb0677811ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/25703860677811ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":410,\"y\":172,\"width\":24,\"height\":23}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:05:28","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601ce02071e3f79333f177d1","thirdLogID":"205267e0677811ebaeb27d57a116d500","thingCode":"1101010030080213270008","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:05:00","faceUrl":"/blueplus/g9LogImage/205240d0677811ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/2051cba0677811ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":398,\"y\":190,\"width\":22,\"height\":22}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:05:20","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601ce00d71e3f79333f177c9","thirdLogID":"151adab0677811ebaeb27d57a116d500","thingCode":"1101010030080213270008","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:04:43","faceUrl":"/blueplus/g9LogImage/151ab3a0677811ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/151a3e70677811ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":506,\"y\":190,\"width\":23,\"height\":23}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:05:01","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cdff971e3f79333f177c2","thirdLogID":"094cb2d1677811ebaeb27d57a116d500","thingCode":"1101010030080213270008","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:04:39","faceUrl":"/blueplus/g9LogImage/094cb2d0677811ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/094c3da0677811ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":210,\"y\":215,\"width\":23,\"height\":23}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:04:41","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cdf1971e3f79333f177b8","thirdLogID":"83d9a4a1677711ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:00:54","faceUrl":"/blueplus/g9LogImage/83d9a4a0677711ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/83d90860677711ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":461,\"y\":157,\"width\":23,\"height\":23}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:00:57","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cdf0e71e3f79333f177b7","thirdLogID":"7d18d280677711ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 14:00:37","faceUrl":"/blueplus/g9LogImage/7d18ab70677711ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/7d183640677711ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":395,\"y\":166,\"width\":23,\"height\":24}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 14:00:46","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cdedf71e3f79333f177b6","thirdLogID":"61587b91677711ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:59:52","faceUrl":"/blueplus/g9LogImage/61587b90677711ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/6157df50677711ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":414,\"y\":201,\"width\":26,\"height\":26}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:59:59","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cdec171e3f79333f177b5","thirdLogID":"4f841f00677711ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:59:25","faceUrl":"/blueplus/g9LogImage/4f83f7f0677711ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/4f8382c0677711ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":383,\"y\":197,\"width\":26,\"height\":28}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:59:29","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cdea371e3f79333f177b3","thirdLogID":"3d576941677711ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:58:29","faceUrl":"/blueplus/g9LogImage/3d576940677711ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/3d56cd00677711ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":387,\"y\":185,\"width\":24,\"height\":23}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:58:59","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cde8371e3f79333f177b0","thirdLogID":"2a4e5d40677711ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:58:24","faceUrl":"/blueplus/g9LogImage/2a4e3630677711ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/2a4dc100677711ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":343,\"y\":185,\"width\":27,\"height\":28}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:58:27","virtualSpaceCode":"11010100300802","sex":1},{"_id":"601cde7e71e3f79333f177af","thirdLogID":"2776d340677711ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:58:20","faceUrl":"/blueplus/g9LogImage/2776ac30677711ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/27760ff0677711ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":368,\"y\":202,\"width\":25,\"height\":25}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:58:22","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cde7b71e3f79333f177ae","thirdLogID":"25c2e1b1677711ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:58:17","faceUrl":"/blueplus/g9LogImage/25c2e1b0677711ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/25c26c80677711ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":380,\"y\":180,\"width\":24,\"height\":23}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:58:19","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cde7571e3f79333f177ad","thirdLogID":"21ea3b61677711ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:58:08","faceUrl":"/blueplus/g9LogImage/21ea3b60677711ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/21e99f20677711ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":391,\"y\":185,\"width\":25,\"height\":24}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:58:13","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cde6f71e3f79333f177ac","thirdLogID":"1e6b9bf1677711ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:58:03","faceUrl":"/blueplus/g9LogImage/1e6b9bf0677711ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/1e6affb0677711ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":365,\"y\":194,\"width\":26,\"height\":27}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:58:07","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cde3771e3f79333f177ab","thirdLogID":"fceceec1677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:57:09","faceUrl":"/blueplus/g9LogImage/fceceec0677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/fcec7990677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":360,\"y\":190,\"width\":27,\"height\":27}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:57:11","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cde1971e3f79333f177aa","thirdLogID":"eb0f4361677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:56:22","faceUrl":"/blueplus/g9LogImage/eb0f4360677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/eb0e31f0677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":393,\"y\":202,\"width\":26,\"height\":26}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:56:41","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cddf671e3f79333f177a9","thirdLogID":"d6480ca0677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:56:03","faceUrl":"/blueplus/g9LogImage/d647e590677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/d6474950677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":480,\"y\":156,\"width\":25,\"height\":25}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:56:06","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cddeb71e3f79333f177a8","thirdLogID":"cfbffdc1677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:55:52","faceUrl":"/blueplus/g9LogImage/cfbffdc0677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/cfbf6180677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":388,\"y\":245,\"width\":29,\"height\":29}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:55:55","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cdde071e3f79333f177a7","thirdLogID":"c97a00f1677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:55:21","faceUrl":"/blueplus/g9LogImage/c97a00f0677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/c97964b0677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":414,\"y\":202,\"width\":27,\"height\":28}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:55:44","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cdd2b71e3f79333f177a3","thirdLogID":"5d3469d1677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:52:40","faceUrl":"/blueplus/g9LogImage/5d3469d0677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/5d33cd90677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":451,\"y\":109,\"width\":21,\"height\":21}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:52:43","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cdd0771e3f79333f1779f","thirdLogID":"47a59d51677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:52:05","faceUrl":"/blueplus/g9LogImage/47a59d50677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/47a50110677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":293,\"y\":202,\"width\":22,\"height\":22}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:52:07","virtualSpaceCode":"11010100300802","sex":1},{"_id":"601cdd0971e3f79333f177a1","thirdLogID":"48f500b0677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:52:05","faceUrl":"/blueplus/g9LogImage/48f4d9a0677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/48f41650677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":322,\"y\":242,\"width\":25,\"height\":24}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:52:09","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cdd0471e3f79333f1779e","thirdLogID":"464e23a1677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:52:02","faceUrl":"/blueplus/g9LogImage/464e23a0677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/464d8760677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":200,\"y\":391,\"width\":35,\"height\":31}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:52:04","virtualSpaceCode":"11010100300802","sex":1},{"_id":"601cdcf971e3f79333f17799","thirdLogID":"3fa19cd1677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:51:51","faceUrl":"/blueplus/g9LogImage/3fa19cd0677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/3fa10090677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":228,\"y\":518,\"width\":39,\"height\":35}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:51:53","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cdcf371e3f79333f17795","thirdLogID":"3bce9bd0677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:51:44","faceUrl":"/blueplus/g9LogImage/3bce74c0677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/3bce26a0677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":353,\"y\":264,\"width\":27,\"height\":25}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:51:47","virtualSpaceCode":"11010100300802","sex":1},{"_id":"601cdcee71e3f79333f17792","thirdLogID":"38aee541677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:51:40","faceUrl":"/blueplus/g9LogImage/38aee540677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/38adfae0677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":150,\"y\":425,\"width\":29,\"height\":30}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:51:42","virtualSpaceCode":"11010100300802","sex":1},{"_id":"601cdcee71e3f79333f17793","thirdLogID":"38ed26c0677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:51:40","faceUrl":"/blueplus/g9LogImage/38ecffb0677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/38ec6370677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":230,\"y\":451,\"width\":34,\"height\":32}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:51:42","virtualSpaceCode":"11010100300802","sex":1},{"_id":"601cdcdf71e3f79333f1778d","thirdLogID":"2fff6281677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:51:24","faceUrl":"/blueplus/g9LogImage/2fff6280677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/2ffec640677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":275,\"y\":258,\"width\":25,\"height\":25}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:51:27","virtualSpaceCode":"11010100300802","sex":1},{"_id":"601cdcd471e3f79333f17787","thirdLogID":"29825021677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:51:14","faceUrl":"/blueplus/g9LogImage/29825020677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/29813eb0677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":115,\"y\":282,\"width\":28,\"height\":28}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:51:16","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cdcc971e3f79333f17786","thirdLogID":"22c0e1c1677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:51:03","faceUrl":"/blueplus/g9LogImage/22c0e1c0677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/22c04580677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":203,\"y\":427,\"width\":29,\"height\":29}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:51:05","virtualSpaceCode":"11010100300802","sex":1},{"_id":"601cdcc971e3f79333f17785","thirdLogID":"22aeb951677611ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:51:02","faceUrl":"/blueplus/g9LogImage/22aeb950677611ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/22ae1d10677611ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":248,\"y\":328,\"width\":26,\"height\":23}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:51:05","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cdc1171e3f79333f17784","thirdLogID":"b539c9f0677511ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:47:44","faceUrl":"/blueplus/g9LogImage/b5397bd0677511ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/b538df90677511ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":403,\"y\":180,\"width\":22,\"height\":21}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:48:01","virtualSpaceCode":"11010100300802","sex":2},{"_id":"601cdb8e71e3f79333f17780","thirdLogID":"67107b20677511ebaeb27d57a116d500","thingCode":"1101010030080213270014","spaceCode":"","peopleName":"e2addaf973f3e95ee8bb37a9dbb4be59","credentialType":1,"credentialNo":"0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","credentialSymbol":"1_0d4b2051849c5bfece7a8eef6721411f83594116ee155c304cd941d6ddd2900f","phoneNo":"578bbcfb284ef9289ca13383ea5b443c","faceCaptureTime":"2021-02-05 13:45:47","faceUrl":"/blueplus/g9LogImage/67105410677511ebaeb27d57a116d500.jpg","bkgUrl":"/blueplus/g9LogImage/670fdee0677511ebaeb27d57a116d500.jpg","faceSimilarity":0,"snapUUid":"906a8a94dca6492fa6b3eae62ac09d25","faceRect":"{\"x\":277,\"y\":95,\"width\":19,\"height\":20}","inOutType":1,"headFeature":0,"age":42,"topTextures":0,"bottomStyle":0,"bag":0,"topColor":0,"bottomColor":0,"carryonItem":0,"hairStyle":0,"topStyle":0,"shoeStyle":0,"shoeColor":0,"address":"","rowTime":"2021-02-05 13:45:50","virtualSpaceCode":"11010100300802","sex":2}]},{"date":"2021-02-04","list":[]},{"date":"2021-02-03","list":[]},{"date":"2021-02-02","list":[]},{"date":"2021-02-01","list":[]},{"date":"2021-01-31","list":[]},{"date":"2021-01-30","list":[]},{"date":"2021-01-29","list":[]}]}
         let ecahxwgj = {
            "responseStatus": {
                "resultCode": 0,
                "successMessage": true
            },
            "data": [
                {
                    "fence": "123"
                    //每个设备的围栏坐标信息
                },
                {
                    "fence": "123"
                }
            ]
        }
        //地图mock
        let mapA = {
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
                    "extend": null
        ,                            //扩展字段        
                   "longitude":"116.401855",
                    "latitude":"39.938439"
                }
            ]
        }
        let mapB = {
            "responseStatus": {
                "resultCode": 0,
                "successMessage": true
            },
            "data": [
                {
                    "code": "1110001-出入口1",
            //摄像机编码
                    "name": "1110001-出入口1",
           //摄像机名称 
                   "longitude":"116.402148",
                    "latitude":"39.937308",
                    "relationID": "",
                    "parentCode": "",
                    "parentType": "",
                    "usingType": "",
                    "picUrl": "-",
                    "fence": "",
                    "gisType": "",
                    "description": "",
                    "extend": "",
                    "creatorID": "",
                    "updaterID": "",
                    "insertTime": "",
                    "updateTime": "",
                    "superVirtualCode": "",
                  deviceType: 'face'
                },
        //         {
        //             "code": "1110001-出入口1",
        //     //摄像机编码
        //             "name": "1110001-出入口1",
        //    //摄像机名称 
        //            "longitude":"121.425972",
        //             "latitude":"31.173213"
        //         },
        //         {
        //             "code": "1110001-出入口1",
        //     //摄像机编码
        //             "name": "1110001-出入口1",
        //    //摄像机名称 
        //            "longitude":"121.425892",
        //             "latitude":"31.172238"
        //         },
        //          {
                
        //           code: "1110001-出入口1",
        //           name: "1110001-出入口1",
        //           longitude: "121.425782",
        //           latitude: "31.173313"
        //         },
        //         {
    
        //           code: "1110001-出入口1",
        //           name: "1110001-出入口1",
        //           longitude: "121.425192",
        //           latitude: "31.172331"
        //         }
            ]
        }
    let txgj = {"responseStatus":{"resultCode":0,"successMessage":true},"data":{"coordinate":[{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.3984554619,"latitude":39.9364244298},{"longitude":116.3984554619,"latitude":39.9383997581},{"longitude":116.4019177407,"latitude":39.9383997581},{"longitude":116.3984554619,"latitude":39.9383997581},{"longitude":116.4014483952,"latitude":39.9383997581},{"longitude":116.3984554619,"latitude":39.9383997581},{"longitude":116.3984554619,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9383997581},{"longitude":116.3984554619,"latitude":39.9383997581}],"accessInfo":[]}}
    
    let zpgj = {"responseStatus":{"resultCode":0,"successMessage":true},"data":{"coordinate":[{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4014483952,"latitude":39.9377312659},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4019177407,"latitude":39.9364244298},{"longitude":116.4014483952,"latitude":39.9377312659}],"faceInfo":[]}}
    
      export default {
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/getRealPopulation':  option => {
            console.log(option)
            return realpeople
        },
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/percentageStaff':  option => {
            console.log(option)
            return rybl
        },
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/enrolmentStatistics':  option => {
            console.log(option)
            return dj
        },
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/householdStatistics':  option => {
            console.log(option)
            return hj
        },
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/accessCurrentDayList':  option => {
            console.log(option)
            return drtxlist
        },   
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/accessCurrentDay':  option => {
            console.log(option)
            return drtxrc
        },
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/currentTrafficList':  option => {
           console.log(option)
           return realFlow
       },    
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/currentTraffic':  option => {
            console.log(option)
            return ssly
        },
         'post|http://172.31.1.62:5003/api/v1/senseAlarm/newAlarm':  option => {
            console.log(option)
            return rkyj
        },
        //实有人口详情页 实有人口筛选
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/peopleSearch':  option => {
            console.log(option)
            return syrksx
        },
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/peopleInfoDetail':  option => {
            console.log(option)
            return ecahProfile
        },
        //一人一档通行记录
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/accessInfo':  option => {
            console.log(option)
            return ecahtxjl
        },
        //一人一档开门方式
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/getAccessOpenType':  option => {
            console.log(option)
            return ecahkmfs
        },
        //一人一档通行门禁
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/accessThing':  option => {
            console.log(option)
            return ecahtxmj
        },
        //一人一档抓拍记录
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/getFaceLog':  option => {
            console.log(option)
            return ecahzpjl
        },
        //一人一档行为轨迹
        // 'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/behavioralTrack':  option => {
        //         console.log(option)
        //         return ecahxwgj
        //     },
                //地图点位出入口
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/inoutInfo':  option => {
            console.log(option)
            return mapA
        },
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/flowRate':  option => {
            console.log(option)
            return mapB
        },
        'post|http://172.31.1.62:5003/api/v1/people/peoleList':  option => {
            console.log(option)
            return peopleList
        },
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/accessTrack':  option => {
            console.log(option)
            return txgj
        },
        'post|http://172.31.1.62:5003/api/v1/situationalAnalysis/behavioralTrack':  option => {
            console.log(option)
            return zpgj
        },
        }