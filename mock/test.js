let realAlarm = {
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
              "address": "东城区", // 地址
              "description": "丁香园", // 描述信息
              "alarmTime": "2020-11-19 01:51:29", // 报警信息
              "state": "已超时", // 状态
              "images": [] // 图片
          }
      ]
  }
}
export default {
   'post|/api/v1/senseAlarm/newAlarm':  option => {
    return realAlarm
   },
  }

